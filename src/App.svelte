<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/NumberInput.svelte";
  import { game, saveGameToLocalStorage, handleTubipGeneration, handleTubipSale } from "./gamestate.svelte.js";
  import './tick.svelte.js'
  import NewsMarquee from "./lib/NewsMarquee.svelte";

  window.addEventListener("beforeunload", (e) => { saveGameToLocalStorage() })

  import { slide } from 'svelte/transition'
</script>

<main>
  <section id="overview">
    <h1>Tubip Fabrication Simulator</h1>
    <div class="stats">
      {#each ["coins", "tubips", "matter"] as stat}
        <p>{stat}:</p>
        {#key game.state[stat]}
          <p transition:slide>{game.state[stat]}</p>
        {/key}
      {/each}
    </div>

    <div class="news">
      <NewsMarquee headline={game.state.news.headline} />
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
    background-color: inherit;
    padding: 5%;

    min-width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 1em;
    gap: 1em;
    border: solid 1pt var(--t-color-primary);

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
