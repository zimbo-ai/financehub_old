import _BaseError from './_BaseError';

export default class AccountError extends _BaseError {
  public static readonly ERR_MSG_INVALID_EMAIL = 'The email you provided is invalid.';
  public static readonly ERR_MSG_INVALID_USERNAME = 'The username you provided is invalid.';
  public static readonly ERR_MSG_WEAK_PASSWORD = 'The password you provided is too weak.';
  public static readonly ERR_NO_SUCH_USER_EXISTS = 'A user with those details could not be found.';
  public static readonly ERR_USERNAME_TAKEN = 'This username is already taken.';
  public static readonly ERR_EMAIL_TAKEN = 'This email is already taken.';

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

  static noSuchUserExists() {
    return new AccountError(this.ERR_NO_SUCH_USER_EXISTS, 404);
  }

  static usernameTaken() {
    return new AccountError(this.ERR_USERNAME_TAKEN, 400);
  }

  static emailTaken() {
    return new AccountError(this.ERR_EMAIL_TAKEN, 400);
  }
}
