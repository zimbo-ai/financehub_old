import type { UserProfile } from 'db/src/models/Accounts/UserProfiles';
import { writable } from 'svelte/store';

export let userProfile = writable<UserProfile | null | undefined>(undefined);
