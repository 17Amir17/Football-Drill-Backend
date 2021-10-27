const Player = require('../football/player');

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

function clear() {
  players = [];
  keepers = [];
}

function createStartingPlayers() {
  const bale = new Player(
    'Gareth',
    'Bale',
    7700000,
    77,
    'https://www.futwiz.com/assets/img/fifa21/faces/100837027.png',
    'Right',
    'On the couch',
    'Oh jolly!'
  );

  const messi = new Player(
    'Lionel',
    'Messi',
    99000000,
    16,
    'https://www.thesun.co.uk/wp-content/uploads/2017/04/nintchdbpict000319082025.jpg',
    'Left',
    'Striker',
    'ANKARA MESSI ANKARA MESSI ANKARA MESSI'
  );

  players.push(messi);
  players.push(bale);
}

module.exports = {
  getKeeper,
  getPlayer,
  addKeeper,
  addPlayer,
  getAll,
  clear,
  createStartingPlayers,
};
