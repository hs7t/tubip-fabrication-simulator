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

export let newsUpdates = {
  generic: [
    {
      headline: "Acclaimed human's tubip mention sparks purchasing craze",
      effect: () => {
        game.economy.generationQuantitiesStatic.tubipPerClick += 0.5;
        game.economy.generationQuantitiesStatic.matterPerTick -= 0.5;
      },
    },
    {
      headline:
        "Fears of tubip economy bubble grow as more companies on the rise",
      effect: () => {
        game.economy.generationQuantitiesStatic.matterPerTick += 0.5;
        game.economy.generationQuantitiesStatic.tubipPerClick -= 0.5;
      },
    },
    {
      headline:
        "'I'm so tired' says TFS dev after reaching 15 hours executing initially silly idea",
      effect: () => {},
    },
    {
      headline:
        "Jort Company launches 'Shorts', jorts made out of non-jean material",
      effect: () => {},
    },
  ],
  itemRelated: {
    bribe: {
      headline:
        "Senator pushes bill with sweeping changes to tubip industry regulation",
      effect: () => {
        game.economy.generationQuantitiesStatic.tubipPerClick += 2;
      },
    },
  },
};

function fetchRandomNewsUpdate(source) {
  return source[Math.floor(Math.random() * source.length)];
}

export function updateNewsWithUpdate(newsUpdate) {
  game.state.news.headline = newsUpdate.headline;
  sendNewsUpdateEvent(newsUpdate);
}

export function updateNewsWithGeneric() {
  const fetchNewHeadline =
    Math.random() > 0.3 || game.state.news.headline == undefined;
  if (fetchNewHeadline == true) {
    updateNewsWithUpdate(fetchRandomNewsUpdate(newsUpdates.generic));
  }
}

gameEvents.addEventListener("tick", (e) => {
  // @ts-ignore
  let ticks = e.detail.tickCount;
  if (ticks % 10 == 0) {
    updateNewsWithGeneric();
  }
});

// News update effects
gameEvents.addEventListener("newsUpdate", (e) => {
  // @ts-ignore
  const eventNewsUpdate = e.detail.newsUpdate;
  eventNewsUpdate.effect()
});