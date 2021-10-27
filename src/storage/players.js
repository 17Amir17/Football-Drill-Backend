let players = [];
let keepers = [];

function getKeeper(id) {
  for (const k of keepers) {
    if (k.id == id) return k; //ID COMES AS STRING THATS WHY ==
  }
  return false;
}

function getPlayer(id) {
  for (const p of players) {
    if (p.id == id) return p;
  }
  return false;
}

function addKeeper(keeper) {
  keepers.push(keeper);
}

function addPlayer(player) {
  players.push(player);
}

function getAll() {
  return { players, keepers };
}

module.exports = { getKeeper, getPlayer, addKeeper, addPlayer, getAll };
