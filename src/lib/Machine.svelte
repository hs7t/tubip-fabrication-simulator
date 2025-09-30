<script>
    import { ASSETS } from "../assets";
    let { machineType } = $props()
    
    let machineImagePath = $state()
    let machineImageAlt = $state()
    switch (machineType) {
        case "dohlwropMicrowave": 
            machineImagePath = ASSETS.machines.dohlwrop_microwave
            machineImageAlt = "A Dohlwrop Microwave machine"
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
    }
</style>