function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({
    erro: err.message || 'Erro interno no servidor',
    detalhe: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
}

module.exports = errorHandler;
