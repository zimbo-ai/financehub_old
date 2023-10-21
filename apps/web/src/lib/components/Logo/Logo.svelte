<script lang="ts">
    export let variant:"full" | "icon" ="full";
    export let size:"sm"|"md"|"lg" ="md";
</script>

<style>
    .logo--variant-full{
            --size-xxs: 8px;
  --size-xs: 10px;
  --size-sm: 12px;
  --size-md: 16px;
  --size-lg: 24px;
  --size-xl: 36px;
  --size-xxl: 72px;

        height:var(--size-xl); 
        border-radius:var(--border-radius-lg); 
        background:var(--grey-200);
        width:128px; 
    }

    .logo--size-sm{
        height: var(--size-xl);
    }
    
</style>

{#if variant === "full"}
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
{:else if variant === "icon"}
    <div class="avatar__container">
        <div class="avatar__icon">
            <img src="/assets/images/avatar.png" alt="avatar" />
        </div>
    </div>
{/if}