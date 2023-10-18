import AccountError from './errors/AccountError';
import AuthError from './errors/AuthError';
import GeneralError from './errors/GeneralError';
import _BaseError from './errors/_BaseError';

namespace Errors {
  export const _Base = _BaseError;
  export const Account = AccountError;
  export const General = GeneralError;
  export const Auth = AuthError;
}

export default Errors;
