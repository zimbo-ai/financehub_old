<script lang="ts">
    import type { StockData } from "../../services/getStockData";
    import Button from "../Button/Button.svelte";

    
    import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'
    import ArrowRight from 'svelte-material-icons/ArrowRight.svelte'
    
    import MarketSummaryItem from "./components/MarketSummaryItem/MarketSummaryItem.svelte";

    export let stockData:StockData[];
    console.log("cool", stockData);

</script>

<div class="market-summary__container">
    <div class="market-summary__item-container">
            {#each stockData as sd}
                <MarketSummaryItem stockData={sd} />
            {/each}    
    </div>
    <div class="market-summary__nav-button-container">
        <Button shape="circle" variant="outline">
            <ArrowLeft />
        </Button>
        <Button shape="circle" variant="outline">
            <ArrowRight />
        </Button>
    </div>
</div>


<style>
    .market-summary__container{
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-md);
        max-width: var(--max-width);
    }
    .market-summary__item-container{
        display: flex;        
        width: 100%;
        overflow-x: hidden;
        gap: var(--space-md);
    }
    .market-summary__nav-button-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--space-md);
    }
</style>

