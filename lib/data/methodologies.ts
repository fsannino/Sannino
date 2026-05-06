// Dados editoriais para a página /academico/base-conhecimento
// Referências: Gil (2008), Marconi & Lakatos (2017), Sampieri et al. (2013),
// Creswell (2014), Yin (2018), van Aken (2007).

export type Approach = 'quanti' | 'quali' | 'mista' | 'flexivel';

export interface MethodologyApproach {
  id: string;
  title: string;
  short: string;
  description: string;
  characteristics: string[];
  whenUse: string;
  authors: string;
}

export interface MethodologyMethod {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whenUse: string;
  approach: Approach;
  approachLabel: string;
  authors: string;
  deepLink?: string;
  deepLinkLabel?: string;
}

export const approaches: MethodologyApproach[] = [
  {
    id: 'quantitativa',
    title: 'Pesquisa Quantitativa',
    short: 'Mensuração e generalização',
    description:
      'Foca em medir variáveis, testar hipóteses e estabelecer relações causais por meio de instrumentos padronizados e análise estatística. Privilegia a generalização dos resultados a partir de amostras representativas.',
    characteristics: [
      'Hipóteses dedutivas testáveis',
      'Amostragem probabilística',
      'Análise estatística (descritiva e inferencial)',
      'Validade externa e generalização',
    ],
    whenUse:
      'Quando o problema exige mensuração precisa, comparações entre grupos ou previsão. Ex.: efeito de uma intervenção sobre desempenho, prevalência de um fenômeno.',
    authors: 'Sampieri · Creswell · Hair',
  },
  {
    id: 'qualitativa',
    title: 'Pesquisa Qualitativa',
    short: 'Compreensão e profundidade',
    description:
      'Foca na compreensão de significados, processos e contextos. Trabalha com dados textuais, narrativos ou visuais e busca interpretar fenômenos a partir da perspectiva dos participantes.',
    characteristics: [
      'Lógica indutiva (do dado à teoria)',
      'Amostragem proposital',
      'Análise de conteúdo / temática / narrativa',
      'Validade interna e profundidade',
    ],
    whenUse:
      'Quando o problema é exploratório, quando importa "como" ou "por quê", ou quando o fenômeno é complexo e contextual. Ex.: cultura organizacional, experiência de pacientes, decisão de carreira.',
    authors: 'Bardin · Flick · Denzin & Lincoln',
  },
  {
    id: 'mista',
    title: 'Métodos Mistos',
    short: 'Triangulação quanti + quali',
    description:
      'Integra deliberadamente abordagens quantitativa e qualitativa em um único estudo, tirando proveito da generalização da primeira e da profundidade da segunda. A integração pode ser sequencial, concorrente ou aninhada.',
    characteristics: [
      'Justificativa metodológica explícita',
      'Design sequencial ou concorrente',
      'Triangulação de fontes e métodos',
      'Maior complexidade — exige equipe ou tempo',
    ],
    whenUse:
      'Quando uma única abordagem é insuficiente. Ex.: validar um instrumento (quali → quanti), explicar um achado estatístico (quanti → quali), ou estudar adoção tecnológica.',
    authors: 'Creswell & Plano Clark · Tashakkori',
  },
];

export const methods: MethodologyMethod[] = [
  {
    id: 'experimental',
    title: 'Experimental',
    subtitle: 'RCTs · controle e manipulação',
    description:
      'Investigador manipula uma ou mais variáveis independentes e mede o efeito em variáveis dependentes, com aleatorização (RCT) e grupo de controle. Permite inferência causal forte.',
    whenUse:
      'Avaliar efeito de uma intervenção isolada (ex.: novo treinamento, novo medicamento, novo design de produto) com alto rigor causal.',
    approach: 'quanti',
    approachLabel: 'Quantitativa',
    authors: 'Campbell & Stanley · Shadish',
  },
  {
    id: 'quase-experimental',
    title: 'Quase-Experimental',
    subtitle: 'Sem aleatorização plena',
    description:
      'Como o experimental, mas sem aleatorização (ou sem grupo controle equivalente). Usado quando o ambiente real impede randomização pura. Inferência causal mais frágil — exige controles estatísticos.',
    whenUse:
      'Avaliação de políticas públicas, programas corporativos rolados em uma unidade antes de outra (DiD, regressão descontínua, propensity score).',
    approach: 'quanti',
    approachLabel: 'Quantitativa',
    authors: 'Shadish · Cook · Angrist & Pischke',
  },
  {
    id: 'survey',
    title: 'Levantamento (Survey)',
    subtitle: 'Questionário em larga escala',
    description:
      'Coleta dados padronizados de uma amostra representativa por questionário ou entrevista estruturada. Permite estimar prevalências, comparar grupos e testar associações.',
    whenUse:
      'Caracterizar um universo, medir atitudes/percepções/comportamentos em larga escala, validar modelos teóricos com SEM ou regressão.',
    approach: 'quanti',
    approachLabel: 'Quantitativa',
    authors: 'Babbie · Hair · Fowler',
  },
  {
    id: 'estudo-de-caso',
    title: 'Estudo de Caso',
    subtitle: 'Profundidade em um ou poucos casos',
    description:
      'Investiga um fenômeno contemporâneo em profundidade dentro de seu contexto real, especialmente quando os limites entre fenômeno e contexto não são claros. Pode ser único ou múltiplo, holístico ou incorporado.',
    whenUse:
      'Quando "como" e "por quê" são as perguntas centrais, o investigador tem pouco controle sobre os eventos, e o foco é um caso contemporâneo. Ex.: integração pós-fusão, transformação digital de uma empresa.',
    approach: 'flexivel',
    approachLabel: 'Quali · Mista',
    authors: 'Yin · Stake · Eisenhardt',
  },
  {
    id: 'etnografia',
    title: 'Etnografia',
    subtitle: 'Imersão e observação',
    description:
      'Estudo de uma cultura ou grupo por imersão prolongada, observação participante e análise de práticas, símbolos e rituais. Originária da antropologia, hoje usada em organizações, consumo e tecnologia.',
    whenUse:
      'Compreender cultura, práticas tácitas e dinâmicas que os participantes não verbalizam diretamente. Ex.: cultura de segurança em fábrica, ritos em comunidades online.',
    approach: 'quali',
    approachLabel: 'Qualitativa',
    authors: 'Geertz · Spradley · Van Maanen',
  },
  {
    id: 'fenomenologia',
    title: 'Fenomenologia',
    subtitle: 'Essência da experiência vivida',
    description:
      'Busca descrever a essência de uma experiência humana a partir de quem a viveu, suspendendo julgamentos prévios (epoché). Análise centrada em narrativas detalhadas de poucos participantes.',
    whenUse:
      'Quando importa entender o significado subjetivo de uma experiência. Ex.: vivência de luto, experiência de empreender, sensação de pertencimento.',
    approach: 'quali',
    approachLabel: 'Qualitativa',
    authors: 'Husserl · Moustakas · van Manen',
  },
  {
    id: 'grounded-theory',
    title: 'Teoria Fundamentada',
    subtitle: 'Grounded Theory · teoria a partir do dado',
    description:
      'Constrói teoria de forma indutiva a partir dos dados, com codificação aberta, axial e seletiva, comparação constante e amostragem teórica. Não parte de hipóteses prévias.',
    whenUse:
      'Quando o tema é pouco teorizado e o objetivo é gerar uma explicação substantiva nova. Ex.: novo padrão de comportamento de consumo, processo decisório em contexto inédito.',
    approach: 'quali',
    approachLabel: 'Qualitativa',
    authors: 'Glaser & Strauss · Charmaz',
  },
  {
    id: 'pesquisa-acao',
    title: 'Pesquisa-Ação',
    subtitle: 'Intervir e investigar simultaneamente',
    description:
      'Pesquisador e participantes diagnosticam um problema, planejam uma intervenção, agem, observam e refletem em ciclos iterativos. Produz tanto conhecimento quanto mudança no contexto.',
    whenUse:
      'Quando o objetivo é resolver um problema prático em uma organização ou comunidade gerando aprendizado. Ex.: redesenho de processo, implementação participativa de mudança.',
    approach: 'flexivel',
    approachLabel: 'Quali · Mista',
    authors: 'Lewin · Thiollent · Coghlan',
  },
  {
    id: 'revisao-sistematica',
    title: 'Revisão Sistemática',
    subtitle: 'PRISMA · síntese de evidências',
    description:
      'Sintetiza, com método explícito e reproduzível, todos os estudos disponíveis sobre uma pergunta delimitada. Inclui meta-análise (quanti) e revisão integrativa/scoping (quali) como variantes.',
    whenUse:
      'Estado da arte rigoroso, base para diretrizes baseadas em evidência, fundamentação teórica de tese ou grant. Pré-registro recomendado (PROSPERO).',
    approach: 'flexivel',
    approachLabel: 'Quanti · Quali',
    authors: 'PRISMA · Cochrane · Tranfield',
    deepLink: '/academico/prisma',
    deepLinkLabel: 'Guia PRISMA 2020 →',
  },
  {
    id: 'design-science',
    title: 'Design Science Research (DSR)',
    subtitle: 'Pesquisa orientada a artefatos',
    description:
      'Cria e avalia artefatos (modelos, métodos, sistemas) que resolvem classes de problemas práticos, gerando conhecimento prescritivo. Forte em Sistemas de Informação, Engenharia e Administração.',
    whenUse:
      'Quando o objetivo é projetar uma solução genérica para um problema relevante e demonstrar que ela funciona. Ex.: framework de governança, algoritmo de recomendação, método de avaliação.',
    approach: 'flexivel',
    approachLabel: 'Mista',
    authors: 'Hevner · van Aken · Dresch',
  },
];
