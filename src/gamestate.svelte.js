export let game = $state({
  state: {
    machineType: "dohlwropMicrowave",
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

function saveGameToLocalStorage() {
  localStorage.setItem("game.economy", JSON.stringify(game.economy));
  localStorage.setItem("game.state", JSON.stringify(game.state));

  console.log("saved game, " + fetchGameFromLocalStorage());
}

function fetchGameFromLocalStorage() {
  try {
    const gameEconomy = JSON.parse(localStorage.getItem("game.economy"));
    const gameState = JSON.parse(localStorage.getItem("game.state"));
    const fetchedGame = { state: gameState, economy: gameEconomy };

    console.log("fetched game, " + fetchedGame);
  } catch (e) {
    return null;
  }
}

function createNewGame() {
  let gameState = {
    machineType: "dohlwropMicrowave",
    coins: 0,
    tubips: 0,
    matter: 0,
  };

  let gameEconomy = {
    values: {
      tubips: 1,
      matter: 1,
    },
  };

  return { state: gameState, economy: gameEconomy };
}

function loadGame() {
  const savedGame = fetchGameFromLocalStorage();

  if (savedGame != null) {
    game.state = savedGame.state;
    game.economy = savedGame.economy;
  }
}

loadGame();