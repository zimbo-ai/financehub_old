import { date, mysqlTable, text, varchar, char, mysqlEnum } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { UserProfiles } from './UserProfiles';

export const UserAccounts = mysqlTable('user_accounts', {
  id: char('id', { length: 26 }).primaryKey(),
  createdAt: date('created_at').notNull(),
  lastLogin: date('last_login').notNull(),
  authProvider: mysqlEnum('auth_provider', ['CREDENTIALS', 'GOOGLE']).notNull(),
  passwordHash: varchar('password_hash', { length: 255 }),
  userProfileId: char('user_profile_id', { length: 26 }).notNull()
});

export const AccountProfileRelations = relations(UserAccounts, ({ one }) => ({
  userProfile: one(UserProfiles, {
    fields: [UserAccounts.userProfileId],
    references: [UserProfiles.id]
  })
}));

export type AuthProvider = 'CREDENTIALS' | 'GOOGLE';
export type UserAccount = typeof UserAccounts.$inferSelect;
