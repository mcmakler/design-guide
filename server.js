const server = require('pushstate-server');

const port = process.env.PORT || 9001;

console.log(`!! [MCMAKLER-STYLEGUIDE]: Listening on port ${port} !!`);

server.start({
  port,
  directory: './dist',
});
