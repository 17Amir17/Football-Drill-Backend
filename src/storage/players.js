let currentPlayer;
let currentGoalKeeper;

function getKeeper() {
  return currentGoalKeeper;
}

function getPlayer() {
  return currentPlayer;
}

function setKeeper(keeper) {
  currentGoalKeeper = keeper;
}

function setPlayer(player) {
  currentPlayer = player;
}

module.exports = { getKeeper, getPlayer, setKeeper, setPlayer };
