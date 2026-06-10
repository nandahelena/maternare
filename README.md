<div align="center">
  <img src="docs/logo-maternare.svg" alt="Logo Maternarê" width="180" />

  <h1>Maternarê</h1>
  <p><strong>Plataforma web de acolhimento materno — cuidado centralizado.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/status-MVP-c084fc?style=flat-square" alt="Status MVP" />
    <img src="https://img.shields.io/badge/license-MIT-f9a8d4?style=flat-square" alt="Licença MIT" />
    <img src="https://img.shields.io/badge/Node.js-18+-6a994e?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Frontend-HTML%20%2F%20CSS%20%2F%20JS-f97316?style=flat-square&logo=html5&logoColor=white" alt="Frontend" />
  </p>
</div>

---

## Sobre o projeto

A **Maternarê** é uma plataforma web de acolhimento materno que centraliza o contato entre gestantes, ligas acadêmicas e a equipe do projeto. O objetivo é oferecer uma experiência simples, acessível e segura para organizar cadastros, mensagens, páginas das ligas e histórico de acompanhamento em um único lugar.

Este repositório contém a estrutura inicial do MVP, com frontend navegável e backend em arquitetura MVC pronto para integração.

---

## Funcionalidades do MVP

### Para gestantes / pacientes
- Tela de login com seleção de perfil
- Painel pessoal com perfil e dados de acompanhamento
- Acesso às páginas das ligas acadêmicas
- Chat interno com histórico de mensagens
- Blog com posts educativos da plataforma

### Para ligas acadêmicas
- Painel próprio por liga
- Acesso à lista de gestantes acompanhadas
- Troca de mensagens internas
- Registro de atendimentos e responsáveis

### Para a equipe cliente
- Visão geral de gestantes cadastradas
- Gerenciamento das ligas
- Central de mensagens e histórico de conversas

### Geral
- Landing page com apresentação e benefícios da plataforma
- Responsividade completa: desktop, tablet e celular
- Sidebar expansível com ícones e nomes de navegação

---

## Stack tecnológica

| Camada | Tecnologias |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript (vanilla) |
| **Backend** | Node.js, Express.js |
| **Banco de dados** | PostgreSQL |
| **Segurança** | Helmet, CORS, dotenv |
| **Dev tools** | Nodemon, npx serve |

---

## Estrutura do projeto

```
maternare.S2/
├── docs/                          # Frontend publicável (GitHub Pages)
│   ├── index.html                 # Ponto de entrada da aplicação
│   ├── styles.css                 # Estilos globais
│   ├── main.js                    # Lógica do frontend
│   ├── logo-maternare.svg         # Logotipo da plataforma
│   └── src/
│       ├── frontend/
│       │   ├── assets/            # Imagens e recursos estáticos
│       │   ├── css/               # Estilos adicionais
│       │   └── js/                # Scripts auxiliares
│       ├── backend/
│       │   ├── app.js             # Configuração do Express
│       │   ├── server.js          # Entrada do servidor
│       │   ├── config/            # Variáveis de ambiente
│       │   ├── controllers/       # Lógica de negócio (MVC)
│       │   ├── database/
│       │   │   ├── connection.js  # Conexão com PostgreSQL
│       │   │   └── schema.sql     # Estrutura das tabelas
│       │   ├── middlewares/       # Auth e tratamento de erros
│       │   ├── models/            # Modelos de dados (MVC)
│       │   ├── routes/            # Rotas da API REST
│       │   └── services/          # Serviços auxiliares
│       └── docs/
│           ├── estrutura-tapi.md  # Aderência aos requisitos do TAPI
│           └── guia-visual.md     # Guia de identidade visual
```

---

## Banco de dados

O esquema relacional em PostgreSQL contém as seguintes tabelas:

| Tabela | Descrição |
|---|---|
| `usuarios` | Autenticação e tipo de perfil (`paciente`, `liga`, `cliente`) |
| `gestantes` | Dados das gestantes cadastradas |
| `ligas` | Informações das ligas acadêmicas |
| `mensagens` | Histórico de mensagens entre usuários |
| `atendimentos_liga` | Vínculo entre gestantes e ligas com status e responsável |
| `blog_posts` | Posts educativos por liga (base futura) |

---

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/health` | Verifica se o servidor está rodando |
| `POST` | `/api/auth/login` | Login de usuário |
| `GET` | `/api/gestantes` | Lista gestantes |
| `GET` | `/api/gestantes/:id` | Perfil de uma gestante |
| `GET` | `/api/ligas` | Lista ligas acadêmicas |
| `GET` | `/api/mensagens` | Histórico de mensagens |
| `POST` | `/api/mensagens` | Envia nova mensagem |

---

## Como rodar

### Visualizar o frontend

Abra diretamente no navegador:

```
docs/index.html
```

Ou com servidor local:

```bash
npm install
npm run frontend
```

### Iniciar o backend

```bash
npm install
cp docs/.env.example docs/.env
# Edite o .env com os dados do seu banco PostgreSQL
npm run dev
```

### Variáveis de ambiente

Crie o arquivo `.env` dentro de `docs/` com base no `.env.example`:

```env
PORT=3000
DATABASE_URL=postgres://usuario:senha@localhost:5432/maternare
NODE_ENV=development
FRONTEND_ORIGIN=http://localhost:3000
```

### Criar as tabelas no banco

```bash
psql -U seu_usuario -d maternare -f docs/src/backend/database/schema.sql
```

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o backend com hot reload (nodemon) |
| `npm start` | Inicia o backend em produção |
| `npm run frontend` | Serve o frontend com `npx serve` |

---

## Ligas acadêmicas integradas

- Liga Materno-Infantil
- Liga de Nutrição
- Liga de Psicologia
- Liga de Enfermagem Obstétrica
- Liga de Fisioterapia
- Liga de Pediatria e Neonatologia

---

## Requisitos funcionais (TAPI)

| Requisito | Status |
|---|---|
| RF01 — Cadastro de gestantes | ✅ Estruturado |
| RF02 — Login por perfil | ✅ Estruturado |
| RF03 — Visualização de perfil | ✅ Estruturado |
| RF04 — Página das ligas | ✅ Estruturado |
| RF05 — Sistema de mensagens | ✅ Estruturado |
| RF06 — Histórico de mensagens | ✅ Estruturado |

> O backend foi entregue como base estrutural. A implementação funcional completa ocorre na próxima etapa do projeto.

---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

---

<div align="center">
  <sub>Feito com carinho para o projeto Maternarê 💗</sub>
</div>
