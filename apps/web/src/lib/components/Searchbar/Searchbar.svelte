<script lang="ts">
    import Input from "../Input/Input.svelte";
    import Magnify from 'svelte-material-icons/Magnify.svelte'

    export let placeholder:string = "";

    let isResultTrayOpen:boolean = false;
</script>

<div class="search-bar">
    <div class="search-bar__input-container">
        <Magnify/>
        <Input
            on:focus={()=>isResultTrayOpen=true}
            on:blur={()=>isResultTrayOpen=false}
            {placeholder} 
            class="search-input {isResultTrayOpen && "open-tray"}"/>
    </div>
    {#if isResultTrayOpen}
        <div class="search-results-box">
            Trending
        </div>
    {/if}
</div>

<style>
    .search-bar{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        max-width: 500px;
        width: 100%;
    }
    .search-bar__input-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    :global(.search-bar__input-container svg){
        width: calc(var(--size-sm) + var(--size-xs));
        height: calc(var(--size-sm) + var(--size-xs));
        transform: translate(var(--space-xl), -1px);
        color:var(--color-text-weakest);
        position: absolute;
        left:calc(var(--size-lg) * -1);
        z-index: 2;
    }
    :global(.search-input){
        padding-inline: calc(var(--space-xl) + var(--space-xs))  var(--space-sm)!important;
        width: 100%;
    }


    .search-results-box{
        position: absolute;
        background-color: white;
        left:0;
        top:calc(var(--size-xl) + 6px);
        width: 100%;
        border: 1px solid var(--header-search_bar-border-color);
        background-color: var(--header-search_bar-bg-color);
        box-shadow: var(--box-shadow-md);
        padding: var(--space-md);
        border-bottom-left-radius: 22px;
        border-bottom-right-radius:22px ;
        
    }

    :global(.open-tray){
        z-index: 1;
        border-bottom-left-radius: 0px!important;
        border-bottom-right-radius:0px!important;
    }


    
</style>