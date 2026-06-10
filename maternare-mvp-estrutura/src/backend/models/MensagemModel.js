const BaseModel = require('./BaseModel');

class MensagemModel extends BaseModel {
  static async findHistorico(usuarioA, usuarioB) {
    const result = await this.db.query(
      `SELECT * FROM mensagens
       WHERE (remetente_id = $1 AND destinatario_id = $2)
          OR (remetente_id = $2 AND destinatario_id = $1)
       ORDER BY data_envio ASC`,
      [usuarioA, usuarioB]
    );
    return result.rows;
  }

  static async create({ remetente_id, destinatario_id, mensagem }) {
    const result = await this.db.query(
      'INSERT INTO mensagens (remetente_id, destinatario_id, mensagem) VALUES ($1, $2, $3) RETURNING *',
      [remetente_id, destinatario_id, mensagem]
    );
    return result.rows[0];
  }
}

module.exports = MensagemModel;
