// Controller estrutural para RF01 e RF03.

function listarGestantes(req, res) {
  res.status(200).json({
    mensagem: 'Listagem estrutural de gestantes.',
    dados: []
  });
}

function buscarGestante(req, res) {
  res.status(200).json({
    mensagem: 'Perfil estrutural de gestante.',
    id: req.params.id
  });
}

function criarGestante(req, res) {
  res.status(201).json({
    mensagem: 'Cadastro estrutural de gestante recebido.',
    dados: req.body
  });
}

module.exports = {
  listarGestantes,
  buscarGestante,
  criarGestante
};
