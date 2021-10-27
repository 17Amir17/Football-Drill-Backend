const { getKeeper, getPlayer, getAll } = require('../storage/players');
const express = require('express');
const router = express.Router();

router.get('/player/:id', (req, res, next) => {
  try {
    const player = getPlayer(req.params.id);
    if (!player) throw 'Player not found';
    const playerDetails = getPlayerDetails(player);
    res.json(playerDetails);
  } catch (error) {
    throwCallbackError(error, next);
  }
});

router.get('/keeper/:id', (req, res, next) => {
  try {
    const keeper = getKeeper(req.params.id);
    if (!keeper) throw 'Keeper not created yet :(';
    const keeperDetails = getKeeperDetails(keeper);
    res.json(keeperDetails);
  } catch (error) {
    throwCallbackError(error, next);
  }
});

router.get('/', (req, res, next) => {
  try {
    const playersData = [];
    const keepersData = [];
    const { players, keepers } = getAll();
    for (const p of players) {
      playersData.push(p.getDetails());
    }
    for (const k of keepers) {
      keepersData.push(k.getDetails());
    }
    res.json({ playersData, keepersData });
  } catch (error) {
    throwCallbackError(error, next);
  }
});

function getPlayerDetails(player) {
  return {
    firstName: player.firstName,
    surName: player.surName,
    salary: player.salary,
    age: player.age,
    image: player.image,
    strongLeg: player.strongLeg,
    position: player.position,
    celebrationStance: player.celebrationStance,
  };
}

function getKeeperDetails(keeper) {
  return {
    firstName: keeper.firstName,
    surName: keeper.surName,
    salary: keeper.salary,
    age: keeper.age,
    image: keeper.image,
    isLeftHanded: keeper.isLeftHanded,
    lastGoalConceded: keeper.lastGoalConceded,
  };
}

//Throw callback error so it can be caught by express
function throwCallbackError(error, next) {
  try {
    throw new Error(error);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
