import _BaseError from './_BaseError';

export default class AccountError extends _BaseError {
  public static readonly ERR_MSG_INVALID_EMAIL = 'The email you provided is invalid.';
  public static readonly ERR_MSG_INVALID_USERNAME = 'The username you provided is invalid.';
  public static readonly ERR_MSG_WEAK_PASSWORD = 'The password you provided is too weak.';

  constructor(message: string, status: number) {
    super('AccountError', message, status);
  }

  static invalidEmail() {
    return new AccountError(this.ERR_MSG_INVALID_EMAIL, 400);
  }

  static invalidUsername() {
    return new AccountError(this.ERR_MSG_INVALID_USERNAME, 400);
  }

  static weakPassword() {
    return new AccountError(this.ERR_MSG_WEAK_PASSWORD, 400);
  }
}
