<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/NumberInput.svelte";
  import { gameState } from "./gamestate.svelte.js";

  function handleMatterPurchase(amount) {
    if (amount > 0) {
      gameState.coins -= amount;
      gameState.matter += amount;
    }
  }

  function handleTubipSale(amount) {
    if (amount > 0) {
      gameState.coins += amount;
      gameState.tubips -= amount;
    }
  }

  function handleTubipGeneration(amount = 1) {
    gameState.tubips += amount;
  }
</script>

<main>
  <section id="overview">
    <h1>Tubip Fabrication Simulator</h1>
    <p>coins: {gameState.coins}</p>
    <p>tubips: {gameState.tubips}</p>
    <p>tubip material: {gameState.matter}</p>
  </section>

  <section id="shareholder-value-creation">
      <Machine onEnter={() => { handleTubipGeneration(1) }} machineType={gameState.machineType} />
  </section>

  <section id="market">
      <NumberInput buttonLabel="buy tubip material" onEnter={() => { handleMatterPurchase(1) }} allowNegatives={false}></NumberInput>
      <NumberInput buttonLabel="sell tubips" onEnter={() => { handleTubipSale(1) }} allowNegatives={false}></NumberInput>
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
