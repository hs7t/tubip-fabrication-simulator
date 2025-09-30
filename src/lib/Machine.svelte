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

<span class="container">
    <div class="machine">
        <img src={machineImagePath} alt={machineImageAlt}>
    </div>
</span>

<style>

</style>