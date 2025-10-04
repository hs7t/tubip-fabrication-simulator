<script>
    let { headline } = $props()
</script>

{#snippet content()}
    <p>{headline}</p>    
{/snippet}

<div class="marquee-box">
    {#each [1, 2, 3] as scrolled}
        {#if scrolled == 1}
        <span class="scrolling" id="scrolled-{scrolled}">
            {@render content()}
        </span>
        {:else}
        <span class="scrolling" id="scrolled-{scrolled}" aria-hidden="true">
            {@render content()}
        </span>
        {/if}
    {/each}
</div>

<style>
    .marquee-box {
        --gap: 1em;
        display: flex;
        max-width: 30vw;
        flex-direction: row;
        overflow: hidden;

        white-space: nowrap;
        gap: var(--gap);
    }

    .marquee-box .scrolling {
        animation: scroll infinite 4s linear;
        user-select: none;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - var(--gap)));
        }
        /* TYSM, Ryan! https://ryanmulligan.dev/blog/css-marquee/ */
    }

</style>