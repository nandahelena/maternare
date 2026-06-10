// Controller estrutural para RF04 — Página das ligas.

function listarLigas(req, res) {
  res.status(200).json({
    mensagem: 'Listagem estrutural de ligas acadêmicas.',
    dados: []
  });
}

function criarLiga(req, res) {
  res.status(201).json({
    mensagem: 'Cadastro estrutural de liga recebido.',
    dados: req.body
  });
}

module.exports = {
  listarLigas,
  criarLiga
};
