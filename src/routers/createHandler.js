const { setKeeper, setPlayer } = require('../storage/players');
const express = require('express');
const Player = require('../football/player');
const Keeper = require('../football/goalKeeper');
const router = express.Router();

router.post('/player', (request, response, next) => {
  try {
    const playerDetails = request.body;
    const player = new Player(
      playerDetails.firstName,
      playerDetails.surName,
      playerDetails.salary,
      playerDetails.age,
      playerDetails.image,
      playerDetails.strongLeg,
      playerDetails.position,
      playerDetails.celebrationSentance
    );
    setPlayer(player);
    response.json({ message: player.getDetails() });
  } catch (error) {
    throwCallbackError(error, next);
  }
});

router.post('/keeper', (request, response, next) => {
  try {
    const keeperDetails = request.body;
    const keeper = new Keeper(
      keeperDetails.firstName,
      keeperDetails.surName,
      keeperDetails.salary,
      keeperDetails.age,
      keeperDetails.image,
      keeperDetails.isLeftHander,
      new Date(JSON.parse(`"${keeperDetails.lastGoalConceded}"`))
    );
    setKeeper(keeper);
    response.json({ message: keeper.getDetails() });
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
