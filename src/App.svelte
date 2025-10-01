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
  .machine-container {
    max-width: 20%;
  }
  main {
    background-color: white;
    width: min(100vw, 100vh);
    height: min(75vw, 75vh);
    aspect-ratio: 4 / 3;
    padding: auto;
    overflow: none;
  }
</style>
