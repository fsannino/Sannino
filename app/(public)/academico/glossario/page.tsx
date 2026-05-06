import type { Metadata } from 'next';
import Link from 'next/link';
import { glossary, areaLabels } from '@/lib/data/glossario';

export const metadata: Metadata = {
  title: 'Glossário · Hub Acadêmico',
  description:
    'Glossário enxuto de termos frequentes em metodologia científica, estatística, ética em pesquisa e regulação — para mestrandos, doutorandos e revisores.',
};

const areaColor: Record<NonNullable<typeof glossary[number]['area']>, string> = {
  metodologia:  'rgba(15,52,96,0.10)',
  estatistica:  'rgba(45,106,79,0.12)',
  etica:        'rgba(201,168,76,0.18)',
  regulacao:    'rgba(230,57,70,0.10)',
  qualitativa:  'rgba(15,52,96,0.10)',
  quantitativa: 'rgba(45,106,79,0.12)',
};

export default function GlossarioPage() {
  // Agrupa por inicial
  const sorted = [...glossary].sort((a, b) =>
    a.term.localeCompare(b.term, 'pt-BR', { sensitivity: 'base' })
  );
  const initials = Array.from(new Set(sorted.map((t) => t.term[0].toUpperCase()))).sort();

  return (
    <>
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/academico" className="hover:underline">Acadêmico</Link>
            <span className="mx-2">›</span>
            <span>Glossário</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
              Termos da pesquisa científica
            </p>
            <h1 className="text-4xl md:text-5xl mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Glossário
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
              {glossary.length} verbetes enxutos sobre metodologia, estatística, ética e
              regulação. Curado para responder a dúvidas práticas de bancas e CEPs.
            </p>
          </div>
        </div>
      </section>

      {/* Index alfabético */}
      <div className="border-b sticky top-16 z-40" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site py-3">
          <nav className="flex flex-wrap gap-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {initials.map((l) => (
              <a
                key={l}
                href={`#letra-${l}`}
                className="text-xs px-2.5 py-1 rounded border transition-colors hover:bg-chalk"
                style={{ borderColor: 'var(--color-rule)', color: 'var(--color-academic)' }}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content">
          <ul className="flex flex-col gap-6">
            {initials.map((letter) => (
              <li key={letter} id={`letra-${letter}`} style={{ scrollMarginTop: '8rem' }}>
                <h2
                  className="text-3xl mb-3 pb-2 border-b"
                  style={{ fontFamily: 'var(--font-playfair)', borderColor: 'var(--color-rule)', color: 'var(--color-gold)' }}
                >
                  {letter}
                </h2>
                <dl className="flex flex-col gap-4">
                  {sorted
                    .filter((t) => t.term[0].toUpperCase() === letter)
                    .map((t) => (
                      <div key={t.term} className="flex flex-col gap-1.5">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <dt className="text-lg" style={{ fontFamily: 'var(--font-spectral)', fontWeight: 600 }}>
                            {t.term}
                          </dt>
                          {t.area && (
                            <span
                              className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded"
                              style={{ background: areaColor[t.area], color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
                            >
                              {areaLabels[t.area]}
                            </span>
                          )}
                        </div>
                        <dd className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
                          {t.definition}
                        </dd>
                      </div>
                    ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 border-t" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-content text-center">
          <p className="text-sm" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Faltou um termo importante?{' '}
            <Link href="/contato" className="underline" style={{ color: 'var(--color-academic)' }}>
              Sugerir verbete
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
