<script>
    import { ASSETS } from "../assets";
    let { machineType } = $props()
    
    let machineImagePath = $state()
    let machineImageAlt = $state()
    switch (machineType) {
        case "dohlwropMicrowave": 
            machineImagePath = ASSETS.machines.dohlwrop_microwave.img
            machineImageAlt = ASSETS.machines.dohlwrop_microwave.img
    }
</script>

<div class="machine">
    <button>
        <img src={machineImagePath} alt={machineImageAlt}>
    </button>
</div>

<style>
    .machine button {
        width: 100%;
        height: 100%;

        border: 0;
        outline: none;
        background-color: transparent;
    }
    .machine button img {
        width: 100%;
        height: 100%;
    }
</style>