<script lang="ts">
    import { _navPages } from ".";
    import Button from "../Button";
    import Searchbar from "../Searchbar";
    
    let scrollY:number = 0;
    let activePage:string = "home";
</script>

<svelte:window bind:scrollY/>
<header class="{scrollY > 10 ? "header--scroll":""}">
    <div class="header__top-section">
        
        <div
            style=" min-width:128px;
                    width:128px; 
                    height:32px; 
                    border-radius:var(--border-radius-lg); 
                    background:white;
                  "
        >   
        </div>
        
        <div class="search-container">
            <Searchbar
                placeholder="Search for news, companies, or symbols."
            />
        </div>
        
        <div class="btn-container">
            <Button as="a" href="/account/login" variant="default">
                Log In
            </Button>
            <Button  as="a" href="/account/signup">
                Sign Up
            </Button>
        </div>
    </div>
</header>
<nav>
    {#each _navPages as page}
        <a 
            class:active={page.slug === activePage}
            href={page.url}
        >
            {page.title}
        </a>
    {/each}
</nav>

<style>
    header{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-inline: var(--space-lg);
        padding-bottom: var(--space-sm);
        background: linear-gradient(var(--header-background-color), #00000000);
        position: sticky;
        top:0;
        z-index: 10;
        transition: background var(--transition-fast) ease-in-out;
    }
    .header--scroll{
        background: linear-gradient(var(--header-background-color),var(--header-background-color));
        border-bottom: 1px solid var(--header-border-color);
        box-shadow: var(--box-shadow-md);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
    .header__top-section{
        padding: var(--space-sm);
        padding-bottom:0 ;
        display: flex;
        gap: var(--space-md);
        align-items: center;
    }

    .btn-container{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
    }

    .search-container{
        flex:1;
        align-items: center;
        justify-content: center;
        display: flex;
        z-index: 1;
    }

    nav{
        gap: var(--space-sm);
        display: flex;
        align-items: flex-end;
        flex-direction: row;
        flex:1;
        position: sticky;
        justify-content: center;
        padding: var(--space-sm);
        padding-top: var(--space-md);
    }

    nav a{
        padding: var(--space-xs) var(--space-md);
        text-decoration: none;
        border-radius: var(--border-radius-lg);
        font-size: var(--font-size-md);
        color:var(--text-color);
        font-weight: 500;
    }

    nav a:global(.active){
        background-color: var(--header-nav-button_active-bg-color);
        border: 1px solid var(--header-nav-button_active-border-color);
        color:var(--header-nav-button_active-color);
    }
</style>