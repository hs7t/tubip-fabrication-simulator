<script>
  import { calculateTubipPerTick, game } from "../gamestate.svelte";

    let { onEnter = undefined } = $props()
</script>

<div class="machine">
    <button onclick={onEnter}>
        FABRICATE
    </button>
</div>

<style>
    .machine {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
    }
    button {
        font-size: var(--t-font-size-large);
        background-color: var(--t-color-accent-B);
        color: var(--t-color-primary);
        border: solid var(--t-color-accent-C) 3pt;
        border-radius: var(--t-radius-primary);
        box-shadow: 0px 0.5rem 0px var(--t-color-accent-A);
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