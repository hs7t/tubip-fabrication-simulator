<script>
    import { game } from "../gamestate.svelte";
    import { slide } from "svelte/transition";
</script>

<div class="stats">
    {#each ["coins", "tubips", "matter"] as stat}
    <p>{stat}:</p>
    {#key game.state[stat]}
        <p transition:slide>{game.state[stat]}</p>
    {/key}
    {/each}
</div>
