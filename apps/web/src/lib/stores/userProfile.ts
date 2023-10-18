import type { UserProfile } from 'db/src/models/Accounts/UserProfiles';
import { writable } from 'svelte/store';

let userProfile = writable<UserProfile | null | undefined>(undefined);
export default userProfile;
export { userProfile };
