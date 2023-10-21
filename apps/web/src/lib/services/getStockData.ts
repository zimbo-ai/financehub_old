import fetch from 'node-fetch';

export type StockDataInterval =
  | '1m'
  | '2m'
  | '5m'
  | '15m'
  | '30m'
  | '60m'
  | '90m'
  | '1h'
  | '1d'
  | '5d'
  | '1wk'
  | '1mo'
  | '3mo';

const StockDataIntervalSeconds: Record<StockDataInterval, number> = {
  '1m': 60,
  '2m': 120,
  '5m': 300,
  '15m': 900,
  '30m': 1800,
  '60m': 3600,
  '90m': 5400,
  '1h': 3600,
  '1d': 86400,
  '5d': 432000,
  '1wk': 604800,
  '1mo': 2592000,
  '3mo': 7776000
};

export interface StockData {
  currency: string;
  symbol: string;
  exchangeName: string;
  instrumentType: string;
  previousClose: number;
  interval: number;
  currentTradingPeriod: {
    timezone: string;
    start: number;
    end: number;
    gmtoffset: number;
  };
  OHLCVData: {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjClose: number | null;
  }[];
}

export default async function getStockData(
  ticker: string,
  startPeriod: number,
  endPeriod: number,
  interval: StockDataInterval
): Promise<StockData> {
  const requestURL = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURI(
    ticker
  )}?symbol=${ticker}&period1=${startPeriod}&period2=${endPeriod}&interval=${interval}`;

  let chartData: StockData = {
    currency: '',
    symbol: '',
    exchangeName: '',
    instrumentType: '',
    previousClose: 0,
    interval: StockDataIntervalSeconds[interval],
    currentTradingPeriod: {
      timezone: '',
      start: 0,
      end: 0,
      gmtoffset: 0
    },

    OHLCVData: []
  };

  try {
    console.error('fetching:', requestURL);
    const data: any = await fetch(requestURL).then((resp) => resp.json());

    //TODO: Add error handling for invalid ticker

    chartData.currency = data.chart.result[0].meta.currency;
    chartData.symbol = data.chart.result[0].meta.symbol;
    chartData.exchangeName = data.chart.result[0].meta.exchangeName;
    chartData.instrumentType = data.chart.result[0].meta.instrumentType;
    chartData.previousClose = data.chart.result[0].meta.chartPreviousClose;
    chartData.currentTradingPeriod = data.chart.result[0].meta.currentTradingPeriod.regular;

    data.chart.result[0]?.timestamp.forEach((timestamp: number, index: number) => {
      chartData.OHLCVData.push({
        timestamp,
        open: data.chart.result[0].indicators.quote[0].open[index],
        high: data.chart.result[0].indicators.quote[0].high[index],
        low: data.chart.result[0].indicators.quote[0].low[index],
        close: data.chart.result[0].indicators.quote[0].close[index],
        volume: data.chart.result[0].indicators.quote[0].volume[index],
        adjClose: data.chart.result[0].indicators?.adjclose
          ? data.chart.result[0].indicators.adjclose[0]?.adjclose[index]
          : null
      });
    });
    return chartData;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
