import type { Article, Service, HubCard, Credencial, Pilar, NavItem } from './types';

// TODO(CMS): Replace with payload.find({ collection: 'articles', limit: 3, sort: '-publishedAt' })
export const latestArticles: Article[] = [
  {
    slug: 'integracao-ma-dow-corteva',
    title: 'Integração M&A em Larga Escala: Lições da Cisão Dow–DuPont–Corteva',
    excerpt:
      'Como segregar dados, sistemas SAP e infraestrutura analítica em 17 plantas e 5 países sem comprometer a continuidade do negócio. Lições de uma das maiores separações corporativas da década.',
    category: 'M&A',
    publishedAt: '2026-04-15',
    readingTimeMinutes: 9,
    href: '/blog/integracao-ma-dow-corteva',
  },
  {
    slug: 'blockchain-ia-salas-limpas',
    title: 'Blockchain + IA Generativa em Ambientes Farmacêuticos Regulados',
    excerpt:
      'Pesquisa em andamento no Pós-Doutoramento UNICAMP/FCA sobre rastreabilidade ALCOA+ em salas limpas NB3/NB4 com smart contracts (Solidity) e LLMs locais. Um panorama da agenda.',
    category: 'Pesquisa',
    publishedAt: '2026-03-28',
    readingTimeMinutes: 12,
    href: '/blog/blockchain-ia-salas-limpas',
  },
  {
    slug: 'crystal-ball-power-bi',
    title: 'Crystal Ball + Power BI: Antecipando Riscos em Programas de Transformação',
    excerpt:
      'Combinando análise de risco quantitativa Monte Carlo com dashboards executivos para antecipar atrasos, desvios de orçamento e gaps de adoção. Aplicação prática em ETRM e programas SAP.',
    category: 'Analytics',
    publishedAt: '2026-03-10',
    readingTimeMinutes: 8,
    href: '/blog/crystal-ball-power-bi',
  },
];

// TODO(CMS): Replace with payload.find({ collection: 'services' })
export const services: Service[] = [
  {
    id: 'transformacao-mudanca',
    title: 'Transformação & Gestão da Mudança',
    subtitle: 'LaMarsh Master · MCMP™ · CCMP™',
    description:
      'Programas de transformação corporativa em larga escala apoiados por metodologia LaMarsh (Master Licensee BR/LATAM exclusivo), PROSCI e ACMP. Foco em adoção, sustentabilidade e captura de valor.',
    features: [
      'Diagnóstico de prontidão e estratégia de mudança',
      'Redesenho organizacional e cultural',
      'Comunicação, treinamento e adoção',
    ],
    ctaLabel: 'Saiba mais',
    ctaHref: '/servicos/gestao-mudanca',
    icon: 'ArrowRightLeft',
  },
  {
    id: 'data-ia',
    title: 'Data & Analytics + IA Generativa',
    subtitle: 'BI · Python · LLMs · Automação',
    description:
      'BI executivo (Power BI, Tableau, Looker) e analytics aplicado: forecasting, modelagem preditiva, IA generativa (OpenAI, Ollama/Gemma) com RAG e agentes (CrewAI, LangGraph) integrados a workflows corporativos via n8n e MCP.',
    features: [
      'Dashboards executivos e self-service analytics',
      'Pipelines de dados e modelagem preditiva',
      'Automação com agentes e LLMs',
    ],
    ctaLabel: 'Saiba mais',
    ctaHref: '/servicos/data-ia',
    icon: 'Brain',
  },
  {
    id: 'pmo-governanca',
    title: 'PMO & Portfólio Estratégico',
    subtitle: 'Programas SAP · ETRM · CAPEX',
    description:
      'Estruturação e operação de PMOs corporativos, priorização de portfólio multicritério e governança de programas SAP/ERP, ETRM e CAPEX (R$ 5M–R$ 80M+) com dashboards executivos e análise quantitativa de risco (Crystal Ball).',
    features: [
      'PMO corporativo e portfólio',
      'Programas SAP / ERP / ETRM',
      'Análise de risco quantitativa',
    ],
    ctaLabel: 'Saiba mais',
    ctaHref: '/servicos/pmo-governanca',
    icon: 'LayoutDashboard',
  },
  {
    id: 'integracao-ma',
    title: 'Integração M&A & Sinergias',
    subtitle: 'Pós-Fusão · Synergy Analytics',
    description:
      'Liderança de integrações pós-fusão multi-países (Dow LATAM 5 países, Nexa BR/Peru, Tate & Lyle), com modelos analíticos de captura de sinergia, integração cultural e mediação de disputas em nível de liderança.',
    features: [
      'Plano de integração 100 dias',
      'Synergy analytics e captura de valor',
      'Integração cultural e organizacional',
    ],
    ctaLabel: 'Saiba mais',
    ctaHref: '/servicos/integracao-ma',
    icon: 'Merge',
  },
  {
    id: 'resolucao-disputas',
    title: 'Resolução de Disputas',
    subtitle: 'Mediação · Conciliação · Arbitragem',
    description:
      'Apoio técnico e prático em conflitos contratuais, pós-fusão, governança e disputas entre lideranças. Conciliador Judicial TJSP e membro CIArb (UK). Pós-graduação em Métodos Alternativos de Resolução de Conflitos pela EPM.',
    features: [
      'Mediação de disputas pós-M&A',
      'Conciliação contratual e interna',
      'Arbitragem (CIArb-UK)',
    ],
    ctaLabel: 'Saiba mais',
    ctaHref: '/servicos/resolucao-disputas',
    icon: 'Scale',
  },
  {
    id: 'research-as-a-service',
    title: 'Research-as-a-Service',
    subtitle: 'Pesquisa Aplicada para Empresas',
    description:
      'Pesquisa acadêmica com aplicação prática: revisões sistemáticas, levantamentos quantitativos/qualitativos e estudos de caso para suportar decisões estratégicas. Doutor pela FEA-USP, MBA Data Science ESALQ-USP, Pós-Doc UNICAMP em andamento.',
    features: [
      'Revisão sistemática e scoping review',
      'Pesquisa quantitativa e qualitativa',
      'Relatórios executivos e técnicos',
    ],
    ctaLabel: 'Saiba mais',
    ctaHref: '/servicos/research-as-a-service',
    icon: 'FlaskConical',
  },
];

// TODO(CMS): Replace with payload.find({ collection: 'hubCards' })
export const hubCards: HubCard[] = [
  {
    id: 'metodologia',
    title: 'Base de Conhecimento',
    description: 'Guias completos sobre metodologia quantitativa, qualitativa e mista.',
    href: '/academico/base-conhecimento',
    icon: 'BookOpen',
  },
  {
    id: 'etica',
    title: 'Ética em Pesquisa',
    description: 'CEP/CONEP, integridade acadêmica, IA e ética por área de conhecimento.',
    href: '/academico/etica-pesquisa',
    icon: 'Scale',
  },
  {
    id: 'por-area',
    title: 'Pesquisa por Área',
    description: 'Orientação específica para Administração, Direito, Engenharia, Saúde e mais.',
    href: '/academico/pesquisa-por-area',
    icon: 'Layers',
  },
  {
    id: 'metodometro',
    title: 'Metodômetro',
    description: 'Descubra a metodologia ideal para sua pesquisa em 7 perguntas.',
    href: '/academico/metodometro',
    icon: 'Compass',
    badge: 'Ferramenta',
  },
];

// TODO(CMS): Replace with payload.find({ collection: 'credentials' })
export const credenciais: Credencial[] = [
  { code: 'LaMarsh Master', label: 'Master Licensee exclusivo BR/LATAM', issuer: 'LaMarsh Global' },
  { code: 'MCMP™ · CCMP™', label: 'Master & Certified Change Management Professional', issuer: 'ACMP' },
  { code: 'PMP · SAFe', label: 'Project Management & Agile at Scale', issuer: 'PMI · Scaled Agile' },
  { code: 'Doutor', label: 'Doutorado em Administração de Empresas', issuer: 'FEA-USP' },
  { code: 'Pós-Doc', label: 'Pós-Doutoramento em andamento', issuer: 'UNICAMP/FCA' },
];

// TODO(CMS): Replace with payload.find({ collection: 'pillars' })
export const tresPilares: Pilar[] = [
  {
    title: 'Consultor',
    description:
      'Transformação corporativa, integração M&A, Data & IA Generativa e resolução de disputas para corporações globais. LaMarsh Master Licensee BR/LATAM, MCMP™/CCMP™, PMP/SAFe.',
    stats: '20+',
    statsLabel: 'anos de experiência',
    icon: 'Briefcase',
    href: '/servicos',
  },
  {
    title: 'Pesquisador',
    description:
      'Pós-Doc em andamento na UNICAMP/FCA — Blockchain + IA Generativa em ambientes farmacêuticos regulados. Doutor pela FEA-USP, MBA Data Science ESALQ-USP. Produtos digitais com IA aplicada.',
    stats: '5+',
    statsLabel: 'produtos digitais lançados',
    icon: 'FlaskConical',
    href: '/pesquisa',
  },
  {
    title: 'Educador',
    description:
      'Hub acadêmico aberto + treinamentos in-company em Gestão da Mudança, Data Analytics, IA Generativa e automação low-code (n8n, MCP, OpenAI/Anthropic). Universidade corporativa Coca-Cola FEMSA: 5.000+ treinados.',
    stats: '5k+',
    statsLabel: 'profissionais treinados',
    icon: 'GraduationCap',
    href: '/academico',
  },
];

// Navigation structure
export const navItems: NavItem[] = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  {
    label: 'Acadêmico',
    href: '/academico',
    children: [
      { label: 'Base de Conhecimento', href: '/academico/base-conhecimento' },
      { label: 'Ética em Pesquisa', href: '/academico/etica-pesquisa' },
      { label: 'Pesquisa por Área', href: '/academico/pesquisa-por-area' },
      { label: 'Metodômetro', href: '/academico/metodometro' },
      { label: 'Materiais', href: '/academico/materiais' },
      { label: 'Glossário', href: '/academico/glossario' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];
