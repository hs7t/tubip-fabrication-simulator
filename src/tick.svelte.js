import {
  game,
  generateMatter,
  saveGameToLocalStorage,
} from "./gamestate.svelte.js";
import { updateNews } from "./news.svelte.js";

let ticks = 0;

function runLoop() {
  setInterval(() => {
    ticks++;

    if (ticks % 2 == 0) {
      generateMatter(game.economy.generationQuantities.matterPerTick);
      console.log("Generated matter");
    }

    if (ticks % 10 == 0) {
      updateNews();
    }

    if (ticks % 1 == 0) {
      saveGameToLocalStorage();
    }

    console.log("Tick");
  }, 3000);
}

runLoop();
