<script>
  import Machine from "./lib/Machine.svelte";
  import NumberInput from "./lib/NumberInput.svelte";
  import { gameState } from "./gamestate.svelte.js";
</script>

<main>
  <h1>Tubip Fabrication Simulator</h1>

  <section id="shareholder-value-creation">
      <Machine machineType={gameState.machineType} />
  </section>

  <section id="market">
      <NumberInput buttonLabel="buy tubip material"></NumberInput>
      <NumberInput buttonLabel="sell tubip material"></NumberInput>
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
