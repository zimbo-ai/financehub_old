<script lang="ts">
    import "ui/styles/tokens.css";
    import "ui/styles/vars.css"
    import "../../app.css"
    import '@fontsource/inter';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
</script>
  

<main>
    <slot/>
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100dvh;
        
    }
    main :global(form){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 400px;
        height: 100%;
        padding: var(--space-md);
        position: relative;
        gap: var(--space-xl);
        margin-top: calc(var(--space-xxl) *-1);
    }
    main :global(.form__input-container){
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }
    main :global(.form__input-container input){
        width: 100%;
    }

    main :global(.form__button-container){
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        margin-top: calc(var(--space-md) *-1);
    }

    main :global(.form__button-container button){
        width: 100%;
    }

    main :global(.form__header){
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    main :global(.form__consent){
        text-align: center;
        padding-inline:var(--space-md);
        display: flex;
        align-items: flex-end;
        text-justify: flex-end;
        justify-content: flex-end;
        padding-bottom: var(--space-md);
        line-height: var(--line-height-tight);
        max-width: 400px;
    }

    main :global(.form__logo-container){
        width: 100%;
    }

    main :global(.form__error){
        padding-inline: var(--size-sm);
    }

    @media (max-width: 768px){
        main :global(form){
            padding-top: var(--space-xxl);
            justify-content: flex-start;
            margin-top: 0;

        }
    }
    @media (max-width: 500px){
        main :global(form){
            padding-top: var(--space-xl);
            padding-bottom: var(--space-xl);
            justify-content: flex-start;
        }
    }
</style>