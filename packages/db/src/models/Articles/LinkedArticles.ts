import { date, mysqlTable, text, varchar, char } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { ArticleSources } from './ArticleSources';

export const LinkedArticles = mysqlTable('linked_articles', {
  id: char('id', { length: 26 }).primaryKey(),
  publishedAt: date('published_at').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  url: varchar('url', { length: 512 }).notNull().unique('unique_article_url'),
  imageSrc: varchar('image_src', { length: 1024 }).notNull(),
  description: text('description').notNull(),
  content: text('content').notNull(),
  sourceID: char('source_id', { length: 26 }).notNull()
});

export const LinkedArticlesRelations = relations(LinkedArticles, ({ one }) => ({
  source: one(ArticleSources, {
    fields: [LinkedArticles.sourceID],
    references: [ArticleSources.id]
  })
}));
