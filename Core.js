const Storage = require('./Storage');
const Log = require('./Log');
const Cli = require('./Cli');

const cli = new Cli('Discou');
const log = new Log();
const storage = new Storage();

exports.Cli = cli;
exports.Log = log;
exports.Storage = storage;
