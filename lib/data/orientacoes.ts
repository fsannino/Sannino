// Orientações acadêmicas e participações em banca — extraídas do
// Currículo Lattes (http://lattes.cnpq.br/0174388335130635).
// Atualizado manualmente a cada revisão do Lattes.

export interface Orientacao {
  aluno: string;
  titulo: string;
  curso: string;
  instituicao: string;
  periodo: string;
  status: 'andamento' | 'concluida';
}

export interface Banca {
  aluno: string;
  titulo: string;
  ano: string;
  curso: string;
  instituicao: string;
  coBanca?: string;
}

export const orientacoes: Orientacao[] = [
  // Em andamento
  {
    aluno: 'Gabriel Lamothe Fonseca',
    titulo:
      'Aplicação de regressões lineares em demonstrações financeiras a fim de identificar causalidades com cotações de ações',
    curso: 'MBA em Data Science & Analytics',
    instituicao: 'Universidade de São Paulo (USP)',
    periodo: 'Início em 2023',
    status: 'andamento',
  },
  {
    aluno: 'Julianna Braga Ferreira',
    titulo:
      'Detecção de falhas mecânicas sob uma perspectiva multidisciplinar possibilitada pela metodologia CRISP-DM',
    curso: 'MBA em Data Science & Analytics',
    instituicao: 'Universidade de São Paulo (USP)',
    periodo: 'Início em 2023',
    status: 'andamento',
  },
  {
    aluno: 'Itamar Valerio',
    titulo: 'Omnichannel na transformação digital: um caso no setor logístico farmacêutico',
    curso: 'MBA em Data Science & Analytics',
    instituicao: 'Universidade de São Paulo (USP)',
    periodo: 'Início em 2023',
    status: 'andamento',
  },
  // Concluídas
  {
    aluno: 'Cintya Paravato',
    titulo:
      'Gestão Integrada como apoio ao processo de transferência tecnológica do desenvolvimento da vacina COVID-19',
    curso: 'MBA em Gestão de Projetos',
    instituicao: 'Universidade de São Paulo (USP)',
    periodo: '2023',
    status: 'concluida',
  },
  {
    aluno: 'Leonardo Cardoso de Araujo',
    titulo:
      'Gerenciamento estratégico de projetos de microgeração distribuída solar fotovoltaica através de programas de projetos',
    curso: 'MBA em Gestão de Projetos',
    instituicao: 'Universidade de São Paulo (USP)',
    periodo: '2023',
    status: 'concluida',
  },
  {
    aluno: 'Vanessa Sharine Careaga Camelo',
    titulo:
      'O impacto da inteligência artificial nos produtos e serviços financeiros na percepção dos profissionais',
    curso: 'MBA em Data Science & Analytics',
    instituicao: 'Universidade de São Paulo (USP)',
    periodo: '2023',
    status: 'concluida',
  },
  {
    aluno: 'Felipe Fernandes Da Costa',
    titulo: 'Impactos do GeoBIM na Gestão entre Projetos de Infraestrutura Municipal',
    curso: 'MBA em Gestão de Projetos',
    instituicao: 'Universidade de São Paulo (USP)',
    periodo: '2023',
    status: 'concluida',
  },
];

export const bancas: Banca[] = [
  {
    aluno: 'Cintya Paravato',
    titulo:
      'Gestão Integrada como apoio ao processo de transferência tecnológica do desenvolvimento da vacina COVID-19',
    ano: '2023',
    curso: 'MBA em Gestão de Projetos',
    instituicao: 'Universidade de São Paulo (USP)',
    coBanca: 'M. R. Luppe',
  },
  {
    aluno: 'Felipe Fernandes Da Costa',
    titulo: 'Impactos do GeoBIM na Gestão entre Projetos de Infraestrutura Municipal',
    ano: '2023',
    curso: 'MBA em Gestão de Projetos',
    instituicao: 'Universidade de São Paulo (USP)',
    coBanca: 'R. M. F. O. Consoletti',
  },
  {
    aluno: 'Leonardo Cardoso de Araujo',
    titulo:
      'Gerenciamento estratégico de projetos de microgeração distribuída solar fotovoltaica através de programas de projetos',
    ano: '2023',
    curso: 'MBA em Gestão de Projetos',
    instituicao: 'Universidade de São Paulo (USP)',
    coBanca: 'P. H. A. Feitosa',
  },
];
