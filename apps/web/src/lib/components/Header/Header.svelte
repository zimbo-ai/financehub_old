<script lang="ts">
    import { navPages } from "./config";
    import userProfile from "$lib/stores/userProfile";
    import MenuIcon from "svelte-material-icons/Menu.svelte"
    import Button from "../Button";
    import Searchbar from "../Searchbar";
    import Avatar from "../Avatar";
    import Text from "../Text";
    import Overlay from "../Overlay/Overlay.svelte";
    
    let scrollY:number = 0;
    let activePage:string = "home";

    $:console.log($userProfile);
</script>

<svelte:window bind:scrollY/>

<header>
    <div class="header__inner-container">
        <div class="header__logo-container">
            <div
                class="__hidden-at-768px full-logo"
                style=" min-width:128px;
                        width:128px; 
                        height:33px; 
                        border-radius:var(--border-radius-lg); 
                        background:var(--grey-200);
                    "
            >
                
            </div>
            <div
                class="__visible-at-768px __hidden-at-500px icon-logo"
                style=" min-width:33px;
                        width:33px; 
                        height:33px; 
                        border-radius:var(--border-radius-lg); 
                        background:var(--grey-200);
                    "
            >
                
            </div>
        </div>
        <div class="header__search-bar-container __hidden-at-500px">
            <Searchbar
                placeholder="Search for news, companies, or symbols."
            />
        </div>
        <div class="header__account-actions __hidden-at-500px">  
            {#if $userProfile == null}
                <div class="button-container">
                    <Button as="a" href="/account/login" variant="default">
                        Log In
                    </Button>
                    <Button  as="a" href="/account/signup">
                        Sign Up
                    </Button>
                </div>
            {:else if $userProfile} 
                <div class="avatar-container">
                    <Avatar
                    alt="Profile image for user {$userProfile.username}"
                    />
                    <Text>
                        {$userProfile.username}
                    </Text>
                </div>
            {/if}
        </div>

         <div class="__visible-at-500px" style="width:44px" />
        <div class="mobile-separator __visible-at-500px">
             <div
                class="full-logo"
                style=" min-width:128px;
                        width:128px; 
                        height:33px; 
                        border-radius:var(--border-radius-lg); 
                        background:var(--grey-200);
                    "
            >
                
            </div>
        </div>
        <div class="hamburger __visible-at-768px">
            <Button shape="circle" variant="default" size="lg">
                <MenuIcon/>
            </Button>
        </div>
    </div>
    <div class="header__search-bar-container m __visible-at-500px">
        <Searchbar
            placeholder="Search for news, companies, or symbols."
        />
    </div>
</header>

<nav class="__hidden-at-768px">
    {#each navPages as page}
        <a 
            class:active={page.slug === activePage}
            href={page.url}
        >
            {page.title}
        </a>
    {/each}
</nav>

<style>
    :root{
        --header-border-color:var(--grey-300);
        --header--bg-color:white;
    }
    header{
        position: sticky;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: var(--header--bg-color);
        padding: 0 var(--space-lg) var(--space-xs);
        top:0;
        height:60px;
        z-index: 10;
    }
    .header__logo-container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .header__inner-container{
        padding: var(--space-sm) var(--space-xs) 0;
        padding-bottom:0 ;
        display: flex;
        gap: var(--space-md);
        align-items: center;
        justify-content: center;
    }
    .header__search-bar-container{
        flex:2;
        align-items: center;
        justify-content: flex-start;
        display: flex;
        z-index: 1;
    }
    .header__search-bar-container.m{
        padding-top: var(--space-xs);
    }
    .header__account-actions{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .header__account-actions .button-container{
        display: flex;
        min-width: max-content;
        align-items: center;
        justify-content: flex-end;
    }

    .avatar-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .avatar-container :global(span){
        display: flex;
        align-items: center;
    } 

    .header__account-actions :global(.spinner){
        fill:var(--color-primary);
        stroke: var(--color-primary);
        width: var(--space-md);
        height: var(--space-md);
    }
    .mobile-separator{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
    }    
    
    nav{
        background-color: var(--header--bg-color);
        gap: var(--space-sm);
        display: flex;
        align-items: flex-end;
        flex-direction: row;
        flex:1;
        position: sticky;
        top:1px;
        height:64px;
        z-index: 9;
        justify-content: center;
        padding: var(--space-sm);
        padding-top: var(--space-md);
        padding-bottom: var(--space-md);
        border-bottom:1px solid var(--header-border-color);
        width:100%;
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

    
    @media(max-width: 768px){
        .__hidden-at-768px, :global(.__hidden-at-768px){
            display: none;
        }
        header{
            border-bottom:1px solid var(--header-border-color);
            padding: 0 var(--space-md) var(--space-xs);
        }
    }
    @media(min-width: 768px){
        :global(.__visible-at-768px){
            display: none;
        }

    }
    @media(max-width: 500px){
        .__hidden-at-500px, :global(.__hidden-at-500px){
            display: none;
        }
        header{
            border-bottom:1px solid var(--header-border-color);
            padding: 0 var(--space-sm) var(--space-xs);
            height:fit-content;
        }
        .header__inner-container{
            gap: 0;
        }
    }
    @media(min-width: 500px){
        .__visible-at-500px{
            display: none;
        }

    }
</style>