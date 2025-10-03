import { generateMatter } from "./gamestate.svelte";

let ticks = 0;

function loop() {
  setInterval(() => {
    ticks++;

    if (ticks % 10 == 0) {
      generateMatter(5);
    }

    loop();
  }, 6000);
}
