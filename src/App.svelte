<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/NumberInput.svelte";
  import { game, saveGameToLocalStorage, handleTubipGeneration, handleTubipSale } from "./gamestate.svelte.js";
  import './tick.svelte.js'

  window.addEventListener("beforeunload", (e) => { saveGameToLocalStorage() })
</script>

<main>
  <section id="overview">
    <h1>Tubip Fabrication Simulator</h1>
    <div class="stats">
      <p>coins: {game.state.coins}</p>
      <p>tubips: {game.state.tubips}</p>
      <p>tubip material: {game.state.matter}</p>
    </div>

    <div class="news">
      <p>{game.state.news.headline}</p>
    </div>
  </section>
  
  <section id="economy">
    <div id="shareholder-value-creation">
      <Machine onEnter={() => { handleTubipGeneration() }} machineType={game.state.machineType} />
    </div>

    <div id="market">
      <NumberInput buttonLabel="sell tubips" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
    </div>
  </section>
</main>

<style>
  main {
    background-color: white;
    padding: 5%;

    min-width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  section {
    padding: 1em;
    border: solid 1pt var(--t-color-primary);
  }

  #overview {
    flex-grow: 1;
  }

  #economy {
    flex-grow: 2;
  }
</style>
