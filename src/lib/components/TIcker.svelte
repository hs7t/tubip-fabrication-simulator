<script>
  import { slide } from 'svelte/transition';

    let { headline } = $props()
</script>

{#snippet content()}
    <p>{headline}</p>    
{/snippet}

<div class="ticker">
    {#each [1, 2, 3] as scrolled}
        {#key headline}
            <span class="scrolling" id="scrolled-{scrolled}" aria-hidden={!(scrolled == 1)} transition:slide>
                {@render content()}
            </span>
        {/key}
    {/each}
</div>

<style>
    .ticker {
        display: flex;
        width: 100%;
        flex-direction: row;
        overflow: hidden;

        white-space: nowrap;
        gap: 3ch;
    }

    .ticker {
        background-color: var(--t-color-accent-background-A);
        color: var(--t-color-accent-B);
        font-family: var(--t-font-family-primary);
        padding: 0.2ch;
        border-radius: var(--t-radius-primary);
    }

    .ticker .scrolling {
        animation: scroll infinite 4s linear;
        user-select: none;
        text-transform: uppercase;
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