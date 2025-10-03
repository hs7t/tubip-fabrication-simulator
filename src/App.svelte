<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/NumberInput.svelte";
  import { game, saveGameToLocalStorage } from "./gamestate.svelte.js";

  function handleMatterPurchase(amount) {
    if (amount > 0) {
      const coinResult = game.state.coins - (amount * game.economy.values.matter);
      if (coinResult >= 0) {
        game.state.coins = coinResult;
        game.state.matter += amount;
      }
    }
  }

  function handleTubipSale(amount) {
    if (amount > 0) {
      let tubipResult = game.state.tubips - (amount * game.economy.values.tubips);
      if (tubipResult >= 0) {
        game.state.coins += amount;
        game.state.tubips = tubipResult;
        return
      }
      console.log("failed, " + tubipResult)
    }
  }

  function handleTubipGeneration(amount = 1) {
    game.state.tubips += amount;
  }

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
      <Machine onEnter={() => { handleTubipGeneration(1) }} machineType={game.state.machineType} />
  </section>

  <section id="market">
      <NumberInput buttonLabel="buy tubip material" onEnter={(response) => { handleMatterPurchase(response) }} allowNegatives={false}></NumberInput>
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
