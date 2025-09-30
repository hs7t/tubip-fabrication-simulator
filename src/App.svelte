<script>
  import Machine from "./lib/Machine.svelte";
  
  let gameState = {
    machineType: "dohlwropMicrowave"
  }
</script>

<header>
  <h1>Tubip Fabrication Simulator</h1>
</header>

<main>
  <Machine machineType={gameState.machineType}/>
</main>

<style>
  main {
    width: 80%;
    aspect-ratio: 4 / 3;
    width: min(100vw, 100vh);
  }
</style>
