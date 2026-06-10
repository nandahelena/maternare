# Maternarê — Estrutura inicial do MVP

Este ZIP contém uma estrutura inicial organizada em `src`, com backend em arquitetura MVC e frontend em HTML, CSS e JavaScript puro.

## O que já vem pronto

- Landing page com introdução e benefícios da Maternarê.
- Aba de login simples com escolha de perfil: **Paciente/Gestante** ou **Cliente/Equipe Maternarê**.
- Interfaces diferentes para cada perfil.
- Sidebar com ícones que expande para mostrar os nomes das abas.
- Configurações e personalização visual dentro do painel.
- Responsividade para desktop, tablet e celular.
- Estrutura MVC no backend com acesso ao banco preparado, mas sem regra funcional obrigatória ainda.
- Documentação de aderência aos requisitos do TAPI.

## Como visualizar o frontend

Abra o arquivo abaixo diretamente no navegador:

```txt
src/frontend/index.html
```

Ou rode um servidor local:

```bash
npm install
npm run frontend
```

## Como iniciar o backend futuramente

```bash
npm install
cp .env.example .env
npm run dev
```

Por enquanto, o backend é uma base estrutural para a próxima etapa. Ele já tem pastas de MVC, rotas, controllers, models e conexão com banco em PostgreSQL.


- Painel da paciente atualizado: a aba antes chamada **Benefícios** agora exibe o **Blog da Maternarê** com posts fictícios e imagens.

- Os cards do blog agora são clicáveis e abrem um modal com o conteúdo completo de cada post.

- Foram adicionadas mais 3 ligas ao frontend: **Liga de Enfermagem Obstétrica**, **Liga de Fisioterapia** e **Liga de Pediatria e Neonatologia**.

- Conversas atualizadas com exemplos mais realistas e específicos para cada liga, paciente, cliente atendido e central do cliente.
