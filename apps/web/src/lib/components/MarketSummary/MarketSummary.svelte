<script lang="ts">
    import type { StockData } from "../../services/getStockData";
    import Button from "../Button/Button.svelte";
    import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'
    import ArrowRight from 'svelte-material-icons/ArrowRight.svelte'
    import MarketSummaryItem from "./components/MarketSummaryItem/MarketSummaryItem.svelte";

    export let stockData:StockData[];
    
    const scrollStep:number = 200;
    let container:HTMLDivElement;



    function scrollLeft(){
        container.scroll({
            left: container.scrollLeft - scrollStep,
            behavior: 'smooth'
        })
        
    }
    function scrollRight(){
         container.scroll({
            left: container.scrollLeft + scrollStep,
            behavior: 'smooth'
        })
    }

</script>

<div class="market-summary__container">
    <div bind:this={container} class="market-summary__item-container">
            {#each stockData as sd}
                <MarketSummaryItem stockData={sd} />
            {/each}    
    </div>
    <div class="market-summary__nav-button-container">
        <Button
            shape="circle" 
            variant="outline"
            on:click={scrollLeft}
        >
            <ArrowLeft />
        </Button>
        <Button 
            shape="circle" 
            variant="outline"
            on:click={scrollRight}
        >
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
        scroll-behavior: smooth;
        max-width: var(--max-width);
        padding-inline: var(--space-md);
        padding-bottom: var(--space-sm);
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


<!-- https://query1.finance.yahoo.com/v1/finance/lookup?formatted=true&lang=en-US&region=US&query=msft&type=equity&count=3000&start=0 -->

search?q=zimbabwe&
lang=en-US&
region=US&
quotesCount=6
&newsCount=2
&listsCount=2
&enableFuzzyQuery=false
&quotesQueryId=tss_match_phrase_query
&multiQuoteQueryId=multi_quote_single_token_query
&newsQueryId=news_cie_vespa&enableCb=true&enableNavLinks=true&enableEnhancedTrivialQuery=true&enableResearchReports=true&enableCulturalAssets=true&enableLogoUrl=true&researchReportsCount=2