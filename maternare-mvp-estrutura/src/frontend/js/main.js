const state = {
  role: 'paciente',
  userName: 'Mariana',
  ligaName: 'Liga Materno-Infantil',
  conductorName: 'Ana Clara',
  activeTab: 'inicio',
  chatTarget: 'Liga Materno-Infantil',
  clientTarget: 'Mariana Alves'
};

const appShell = document.querySelector('.app-shell');
const topbar = document.querySelector('.topbar');
const sideNav = document.querySelector('[data-side-nav]');
const dashboardContent = document.querySelector('[data-dashboard-content]');
const roleLabel = document.querySelector('[data-role-label]');
const panelKicker = document.querySelector('[data-panel-kicker]');
const panelTitle = document.querySelector('[data-panel-title]');
const userNameLabel = document.querySelector('[data-user-name]');

const pacienteTabs = [
  { id: 'inicio', label: 'Início', icon: 'home' },
  { id: 'perfil', label: 'Meu perfil', icon: 'pregnant_woman' },
  { id: 'ligas', label: 'Ligas', icon: 'local_florist' },
  { id: 'chat', label: 'Chat', icon: 'chat_bubble' },
  { id: 'beneficios', label: 'Blog', icon: 'article' },
  { id: 'configuracoes', label: 'Configurações', icon: 'settings' }
];

const clienteTabs = [
  { id: 'painel', label: 'Painel geral', icon: 'dashboard' },
  { id: 'gestantes', label: 'Gestantes', icon: 'clinical_notes' },
  { id: 'ligas', label: 'Ligas', icon: 'groups' },
  { id: 'mensagens', label: 'Mensagens', icon: 'forum' },
  { id: 'agenda', label: 'Agenda', icon: 'calendar_month' },
  { id: 'configuracoes', label: 'Configurações', icon: 'tune' }
];

const ligaTabs = [
  { id: 'painelLiga', label: 'Painel da liga', icon: 'volunteer_activism' },
  { id: 'clientes', label: 'Clientes atendidos', icon: 'supervised_user_circle' },
  { id: 'conversasLiga', label: 'Conversas', icon: 'forum' },
  { id: 'minhaLiga', label: 'Minha liga', icon: 'badge' },
  { id: 'blogLiga', label: 'Postar no blog', icon: 'edit_square' },
  { id: 'configuracoes', label: 'Configurações', icon: 'tune' }
];

const ligas = [
  {
    nome: 'Liga Materno-Infantil',
    area: 'Acompanhamento e dúvidas gerais',
    icon: 'medical_services',
    status: 'Disponível hoje'
  },
  {
    nome: 'Liga de Nutrição',
    area: 'Alimentação, rotina e bem-estar',
    icon: 'nutrition',
    status: 'Resposta em até 24h'
  },
  {
    nome: 'Liga de Psicologia',
    area: 'Apoio emocional e escuta inicial',
    icon: 'psychology',
    status: 'Plantão semanal'
  },
  {
    nome: 'Liga de Enfermagem Obstétrica',
    area: 'Sinais de atenção, rotina de cuidados e apoio no pré-natal',
    icon: 'monitor_heart',
    status: 'Plantão duas vezes por semana'
  },
  {
    nome: 'Liga de Fisioterapia',
    area: 'Postura, alongamentos e conforto corporal',
    icon: 'self_improvement',
    status: 'Orientação sob agendamento'
  },
  {
    nome: 'Liga de Pediatria e Neonatologia',
    area: 'Preparação para a chegada do bebê e cuidados iniciais',
    icon: 'child_care',
    status: 'Canal ativo para dúvidas'
  }
];

const gestantes = [
  { nome: 'Mariana Alves', semana: '24 semanas', contato: 'mariana@email.com', status: 'Em acompanhamento' },
  { nome: 'Bianca Souza', semana: '18 semanas', contato: 'bianca@email.com', status: 'Novo cadastro' },
  { nome: 'Lívia Martins', semana: '31 semanas', contato: 'livia@email.com', status: 'Aguardando retorno' }
];

const clientesAtendidos = [
  { nome: 'Mariana Alves', semana: '24 semanas', contato: 'mariana@email.com', status: 'Em acompanhamento', prioridade: 'Retorno hoje', conduzidaPor: 'Ana Clara' },
  { nome: 'Bianca Souza', semana: '18 semanas', contato: 'bianca@email.com', status: 'Novo cadastro', prioridade: 'Triagem inicial', conduzidaPor: 'Julia Moura' },
  { nome: 'Lívia Martins', semana: '31 semanas', contato: 'livia@email.com', status: 'Aguardando retorno', prioridade: 'Apoio semanal', conduzidaPor: 'Rafaela Dias' },
  { nome: 'Camila Rocha', semana: '29 semanas', contato: 'camila@email.com', status: 'Conversa aberta', prioridade: 'Dúvida pendente', conduzidaPor: 'Ana Clara' }
];

const conversasPacientePorLiga = {
  'Liga Materno-Infantil': [
    { de: 'liga', texto: 'Oi, Mariana! Vi que você está com 24 semanas. Como você está se sentindo esta semana?' },
    { de: 'me', texto: 'Oi! Estou bem, mas comecei a sentir umas dores leves na lombar e fiquei em dúvida se é normal.' },
    { de: 'liga', texto: 'Dores leves na lombar podem acontecer pela mudança de postura e crescimento da barriga, mas é importante observar intensidade, frequência e se vem junto com outros sintomas.' },
    { de: 'me', texto: 'Não é uma dor forte. Aparece mais no fim do dia, quando fico muito tempo sentada.' },
    { de: 'liga', texto: 'Entendi. Tente alternar posição, fazer pausas curtas e apoiar bem as costas. Se a dor ficar forte, vier com febre, sangramento, perda de líquido ou contrações, procure atendimento presencial.' },
    { de: 'liga', texto: 'Vou deixar registrado no histórico: dor lombar leve no fim do dia, sem outros sinais de alerta informados.' }
  ],
  'Liga de Nutrição': [
    { de: 'liga', texto: 'Olá, Mariana! Você comentou que queria organizar melhor sua alimentação. Como está sua rotina de refeições?' },
    { de: 'me', texto: 'Tenho sentido enjoo de manhã e às vezes acabo pulando o café.' },
    { de: 'liga', texto: 'Obrigada por contar. Em alguns casos, comer algo pequeno e seco antes de levantar, como uma torrada ou bolacha de água e sal, pode ajudar. Mas isso deve ser adaptado ao que você tolera.' },
    { de: 'me', texto: 'Eu consigo comer fruta e iogurte depois, mas café com leite tem me dado enjoo.' },
    { de: 'liga', texto: 'Pode ser interessante respeitar essa tolerância e montar opções leves. Fruta com iogurte, pão simples, vitamina ou pequenas porções ao longo da manhã podem ajudar.' },
    { de: 'liga', texto: 'Registro: enjoo matinal, dificuldade com café com leite e boa aceitação de fruta e iogurte. Orientação geral: fracionar refeições e observar tolerância.' }
  ],
  'Liga de Psicologia': [
    { de: 'liga', texto: 'Oi, Mariana. Você abriu esse chat para falar sobre ansiedade na gestação, certo?' },
    { de: 'me', texto: 'Sim. Estou feliz, mas às vezes fico pensando se vou dar conta de tudo.' },
    { de: 'liga', texto: 'Esse sentimento pode aparecer em fases de muitas mudanças. Não significa que você não esteja preparada; significa que existe uma preocupação importante pedindo acolhimento.' },
    { de: 'me', texto: 'Tenho medo de incomodar as pessoas falando disso.' },
    { de: 'liga', texto: 'Você não está incomodando. Falar sobre isso ajuda a organizar pensamentos e fortalecer sua rede de apoio. Você tem alguém com quem se sente segura para conversar?' },
    { de: 'liga', texto: 'Vou registrar: ansiedade relacionada à sobrecarga e medo de não dar conta. Encaminhamento visual: incentivar rede de apoio e retorno no chat se a angústia aumentar.' }
  ],
  'Liga de Enfermagem Obstétrica': [
    { de: 'liga', texto: 'Oi, Mariana! Como posso te ajudar hoje sobre cuidados do pré-natal?' },
    { de: 'me', texto: 'Queria entender quais sinais eu não devo ignorar. Às vezes fico na dúvida se é exagero procurar atendimento.' },
    { de: 'liga', texto: 'É uma ótima pergunta. Alguns sinais merecem avaliação presencial: sangramento, perda de líquido, febre, dor forte, dor de cabeça intensa, visão embaçada, inchaço súbito ou redução importante dos movimentos do bebê.' },
    { de: 'me', texto: 'Ainda não sinto o bebê mexer tanto todos os dias. Isso é normal com 24 semanas?' },
    { de: 'liga', texto: 'Os movimentos podem variar, mas qualquer mudança que te preocupe deve ser conversada com o serviço de saúde. O mais importante é não ficar sozinha com a dúvida.' },
    { de: 'liga', texto: 'Registro: gestante buscou orientação sobre sinais de alerta e movimentos fetais. Orientação geral: observar e procurar atendimento em sinais de alerta.' }
  ],
  'Liga de Fisioterapia': [
    { de: 'liga', texto: 'Olá, Mariana! Vi que sua dúvida é sobre conforto corporal e postura. Você sente desconforto em algum momento específico?' },
    { de: 'me', texto: 'Sim, sinto mais peso na lombar quando estudo por muito tempo.' },
    { de: 'liga', texto: 'Isso pode acontecer quando ficamos muitas horas na mesma posição. Uma dica simples é apoiar os pés, manter as costas encostadas e levantar por alguns minutos a cada hora.' },
    { de: 'me', texto: 'Alongamento ajuda? Tenho medo de fazer errado.' },
    { de: 'liga', texto: 'Alongamentos leves podem ajudar, mas precisam ser confortáveis e sem dor. Evite movimentos bruscos. Se sentir tontura, dor forte ou desconforto, interrompa.' },
    { de: 'liga', texto: 'Registro: desconforto lombar associado a longos períodos sentada. Orientação visual: pausas, apoio postural e alongamentos leves sem dor.' }
  ],
  'Liga de Pediatria e Neonatologia': [
    { de: 'liga', texto: 'Oi, Mariana! Você quer conversar sobre preparação para a chegada do bebê?' },
    { de: 'me', texto: 'Sim! Estou perdida sobre o que realmente precisa nos primeiros dias.' },
    { de: 'liga', texto: 'É comum se sentir assim. Para os primeiros dias, o essencial costuma ser um ambiente seguro, roupas confortáveis, fraldas, itens de higiene e um local adequado para o bebê dormir.' },
    { de: 'me', texto: 'Tenho dúvida sobre banho e umbigo. Dá medo de machucar.' },
    { de: 'liga', texto: 'Esse medo é muito comum. O ideal é receber orientação presencial da equipe de saúde na maternidade ou consulta. Aqui podemos te ajudar a organizar perguntas para esse momento.' },
    { de: 'liga', texto: 'Registro: dúvidas sobre enxoval essencial, banho e cuidado com o coto umbilical. Encaminhamento visual: preparar lista de perguntas para consulta.' }
  ]
};

const conversasLigaPorCliente = {
  'Mariana Alves': [
    { de: 'cliente', texto: 'Oi, Ana! Hoje senti um incômodo na lombar depois de ficar sentada estudando. Não é forte, mas fiquei preocupada.' },
    { de: 'me', texto: 'Oi, Mariana! Obrigada por avisar. Esse incômodo aparece em repouso ou principalmente depois de muito tempo na mesma posição?' },
    { de: 'cliente', texto: 'Mais depois de ficar sentada. Quando deito melhora um pouco.' },
    { de: 'me', texto: 'Entendi. Vou registrar como dor lombar leve associada à postura. Tente fazer pausas curtas, apoiar os pés e mudar de posição. Se ficar forte ou vier com sangramento, febre, perda de líquido ou contrações, procure atendimento presencial.' },
    { de: 'cliente', texto: 'Tá bom. Vou observar hoje e te aviso se piorar.' },
    { de: 'me', texto: 'Combinado. Vou deixar o caso com retorno marcado para hoje no histórico.' }
  ],
  'Bianca Souza': [
    { de: 'cliente', texto: 'Oi, Julia! Estou com muito enjoo de manhã e acabo não conseguindo tomar café.' },
    { de: 'me', texto: 'Oi, Bianca! Sinto muito por esse desconforto. Você consegue comer algo pequeno antes de levantar ou o enjoo começa imediatamente?' },
    { de: 'cliente', texto: 'Começa quando levanto. Às vezes consigo comer uma fruta depois.' },
    { de: 'me', texto: 'Entendi. Uma estratégia geral é tentar algo seco e pequeno antes de levantar, se você tolerar. Também podemos pensar em refeições menores ao longo da manhã.' },
    { de: 'cliente', texto: 'Vou tentar. Café com leite piora muito.' },
    { de: 'me', texto: 'Perfeito você ter observado isso. Registro: enjoo matinal, piora com café com leite, tolera fruta. Vou colocar como triagem inicial e acompanhar seu retorno.' }
  ],
  'Lívia Martins': [
    { de: 'cliente', texto: 'Rafa, estou bem ansiosa essa semana. Parece que qualquer coisa me faz chorar.' },
    { de: 'me', texto: 'Oi, Lívia. Obrigada por confiar e falar sobre isso. Aconteceu algo específico ou é uma sensação mais constante?' },
    { de: 'cliente', texto: 'Acho que é medo do parto e de não saber cuidar do bebê.' },
    { de: 'me', texto: 'Esse medo é muito comum e merece acolhimento. Podemos organizar suas preocupações em partes: parto, rede de apoio e primeiros cuidados. Assim fica menos pesado.' },
    { de: 'cliente', texto: 'Gostei. Acho que preciso falar disso com calma.' },
    { de: 'me', texto: 'Vamos fazer assim. Vou registrar como apoio emocional semanal e manter o retorno em aberto para você continuar quando quiser.' }
  ],
  'Camila Rocha': [
    { de: 'cliente', texto: 'Ana, estou tentando montar o enxoval e não sei o que é prioridade.' },
    { de: 'me', texto: 'Oi, Camila! Vamos simplificar. Para os primeiros dias, pense em sono seguro, higiene, fraldas, roupas confortáveis e itens de saída da maternidade.' },
    { de: 'cliente', texto: 'Também tenho medo do banho e do umbigo.' },
    { de: 'me', texto: 'É super comum. A equipe da maternidade costuma orientar na prática. Podemos montar uma lista de perguntas para você levar e se sentir mais segura.' },
    { de: 'cliente', texto: 'Sim, por favor. Quero chegar mais preparada.' },
    { de: 'me', texto: 'Combinado. Registro: dúvida pendente sobre enxoval, banho e coto umbilical. Vou marcar como conversa aberta para seguirmos.' }
  ]
};

const mensagensClienteCentral = [
  {
    titulo: 'Mariana → Liga Materno-Infantil',
    detalhe: 'Dor lombar leve no fim do dia, relacionada a longos períodos sentada. Retorno orientado para observar sinais de alerta.',
    tempo: 'há 12 min',
    icon: 'mark_chat_unread'
  },
  {
    titulo: 'Bianca → Liga de Nutrição',
    detalhe: 'Enjoo matinal com dificuldade para café da manhã. Liga sugeriu fracionamento e registro de alimentos tolerados.',
    tempo: 'há 35 min',
    icon: 'restaurant'
  },
  {
    titulo: 'Lívia → Liga de Psicologia',
    detalhe: 'Ansiedade relacionada ao parto e aos primeiros cuidados. Conversa mantida em acompanhamento semanal.',
    tempo: 'hoje, 09:40',
    icon: 'psychology'
  },
  {
    titulo: 'Camila → Liga de Pediatria e Neonatologia',
    detalhe: 'Dúvidas sobre enxoval essencial, banho e cuidado com o coto umbilical. Lista de perguntas em preparação.',
    tempo: 'ontem',
    icon: 'child_care'
  },
  {
    titulo: 'Mariana → Liga de Enfermagem Obstétrica',
    detalhe: 'Perguntou sobre sinais de alerta no pré-natal e movimentos fetais. Orientação registrada no histórico.',
    tempo: '2 dias',
    icon: 'monitor_heart'
  },
  {
    titulo: 'Bianca → Liga de Fisioterapia',
    detalhe: 'Relatou desconforto lombar após ficar sentada. Recebeu orientações de postura, pausas e alongamentos leves.',
    tempo: '3 dias',
    icon: 'self_improvement'
  }
];

const blogPosts = [
  {
    titulo: 'Como organizar dúvidas antes do atendimento',
    categoria: 'Acompanhamento',
    autor: 'Liga Materno-Infantil',
    data: 'Publicado hoje',
    tempoLeitura: '4 min de leitura',
    imagem: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=900&q=80',
    alt: 'Caderno aberto com anotações delicadas sobre cuidado',
    resumo: 'Um guia simples para a gestante registrar sintomas, perguntas e retornos importantes antes de conversar com a liga.',
    conteudo: [
      'Antes do atendimento, vale reservar alguns minutos para anotar o que você está sentindo e quais temas gostaria de conversar. Isso ajuda a tornar a troca com a liga mais clara, mais leve e mais produtiva.',
      'Você pode separar suas dúvidas em pequenos grupos, como consultas, alimentação, rotina, sono, emoções e sinais que merecem atenção. Quando as informações ficam organizadas, a equipe consegue acolher melhor cada ponto e registrar o histórico com mais precisão.',
      'Também é útil anotar desde quando determinada dúvida apareceu, se houve alguma mudança recente e o que já foi orientado anteriormente. Esse cuidado facilita a continuidade do acompanhamento e evita que detalhes importantes se percam ao longo do processo.',
      'Se preferir, use o próprio blog como inspiração para montar uma listinha no celular ou em um caderno. O objetivo não é deixar tudo perfeito, e sim tornar o atendimento mais tranquilo, objetivo e acolhedor para você.'
    ]
  },
  {
    titulo: 'Alimentação leve na rotina gestacional',
    categoria: 'Nutrição',
    autor: 'Liga de Nutrição',
    data: 'Publicado ontem',
    tempoLeitura: '5 min de leitura',
    imagem: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
    alt: 'Mesa com frutas, iogurte e alimentos saudáveis',
    resumo: 'Ideias de hábitos alimentares acolhedores para ajudar na organização da rotina e no bem-estar diário.',
    conteudo: [
      'Durante a gestação, pequenas escolhas feitas ao longo do dia podem contribuir bastante para o conforto e para a sensação de bem-estar. Uma rotina alimentar leve não significa rigidez, mas sim buscar equilíbrio, regularidade e variedade.',
      'Sempre que possível, tente manter intervalos mais estáveis entre as refeições e incluir alimentos que tragam saciedade e praticidade, como frutas, iogurtes, pães, ovos, sopas e preparações simples. Isso pode ajudar especialmente em dias mais corridos ou quando o apetite oscila.',
      'A hidratação também faz parte desse cuidado. Ter uma garrafinha por perto e observar sua ingestão de água ao longo do dia pode fazer diferença na disposição e no conforto físico. Além disso, vale registrar alimentos que fazem bem e aqueles que causam desconforto, para levar essas percepções ao atendimento.',
      'Cada gestação é única, então o mais importante é adaptar a rotina alimentar às suas necessidades, preferências e orientações profissionais. O blog pode funcionar como ponto de apoio para reunir ideias simples e acessíveis.'
    ]
  },
  {
    titulo: 'A importância da escuta durante a gestação',
    categoria: 'Bem-estar',
    autor: 'Liga de Psicologia',
    data: 'Publicado há 3 dias',
    tempoLeitura: '4 min de leitura',
    imagem: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
    alt: 'Pessoa escrevendo em um diário em ambiente claro',
    resumo: 'Um texto fictício sobre acolhimento emocional, rede de apoio e espaços seguros para compartilhar sentimentos.',
    conteudo: [
      'A gestação pode ser acompanhada por muitas emoções ao mesmo tempo. Em alguns dias, é natural sentir alegria e tranquilidade; em outros, podem surgir inseguranças, cansaço, medo ou necessidade de acolhimento. Ter espaços de escuta faz diferença nesse processo.',
      'Quando a gestante encontra um ambiente seguro para falar sobre o que está vivendo, ela se sente mais amparada e menos sozinha. A escuta não serve apenas para responder perguntas, mas também para validar sentimentos e construir confiança ao longo do acompanhamento.',
      'Uma rede de apoio pode incluir familiares, amizades, profissionais e iniciativas como a Maternarê. O importante é saber que pedir ajuda, compartilhar dúvidas e falar sobre emoções não é sinal de fraqueza, mas parte do cuidado com a saúde integral.',
      'Criar o hábito de registrar sentimentos, identificar momentos de maior sobrecarga e buscar conversas acolhedoras pode fortalecer o bem-estar. O blog fictício da plataforma reforça justamente essa ideia de cuidado contínuo e acessível.'
    ]
  }
];

function setView(viewName) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.toggle('active', view.dataset.view === viewName);
  });

  topbar.classList.toggle('is-hidden', viewName === 'app');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  refreshReveal();
}

function renderSideNav() {
  const tabs = state.role === 'paciente' ? pacienteTabs : state.role === 'liga' ? ligaTabs : clienteTabs;
  sideNav.innerHTML = tabs.map(tab => `
    <button class="side-link ${tab.id === state.activeTab ? 'active' : ''}" type="button" data-tab="${tab.id}">
      <span class="material-symbols-rounded" aria-hidden="true">${tab.icon}</span>
      <span class="label">${tab.label}</span>
    </button>
  `).join('');
}

function renderApp() {
  const isPaciente = state.role === 'paciente';
  const isLiga = state.role === 'liga';
  state.activeTab = isPaciente ? 'inicio' : isLiga ? 'painelLiga' : 'painel';

  roleLabel.textContent = isPaciente ? 'Paciente' : isLiga ? 'Liga acadêmica' : 'Cliente';
  panelKicker.textContent = isPaciente ? 'Painel da paciente' : isLiga ? state.ligaName : 'Painel do cliente';
  panelTitle.textContent = isPaciente ? 'Bem-vinda à sua jornada' : isLiga ? 'Atendimentos da liga' : 'Gestão da Maternarê';
  userNameLabel.textContent = isLiga ? state.conductorName : (state.userName || (isPaciente ? 'Paciente' : 'Cliente'));

  renderSideNav();
  renderTab();
}

function setActiveTab(tabId) {
  state.activeTab = tabId;
  renderSideNav();
  renderTab();
  appShell.classList.remove('sidebar-open');
}

function renderBlogCard(post, index) {
  return `
    <button class="blog-card blog-card-button hover-lift" type="button" data-open-post="${index}" aria-label="Abrir post ${post.titulo}">
      <img src="${post.imagem}" alt="${post.alt}" loading="lazy" />
      <div class="blog-card-content">
        <span class="blog-category">${post.categoria}</span>
        <h4>${post.titulo}</h4>
        <p>${post.resumo}</p>
        <div class="blog-meta">
          <span><i class="material-symbols-rounded">edit</i>${post.autor}</span>
          <span><i class="material-symbols-rounded">schedule</i>${post.data}</span>
          <span><i class="material-symbols-rounded">menu_book</i>${post.tempoLeitura}</span>
        </div>
        <span class="blog-read-more">Ler post completo <i class="material-symbols-rounded">arrow_forward</i></span>
      </div>
    </button>
  `;
}

function renderTab() {
  const titleMap = {
    inicio: 'Bem-vinda à sua jornada',
    perfil: 'Meu perfil de acompanhamento',
    ligas: state.role === 'paciente' ? 'Ligas disponíveis' : 'Gestão das ligas',
    chat: 'Chat com as ligas',
    beneficios: 'Blog da Maternarê',
    configuracoes: 'Configurações e personalização',
    painel: 'Gestão da Maternarê',
    gestantes: 'Cadastro e controle de gestantes',
    mensagens: 'Central de mensagens',
    agenda: 'Agenda de validações',
    painelLiga: 'Atendimentos da liga',
    clientes: 'Clientes atendidos pela liga',
    conversasLiga: 'Conversas da liga',
    minhaLiga: 'Minha liga',
    blogLiga: 'Postar no blog'
  };

  panelTitle.textContent = titleMap[state.activeTab] || 'Painel';

  const renderers = {
    inicio: renderPacienteInicio,
    perfil: renderPacientePerfil,
    ligas: state.role === 'paciente' ? renderPacienteLigas : renderClienteLigas,
    chat: renderChat,
    beneficios: renderBeneficios,
    configuracoes: renderConfiguracoes,
    painel: renderClientePainel,
    gestantes: renderGestantes,
    mensagens: renderMensagens,
    agenda: renderAgenda,
    painelLiga: renderLigaPainel,
    clientes: renderLigaClientes,
    conversasLiga: renderLigaConversas,
    minhaLiga: renderMinhaLiga,
    blogLiga: renderBlogLiga
  };

  dashboardContent.innerHTML = renderers[state.activeTab]?.() || '<p>Conteúdo em construção.</p>';
  bindDynamicActions();
  refreshReveal();
}

function renderPacienteInicio() {
  return `
    <div class="panel-grid reveal">
      <article class="panel-card">
        <span class="number">24</span>
        <h3>Semanas de gestação</h3>
        <p>Seu painel centraliza informações importantes para acompanhar sua jornada.</p>
        <span class="tag"><span class="material-symbols-rounded">favorite</span> acompanhamento ativo</span>
      </article>
      <article class="panel-card">
        <span class="number">${ligas.length}</span>
        <h3>Ligas disponíveis</h3>
        <p>Escolha a liga mais adequada para sua dúvida e inicie uma conversa.</p>
        <span class="tag"><span class="material-symbols-rounded">local_florist</span> portfólio aberto</span>
      </article>
      <article class="panel-card">
        <span class="number">8</span>
        <h3>Interações salvas</h3>
        <p>Suas mensagens ficam organizadas para facilitar continuidade do cuidado.</p>
        <span class="tag"><span class="material-symbols-rounded">history</span> histórico simples</span>
      </article>
    </div>

    <div class="content-grid reveal">
      <article class="info-card">
        <span class="material-symbols-rounded">spa</span>
        <h3>Próximos passos sugeridos</h3>
        <div class="timeline">
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">edit_note</span></span><div><strong>Atualize seu perfil</strong><small>Revise telefone, semana gestacional e observações.</small></div></div>
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">groups</span></span><div><strong>Conheça as ligas</strong><small>Veja qual liga atende melhor sua necessidade.</small></div></div>
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">chat</span></span><div><strong>Inicie uma conversa</strong><small>Envie sua primeira mensagem dentro da plataforma.</small></div></div>
        </div>
      </article>

      <article class="info-card">
        <span class="material-symbols-rounded">child_care</span>
        <h3>Acolhimento do dia</h3>
        <p>Você não precisa guardar tudo sozinha. Registre suas dúvidas, mantenha seu histórico e conte com as ligas em um ambiente mais organizado.</p>
        <button class="primary-btn full" type="button" data-tab-action="chat">Abrir chat <span class="material-symbols-rounded">arrow_forward</span></button>
      </article>
    </div>
  `;
}

function renderPacientePerfil() {
  return `
    <article class="info-card reveal">
      <span class="material-symbols-rounded">pregnant_woman</span>
      <h3>Informações da paciente</h3>
      <form class="profile-form">
        <label><span>Nome completo</span><input value="${state.userName || 'Mariana Alves'}" /></label>
        <label><span>E-mail</span><input value="mariana@maternare.com" /></label>
        <label><span>Telefone</span><input value="(11) 99999-0000" /></label>
        <label><span>Idade gestacional</span><input value="24 semanas" /></label>
        <label class="full"><span>Observações importantes</span><textarea>Tenho dúvidas sobre alimentação e rotina de consultas.</textarea></label>
      </form>
      <button class="primary-btn" type="button" data-toast="Perfil atualizado visualmente.">Salvar alterações <span class="material-symbols-rounded">check</span></button>
    </article>
  `;
}

function renderPacienteLigas() {
  return `
    <div class="panel-grid reveal">
      ${ligas.map(liga => `
        <article class="list-card">
          <span class="material-symbols-rounded">${liga.icon}</span>
          <h3>${liga.nome}</h3>
          <p>${liga.area}</p>
          <div class="liga-row">
            <span class="dot"><span class="material-symbols-rounded">schedule</span></span>
            <div><strong>${liga.status}</strong><small>Toque para abrir conversa.</small></div>
          </div>
          <button class="primary-btn full" type="button" data-open-chat="${liga.nome}">Conversar <span class="material-symbols-rounded">chat</span></button>
        </article>
      `).join('')}
    </div>
  `;
}

function renderChat() {
  const mensagens = conversasPacientePorLiga[state.chatTarget] || conversasPacientePorLiga['Liga Materno-Infantil'];

  return `
    <div class="chat-layout reveal">
      <aside class="chat-card">
        <div class="chat-head">
          <span class="avatar-bubble"><span class="material-symbols-rounded">forum</span></span>
          <div><strong>Conversas</strong><small>Histórico simples</small></div>
        </div>
        <div class="chat-list">
          ${ligas.map(liga => `
            <button class="chat-contact ${liga.nome === state.chatTarget ? 'active' : ''}" type="button" data-chat-target="${liga.nome}">
              <span class="dot"><span class="material-symbols-rounded">${liga.icon}</span></span>
              <span><strong>${liga.nome}</strong><small>${liga.status}</small></span>
            </button>
          `).join('')}
        </div>
      </aside>

      <article class="chat-card chat-window">
        <div class="chat-head">
          <span class="avatar-bubble"><span class="material-symbols-rounded">local_florist</span></span>
          <div><strong>${state.chatTarget}</strong><small>Canal interno da Maternarê</small></div>
        </div>
        <div class="chat-messages" data-chat-messages>
          ${mensagens.map(mensagem => `<div class="bubble ${mensagem.de === 'me' ? 'me' : ''}">${mensagem.texto}</div>`).join('')}
        </div>
        <form class="chat-input" data-chat-form>
          <input type="text" placeholder="Escreva sua mensagem..." aria-label="Mensagem" />
          <button type="submit" aria-label="Enviar mensagem"><span class="material-symbols-rounded">send</span></button>
        </form>
      </article>
    </div>
  `;
}

function renderBeneficios() {
  return `
    <section class="blog-section reveal" aria-label="Blog fictício para gestantes">
      <div class="blog-heading">
        <div>
          <span class="material-symbols-rounded">auto_stories</span>
          <h3>Blog Maternarê</h3>
          <p>Conteúdos fictícios das ligas com orientações leves, acolhedoras e fáceis de consultar pela gestante.</p>
        </div>
        <button class="secondary-btn" type="button" data-toast="Filtro visual aplicado.">Ver todos</button>
      </div>

      <div class="blog-grid">
        ${blogPosts.map((post, index) => renderBlogCard(post, index)).join('')}
      </div>
    </section>
  `;
}

function renderLigaPainel() {
  const abertas = clientesAtendidos.filter(item => item.status !== 'Em acompanhamento').length;
  return `
    <div class="panel-grid reveal">
      <article class="panel-card"><span class="number">${clientesAtendidos.length}</span><h3>Clientes atendidos</h3><p>Lista de gestantes acompanhadas pela ${state.ligaName}.</p><span class="tag"><span class="material-symbols-rounded">supervised_user_circle</span> acompanhamento ativo</span></article>
      <article class="panel-card"><span class="number">${abertas}</span><h3>Pendências abertas</h3><p>Conversas que precisam de retorno ou triagem da liga.</p><span class="tag"><span class="material-symbols-rounded">notification_important</span> revisar hoje</span></article>
      <article class="panel-card"><span class="number">3</span><h3>Condutoras</h3><p>Labels mostram quem atendeu ou está conduzindo cada caso.</p><span class="tag"><span class="material-symbols-rounded">badge</span> etiquetas visíveis</span></article>
    </div>

    <div class="content-grid reveal">
      <article class="info-card">
        <span class="material-symbols-rounded">volunteer_activism</span>
        <h3>Resumo da ${state.ligaName}</h3>
        <p>Acesso por liga com visão objetiva dos clientes atendidos, condutora responsável, status e prioridade do atendimento.</p>
        <div class="liga-summary">
          <span class="liga-chip"><span class="material-symbols-rounded">person_pin</span>${state.conductorName} conduzindo</span>
          <span class="liga-chip"><span class="material-symbols-rounded">history</span>Histórico central</span>
          <span class="liga-chip"><span class="material-symbols-rounded">forum</span>Chat interno</span>
          <span class="liga-chip"><span class="material-symbols-rounded">palette</span>Visual personalizável</span>
        </div>
      </article>
      <article class="info-card">
        <span class="material-symbols-rounded">priority_high</span>
        <h3>Próximas ações</h3>
        <div class="timeline">
          ${clientesAtendidos.slice(0, 3).map(item => `
            <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">pregnant_woman</span></span><div><strong>${item.nome}</strong><small>${item.prioridade} • conduzida por ${item.conduzidaPor}</small></div></div>
          `).join('')}
        </div>
      </article>
    </div>
  `;
}

function renderLigaClientes() {
  return `
    <article class="info-card reveal">
      <span class="material-symbols-rounded">supervised_user_circle</span>
      <h3>Clientes atendidos pela ${state.ligaName}</h3>
      <p>Cada card mostra uma label de quem atendeu ou está conduzindo o acompanhamento.</p>
      <div class="client-board">
        ${clientesAtendidos.map(item => `
          <div class="client-card">
            <span class="dot"><span class="material-symbols-rounded">pregnant_woman</span></span>
            <div class="client-main">
              <strong>${item.nome}</strong>
              <small>${item.semana} • ${item.contato}</small>
              <span class="care-label"><span class="material-symbols-rounded">badge</span>Conduzida por ${item.conduzidaPor}</span>
              <span class="status-pill"><span class="material-symbols-rounded">label</span>${item.status} • ${item.prioridade}</span>
            </div>
            <div class="client-actions">
              <select aria-label="Alterar responsável visualmente">
                <option>${item.conduzidaPor}</option>
                <option>${state.conductorName}</option>
                <option>Julia Moura</option>
                <option>Rafaela Dias</option>
              </select>
              <button class="secondary-btn" type="button" data-open-client-chat="${item.nome}">Abrir chat</button>
            </div>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}

function renderLigaConversas() {
  const active = clientesAtendidos.find(item => item.nome === state.clientTarget) || clientesAtendidos[0];
  const mensagens = conversasLigaPorCliente[active.nome] || conversasLigaPorCliente[clientesAtendidos[0].nome];

  return `
    <div class="chat-layout reveal">
      <aside class="chat-card">
        <div class="chat-head">
          <span class="avatar-bubble"><span class="material-symbols-rounded">forum</span></span>
          <div><strong>Clientes</strong><small>${state.ligaName}</small></div>
        </div>
        <div class="chat-list">
          ${clientesAtendidos.map(item => `
            <button class="chat-contact ${item.nome === active.nome ? 'active' : ''}" type="button" data-client-target="${item.nome}">
              <span class="dot"><span class="material-symbols-rounded">pregnant_woman</span></span>
              <span><strong>${item.nome}</strong><small>${item.prioridade} • ${item.conduzidaPor}</small></span>
            </button>
          `).join('')}
        </div>
      </aside>

      <article class="chat-card chat-window">
        <div class="chat-head">
          <span class="avatar-bubble"><span class="material-symbols-rounded">volunteer_activism</span></span>
          <div><strong>${active.nome}</strong><small>${active.status} • conduzida por ${active.conduzidaPor}</small></div>
        </div>
        <div class="chat-messages" data-chat-messages>
          ${mensagens.map(mensagem => `<div class="bubble ${mensagem.de === 'me' ? 'me' : ''}">${mensagem.texto}</div>`).join('')}
        </div>
        <form class="chat-input" data-chat-form>
          <input type="text" placeholder="Responder como ${active.conduzidaPor}..." aria-label="Mensagem" />
          <button type="submit" aria-label="Enviar mensagem"><span class="material-symbols-rounded">send</span></button>
        </form>
      </article>
    </div>
  `;
}

function renderMinhaLiga() {
  return `
    <div class="content-grid reveal">
      <article class="info-card">
        <span class="material-symbols-rounded">badge</span>
        <h3>Perfil institucional</h3>
        <p>Área visual para a liga editar informações exibidas às gestantes.</p>
        <form class="profile-form">
          <label><span>Nome da liga</span><input value="${state.ligaName}" /></label>
          <label><span>Contato institucional</span><input value="contato@maternare.com" /></label>
          <label class="full"><span>Descrição</span><textarea>Acolhimento, orientação inicial e apoio às gestantes acompanhadas pela Maternarê.</textarea></label>
        </form>
        <button class="primary-btn" type="button" data-toast="Perfil da liga atualizado visualmente.">Salvar liga <span class="material-symbols-rounded">check</span></button>
      </article>
      <article class="info-card">
        <span class="material-symbols-rounded">label_important</span>
        <h3>Labels usadas</h3>
        <div class="timeline">
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">badge</span></span><div><strong>Conduzida por</strong><small>Indica a pessoa responsável pelo atendimento.</small></div></div>
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">label</span></span><div><strong>Status</strong><small>Mostra se está em acompanhamento, triagem ou aguardando retorno.</small></div></div>
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">priority_high</span></span><div><strong>Prioridade</strong><small>Ajuda a organizar o que precisa de retorno primeiro.</small></div></div>
        </div>
      </article>
    </div>
  `;
}

function renderBlogLiga() {
  return `
    <div class="content-grid reveal">
      <article class="info-card blog-editor-card">
        <span class="material-symbols-rounded">edit_square</span>
        <h3>Postar no blog</h3>
        <p>Área fictícia para a liga criar conteúdos educativos que apareceriam no blog do perfil cliente e futuramente para as gestantes.</p>
        <form class="profile-form">
          <label><span>Título do post</span><input value="Cuidados simples para a rotina da gestante" /></label>
          <label><span>Categoria</span><input value="Acompanhamento" /></label>
          <label><span>Imagem do post</span><input value="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7" /></label>
          <label><span>Autoria</span><input value="${state.ligaName}" /></label>
          <label class="full"><span>Resumo</span><textarea>Escreva uma chamada curta, acolhedora e objetiva para orientar as gestantes.</textarea></label>
          <label class="full"><span>Conteúdo</span><textarea>Conteúdo fictício do post. Aqui a liga poderia explicar orientações, avisos e informações importantes de forma simples.</textarea></label>
        </form>
        <button class="primary-btn" type="button" data-toast="Post fictício publicado visualmente no blog.">Publicar post <span class="material-symbols-rounded">publish</span></button>
      </article>

      <article class="blog-preview-card">
        <img src="${blogPosts[0].imagem}" alt="${blogPosts[0].alt}" loading="lazy" />
        <div>
          <span class="blog-category">Prévia</span>
          <h3>Cuidados simples para a rotina da gestante</h3>
          <p>Prévia visual de como o post da ${state.ligaName} pode aparecer no blog da plataforma.</p>
          <div class="blog-meta">
            <span><i class="material-symbols-rounded">badge</i>${state.ligaName}</span>
            <span><i class="material-symbols-rounded">visibility</i>visível no blog</span>
          </div>
        </div>
      </article>
    </div>

    <section class="blog-section reveal">
      <div class="blog-heading">
        <div>
          <span class="material-symbols-rounded">article</span>
          <h3>Posts já publicados</h3>
          <p>Exemplos fictícios com imagem, autoria, categoria e resumo.</p>
        </div>
      </div>
      <div class="blog-grid compact">
        ${blogPosts.map((post, index) => renderBlogCard(post, index)).join('')}
      </div>
    </section>
  `;
}


function renderClientePainel() {
  return `
    <div class="panel-grid reveal">
      <article class="panel-card"><span class="number">42</span><h3>Gestantes cadastradas</h3><p>Controle central de cadastros e dados básicos.</p><span class="tag"><span class="material-symbols-rounded">trending_up</span> +12% no mês</span></article>
      <article class="panel-card"><span class="number">${ligas.length}</span><h3>Ligas ativas</h3><p>Portfólios institucionais organizados por área.</p><span class="tag"><span class="material-symbols-rounded">groups</span> páginas prontas</span></article>
      <article class="panel-card"><span class="number">${blogPosts.length}</span><h3>Posts no blog</h3><p>Conteúdos fictícios publicados pelas ligas para orientar as gestantes.</p><span class="tag"><span class="material-symbols-rounded">article</span> blog ativo</span></article>
    </div>

    <section class="blog-section reveal" aria-label="Blog fictício do cliente">
      <div class="blog-heading">
        <div>
          <span class="material-symbols-rounded">auto_stories</span>
          <h3>Blog Maternarê</h3>
          <p>Espaço fictício para exibir conteúdos educativos, comunicados das ligas e orientações simples para as gestantes.</p>
        </div>
        <button class="secondary-btn" type="button" data-toast="Filtro visual aplicado.">Ver todos</button>
      </div>

      <div class="blog-grid">
        ${blogPosts.map((post, index) => renderBlogCard(post, index)).join('')}
      </div>
    </section>
  `;
}

function renderGestantes() {
  return `
    <article class="info-card reveal">
      <span class="material-symbols-rounded">clinical_notes</span>
      <h3>Gestantes cadastradas</h3>
      <div class="gestante-list">
        ${gestantes.map(item => `
          <div class="gestante-row">
            <span class="dot"><span class="material-symbols-rounded">pregnant_woman</span></span>
            <div><strong>${item.nome}</strong><small>${item.semana} • ${item.contato} • ${item.status}</small></div>
          </div>
        `).join('')}
      </div>
      <button class="primary-btn" type="button" data-toast="Novo cadastro visual iniciado.">Adicionar gestante <span class="material-symbols-rounded">add</span></button>
    </article>
  `;
}

function renderClienteLigas() {
  return `
    <div class="panel-grid reveal">
      ${ligas.map(liga => `
        <article class="list-card">
          <span class="material-symbols-rounded">${liga.icon}</span>
          <h3>${liga.nome}</h3>
          <p>${liga.area}</p>
          <div class="liga-row"><span class="dot"><span class="material-symbols-rounded">badge</span></span><div><strong>Contato institucional</strong><small>${liga.status}</small></div></div>
          <button class="secondary-btn full" type="button" data-toast="Página da ${liga.nome} aberta para edição visual.">Editar página <span class="material-symbols-rounded">edit</span></button>
        </article>
      `).join('')}
    </div>
  `;
}

function renderMensagens() {
  return `
    <article class="info-card reveal">
      <span class="material-symbols-rounded">forum</span>
      <h3>Central de mensagens</h3>
      <div class="timeline">
        ${mensagensClienteCentral.map(item => `
          <div class="message-row">
            <span class="dot"><span class="material-symbols-rounded">${item.icon}</span></span>
            <div><strong>${item.titulo}</strong><small>${item.detalhe} • ${item.tempo}</small></div>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}

function renderAgenda() {
  return `
    <div class="content-grid reveal">
      <article class="info-card">
        <span class="material-symbols-rounded">calendar_month</span>
        <h3>Validações da semana</h3>
        <div class="timeline">
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">event</span></span><div><strong>Revisão com cliente</strong><small>Segunda • validar fluxo da paciente</small></div></div>
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">task_alt</span></span><div><strong>Teste de usabilidade</strong><small>Quarta • conferir responsividade</small></div></div>
          <div class="timeline-item"><span class="dot"><span class="material-symbols-rounded">rocket_launch</span></span><div><strong>Preparação para deploy</strong><small>Sexta • Render ou Railway</small></div></div>
        </div>
      </article>
      <article class="info-card">
        <span class="material-symbols-rounded">checklist</span>
        <h3>Checklist de entrega</h3>
        <p>Wireframes, frontend, backend MVC, banco integrado futuramente, chat interno e documentação do código.</p>
      </article>
    </div>
  `;
}

function renderConfiguracoes() {
  return `
    <div class="settings-grid reveal">
      <article class="settings-card">
        <span class="material-symbols-rounded">palette</span>
        <h3>Personalização visual</h3>
        <p>Altere a paleta do protótipo sem sair do painel.</p>
        <label>
          <span>Tema</span>
          <select data-theme-select>
            <option value="">Rosa + laranja claro</option>
            <option value="sunny">Laranja solar</option>
            <option value="rose">Rosa delicado</option>
          </select>
        </label>
        <label>
          <span>Nome exibido</span>
          <input data-name-input value="${state.userName || ''}" />
        </label>
        <button class="primary-btn" type="button" data-save-settings>Salvar personalização <span class="material-symbols-rounded">check</span></button>
      </article>
      <article class="settings-card">
        <span class="material-symbols-rounded">accessibility_new</span>
        <h3>Acessibilidade e conforto</h3>
        <div class="toggle-row">
          <div><strong>Reduzir movimento</strong><small> Diminui animações e transições.</small></div>
          <label class="switch"><input type="checkbox" data-motion-toggle /><span></span></label>
        </div>
        <div class="toggle-row">
          <div><strong>Modo simples</strong><small> Interface com foco nas ações principais.</small></div>
          <label class="switch"><input type="checkbox" data-toast="Modo simples alternado visualmente." /><span></span></label>
        </div>
        <div class="toggle-row">
          <div><strong>Alertas por e-mail</strong><small> Placeholder para configuração futura.</small></div>
          <label class="switch"><input type="checkbox" checked data-toast="Preferência de e-mail alterada visualmente." /><span></span></label>
        </div>
      </article>
    </div>
  `;
}

function bindDynamicActions() {
  document.querySelectorAll('[data-tab-action]').forEach(button => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tabAction));
  });

  document.querySelectorAll('[data-open-chat]').forEach(button => {
    button.addEventListener('click', () => {
      state.chatTarget = button.dataset.openChat;
      setActiveTab('chat');
    });
  });

  document.querySelectorAll('[data-chat-target]').forEach(button => {
    button.addEventListener('click', () => {
      state.chatTarget = button.dataset.chatTarget;
      renderTab();
    });
  });

  document.querySelectorAll('[data-open-client-chat]').forEach(button => {
    button.addEventListener('click', () => {
      state.clientTarget = button.dataset.openClientChat;
      setActiveTab('conversasLiga');
    });
  });

  document.querySelectorAll('[data-client-target]').forEach(button => {
    button.addEventListener('click', () => {
      state.clientTarget = button.dataset.clientTarget;
      renderTab();
    });
  });

  const chatForm = document.querySelector('[data-chat-form]');
  if (chatForm) {
    chatForm.addEventListener('submit', event => {
      event.preventDefault();
      const input = chatForm.querySelector('input');
      const value = input.value.trim();
      if (!value) return;

      const messages = document.querySelector('[data-chat-messages]');
      messages.insertAdjacentHTML('beforeend', `<div class="bubble me">${escapeHtml(value)}</div>`);
      input.value = '';
      messages.scrollTop = messages.scrollHeight;
      showToast('Mensagem adicionada ao histórico visual.');
    });
  }

  document.querySelectorAll('[data-open-post]').forEach(button => {
    button.addEventListener('click', () => {
      openBlogModal(Number(button.dataset.openPost));
    });
  });

  document.querySelectorAll('[data-toast]').forEach(element => {
    element.addEventListener('click', () => showToast(element.dataset.toast));
  });

  const saveSettings = document.querySelector('[data-save-settings]');
  if (saveSettings) {
    saveSettings.addEventListener('click', () => {
      const select = document.querySelector('[data-theme-select]');
      const input = document.querySelector('[data-name-input]');
      document.body.dataset.theme = select.value;
      state.userName = input.value.trim() || state.userName;
      userNameLabel.textContent = state.userName;
      showToast('Configurações salvas visualmente.');
    });
  }

  const motionToggle = document.querySelector('[data-motion-toggle]');
  if (motionToggle) {
    motionToggle.addEventListener('change', () => {
      document.body.classList.toggle('reduce-motion', motionToggle.checked);
      showToast(motionToggle.checked ? 'Movimentos reduzidos.' : 'Animações reativadas.');
    });
  }
}

function openBlogModal(index) {
  const post = blogPosts[index];
  if (!post) return;

  let modal = document.querySelector('[data-blog-modal]');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.setAttribute('data-blog-modal', '');
    modal.innerHTML = `
      <div class="blog-modal-backdrop" data-close-blog-modal></div>
      <div class="blog-modal-card" role="dialog" aria-modal="true" aria-labelledby="blog-modal-title">
        <button class="blog-modal-close" type="button" aria-label="Fechar post" data-close-blog-modal>
          <span class="material-symbols-rounded">close</span>
        </button>
        <img class="blog-modal-image" src="" alt="" />
        <div class="blog-modal-content">
          <span class="blog-category" data-modal-category></span>
          <h3 id="blog-modal-title" data-modal-title></h3>
          <div class="blog-modal-meta" data-modal-meta></div>
          <div class="blog-modal-body" data-modal-body></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', event => {
      if (event.target.closest('[data-close-blog-modal]')) {
        closeBlogModal();
      }
    });
  }

  modal.querySelector('.blog-modal-image').src = post.imagem;
  modal.querySelector('.blog-modal-image').alt = post.alt;
  modal.querySelector('[data-modal-category]').textContent = post.categoria;
  modal.querySelector('[data-modal-title]').textContent = post.titulo;
  modal.querySelector('[data-modal-meta]').innerHTML = `
    <span><i class="material-symbols-rounded">edit</i>${post.autor}</span>
    <span><i class="material-symbols-rounded">schedule</i>${post.data}</span>
    <span><i class="material-symbols-rounded">menu_book</i>${post.tempoLeitura}</span>
  `;
  modal.querySelector('[data-modal-body]').innerHTML = post.conteudo.map(paragraph => `<p>${paragraph}</p>`).join('');

  modal.classList.add('show');
  document.body.classList.add('modal-open');
}

function closeBlogModal() {
  const modal = document.querySelector('[data-blog-modal]');
  if (!modal) return;
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="material-symbols-rounded">favorite</span><strong>${message}</strong>`;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;'
  }[char]));
}

function refreshReveal() {
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach((element, index) => {
      setTimeout(() => element.classList.add('visible'), index * 45);
    });
  });
}

function initMobileSidebarButton() {
  const button = document.createElement('button');
  button.className = 'mobile-side-button';
  button.type = 'button';
  button.setAttribute('aria-label', 'Abrir navegação lateral');
  button.innerHTML = '<span class="material-symbols-rounded">menu</span>';
  button.addEventListener('click', () => appShell.classList.toggle('sidebar-open'));
  appShell.appendChild(button);
}

function updateLoginFields() {
  const ligaFields = document.querySelector('[data-liga-fields]');
  const nameInput = document.querySelector('[name="nome"]');
  const emailInput = document.querySelector('[name="email"]');
  const nameLabel = document.querySelector('[data-name-label]');

  const isLiga = state.role === 'liga';
  ligaFields.hidden = !isLiga;

  if (isLiga) {
    nameLabel.textContent = 'Nome da equipe ou representante';
    nameInput.value = 'Equipe da Liga';
    nameInput.placeholder = 'Ex: Equipe da Liga de Nutrição';
    emailInput.value = 'liga@maternare.com';
  } else if (state.role === 'cliente') {
    nameLabel.textContent = 'Nome da equipe cliente';
    nameInput.value = 'Equipe Maternarê';
    nameInput.placeholder = 'Digite o nome da equipe';
    emailInput.value = 'cliente@maternare.com';
  } else {
    nameLabel.textContent = 'Nome';
    nameInput.value = 'Mariana';
    nameInput.placeholder = 'Digite seu nome';
    emailInput.value = 'mariana@maternare.com';
  }
}

function bindStaticActions() {
  document.querySelectorAll('[data-start-login], [data-scroll-login]').forEach(button => {
    button.addEventListener('click', () => setView('login'));
  });

  document.querySelectorAll('[data-go]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      setView(button.dataset.go);
      if (button.dataset.go === 'landing') {
        appShell.classList.remove('sidebar-open');
      }
    });
  });

  document.querySelector('[data-menu-toggle]').addEventListener('click', () => {
    topbar.classList.toggle('menu-open');
  });

  document.querySelectorAll('.role-option').forEach(button => {
    button.addEventListener('click', () => {
      state.role = button.dataset.role;
      document.querySelectorAll('.role-option').forEach(item => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-selected', item === button ? 'true' : 'false');
      });
      updateLoginFields();
    });
  });

  document.querySelector('[data-login-form]').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (state.role === 'liga') {
      state.ligaName = formData.get('liga') || 'Liga Materno-Infantil';
      state.conductorName = formData.get('responsavel') || formData.get('nome') || 'Responsável da liga';
      state.userName = state.conductorName;
    } else {
      state.userName = formData.get('nome') || (state.role === 'paciente' ? 'Paciente' : 'Cliente');
    }

    renderApp();
    setView('app');
    showToast(state.role === 'liga' ? `Acesso da ${state.ligaName} aberto!` : `Bem-vinda(o), ${state.userName}!`);
  });

  document.querySelector('[data-sidebar-toggle]').addEventListener('click', () => {
    appShell.classList.toggle('collapsed');
  });

  sideNav.addEventListener('click', event => {
    const button = event.target.closest('[data-tab]');
    if (!button) return;
    setActiveTab(button.dataset.tab);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      appShell.classList.remove('sidebar-open');
      topbar.classList.remove('menu-open');
    }
  });
}

bindStaticActions();
updateLoginFields();
initMobileSidebarButton();
refreshReveal();
