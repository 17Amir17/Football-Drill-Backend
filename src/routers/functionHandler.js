const { getKeeper, getPlayer } = require('../storage/players');
const express = require('express');
const router = express.Router();

router.post('/player', (req, res, next) => {
  try {
    const player = getPlayer();
    if (!player) throw 'Player not created yet :(';
    player.goalCelebration();
    res.json({ player: player.getDetails() });
  } catch (error) {
    throwCallbackError(error, next);
  }
});

router.post('/keeper', (req, res, next) => {
  try {
    const keeper = getKeeper();
    if (!keeper) throw 'Keeper not created yet :(';
    keeper.concededAGoal();
    res.json({ keeper: keeper.getDetails() });
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
