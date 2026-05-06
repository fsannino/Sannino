// Conteúdo detalhado para cada serviço — alimenta a rota dinâmica
// /servicos/[slug]. Construído a partir da experiência real do CV.

export interface ServiceCase {
  contexto: string;
  desafio: string;
  resultado: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDeliverable {
  label: string;
  desc: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  forWho: string[];
  approach: string[];
  deliverables: ServiceDeliverable[];
  cases: ServiceCase[];
  faq: ServiceFAQ[];
}

export const servicesDetail: ServiceDetail[] = [
  {
    slug: 'gestao-mudanca',
    title: 'Transformação & Gestão da Mudança',
    subtitle: 'MCMP™ · CCMP™ · PROSCI · LaMarsh',
    intro:
      'Programas de transformação corporativa em larga escala falham principalmente por causas humanas — não por estratégia ruim. Trabalho com executivos para que a mudança aconteça e permaneça, com metodologias consagradas (LaMarsh, PROSCI, ACMP) ancoradas em 20+ anos de prática.',
    forWho: [
      'CEOs e diretores em fase de redesenho organizacional',
      'Líderes de RH/People em transformação cultural',
      'Sponsors de programas SAP/ERP, ETRM ou plataformas core',
      'Lideranças em pós-fusão precisando de adoção rápida',
      'Empresas com OKRs estratégicos em risco por baixa adesão',
    ],
    approach: [
      'Começo por um diagnóstico de prontidão organizacional — mapeio stakeholders, mensuro readiness por área, identifico riscos de adoção e construo o "case for change" antes de qualquer plano de comunicação.',
      'Executo em ciclos curtos de 30-60-90 dias, com instrumentos quantitativos (pulse surveys, métricas de adoção) e qualitativos (entrevistas com agentes da mudança, focus groups). Sem pirotecnia — o que importa é ROI da transformação.',
      'Trabalho em estreita colaboração com o sponsor executivo: relatórios mensais, alertas precoces sobre resistências e ajustes táticos antes que viram crise.',
    ],
    deliverables: [
      { label: 'Diagnóstico de prontidão', desc: 'Assessment quantitativo + qualitativo do readiness organizacional, com priorização de focos de risco.' },
      { label: 'Caso de mudança (Case for Change)', desc: 'Narrativa executiva e racional de negócio que sustenta a transformação para conselho, lideranças e equipes.' },
      { label: 'Plano de comunicação e engajamento', desc: 'Cadência, canais, mensagens-chave por audiência e métricas de alcance/sentimento.' },
      { label: 'Rede de change agents', desc: 'Identificação, capacitação e ativação de multiplicadores em cada área de impacto.' },
      { label: 'Dashboard de adoção', desc: 'KPIs de adoção, sentimento e maturidade reportados ao sponsor em ciclos quinzenais ou mensais.' },
      { label: 'Playbooks de sustentabilidade', desc: 'Guias para lideranças manterem a mudança após o encerramento do programa.' },
    ],
    cases: [
      {
        contexto: 'Multinacional de bebidas, transformação comercial nacional',
        desafio: 'Programa de Zero-Based Budgeting com risco em 40+ unidades de negócio e 20.000+ colaboradores impactados.',
        resultado: 'Engajamento +60% via rede de change agents, 5.000+ funcionários treinados, economias multimilionárias capturadas.',
      },
      {
        contexto: 'Trading de gás, plataforma ETRM',
        desafio: 'Adoção da nova plataforma por traders céticos com exposição anual R$ 10 bi+.',
        resultado: 'Adoção +40% nos primeiros 90 dias via capacitação analítica direcionada e dashboards de PMO em Power BI.',
      },
      {
        contexto: 'Mineração, integração pós-fusão BR/Peru',
        desafio: 'Mediar diferenças culturais entre operações brasileiras e peruanas em 8+ unidades industriais.',
        resultado: 'Sinergias R$ 100M+ destravadas em 18 meses, com integração cultural acelerada por mediação executiva.',
      },
    ],
    faq: [
      { q: 'Quanto tempo leva um programa típico?', a: 'Programas de change management variam de 6 a 24 meses dependendo da complexidade. Costumo entregar valor a partir do mês 2-3 (diagnóstico + quick wins).' },
      { q: 'Você atua presencial ou remoto?', a: 'Híbrido. Visitas mensais ou quinzenais às unidades-chave + ritmo remoto contínuo. Para programas LATAM, organizo waves regionais.' },
      { q: 'Qual o porte mínimo de empresa?', a: 'Funciona melhor a partir de ~500 colaboradores impactados. Para times menores, ofereço mentoria pontual ao sponsor.' },
      { q: 'Trabalha com qual metodologia?', a: 'Adapto LaMarsh, PROSCI e ACMP conforme o cliente. Não sou dogmático — uso o que funciona no contexto.' },
    ],
  },
  {
    slug: 'data-ia',
    title: 'Data & Analytics + IA Generativa',
    subtitle: 'BI · Python · LLMs · Automação',
    intro:
      'Da decisão executiva guiada por dashboards à automação de workflows com agentes e LLMs locais. Combino MBA em Data Science (ESALQ-USP), prática real em Power BI/Tableau e produtos digitais próprios (AgroAdubo, JurisMedia) para desenhar soluções pragmáticas — sem buzzword bingo.',
    forWho: [
      'C-levels em busca de dashboards executivos confiáveis',
      'Áreas que precisam reduzir custo com automação de processos repetitivos',
      'Times de PMO/Estratégia que querem forecasting baseado em dados',
      'Empresas explorando IA generativa em compliance, suporte ou pesquisa',
      'Líderes de RH analisando people analytics em escala',
    ],
    approach: [
      'Começo perguntando: qual decisão essa análise vai apoiar? Sem decisão clara, dashboards viram cosmético. Trabalho com o sponsor para amarrar dados → KPIs → ações.',
      'Para IA generativa, prefiro pilotar com LLMs locais (Ollama, Gemma) quando há dados sensíveis — privacidade nativa, sem vazar para APIs comerciais. RAG bem feito antes de fine-tuning caro.',
      'Entrego treinamento prático para o time interno absorver — analytics que depende eternamente de consultor é falha de design.',
    ],
    deliverables: [
      { label: 'Dashboards executivos', desc: 'Power BI, Tableau ou Looker conforme stack do cliente. KPIs amarrados a OKRs.' },
      { label: 'Pipelines de dados', desc: 'ETL/ELT, modelagem dimensional, integração SAP/Salesforce/Postgres. Documentação completa.' },
      { label: 'Modelos preditivos', desc: 'Forecasting (séries temporais), classificação, segmentação — Python (pandas, scikit-learn).' },
      { label: 'Agentes e automação com LLMs', desc: 'CrewAI, LangGraph, integração via n8n/MCP. Casos: triagem de tickets, geração de relatórios, busca semântica em bases internas.' },
      { label: 'Análise de risco quantitativa', desc: 'Crystal Ball / Monte Carlo para programas, projetos e cronogramas regulatórios.' },
      { label: 'Capacitação interna', desc: 'Workshops in-company em Data Analytics, IA Generativa e automação low-code.' },
    ],
    cases: [
      {
        contexto: 'Trading de energia, programa de transformação',
        desafio: 'PMO sem visibilidade integrada de risco, orçamento e dependências entre 5 workstreams.',
        resultado: 'Painéis Power BI executivos cobrindo R$ 20M+ de programa; engajamento de trading +40% em 90 dias.',
      },
      {
        contexto: 'Loterias estaduais, pré-lançamento',
        desafio: 'Forecasting de receita integrando footprint geográfico, concessão regulatória e projeções de venda em 645 municípios.',
        resultado: 'Modelo apresentado ao conselho; análise de risco Crystal Ball antecipou 3 frentes regulatórias críticas.',
      },
      {
        contexto: 'Agronegócio, produto digital próprio',
        desafio: 'Recomendação agronômica baseada em imagens de plantas/solo (AgroAdubo).',
        resultado: 'Plataforma SaaS Next.js + OpenAI Vision API live, com módulos ESG/carbono e georeferenciamento.',
      },
    ],
    faq: [
      { q: 'Você trabalha com qual cloud/stack?', a: 'Stack-agnóstico. Já entreguei em Azure, AWS, GCP, Vercel, Supabase. Adapto à realidade de TI do cliente.' },
      { q: 'Em quanto tempo um dashboard fica em produção?', a: 'POC útil em 2-4 semanas; dashboard executivo robusto com pipeline em 8-12 semanas.' },
      { q: 'IA generativa é seguro com nossos dados?', a: 'Depende do desenho. Para dados sensíveis recomendo LLMs locais (Ollama) ou Azure OpenAI com isolamento contratual. Nunca dados sensíveis em APIs free.' },
      { q: 'Você desenvolve internamente ou só consulta?', a: 'Faço os dois. Posso prototipar e entregar pronto, ou orientar o time interno e revisar entregas.' },
    ],
  },
  {
    slug: 'pmo-governanca',
    title: 'PMO & Portfólio Estratégico',
    subtitle: 'Programas SAP · ETRM · CAPEX',
    intro:
      'Mais de 20 anos estruturando e operando PMOs corporativos — de implantações SAP em 17 plantas em 5 países à gestão de portfólio CAPEX R$ 80M+ em farma. Foco em rigor analítico, governança executiva e captura de valor mensurável.',
    forWho: [
      'Empresas com portfólio de transformação > R$ 5M',
      'Sponsors de implantações SAP/Salesforce/ETRM',
      'CFOs/COOs precisando priorizar CAPEX por critérios objetivos',
      'PMOs em maturação que precisam evoluir do "report status" pra "geração de valor"',
      'Companhias em pós-fusão organizando o portfólio combinado',
    ],
    approach: [
      'Começo por um assessment do PMO atual — maturidade, cultura, cadência, ferramentas. Sem isso, qualquer recomendação é palpite.',
      'Estruturo portfólio por múltiplos critérios: valor, risco, complexidade, dependências, capacidade. Uso scoring quantitativo, não vibes.',
      'Operacionalizo com cadência rígida de governança: comitê executivo, status reports curados, alertas precoces. Exibo o que está em risco antes que vire crise.',
    ],
    deliverables: [
      { label: 'Assessment de maturidade', desc: 'Diagnóstico do PMO atual (PM2, PMI, OPM3 adapt.) com plano de evolução em 12 meses.' },
      { label: 'Framework de priorização', desc: 'Modelo multicritério (BSC, AHP, scoring híbrido) calibrado ao apetite de risco e estratégia da empresa.' },
      { label: 'Estrutura de governança', desc: 'Comitês, papéis, cadência, modelos de status report. Reduz ruído, aumenta sinal.' },
      { label: 'Dashboards executivos', desc: 'Power BI cobrindo escopo, prazo, custo, risco, dependências, valor capturado por programa.' },
      { label: 'Análise de risco quantitativa', desc: 'Crystal Ball para cronograma, orçamento e compliance — antecipa atrasos em 60-90 dias.' },
      { label: 'Sustentabilidade do PMO', desc: 'Capacitação do time interno, manuais e onboarding de novos PMs.' },
    ],
    cases: [
      {
        contexto: 'Farma, portfólio CAPEX',
        desafio: 'Pipeline comercial pouco previsível em portfólio R$ 80M+ de salas limpas NB3/NB4.',
        resultado: 'Pipeline qualificado +35% via BI estruturado e priorização multicritério.',
      },
      {
        contexto: 'Energia/Trading, plataforma ETRM',
        desafio: 'Programa R$ 20M+ com 5 workstreams, sem visão integrada de risco e dependências.',
        resultado: 'PMO digital em Power BI, governança executiva mensal, cronograma recuperado.',
      },
      {
        contexto: 'Multinacional química, segregação SAP LATAM',
        desafio: 'Coordenar segregação de sistemas e dados em 17 plantas, 5 países, 3.500+ usuários (Dow-DuPont-Corteva).',
        resultado: 'Risco de disrupção -35%; 2.000+ funcionários treinados em novos sistemas e BI.',
      },
    ],
    faq: [
      { q: 'Vocês usam qual ferramenta de PMO?', a: 'Stack-agnóstico. Já trabalhei com MS Project, Smartsheet, Jira, Asana, Monday, Wrike. O que conta é a cadência, não a ferramenta.' },
      { q: 'Como justificar o investimento no PMO?', a: 'Mostro ROI em 90-180 dias via captura de sinergias ou redução de retrabalho. Sem isso, o PMO vira custo administrativo.' },
      { q: 'Implantação ou só consultoria?', a: 'Os dois. Posso liderar interim PMO ou orientar/auditar um PMO existente. Cada cliente escolhe.' },
      { q: 'Trabalha com metodologia ágil ou cascata?', a: 'Híbrida — depende do contexto. SAFe para programas de TI grandes, scrum em squads de produto, cascata para CAPEX industrial.' },
    ],
  },
  {
    slug: 'integracao-ma',
    title: 'Integração M&A & Sinergias',
    subtitle: 'Pós-Fusão · Synergy Analytics',
    intro:
      'Fusões e aquisições falham por causas humanas mais do que financeiras. Liderei integrações multi-países de R$ 500M+ em alimentos, mineração e indústria química — Tate & Lyle, Nexa Resources, Dow-DuPont-Corteva. Foco em captura de sinergia, integração cultural e mediação de disputas em nível de liderança.',
    forWho: [
      'Compradores em fase de planejamento pré-deal (cultural due diligence)',
      'Sponsors do dia 0 ao dia 100 da integração',
      'Lideranças com disputas pós-deal (governança, escopo, talentos)',
      'PEs e family offices com portfólio multi-empresa',
      'Adquiridos lidando com mudança de controle e cultura',
    ],
    approach: [
      'Cultural due diligence é tão importante quanto a financeira. Mapeio diferenças de cultura, processos e tecnologia ANTES do fechamento — quando ainda dá tempo de moldar o plano.',
      'Plano de 100 dias com 3 prioridades não-negociáveis: stabilization (não perder cliente/talento), synergy capture (captura de valor anunciada ao mercado), culture integration (criar nova identidade).',
      'Mediação como ferramenta executiva: muitos atritos pós-deal não são contratuais, são interpretativos. Resolver na hora certa evita litigiosidade meses depois.',
    ],
    deliverables: [
      { label: 'Cultural due diligence', desc: 'Avaliação pré-deal de fit cultural, processos e tecnologia. Inputs para o pricing e o plano de integração.' },
      { label: 'Plano de integração 100 dias', desc: 'Roadmap detalhado com workstreams (Comercial, Supply, Finanças, RH, TI), milestones, owners.' },
      { label: 'Synergy analytics', desc: 'Modelo quantitativo de captura de sinergia (revenue + cost), tracking mensal, ajustes táticos.' },
      { label: 'Programa de retenção', desc: 'Identificação de talentos críticos, plano de comunicação direcionada, retention bonuses estratégicos.' },
      { label: 'Mediação executiva', desc: 'Atuação direta em disputas de governança, escopo, papéis e interpretação contratual em nível C-level.' },
      { label: 'Carve-out ou separação', desc: 'Plano reverso quando há venda de unidade de negócio — TSA, segregação de dados, transferência de pessoas.' },
    ],
    cases: [
      {
        contexto: 'Cisão multinacional química, LATAM',
        desafio: 'Segregar dados, sistemas SAP e BI em 17 plantas, 5 países (Dow-DuPont-Corteva), com 3.500+ usuários impactados.',
        resultado: 'Negociação de TSAs e ativos compartilhados; capacitação de 2.000+ funcionários; risco de disrupção -35%.',
      },
      {
        contexto: 'Indústria de alimentos, integração R$ 500M+',
        desafio: 'Integrar Gemacom Tech à Tate & Lyle: portfólio, supply chain, finanças, TI, RH, rollout SAP.',
        resultado: 'Captura de sinergia 10-15% conforme meta; redesenho de 6 funções; mediação acelerou marcos em 20%.',
      },
      {
        contexto: 'Mineração, integração binacional',
        desafio: 'Milpo (Peru) + Votorantim Metais (Brasil) — 8+ unidades industriais, 2 países, 2 culturas operacionais.',
        resultado: 'R$ 100M+ em sinergias destravadas; mediação cross-cultural reduziu fricção em nível executivo.',
      },
    ],
    faq: [
      { q: 'Você atua antes ou depois do closing?', a: 'Idealmente nos dois momentos. Pré-deal: cultural due diligence, integration design. Pós-deal: execução do plano 100 dias, mediação.' },
      { q: 'Confidencialidade pré-deal?', a: 'NDA padrão + walls internos rigorosos. Trabalhei com deals sensíveis em mineração, química e alimentos sem vazamentos.' },
      { q: 'Quanto tempo dura a integração?', a: 'O plano oficial dura 100 dias; a integração cultural completa, 18-24 meses. Trabalho em modelos diferentes para cada fase.' },
      { q: 'Você lida com PE/family offices?', a: 'Sim. Atendo deals patrimoniais e financeiros. O playbook muda — mais foco em IRR, menos em cultura organizacional ampla.' },
    ],
  },
  {
    slug: 'resolucao-disputas',
    title: 'Resolução de Disputas',
    subtitle: 'Mediação · Conciliação · Arbitragem',
    intro:
      'Muitos conflitos contratuais e pós-fusão se resolvem antes do litígio — desde que haja alguém capaz de traduzir interesses, ler entrelinhas técnicas e estruturar acordos. Conciliador Judicial pelo TJSP, membro do CIArb (UK) e Pós-graduado em Métodos Alternativos pela EPM.',
    forWho: [
      'Empresas em disputas contratuais com fornecedores, clientes ou parceiros',
      'Lideranças em conflito pós-fusão (governança, papéis, escopo)',
      'Times com atritos cross-cultural ou cross-funcional travando entregas',
      'Investidores e sócios em desalinhamento de visão estratégica',
      'Conselhos lidando com disputas entre membros ou entre acionistas',
    ],
    approach: [
      'Começo ouvindo separadamente cada parte para entender interesses (não posições). A diferença entre os dois é o que destrava acordos.',
      'Estruturo a discussão por temas tratáveis. Atrito generalizado vira inviável; atrito por cláusula específica é negociável.',
      'Foco em soluções que cada parte consiga sustentar internamente — acordos que dependem só do mediador desmoronam em 60 dias.',
    ],
    deliverables: [
      { label: 'Diagnóstico de disputa', desc: 'Mapeamento de interesses, posições, BATNAs e zonas de acordo (ZOPA). Documento confidencial.' },
      { label: 'Mediação executiva', desc: 'Sessões facilitadas (presencial ou remota) com C-levels, com framework de NTNL/CIArb adaptado à realidade brasileira.' },
      { label: 'Conciliação contratual', desc: 'Apoio em revisão de contratos com cláusulas em disputa — interpretação, propostas de redação, fechamento.' },
      { label: 'Arbitragem (CIArb)', desc: 'Suporte técnico em arbitragens onde a complexidade contratual exige expertise multidisciplinar (negócios + engenharia + change).' },
      { label: 'Negociação de TSAs e contratos pós-M&A', desc: 'Mediação especializada em disputas de transition service agreements e cláusulas de escrow.' },
      { label: 'Treinamento em negociação', desc: 'Workshops in-company para times comerciais, jurídico e RH em técnicas de mediação assistida.' },
    ],
    cases: [
      {
        contexto: 'Mediação executiva pós-M&A, indústria de alimentos',
        desafio: 'Conflitos de governança e escopo entre liderança adquirente e adquirida em programa de R$ 500M+.',
        resultado: 'Marcos de sinergia acelerados em ~20%; redução de risco de transformação em 30%.',
      },
      {
        contexto: 'Cisão LATAM, ativos e TSAs compartilhados',
        desafio: 'Mediar interpretações divergentes sobre ativos, dependências operacionais e responsabilidades transitórias entre entidades.',
        resultado: 'TSAs estruturados e assinados em prazo, sem litígio; relação operacional preservada para parcerias futuras.',
      },
      {
        contexto: 'Mediação cross-cultural BR/Peru',
        desafio: 'Atritos entre operações brasileiras e peruanas em integração mineira binacional.',
        resultado: 'Quadros executivos reformados sem litígio; preservação dos talentos críticos das duas operações.',
      },
    ],
    faq: [
      { q: 'Diferença entre mediação, conciliação e arbitragem?', a: 'Mediação: facilitação para que as partes cheguem a acordo. Conciliação: mediador propõe soluções. Arbitragem: árbitro decide com força de sentença.' },
      { q: 'Qual o status legal disso no Brasil?', a: 'Mediação e conciliação são reguladas pela Lei 13.140/2015. Arbitragem pela Lei 9.307/1996. Acordos têm validade jurídica plena.' },
      { q: 'Confidencialidade?', a: 'Total. Tudo o que é dito em sessão de mediação é coberto por sigilo profissional + cláusula contratual + ética CIArb.' },
      { q: 'Em quanto tempo se resolve?', a: 'Disputas pontuais: 2-4 sessões. M&A complexo: 4-12 sessões ao longo de 3-6 meses. Arbitragens completas: 6-18 meses.' },
    ],
  },
  {
    slug: 'research-as-a-service',
    title: 'Research-as-a-Service',
    subtitle: 'Pesquisa Aplicada para Empresas',
    intro:
      'Pesquisa acadêmica rigorosa com aplicação executiva: revisões sistemáticas, levantamentos quantitativos/qualitativos e estudos de caso para apoiar decisões estratégicas. Doutor pela FEA-USP, MBA em Data Science (ESALQ-USP), Pós-Doc em andamento na UNICAMP/FCA.',
    forWho: [
      'C-levels precisando de evidência rigorosa antes de decisões estratégicas',
      'Áreas de inovação avaliando viabilidade de novas tecnologias',
      'Empresas em fase pré-M&A precisando de market scan',
      'Lideranças em setores regulados (farma, energia) que precisam de fundamento técnico',
      'PMOs que precisam de business case sustentável para conselhos',
    ],
    approach: [
      'Trato pesquisa como projeto: pergunta → desenho → coleta → análise → entregável. Sem genericismos consultivos.',
      'Aplicado significa traduzido. Toda análise vem com implicações práticas, riscos identificados, próximos passos. Não entrego "tese" para executivo.',
      'Quando útil, pré-registro o protocolo (PROSPERO para revisão sistemática) — aumenta credibilidade do achado.',
    ],
    deliverables: [
      { label: 'Revisão sistemática', desc: 'Síntese rigorosa da literatura sobre uma pergunta delimitada (PRISMA). Útil para fundamentar inovação ou regulação.' },
      { label: 'Scoping review', desc: 'Mapeamento mais amplo de temas emergentes — quando o objetivo é entender campo, não confirmar hipóteses.' },
      { label: 'Pesquisa quantitativa', desc: 'Surveys com amostragem probabilística, modelagem com SEM/regressão. Análise estatística rigorosa.' },
      { label: 'Pesquisa qualitativa', desc: 'Entrevistas em profundidade, análise temática (Bardin), grounded theory. Categorias robustas.' },
      { label: 'Estudo de caso (Yin)', desc: 'Investigação aprofundada de organização, mercado ou tecnologia com triangulação de fontes.' },
      { label: 'Relatório executivo + técnico', desc: 'Sumário de 2 páginas para C-level + relatório técnico de 30-60 páginas para áreas técnicas.' },
    ],
    cases: [
      {
        contexto: 'Indústria farmacêutica, blockchain + IA generativa',
        desafio: 'Avaliar viabilidade de blockchain para rastreabilidade ALCOA+ em salas limpas NB3/NB4.',
        resultado: 'Pesquisa em andamento como Pós-Doc UNICAMP/FCA; protótipo em Solidity sobre Rhizom; potencial publicação em periódicos qualis A.',
      },
      {
        contexto: 'Telecom, segurança operacional COVID',
        desafio: 'Redesenhar processos com indicadores de continuidade operacional em meio à pandemia.',
        resultado: 'Redução de ~25% no risco de incidentes; acuracidade de previsibilidade de entrega +30%.',
      },
      {
        contexto: 'Loterias, market scan regulatório',
        desafio: 'Compreender concorrência e contexto regulatório de operação multi-municipal R$ 1,2 bi.',
        resultado: 'Análise de risco quantitativa Crystal Ball + market scan apresentados ao conselho; antecipação de 3 frentes regulatórias críticas.',
      },
    ],
    faq: [
      { q: 'Quanto tempo dura uma revisão sistemática?', a: 'Tipicamente 8-16 semanas de bancada (busca + screening + extração + síntese). Confiabilidade vem do rigor, não da pressa.' },
      { q: 'Vocês fazem pesquisa de mercado tradicional?', a: 'Sim, com método acadêmico — surveys com amostragem rigorosa, não só painéis de conveniência. Diferença de qualidade é grande.' },
      { q: 'Posso publicar o resultado?', a: 'Combinamos no início. Trabalhos com foco em publicação têm desenho diferente de relatórios estratégicos confidenciais.' },
      { q: 'Qual o entregável final?', a: 'Sempre dois formatos: sumário executivo (2-4 páginas, decisional) + relatório técnico (30-60 páginas, completo).' },
    ],
  },
];

export function findServiceDetail(slug: string): ServiceDetail | undefined {
  return servicesDetail.find((s) => s.slug === slug);
}
