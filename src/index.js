const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const createRouter = require('./routers/createHandler');
const setRouter = require('./routers/setHandler');
const getRouter = require('./routers/getHandler');
const server = express();
const port = process.env.PORT || 3000;

server.use(cors());
server.use(express.json());
server.use('/create', createRouter);
server.use('/set', setRouter);
server.use('/get', getRouter);

server.use(errorHandler);
server.listen(port, function () {
  console.log(`Server Listening on port ${port}`);
});
