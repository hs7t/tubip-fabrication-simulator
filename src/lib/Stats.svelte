<script>
    import { game } from "../gamestate.svelte";
    import { slide } from "svelte/transition";
</script>

<div class="stats">
    {#each ["coins", "tubip", "matter"] as stat}
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