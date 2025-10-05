<script>
    import { game } from "../gamestate.svelte";
    import { slide } from "svelte/transition";

    let { statsShown = ["coins", "tubip", "matter"] } = $props()
</script>

<div class="stats">
    {#each statsShown as stat}
    <div class="stat">
        <p>{stat}:</p>
        {#key game.state[stat]}
            <p transition:slide>{game.state[stat]}</p>
        {/key}
    </div>
    {/each}
</div>

<style> 
    .stats {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: clamp(0px, 100%, 500px);
    }
</style>