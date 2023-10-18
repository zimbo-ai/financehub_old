import type { UserAccount, AuthProvider } from 'db/src/models/Accounts/UserAccounts';
import { ulid } from 'ulid';
import DB, { Models, type Transaction } from 'db';
import { eq } from 'drizzle-orm';
import type { Session } from 'db/src/models/Session/Session';
import Errors from 'errors';

export default async function getSession(sessionID: string): Promise<Session> {
  try {
    const session = (
      await DB.select().from(Models.Sessions).where(eq(Models.Sessions.id, sessionID))
    )[0];
    if (!session) throw Errors.Auth.userNotLoggedIn();
    return session;
  } catch (e: any) {
    throw e;
  }
}
