import { date, mysqlTable, text, varchar, char, mysqlEnum } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { UserProfiles } from '../Accounts/UserProfiles';
import { UserAccounts } from '../Accounts/UserAccounts';

export const Sessions = mysqlTable('sessions', {
  id: char('id', { length: 26 }).primaryKey(),
  userAccountId: char('user_account_id', { length: 26 }).notNull(),
  userProfileId: char('user_profile_id', { length: 26 }).notNull(),
  createdAt: date('created_at').notNull(),
  expiresAt: date('expires_at').notNull(),
  userAgent: varchar('user_agent', { length: 512 }),
  ipAddress: varchar('ip_address', { length: 64 })
});

export const SessionRelations = relations(Sessions, ({ one }) => ({
  userAccount: one(UserAccounts, {
    fields: [Sessions.userAccountId],
    references: [UserAccounts.id]
  }),
  userProfile: one(UserProfiles, {
    fields: [Sessions.userProfileId],
    references: [UserProfiles.id]
  })
}));

export type Session = typeof Sessions.$inferSelect;
