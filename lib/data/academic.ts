// Seções do Hub Acadêmico — usadas em /academico (landing) e /academico/* (subpáginas).
// hubCards em lib/data/static.ts continua sendo o preview enxuto (4 itens) na Home.

export type SectionStatus = 'available' | 'soon' | 'planned';

export interface AcademicSection {
  id: string;
  title: string;
  short: string;
  description: string;
  href: string;
  icon: string; // Lucide
  status: SectionStatus;
  badge?: string;
}

export const academicSections: AcademicSection[] = [
  {
    id: 'base-conhecimento',
    title: 'Base de Conhecimento',
    short: 'Tipos de metodologia científica',
    description:
      'Mapa das principais abordagens (quantitativa, qualitativa, mista) e dez métodos específicos da pesquisa científica — com referências, "use quando" e autores de partida.',
    href: '/academico/base-conhecimento',
    icon: 'BookOpen',
    status: 'available',
  },
  {
    id: 'metodometro',
    title: 'Metodômetro',
    short: 'Diagnóstico em 7 perguntas',
    description:
      'Ferramenta interativa que recomenda a abordagem e o método mais adequados para sua pesquisa — a partir do tipo de pergunta, área, tempo e dados disponíveis.',
    href: '/academico/metodometro',
    icon: 'Compass',
    status: 'soon',
    badge: 'Ferramenta',
  },
  {
    id: 'etica-pesquisa',
    title: 'Ética em Pesquisa',
    short: 'CEP/CONEP, IA, integridade',
    description:
      'Checklists de submissão ao CEP/CONEP, dilemas de IA na pesquisa acadêmica, plagiarismo, integridade e ética por área de conhecimento.',
    href: '/academico/etica-pesquisa',
    icon: 'Scale',
    status: 'soon',
  },
  {
    id: 'pesquisa-por-area',
    title: 'Pesquisa por Área',
    short: 'Administração, Direito, Saúde, Eng.',
    description:
      'Orientação metodológica específica por área de conhecimento — métodos preferidos, periódicos, padrões de citação, exigências regulatórias.',
    href: '/academico/pesquisa-por-area',
    icon: 'Layers',
    status: 'soon',
  },
  {
    id: 'materiais',
    title: 'Materiais',
    short: 'Templates, slides, checklists',
    description:
      'Slides de aulas, templates ABNT, modelos de TCLE, planilhas estatísticas, checklists de submissão. Acesso gratuito mediante cadastro.',
    href: '/academico/materiais',
    icon: 'FolderDown',
    status: 'soon',
    badge: 'Cadastro',
  },
  {
    id: 'glossario',
    title: 'Glossário',
    short: 'Termos da pesquisa científica',
    description:
      'Definições enxutas de termos frequentes em metodologia, estatística, ética e regulação — para mestrandos, doutorandos e revisores.',
    href: '/academico/glossario',
    icon: 'BookA',
    status: 'planned',
  },
];
