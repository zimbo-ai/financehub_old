<script lang="ts">
    import {Line} from 'svelte-chartjs';
    import ChartjsAnnotation from 'chartjs-plugin-annotation';

    import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    ChartData,
    Filler
  } from 'chart.js';
    import { onMount } from 'svelte';
    
  ChartJS.register(
    Title,
    Tooltip,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    ChartjsAnnotation
  );

  ChartJS.registry.plugins.register(ChartjsAnnotation);

type Interval = "1m" | "5m" | "15m" | "30m" | "60m" | "1d" | "1wk" | "1mo" | "3mo";

interface StockData {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjClose: number;
}

  export let ticker:string = "^GSPC";
  export let startPeriod:number = Math.floor((Date.now() - 1000 * 60 * 60 * 24 * 7) / 1000);
  export let endPeriod:number = Math.floor(Date.now() /1000);
  export let interval: Interval = "1d";

  let data:number[] =[];
  let labels:string[] = [];

    async function getChartData(ticker:string, startPeriod:number, endPeriod:number, interval: Interval):Promise<StockData[]>{
    const requestURL = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?symbol=${ticker}&period1=${startPeriod}&period2=${endPeriod}&interval=${interval}`;
    let chartData:StockData[] = [];

    try{
        const jsonData = await fetch(requestURL).then((resp)=>resp.json());
        
        console.log("coo", jsonData)
        jsonData.chart.result[0].timestamp.forEach((timestamp:number, index:number) => {
            chartData.push({
                timestamp,
                open: jsonData.chart.result[0].indicators.quote[0].open[index],
                high: jsonData.chart.result[0].indicators.quote[0].high[index],
                low: jsonData.chart.result[0].indicators.quote[0].low[index],
                close: jsonData.chart.result[0].indicators.quote[0].close[index],
                volume: jsonData.chart.result[0].indicators.quote[0].volume[index],
                adjClose: jsonData.chart.result[0].indicators.adjclose[0].adjclose[index],
            })
        });
        
        return chartData;
    }
    catch(e){
        throw e;

        return [];
    }
}

  onMount(()=>{
    getChartData(ticker, startPeriod, endPeriod, interval).then((chartData:StockData[])=>{
        chartData.forEach((dataPoint:StockData)=>{
            data.push(dataPoint.close);
            labels.push(dataPoint.timestamp.toString());
        })
    })
  })
  
  $:console.log(data)
  $:console.log(labels)
  const chartData:ChartData<"line"> = {
  labels,
  datasets: [
      {
        data:data,

      fill: {
        target:"origin",
        above: 'rgba(0, 255,0,0.2)',
        below: 'rgba(225, 0,0,0.5)',

      },
      borderWidth: 1,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle:'bevel',
      pointBorderColor: 'rgb(205, 130,1 58)',
      pointBackgroundColor: 'rgb(255, 255, 255)',
      pointBorderWidth: 1,
      pointHoverRadius: 1,
      pointHoverBackgroundColor: 'rgb(0, 0, 0)',
      pointHoverBorderColor: 'rgba(220, 220, 220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 0,
      pointHitRadius: 0,
        
    },
   
  ],
};



</script>

<div class="cont">
    <div class= "inner-cont"
    >
        <a href="/">
            S&P 500
        </a>
        <span class="price">
            4,273.47
        </span>
        <span
            class="change"
        >
            +0.33%
        </span>
    </div>

    <div class="chart-container">
        <Line
        id="chart"
       data={chartData}
        plugins={[ChartjsAnnotation]}
        options={{
            borderColor: '#bdbdbd',
            maintainAspectRatio: true,
            plugins: {
                annotation:{
                    annotations: {
                        
                        yaxis0: {
                            type: 'line',
                           scaleID:'y-axis-0',
                            value:0,
                            xMin: Number.NEGATIVE_INFINITY,
                            xMax: Number.POSITIVE_INFINITY,
                            yMin: 0,
                            yMax:0,
                            borderColor: '#bdbdbd',
                            borderDash: [2, 4],
                            borderWidth: 1,
                            
                        },
                    },
                },
                legend: {
                display: false,
                },
                
            },
            scales: {         
                x: {
                    display:false,
                },
                y:{     
                    display: false,
                }
            },
        }}
      />
    </div>
</div>

<style>
    a{
        text-decoration: none;
        color: var(--indigo-400-accent);
        font-weight: 500;
        font-size: var(--font-size-md);
        margin-bottom: var(--space-xs);
    }
    a:hover{
        text-decoration: underline;
    }

    .price{
        font-weight: 600;
        color: var(--text-color);
        font-size: var(--font-size-sm);
    }

    .cont{
        display: flex;
        height:fit-content;
        align-items: center;
        justify-content: center;
        background: white;
        width: fit-content;
        min-width: max-content;
        padding-inline: var(--space-md);
        border:1px solid var(--grey-200);
        border-radius: var(--border-radius-md);
        gap: var(--space-md);
    }
    .inner-cont{
        display: flex;
        flex-direction: column;
    }
    span{
        line-height: var(--line-height-tight);
    }

    .change{
        color: green;
        font-weight: 500;
        font-size: var(--font-size-sm);
    }
    .chart-container{
        height:80px;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>