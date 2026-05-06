import type { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, ShieldCheck, Layers, Beaker, FileCode, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FadeInSection } from '@/components/shared/FadeInSection';

export const metadata: Metadata = {
  title: 'Pós-Doutorado UNICAMP/FCA — Blockchain + IA Generativa em Farma',
  description:
    'Pesquisa de Pós-Doutoramento de Fabiano Sannino na UNICAMP/FCA: rastreabilidade ALCOA+ em ambientes farmacêuticos regulados via blockchain (plataforma Rhizom, smart contracts em Solidity) e LLMs locais.',
};

const objectives = [
  {
    icon: ShieldCheck,
    title: 'Rastreabilidade ALCOA+',
    description:
      'Avaliar como registros distribuídos em blockchain podem assegurar os princípios ALCOA+ (Atribuível, Legível, Contemporâneo, Original, Acurado, Completo, Consistente, Permanente, Disponível) em registros eletrônicos de salas limpas NB3/NB4.',
  },
  {
    icon: FileCode,
    title: 'Smart contracts em Solidity',
    description:
      'Prototipar smart contracts que automatizam validações regulatórias (lote, batch record, equipment qualification) e geram trilhas de auditoria imutáveis para inspeções da ANVISA.',
  },
  {
    icon: Cpu,
    title: 'LLMs locais para regulação',
    description:
      'Investigar o uso de modelos de linguagem locais (Ollama/Gemma) para análise de SOPs, geração de relatórios CAPA e suporte a decisão regulatória — preservando privacidade dos dados.',
  },
  {
    icon: Layers,
    title: 'Plataforma Rhizom',
    description:
      'Avaliar a Rhizom como camada de orquestração entre blockchain, sistemas legados (LIMS, MES, ERP) e instrumentos de chão de fábrica em ambiente GMP.',
  },
];

const phases = [
  { num: '01', label: 'Revisão sistemática', text: 'Mapeamento de literatura sobre blockchain em farma + IA generativa em ambientes regulados (PRISMA).' },
  { num: '02', label: 'Modelagem conceitual', text: 'Design Science Research: artefato + classes de problemas + métodos de avaliação.' },
  { num: '03', label: 'Prototipagem', text: 'Implementação dos smart contracts em Solidity sobre Rhizom + integração com LLM local.' },
  { num: '04', label: 'Avaliação', text: 'Estudo de caso piloto em parceiro industrial + benchmark contra alternativas tradicionais.' },
  { num: '05', label: 'Difusão', text: 'Publicações em periódicos qualificados + apresentação em conferências farma/IS.' },
];

export default function PostdocUnicampPage() {
  return (
    <article>
      {/* Hero */}
      <header className="py-16 border-b" style={{ background: 'var(--color-ink)', borderColor: 'rgba(250,250,247,0.08)' }}>
        <div className="container-content">
          <nav className="text-xs mb-6" style={{ color: 'rgba(250,250,247,0.55)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/pesquisa" className="hover:underline">Pesquisa</Link>
            <span className="mx-2">›</span>
            <span>Pós-Doc UNICAMP</span>
          </nav>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="gold">Em curso</Badge>
            <span
              className="text-xs"
              style={{ color: 'rgba(250,250,247,0.6)', fontFamily: 'var(--font-dm-sans)' }}
            >
              UNICAMP · Faculdade de Ciências Aplicadas (FCA)
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-paper)' }}>
            Blockchain + IA Generativa em ambientes farmacêuticos regulados
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
          >
            Como tecnologias de registro distribuído e LLMs locais podem aprimorar a
            rastreabilidade ALCOA+ em salas limpas NB3/NB4 — e por que isso importa
            para a modernização da regulação ANVISA.
          </p>
        </div>
      </header>

      {/* Contexto */}
      <section className="py-14" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content flex flex-col gap-5">
          <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Contexto</h2>
          <div
            className="flex flex-col gap-4 text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
          >
            <p>
              Indústrias farmacêuticas operam sob regimes regulatórios densos — Boas
              Práticas de Fabricação (GMP), validação de processos, qualificação de
              equipamentos e rastreabilidade de lote. Os registros eletrônicos devem
              cumprir os princípios <strong>ALCOA+</strong>, base das inspeções
              da ANVISA, FDA e EMA.
            </p>
            <p>
              Sistemas tradicionais (LIMS, MES, ERP) cumprem essas exigências, mas a
              integridade dos registros depende de controles administrativos e auditorias
              periódicas. Blockchain, ao oferecer imutabilidade nativa, surge como uma
              camada complementar promissora — desde que adequadamente integrada à
              realidade operacional.
            </p>
            <p>
              Em paralelo, <strong>LLMs locais</strong> (Ollama, Gemma) abrem caminho
              para análise automatizada de SOPs, geração assistida de relatórios CAPA e
              suporte à decisão regulatória — sem expor dados sensíveis a APIs externas.
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-14" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-site">
          <div className="container-content mx-auto mb-10">
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Objetivos específicos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {objectives.map((o, i) => {
              const Icon = o.icon;
              return (
                <FadeInSection key={o.title} delay={(i % 2) * 0.06}>
                  <div
                    className="h-full p-6 rounded border flex flex-col gap-3"
                    style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg" style={{ fontFamily: 'var(--font-spectral)' }}>
                      {o.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}
                    >
                      {o.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metodologia + fases */}
      <section className="py-14" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content">
          <div className="flex items-baseline gap-3 mb-2">
            <Beaker size={20} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
              Abordagem metodológica
            </h2>
          </div>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
          >
            Design Science Research (DSR) — pesquisa orientada a artefatos —
            apoiado por revisão sistemática (PRISMA), prototipagem iterativa
            e avaliação em contexto real via estudo de caso.
          </p>

          <ol className="flex flex-col gap-0">
            {phases.map((p, i) => (
              <li key={p.num} className="flex gap-5 pb-6 relative">
                {i < phases.length - 1 && (
                  <div
                    className="absolute left-[19px] top-10 bottom-0 w-px"
                    style={{ background: 'var(--color-rule)' }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-xs font-medium z-10"
                  style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {p.num}
                </div>
                <div className="pt-1.5">
                  <p
                    className="text-base font-medium"
                    style={{ fontFamily: 'var(--font-spectral)' }}
                  >
                    {p.label}
                  </p>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                  >
                    {p.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Footer + CTAs */}
      <section className="py-14" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-content text-center">
          <h2 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
            Quer contribuir?
          </h2>
          <p
            className="max-w-xl mx-auto text-base mb-6"
            style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
          >
            Indústria farmacêutica disposta a estudo de caso piloto, pesquisadores
            interessados em coautoria, alunos de mestrado/doutorado em busca de
            tema — todos são bem-vindos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pesquisa/colaboracao"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Modalidades de colaboração →
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
              style={{ borderColor: 'var(--color-rule)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Falar diretamente
            </Link>
          </div>
          <Link
            href="/pesquisa"
            className="inline-flex items-center gap-1.5 text-sm mt-8 transition-colors hover:text-academic"
            style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
          >
            <ArrowLeft size={14} /> Voltar a Pesquisa
          </Link>
        </div>
      </section>
    </article>
  );
}
