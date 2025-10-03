export let game = $state({
  state: {
    machineType: "dohlwropMicrowave",
    coins: 0,
    tubips: 0,
    matter: 0,
  },
  economy: {
    generationQuantities: {
      tubipPerClick: 1,
      matterPerTick: 2,
    },
    values: {
      tubips: 1,
      matter: 1,
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
    game.state = savedGame.state;
    game.economy = savedGame.economy;
  }
}

export function generateMatter(amount = 1) {
  game.state.matter += amount;
}

export function handleTubipSale(amount) {
  if (amount > 0) {
    let tubipResult = game.state.tubips - amount * game.economy.values.tubips;
    if (tubipResult >= 0) {
      game.state.coins += amount;
      game.state.tubips = tubipResult;
      return;
    }
    console.log("failed, " + tubipResult);
  }
}

export function handleTubipGeneration() {
  game.state.tubips += game.economy.generationQuantities.tubipPerClick;
}

loadGame();
