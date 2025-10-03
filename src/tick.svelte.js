import { generateMatter, game } from "./gamestate.svelte";

let ticks = 0;

export function loop() {
  setInterval(() => {
    ticks++;

    if (ticks % 10 == 0) {
      generateMatter(game.economy.generationQuantities.matterPerTick);
    }

    loop();
  }, 6000);
}
