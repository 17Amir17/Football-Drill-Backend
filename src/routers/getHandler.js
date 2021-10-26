const { getKeeper, getPlayer } = require('../storage/players');
const express = require('express');
const router = express.Router();

router.get('/player', (req, res, next) => {
  try {
    const player = getPlayer();
    if (!player) throw 'Player not created yet :(';
    const playerDetails = {
      firstName: player.firstName,
      surName: player.surName,
      salary: player.salary,
      age: player.age,
      image: player.image,
      strongLeg: player.strongLeg,
      position: player.position,
      celebrationStance: player.celebrationStance,
    };
    res.json(playerDetails);
  } catch (error) {
    throwCallbackError(error, next);
  }
});

router.get('/keeper', (req, res, next) => {
  try {
    const keeper = getKeeper();
    if (!keeper) throw 'Keeper not created yet :(';
    const keeperDetails = {
      firstName: keeper.firstName,
      surName: keeper.surName,
      salary: keeper.salary,
      age: keeper.age,
      image: keeper.image,
      isLeftHanded: keeper.isLeftHanded,
      lastGoalConceded: keeper.lastGoalConceded,
    };
    res.json(keeperDetails);
  } catch (error) {
    throwCallbackError(error, next);
  }
});

//Throw callback error so it can be caught by express
function throwCallbackError(error, next) {
  try {
    throw new Error(error);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
