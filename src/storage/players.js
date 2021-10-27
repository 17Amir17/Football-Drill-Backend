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

export function createStartingPlayers() {
  const bale = new Player({
    firstName: 'Gareth',
    surName: 'Bale',
    salary: 7700000,
    age: 77,
    image: 'https://www.futwiz.com/assets/img/fifa21/faces/100837027.png',
    strongLeg: 'Right',
    position: 'On the couch',
    celebrationSentance: 'Oh jolly!',
  });

  const messi = new Player({
    firstName: 'Lionel',
    surName: 'Messi',
    salary: 99000000,
    age: 16,
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2017/04/nintchdbpict000319082025.jpg',
    strongLeg: 'Left',
    position: 'Striker',
    celebrationSentance: 'ANKARA MESSI ANKARA MESSI ANKARA MESSI',
  });

  players.push(messi);
  players.push(bale);
}

module.exports = { getKeeper, getPlayer, addKeeper, addPlayer, getAll, clear };
