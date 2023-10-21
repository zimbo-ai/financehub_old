import type { StockData } from '$lib/services/getStockData';
import type { ChartData, ChartOptions } from 'chart.js';
import imputeMissingVals from '$lib/helpers/imputeMissingVals';

export const _chartOptions: (stockData: StockData) => ChartOptions<'line'> = (stockData) => {
  const data: number[] = stockData.OHLCVData.map((d) => d.close);

  const dataMin: number = Math.min(...data);
  const dataMax: number = Math.max(...data);
  const padding: number = (dataMax - dataMin) * 0.1;

  return {
    borderColor: '#bdbdbd',
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {
          yaxis0: {
            type: 'line',
            scaleID: 'y-axis-0',
            value: 0,
            xMin: Number.NEGATIVE_INFINITY,
            xMax: Number.POSITIVE_INFINITY,
            yMin: stockData.previousClose,
            yMax: stockData.previousClose,
            borderColor: '#bdbdbd',
            borderDash: [2, 4],
            borderWidth: 1
          }
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        min: dataMin - padding,
        max: dataMax + padding,
        display: false,
        type: 'logarithmic'
      }
    }
  };
};

export const _chartData: (stockData: StockData) => ChartData<'line', number[]> = (stockData) => {
  const labels: String[] = Array(
    Math.floor(
      (stockData.currentTradingPeriod.end - stockData.currentTradingPeriod.start) /
        stockData.interval
    )
  ).fill('');
  const data: number[] = imputeMissingVals(stockData.OHLCVData.map((d) => d.close));
  const change: number =
    ((stockData.OHLCVData[stockData.OHLCVData.length - 1].close - stockData.previousClose) /
      stockData.previousClose) *
    100;

  return {
    labels,
    datasets: [
      {
        data,
        fill: true,
        // backgroundColor: change > 0 ? '#00bf3677' : '#f4433677',
        backgroundColor: (context) => {
          const bgColorGreen = [
            '#00bf36aa',
            '#00bf36aa',
            '#00bf3688',
            '#00bf3644',
            '#00bf3622',
            '#00bf3611',
            '#00bf3600'
          ];
          const bgColorRed = [
            '#f44336aa',
            '#f4433688',
            '#f4433666',
            '#f4433644',
            '#f4433622',
            '#f4433611',
            '#f4433600'
          ];

          if (!context.chart.chartArea) return;
          const {
            ctx,
            data,
            chartArea: { top, bottom }
          } = context.chart;
          const gradient = ctx.createLinearGradient(0, top, 0, bottom);

          if (change > 0)
            bgColorGreen.forEach((color, index) => {
              gradient.addColorStop(index / 6, color);
            });

          if (change < 0)
            bgColorRed.forEach((color, index) => {
              gradient.addColorStop(index / 6, color);
            });

          return gradient;
        },
        borderWidth: 1,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderColor: change > 0 ? '#00bf36' : '#f44336',
        borderJoinStyle: 'bevel',
        pointBorderColor: 'rgb(205, 130,1 58)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 1,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 0
      }
    ]
  };
};
