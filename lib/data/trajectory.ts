// Trajetória profissional — extraída do CV. Mais recente primeiro.

export interface TrajectoryEntry {
  period: string;
  company: string;
  role: string;
  location?: string;
  highlights: string[];
  status?: 'current' | 'past';
}

export const trajectory: TrajectoryEntry[] = [
  {
    period: 'Mai 2025 — Atual',
    company: 'CollabZ Consultoria',
    role: 'Sócio-Fundador · Estratégia, Projetos & Resolução de Disputas',
    location: 'São Paulo',
    status: 'current',
    highlights: [
      'Engajamentos end-to-end combinando gestão da mudança (LaMarsh, PROSCI, ACMP) com BI executivo, IA generativa e automação low-code.',
      'Assessor técnico em conflitos contratuais, M&A e pós-fusão.',
      'Setores: farmacêutico, energia & trading, agronegócio, serviços financeiros.',
      'Concebe e ministra treinamentos in-company em Gestão da Mudança, Data Analytics e IA Generativa.',
    ],
  },
  {
    period: 'Jan — Mai 2025',
    company: 'Aposta Vencedora S.A.',
    role: 'Gerente de Portfólio Estratégico & Analytics Lead',
    location: 'São Paulo',
    highlights: [
      'Plano corporativo de lançamento de operadora estadual de loterias com receita projetada R$ 1,2 bi+.',
      'Supervisão de rede com 34 filiais físicas e 11.000+ parceiros varejistas em 645 municípios.',
      'Modelos de forecasting integrando footprint geográfico, concessão e projeções de venda.',
      'Análise de risco quantitativa Crystal Ball em cronograma e compliance regulatório.',
    ],
  },
  {
    period: 'Mar 2024 — Fev 2025',
    company: 'Cybert Automation',
    role: 'Diretor de Desenvolvimento de Projetos · Engenharia & Automação Industrial',
    highlights: [
      'Analytics de dados industriais (SCADA, PLC, HVAC) em laboratórios NB3/NB4, portfólio R$ 80M+ em farma.',
      'Arquitetura de coleta e visualização de dados em tempo real com 100% de conformidade ANVISA + ISO 14644.',
      'Due diligence técnica e perícia em projetos com CAPEX R$ 5M–R$ 30M.',
      'Pipeline qualificado +35% via BI estruturado.',
    ],
  },
  {
    period: 'Mai 2023 — Fev 2024',
    company: 'EDGE',
    role: 'Gerente de Portfólio (PMO), Líder de Mudança & BI Lead',
    highlights: [
      'Implementação de plataforma ETRM (Energy Trading & Risk Management) com exposição R$ 10 bi+/ano.',
      'Painéis Power BI executivos cobrindo 5 workstreams em programa R$ 20M+.',
      'Adoção +40% via capacitação analítica direcionada a traders.',
    ],
  },
  {
    period: 'Abr 2021 — Mai 2023',
    company: 'Coca-Cola FEMSA',
    role: 'Gerente de Mudança Organizacional & People Analytics Lead',
    highlights: [
      'Transformação comercial, logística e corporativa impactando 20.000+ colaboradores no Brasil.',
      'Programa Zero-Based Budgeting baseado em analytics financeiro em 40+ unidades.',
      'Rede de change agents apoiada em people analytics; alcance de comunicação +60%; 5.000+ funcionários treinados.',
      'Mediação cross-funcional global/local reduziu riscos de transformação em 30%.',
    ],
  },
  {
    period: 'Mai — Dez 2020',
    company: 'Tamoios Tecnologia',
    role: 'Consultor de Transformação Operacional & Data Governance',
    highlights: [
      'Redesenho de processos durante COVID-19 com indicadores de continuidade operacional.',
      'Risco de incidentes -25%; acuracidade de previsibilidade de entrega +30%.',
    ],
  },
  {
    period: 'Set 2019 — Abr 2020',
    company: 'Tate & Lyle / Gemacom Tech',
    role: 'Gerente de Integração de M&A & Synergy Analytics',
    highlights: [
      'Integração pós-fusão de R$ 500M+ cobrindo portfólio, supply chain, finanças, TI, RH e SAP.',
      'Modelo analítico de captura de sinergia 10–15% de eficiência; redesenho de 6 funções.',
      'Mediação entre lideranças de adquirente e adquirido acelerou marcos em 20%.',
    ],
  },
  {
    period: 'Jan — Set 2019',
    company: 'Dow Chemical',
    role: 'Gerente de Transformação LATAM & SAP Data Separation Lead',
    location: 'LATAM (5 países)',
    highlights: [
      'Segregação de SAP, sistemas e infraestrutura analítica em 17 plantas, 5 países, 3.500+ usuários.',
      'Cisão Dow–DuPont–Corteva: arquitetura de dados, mapeamento de entidades mestres, modelos de reporting.',
      'Negociação de TSAs e ativos compartilhados; 2.000+ funcionários treinados; risco de disrupção -35%.',
    ],
  },
  {
    period: 'Jul 2018 — Jan 2019',
    company: 'Grupo Tiradentes',
    role: 'Gerente de Projetos & Mudança · Iniciativa de Dados Educacionais',
    highlights: [
      'Estratégia de mudança para implementação SAP Activate em múltiplas unidades educacionais.',
      'Impactou indiretamente 200.000+ alunos; prontidão de implementação +45%.',
    ],
  },
  {
    period: 'Nov 2016 — Mai 2018',
    company: 'Nexa Resources',
    role: 'Gerente de Integração & Mudança · Synergy Analytics',
    location: 'Brasil & Peru',
    highlights: [
      'Integração Milpo (Peru) + Votorantim Metais (Brasil) em 8+ unidades industriais.',
      'Frameworks analíticos para captura de sinergias R$ 100M+.',
      'Mediação de disputas interculturais e entre jurisdições em nível executivo.',
    ],
  },
  {
    period: 'Ago — Nov 2016',
    company: 'Porto Seguro',
    role: 'Gerente de Portfólio & Investment Analytics',
    highlights: [
      'Modelo quantitativo de gestão de portfólio para dezenas de projetos de modernização e automação.',
      'Acuracidade de alocação de investimentos +25% via analytics financeiro e scoring multicritério.',
    ],
  },
  {
    period: '2012 — 2014',
    company: 'Politec Consulting',
    role: 'OCM Practice Leader',
    highlights: ['Liderança da prática de Organizational Change Management.'],
  },
  {
    period: '2008 — 2011',
    company: 'CSC (Computer Sciences Corporation)',
    role: 'Project & Program Advisor',
    highlights: ['Implementações SAP, governança de dados, montagem de PMO em clientes corporativos.'],
  },
  {
    period: '2004 — 2008',
    company: 'BearingPoint',
    role: 'Project Manager',
    highlights: ['Transformação de negócio e redesenho de processos em clientes brasileiros e internacionais.'],
  },
  {
    period: '2002 — 2004',
    company: 'Ernst & Young',
    role: 'Senior Consultant',
    highlights: ['Consultoria em gestão e transformação para clientes corporativos.'],
  },
  {
    period: '1999 — 2001',
    company: 'Ericsson / Unibanco',
    role: 'PMO & Project Analyst',
    highlights: ['Início de carreira em PMO e análise de projetos em telecom e bancos.'],
  },
];

export const earlyCareerClients = [
  'Banco do Brasil',
  'BNDES',
  'MAPFRE',
  'Petrobras',
  'Vale',
  'GM',
  'Usiminas',
  'Transpetro',
  'Syngenta',
  'Gruppo Campari',
];
