import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileSearch, Filter, ListChecks, Layers, GitBranch, AlertTriangle, Wrench } from 'lucide-react';
import { checklist, flowStages, extensions, tools, armadilhas } from '@/lib/data/prisma';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'PRISMA 2020 — Guia de Revisão Sistemática',
  description:
    'Guia completo do PRISMA 2020 (Preferred Reporting Items for Systematic Reviews and Meta-Analyses): os 27 itens do checklist, fluxograma de seleção, extensões (ScR, DTA, IPD), ferramentas e armadilhas comuns.',
};

const stageColor = (type: 'in' | 'out' | 'process') => {
  if (type === 'out') return { bg: 'rgba(230,57,70,0.08)', border: 'rgba(230,57,70,0.4)', label: 'Excluídos' };
  if (type === 'in') return { bg: 'rgba(45,106,79,0.10)', border: 'rgba(45,106,79,0.4)', label: 'Inclusão' };
  return { bg: 'var(--color-paper)', border: 'var(--color-rule)', label: 'Processo' };
};

export default function PrismaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/academico" className="hover:underline">Acadêmico</Link>
            <span className="mx-2">›</span>
            <Link href="/academico/base-conhecimento" className="hover:underline">Base de Conhecimento</Link>
            <span className="mx-2">›</span>
            <span>PRISMA</span>
          </nav>
          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Guia de revisão sistemática
            </p>
            <h1 className="text-4xl md:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              PRISMA 2020
            </h1>
            <p
              className="text-lg leading-relaxed mb-3"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              <strong>P</strong>referred <strong>R</strong>eporting <strong>I</strong>tems for{' '}
              <strong>S</strong>ystematic Reviews and <strong>M</strong>eta-<strong>A</strong>nalyses —
              a diretriz internacional que padroniza o reporte de revisões sistemáticas e
              meta-análises. Atualizada em 2020 (Page et al., BMJ).
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Adotada por &gt; 230 periódicos científicos como exigência de submissão.
              Conteúdo aberto: <em>Page et al. (2021). The PRISMA 2020 statement: an updated guideline
              for reporting systematic reviews. BMJ 372:n71.</em>
            </p>
          </div>
        </div>
      </section>

      {/* TOC sticky */}
      <div className="border-b sticky top-16 z-40" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site py-3">
          <nav className="flex gap-1 overflow-x-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {[
              { h: '#o-que-e', l: 'O que é' },
              { h: '#para-que', l: 'Para quê' },
              { h: '#fluxograma', l: 'Fluxograma' },
              { h: '#checklist', l: 'Checklist (27 itens)' },
              { h: '#extensoes', l: 'Extensões' },
              { h: '#ferramentas', l: 'Ferramentas' },
              { h: '#armadilhas', l: 'Armadilhas' },
              { h: '#exemplo', l: 'Exemplo aplicado' },
            ].map((s) => (
              <a
                key={s.h}
                href={s.h}
                className="text-xs px-3 py-1.5 rounded border whitespace-nowrap transition-colors hover:bg-chalk"
                style={{ borderColor: 'var(--color-rule)', color: 'var(--color-academic)' }}
              >
                {s.l}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* O que é */}
      <section id="o-que-e" className="py-14" style={{ background: 'var(--color-paper)', scrollMarginTop: '8rem' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>O que é PRISMA</h2>
          </div>
          <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
            <p>
              PRISMA é uma diretriz internacional que padroniza <strong>como reportar uma revisão
              sistemática ou meta-análise</strong> — ou seja, o que precisa estar escrito no artigo
              final para que outro pesquisador consiga avaliar o rigor e reproduzir o estudo.
            </p>
            <p>
              Foi originalmente publicada em 2009 (Moher et al., PLoS Medicine) e
              <strong> atualizada em 2020</strong> (Page et al., BMJ) refletindo avanços em automação
              de busca, ferramentas de triagem, avaliação de viés (RoB 2, ROBINS-I), certeza da
              evidência (GRADE) e questões de transparência (open data, pré-registro).
            </p>
            <p>
              <strong>O que mudou em 2020</strong>: novo checklist com 27 itens (vs. 27 itens com
              estrutura diferente em 2009), novo fluxograma com versão para revisões originais e
              versão para atualizações, mais ênfase em busca em registros de ensaios, métodos de
              síntese sem meta-análise, e relato de certeza (GRADE).
            </p>
          </div>
        </div>
      </section>

      {/* Para quê serve */}
      <section id="para-que" className="py-14" style={{ background: 'var(--color-chalk)', scrollMarginTop: '8rem' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-5">
            <FileSearch size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Para quê serve</h2>
          </div>
          <ul className="flex flex-col gap-3 text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
            <li className="pl-4 relative">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} aria-hidden />
              <strong>Garantir transparência</strong> — leitor consegue avaliar se a revisão é
              confiável e como foi feita.
            </li>
            <li className="pl-4 relative">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} aria-hidden />
              <strong>Permitir reprodução</strong> — outro pesquisador pode refazer a busca e
              chegar aos mesmos estudos.
            </li>
            <li className="pl-4 relative">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} aria-hidden />
              <strong>Reduzir viés de relato</strong> — itens explícitos exigidos antecipam
              omissões inconvenientes.
            </li>
            <li className="pl-4 relative">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} aria-hidden />
              <strong>Cumprir exigência editorial</strong> — &gt; 230 periódicos exigem PRISMA
              completo na submissão; sem ele, desk reject.
            </li>
            <li className="pl-4 relative">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} aria-hidden />
              <strong>Apoiar diretrizes baseadas em evidência</strong> — o GRADE só funciona sobre
              uma revisão bem reportada.
            </li>
          </ul>
          <p className="mt-5 text-sm italic" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Importante: PRISMA é diretriz de <strong>reporte</strong>, não de <strong>condução</strong>.
            Para conduzir, use Cochrane Handbook, JBI, Centre for Reviews and Dissemination (CRD),
            Campbell Collaboration etc.
          </p>
        </div>
      </section>

      {/* Fluxograma */}
      <section id="fluxograma" className="py-14" style={{ background: 'var(--color-paper)', scrollMarginTop: '8rem' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Fluxograma PRISMA 2020</h2>
          </div>
          <p className="text-sm mb-8" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Diagrama de fluxo padrão (versão para revisões originais). Documenta o processo de
            seleção dos estudos em três estágios.
          </p>

          <ol className="flex flex-col gap-3">
            {flowStages.map((stage, sIdx) => (
              <li key={stage.id}>
                <div
                  className="rounded border p-5"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-playfair)' }}
                    >
                      {sIdx + 1}
                    </span>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        Estágio
                      </p>
                      <h3 className="text-xl" style={{ fontFamily: 'var(--font-spectral)' }}>
                        {stage.label}
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                        {stage.description}
                      </p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {stage.boxes.map((b) => {
                      const c = stageColor(b.type);
                      return (
                        <li
                          key={b.label}
                          className="flex items-start gap-2 rounded border p-3 text-sm"
                          style={{ borderColor: c.border, background: c.bg, fontFamily: 'var(--font-source-serif)' }}
                        >
                          <span
                            className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded shrink-0 mt-0.5"
                            style={{
                              background: 'var(--color-paper)',
                              color: b.type === 'out' ? 'var(--color-accent)' : b.type === 'in' ? 'var(--color-forest)' : 'var(--color-footnote)',
                              fontFamily: 'var(--font-dm-sans)',
                            }}
                          >
                            {c.label}
                          </span>
                          <span style={{ color: 'var(--color-ink)' }}>{b.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {sIdx < flowStages.length - 1 && (
                  <div className="flex justify-center py-2" aria-hidden>
                    <span style={{ color: 'var(--color-rule)', fontSize: '1.5rem' }}>↓</span>
                  </div>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs italic" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Existe variante específica para <strong>atualização</strong> de revisão prévia, que
            preserva o fluxo original e adiciona "novos registros identificados". Disponível na
            prisma-statement.org.
          </p>
        </div>
      </section>

      {/* Checklist 27 itens */}
      <section id="checklist" className="py-14" style={{ background: 'var(--color-chalk)', scrollMarginTop: '8rem' }}>
        <div className="container-site">
          <div className="container-content mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2">
              <ListChecks size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Checklist — 27 itens</h2>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
              Estrutura completa exigida pelo PRISMA 2020. Cada item indica o que precisa estar
              presente no relatório da revisão.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {checklist.map((sec) => (
              <FadeInSection key={sec.id}>
                <div
                  className="rounded border p-5"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {sec.label}
                  </p>
                  <dl className="flex flex-col gap-3">
                    {sec.items.map((it) => (
                      <div
                        key={it.num}
                        className="flex gap-3 pb-3 border-b last:border-b-0 last:pb-0"
                        style={{ borderColor: 'var(--color-rule)' }}
                      >
                        <Badge variant="gold" className="text-[10px] shrink-0 self-start mt-0.5">
                          {it.num}
                        </Badge>
                        <div>
                          <dt
                            className="font-medium"
                            style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}
                          >
                            {it.titulo}
                          </dt>
                          <dd
                            className="text-sm mt-0.5"
                            style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                          >
                            {it.desc}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Extensões */}
      <section id="extensoes" className="py-14" style={{ background: 'var(--color-paper)', scrollMarginTop: '8rem' }}>
        <div className="container-site">
          <div className="container-content mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Extensões PRISMA</h2>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
              PRISMA tem famílias de extensões para tipos específicos de revisão. Use a extensão
              correta junto do checklist principal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {extensions.map((e) => (
              <div
                key={e.sigla}
                className="rounded border p-5 flex flex-col gap-2"
                style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
              >
                <div className="flex items-center gap-2">
                  <Badge variant="gold" className="text-[10px]">
                    {e.sigla}
                  </Badge>
                  <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-spectral)' }}>
                    {e.nome}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
                  {e.desc}
                </p>
                <p className="text-xs italic" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                  {e.uso}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas */}
      <section id="ferramentas" className="py-14" style={{ background: 'var(--color-chalk)', scrollMarginTop: '8rem' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-5">
            <Wrench size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Ferramentas e plataformas</h2>
          </div>
          <ul className="flex flex-col gap-3">
            {tools.map((t) => (
              <li
                key={t.nome}
                className="rounded border p-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
                style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
              >
                <div className="flex items-center gap-2 sm:min-w-[200px]">
                  <span className="text-base font-medium" style={{ fontFamily: 'var(--font-spectral)' }}>
                    {t.nome}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded"
                    style={{ background: 'rgba(15,52,96,0.08)', color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {t.tipo}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)', flex: 1 }}>
                  {t.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Armadilhas */}
      <section id="armadilhas" className="py-14" style={{ background: 'var(--color-paper)', scrollMarginTop: '8rem' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Armadilhas comuns</h2>
          </div>
          <ul className="flex flex-col gap-4">
            {armadilhas.map((a, i) => (
              <li
                key={a.titulo}
                className="rounded border p-5 flex gap-4"
                style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: 'rgba(230,57,70,0.10)', color: 'var(--color-accent)', fontFamily: 'var(--font-playfair)' }}
                >
                  !
                </span>
                <div>
                  <p className="font-medium mb-1" style={{ fontFamily: 'var(--font-spectral)' }}>
                    {a.titulo}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}>
                    {a.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Exemplo aplicado */}
      <section id="exemplo" className="py-14" style={{ background: 'var(--color-chalk)', scrollMarginTop: '8rem' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-5">
            <Filter size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Exemplo aplicado — passo a passo</h2>
          </div>
          <p className="text-sm mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Cenário fictício: revisão sistemática sobre <em>"efetividade de blockchain na
            rastreabilidade de medicamentos"</em>.
          </p>
          <ol className="flex flex-col gap-5">
            {[
              { p: 'Pergunta PICO/PECO', t: 'P: cadeias farmacêuticas; I: solução blockchain; C: rastreabilidade tradicional (lote/serial); O: integridade de dados ALCOA+, custo, adoção.' },
              { p: 'Pré-registro', t: 'Submeter protocolo ao PROSPERO antes da busca, descrevendo critérios, fontes, métodos.' },
              { p: 'Estratégia de busca', t: 'PubMed + Scopus + Web of Science + IEEE + ACM + Cochrane + literatura cinzenta (Google Scholar, ProQuest dissertations). Sintaxe documentada por base.' },
              { p: 'Triagem dupla cega', t: 'Dois revisores avaliam título/resumo no Rayyan; conflitos resolvidos por terceiro. Reportar n. de excluídos por motivo.' },
              { p: 'Texto completo', t: 'Avaliar artigos elegíveis em texto completo. Excluir com justificativa documentada.' },
              { p: 'Avaliação de viés', t: 'Aplicar ROBINS-I (estudos não-randomizados) ou RoB 2 (RCTs). Em revisões de DSR, usar critérios adaptados.' },
              { p: 'Síntese', t: 'Se heterogeneidade < 50% e estudos comparáveis → meta-análise (RevMan, R metafor). Se não → narrative synthesis com SWiM.' },
              { p: 'Certeza GRADE', t: 'Para cada desfecho-chave, classificar evidência como alta/moderada/baixa/muito baixa.' },
              { p: 'Reportar com PRISMA 2020', t: 'Preencher os 27 itens do checklist + fluxograma. Submeter em periódico que aceite o tema.' },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: 'var(--color-ink)', color: 'var(--color-paper)', fontFamily: 'var(--font-playfair)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-medium" style={{ fontFamily: 'var(--font-spectral)' }}>
                    {step.p}
                  </p>
                  <p className="text-sm leading-relaxed mt-0.5" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                    {step.t}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: 'var(--color-academic)' }}>
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
            Vai conduzir uma revisão sistemática?
          </h2>
          <p
            className="max-w-xl mx-auto mb-6 text-base"
            style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
          >
            Posso apoiar pré-registro PROSPERO, desenho da estratégia de busca, escolha de
            ferramentas e revisão crítica antes da submissão.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Falar sobre minha revisão →
          </Link>
        </div>
      </section>

      {/* Voltar */}
      <section className="py-8" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content">
          <Link
            href="/academico/base-conhecimento"
            className="text-sm transition-colors hover:underline"
            style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
          >
            ← Voltar à Base de Conhecimento
          </Link>
        </div>
      </section>
    </>
  );
}
