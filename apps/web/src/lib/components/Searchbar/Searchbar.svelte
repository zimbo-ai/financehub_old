<script lang="ts">
    import Input from "../Input/Input.svelte";
    import Magnify from 'svelte-material-icons/Magnify.svelte'
    import Button from "../Button/Button.svelte";

    export let placeholder:string = "";

    let isResultTrayOpen:boolean = false;
</script>

<div class="container">
    <div class="top">
        <Magnify/>
        <Input
            on:focus={()=>isResultTrayOpen=true}
            on:blur={()=>isResultTrayOpen=false}
            {placeholder} 
            class="search-input {isResultTrayOpen && "open-tray"}"/>
            
        <Button class={`search-btn`}>Search</Button>
    </div>
    {#if isResultTrayOpen}
        <div class="search-results-box">
            content
        </div>
    {/if}
</div>

<style>
    :global(.search-btn){
        z-index: 2;
        position: absolute;
        right:var(--space-sm);
    }
    :global(.search-input){
        padding: var(--space-sm) calc(var(--space-xl) + var(--space-sm))!important;
        width: 100%;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 600px;
        width: 100%;
        position: relative;
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

    .top{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    div :global(svg){
        width: var(--size-lg);
        height: var(--size-lg);
        transform: translate(var(--space-xl), 1px);
        color:var(--text-color-weakest);
        position: absolute;
        left:calc(var(--size-lg) * -1);
        z-index: 2;
    }
</style>