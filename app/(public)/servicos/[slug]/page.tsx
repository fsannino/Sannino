import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Users, Workflow, Package, FileSearch, HelpCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { servicesDetail, findServiceDetail } from '@/lib/data/servicesDetail';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { JsonLd } from '@/components/shared/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return servicesDetail.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = findServiceDetail(params.slug);
  if (!s) return { title: 'Serviço não encontrado' };
  return {
    title: s.title,
    description: s.intro,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = findServiceDetail(params.slug);
  if (!s) notFound();

  return (
    <article>
      <JsonLd
        data={[
          serviceSchema({ slug: s.slug, title: s.title, description: s.intro }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Serviços', url: '/servicos' },
            { name: s.title, url: `/servicos/${s.slug}` },
          ]),
        ]}
      />
      {/* Hero */}
      <header className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/servicos" className="hover:underline">Serviços</Link>
            <span className="mx-2">›</span>
            <span>{s.title}</span>
          </nav>
          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              {s.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              {s.title}
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              {s.intro}
            </p>
          </div>
        </div>
      </header>

      {/* Para quem */}
      <section className="py-14" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-5">
            <Users size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Para quem</h2>
          </div>
          <ul className="flex flex-col gap-3">
            {s.forWho.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 text-base"
                style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
              >
                <Check size={16} strokeWidth={2} className="mt-1 shrink-0" style={{ color: 'var(--color-forest)' }} />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como trabalho */}
      <section className="py-14" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-5">
            <Workflow size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Como trabalho</h2>
          </div>
          <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
            {s.approach.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-14" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="container-content mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Package size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Entregáveis típicos</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {s.deliverables.map((d, i) => (
              <FadeInSection key={d.label} delay={(i % 2) * 0.05}>
                <div
                  className="h-full rounded border p-5 flex flex-col gap-2"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <h3 className="text-base" style={{ fontFamily: 'var(--font-spectral)', fontWeight: 600 }}>
                    {d.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}
                  >
                    {d.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Casos */}
      <section className="py-14" style={{ background: 'var(--color-ink)' }}>
        <div className="container-site">
          <div className="container-content mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2">
              <FileSearch size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-paper)' }}>
                Casos representativos
              </h2>
            </div>
            <p
              className="text-sm"
              style={{ color: 'rgba(250,250,247,0.6)', fontFamily: 'var(--font-source-serif)' }}
            >
              Anonimizados conforme NDAs vigentes. Detalhes adicionais sob consulta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {s.cases.map((c, i) => (
              <FadeInSection key={i} delay={i * 0.06}>
                <div
                  className="h-full rounded p-6 flex flex-col gap-3"
                  style={{ background: 'rgba(250,250,247,0.05)', border: '1px solid rgba(250,250,247,0.15)' }}
                >
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {c.contexto}
                  </p>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: 'rgba(250,250,247,0.5)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Desafio
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(250,250,247,0.85)', fontFamily: 'var(--font-source-serif)' }}
                    >
                      {c.desafio}
                    </p>
                  </div>
                  <div className="mt-auto pt-3 border-t" style={{ borderColor: 'rgba(250,250,247,0.15)' }}>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: 'var(--color-forest)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Resultado
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(250,250,247,0.85)', fontFamily: 'var(--font-source-serif)' }}
                    >
                      {c.resultado}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Perguntas frequentes</h2>
          </div>
          <ul className="flex flex-col gap-5">
            {s.faq.map((f) => (
              <li key={f.q} className="pb-5 border-b" style={{ borderColor: 'var(--color-rule)' }}>
                <p
                  className="font-medium mb-2"
                  style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}
                >
                  {f.q}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}
                >
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA + footer do artigo */}
      <section className="py-14" style={{ background: 'var(--color-academic)' }}>
        <div className="container-site text-center">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
            Vamos conversar sobre o seu caso?
          </h2>
          <p
            className="max-w-xl mx-auto mb-6 text-base"
            style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
          >
            Cada engajamento começa com uma conversa sem compromisso. Conte o
            contexto, o desafio e o prazo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Entrar em contato <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
              style={{ borderColor: 'rgba(250,250,247,0.3)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <ArrowLeft size={14} /> Ver outros serviços
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
