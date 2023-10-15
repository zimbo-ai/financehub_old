<script lang="ts">
    import "../../styles/tokens.css"

    export let size:"sm" | "md" | "lg" = "md";
    export let tag:string = "div";

    let className = `${$$restProps.class} card-${size}`
</script>

<svelte:element class={className} this={tag} >
    <slot/>
</svelte:element>

<style>
    :global(.card-sm){
        border-radius: var(--border-radius-sm);
        box-shadow: var(--box-shadow-sm);
    }
    :global(.card-md){
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-md);
        background-color: white;
        border: 1px solid var(--header-border-color);   
        box-shadow: var(--box-shadow-sm);
    

    }
    :global(.card-lg){
        border-radius: var(--border-radius-lg);
        max-width: var(--max-width);
        background-color: var(--header-background-color);
        border: 1px solid var(--header-border-color);   
    
    }

</style>