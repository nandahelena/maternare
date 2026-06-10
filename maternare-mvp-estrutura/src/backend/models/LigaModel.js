const BaseModel = require('./BaseModel');

class LigaModel extends BaseModel {
  static async findAll() {
    const result = await this.db.query('SELECT * FROM ligas ORDER BY nome ASC');
    return result.rows;
  }

  static async create(data) {
    const result = await this.db.query(
      'INSERT INTO ligas (nome, descricao, contato, area) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.nome, data.descricao, data.contato, data.area]
    );
    return result.rows[0];
  }
}

module.exports = LigaModel;
