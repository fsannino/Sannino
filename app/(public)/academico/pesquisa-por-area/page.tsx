import type { Metadata } from 'next';
import Link from 'next/link';
import { Stethoscope, Building2, GraduationCap, Cpu, Scale as ScaleIcon, Sprout, type LucideProps } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pesquisa por Área de Conhecimento',
  description:
    'Orientação metodológica específica por área: Saúde/Farma, Administração, Educação/Sociais, Engenharia/SI, Direito/Regulatório e Agronegócio. Métodos preferidos, periódicos, normas regulatórias e armadilhas comuns.',
};

interface Area {
  id: string;
  title: string;
  icon: React.ComponentType<LucideProps>;
  methods: string[];
  journals: string[];
  norms: string[];
  pitfalls: string;
}

const areas: Area[] = [
  {
    id: 'saude',
    title: 'Saúde, Farma e Biológicas',
    icon: Stethoscope,
    methods: ['Ensaios clínicos randomizados (RCT)', 'Estudos observacionais (coorte, caso-controle)', 'Revisão sistemática + meta-análise', 'Ensaio quase-experimental'],
    journals: ['Lancet', 'NEJM', 'Cad. Saúde Pública', 'Ciência & Saúde Coletiva'],
    norms: ['CEP/CONEP obrigatório', 'Resolução CNS 466/2012 e 510/2016', 'CONSORT (RCT), STROBE (observacional)', 'CAPA + ALCOA+ em farma'],
    pitfalls: 'Subestimar tempo do CEP; não pré-registrar protocolo no PROSPERO; sample size insuficiente para detectar efeito.',
  },
  {
    id: 'admin',
    title: 'Administração, Negócios e Economia',
    icon: Building2,
    methods: ['Estudo de caso (Yin, Eisenhardt)', 'Survey + SEM', 'Design Science Research', 'Pesquisa-ação em organização'],
    journals: ['RAE', 'RAC', 'BAR', 'Strategic Management Journal', 'Academy of Management Journal'],
    norms: ['CEP quando há entrevistas com humanos', 'NDA com empresas estudadas', 'LGPD para dados de funcionários/clientes'],
    pitfalls: 'Generalizar excessivamente a partir de 1 estudo de caso; "amostra de conveniência" sem justificativa; falta de operacionalização clara dos construtos.',
  },
  {
    id: 'sociais',
    title: 'Educação, Sociais e Psicologia',
    icon: GraduationCap,
    methods: ['Etnografia escolar/organizacional', 'Fenomenologia', 'Grounded theory', 'Análise de conteúdo / discurso', 'Pesquisa-ação'],
    journals: ['Educação & Pesquisa', 'Cadernos Cedes', 'Psicologia: Reflexão e Crítica', 'Qualitative Research'],
    norms: ['CEP obrigatório', 'TCLE adaptado para vulneráveis (crianças, idosos)', 'Cuidados redobrados com anonimato'],
    pitfalls: 'Falta de imersão suficiente em etnografia; análise temática rasa; misturar paradigmas sem coerência epistemológica.',
  },
  {
    id: 'engsi',
    title: 'Engenharia, Sistemas de Informação, Computação',
    icon: Cpu,
    methods: ['Design Science Research (artefato)', 'Experimental controlado', 'Benchmarking de algoritmos', 'Revisão sistemática de literatura'],
    journals: ['IEEE Transactions', 'ACM Computing Surveys', 'JSS', 'Production'],
    norms: ['Reprodutibilidade (código + dados públicos)', 'CEP se houver participantes humanos (UX, HCI)', 'Métricas claras de avaliação'],
    pitfalls: 'Validar artefato apenas no próprio cenário; ausência de baseline; não disponibilizar código/dados para replicação.',
  },
  {
    id: 'direito',
    title: 'Direito e Regulatório',
    icon: ScaleIcon,
    methods: ['Análise documental (legislação, jurisprudência)', 'Estudo de caso jurídico', 'Análise comparada de sistemas legais', 'Revisão sistemática de literatura jurídica'],
    journals: ['RDA — Revista de Direito Administrativo', 'Revista Brasileira de Direito Civil', 'JOTA Reports'],
    norms: ['LGPD para dados de partes', 'Sigilo profissional', 'Cuidado com casos pendentes'],
    pitfalls: 'Confundir doutrina com pesquisa empírica; falta de critério explícito de seleção de casos; ausência de método claro na "análise jurisprudencial".',
  },
  {
    id: 'agro',
    title: 'Agronegócio e Ciências Agrárias',
    icon: Sprout,
    methods: ['Experimentos de campo (delineamento aleatorizado em blocos)', 'Survey com produtores', 'Modelagem econômica/biofísica', 'Estudo de caso de cadeia produtiva'],
    journals: ['Pesquisa Agropecuária Brasileira', 'Agribusiness', 'Revista de Economia e Sociologia Rural'],
    norms: ['CEUA para animais', 'CGEN para acesso a recursos genéticos/conhecimento tradicional', 'LGPD para dados de produtores'],
    pitfalls: 'Sub-replicação em experimentos; ignorar variabilidade espacial/temporal do solo; survey sem estratificação por porte.',
  },
];

export default function PesquisaPorAreaPage() {
  return (
    <>
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/academico" className="hover:underline">Acadêmico</Link>
            <span className="mx-2">›</span>
            <span>Pesquisa por Área</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
              Padrões metodológicos por área
            </p>
            <h1 className="text-4xl md:text-5xl mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Pesquisa por Área de Conhecimento
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
              Cada área tem métodos preferidos, periódicos de referência e exigências
              regulatórias próprias. Use como ponto de partida — sua banca dirá o resto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {areas.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.id}
                  className="rounded border p-6 flex flex-col gap-4"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {a.title}
                    </h2>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
                      Métodos preferidos
                    </p>
                    <ul className="flex flex-col gap-1 pl-4 list-disc text-sm" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
                      {a.methods.map((m) => <li key={m}>{m}</li>)}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
                      Periódicos de referência
                    </p>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}>
                      {a.journals.join(' · ')}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
                      Normas e regulação
                    </p>
                    <ul className="flex flex-col gap-1 pl-4 list-disc text-sm" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
                      {a.norms.map((n) => <li key={n}>{n}</li>)}
                    </ul>
                  </div>

                  <div className="pt-3 border-t" style={{ borderColor: 'var(--color-rule)' }}>
                    <p className="text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}>
                      Armadilhas comuns
                    </p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}>
                      {a.pitfalls}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
            Quer testar combinações?
          </h2>
          <p className="max-w-xl mx-auto mb-5 text-base" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            O Metodômetro pondera área + tipo de pergunta + tempo + estágio teórico
            e devolve as 3 metodologias mais alinhadas.
          </p>
          <Link
            href="/academico/metodometro"
            className="inline-flex items-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Abrir Metodômetro →
          </Link>
        </div>
      </section>
    </>
  );
}
