<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/components/NumberInput.svelte";
  import { game, saveGameToLocalStorage, handleTubipGeneration, handleTubipSale } from "./gamestate.svelte.js";
  import './tick.svelte.js'
  import './news.svelte.js'
  import NewsMarquee from "./lib/NewsMarquee.svelte";
  import Stats from "./lib/Stats.svelte";
  import Shop from "./lib/Shop.svelte";

  window.addEventListener("beforeunload", (e) => { saveGameToLocalStorage() })
</script>

<main>
  <section id="overview">
    <NewsMarquee headline={game.state.news.headline}/>

    <div class="infobox">
      <h1>Tubip Fabrication Simulator</h1>  
      <Stats />
    </div>

    <div class="market">
      <h2>Market</h2>
      <NumberInput buttonLabel="sell tubip" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>

      <Shop />
    </div>
  </section>
  
  <section id="economy">
    <Machine onEnter={() => { handleTubipGeneration() }} />
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
    align-items: center;

    margin: auto;

    background-color: inherit;
  }

  section {
    display: flex;
    flex-direction: column;
    min-width: 20vw;
    flex: 1 1 400px;

    padding: 1em;
    gap: 2em;

    border-radius: var(--t-radius-large);
  }

  #overview {
    flex-shrink: 2;
    flex-grow: unset;
  }

  #overview .infobox, #overview .market {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }

  #economy {
    justify-content: center;
    align-items: center;
  }
</style>
