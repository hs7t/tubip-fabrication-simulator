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
    <h1>Tubip Fabrication Simulator</h1>  
    <Stats />
    <div>
      <h2>Market</h2>
      <NumberInput buttonLabel="sell tubips" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
    </div>
  </section>
  
  <section id="economy">
    <NewsMarquee headline={game.state.news.headline}/>
    <Machine onEnter={() => { handleTubipGeneration() }} machineType={game.state.machineType} />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;

    gap: 1rem;
    padding: 5%;
    /*width: clamp(280px, 100%, 1000px);*/

    margin: auto;

    background-color: inherit;
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 1em;
    gap: 1em;
    justify-content: center;
    align-items: center;

    border-radius: var(--t-radius-large);
  }

  #overview {
    flex-shrink: 3;
  }
</style>
