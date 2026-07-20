// Orientações acadêmicas e participações em banca — MBAs PECEGE/ESALQ-USP.
//
// Fontes:
// - 30 declarações oficiais de orientação emitidas pelo PECEGE/ESALQ-USP
//   (Escola Superior de Agricultura Luiz de Queiroz — Universidade de São
//   Paulo), referentes aos eventos de defesa V a X (jul/2023 a jan/2026).
//   Cada declaração tem token de validação individual emitido pela ESALQ.
// - Currículo Lattes (http://lattes.cnpq.br/0174388335130635) para a
//   orientação de Cintya Paravato, cuja declaração formal não constava
//   no lote de PDFs mais recente.
//
// Atualizar manualmente conforme novas declarações forem emitidas.

export type Curso = 'Gestão de Projetos' | 'Data Science e Analytics' | 'Digital Business';

export interface Orientacao {
  aluno: string;
  titulo: string;
  curso: Curso;
  dataDefesa: string; // formato longo em pt-BR, ex.: "19 de janeiro de 2026"
  ano: number; // usado só para ordenação
  fonte: 'PECEGE/ESALQ-USP' | 'Currículo Lattes';
}

export interface Banca {
  aluno: string;
  titulo: string;
  ano: string;
  curso: Curso;
  coBanca?: string;
}

const INSTITUICAO = 'ESALQ — Universidade de São Paulo (USP), via PECEGE';

export const instituicaoOrientacoes = INSTITUICAO;

export const orientacoes: Orientacao[] = [
  // ——— Gestão de Projetos ———
  {
    aluno: 'Danielle Cristina Gomes Correa',
    titulo: 'Turismo Sustentável em Território Minerário: Modelo Metodológico com FEL e PMBOK® 7',
    curso: 'Gestão de Projetos',
    dataDefesa: '19 de janeiro de 2026',
    ano: 2026,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Guilherme Coletto Gomes',
    titulo: 'Gestão de Riscos em Projetos de Investigação Confirmatória: Impactos no Cronograma e Estratégias de Mitigação',
    curso: 'Gestão de Projetos',
    dataDefesa: '13 de janeiro de 2026',
    ano: 2026,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Isabela Gonçalves Araujo',
    titulo: 'As diferentes perspectivas da segurança psicológica no ambiente corporativo',
    curso: 'Gestão de Projetos',
    dataDefesa: '13 de dezembro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Gabriele Rodarte Dutra',
    titulo: 'Implementação de sucessão e gestão da mudança em uma empresa familiar',
    curso: 'Gestão de Projetos',
    dataDefesa: '06 de dezembro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Hamana Paulita Moreira',
    titulo: 'Planejamento de eventos: análise da organização de um grupo de extensão universitária',
    curso: 'Gestão de Projetos',
    dataDefesa: '29 de novembro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Marcella Aparecida Sifuentes Gomes',
    titulo: 'Integração de Cronograma e Custos na Gestão de Projetos com Base na Metodologia Advanced Work Packaging (AWP)',
    curso: 'Gestão de Projetos',
    dataDefesa: '28 de novembro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Paula Lemos De Almeida',
    titulo: 'Eficácia da comunicação em regimes remotos e híbridos: um estudo sobre gerenciamento em obras',
    curso: 'Gestão de Projetos',
    dataDefesa: '27 de novembro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Icaro Almeida Bertti',
    titulo: 'Aumento de produtividade na montagem final de uma aeronave',
    curso: 'Gestão de Projetos',
    dataDefesa: '17 de julho de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Eduardo Moreira Brito',
    titulo: 'Planejamento de viagem através do guia PMBOK',
    curso: 'Gestão de Projetos',
    dataDefesa: '03 de julho de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Renison Chagas Da Silva',
    titulo: 'Avaliação de Erro de Dosagem de Diluente Orgânico em Indústria de Tintas e Vernizes',
    curso: 'Gestão de Projetos',
    dataDefesa: '02 de julho de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Isabela Nahlous Catini',
    titulo: 'Gestão do tempo aplicada a um projeto de aumento de posições porta palete',
    curso: 'Gestão de Projetos',
    dataDefesa: '27 de junho de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Paulo Augusto Mazonetto',
    titulo: 'A frequência, os principais desafios e consequências dos aditivos, pleitos e multas contratuais durante o ciclo de vida dos projetos',
    curso: 'Gestão de Projetos',
    dataDefesa: '24 de junho de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Elisangela Ribeiro',
    titulo: 'Gestão de projetos multidisciplinares utilizando as Práticas do PMBOK e a metodologia BIM',
    curso: 'Gestão de Projetos',
    dataDefesa: '07 de dezembro de 2023',
    ano: 2023,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Leonardo Cardoso de Araujo',
    titulo: 'Gerenciamento estratégico de projetos de microgeração distribuída solar fotovoltaica através de programas de projetos',
    curso: 'Gestão de Projetos',
    dataDefesa: '19 de julho de 2023',
    ano: 2023,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Felipe Fernandes Da Costa',
    titulo: 'Impactos do GeoBIM na Gestão entre Projetos de Infraestrutura Municipal',
    curso: 'Gestão de Projetos',
    dataDefesa: '10 de julho de 2023',
    ano: 2023,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Cintya Paravato',
    titulo: 'Gestão Integrada como apoio ao processo de transferência tecnológica do desenvolvimento da vacina COVID-19',
    curso: 'Gestão de Projetos',
    dataDefesa: '2023',
    ano: 2023,
    fonte: 'Currículo Lattes',
  },

  // ——— Data Science e Analytics ———
  {
    aluno: 'Fabio Junior Nunes',
    titulo: 'Modelo preditivo para identificação de TDAH em meninas baseado em conectividade funcional cerebral',
    curso: 'Data Science e Analytics',
    dataDefesa: '24 de novembro de 2025',
    ano: 2025,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Fernanda Tavares Carreira',
    titulo: 'Metodologias Ágeis em Gestão de Projetos: Impactos na Produtividade e Qualidade',
    curso: 'Data Science e Analytics',
    dataDefesa: '10 de janeiro de 2025',
    ano: 2025,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Flavio Henrique Lucio Theodoroff',
    titulo: 'Aplicação do Método ARIMA na Análise de Padrões das Cotações do Petróleo Brent e dos Preços dos Combustíveis no Brasil',
    curso: 'Data Science e Analytics',
    dataDefesa: '10 de janeiro de 2025',
    ano: 2025,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Fabio Cantarim Melo',
    titulo: 'Preços de Alimentos em Plataformas digitais: Pizza, Hambúrguer e Açaí no Brasil avaliado por região',
    curso: 'Data Science e Analytics',
    dataDefesa: '31 de julho de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Julianna Braga',
    titulo: 'Detecção de falhas mecânicas sob uma perspectiva multidisciplinar possibilitada pela metodologia CRISP-DM',
    curso: 'Data Science e Analytics',
    dataDefesa: '16 de janeiro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Gabriel Lamothe Fonseca',
    titulo: 'Aplicação de regressões lineares em demonstrações financeiras a fim de identificar causalidades com cotações de ações',
    curso: 'Data Science e Analytics',
    dataDefesa: '08 de janeiro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Vanessa Sharine Careaga Camelo',
    titulo: 'O impacto da inteligência artificial nos produtos e serviços financeiros na percepção dos profissionais',
    curso: 'Data Science e Analytics',
    dataDefesa: '18 de agosto de 2023',
    ano: 2023,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Karla Maia',
    titulo: 'Abordagem da metodologia ágil na empresa Enjoei',
    curso: 'Data Science e Analytics',
    dataDefesa: '24 de julho de 2023',
    ano: 2023,
    fonte: 'PECEGE/ESALQ-USP',
  },

  // ——— Digital Business ———
  {
    aluno: 'Helen Carla De Araujo Colette',
    titulo: 'Gestão eficiente de estoque de paletes: abordagens, tecnologia e desafios para otimização logística',
    curso: 'Digital Business',
    dataDefesa: '12 de dezembro de 2025',
    ano: 2025,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Isabela Souza',
    titulo: 'Implementação de uma esteira de experimentação e testes A/B para e-commerce',
    curso: 'Digital Business',
    dataDefesa: '11 de dezembro de 2025',
    ano: 2025,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Gabriella Clotildes Pfrimer',
    titulo: 'Características de comunidades de prática virtuais promotoras de inovação numa empresa pública brasileira nacional de grande porte',
    curso: 'Digital Business',
    dataDefesa: '01 de dezembro de 2025',
    ano: 2025,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Jhonatã Elvis dos Santos',
    titulo: '"Eadmirável mundo novo": elementos da experiência educacional presencial na potencialização do processo disruptivo da EaD',
    curso: 'Digital Business',
    dataDefesa: '31 de janeiro de 2025',
    ano: 2025,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Larissa Cristofoletti De Castro',
    titulo: 'Adaptação às inovações: um estudo de caso das gerações X, Y e Z no ambiente educacional durante a COVID-19',
    curso: 'Digital Business',
    dataDefesa: '22 de agosto de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Fernanda Giacomassi',
    titulo: 'Desafios da carreira centrada em produtos dentro de organizações jornalísticas brasileiras',
    curso: 'Digital Business',
    dataDefesa: '19 de agosto de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
  {
    aluno: 'Itamar Dos Santos Valerio',
    titulo: 'Omnichannel na transformação digital: um caso no setor logístico farmacêutico',
    curso: 'Digital Business',
    dataDefesa: '31 de janeiro de 2024',
    ano: 2024,
    fonte: 'PECEGE/ESALQ-USP',
  },
];

export const bancas: Banca[] = [
  {
    aluno: 'Cintya Paravato',
    titulo: 'Gestão Integrada como apoio ao processo de transferência tecnológica do desenvolvimento da vacina COVID-19',
    ano: '2023',
    curso: 'Gestão de Projetos',
    coBanca: 'M. R. Luppe',
  },
  {
    aluno: 'Felipe Fernandes Da Costa',
    titulo: 'Impactos do GeoBIM na Gestão entre Projetos de Infraestrutura Municipal',
    ano: '2023',
    curso: 'Gestão de Projetos',
    coBanca: 'R. M. F. O. Consoletti',
  },
  {
    aluno: 'Leonardo Cardoso de Araujo',
    titulo: 'Gerenciamento estratégico de projetos de microgeração distribuída solar fotovoltaica através de programas de projetos',
    ano: '2023',
    curso: 'Gestão de Projetos',
    coBanca: 'P. H. A. Feitosa',
  },
];
