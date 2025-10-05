<script>
    import { game } from "../gamestate.svelte";
    import { slide } from "svelte/transition";

    let { statsShown = ["coins", "tubip", "matter"], kind = "adapt" } = $props()
</script>

<div class="stats" class:adapt={kind=="adapt"} class:compact={kind=="compact"}>
    {#each statsShown as stat}
    <div class="stat">
        <p>{stat}:</p>
        {#key game.state[stat]}
            <p class="number" transition:slide={{ axis: 'y' }}>{game.state[stat]}</p>
        {/key}
    </div>
    {/each}
</div>

<style>
    .stats {
        display: flex;
    }
    .stats.adapt {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: clamp(0px, 100%, 500px);
    }
    .stats.compact {
        display: flex;
        flex-direction: column;
    }
    .stats.compact .stat {
        display: flex;
        flex-direction: row;
        gap: 1ch;
    }
</style>
