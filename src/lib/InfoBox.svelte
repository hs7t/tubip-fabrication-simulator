<script>
    import Ticker from "./components/Ticker.svelte";
    import { game } from "../gamestate.svelte";
</script>
<section class="info-box">
    <Ticker headline={game.state.news.headline}></Ticker>
</section>