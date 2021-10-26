const { getKeeper, getPlayer } = require('../storage/players');
const express = require('express');
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

router.patch('/keeper', (req, res, next) => {
  try {
    const keeper = getKeeper();
    if (!keeper) throw 'keeper not made yet';
    for (const query in req.query) {
      switch (query) {
        case 'salary':
          keeper.salary = Number(req.query[query]);
          break;
        case 'age':
          keeper.age = Number(req.query[query]);
          break;
        case 'surName':
          keeper.surName = req.query[query];
          break;
        default:
          throw 'Unknown query ' + query;
      }
    }
    res.json({ body: keeper.getDetails() });
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
