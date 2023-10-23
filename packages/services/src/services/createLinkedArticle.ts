import { ulid } from 'ulid';
import DB, { Models, type Transaction } from 'db';
import { LinkedArticle } from 'db/src/models/Articles/LinkedArticles';

interface CreateLinkedArticleParams {
  Tx?: Transaction;

  publishedAt: Date;
  title: string;
  url: string;
  imageSrc: string;
  description: string;
  content: string | null;
  sourceID: string;
  keywords: string;
  countries: string;
  categories: string;
}

export default async function createLinkedArticle(
  params: CreateLinkedArticleParams
): Promise<LinkedArticle> {
  const linkedArticle: LinkedArticle = {
    id: ulid(),
    publishedAt: params.publishedAt,
    title: params.title,
    url: params.url,
    imageSrc: params.imageSrc,
    description: params.description,
    content: params.content,
    sourceID: params.sourceID,
    keywords: params.keywords,
    countries: params.countries,
    categories: params.categories
  };

  try {
    params.Tx
      ? await params.Tx.insert(Models.LinkedArticles).values(linkedArticle).execute()
      : await DB.insert(Models.LinkedArticles).values(linkedArticle).execute();
  } catch (e: any) {
    throw e;
  }

  return linkedArticle;
}
