import Errors from '$lib/errors';
import Validate from '$lib/utils/Validate';
import type { Action, Actions } from './$types';
import DB, { type Transaction } from 'db';
import bcrypt from 'bcryptjs';
import { ulid } from 'ulid';
import Services from 'services';
import { redirect } from '@sveltejs/kit';
import ErrorHandler from '$lib/middleware/ErrorHandler';

const handler: Action = async ({ request, cookies, getClientAddress, url }) => {
  const formData = await request.formData();
  const redirectTo = url.searchParams.get('redirectTo') ?? '/';
  let success: boolean = false;

  const email: string = formData.get('email')?.toString().trim() ?? '';
  const username: string = formData.get('username')?.toString().toLocaleLowerCase().trim() ?? '';
  const password: string = formData.get('password')?.toString() ?? '';

  if (!email || !username || !password) throw Errors.General.incompleteRequest();

  if (!Validate.email(email).isValid) throw Errors.Account.invalidEmail();
  if (!Validate.username(username).isValid) throw Errors.Account.invalidUsername();
  if (!Validate.password(password).isValid) throw Errors.Account.weakPassword();

  const passwordHash: string = await bcrypt.hash(password, await bcrypt.genSalt());

  try {
    let ids = {
      userProfileId: ulid(),
      accountId: ulid()
    };

    await DB.transaction(async (tx: Transaction) => {
      const userAccountPromise = Services.createUserAccount({
        Tx: tx,
        id: ids.accountId,
        userProfileId: ids.userProfileId,
        passwordHash,
        authProvider: 'CREDENTIALS'
      });

      const userProfilePromise = Services.createUserProfile({
        Tx: tx,
        id: ids.userProfileId,
        username,
        email
      });

      const createSessionPromise = Services.createSession({
        Tx: tx,
        userProfileId: ids.userProfileId,
        userAccountId: ids.accountId,
        ipAddress: getClientAddress(),
        userAgent: request.headers.get('user-agent') ?? undefined,
        setCookie: cookies.set
      });

      const createUserPromises: Promise<any>[] = [
        userAccountPromise,
        userProfilePromise,
        createSessionPromise
      ];

      await Promise.all(createUserPromises);
    });
    success = true;
    throw redirect(301, redirectTo);
  } catch (e: any) {
    if (!success) cookies.delete('fh_ses');
    throw e;
  }
};

export const actions: Actions = {
  default: ErrorHandler.Action(handler)
};
