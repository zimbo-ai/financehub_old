import getStockData from '../../lib/services/getStockData';
import type { PageServerLoad } from './$types';

const handler: PageServerLoad = async () => {
  const tickers = ['^GSPC', '^DJI', '^IXIC', 'CL=F'];

  const currentTimestamp = Date.now() / 1000;

  try {
    return {
      lazy: {
        stockData: Promise.all(
          tickers.map((ticker) =>
            getStockData(
              ticker,
              Math.floor(currentTimestamp - 24 * 60 * 60 * 7),
              Math.floor(currentTimestamp),
              '15m'
            )
          )
        ),
        articles: {
          featuredArticle: ''
        }
      }
    };
  } catch (err) {
    return {
      stockData: null
    };
  }
};

export const load = handler;
