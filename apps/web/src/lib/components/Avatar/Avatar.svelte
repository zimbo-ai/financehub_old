<script lang="ts">
    import AccountIcon from "svelte-material-icons/Account.svelte"
    export let size:"sm" | "md" | "lg" = "md";
</script>

<div>
    {#if !$$restProps.src}
        <AccountIcon/>
    {:else}
        <img
            src={$$restProps.src}
            alt={$$restProps.alt}
        />
    {/if}
</div>

<style>
    div{
        --avatar--size-md:var(--input-size-md);
        height: var(--avatar--size-md);
        background-color: var(--grey-200);
        fill:var(--grey-600);
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: var(--avatar--size-md);
        width: var(--avatar--size-md);
        border-radius: 50%;
        overflow: hidden;
        aspect-ratio: 1/1;
    }
    div :global(svg){
        width: var(--size-xl);
        height: var(--size-xl);
        margin-top: var(--size-xs);
    }
    
    div :global(svg path){
        fill:var(--color-text-weakest);
        stroke:var(--color-text-weakest);
    }
    img{
        object-fit: cover;
    }
</style>

