<script lang="ts">
    type CardLevel = "top" | "middle" | "bottom";

    export let level:CardLevel = "top";
    export let tag:string = "div";
</script>

<svelte:element 
    class={
            `
            card
            card--level-${level}   
            ${$$restProps.class}
        `} 
    this={tag}>
    <slot/>
</svelte:element>

<style>
    .card{
        --card-level-top--bg-color:white;
        --card-level-top--border-color:var(--grey-100);

        --card-level-medium--bg-color:var(--grey-50);
        --card-level-medium--border-color: var(--grey-100);
        overflow: hidden;
    }
    .card--level-bottom{
        border-radius: var(--border-radius-sm);
        box-shadow: var(--box-shadow-sm);
    }
    .card--level-top{
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-md);
        background-color: var(--card-level-top--bg-color);
        border: 1px solid var(--card-level-top--border-color);   
        box-shadow: var(--box-shadow-sm);
    }
    .card--size-medium{
        border-radius: var(--border-radius-lg);
        background-color: var(--card-level-medium--bg-color);
        border: 1px solid var(--card-level-medium--border-color);   
    }
</style>