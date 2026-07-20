import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Building2, Microscope, GraduationCap, Scale, Mail, Check, ArrowLeft, type LucideProps } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Colaborar em Pesquisa',
  description:
    'Modalidades de colaboração em pesquisa com Fabiano Sannino: coautoria acadêmica, parcerias com indústria farmacêutica/ANVISA, orientação de mestrado/doutorado, métodos alternativos de resolução de conflitos (arbitragem, mediação, conciliação) e projetos aplicados em IA generativa em contextos regulados.',
};

const modalities: Array<{
  icon: React.ComponentType<LucideProps>;
  title: string;
  audience: string;
  description: string;
  asks: string[];
}> = [
  {
    icon: Microscope,
    title: 'Coautoria acadêmica',
    audience: 'Pesquisadores e professores',
    description:
      'Artigos em periódicos qualificados (Qualis A) sobre Change Management, M&A, Blockchain em farma e IA generativa aplicada a contextos regulados. Trabalho colaborativo do desenho ao submission.',
    asks: ['Revisão sistemática conjunta', 'Estudo de caso', 'Survey multinível', 'Meta-análise'],
  },
  {
    icon: Building2,
    title: 'Indústria farmacêutica',
    audience: 'Empresas e operadores',
    description:
      'Estudo de caso piloto para o Pós-Doutoramento UNICAMP/FCA — implementação de blockchain para rastreabilidade ALCOA+ em sala limpa NB3/NB4. Confidencialidade total via NDA.',
    asks: ['Acesso a SOP e batch records', 'Entrevistas com QA/QC', 'Workshop de codesign', 'Avaliação de protótipo'],
  },
  {
    icon: GraduationCap,
    title: 'Orientação acadêmica',
    audience: 'Mestrandos e doutorandos',
    description:
      'Coorientação ou banca em programas de Administração, Sistemas de Informação, Engenharia ou Saúde — temas em interface com Change Management, M&A, IA aplicada e regulação.',
    asks: ['Definição de pergunta de pesquisa', 'Desenho metodológico', 'Suporte estatístico', 'Banca'],
  },
  {
    icon: Users,
    title: 'Reguladores e associações',
    audience: 'ANVISA, ABIFINA, Sindusfarma, ACMP',
    description:
      'Mesas redondas, palestras técnicas, contribuições a consultas públicas, white papers e capacitação em temas de transformação regulatória, IA generativa em compliance e gestão da mudança.',
    asks: ['Palestra / mesa', 'Contribuição a consulta pública', 'White paper', 'Workshop in-company'],
  },
  {
    icon: Scale,
    title: 'Métodos Alternativos de Resolução de Conflitos',
    audience: 'Câmaras de arbitragem, escritórios jurídicos, tribunais',
    description:
      'Pesquisa aplicada em arbitragem, mediação e conciliação — estudos de caso, análises comparadas de câmaras e tribunais, e desenho de programas de capacitação. Ancorada na pós-graduação pela EPM, certificação CIArb (UK) e atuação como Conciliador Judicial no TJSP.',
    asks: ['Estudo de caso de câmara/tribunal', 'Treinamento em técnicas de mediação', 'Pesquisa comparada de sistemas de ADR', 'Coautoria em artigo/parecer técnico'],
  },
];

const principles = [
  'Resposta em até 5 dias úteis para propostas viáveis.',
  'Confidencialidade via NDA quando necessária.',
  'Co-autoria com regras de ordem definidas no início.',
  'Dados sensíveis ficam em ambiente local — LLMs locais quando exigido.',
  'Sem cobrança para coautorias acadêmicas — tempo é o investimento.',
];

export default function ColaboracaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/pesquisa" className="hover:underline">Pesquisa</Link>
            <span className="mx-2">›</span>
            <span>Colaboração</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Pesquisa em rede
            </p>
            <h1 className="text-4xl md:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Colaborar em pesquisa
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Boa pesquisa raramente é solo. Cinco modalidades estão abertas — escolha
              a que faz sentido para você.
            </p>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-14" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modalities.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="h-full p-6 rounded border flex flex-col gap-3"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl leading-tight" style={{ fontFamily: 'var(--font-spectral)' }}>
                        {m.title}
                      </h3>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {m.audience}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                  >
                    {m.description}
                  </p>
                  <div className="mt-auto pt-3 border-t" style={{ borderColor: 'var(--color-rule)' }}>
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Formatos típicos
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {m.asks.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                        >
                          <Check size={14} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: 'var(--color-forest)' }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-14" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-content">
          <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Princípios de trabalho
          </h2>
          <ul className="flex flex-col gap-3">
            {principles.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
              >
                <Check size={16} strokeWidth={2} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'var(--color-academic)' }}>
        <div className="container-site text-center">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded mb-4"
            style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--color-gold)' }}
          >
            <Mail size={20} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
            Tem uma proposta?
          </h2>
          <p
            className="max-w-lg mx-auto mb-6 text-base"
            style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
          >
            Envie um email curto descrevendo o contexto, a modalidade pretendida e
            o prazo aproximado. Respondo em até 5 dias úteis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Enviar proposta →
            </Link>
            <Link
              href="/pesquisa"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
              style={{ borderColor: 'rgba(250,250,247,0.3)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <ArrowLeft size={14} className="mr-1.5" /> Voltar a Pesquisa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
