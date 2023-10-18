import _BaseError from './_BaseError';

export default class GeneralError extends _BaseError {
  public static readonly ERR_MSG_INCOMPLETE_REQ = 'The data within your request is incomplete.';

  constructor(message: string, status: number) {
    super('GeneralError', message, status);
  }

  static incompleteRequest() {
    return new GeneralError(this.ERR_MSG_INCOMPLETE_REQ, 400);
  }
}
