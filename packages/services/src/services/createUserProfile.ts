import { ulid } from 'ulid';
import DB, { Models, type Transaction } from 'db';
import type { UserProfile } from 'db/src/models/Accounts/UserProfiles';

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
      ? await params.Tx.insert(Models.UserProfiles).values(userProfile)
      : await DB.insert(Models.UserProfiles).values(userProfile);
  } catch (e: any) {
    throw e;
  }

  return userProfile;
}
