import { date, mysqlTable, text, varchar, char } from 'drizzle-orm/mysql-core';

export const OriginalArticles = mysqlTable('original_articles', {
  id: char('id', { length: 26 }).primaryKey(),
  publishedAt: date('published_at').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull()
});
