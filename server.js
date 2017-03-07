const server = require('pushstate-server');

server.start({
  port: process.env.PORT || 9001,
  directory: './dist',
});
