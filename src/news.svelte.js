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
      effect: () => {
        game.economy.generationQuantitiesStatic.matterPerTick += 0.5;
      },
    },
    {
      headline:
        "'We must pretend they are a good quantity and well written enough', says President about headlines",
      effect: () => {},
    },
    {
      headline:
        "Major tubip matter holding corporation shuts down, liquidates assets after financial scandal",
      effect: () => {
        game.economy.generationQuantitiesStatic.matterPerTick += 1;
      },
    },
    {
      headline:
        "Government imposes tariff on foreign tubip in efforts to protect national industry",
      effect: () => {
        game.economy.coinValues.tubip += 1;
      },
    },
    {
      headline:
        "Health professionals warn against dangerous tubip-destroying trend: 'A slippery slope to oblivion'",
      effect: () => {
        game.economy.coinValues.tubip += 0.2;
      },
    },
    {
      headline:
        "Scientists exploring tubip usage in recent high-stakes research",
      effect: () => {
        game.economy.coinValues.tubip += 0.2;
      },
    },
    {
      headline:
        "Benefits found to acknowledging tubips for at least three hours a day",
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
    prayer: {
      headline:
        "Tubip manufacturer resorts to gnostic knowledge to increase value",
      effect: () => {
        const prayerHeard = Math.random() > 0.5;
        if (prayerHeard) {
          // 50% increase
          game.economy.generationQuantitiesStatic.matterPerTick +=
            game.economy.generationQuantitiesStatic.matterPerTick / 2;
        }
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