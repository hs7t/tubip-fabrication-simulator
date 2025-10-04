<script>
    let { headline } = $props()
</script>

{#snippet content()}
    <p>{headline}</p>    
{/snippet}

<div>
    {#each [1, 2] as scrolled}
        <span class="scrolling" id="scroller-{scrolled}">
            {@render content()}
        </span>
    {/each}
</div>