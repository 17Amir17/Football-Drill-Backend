const express = require('express');

const router = express.Router();

router.get('/', (resquest, response, next) => {
  try {
    response.json({ message: 'Hello!' });
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
