<script lang="ts">
    import Spinner from "../Spinner/Spinner.svelte";

    export let variant:"primary" | "secondary" | "outline"| "default" | "ghost"= "primary";
    export let shape:"rounded" | "pill" | "circle" = "rounded";
    export let size:"sm"|"md"|"lg" = "md";
    export let as:"button" | "a" = "button";
    export let loading:boolean = false;
</script>

<svelte:element 
    this="{as}"
    on:click
    disabled={loading || $$restProps.disabled}
    class={`
    button--variant-${variant} 
    button--shape-${shape} 
    button--size-${size}
    ${$$restProps.class}
    `}
    href={$$restProps.href}
>
    {#if loading}
        <Spinner/>
    {:else}
        <slot/>
    {/if}
    
</svelte:element>

<style>
    a, button{
        --button--variant-outline--border-color:var(--grey-200);
        --button--variant-outline--active-border-color:var(--indigo-700);
        --button--variant-outline--hover-border-color:var(--indigo-400);
        --button--variant-outline--text-color:var(--text-color);
        --button--variant-outline--focus-outline-color:var(--indigo-100-accent);

        --button--variant-primary--border-color:var(--indigo-400);
        --button--variant-primary--active-border-color:var(--indigo-400);
        --button--variant-outline--hover-border-color:var(--indigo-700);
        --button--variant-primary--bg-color:var(--indigo-400);
        --button--variant-primary--active-bg-color:var(--indigo-400);
        --button--variant-primary--hover-bg-color:var(--indigo-700);
        --button--variant-primary--text-color:white;
        --button--variant-primary--focus-outline-color:var(--indigo-100-accent);

        --button--variant-ghost--border-color:var(--indigo-50);
        --button--variant-ghost--bg-color:var(--indigo-50);
        --button--variant-ghost--text-color:var(--indigo-400);
        --button--variant-ghost--active-bg-color:var(--indigo-50);
        --button--variant-ghost--hover-bg-color:var(--indigo-75);
        --button--variant-ghost--focus-outline-color:var(--indigo-100);
        --button--border-radius:23px;

        padding:  var(--space-xs) var(--space-md);
        font-size: var(--font-size-md);
        display: flex;
        height:var(--input-size-md);
        align-items: center;
        line-height: 1rem;
        font-weight: 500;
        color:var(--text-color);
        justify-content: center;
        text-decoration: none;
        border: 1px solid transparent;
        outline:2px solid transparent; 

    }
    .button-variant-default{
        background-color: var(--color-default);
        color:var(--text-color);
        border-color: var(--color-default);
        border-radius: var(--border-radius-xl);
    }
    .button-variant-default:focus{
        outline:1px solid var(--color-primary);
    }



    /* <------BUTTON SIZES------> */
    .button--size-lg{
        height:var(--input-size-lg);
    }
    .button--size-sm{
        height:var(--input-size-sm);
    }

    /* <------BUTTON SIZES------> */

    /* <------BUTTON VARIANTS------> */

    .button--variant-default:disabled{
        opacity: 0.65; 
        cursor: not-allowed;
    }
    .button--variant-default :global(svg){
        stroke: var(--color-text);
        fill:var(--color-text);
        color:var(--color-text);
    }
    .button--variant-primary{      
        background-color: var(--button--variant-primary--bg-color);
        color:var(--button--variant-primary--text-color);
        border-color: var(--button--variant-primary--active-border-color);
        border-radius: var(--border-radius-xl);
    }
    .button--variant-primary:hover{
        background-color: var(--button--variant-primary--hover-bg-color);
    }
    .button--variant-primary:active{
        background-color:var(--button--variant-primary--active-bg-color);
    }
    .button--variant-primary:focus{
        outline:1px solid var(--button--variant-primary--focus-outline-color);
    }
    .button--variant-primary:disabled{
        opacity: 0.65; 
        cursor: not-allowed;
        background-color: var(--button--variant-primary--bg-color);
    }
    .button--variant-primary :global(svg){
        stroke:var(--button--variant-primary--text-color);
        fill:var(--button--variant-primary--text-color);
    }

    .button--variant-outline{
        background-color: transparent;
        color:var(--button--variant-outline--text-color);
        fill:var(--button--variant-outline--text-color);
        border-color: var(--button--variant-outline--border-color);
        border-radius: var(--button--border-radius);
    }
    .button--variant-outline:hover{
        border-color: var(--button--variant-outline--hover-border-color);
    }
    .button--variant-outline:active{
        border-color: var(--button--variant-outline--active-border-color);
    }
    .button--variant-outline:focus{
        outline-color: var(--button--variant-outline--focus-outline-color);
    }

    .button--variant-ghost{
        background-color: var(--button--variant-ghost--bg-color);
        color:var(--button--variant-ghost--text-color);
        fill:var(--button--variant-ghost--text-color);
        border-color: var(--button--variant-ghost--bg-color);
        border-radius: var(--button--border-radius);
    }
    .button--variant-ghost:hover{
        background-color: var(--button--variant-ghost--hover-bg-color);
    }
    .button--variant-ghost:active{
        background-color: var(--button--variant-ghost--active-bg-color);
    }
    .button--variant-ghost:focus{
        outline-color: var(--button--variant-ghost--focus-outline-color);
    }
    /* <------BUTTON VARIANTS------> */

    /* <------BUTTON SHAPES------> */
    .button--shape-circle{
        aspect-ratio: 1/1;
        padding: 0 0;
    }
    /* <------BUTTON SHAPES------> */
</style>