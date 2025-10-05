import { game } from "./gamestate.svelte";
import { gameEvents } from "./gamestate.svelte";

function sendNewsUpdateEvent(newsUpdate) {
  gameEvents.dispatchEvent(
    new CustomEvent("newsUpdate", {
      detail: {
        newsUpdate: newsUpdate,
      },
    })
  );
}

let newsUpdates = {
  generic: [
    {
      headline: "Acclaimed human's tubip mention sparks purchasing craze",
      effect: () => {
        game.economy.generationQuantitiesStatic.tubipPerClick += 0.2;
      },
    },
    {
      headline: "Tubip companies on the rise. Is it a bubble?",
      effect: () => {
        game.economy.generationQuantitiesStatic.tubipPerClick -= 0.2;
      },
    },
  ],
};

function fetchRandomNewsUpdate(source) {
  return source[Math.floor(Math.random() * source.length)];
}

export function updateNews() {
  const fetchNewHeadline =
    Math.random() > 0.3 || game.state.news.headline == undefined;
  if (fetchNewHeadline == true) {
    game.state.news.headline = fetchRandomNewsUpdate(
      newsUpdates.generic
    ).headline;
    sendNewsUpdateEvent();
  }
}

gameEvents.addEventListener("tick", (e) => {
  // @ts-ignore
  let ticks = e.detail.tickCount;
  if (ticks % 10 == 0) {
    updateNews();
  }
});

// News update effects
gameEvents.addEventListener("newsUpdate", (e) => {
  // @ts-ignore
  const eventNewsUpdate = e.detail.newsUpdate;
  eventNewsUpdate.effect()
});