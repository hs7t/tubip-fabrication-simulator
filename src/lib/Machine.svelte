<script>
  import { calculateTubipPerTick, game } from "../gamestate.svelte";

    let { onEnter = undefined } = $props()
</script>

<div class="machine">
    <button onclick={onEnter}>FABRICATE</button>
    <p>yields ~{game.economy.generationQuantities.tubipPerClick} tubip</p>
    {#if game.state.autoClickers.length > 0} 
        <p>deriving {calculateTubipPerTick(game.state.autoClickers)} tubip/t</p>
    {/if}
</div>

<style>
    .machine {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
    }
    button {
        font-size: 2em;
        background-color: var(--t-color-accent);
        color: var(--t-color-accent-contrast);
        border: solid var(--t-color-accent-dim) 3pt;
        border-radius: 8pt;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25) inset, 0 0 5.7px 0;
        font-weight: 700;
        transition: all 200ms;
    }

    button:hover {
        outline: solid 2pt #FFFFFF;
        outline-offset: 2pt;
        box-shadow: none;
    }
    button:active {
        transform: none;
        transform: scale(0.8) rotate(3deg);
        font-weight: 1000;
        background-color: #FFCF00;
        border-color: #cb8000;
        color: #503300;
        outline: 3pt solid #503300;
    }
</style>