import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, Cpu, Network, Scale, ArrowRight, ExternalLink, type LucideProps } from 'lucide-react';
import { researchLines, digitalProducts } from '@/lib/data/research';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Pesquisa',
  description:
    'Linhas de pesquisa de Fabiano Sannino: Blockchain + IA Generativa em farma (Pós-Doc UNICAMP/FCA), Change Management em M&A (Doutorado FEA-USP), Data Science aplicada (MBA ESALQ-USP) e Métodos Alternativos de Resolução de Conflitos (arbitragem, mediação, conciliação). Produtos digitais como laboratório vivo.',
};

const lineIconMap: Record<string, React.ComponentType<LucideProps>> = {
  'blockchain-ia-farma': Cpu,
  'change-management-ma': Network,
  'data-ia-aplicada': FlaskConical,
  'metodos-resolucao-conflitos': Scale,
};

const statusLabel = {
  active: 'Em curso',
  ongoing: 'Contínua',
  planned: 'Planejada',
} as const;

const statusColor = {
  active:  { bg: 'rgba(15,52,96,0.10)',  text: 'var(--color-academic)' },
  ongoing: { bg: 'rgba(45,106,79,0.12)', text: 'var(--color-forest)' },
  planned: { bg: 'rgba(107,101,96,0.10)', text: 'var(--color-footnote)' },
} as const;

const productStatusLabel = {
  live: 'Ativo',
  beta: 'Beta',
  pesquisa: 'Pesquisa',
} as const;

export default function PesquisaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Pesquisa</span>
          </nav>
          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Onde rigor acadêmico encontra prática executiva
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Pesquisa
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Doutor em Administração de Empresas pela FEA-USP (2021), MBA em Data Science
              & Analytics pela ESALQ-USP (2024) e Pós-Doutorando UNICAMP/FCA. Quatro linhas
              ativas, integradas com prática consultiva e produtos digitais próprios.
            </p>
          </div>
        </div>
      </section>

      {/* Linhas de pesquisa */}
      <section className="py-16" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Linhas de pesquisa
            </p>
            <h2 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Quatro frentes ativas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchLines.map((line, i) => {
              const Icon = lineIconMap[line.id] ?? FlaskConical;
              const sColor = statusColor[line.status];
              return (
                <FadeInSection key={line.id} delay={i * 0.08}>
                  <div
                    className="h-full p-6 rounded border flex flex-col gap-4"
                    style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className="w-11 h-11 rounded flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{ background: sColor.bg, color: sColor.text, fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {statusLabel[line.status]}
                      </span>
                    </div>

                    <div>
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {line.short}
                      </p>
                      <h3 className="text-xl leading-tight" style={{ fontFamily: 'var(--font-spectral)' }}>
                        {line.title}
                      </h3>
                    </div>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                    >
                      {line.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {line.keywords.map((k) => (
                        <span
                          key={k}
                          className="text-[10px] px-2 py-0.5 rounded border"
                          style={{
                            borderColor: 'var(--color-rule)',
                            color: 'var(--color-footnote)',
                            fontFamily: 'var(--font-dm-sans)',
                          }}
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pós-Doc destaque */}
      <section className="py-16" style={{ background: 'var(--color-ink)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div className="flex flex-col gap-4">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Em destaque · Pós-Doutoramento UNICAMP/FCA
              </p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-paper)' }}>
                Blockchain + IA Generativa em ambientes farmacêuticos regulados
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}>
                Plataforma Rhizom + smart contracts em Solidity para rastreabilidade
                ALCOA+ em salas limpas NB3/NB4. Pesquisa orientada à modernização da
                regulação ANVISA via tecnologia de registro distribuído e LLMs locais.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/pesquisa/postdoc-unicamp"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Detalhes da pesquisa <ArrowRight size={14} className="ml-1.5" />
              </Link>
              <Link
                href="/pesquisa/colaboracao"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
                style={{ borderColor: 'rgba(250,250,247,0.3)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Colaborar nesta linha
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos digitais */}
      <section className="py-16" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-site">
          <div className="text-center mb-10">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Laboratório vivo
            </p>
            <h2 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Produtos digitais
            </h2>
            <p
              className="max-w-xl mx-auto text-base"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Cada produto serve como banco de provas para a pesquisa aplicada — IA
              generativa, RAG, embeddings, dashboards e arquiteturas reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {digitalProducts.map((p, i) => (
              <FadeInSection key={p.id} delay={(i % 2) * 0.06}>
                <div
                  className="h-full p-6 rounded border flex flex-col gap-3"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl" style={{ fontFamily: 'var(--font-spectral)' }}>
                        {p.title}
                      </h3>
                      <p
                        className="text-xs"
                        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {p.short}
                      </p>
                    </div>
                    <Badge variant={p.status === 'live' ? 'forest' : 'gold'} className="text-[10px] shrink-0">
                      {productStatusLabel[p.status]}
                    </Badge>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                  >
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded border"
                        style={{
                          borderColor: 'var(--color-rule)',
                          color: 'var(--color-footnote)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA colaboração */}
      <section className="py-16" style={{ background: 'var(--color-academic)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-4">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Pesquisa em rede
              </p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
                Vamos pesquisar juntos?
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
              >
                Aberto a co-autorias, orientações de mestrado/doutorado, parcerias com
                indústria farmacêutica, ANVISA, câmaras de arbitragem e mediação, e
                iniciativas em IA generativa aplicada a contextos regulados.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                href="/pesquisa/colaboracao"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Como colaborar <ExternalLink size={14} className="ml-1.5" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
                style={{ borderColor: 'rgba(250,250,247,0.3)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Falar diretamente
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
