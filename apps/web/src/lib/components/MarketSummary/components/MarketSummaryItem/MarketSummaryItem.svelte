<script lang="ts">    
    import Text from '$lib/components/Text';
    import {Line} from 'svelte-chartjs';
    import ChartjsAnnotation from 'chartjs-plugin-annotation';
    import type { StockData } from "../../../../services/getStockData";
    import { _chartData, _chartOptions } from '.';
    
    
    import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler,
    LogarithmicScale
  } from 'chart.js';
      
  export let stockData:StockData;

    ChartJS.register(
        Title,
        Tooltip,
        LogarithmicScale,
        Filler,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
        ChartjsAnnotation
    );    
    ChartJS.registry.plugins.register(ChartjsAnnotation);    

    const change: number =
        ((stockData.OHLCVData[stockData.OHLCVData.length - 1].close - stockData.previousClose) /
            stockData.previousClose) *
        100;
</script>


<div class="market-summary-item__container">
    <div class= "market-summary-item__inner-container">
        <Text class= "market-summary-item__symbol" color="accent">
            <a href="/">{stockData.symbol}</a>
        </Text>
        <Text size="sm">
            {stockData.OHLCVData[stockData.OHLCVData.length -1].close.toFixed(2)}
        </Text>
        <Text 
            size="sm"
            color={change > 0 ? "green" : "red"}>
            {change > 0 ? "+" : ""}{change.toFixed(2)}%
        </Text>
    </div>

    <div class="chart-container">
        <Line
        id="chart"
        data={_chartData(stockData)}
        plugins={[ChartjsAnnotation]}
        options={_chartOptions(stockData)}
      />
    </div>
</div>

<style>
    .market-summary-item__container{
        --market-summary-item__container--border-color: var(--grey-200);
        --market-summary-item__container--border-radius: var(--border-radius-md);
        display: flex;
        height:fit-content;
        align-items: center;
        justify-content: center;
        width: fit-content;
        min-width: max-content;
        padding-inline: var(--space-md);
        border:1px solid var(--market-summary-item__container--border-color);
        border-radius: var(--market-summary-item__container--border-radius);
        gap: var(--space-md);
    }
    
    .market-summary-item__inner-container{
        display: flex;
        flex-direction: column;
    }

    :global(.market-summary-item__symbol){
        margin-bottom: var(--space-xs);
    }
    
    a:hover{
        text-decoration: underline;
    }
    
    .chart-container{
        height:80px;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>