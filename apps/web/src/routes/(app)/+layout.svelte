<script lang="ts">
    import "ui/styles/tokens.css";
    import "ui/styles/vars.css"
    import "../../app.css"
    import '@fontsource/inter';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
    import Navbar from "$lib/components/Navbar";

    
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