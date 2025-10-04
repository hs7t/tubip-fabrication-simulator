<script>
    import { ASSETS } from "../assets";
    let { machineType, onEnter = undefined } = $props()
    
    let machineImagePath = $state()
    let machineImageAlt = $state()
    switch (machineType) {
        case "dohlwropMicrowave": 
            machineImagePath = ASSETS.machines.dohlwrop_microwave.img
            machineImageAlt = ASSETS.machines.dohlwrop_microwave.img
    }
</script>

<div class="machine">
    <button onclick={onEnter}>tubip</button>
</div>

<style>
    button {
        font-size: 2em;
        background-color: var(--t-color-accent);
        color: var(--t-color-accent-contrast);
        border: solid var(--t-color-accent-dim) 3pt;
        border-radius: 8pt;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25) inset, 0 0 5.7px 0 rgba(255, 188, 55, 0.7);
        font-weight: 700;
    }

    button:hover {
        transform: NONE;
    }
</style>