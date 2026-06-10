const BaseModel = require('./BaseModel');

class GestanteModel extends BaseModel {
  static async findAll() {
    const result = await this.db.query('SELECT * FROM gestantes ORDER BY criado_em DESC');
    return result.rows;
  }

  static async findById(id) {
    const result = await this.db.query('SELECT * FROM gestantes WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await this.db.query(
      `INSERT INTO gestantes (nome, email, telefone, idade_gestacional, observacoes)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.nome, data.email, data.telefone, data.idade_gestacional, data.observacoes]
    );
    return result.rows[0];
  }
}

module.exports = GestanteModel;
