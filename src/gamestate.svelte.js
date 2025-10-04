export let game = $state({
  state: {
    machineType: "dohlwropMicrowave",
    coins: 0,
    tubips: 0,
    matter: 10,
  },
  economy: {
    randomness: 0.3,
    generationQuantities: {},
    generationQuantitiesStatic: {
      tubipPerClick: 1,
      matterPerTick: 1,
    },
    coinValues: {
      tubips: 1,
      matter: 1,
    },
    matterValues: {
      tubips: 2,
    },
  },
});

game.economy.generationQuantities = {
  // starting values, just in case; should be $derived() from randomizer function by ticker
  tubipPerClick: game.economy.generationQuantitiesStatic.tubipPerClick,
  matterPerTick: game.economy.generationQuantitiesStatic.matterPerTick,
};

export function saveGameToLocalStorage() {
  localStorage.setItem("game.economy", JSON.stringify(game.economy));
  localStorage.setItem("game.state", JSON.stringify(game.state));

  console.log("saved game, " + fetchGameFromLocalStorage());
}

function fetchGameFromLocalStorage() {
  try {
    const gameEconomy = JSON.parse(localStorage.getItem("game.economy"));
    const gameState = JSON.parse(localStorage.getItem("game.state"));
    const fetchedGame = { state: gameState, economy: gameEconomy };

    if (!(gameEconomy == null || gameState == null)) {
      console.log("fetched game, ", fetchedGame);
    } else {
      throw "ouchie";
    }

    return fetchedGame;
  } catch (e) {
    return null;
  }
}

function loadGame() {
  const savedGame = fetchGameFromLocalStorage();

  if (savedGame != null) {
    if (
      window.confirm("You have a saved game. Would you like to load it?") ==
      true
    ) {
      game.state = savedGame.state;
      game.economy = savedGame.economy;
    }
  }
}

function randomizeInteger(integer, randomness) {
  return Math.floor(integer * (1 + (Math.random() - 0.5) * randomness));
}

export function fluctuateEconomy() {
  game.economy.generationQuantities.tubipPerClick = randomizeInteger(
    game.economy.generationQuantitiesStatic,
    game.economy.randomness
  );
  game.economy.generationQuantities.matterPerTick = randomizeInteger(
    game.economy.generationQuantitiesStatic,
    game.economy.randomness
  );
}

export function generateMatter(amount = 1) {
  game.state.matter += amount;
}

export function handleTubipSale(amount) {
  let tubipResult = game.state.tubips - amount * game.economy.coinValues.tubips;
  if (tubipResult >= 0) {
    game.state.coins += amount;
    game.state.tubips = tubipResult;
    return;
  }
  console.log("failed, " + tubipResult);
}

export function handleTubipGeneration() {
  let matterResult = game.state.matter - game.economy.matterValues.tubips;
  if (matterResult >= 0) {
    game.state.tubips += game.economy.generationQuantities.tubipPerClick;
    game.state.matter = matterResult;
  }
}

loadGame();
