<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/NumberInput.svelte";
  import { game, saveGameToLocalStorage, handleTubipGeneration, handleTubipSale } from "./gamestate.svelte.js";
  import { loop } from './tick.svelte.js';

  loop()
  
  window.addEventListener("beforeunload", (e) => { saveGameToLocalStorage() })
</script>

<main>
  <section id="overview">
    <h1>Tubip Fabrication Simulator</h1>
    <p>coins: {game.state.coins}</p>
    <p>tubips: {game.state.tubips}</p>
    <p>tubip material: {game.state.matter}</p>
  </section>

  <section id="shareholder-value-creation">
      <Machine onEnter={() => { handleTubipGeneration() }} machineType={game.state.machineType} />
  </section>

  <section id="market">
      <NumberInput buttonLabel="sell tubips" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
    </section>
</main>

<style>
  main {
    background-color: white;
    width: min(100vw, 100vh);
    height: min(75vw, 75vh);
    aspect-ratio: 4 / 3;
    padding: auto;
    overflow: scroll;
  }
</style>
