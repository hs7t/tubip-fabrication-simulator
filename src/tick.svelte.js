import { gameEvents } from "./gamestate.svelte";

let ticks = 0;

function runLoop() {
  setInterval(() => {
    ticks++;

    gameEvents.dispatchEvent(
      new CustomEvent("tick", {
        detail: { tickCount: ticks },
      })
    );
  }, 3000);
}

runLoop();
