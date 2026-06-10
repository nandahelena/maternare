// Controller estrutural para RF02 — Login básico.
// A autenticação real será implementada na próxima etapa.

function login(req, res) {
  const { email, tipo } = req.body;

  res.status(200).json({
    mensagem: 'Login estrutural recebido. Implementar autenticação real posteriormente.',
    usuario: {
      email,
      tipo: tipo || 'paciente'
    }
  });
}

function register(req, res) {
  res.status(201).json({
    mensagem: 'Cadastro estrutural recebido. Implementar persistência posteriormente.',
    dados: req.body
  });
}

module.exports = {
  login,
  register
};
