import { game, gameEvents, registerAutoClicker } from "./gamestate.svelte";
import { newsUpdates, updateNewsWithUpdate } from "./news.svelte";

function sendEffectEvent(event, effectItemId) {
  gameEvents.dispatchEvent(
    new CustomEvent(event, {
      detail: {
        itemId: effectItemId,
      },
    })
  );
}

export let items = $state({
  dohlwropAutomator: {
    id: "dohlwropAutomator",
    name: "Dohlwrop Automator",
    description: "Derives tubip from thin air.",
    coinPrice: 30,
    level: {
      max: 1,
      current: 0,
    },
    effect: {
      actions: {
        onStart: () => {
          sendEffectEvent("effectStart", "dohlwropAutomator");
          registerAutoClicker(2, items["dohlwropAutomator"]);
        },
        onEnd: () => {
          sendEffectEvent("effectEnd", "dohlwropAutomator");
        },
      },
      duration: undefined,
      active: false,
      ticksRemaining: undefined,
    },
  },
  bribe: {
    id: "bribe",
    name: "Lobbying",
    description: "Gift an important person a nice beach vacation.",
    coinPrice: 10,
    level: {
      max: 1,
      current: 0,
    },
    effect: {
      actions: {
        onStart: () => {
          sendEffectEvent("effectStart", "bribe");
          updateNewsWithUpdate(newsUpdates.itemRelated.bribe);
        },
        onEnd: () => {},
      },
      duration: undefined,
      active: false,
      ticksRemaining: undefined,
    },
  },
});

export function isItemAvailable(itemId) {
  let item = items[itemId];
  const coinsRemaining = game.state.coins - item.coinPrice;

  if (coinsRemaining < 0) return false;
  if (item.level.max == item.level.current) return false;

  return true;
}

export function handleItemPurchase(itemId) {
  let item = items[itemId];
  const coinsRemaining = game.state.coins - item.coinPrice;

  if (!isItemAvailable(itemId)) return;

  game.state.coins = coinsRemaining;
  item.effect.actions.onStart();
}

gameEvents.addEventListener("effectStart", (e) => {
  // @ts-ignore
  let itemId = e.detail.id;
  let effect = items[itemId].effect;

  if (effect.duration) {
    items[itemId].ticksRemaining = effect.duration;
  }
  items[itemId].active = true;
  items[itemId].level += 1;
});

gameEvents.addEventListener("effectEnd", (e) => {
  // @ts-ignore
  let itemId = e.detail.id;

  items[itemId].ticksRemaining = undefined;
  items[itemId].active = false;
});

gameEvents.addEventListener("tick", () => {
  for (let itemKey of Object.keys(items)) {
    if ((items[itemKey].active = false)) break;

    const effectTicksRemaining = items[itemKey].effect.ticksRemaining;

    // End effect if no ticks remaining
    if (effectTicksRemaining == 0) {
      sendEffectEvent("effectEnd", items[itemKey].id);
      break;
    }

    // Decrease ticks by one if ticking
    if (effectTicksRemaining != undefined) {
      items[itemKey].effect.ticksRemaining -= 1;
    }
  }
});
