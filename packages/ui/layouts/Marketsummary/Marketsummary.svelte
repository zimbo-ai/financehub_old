<script>
    import Card from "../../components/Card/Card.svelte"
    import "../../styles/tokens.css"
    import "../../styles/vars.css"
    import Marketsummaryitem from "./components/Marketsummaryitem.svelte";
</script>

<Card tag="section" class="markett-summary" size="lg">
    <Marketsummaryitem/>
</Card>

<style>
    :global(.markett-summary){
        max-width: var(--max-width);
        width: 100%;
        display: flex;
        gap: var(--space-md);
        overflow: hidden;
        flex-direction: row;
        height:fit-content;
        padding: var(--space-sm);
        padding-inline: var(--space-md);
        background-color: var(--header-background-color);
        border: 1px solid var(--header-border-color);   
    }
</style>