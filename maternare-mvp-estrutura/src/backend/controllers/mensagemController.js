// Controller estrutural para RF05 e RF06 — Mensagens e histórico.

function listarHistorico(req, res) {
  res.status(200).json({
    mensagem: 'Histórico estrutural de mensagens.',
    conversaCom: req.params.usuarioId,
    dados: []
  });
}

function enviarMensagem(req, res) {
  res.status(201).json({
    mensagem: 'Mensagem estrutural recebida.',
    dados: req.body
  });
}

module.exports = {
  listarHistorico,
  enviarMensagem
};
