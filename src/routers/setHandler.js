const { getKeeper, getPlayer } = require('../storage/players');
const express = require('express');
const Player = require('../football/player');
const Keeper = require('../football/goalKeeper');
const router = express.Router();

router.patch('/player', (req, res, next) => {
  try {
    const player = getPlayer();
    if (!player) throw 'player not made yet';
    for (const query in req.query) {
      switch (query) {
        case 'salary':
          player.salary = Number(req.query[query]);
          break;

        case 'age':
          player.age = Number(req.query[query]);
          break;

        case 'surName':
          player.surName = req.query[query];
          break;

        case 'strongLeg':
          player.strongLeg = req.query[query];
          break;

        case 'position':
          player.position = req.query[query];
          break;

        case 'celebrationSentance':
          player.celebrationSentance = req.query[query];
          break;

        default:
          throw 'Unknown query ' + query;
      }
    }
    res.json({ body: player.getDetails() });
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
