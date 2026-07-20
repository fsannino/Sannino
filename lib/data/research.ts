// Dados editoriais para /pesquisa e subpáginas. Curados a partir do CV.

export interface ResearchLine {
  id: string;
  title: string;
  short: string;
  description: string;
  status: 'active' | 'ongoing' | 'planned';
  keywords: string[];
}

export interface DigitalProduct {
  id: string;
  title: string;
  short: string;
  description: string;
  stack: string[];
  status: 'live' | 'beta' | 'pesquisa';
}

export const researchLines: ResearchLine[] = [
  {
    id: 'blockchain-ia-farma',
    title: 'Blockchain + IA Generativa em Farma',
    short: 'Pós-Doutoramento UNICAMP/FCA',
    description:
      'Investiga como tecnologias de registro distribuído e LLMs locais podem aprimorar a rastreabilidade ALCOA+ em ambientes farmacêuticos regulados (salas limpas NB3/NB4, ANVISA). Inclui prototipagem de smart contracts em Solidity sobre a plataforma Rhizom.',
    status: 'active',
    keywords: ['Blockchain', 'IA Generativa', 'ANVISA', 'GMP', 'ALCOA+', 'Solidity'],
  },
  {
    id: 'change-management-ma',
    title: 'Change Management em M&A',
    short: 'Doutorado FEA-USP + prática',
    description:
      'Linha consolidada a partir do Doutorado na FEA-USP e de mais de 20 anos liderando integrações pós-fusão. Foco em variáveis humanas que determinam captura de valor — cultura, retenção, governança e mediação de disputas em nível executivo.',
    status: 'ongoing',
    keywords: ['M&A', 'Change Management', 'Cultura', 'PMI', 'Liderança'],
  },
  {
    id: 'data-ia-aplicada',
    title: 'Data Science & IA Aplicada',
    short: 'MBA ESALQ-USP + produtos',
    description:
      'Pesquisa aplicada em modelagem preditiva, RAG, agentes (CrewAI, LangGraph) e automação corporativa. Materializada em produtos digitais próprios (AgroAdubo, JurisMedia) que servem como laboratório vivo para a publicação acadêmica.',
    status: 'ongoing',
    keywords: ['Python', 'OpenAI', 'RAG', 'Agentes', 'Pandas', 'scikit-learn'],
  },
  {
    id: 'metodos-resolucao-conflitos',
    title: 'Métodos Alternativos de Resolução de Conflitos',
    short: 'Arbitragem · Mediação · Conciliação',
    description:
      'Investiga a aplicação de métodos alternativos de resolução de conflitos — arbitragem, mediação e conciliação — em disputas corporativas, contratuais e pós-fusão. Ancorada na pós-graduação pela EPM (Escola Paulista da Magistratura), na certificação CIArb (UK) e na atuação como Conciliador Judicial no TJSP.',
    status: 'ongoing',
    keywords: ['Arbitragem', 'Mediação', 'Conciliação', 'CIArb', 'TJSP', 'Disputas M&A'],
  },
];

export const digitalProducts: DigitalProduct[] = [
  {
    id: 'agroadubo',
    title: 'AgroAdubo',
    short: 'SaaS de recomendação agronômica',
    description:
      'Plataforma web (Next.js 15, React 19) que usa OpenAI Vision API para analisar imagens de plantas/solo e gerar recomendações de adubação e correção. Inclui módulos ESG/carbono e georeferenciamento.',
    stack: ['Next.js', 'React', 'OpenAI Vision', 'Tailwind'],
    status: 'live',
  },
  {
    id: 'jurismedia',
    title: 'JurisMedia',
    short: 'Pesquisa jurisprudencial com LLMs',
    description:
      'Solução Python que combina LLMs locais (Ollama/Gemma) com OpenAI como fallback para busca semântica em bases jurisprudenciais brasileiras. Engenharia de prompts e embeddings para reduzir custo e proteger privacidade.',
    stack: ['Python', 'Ollama', 'OpenAI', 'Embeddings'],
    status: 'beta',
  },
  {
    id: 'ervatorio',
    title: 'Ervatório (Tea Party Club)',
    short: 'Catálogo de chás em PWA',
    description:
      'Aplicação HTML + Supabase + Vercel com suporte PWA e autenticação Google OAuth. Distribuído via PWABuilder na Google Play.',
    stack: ['HTML', 'Supabase', 'PWA', 'Vercel'],
    status: 'live',
  },
  {
    id: 'fengshui-studio',
    title: 'FengShui Studio',
    short: 'SaaS de consultoria',
    description:
      'Produto SaaS integrando conhecimento especialista em Feng Shui a uma plataforma digital com componentes de recomendação e BI.',
    stack: ['Next.js', 'BI', 'Recomendação'],
    status: 'pesquisa',
  },
];
