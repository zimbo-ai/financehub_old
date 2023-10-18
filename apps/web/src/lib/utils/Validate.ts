import Errors from 'errors';
import { z } from 'zod';

type ValidateResponse = {
  isValid: boolean;
  message: string | null;
};

export default class Validate {
  static email(email: string): ValidateResponse {
    return z.string().email().safeParse(email).success
      ? {
          isValid: true,
          message: null
        }
      : {
          isValid: false,
          message: Errors.Account.ERR_MSG_INVALID_EMAIL
        };
  }

  static username(username: string): ValidateResponse {
    return (
      z
        .string()
        .min(3)
        .max(20)
        .regex(/^(?![._])[a-zA-Z0-9._]{3,30}$/)
        // The username must start with a letter or number.
        // The username can contain letters, numbers, periods (.), and underscores (_).
        // The username cannot start or end with a period or underscore.
        // The username must be between 3 and 30 characters long.
        .safeParse(username).success
        ? {
            isValid: true,
            message: null
          }
        : {
            isValid: false,
            message: Errors.Account.ERR_MSG_INVALID_USERNAME
          }
    );
  }

  static password(password: string): ValidateResponse {
    return (
      z
        .string()
        .min(8)
        .max(1000)
        .regex(/\d/)

        // At least one lowercase character
        // At least one digit
        // At least 8 characters long
        .safeParse(password).success
        ? {
            isValid: true,
            message: null
          }
        : {
            isValid: false,
            message: Errors.Account.ERR_MSG_WEAK_PASSWORD
          }
    );
  }
}
