import { date, mysqlTable, text, varchar, char, mysqlEnum, index } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { UserAccounts } from './UserAccounts';

export const UserProfiles = mysqlTable(
  'user_profiles',
  {
    id: char('id', { length: 26 }).primaryKey(),
    username: varchar('username', { length: 255 }).notNull().unique(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    fullName: varchar('full_name', { length: 255 }),
    profileImgUrl: varchar('profile_img_url', { length: 512 }),
    emailVerifiedAt: date('email_verified_at')
  },
  (t) => {
    return {
      usernameIndex: index('username_index').on(t.username),
      emailIndex: index('email_index').on(t.email)
    };
  }
);

export const ProfileAccountRelations = relations(UserProfiles, ({ one }) => ({
  UserAccount: one(UserAccounts)
}));

export type UserProfile = typeof UserProfiles.$inferSelect;
