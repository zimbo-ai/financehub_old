import { date, mysqlTable, text, varchar, char, mysqlEnum } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { UserAccounts } from './UserAccounts';

export const UserProfiles = mysqlTable('user_profiles', {
  id: char('id', { length: 26 }).primaryKey(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  fullName: varchar('full_name', { length: 255 }),
  profileImgUrl: varchar('profile_img_url', { length: 512 }),
  emailVerifiedAt: date('email_verified_at')
});

export const ProfileAccountRelations = relations(UserProfiles, ({ one }) => ({
  UserAccount: one(UserAccounts)
}));

export type UserProfile = typeof UserProfiles.$inferSelect;
