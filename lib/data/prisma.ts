// Conteúdo PRISMA 2020 — extraído da declaração oficial Page et al. (BMJ 2021)
// e da prisma-statement.org. Material aberto, traduzido e adaptado.

export interface PrismaItem {
  num: string;
  titulo: string;
  desc: string;
}

export interface PrismaSection {
  id: string;
  label: string;
  items: PrismaItem[];
}

export interface PrismaExtension {
  sigla: string;
  nome: string;
  desc: string;
  uso: string;
}

export interface PrismaTool {
  nome: string;
  tipo: string;
  desc: string;
  link?: string;
}

// 27 itens do PRISMA 2020, agrupados por seção.
export const checklist: PrismaSection[] = [
  {
    id: 'titulo',
    label: 'Título',
    items: [
      { num: '1', titulo: 'Título', desc: 'Identificar o relatório como uma revisão sistemática.' },
    ],
  },
  {
    id: 'resumo',
    label: 'Resumo',
    items: [
      { num: '2', titulo: 'Resumo estruturado', desc: 'Ver lista de verificação para resumos do PRISMA 2020 (PRISMA-A).' },
    ],
  },
  {
    id: 'introducao',
    label: 'Introdução',
    items: [
      { num: '3', titulo: 'Justificativa', desc: 'Descrever a justificativa da revisão no contexto do conhecimento existente.' },
      { num: '4', titulo: 'Objetivos', desc: 'Indicar uma declaração explícita dos objetivos ou da(s) pergunta(s) que a revisão aborda.' },
    ],
  },
  {
    id: 'metodos',
    label: 'Métodos',
    items: [
      { num: '5', titulo: 'Critérios de elegibilidade', desc: 'Especificar critérios de inclusão e exclusão e como os estudos foram agrupados para sínteses.' },
      { num: '6', titulo: 'Fontes de informação', desc: 'Especificar todas as bases de dados, registros de ensaios, websites, organizações, listas de referências e outras fontes pesquisadas, com a data da última busca.' },
      { num: '7', titulo: 'Estratégia de busca', desc: 'Apresentar a(s) estratégia(s) de busca completa(s) para todas as bases de dados, registros e websites, incluindo todos os filtros e limites usados.' },
      { num: '8', titulo: 'Processo de seleção', desc: 'Especificar métodos usados para decidir se um estudo atende aos critérios de inclusão (n. de revisores, independência, ferramentas de automação).' },
      { num: '9', titulo: 'Processo de coleta de dados', desc: 'Especificar métodos para coleta de dados dos relatórios (n. de revisores, processo de obtenção/confirmação, ferramentas de automação).' },
      { num: '10a', titulo: 'Itens de dados — desfechos', desc: 'Listar e definir todos os desfechos para os quais dados foram buscados.' },
      { num: '10b', titulo: 'Itens de dados — outros', desc: 'Listar e definir outras variáveis para as quais dados foram buscados (participantes, intervenções, financiamento, viés).' },
      { num: '11', titulo: 'Avaliação de risco de viés', desc: 'Especificar métodos para avaliar risco de viés nos estudos incluídos (ferramentas, n. de revisores, automação).' },
      { num: '12', titulo: 'Medidas de efeito', desc: 'Especificar a(s) medida(s) de efeito (razão de risco, diferença de médias) usadas na síntese ou apresentação dos resultados.' },
      { num: '13a', titulo: 'Síntese — elegibilidade', desc: 'Descrever os processos para decidir quais estudos eram elegíveis para cada síntese.' },
      { num: '13b', titulo: 'Síntese — preparação', desc: 'Descrever métodos para preparar os dados para apresentação ou síntese (tratamento de dados ausentes, conversões).' },
      { num: '13c', titulo: 'Síntese — visualização', desc: 'Descrever métodos para tabular ou exibir visualmente os resultados de estudos individuais e sínteses.' },
      { num: '13d', titulo: 'Síntese — quantitativa', desc: 'Descrever métodos para sintetizar resultados (meta-análise + modelo + heterogeneidade) e o pacote estatístico usado.' },
      { num: '13e', titulo: 'Síntese — heterogeneidade', desc: 'Descrever métodos para explorar causas de heterogeneidade (subgrupos, meta-regressão).' },
      { num: '13f', titulo: 'Síntese — sensibilidade', desc: 'Descrever análises de sensibilidade conduzidas para avaliar robustez dos resultados sintetizados.' },
      { num: '14', titulo: 'Avaliação de viés de relato', desc: 'Descrever métodos para avaliar risco de viés devido a resultados ausentes em uma síntese (de viés de relato).' },
      { num: '15', titulo: 'Avaliação de certeza', desc: 'Descrever métodos para avaliar a certeza (confiança) no corpo de evidência (ex.: GRADE).' },
    ],
  },
  {
    id: 'resultados',
    label: 'Resultados',
    items: [
      { num: '16a', titulo: 'Seleção dos estudos — fluxo', desc: 'Descrever os resultados da busca e processo de seleção (n. registros identificados, triados, incluídos), idealmente com fluxograma.' },
      { num: '16b', titulo: 'Seleção dos estudos — exclusões', desc: 'Citar estudos que pareciam atender aos critérios de inclusão mas foram excluídos, e explicar por quê.' },
      { num: '17', titulo: 'Características dos estudos', desc: 'Citar cada estudo incluído e apresentar suas características.' },
      { num: '18', titulo: 'Risco de viés nos estudos', desc: 'Apresentar avaliações de risco de viés para cada estudo incluído.' },
      { num: '19', titulo: 'Resultados dos estudos individuais', desc: 'Para cada estudo, apresentar (a) estatísticas resumo de cada grupo e (b) estimativa do efeito com intervalo de confiança.' },
      { num: '20a', titulo: 'Resultados das sínteses — características', desc: 'Para cada síntese, resumir brevemente as características e risco de viés dos estudos contribuintes.' },
      { num: '20b', titulo: 'Resultados das sínteses — quantitativa', desc: 'Apresentar resultados de síntese estatística (estimativa pontual, IC, heterogeneidade).' },
      { num: '20c', titulo: 'Resultados das sínteses — heterogeneidade', desc: 'Apresentar investigações de causas de heterogeneidade.' },
      { num: '20d', titulo: 'Resultados das sínteses — sensibilidade', desc: 'Apresentar resultados de análises de sensibilidade.' },
      { num: '21', titulo: 'Vieses de relato', desc: 'Apresentar avaliações de risco de viés devido a resultados ausentes para cada síntese.' },
      { num: '22', titulo: 'Certeza da evidência', desc: 'Apresentar avaliações da certeza no corpo de evidência para cada desfecho avaliado.' },
    ],
  },
  {
    id: 'discussao',
    label: 'Discussão',
    items: [
      { num: '23a', titulo: 'Discussão — interpretação geral', desc: 'Fornecer interpretação geral dos resultados no contexto de outras evidências.' },
      { num: '23b', titulo: 'Discussão — limitações da evidência', desc: 'Discutir limitações da evidência incluída na revisão.' },
      { num: '23c', titulo: 'Discussão — limitações dos processos', desc: 'Discutir limitações dos processos de revisão usados.' },
      { num: '23d', titulo: 'Discussão — implicações', desc: 'Discutir implicações dos resultados para prática, política e pesquisas futuras.' },
    ],
  },
  {
    id: 'outras',
    label: 'Outras informações',
    items: [
      { num: '24a', titulo: 'Registro e protocolo — registro', desc: 'Fornecer informações de registro da revisão (PROSPERO, OSF), incluindo nome do registro e número.' },
      { num: '24b', titulo: 'Registro e protocolo — protocolo', desc: 'Indicar onde o protocolo da revisão pode ser acessado, ou afirmar que protocolo não foi preparado.' },
      { num: '24c', titulo: 'Registro e protocolo — emendas', desc: 'Descrever e explicar quaisquer emendas a informações fornecidas no registro ou protocolo.' },
      { num: '25', titulo: 'Suporte', desc: 'Descrever fontes de apoio financeiro ou não-financeiro à revisão e o papel dos financiadores.' },
      { num: '26', titulo: 'Conflitos de interesse', desc: 'Declarar quaisquer conflitos de interesse dos autores da revisão.' },
      { num: '27', titulo: 'Disponibilidade de dados, código e outros materiais', desc: 'Relatar quais dos seguintes estão publicamente disponíveis e onde podem ser encontrados: modelo de coleta de dados; dados extraídos; dados usados em sínteses; código analítico; outros materiais.' },
    ],
  },
];

// Estágios do fluxograma PRISMA 2020 (versão para novas revisões)
export interface FlowStage {
  id: string;
  label: string;
  description: string;
  boxes: Array<{ label: string; type: 'in' | 'out' | 'process' }>;
}

export const flowStages: FlowStage[] = [
  {
    id: 'identificacao',
    label: 'Identificação',
    description: 'Registros identificados nas buscas em bases e outras fontes.',
    boxes: [
      { label: 'Registros identificados em bases de dados', type: 'in' },
      { label: 'Registros identificados em registros (ex.: PROSPERO)', type: 'in' },
      { label: 'Registros removidos antes da triagem (duplicatas, ineligíveis por automação)', type: 'out' },
    ],
  },
  {
    id: 'triagem',
    label: 'Triagem',
    description: 'Registros e relatórios avaliados por critério de inclusão.',
    boxes: [
      { label: 'Registros triados (título e resumo)', type: 'process' },
      { label: 'Registros excluídos por triagem', type: 'out' },
      { label: 'Relatórios buscados para recuperação', type: 'process' },
      { label: 'Relatórios não recuperados', type: 'out' },
      { label: 'Relatórios avaliados para elegibilidade (texto completo)', type: 'process' },
      { label: 'Relatórios excluídos com motivos', type: 'out' },
    ],
  },
  {
    id: 'incluidos',
    label: 'Incluídos',
    description: 'Estudos e relatórios efetivamente incluídos na revisão.',
    boxes: [
      { label: 'Estudos incluídos na revisão', type: 'in' },
      { label: 'Relatórios dos estudos incluídos', type: 'in' },
    ],
  },
];

export const extensions: PrismaExtension[] = [
  { sigla: 'PRISMA-P', nome: 'Protocols', desc: 'Itens preferidos para protocolos de revisões sistemáticas.', uso: 'Usar ao registrar protocolo no PROSPERO.' },
  { sigla: 'PRISMA-S', nome: 'Searching', desc: 'Extensão para reportar buscas em revisões sistemáticas.', uso: 'Detalhar estratégias de busca de forma reproduzível.' },
  { sigla: 'PRISMA-ScR', nome: 'Scoping Reviews', desc: 'Extensão para revisões de escopo.', uso: 'Quando o objetivo é mapear literatura, não sintetizar evidência.' },
  { sigla: 'PRISMA-DTA', nome: 'Diagnostic Test Accuracy', desc: 'Extensão para revisões de acurácia diagnóstica.', uso: 'Estudos de testes diagnósticos em saúde.' },
  { sigla: 'PRISMA-IPD', nome: 'Individual Participant Data', desc: 'Extensão para meta-análise com dados individuais de participantes.', uso: 'Quando há acesso a dados primários individuais.' },
  { sigla: 'PRISMA-Equity', nome: 'Equity', desc: 'Extensão focada em desigualdades em saúde.', uso: 'Reviews de saúde pública e desigualdades.' },
  { sigla: 'PRISMA-Harms', nome: 'Harms', desc: 'Extensão para reportar danos/eventos adversos.', uso: 'Reviews onde segurança é desfecho relevante.' },
  { sigla: 'PRISMA-NMA', nome: 'Network Meta-Analysis', desc: 'Extensão para meta-análise em rede.', uso: 'Comparações múltiplas indiretas.' },
];

export const tools: PrismaTool[] = [
  { nome: 'PROSPERO', tipo: 'Pré-registro', desc: 'Registro internacional prospectivo de revisões sistemáticas. Pré-registro recomendado antes da busca.' },
  { nome: 'OSF (Open Science Framework)', tipo: 'Pré-registro alternativo', desc: 'Pré-registro flexível para protocolos de revisão.' },
  { nome: 'Rayyan', tipo: 'Triagem', desc: 'Plataforma colaborativa para triagem de título/resumo. Gratuita.' },
  { nome: 'Covidence', tipo: 'Gestão completa', desc: 'Triagem, extração de dados e avaliação de viés. Versão paga, com período gratuito.' },
  { nome: 'CADIMA', tipo: 'Gestão completa', desc: 'Plataforma open-source para revisões sistemáticas.' },
  { nome: 'EndNote / Zotero / Mendeley', tipo: 'Gestão de referências', desc: 'Para deduplicar e organizar referências antes da triagem.' },
  { nome: 'ROBIS', tipo: 'Avaliação de viés da revisão', desc: 'Ferramenta para avaliar risco de viés em revisões sistemáticas.' },
  { nome: 'Cochrane RoB 2 / ROBINS-I', tipo: 'Avaliação de viés dos estudos', desc: 'Ferramentas Cochrane para risco de viés em RCTs e estudos não-randomizados.' },
  { nome: 'GRADE', tipo: 'Certeza da evidência', desc: 'Sistema para avaliar certeza no corpo de evidência (alta/moderada/baixa/muito baixa).' },
  { nome: 'RevMan', tipo: 'Meta-análise', desc: 'Software gratuito da Cochrane para meta-análise. Alternativas: R metafor, Stata, JASP.' },
];

export const armadilhas = [
  { titulo: 'Não pré-registrar o protocolo', desc: 'Sem PROSPERO/OSF, viés de relato cresce e periódicos sérios podem rejeitar a submissão.' },
  { titulo: 'Estratégia de busca enxuta demais', desc: 'Use descritores controlados (MeSH, DeCS), termos livres, operadores booleanos e filtros validados. Documente a sintaxe completa de cada base.' },
  { titulo: 'Triagem por um único revisor', desc: 'Padrão-ouro é dupla triagem cega + resolução de discordâncias por terceiro. PRISMA pede transparência sobre o número de revisores.' },
  { titulo: 'Ignorar literatura cinzenta', desc: 'Teses, conferências, registros de ensaios e relatórios não-publicados podem mudar a estimativa de efeito.' },
  { titulo: 'Forçar meta-análise sob heterogeneidade alta', desc: 'I² > 75% sugere problema. Avalie subgrupos, narrative synthesis ou not pooling.' },
  { titulo: 'Não declarar limitações claramente', desc: 'Limitações dos estudos incluídos + limitações da própria revisão (item 23b/c).' },
];
