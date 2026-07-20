import type { Metadata } from 'next';
import Link from 'next/link';
import {
  HelpCircle, ArrowRightLeft, Brain, LayoutDashboard, Merge, Scale, FlaskConical,
  BookOpen, Mail, type LucideProps,
} from 'lucide-react';
import { servicesDetail } from '@/lib/data/servicesDetail';
import { JsonLd } from '@/components/shared/JsonLd';
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description:
    'Perguntas frequentes sobre o Hub Acadêmico, contato, colaboração em pesquisa e os serviços de consultoria de Fabiano Sannino — gestão da mudança, M&A, data & IA, PMO, resolução de disputas e research-as-a-service.',
};

const serviceIconMap: Record<string, React.ComponentType<LucideProps>> = {
  'gestao-mudanca': ArrowRightLeft,
  'data-ia': Brain,
  'pmo-governanca': LayoutDashboard,
  'integracao-ma': Merge,
  'resolucao-disputas': Scale,
  'research-as-a-service': FlaskConical,
};

const geralFaq = [
  {
    q: 'O Hub Acadêmico é gratuito?',
    a: 'A maior parte do conteúdo é gratuita e sem cadastro — Base de Conhecimento, Metodômetro, Ética em Pesquisa, Glossário. Materiais para baixar (templates, checklists) exigem apenas um cadastro simples, hoje via lista de espera em /acesso/cadastro, sem custo.',
  },
  {
    q: 'Como funciona o Metodômetro?',
    a: 'É um diagnóstico interativo de 7 perguntas que recomenda as 3 metodologias científicas mais alinhadas ao seu projeto de pesquisa, considerando tipo de pergunta, área, tempo disponível e estágio teórico. Leva cerca de 3 minutos.',
  },
  {
    q: 'Vocês aceitam orientação de TCC ou dissertação fora dos MBAs da ESALQ-USP?',
    a: 'Depende da disponibilidade e da aderência do tema. Veja as modalidades de colaboração acadêmica (coautoria, orientação, banca) em /pesquisa/colaboracao ou entre em contato descrevendo seu projeto.',
  },
  {
    q: 'Qual o prazo de resposta para contato?',
    a: 'Normalmente 1 a 2 dias úteis. Para imprensa em prazo curto, prefira email ou telefone diretos — veja /sobre/imprensa.',
  },
  {
    q: 'Como acompanho novos materiais e artigos publicados?',
    a: 'Entre na lista de espera em /acesso/cadastro. Sem spam — apenas avisos quando algo novo entra no ar (materiais, artigos do blog, atualizações do acervo).',
  },
  {
    q: 'Os dados do site são atualizados automaticamente?',
    a: 'Parcialmente. As publicações do ORCID sincronizam automaticamente (até 1 hora após uma atualização). Orientações acadêmicas e dados do Currículo Lattes são revisados manualmente conforme novas declarações oficiais são emitidas.',
  },
];

export default function FaqPage() {
  const allFaqForSchema = [
    ...geralFaq,
    ...servicesDetail.flatMap((s) => s.faq),
  ];

  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(allFaqForSchema),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Perguntas Frequentes', url: '/faq' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Perguntas Frequentes</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Dúvidas comuns
            </p>
            <h1 className="text-4xl md:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Perguntas Frequentes
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Dúvidas gerais sobre o site e o Hub Acadêmico, e perguntas específicas de
              cada serviço de consultoria. Não encontrou o que procurava?{' '}
              <Link href="/contato" className="underline" style={{ color: 'var(--color-academic)' }}>
                Fale diretamente
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* TOC sticky */}
      <div className="border-b sticky top-16 z-40" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site py-3">
          <nav className="flex gap-1 overflow-x-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            <a
              href="#geral"
              className="text-xs px-3 py-1.5 rounded border whitespace-nowrap transition-colors hover:bg-chalk"
              style={{ borderColor: 'var(--color-rule)', color: 'var(--color-academic)' }}
            >
              Geral · Hub Acadêmico
            </a>
            {servicesDetail.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="text-xs px-3 py-1.5 rounded border whitespace-nowrap transition-colors hover:bg-chalk"
                style={{ borderColor: 'var(--color-rule)', color: 'var(--color-academic)' }}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Geral */}
      <section id="geral" className="py-14" style={{ background: 'var(--color-paper)', scrollMarginTop: '8rem' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Geral · Hub Acadêmico</h2>
          </div>
          <ul className="flex flex-col gap-5">
            {geralFaq.map((f) => (
              <li key={f.q} className="pb-5 border-b" style={{ borderColor: 'var(--color-rule)' }}>
                <p className="font-medium mb-2" style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}>
                  {f.q}
                </p>
                <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}>
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Por serviço */}
      {servicesDetail.map((s, i) => {
        const Icon = serviceIconMap[s.slug] ?? HelpCircle;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className="py-14"
            style={{ background: i % 2 === 0 ? 'var(--color-chalk)' : 'var(--color-paper)', scrollMarginTop: '8rem' }}
          >
            <div className="container-content">
              <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
                  <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>{s.title}</h2>
                </div>
                <Link
                  href={`/servicos/${s.slug}`}
                  className="text-sm font-medium transition-colors hover:underline"
                  style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  Ver página completa →
                </Link>
              </div>
              <ul className="flex flex-col gap-5">
                {s.faq.map((f) => (
                  <li key={f.q} className="pb-5 border-b last:border-b-0 last:pb-0" style={{ borderColor: 'var(--color-rule)' }}>
                    <p className="font-medium mb-2" style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}>
                      {f.q}
                    </p>
                    <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}>
                      {f.a}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

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
            Não encontrou sua pergunta?
          </h2>
          <p
            className="max-w-lg mx-auto mb-6 text-base"
            style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
          >
            Envie uma mensagem direta — respondo normalmente em 1 a 2 dias úteis.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center px-7 py-3.5 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Entrar em contato →
          </Link>
        </div>
      </section>
    </>
  );
}
