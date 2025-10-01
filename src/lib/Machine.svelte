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
</style>