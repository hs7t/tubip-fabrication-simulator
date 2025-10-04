import { generateMatter, game } from "./gamestate.svelte";

let ticks = 0;

function runLoop() {
  setInterval(() => {
    ticks++;

    if (ticks % 2 == 0) {
      generateMatter(game.economy.generationQuantities.matterPerTick);
      console.log("Generated matter");
    }

    console.log("Tick");
  }, 3000);
}

runLoop();