const { getKeeper, getPlayer } = require('../storage/players');
const express = require('express');
const router = express.Router();

router.post('/player/:id', (req, res, next) => {
  try {
    const player = getPlayer(req.params.id);
    if (!player) throw 'Player not found';
    player.goalCelebration();
    res.json({ player: player.getDetails() });
  } catch (error) {
    throwCallbackError(error, next);
  }
});

router.post('/keeper/:id', (req, res, next) => {
  try {
    const keeper = getKeeper(req.params.id);
    if (!keeper) throw 'Keeper not found';
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
