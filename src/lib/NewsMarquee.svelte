<script>
    let { headline } = $props()
</script>

{#snippet content()}
    <p>{headline}</p>    
{/snippet}

<div class="marquee-box">
    {#each [1, 2, 3] as scrolled}
        <span class="scrolling" id="scrolled-{scrolled}" aria-hidden={!(scrolled == 1)}>
            {@render content()}
        </span>
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

    .marquee-box {
        --m-background-color: #1e1e1e;
        --m-border-color: #131313;
        --m-color: #ffffff;

        background-color: var(--m-background-color);
        border: solid 3pt var(--m-border-color);
        color: var(--m-color);
        font-family: var(--t-font-family-secondary);
    }

    .marquee-box .scrolling {
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