// Glossário do Hub Acadêmico — termos frequentes em metodologia, estatística,
// ética e regulação. Curado em ordem alfabética para fácil leitura/busca.

export interface GlossaryTerm {
  term: string;
  definition: string;
  area?: 'metodologia' | 'estatistica' | 'etica' | 'regulacao' | 'qualitativa' | 'quantitativa';
}

export const glossary: GlossaryTerm[] = [
  { term: 'ALCOA+', area: 'regulacao', definition: 'Princípios de integridade de dados em ambientes regulados (Atribuível, Legível, Contemporâneo, Original, Acurado, Completo, Consistente, Permanente, Disponível). Base de inspeções ANVISA, FDA e EMA.' },
  { term: 'Amostragem proposital', area: 'qualitativa', definition: 'Seleção intencional de participantes/casos pelo critério de relevância para a pergunta — não busca representatividade estatística.' },
  { term: 'Análise de conteúdo', area: 'qualitativa', definition: 'Técnica sistemática para descrever e interpretar conteúdo de comunicações por meio de categorização (Bardin).' },
  { term: 'CAPA', area: 'regulacao', definition: 'Corrective and Preventive Action — sistema de gestão de não-conformidades em qualidade/regulação. Ação corretiva trata o problema; preventiva, sua causa-raiz.' },
  { term: 'CEP / CONEP', area: 'etica', definition: 'Comitê de Ética em Pesquisa (local) e Comissão Nacional de Ética em Pesquisa (nacional). Avaliam projetos com seres humanos no Brasil. Submissão obrigatória via Plataforma Brasil.' },
  { term: 'Construto', area: 'metodologia', definition: 'Variável teórica não diretamente observável (ex.: satisfação, liderança), operacionalizada por indicadores mensuráveis.' },
  { term: 'Design Science Research (DSR)', area: 'metodologia', definition: 'Paradigma de pesquisa que produz artefatos (modelos, métodos, sistemas) para resolver classes de problemas práticos. Forte em Engenharia, SI e Administração.' },
  { term: 'Epoché', area: 'qualitativa', definition: 'Suspensão deliberada de pressupostos do pesquisador para descrever a essência da experiência vivida, central na fenomenologia (Husserl).' },
  { term: 'Grounded Theory', area: 'qualitativa', definition: 'Construção de teoria a partir dos dados via codificação aberta, axial e seletiva, com comparação constante e amostragem teórica (Glaser & Strauss; Charmaz).' },
  { term: 'Hipótese nula (H0)', area: 'estatistica', definition: 'Afirmação de ausência de efeito ou diferença. É testada para rejeição (não confirmação). Se rejeitada com p < α, há evidência da hipótese alternativa.' },
  { term: 'Integridade em pesquisa', area: 'etica', definition: 'Conduta responsável que abrange honestidade, atribuição de autoria, transparência metodológica e ausência de fabricação/falsificação/plágio (FFP).' },
  { term: 'IRB', area: 'etica', definition: 'Institutional Review Board — equivalente do CEP no contexto internacional (EUA). Aprovação ética é pré-requisito para publicação em periódicos sérios.' },
  { term: 'LGPD', area: 'regulacao', definition: 'Lei Geral de Proteção de Dados (Lei 13.709/2018). Regula tratamento de dados pessoais no Brasil — aplicável a qualquer pesquisa que colete dados identificáveis.' },
  { term: 'Meta-análise', area: 'metodologia', definition: 'Técnica estatística que combina resultados de múltiplos estudos quantitativos sobre a mesma pergunta para gerar uma estimativa mais robusta. Base de revisões sistemáticas Cochrane.' },
  { term: 'P-valor', area: 'estatistica', definition: 'Probabilidade de obter resultado igual ou mais extremo que o observado, sob H0. Convencionalmente: p < 0.05 sugere significância estatística — não é prova de relevância prática.' },
  { term: 'Plataforma Brasil', area: 'etica', definition: 'Sistema oficial do Ministério da Saúde para submissão e tramitação de projetos de pesquisa com seres humanos junto ao CEP/CONEP.' },
  { term: 'PRISMA', area: 'metodologia', definition: 'Preferred Reporting Items for Systematic Reviews — diretrizes para conduzir e reportar revisões sistemáticas com transparência (fluxograma + checklist de 27 itens).' },
  { term: 'PROSPERO', area: 'metodologia', definition: 'Registro internacional prospectivo de revisões sistemáticas. Pré-registro recomendado antes de iniciar a busca para reduzir viés.' },
  { term: 'Quasi-experimento', area: 'quantitativa', definition: 'Estudo causal sem aleatorização plena ou grupo de controle equivalente. Usa controles estatísticos (DiD, propensity score, regressão descontínua).' },
  { term: 'Saturação teórica', area: 'qualitativa', definition: 'Ponto da coleta qualitativa em que novas observações não acrescentam categorias ou propriedades — critério de parada na grounded theory.' },
  { term: 'Survey', area: 'quantitativa', definition: 'Levantamento padronizado em amostra representativa via questionário/entrevista estruturada. Permite estimar prevalências e testar associações em larga escala.' },
  { term: 'TCLE', area: 'etica', definition: 'Termo de Consentimento Livre e Esclarecido. Documento que formaliza a participação consentida e informada do sujeito de pesquisa, exigido pelo CEP.' },
  { term: 'Triangulação', area: 'metodologia', definition: 'Uso de múltiplas fontes/métodos/teorias para validar achados. Tipos: de dados, de investigador, teórica, metodológica (Denzin).' },
  { term: 'Validade externa', area: 'metodologia', definition: 'Grau em que os achados se generalizam para outros contextos, populações ou tempos. Forte em surveys probabilísticos; frágil em estudos de caso.' },
  { term: 'Validade interna', area: 'metodologia', definition: 'Grau em que o estudo permite inferência causal sem viés. Forte em RCTs com aleatorização; fraca em desenhos observacionais.' },
];

export const areaLabels: Record<NonNullable<GlossaryTerm['area']>, string> = {
  metodologia: 'Metodologia',
  estatistica: 'Estatística',
  etica: 'Ética',
  regulacao: 'Regulação',
  qualitativa: 'Qualitativa',
  quantitativa: 'Quantitativa',
};
