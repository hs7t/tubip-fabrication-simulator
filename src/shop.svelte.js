import { game, gameEvents } from "./gamestate.svelte";

function sendEffectEvent(event, effectId) {
  gameEvents.dispatchEvent(
    new CustomEvent(event, {
      detail: {
        id: effectId,
      },
    })
  );
}

let items = {
  dohlwropAutomator: {
    id: "dohlwropAutomator",
    name: "Dohlwrop Automator",
    description: "Automates your clicks for a bit.",
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
          // TODO: remember to set/reset tick duration, active
          game.economy.generationQuantities.tubipPerTick -= 1;
        },
      },
      duration: 40,
      active: false,
      ticksRemaining: undefined,
    },
  },
};
