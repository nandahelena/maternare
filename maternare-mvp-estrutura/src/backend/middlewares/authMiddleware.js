// Middleware estrutural. Implementar validação de sessão/JWT na próxima etapa.
function authMiddleware(req, res, next) {
  req.usuario = {
    id: null,
    tipo: 'visitante'
  };

  next();
}

module.exports = authMiddleware;
