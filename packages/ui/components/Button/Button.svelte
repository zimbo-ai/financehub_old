<script lang="ts">
    export let variant:"primary" | "secondary" | "ghost"| "default"= "primary";
    export let size:"sm" | "md" | "lg" = "md";
</script>

<button
    class={`btn-variant-${variant} ${$$restProps.class}`}
>
    <slot/>
</button>

<style>

    button{
        padding:  var(--space-xs) var(--space-md);
        font-size: var(--font-size-md);
        display: flex;
        height:var(--input-size-md);
        align-items: center;
        
        line-height: 1rem;
        font-weight: 500;
        justify-content: center;

    }
    .btn-variant-primary{
        background-color: var(--color-primary);
        color:white;
        border-color: var(--color-primary);
        border-radius: var(--border-radius-xl);
    
    }
    .btn-variant-primary:hover{
        background-color: var(--color-primary-dark);
    }
    
    .btn-variant-primary:focus{
        outline:1px solid white;
    }

    .btn-variant-default{
        background-color: var(--color-default);
        color:var(--text-color);
        border-color: var(--color-default);
        border-radius: var(--border-radius-xl);
    }
    .btn-variant-default:focus{
        outline:1px solid var(--color-primary);
    }
</style>