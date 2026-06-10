class AtendimentoLigaModel {
  constructor({ id, gestante_id, liga_id, responsavel_nome, status, prioridade }) {
    this.id = id;
    this.gestante_id = gestante_id;
    this.liga_id = liga_id;
    this.responsavel_nome = responsavel_nome;
    this.status = status;
    this.prioridade = prioridade;
  }
}

module.exports = AtendimentoLigaModel;
