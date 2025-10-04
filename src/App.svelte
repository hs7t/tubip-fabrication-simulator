<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/NumberInput.svelte";
  import { game, saveGameToLocalStorage, handleTubipGeneration, handleTubipSale } from "./gamestate.svelte.js";
  import './tick.svelte.js'
  import './news.svelte.js'
  import NewsMarquee from "./lib/NewsMarquee.svelte";
  import Stats from "./lib/Stats.svelte";

  window.addEventListener("beforeunload", (e) => { saveGameToLocalStorage() })
</script>

<main>
  <section id="overview">
    <NewsMarquee headline={game.state.news.headline}/>
    <h1>Tubip Fabrication Simulator</h1>  
    <Stats />
    <hr>
    <div>
      <h2>Market</h2>
      <NumberInput buttonLabel="sell tubips" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
    </div>
  </section>
  
  <section id="economy">
    <Machine onEnter={() => { handleTubipGeneration() }} machineType={game.state.machineType} />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    gap: 1rem;
    padding: 5%;
    width: clamp(280px, 100%, 1200px);

    margin: auto;

    background-color: inherit;
  }

  section {
    display: flex;
    flex-direction: column;
    min-width: 20vw;
    flex: 1 1 400px;

    padding: 1em;
    gap: 1em;

    border-radius: var(--t-radius-large);
  }

  #overview {
    flex-shrink: 2;
    flex-grow: unset;
  }
</style>
