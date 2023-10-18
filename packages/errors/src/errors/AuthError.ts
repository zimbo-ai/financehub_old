import _BaseError from './_BaseError';

export default class AuthError extends _BaseError {
  public static readonly ERR_USER_NOT_LOGGED_IN = 'You are not logged in.';

  constructor(message: string, status: number) {
    super('AuthError', message, status);
  }

  static userNotLoggedIn() {
    return new AuthError(this.ERR_USER_NOT_LOGGED_IN, 400);
  }
}
