<script lang="ts">
  import "ui/styles/tokens.css";
  import "ui/styles/vars.css"
    
  import '@fontsource/inter';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';

  import { userProfile } from '$lib/stores/userProfile.js';
  import { onMount } from 'svelte';

  export let data;
  onMount(async()=>{
        $userProfile = await data.lazy.userProfile
  })

</script>


<slot/>

<style>
  :global(html,body) {
    font-size: 16px;
    font-family: Inter;
    padding: 0;
    margin: 0;
  }
  :global(*) {
    box-sizing: border-box;
  }
  @media(max-width: 768px){
        :global(.__hidden-at-768px){
            display: none;
        }
    }
    @media(min-width: 768px){
        :global(.__visible-at-768px){
            display: none;
        }
    }
    @media(max-width: 500px){
       :global(.__hidden-at-500px){
            display: none;
        }
    }
    @media(min-width: 500px){
        :global(.__visible-at-500px){
            display: none;
        }

    }
</style>