/* eslint-disable import/no-dynamic-require */
const env = process.env.NODE_ENV || 'dev';
const config = `./webpack/${env}.config.js`;

module.exports = require(config);
