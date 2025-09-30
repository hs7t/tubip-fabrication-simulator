<script>
  import GameView from "./lib/GameView.svelte";
</script>

<header>
  <h1>Tubip Fabrication Simulator</h1>
</header>
<main>
  <GameView />
</main>

<style>
  main {
    width: 80%;
    aspect-ratio: 4 / 3;
    width: min(100vw, 100vh);
  }
</style>
