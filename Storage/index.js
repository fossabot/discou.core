class DiscouStorage {
  constructor() {
    this.client = require('./Elastic');
    this.errors = this.client.errors;
  }

  search(params) {
    return this.client.search(params);
  }

  createIndex(name, callback) {
    this.client.indices.create({ index: name }, callback);
  }

  deleteIndex(name, callback) {
    this.client.indices.delete({ index: name }, callback);
  }

  documentAdd(id, index, type, body, callback) {
    this.client.index({
      index,
      id,
      type,
      body,
    }, callback);
  }

  documentRemove(id, index, type, callback) {
    this.client.delete({
      index,
      id,
      type,
    }, callback);
  }
}
module.exports = DiscouStorage;
