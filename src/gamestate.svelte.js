export let game = $state({
  state: {},
  economy: {},
});

function saveGameToLocalStorage() {
  localStorage.setItem("game.economy", JSON.stringify(game.economy));
  localStorage.setItem("game.state", JSON.stringify(game.state));
}

async function fetchGameFromLocalStorage() {
  let gameEconomy = JSON.parse(await localStorage.getItem("game.economy"));
  let gameState = JSON.parse(await localStorage.getItem("game.state"));

  return { state: gameState, economy: gameEconomy };
}

function startGameFresh() {
  game.state = {
    machineType: "dohlwropMicrowave",
    coins: 0,
    tubips: 0,
    matter: 0,
  };

  game.economy = {
    values: {
      tubips: 1,
      matter: 1,
    },
  };
}
