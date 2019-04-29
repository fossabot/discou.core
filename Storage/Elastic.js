const { Client, errors } = require('@elastic/elasticsearch');
const config = require('../config');

const client = new Client({
  node: config.elastic.endpoint,
});

module.exports = client;
exports.errors = errors;
