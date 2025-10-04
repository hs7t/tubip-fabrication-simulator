export let game = $state({
  state: {
    machineType: "dohlwropMicrowave",
    coins: 0,
    tubips: 0,
    matter: 10,
  },
  economy: {
    generationQuantities: {
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
  let coinResult = game.state.matter - game.economy.matterValues.tubips;
  if (coinResult >= 0) {
    game.state.tubips += game.economy.generationQuantities.tubipPerClick;
    game.state.coins = coinResult;
  }
}

loadGame();
