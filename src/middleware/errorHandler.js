function errorHandler(err, request, response, next) {
  response.status(500).send({ message: err.message });
}

module.exports = errorHandler;
