import Errors from 'errors';
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

  let ids = {
    userProfileId: ulid(),
    accountId: ulid()
  };

  try {
    await DB.transaction(async (tx: Transaction) => {
      //for some reason, promise.all doesn't work here

      await Services.createUserProfile({
        Tx: tx,
        id: ids.userProfileId,
        username,
        email
      });
      await Services.createUserAccount({
        Tx: tx,
        id: ids.accountId,
        userProfileId: ids.userProfileId,
        passwordHash,
        authProvider: 'CREDENTIALS'
      });
      await Services.createSession({
        Tx: tx,
        userProfileId: ids.userProfileId,
        userAccountId: ids.accountId,
        ipAddress: getClientAddress(),
        userAgent: request.headers.get('user-agent') ?? undefined,
        setCookie: cookies.set
      });

      success = true;
      throw redirect(301, redirectTo);
    });
  } catch (e: any) {
    if (!success) cookies.delete('fh_ses');
    console.log(e);
    throw e;
  }
};

export const actions: Actions = {
  default: ErrorHandler.Action(handler)
};
