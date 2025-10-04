import { game } from "./gamestate.svelte";
import { gameEvents } from "./tick.svelte";

let genericHeadlines = [
  {
    headline: "Acclaimed human's tubip mention sparks purchasing craze",
    priceMultiplier: 1.2,
  },
  {
    headline: "Tubip companies on the rise. Bubble?",
    priceMultiplier: 0.8,
  },
];

function fetchRandomHeadline(source) {
  return source[Math.floor(Math.random() * source.length)];
}

export function updateNews() {
  const fetchNewHeadline =
    Math.random() > 0.6 || game.state.news.headline == undefined;
  if (fetchNewHeadline == true) {
    game.state.news.headline = fetchRandomHeadline(genericHeadlines).headline;
  }
}

gameEvents.addEventListener("tick", (e) => {
  // @ts-ignore
  let ticks = e.detail.tickCount;
  if (ticks % 20 == 0) {
    updateNews();
  }
});