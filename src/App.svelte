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
    <p>coins: {game.state.coins}</p>
    <p>tubips: {game.state.tubips}</p>
    <p>tubip material: {game.state.matter}</p>
  </section>
  
  <section id="news">
    <p>{game.state.news.headline}</p>
  </section>

  <section id="economy">
    <section id="shareholder-value-creation">
        <Machine onEnter={() => { handleTubipGeneration() }} machineType={game.state.machineType} />
    </section>

    <section id="market">
      <NumberInput buttonLabel="sell tubips" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
    </section>
  </section>
</main>

<style>
  main {
    background-color: white;
    padding: 5%;

    min-width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
