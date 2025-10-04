import { game, gameEvents } from "./gamestate.svelte";

function sendEffectEvent(event, effectItemId) {
  gameEvents.dispatchEvent(
    new CustomEvent(event, {
      detail: {
        itemId: effectItemId,
      },
    })
  );
}

let items = {
  dohlwropAutomator: {
    id: "dohlwropAutomator",
    name: "Dohlwrop Automator",
    description: "Automates your clicks for a bit.",
    coinPrice: 30,
    level: {
      max: 1,
      current: 0,
    },
    effect: {
      actions: {
        onStart: () => {
          sendEffectEvent("effectStart", "dohlwropAutomator");
          game.economy.generationQuantities.tubipPerTick += 1;
        },
        onEnd: () => {
          sendEffectEvent("effectEnd", "dohlwropAutomator");
          game.economy.generationQuantities.tubipPerTick -= 1;
        },
      },
      duration: 40,
      active: false,
      ticksRemaining: undefined,
    },
  },
};

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