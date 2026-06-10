const { Pool } = require('pg');
const { databaseUrl } = require('../config/env');

// Base estrutural para banco relacional PostgreSQL.
// Preencha DATABASE_URL no .env quando iniciar a implementação funcional.
const pool = databaseUrl
  ? new Pool({ connectionString: databaseUrl })
  : null;

async function query(text, params) {
  if (!pool) {
    throw new Error('DATABASE_URL não configurada. Preencha o .env para ativar o acesso ao banco.');
  }

  return pool.query(text, params);
}

module.exports = {
  pool,
  query
};
