<script lang="ts">
    import Card from "../Card";
    import Text from "../Text";

    export let variant:"full"|"tiled"|"detailed";

    export let image:{
        url:string;
        alt:string;
    };
    export let title:string;
    export let description:string;
    export let url:string;
    export let articleSource:{
        name:string;
        url:string;
    };
</script>

{#if variant === "full"}
    <div class="article-display--variant-full {$$restProps.class}">
        <img
            class="article-display--variant-full__img"
            alt={image.alt}
            src={image.url}
        />
        <div class="article-display--variant-full__overlay">  
            <Text>
                {articleSource.name}
            </Text>
            <Text size="xl">
                {title}
            </Text>
        </div>
    </div>
{:else if variant === "tiled"}
    <div class="article-display--variant-tiled {$$restProps.class}">
        <img
            class="article-display--variant-tiled__img"
            alt={image.alt}
            src={image.url}
        />
        <div class="article-display--variant-tiled__details">
            <Text size="sm" weight="strong">
                {title}
            </Text>
            <Text size="sm" color="weakest">
                {articleSource.name}
            </Text>
        </div>
    </div>
{:else if variant === "detailed"}
    <div class="article-display--variant-detailed {$$restProps.class}">
        <img
            class="article-display--variant-detailed__img"
            alt={image.alt}
            src={image.url}
        />
        <div class="article-display--variant-detailed__details">
            <Text size="sm" color="weakest">
                {articleSource.name}
            </Text>
            <Text size="sm" weight="strong">
                {title}
            </Text>
            <Text size="sm" >
                {description}
            </Text>
        </div>
    </div>
{/if}

<style>
    
    :global(.article-display--variant-full){
        overflow: hidden;
        aspect-ratio: 16/9;
        position: relative;
    }
    .article-display--variant-full__img{
        object-fit:cover;
        height:100%;
        border-radius: var(--border-radius-md);
    }
    :global(.article-display--variant-full__overlay){
        position: absolute;
        top:0;
        height:100%;
        width: 100%;
        left:0;
        background:linear-gradient(#12121200,#12121266,#121212bb);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: var(--space-md);
    }

    :global(.article-display--variant-full__overlay > *){
        color: white!important;;
    }

    :global(.article-display--variant-tiled){
        display: flex;
        flex-direction: row;
        height:fit-content;
    }
    .article-display--variant-tiled__details{
        display: flex;
        flex-direction: column;
        flex:1;
        padding: var(--space-sm);
        padding-top: 0;
    }
    .article-display--variant-tiled__img{
        object-fit:cover;
        aspect-ratio: 1/1;
        max-width: 100px;
        max-height: 100px;
        border-radius: var(--border-radius-md);
    }

    :global(.article-display--variant-detailed){
        display: flex;
        flex-direction: row;
        height:fit-content;
        gap: var(--space-md);
    }
    .article-display--variant-detailed__details{
        display: flex;
        flex-direction: column;
        flex:1;
        padding: var(--space-sm);
        padding-top: 0;
    }
    .article-display--variant-detailed__img{
        object-fit:cover;
        aspect-ratio: 16/9;
        max-width: 200px;
        border-radius: var(--border-radius-md);
    }
</style>