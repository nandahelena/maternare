# Aderência ao TAPI — Projeto Maternarê

Este documento resume como a estrutura do ZIP atende ao TAPI da Maternarê.

## Objetivo do projeto

A estrutura foi criada para apoiar uma plataforma web centralizada para cadastro, acompanhamento e comunicação entre gestantes, ligas acadêmicas e equipe cliente.

## Requisitos funcionais mapeados

| Requisito | Como aparece nesta estrutura |
|---|---|
| RF01 — Cadastro de gestantes | Frontend possui aba **Meu perfil** para paciente e aba **Gestantes** para cliente. Backend possui `GestanteModel`, `gestanteController` e `gestanteRoutes`. |
| RF02 — Login básico | Frontend possui tela de login com seleção de perfil: Paciente/Gestante, Liga Acadêmica ou Cliente/Equipe. O acesso por liga permite escolher a liga e informar quem está conduzindo. Backend possui `authController` e `authRoutes`. |
| RF03 — Visualização de perfil | Frontend possui formulário visual de perfil da paciente. Backend possui rota estrutural `GET /api/gestantes/:id`. |
| RF04 — Página das ligas | Frontend possui cards de ligas para paciente, área de gestão das ligas para cliente e painel próprio para liga acadêmica. Backend possui `LigaModel`, `AtendimentoLigaModel`, `ligaController` e `ligaRoutes`. |
| RF05 — Sistema de mensagens | Frontend possui chat visual interno. Backend possui `mensagemController` e `mensagemRoutes`. |
| RF06 — Histórico de mensagens | Frontend simula histórico no chat, central de mensagens e conversas por liga com clientes atendidos. Backend possui `MensagemModel.findHistorico`. |

## Requisitos não funcionais contemplados

- Interface responsiva em desktop, tablet e celular.
- Navegação intuitiva por landing page, login e dashboards separados.
- Código organizado em `src/frontend` e `src/backend`.
- Backend em arquitetura MVC.
- Banco relacional preparado com PostgreSQL em `src/backend/database/schema.sql`, incluindo base para `usuarios`, `gestantes`, `ligas`, `mensagens` e `atendimentos_liga`.
- Estrutura compatível com deploy futuro em Render ou Railway.
- Base para autenticação e segurança com `helmet`, `cors` e `.env.example`.

## Estrutura do backend

```txt
src/backend/
├── app.js
├── server.js
├── config/
├── controllers/
├── database/
├── middlewares/
├── models/
├── routes/
└── services/
```

## Estrutura do frontend

```txt
src/frontend/
├── index.html
├── assets/
├── css/
└── js/
```

## Observação

O backend foi deixado como base estrutural porque a implementação funcional completa será feita em etapa posterior. O frontend já é navegável e demonstra os fluxos principais.
