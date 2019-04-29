const Storage = require('./Storage');
const Log = require('./Log');
const Cli = require('./Cli');

exports.Cli = new Cli('Discou');
exports.Log = new Log();
exports.Storage = new Storage();
