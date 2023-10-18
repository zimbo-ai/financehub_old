<script lang="ts">
   
    import Navbar from "$lib/components/Header";

    
</script>
  
<div class="cont">
    <Navbar/>
    <slot/>
</div>

<style>
    .cont{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>