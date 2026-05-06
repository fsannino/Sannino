// Metodômetro — banco de perguntas e regras de pontuação.
// Cada resposta acresce pontos a candidatos (IDs alinhados a methodologies.ts).

export type MethodId =
  | 'experimental'
  | 'quase-experimental'
  | 'survey'
  | 'estudo-de-caso'
  | 'etnografia'
  | 'fenomenologia'
  | 'grounded-theory'
  | 'pesquisa-acao'
  | 'revisao-sistematica'
  | 'design-science';

export interface Option {
  id: string;
  label: string;
  description?: string;
  scores: Partial<Record<MethodId, number>>;
}

export interface Question {
  id: number;
  prompt: string;
  hint?: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    prompt: 'Que tipo de pergunta sua pesquisa busca responder?',
    hint: 'A natureza da pergunta orienta tudo que vem depois.',
    options: [
      {
        id: 'quanto',
        label: 'Quanto, quantos, qual a magnitude?',
        description: 'Medir, comparar grupos, prever, testar hipóteses.',
        scores: { experimental: 2, 'quase-experimental': 2, survey: 3, 'revisao-sistematica': 1 },
      },
      {
        id: 'como',
        label: 'Como ou por quê algo acontece?',
        description: 'Compreender processo, significado, contexto.',
        scores: { 'estudo-de-caso': 2, etnografia: 2, fenomenologia: 2, 'grounded-theory': 2, 'pesquisa-acao': 1 },
      },
      {
        id: 'ambos',
        label: 'Ambos — preciso medir e compreender.',
        description: 'Métodos mistos, design science, pesquisa-ação.',
        scores: { 'design-science': 2, 'pesquisa-acao': 2, 'estudo-de-caso': 1, 'revisao-sistematica': 1 },
      },
    ],
  },
  {
    id: 2,
    prompt: 'Qual o estágio teórico do tema na literatura?',
    options: [
      {
        id: 'pouco',
        label: 'Pouco teorizado, fenômeno emergente ou inédito',
        description: 'Pouca literatura, conceitos ainda não consolidados.',
        scores: { 'grounded-theory': 3, etnografia: 2, fenomenologia: 2, 'estudo-de-caso': 1 },
      },
      {
        id: 'maduro',
        label: 'Bem teorizado, com hipóteses claras a testar',
        description: 'Literatura abundante, modelos validados.',
        scores: { experimental: 2, 'quase-experimental': 2, survey: 2 },
      },
      {
        id: 'misto',
        label: 'Misto — alguns construtos consolidados, outros não',
        description: 'Pode integrar exploração e confirmação.',
        scores: { 'estudo-de-caso': 2, 'design-science': 1, 'revisao-sistematica': 1 },
      },
    ],
  },
  {
    id: 3,
    prompt: 'Você precisa generalizar ou aprofundar?',
    options: [
      {
        id: 'generalizar',
        label: 'Generalizar para uma população',
        description: 'Amostra representativa, validade externa.',
        scores: { survey: 3, experimental: 2, 'quase-experimental': 2, 'revisao-sistematica': 2 },
      },
      {
        id: 'aprofundar',
        label: 'Aprofundar um caso ou pequeno conjunto',
        description: 'Densidade descritiva, validade interna.',
        scores: { 'estudo-de-caso': 3, etnografia: 3, fenomenologia: 3, 'grounded-theory': 2 },
      },
      {
        id: 'misto',
        label: 'Os dois — visão ampla + casos exemplares',
        scores: { 'design-science': 2, 'pesquisa-acao': 2, 'estudo-de-caso': 1 },
      },
    ],
  },
  {
    id: 4,
    prompt: 'Você consegue manipular as variáveis (controle experimental)?',
    options: [
      {
        id: 'total',
        label: 'Sim, controle total (laboratório, RCT)',
        scores: { experimental: 3 },
      },
      {
        id: 'parcial',
        label: 'Parcial — ambiente real, sem aleatorização plena',
        description: 'Roll-out por unidade, antes/depois, propensity score.',
        scores: { 'quase-experimental': 3, 'design-science': 1, 'pesquisa-acao': 1 },
      },
      {
        id: 'nenhum',
        label: 'Nenhum — só observar/coletar',
        scores: { survey: 2, 'estudo-de-caso': 2, etnografia: 2, fenomenologia: 2, 'grounded-theory': 1 },
      },
    ],
  },
  {
    id: 5,
    prompt: 'Em qual área sua pesquisa se insere?',
    hint: 'Cada área tem padrões metodológicos preferidos pela banca.',
    options: [
      {
        id: 'saude',
        label: 'Saúde, Farma, Biológicas',
        scores: { experimental: 1, 'revisao-sistematica': 2, 'quase-experimental': 1 },
      },
      {
        id: 'adm',
        label: 'Administração, Negócios, Economia',
        scores: { 'estudo-de-caso': 2, 'design-science': 1, survey: 1 },
      },
      {
        id: 'sociais',
        label: 'Educação, Ciências Sociais, Psicologia',
        scores: { etnografia: 1, fenomenologia: 1, 'grounded-theory': 1, 'pesquisa-acao': 1 },
      },
      {
        id: 'engsi',
        label: 'Engenharia, Sistemas de Informação, Computação',
        scores: { 'design-science': 2, experimental: 1 },
      },
      {
        id: 'direito',
        label: 'Direito ou Regulatório',
        scores: { 'estudo-de-caso': 1, 'revisao-sistematica': 1 },
      },
      {
        id: 'outra',
        label: 'Outra / interdisciplinar',
        scores: {},
      },
    ],
  },
  {
    id: 6,
    prompt: 'Quanto tempo você tem para concluir a pesquisa?',
    options: [
      {
        id: 'curto',
        label: 'Curto (3 a 6 meses) — TCC, monografia, paper',
        scores: { survey: 2, 'revisao-sistematica': 1 },
      },
      {
        id: 'medio',
        label: 'Médio (1 ano) — dissertação enxuta, projeto aplicado',
        scores: { 'estudo-de-caso': 1, 'design-science': 1, fenomenologia: 1 },
      },
      {
        id: 'longo',
        label: 'Longo (2+ anos) — doutorado, pesquisa multi-fase',
        scores: { 'revisao-sistematica': 2, 'grounded-theory': 1, etnografia: 1, experimental: 1 },
      },
    ],
  },
  {
    id: 7,
    prompt: 'Você produzirá dados primários ou trabalhará só com literatura?',
    options: [
      {
        id: 'literatura',
        label: 'Só literatura (síntese de evidência)',
        scores: { 'revisao-sistematica': 5 },
      },
      {
        id: 'primarios',
        label: 'Dados primários (entrevistas, experimentos, surveys)',
        scores: { experimental: 1, 'quase-experimental': 1, survey: 1, 'estudo-de-caso': 1, etnografia: 1, fenomenologia: 1, 'grounded-theory': 1, 'pesquisa-acao': 1 },
      },
      {
        id: 'ambos',
        label: 'Ambos — revisão + empiria',
        scores: { 'design-science': 2, 'estudo-de-caso': 1, 'pesquisa-acao': 1 },
      },
    ],
  },
];

export function computeRanking(answers: Record<number, string>): Array<{ id: MethodId; score: number }> {
  const totals: Record<string, number> = {};
  for (const q of questions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    const opt = q.options.find((o) => o.id === optionId);
    if (!opt) continue;
    for (const [m, pts] of Object.entries(opt.scores)) {
      totals[m] = (totals[m] ?? 0) + (pts ?? 0);
    }
  }
  return Object.entries(totals)
    .map(([id, score]) => ({ id: id as MethodId, score }))
    .sort((a, b) => b.score - a.score);
}
