import { ulid } from 'ulid';
import DB, { Models, type Transaction } from 'db';
import type { UserProfile } from 'db/src/models/Accounts/UserProfiles';
import Errors from 'errors';

interface CreateUserProfileParams {
  Tx?: Transaction;
  id?: string;
  username: string;
  email: string;
  emailVerifiedAt?: Date;
}

export default async function createUserProfile(
  params: CreateUserProfileParams
): Promise<UserProfile> {
  const userProfile: UserProfile = {
    id: params.id ?? ulid(),
    username: params.username,
    email: params.email,
    fullName: null,
    profileImgUrl: null,
    emailVerifiedAt: params.emailVerifiedAt ?? null
  };

  try {
    params.Tx
      ? await params.Tx.insert(Models.UserProfiles).values(userProfile).execute()
      : await DB.insert(Models.UserProfiles).values(userProfile).execute();
  } catch (e: any) {
    if (e.message.includes('Duplicate entry')) {
      if (e.message.includes('user_profiles.user_profiles_username_unique')) {
        throw Errors.Account.usernameTaken();
      }
      if (e.message.includes('user_profiles.user_profiles_email_unique')) {
        throw Errors.Account.emailTaken();
      }
    }
    throw e;
  }

  return userProfile;
}
