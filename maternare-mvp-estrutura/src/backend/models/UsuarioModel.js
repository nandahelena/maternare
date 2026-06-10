const BaseModel = require('./BaseModel');

class UsuarioModel extends BaseModel {
  static async findByEmail(email) {
    const result = await this.db.query('SELECT * FROM usuarios WHERE email = $1 LIMIT 1', [email]);
    return result.rows[0];
  }

  static async create({ nome, email, senhaHash, tipo }) {
    const result = await this.db.query(
      'INSERT INTO usuarios (nome, email, senha_hash, tipo) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, senhaHash, tipo]
    );
    return result.rows[0];
  }
}

module.exports = UsuarioModel;
