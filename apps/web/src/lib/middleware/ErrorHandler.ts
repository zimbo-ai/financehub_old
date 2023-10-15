import _BaseError from '$lib/errors/errors/_BaseError';
import { fail, type Action, type RequestHandler, json } from '@sveltejs/kit';

interface ErrorObject {
  status: number;
  message: string;
}

export default class ErrorHandler {
  static Action: (handler: any) => Action<any> = (handler) => {
    return ErrorHandler._wrapInTryCatch<Action<any>>(handler, (e) => {
      const { status, message } = ErrorHandler._getErrorObject(e);
      return fail(status, { status: 'error', message });
    });
  };

  static RequestHandler: (handler: any) => RequestHandler<any> = (handler) => {
    return ErrorHandler._wrapInTryCatch<Action<any>>(handler, (e) => {
      const { status, message } = ErrorHandler._getErrorObject(e);
      return json({ status: 'error', message }, { status: status });
    });
  };

  private static _getErrorObject: (e: any) => ErrorObject = (e) => {
    if (e instanceof _BaseError) return e.getError();
    console.error(e);
    return {
      status: 500,
      message: 'An internal server error occurred.  Please try again later.'
    };
  };

  private static _wrapInTryCatch: <T>(
    handler: T & CallableFunction,
    onError: (e: any) => any
  ) => any =
    (handler, onError) =>
    async (...args: any) => {
      try {
        return await handler(...args);
      } catch (e: any) {
        if (e?.location !== undefined) {
          throw e;
        }
        return onError(e);
      }
    };
}
