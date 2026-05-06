import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Compass, Scale, Layers, FolderDown, BookA, ArrowRight, Lock, type LucideProps } from 'lucide-react';
import { academicSections, type SectionStatus } from '@/lib/data/academic';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Hub Acadêmico',
  description:
    'Hub Acadêmico de Fabiano Sannino — metodologia científica, ética em pesquisa, ferramentas e materiais para alunos, mestrandos, doutorandos e pesquisadores. Conteúdo aberto + materiais com cadastro gratuito.',
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  BookOpen,
  Compass,
  Scale,
  Layers,
  FolderDown,
  BookA,
};

const statusLabel: Record<SectionStatus, string> = {
  available: 'Disponível',
  soon: 'Em breve',
  planned: 'Planejado',
};

const statusColor: Record<SectionStatus, { bg: string; text: string }> = {
  available: { bg: 'rgba(45,106,79,0.12)',  text: 'var(--color-forest)' },
  soon:      { bg: 'rgba(201,168,76,0.18)', text: 'var(--color-ink)' },
  planned:   { bg: 'rgba(107,101,96,0.10)', text: 'var(--color-footnote)' },
};

const principles = [
  {
    title: 'Rigor metodológico',
    description: 'Conteúdo ancorado em referências canônicas (Sampieri, Creswell, Yin, Gil) e em prática real em FEA-USP, ESALQ-USP e UNICAMP.',
  },
  {
    title: 'Aplicação prática',
    description: 'Foco em quem precisa entregar — banca de mestrado, qualificação de doutorado, submissão ao CEP, projeto aplicado em organização.',
  },
  {
    title: 'Acesso aberto',
    description: 'A maior parte é gratuita e sem cadastro. Materiais para baixar (templates ABNT, checklists) pedem cadastro só para enviar atualizações.',
  },
];

export default function AcademicoPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="py-20 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Acadêmico</span>
          </nav>
          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Para alunos, mestrandos, doutorandos e pesquisadores
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Hub Acadêmico
            </h1>
            <p
              className="text-lg leading-relaxed mb-3"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Metodologia, ética e ferramentas para quem pesquisa. Conteúdo curado a partir
              de 20+ anos em projetos aplicados e da prática em FEA-USP, ESALQ-USP e UNICAMP/FCA.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Construído incrementalmente. Algumas seções já estão no ar; outras serão
              liberadas em sequência. Tem demanda por uma específica?{' '}
              <Link href="/contato" className="underline" style={{ color: 'var(--color-academic)' }}>
                Me avisa
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-14" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <FadeInSection key={p.title} delay={i * 0.06}>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Princípio {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-spectral)' }}>
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                  >
                    {p.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Seções */}
      <section className="py-16" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-site">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Explorar
            </p>
            <h2 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Seções do hub
            </h2>
            <p
              className="max-w-xl mx-auto text-base"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Seis trilhas. Comece pela base de conhecimento, ou use o Metodômetro
              para um diagnóstico rápido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {academicSections.map((section, i) => {
              const Icon = iconMap[section.icon] ?? BookOpen;
              const isAvailable = section.status === 'available';
              const sColor = statusColor[section.status];

              const cardInner = (
                <div className="h-full p-6 rounded border flex flex-col gap-3 relative transition-all"
                     style={{
                       borderColor: 'var(--color-rule)',
                       background: 'var(--color-paper)',
                       opacity: isAvailable ? 1 : 0.85,
                     }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded whitespace-nowrap"
                        style={{ background: sColor.bg, color: sColor.text, fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {statusLabel[section.status]}
                      </span>
                      {section.badge && (
                        <Badge variant="gold" className="text-[10px]">
                          {section.badge === 'Cadastro' ? (
                            <>
                              <Lock size={10} className="inline mr-1" />
                              {section.badge}
                            </>
                          ) : section.badge}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg leading-tight" style={{ fontFamily: 'var(--font-spectral)' }}>
                      {section.title}
                    </h3>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {section.short}
                    </p>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                  >
                    {section.description}
                  </p>

                  {isAvailable ? (
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Acessar <ArrowRight size={14} strokeWidth={2} />
                    </span>
                  ) : (
                    <span
                      className="mt-auto text-xs"
                      style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Conteúdo em produção. {' '}
                      <Link href="/contato" className="underline">Quer ser avisado?</Link>
                    </span>
                  )}
                </div>
              );

              return (
                <FadeInSection key={section.id} delay={(i % 3) * 0.06}>
                  {isAvailable ? (
                    <Link
                      href={section.href}
                      className="block h-full hover:shadow-card hover:-translate-y-0.5 transition-all rounded"
                    >
                      {cardInner}
                    </Link>
                  ) : (
                    <div className="block h-full">{cardInner}</div>
                  )}
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA cadastro */}
      <section className="py-16" style={{ background: 'var(--color-academic)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-4">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Quer ser avisado?
              </p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
                Materiais novos chegam por email
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
              >
                Slides de aulas, templates ABNT, checklists de submissão ao CEP, modelos
                de documentos. Sem spam, sem venda — você recebe quando algo novo entra
                no acervo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Quero ser avisado →
              </Link>
              <Link
                href="/academico/base-conhecimento"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
                style={{ borderColor: 'rgba(250,250,247,0.3)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Começar pela Base de Conhecimento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
