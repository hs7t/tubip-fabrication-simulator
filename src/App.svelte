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
    <NewsMarquee headline={game.state.news.headline} />
  </section>
  
  <section id="economy">
    <Machine onEnter={() => { handleTubipGeneration() }} machineType={game.state.machineType} />
    <NumberInput buttonLabel="sell tubips" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
  </section>
</main>

<style>
  main {
    background-color: inherit;
    padding: 5%;

    width: clamp(280px, 100%, 1000px);

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 1em;
    gap: 1em;

    border-radius: var(--t-radius-large);
  }

  #overview {
    flex-shrink: 3;
  }

  #economy {
    flex-grow: 2;
    align-items: center;
    justify-content: center;
  }
</style>
