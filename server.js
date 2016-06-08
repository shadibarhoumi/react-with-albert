import express from 'express';

const server = express();

server.use('/static', express.static(__dirname + '/static'));
server.use('/build', express.static(__dirname + '/build'));

const port = 3507;

server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at the port ${port}`);
});
