import type { UserAccount, AuthProvider } from 'db/src/models/Accounts/UserAccounts';
import { ulid } from 'ulid';
import DB, { Models, type Transaction } from 'db';
interface CreateUserUserAccountParams {
  Tx?: Transaction;
  id?: string;
  userProfileId: string;
  passwordHash?: string;
  authProvider: AuthProvider;
}

export default async function createUserAccount(
  params: CreateUserUserAccountParams
): Promise<UserAccount> {
  const account: UserAccount = {
    id: params.id ?? ulid(),
    createdAt: new Date(Date.now()),
    lastLogin: new Date(Date.now()),
    authProvider: params.authProvider,
    passwordHash: params.passwordHash ?? null,
    userProfileId: params.userProfileId
  };

  try {
    params.Tx
      ? await params.Tx.insert(Models.UserAccounts).values(account).execute()
      : await DB.insert(Models.UserAccounts).values(account).execute();
  } catch (e: any) {
    throw e;
  }

  return account;
}
