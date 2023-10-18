<script lang="ts">
    import Text from "../Text";

    export var variant:"primary"= "primary";

    export let description:string = "";
    export let error:string  = "";

</script>
    <div>
        <input 
            {...$$restProps}
            on:blur
            on:focus
            on:input
            disabled={$$restProps.disabled}
            class="
            {error ? "input--error":""} 
            input--variant-{variant} 
            {$$restProps.class}
            "
        />
        {#if !error}
        <Text size="sm" color="weakest" class="input__description {$$restProps.disabled?"disabled":""}">{description}</Text>
        {:else}
        <Text size="sm" color="red" class="input__error">{error}</Text>
        {/if}
    </div>
<style>

    div{
        --input--variant-primary--border-color:var(--grey-300);
        --input--variant-primary--hover-border-color:var(--grey-400);
        --input--variant-primary--disabled-border-color:var(--grey-200);
        --input--variant-primary--disabled-bg-color:var(--grey-50);
        --input--variant-primary--disabled-text-color:var(--grey-500);
        width: 100%;
        display: flex;
        flex-direction: column;
    }    

    input{
        font-weight: 500;
        border-radius: 22px;
        border: 1px solid transparent;
        padding: var(--space-sm);
        font-size: var(--font-size-md);
        font-family: var(--font-family);
        color: var(--text-color);
        border: 1px solid var(--header-search_bar-border-color);
        width: 100%;
        padding: var(--space-sm) var(--size-lg);
        outline:none;
        height:calc(var(--size-xl) + var(--space-sm));
    }
   
    :global(.input__description){
        font-style: italic;
        padding-inline: var(--size-md);
        padding-top: 4px;
    }
    :global(.input__error){
        padding-inline: var(--size-md);
    }

    /* <------ INPUT VARIANTS ------> */
    .input--variant-primary{
        border-color: var(--input--variant-primary--border-color);
    }
    .input--variant-primary:hover{
        border-color: var(--input--variant-primary--hover-border-color);
    }
    .input--variant-primary:focus{
        border-color: var(--header-search_bar_active-border-color);
    }

     :global(.input__description.disabled){
        color: var(--input--variant-primary--disabled-text-color);
    }
    
    .input--variant-primary:disabled{
        background-color: var(--input--variant-primary--disabled-bg-color);
        border-color: var(--input--variant-primary--disabled-border-color);
        color: var(--input--variant-primary--disabled-text-color);
    }
   
    /* <------ INPUT VARIANTS ------> */
    .input--error{
        border-color: var(--color-text-red)!important;
        color: var(--color-text-red)!important;
    }

    .input--error::placeholder{
        color: var(--color-text-red)!important;
    }
</style>