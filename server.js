const server = require('pushstate-server');

const port = process.env.PORT || 9001;

server.start({
  port,
  directory: './dist',
});
