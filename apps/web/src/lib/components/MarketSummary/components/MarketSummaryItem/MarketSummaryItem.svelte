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
    import imputeMissingVals from '$lib/helpers/imputeMissingVals';
      
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

    const imputedCloseVals: number[] = imputeMissingVals(stockData.OHLCVData.map((d) => d.close));
    const change: number =
        ((imputedCloseVals[imputedCloseVals.length - 1] - stockData.previousClose) /
            stockData.previousClose) *
        100;
</script>


<div class="market-summary-item__container">
    <div class= "market-summary-item__inner-container">
        <Text class= "market-summary-item__symbol" color="accent">
            <a href="/">{stockData.symbol}</a>
        </Text>
        <Text size="sm">
            {imputedCloseVals[imputedCloseVals.length - 1].toFixed(2)}
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
        --market-summary-item__container--border-color: var(--grey-300);
        --market-summary-item__container--bg-color:var(--grey-50);
        --market-summary-item__container--border-radius: var(--border-radius-md);
        display: flex;
        height:fit-content;
        align-items: center;
        justify-content: center;
        width: fit-content;
        min-width: max-content;
        padding-inline: var(--space-md);
        border-right:1px solid var(--market-summary-item__container--border-color);
        gap: var(--space-md);    
    }
    
    .market-summary-item__inner-container{
        display: flex;
        flex-direction: column;
    }

    :global(.market-summary-item__symbol){
        margin-bottom: var(--space-xs);
    }
    
    :global(.market-summary-item__symbol a){
        text-decoration: none;
        color:inherit;
    }
    
    a:hover{
        text-decoration: underline;
    }
    
    .chart-container{
        height:30px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>