<script lang="ts">
    import "../../styles/tokens.css"
    
    import Button from "../Button/Button.svelte";

    export let placeholder:string = "";
    export let variant:"search" | "default" = "default";

</script>

    <input 
        on:blur
        on:focus
        on:input
    {placeholder} class={$$restProps.class}/>

<style>

    

    input{
        font-weight: 500;
        border-radius: 22px;
        padding: var(--space-sm);
        font-size: var(--font-size-md);
        background-color: var(--header-search_bar-bg-color);
        font-family: var(--font-family);
        color: var(--text-color);
        border: 1px solid var(--header-search_bar-border-color);
        width: 100%;
        padding: var(--space-sm) calc(var(--space-xl) + var(--space-sm));
        outline:none;
        height:calc(var(--size-xl) + var(--space-sm));
    }
    input:focus{
        /* border: 1px solid var(--header-search_bar_active-border-color); */
    }
</style>