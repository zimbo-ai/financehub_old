import getStockData from '../../lib/services/getStockData';
import type { PageServerLoad } from './$types';

const handler: PageServerLoad = async () => {
  const tickers = ['^GSPC', '^DJI', '^IXIC', '^RUT', 'CL=F', 'EURUSD=X'];

  const currentTimestamp = Date.now() / 1000;

  try {
    return {
      lazy: {
        stockData: Promise.all(
          tickers.map(
            async (ticker) =>
              await getStockData(
                ticker,
                Math.floor(currentTimestamp - 24 * 60 * 60),
                Math.floor(currentTimestamp),
                '5m'
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
