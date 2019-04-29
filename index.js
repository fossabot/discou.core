const express = require('express');
const config = require('./config');
const Core = require('./Core');

const app = express();

Core.Storage.client.cluster.health({}, (err, resp) => {
  Core.Log.consola.info('-- Storage Health --', resp.body.status, resp.body.cluster_name);
});

app.listen(config.api.port, () => {
  Core.Log.consola.info('[Express] listening on', config.api.port);
});
