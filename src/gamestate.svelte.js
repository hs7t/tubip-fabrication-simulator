export let game = $state({
  state: {},
  economy: {},
});

function saveGameToLocalStorage() {
  localStorage.setItem("game.economy", JSON.stringify(game.economy));
  localStorage.setItem("game.state", JSON.stringify(game.state));
}

function fetchGameFromLocalStorage() {
  try {
    let gameEconomy = JSON.parse(localStorage.getItem("game.economy"));
    let gameState = JSON.parse(localStorage.getItem("game.state"));
    return { state: gameState, economy: gameEconomy };
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
  const newGame = createNewGame();

  if (savedGame != null) {
    game.state = savedGame.state;
    game.economy = savedGame.economy;
  } else {
    game.state = newGame.state;
    game.economy = newGame.economy;
  }
}