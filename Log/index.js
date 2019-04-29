const consola = require('consola');

class DiscouLogger {
  constructor() {
    this.consola = consola;
  }

  log(data) {
    this.consola.log(data);
  }

  error(data) {
    this.consola.error(data);
  }

  warn(data) {
    this.consola.warn(data);
  }
}

module.exports = DiscouLogger;
