import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, GraduationCap, Microscope, BookOpen, Hourglass, ExternalLink, Users, ListChecks } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { OrcidSection } from '@/components/sobre/OrcidSection';
import { getOrcidRecord } from '@/lib/orcid';
import { orientacoes, bancas } from '@/lib/data/orientacoes';

// ISR — página revalidada a cada 1h para refletir mudanças no ORCID.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Publicações — Sobre',
  description:
    'Publicações acadêmicas e profissionais de Fabiano Sannino — Doutorado FEA-USP (2021), MBA Data Science ESALQ-USP (2024), Pós-Doc UNICAMP/FCA (em andamento). Lista canônica disponível no Currículo Lattes.',
};

const categorias = [
  {
    icon: GraduationCap,
    titulo: 'Trabalhos acadêmicos',
    desc: 'Tese de Doutorado, dissertação de Mestrado e pesquisa de Pós-Doc.',
    items: [
      {
        ano: 'Em andamento',
        titulo: 'Pós-Doutoramento — Blockchain + IA Generativa em ambientes farmacêuticos regulados',
        instituicao: 'UNICAMP / FCA',
        nota: 'Plataforma Rhizom + smart contracts em Solidity para rastreabilidade ALCOA+ em salas limpas NB3/NB4. Linha alinhada à modernização da regulação ANVISA.',
        link: '/pesquisa/postdoc-unicamp',
      },
      {
        ano: '2021',
        titulo: 'Doutorado em Administração de Empresas',
        instituicao: 'FEA-USP — Universidade de São Paulo',
        nota: 'Pesquisa em Gestão da Mudança e Fusões e Aquisições.',
      },
      {
        ano: '2006',
        titulo: 'Mestrado em Engenharia Industrial',
        instituicao: 'PUC-Rio',
        nota: 'Operações e gestão de projetos.',
      },
    ],
  },
  {
    icon: Microscope,
    titulo: 'Artigos e contribuições científicas',
    desc: 'Artigos em periódicos qualis, capítulos de livro e papers em conferências.',
    status: 'soon' as const,
    items: [
      {
        ano: 'Em curadoria',
        titulo: 'Lista de artigos sendo consolidada',
        instituicao: '—',
        nota: 'A lista canônica e atualizada das publicações está no Currículo Lattes (link no rodapé desta página).',
      },
    ],
  },
  {
    icon: BookOpen,
    titulo: 'White papers e relatórios técnicos',
    desc: 'Materiais para empresas, conselhos e bancas — não-acadêmicos.',
    status: 'soon' as const,
    items: [
      {
        ano: 'Em curadoria',
        titulo: 'Materiais selecionados para publicação aberta',
        instituicao: '—',
        nota: 'Alguns relatórios são confidenciais por NDA. Versões anonimizadas serão disponibilizadas progressivamente.',
      },
    ],
  },
];

export default async function PublicacoesPage() {
  const orcidRecord = await getOrcidRecord();
  return (
    <>
      <section className="py-14 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/sobre" className="hover:underline">Sobre</Link>
            <span className="mx-2">›</span>
            <span>Publicações</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Trabalhos acadêmicos · Artigos · White papers
            </p>
            <h1 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Publicações
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Curadoria das publicações acadêmicas e profissionais. Para a lista canônica
              e atualizada de artigos, recomendo o{' '}
              <a
                href="http://lattes.cnpq.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: 'var(--color-academic)' }}
              >
                Currículo Lattes
              </a>{' '}
              <ExternalLink size={11} strokeWidth={1.5} className="inline -mt-0.5" />.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content flex flex-col gap-10">
          {categorias.map((cat) => {
            const Icon = cat.icon;
            return (
              <section key={cat.titulo}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
                  <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {cat.titulo}
                  </h2>
                  {cat.status === 'soon' && (
                    <Badge variant="gold" className="text-[10px] ml-1">
                      <Hourglass size={9} strokeWidth={2} className="inline mr-1" />
                      Em curadoria
                    </Badge>
                  )}
                </div>
                <p
                  className="text-sm mb-5"
                  style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                >
                  {cat.desc}
                </p>
                <ul className="flex flex-col gap-4">
                  {cat.items.map((it, i) => (
                    <li
                      key={i}
                      className="rounded border p-5"
                      style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                    >
                      <p
                        className="text-xs uppercase tracking-widest mb-1"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {it.ano}
                      </p>
                      <p
                        className="font-medium"
                        style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}
                      >
                        {it.titulo}
                      </p>
                      {it.instituicao !== '—' && (
                        <p
                          className="text-sm mt-0.5"
                          style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {it.instituicao}
                        </p>
                      )}
                      {it.nota && (
                        <p
                          className="text-sm leading-relaxed mt-2"
                          style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                        >
                          {it.nota}
                        </p>
                      )}
                      {(it as any).link && (
                        <Link
                          href={(it as any).link}
                          className="inline-flex items-center gap-1 text-sm font-medium mt-3 transition-colors hover:underline"
                          style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          Detalhes da pesquisa →
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      {/* Orientações acadêmicas — extraídas do Lattes */}
      <section className="py-10 border-t" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-content flex flex-col gap-10">
          <section>
            <div className="flex items-center gap-2 mb-2">
              <Users size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                Orientações acadêmicas
              </h2>
            </div>
            <p
              className="text-sm mb-5"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Orientação de trabalhos de conclusão em MBAs da USP — extraído do Currículo Lattes.
            </p>

            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Em andamento ({orientacoes.filter((o) => o.status === 'andamento').length})
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {orientacoes
                .filter((o) => o.status === 'andamento')
                .map((o) => (
                  <li
                    key={o.aluno}
                    className="rounded border p-5"
                    style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                  >
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <Badge variant="outline" className="text-[10px]">{o.periodo}</Badge>
                    </div>
                    <p className="font-medium" style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}>
                      {o.titulo}
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                      Orientando: {o.aluno}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}>
                      {o.curso} — {o.instituicao}
                    </p>
                  </li>
                ))}
            </ul>

            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-forest)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Concluídas ({orientacoes.filter((o) => o.status === 'concluida').length})
            </p>
            <ul className="flex flex-col gap-3">
              {orientacoes
                .filter((o) => o.status === 'concluida')
                .map((o) => (
                  <li
                    key={o.aluno}
                    className="rounded border p-5"
                    style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                  >
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <Badge variant="forest" className="text-[10px]">{o.periodo}</Badge>
                    </div>
                    <p className="font-medium" style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}>
                      {o.titulo}
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                      Orientando: {o.aluno}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}>
                      {o.curso} — {o.instituicao}
                    </p>
                  </li>
                ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <ListChecks size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                Participação em bancas
              </h2>
            </div>
            <p
              className="text-sm mb-5"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Avaliação de trabalhos de conclusão de curso, em conjunto com outros orientadores.
            </p>
            <ul className="flex flex-col gap-3">
              {bancas.map((b) => (
                <li
                  key={b.aluno}
                  className="rounded border p-5"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                >
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <Badge variant="outline" className="text-[10px]">{b.ano}</Badge>
                  </div>
                  <p className="font-medium" style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}>
                    {b.titulo}
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                    Autor(a): {b.aluno}
                    {b.coBanca && ` · Coavaliação: ${b.coBanca}`}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}>
                    {b.curso} — {b.instituicao}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {/* ORCID sync — atualização automática */}
      <section className="py-10 border-t" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
        <div className="container-content">
          <OrcidSection record={orcidRecord} />
        </div>
      </section>

      <section className="py-12 border-t" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-content">
          <div className="flex items-start gap-3">
            <FileText size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)', marginTop: 4 }} />
            <div>
              <h2 className="text-xl mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                Convite a coautoria
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                Pesquisadores e profissionais com interesse comum em Change Management, M&A,
                Blockchain em farma ou IA aplicada — proponha uma colaboração via{' '}
                <Link href="/pesquisa/colaboracao" className="underline" style={{ color: 'var(--color-academic)' }}>
                  /pesquisa/colaboracao
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
