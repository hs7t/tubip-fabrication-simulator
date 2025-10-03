export let game = $state({
  state: {
    machineType: "dohlwropMicrowave",
    generationsPerClick: 1,
    coins: 0,
    tubips: 0,
    matter: 0,
  },
  economy: {
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

export function handleMatterPurchase(amount) {
  if (amount > 0) {
    const coinResult = game.state.coins - amount * game.economy.values.matter;
    if (coinResult >= 0) {
      game.state.coins = coinResult;
      game.state.matter += amount;
    }
  }
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
  game.state.tubips += game.state.generationsPerClick;
}

loadGame();
