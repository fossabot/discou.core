const repl = require('repl');

class DiscouCli {
  constructor(name) {
    this.repl = repl;
    this.cli = this.repl.start(`${name}> `);
  }
}

module.exports = DiscouCli;
