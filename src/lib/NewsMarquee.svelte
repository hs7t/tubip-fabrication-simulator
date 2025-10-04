<script>
  import { slide } from 'svelte/transition';

    let { headline } = $props()
</script>

{#snippet content()}
    <p>{headline}</p>    
{/snippet}

<div class="marquee-box">
    {#each [1, 2, 3] as scrolled}
        {#key headline}
            <span class="scrolling" id="scrolled-{scrolled}" aria-hidden={!(scrolled == 1)} transition:slide>
                {@render content()}
            </span>
        {/key}
    {/each}
</div>

<style>
    .marquee-box {
        --gap: 3ch;
        display: flex;
        width: 100%;
        flex-direction: row;
        overflow: hidden;

        white-space: nowrap;
        gap: var(--gap);
    }

    .marquee-box {
        --m-background-color: #313131;
        --m-border-color: #131313;
        --m-color: #ffd000;

        background-color: var(--m-background-color);
        outline: solid 3pt var(--m-border-color);
        color: var(--m-color);
        font-family: var(--t-font-family-secondary);
        padding: 0.8ch;
        border-radius: 8pt;
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