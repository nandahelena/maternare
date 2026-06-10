-- Estrutura inicial sugerida pelo TAPI da Maternarê.
-- Execute em PostgreSQL quando iniciar a implementação funcional.

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(160) UNIQUE NOT NULL,
  senha_hash TEXT NOT NULL,
  tipo VARCHAR(30) NOT NULL CHECK (tipo IN ('paciente', 'liga', 'cliente')),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gestantes (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE SET NULL,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(160) UNIQUE NOT NULL,
  telefone VARCHAR(30),
  idade_gestacional VARCHAR(80),
  observacoes TEXT,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ligas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  descricao TEXT,
  contato VARCHAR(160),
  area VARCHAR(120),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mensagens (
  id SERIAL PRIMARY KEY,
  remetente_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  destinatario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  mensagem TEXT NOT NULL,
  data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Estrutura de apoio para o login por liga e acompanhamento dos clientes atendidos.
CREATE TABLE IF NOT EXISTS atendimentos_liga (
  id SERIAL PRIMARY KEY,
  gestante_id INTEGER REFERENCES gestantes(id) ON DELETE CASCADE,
  liga_id INTEGER REFERENCES ligas(id) ON DELETE CASCADE,
  responsavel_nome VARCHAR(120),
  status VARCHAR(80) DEFAULT 'Em acompanhamento',
  prioridade VARCHAR(80),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Estrutura futura para o blog fictício/educativo da plataforma.
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  liga_id INTEGER REFERENCES ligas(id),
  titulo VARCHAR(180) NOT NULL,
  categoria VARCHAR(80),
  resumo TEXT,
  conteudo TEXT,
  imagem_url TEXT,
  publicado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
