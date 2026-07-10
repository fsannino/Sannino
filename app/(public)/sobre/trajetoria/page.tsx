import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, MapPin, Building2 } from 'lucide-react';
import { trajectory, earlyCareerClients } from '@/lib/data/trajectory';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Trajetória — Sobre',
  description:
    'Trajetória profissional de Fabiano Sannino: 25+ anos liderando transformação corporativa, M&A, Data & IA e PMOs em multinacionais (Coca-Cola FEMSA, Dow Chemical, Tate & Lyle, Nexa Resources, EDGE) e na consultoria.',
};

export default function TrajetoriaPage() {
  return (
    <>
      <section className="py-14 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/sobre" className="hover:underline">Sobre</Link>
            <span className="mx-2">›</span>
            <span>Trajetória</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              25+ anos · 16 posições · 5 países
            </p>
            <h1 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Trajetória profissional
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              De analista de PMO em telecom no fim dos anos 1990 a sócio-fundador de
              consultoria em 2025. O fio condutor é o mesmo: transformar organizações
              em ambientes regulados e de alta complexidade — com método.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content">
          <ol className="flex flex-col gap-0">
            {trajectory.map((entry, i) => (
              <li key={i} className="flex gap-5 pb-8 relative">
                {i < trajectory.length - 1 && (
                  <div
                    className="absolute left-[19px] top-12 bottom-0 w-px"
                    style={{ background: 'var(--color-rule)' }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                  style={{
                    background: entry.status === 'current' ? 'var(--color-gold)' : 'var(--color-chalk)',
                    border: '2px solid var(--color-gold)',
                  }}
                  aria-hidden="true"
                >
                  <Briefcase
                    size={14}
                    strokeWidth={1.5}
                    style={{ color: entry.status === 'current' ? 'var(--color-ink)' : 'var(--color-gold)' }}
                  />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {entry.period}
                    </p>
                    {entry.status === 'current' && (
                      <Badge variant="forest" className="text-[10px]">Atual</Badge>
                    )}
                  </div>
                  <h2 className="text-lg mt-1" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}>
                    {entry.company}
                  </h2>
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-spectral)' }}
                  >
                    {entry.role}
                  </p>
                  {entry.location && (
                    <p
                      className="text-xs mt-1 inline-flex items-center gap-1.5"
                      style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      <MapPin size={12} strokeWidth={1.5} />
                      {entry.location}
                    </p>
                  )}
                  {entry.highlights.length > 0 && (
                    <ul className="flex flex-col gap-1.5 mt-3 pl-4">
                      {entry.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="text-sm leading-relaxed relative"
                          style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                        >
                          <span
                            className="absolute -left-3 top-2 w-1 h-1 rounded-full"
                            style={{ background: 'var(--color-gold)' }}
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 border-t" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-content">
          <div className="flex items-center gap-2 mb-3">
            <Building2 size={16} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-xl" style={{ fontFamily: 'var(--font-playfair)' }}>Engajamentos do início de carreira</h2>
          </div>
          <p className="text-sm mb-4" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Clientes atendidos em projetos de implementação SAP, redesenho de processos e
            transformação de negócio entre 1999 e 2014:
          </p>
          <ul className="flex flex-wrap gap-2">
            {earlyCareerClients.map((c) => (
              <li
                key={c}
                className="text-xs px-2.5 py-1 rounded border"
                style={{ borderColor: 'var(--color-rule)', color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content text-center">
          <p className="text-sm mb-3" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Quer trocar uma ideia sobre um caso parecido com algum desses?
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Entrar em contato →
          </Link>
        </div>
      </section>
    </>
  );
}
