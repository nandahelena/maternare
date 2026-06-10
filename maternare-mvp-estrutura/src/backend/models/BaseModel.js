const db = require('../database/connection');

class BaseModel {
  static get db() {
    return db;
  }
}

module.exports = BaseModel;
