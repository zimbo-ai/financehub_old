import type { UserAccount, AuthProvider } from 'db/src/models/Accounts/UserAccounts';
import { ulid } from 'ulid';
import DB, { Models, type Transaction } from 'db';
import { eq } from 'drizzle-orm';
import Errors from 'errors';
import type { UserProfile } from 'db/src/models/Accounts/UserProfiles';

export default async function getUserProfile(userProfileID: string): Promise<UserProfile> {
  try {
    const userProfile = (
      await DB.select().from(Models.UserProfiles).where(eq(Models.UserProfiles.id, userProfileID))
    )[0];
    if (!userProfile) throw Errors.Account.noSuchUserExists();

    return userProfile;
  } catch (e: any) {
    throw e;
  }
}
