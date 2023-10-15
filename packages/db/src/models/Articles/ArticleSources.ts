import { date, mysqlTable, text, varchar, char } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { LinkedArticles } from './LinkedArticles';

export const ArticleSources = mysqlTable('article_sources', {
  id: char('id', { length: 26 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  url: varchar('url', { length: 512 }).notNull().unique('unique_article_src_url')
});

export const ArticleSourceRelations = relations(ArticleSources, ({ many }) => ({
  articles: many(LinkedArticles)
}));
