<script lang="ts">
    import Card from "$lib/components/Card";
    import Text from "$lib/components/Text";
    import MarketSummary from "$lib/components/MarketSummary";
    import type { PageData } from "./$types";
    import ArticleDisplay from "$lib/components/ArticleDisplay/ArticleDisplay.svelte";
    import Button from "$lib/components/Button";
    

    export let data: PageData;
    console.log(data.lazy.stockData)

</script>


<main>
    <section class="market-summary">
        {#await data.lazy.stockData}
        loading
        {:then sd} 
        <MarketSummary stockData={sd}/> 
        {:catch error}
        An error has occured.
        {/await}
    </section>

    <div class="article-quotes">
        <div class="articles-container">
            <section class="main-articles-container">
                <ArticleDisplay 
                    variant="full"
                    title="South African rand falls as markets await US employment data"
                    articleSource={{
                        name:"Reuters",
                        url:"https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                    }}
                    image={{
                        url:"https://www.reuters.com/resizer/VV_H-Z2NRkCt5E7JpXDnxdjGck0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7OUSBHECZMJVEHQT7G2AZVSQU.jpg",
                        alt:"c"
                    }}
                    url="https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                    description="The South African rand weakened on Friday as investors awaited U.S. employment data for clues on the Federal Reserve's tapering timeline, while stocks were flat."
                    class="featured-article"
                />
    
                <div class="main-articles__side-articles-container">
                    <ArticleDisplay
                        variant="tiled"
                        title="South African rand falls as markets await US employment data"
                        articleSource={{
                            name:"Reuters",
                            url:"https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                        }}
                        image={{
                            url:"https://www.reuters.com/resizer/VV_H-Z2NRkCt5E7JpXDnxdjGck0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7OUSBHECZMJVEHQT7G2AZVSQU.jpg",
                            alt:"c"
                        }}
                        url="https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                        description="The South African rand weakened on Friday as investors awaited U.S. employment data for clues on the Federal Reserve's tapering timeline, while stocks were flat."
                        class="featured-article"
                    />
                    
                    <ArticleDisplay
                        variant="tiled"
                        title="South African rand falls as markets await US employment data"
                        articleSource={{
                            name:"Reuters",
                            url:"https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                        }}
                        image={{
                            url:"https://www.reuters.com/resizer/VV_H-Z2NRkCt5E7JpXDnxdjGck0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7OUSBHECZMJVEHQT7G2AZVSQU.jpg",
                            alt:"c"
                        }}
                        url="https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                        description="The South African rand weakened on Friday as investors awaited U.S. employment data for clues on the Federal Reserve's tapering timeline, while stocks were flat."
                        class="featured-article"
                    />
    
                    <ArticleDisplay
                        variant="tiled"
                        title="South African rand falls as markets await US employment data"
                        articleSource={{
                            name:"Reuters",
                            url:"https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                        }}
                        image={{
                            url:"https://www.reuters.com/resizer/VV_H-Z2NRkCt5E7JpXDnxdjGck0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7OUSBHECZMJVEHQT7G2AZVSQU.jpg",
                            alt:"c"
                        }}
                        url="https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                        description="The South African rand weakened on Friday as investors awaited U.S. employment data for clues on the Federal Reserve's tapering timeline, while stocks were flat."
                        class="featured-article"
                    />
                </div>
            </section>
            <section class="other-articles-container">
    
                <Text size="xl" weight="medium">
                    More financial news
                </Text>

                <div class="news-filter-container">
                    <Button
                        on:click={() => console.log("clicked")}
                        variant="ghost"
                    >
                        Top stories
                    </Button>
                    <Button
                        variant="outline"
                    >
                        Local markets
                    </Button>
                    <Button
                    variant="outline"
                    >
                        World markets
                    </Button>
                </div>
                <ArticleDisplay 
                    variant="detailed"
                    title="South African rand falls as markets await US employment data"
                    articleSource={{
                        name:"Reuters",
                        url:"https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                    }}
                    image={{
                        url:"https://www.reuters.com/resizer/VV_H-Z2NRkCt5E7JpXDnxdjGck0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7OUSBHECZMJVEHQT7G2AZVSQU.jpg",
                        alt:"c"
                    }}
                    url="https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                    description="The South African rand weakened on Friday as investors awaited U.S. employment data for clues on the Federal Reserve's tapering timeline, while stocks were flat."
                    class="featured-article"
                />

                <ArticleDisplay 
                variant="detailed"
                title="South African rand falls as markets await US employment data"
                articleSource={{
                    name:"Reuters",
                    url:"https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                }}
                image={{
                    url:"https://www.reuters.com/resizer/VV_H-Z2NRkCt5E7JpXDnxdjGck0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7OUSBHECZMJVEHQT7G2AZVSQU.jpg",
                    alt:"c"
                }}
                url="https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
                description="The South African rand weakened on Friday as investors awaited U.S. employment data for clues on the Federal Reserve's tapering timeline, while stocks were flat."
                class="featured-article"
            />
            <ArticleDisplay 
            variant="detailed"
            title="South African rand falls as markets await US employment data"
            articleSource={{
                name:"Reuters",
                url:"https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
            }}
            image={{
                url:"https://www.reuters.com/resizer/VV_H-Z2NRkCt5E7JpXDnxdjGck0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z7OUSBHECZMJVEHQT7G2AZVSQU.jpg",
                alt:"c"
            }}
            url="https://www.reuters.com/world/africa/south-african-rand-falls-markets-await-us-employment-data-2021-10-08/"
            description="The South African rand weakened on Friday as investors awaited U.S. employment data for clues on the Federal Reserve's tapering timeline, while stocks were flat."
            class="featured-article"
        />
            </section>

        </div>
        <Card tag="section" class="live-quotes __hidden-at-768px" size="lg">
            live quotes section
        </Card>
    </div>
</main>

<style>
    main{
        padding: var(--space-md);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: var(--grey-100);
        min-width:1000px;
        overflow-x: auto;
    }


    .market-summary{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;        
    }
    .article-quotes{
        display: flex;
        gap: var(--space-md);
        display: flex;
        flex-direction: row;
        flex:1;
        max-width: var(--max-width);
        padding-top: var(--space-md);
        width: 100%;
    }

    .articles-container{
        flex:4;
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        width: 100%;
    }

    :global(.live-quotes){
        flex:1;
        min-width: 300px;
    }
    
    .main-articles-container{
        flex:3;
        gap: var(--space-md);
        padding: var(--space-md);
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        justify-content: center;
    }
    
    .main-articles__side-articles-container{
        display: flex;
        flex-direction: column;
        flex:1;
        width: 100%;
        gap: var(--space-md);   
    }
    :global(.featured-article){
        flex:2;
        height:100%;
    }

    .other-articles-container{
        flex:1;
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        padding: var(--space-md);
    }

    .news-filter-container{
        display: flex;
        flex-direction: row;
        gap: var(--space-sm);
    }

    
  @media(max-width: 768px){
        main{
            min-width:300px;
        }
        .main-articles-container{
            flex-direction: column;
            gap: var(--space-md);
        }
        .main-articles__side-articles-container{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: var(--space-md);
        }
        
    }
    @media(min-width: 768px){
    }
    @media(max-width: 500px){
     main{
            min-width:300px;
            padding-inline: 0;

        }
     .main-articles__side-articles-container{
           display: flex;
           flex-direction: row;
           overflow-y: scroll;
           gap: var(--space-sm);
    }
    .main-articles__side-articles-container :global(.featured-article){
        min-width: 220px;
    }
    .other-articles-container{
        padding-top: 0;
    }

    }
    @media(min-width: 500px){
      
    }
</style>

