import dotenv from 'dotenv';
import ogs from 'open-graph-scraper';

dotenv.config();

async function getArticles({ country }: GetArticlesParams): Promise<GetArticlesResponse[]> {
  const url: string = `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_DATA_IO_API_KEY}&${
    country?.length ? 'country=' + country.join(',') : ''
  }language=en&category=business`;

  try {
    const newsDataIOResponse: NewsDataIOAPIResult[] = (await (await fetch(url)).json()).results;
    return Promise.all(
      newsDataIOResponse.map(async (newsDataArticle: NewsDataIOAPIResult) => {
        return {
          title: newsDataArticle.title,
          url: newsDataArticle.link,
          description: newsDataArticle.description,
          content: newsDataArticle.content,
          imageSrc: newsDataArticle.image_url ?? (await getOGImageURL(newsDataArticle.link)),
          publishedAt: newsDataArticle.pubDate,
          source: {
            name: newsDataArticle.source_id,
            url: newsDataArticle.link
          },
          keywords: newsDataArticle.keywords,
          countries: newsDataArticle.country,
          categories: newsDataArticle.category
        } as GetArticlesResponse;
      })
    );
  } catch (e) {
    throw e;
  }
}

async function getOGImageURL(url: string): Promise<string> {
  try {
    const { result } = await ogs({ url });
    if (!result) return '';
    return result?.ogImage?.url;
  } catch (e) {
    return '';
  }
}

interface GetArticlesResponse {
  title: string;
  url: string;
  description: string;
  content: string | null;
  imageSrc: string;
  publishedAt: Date;
  source: {
    name: string;
    url: string;
  };
  keywords: string[];
  countries: string[];
  categories: string[];
}

interface NewsDataIOAPIResult {
  article_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url: string;
  description: string;
  content: string;
  pubDate: Date;
  image_url: string;
  source_id: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
}

interface GetArticlesParams {
  country: string[] | null;
}

export default getArticles;
