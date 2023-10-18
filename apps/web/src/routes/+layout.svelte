<script lang="ts">
    import { userProfile } from '$lib/stores/userProfile.js';
    import { onMount } from 'svelte';

    export let data;
    onMount(async()=>{
         $userProfile = await data.lazy.userProfile
    })
</script>

<slot/>

<style>
    html,
body {
  font-size: 16px;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

</style>