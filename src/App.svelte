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
    <NewsMarquee headline={game.state.news.headline} />

    <h1>Tubip Fabrication Simulator</h1>  
    <Stats />
  </section>
  
  <section id="economy">
    <Machine onEnter={() => { handleTubipGeneration() }} machineType={game.state.machineType} />
    <NumberInput buttonLabel="sell tubips" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    padding: 5%;
    width: clamp(280px, 100%, 1000px);

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
</style>
