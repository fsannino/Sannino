import { ExternalLink, BookOpen, Building2, GraduationCap, Info, RefreshCw } from 'lucide-react';
import type { OrcidRecord } from '@/lib/orcid';
import { Badge } from '@/components/ui/badge';

function formatPeriod(a: { startYear: number | null; endYear: number | null; ongoing: boolean }): string {
  if (a.startYear && a.endYear) return `${a.startYear}–${a.endYear}`;
  if (a.startYear && a.ongoing) return `${a.startYear} – Atual`;
  if (a.startYear) return `${a.startYear}`;
  return '—';
}

interface OrcidSectionProps {
  record: OrcidRecord;
}

export function OrcidSection({ record }: OrcidSectionProps) {
  const hasContent =
    record.person.name ||
    record.person.biography ||
    record.person.keywords.length > 0 ||
    record.works.length > 0 ||
    record.employments.length > 0 ||
    record.educations.length > 0;

  return (
    <section className="flex flex-col gap-6">
      <div
        className="rounded border p-5 flex items-start gap-3"
        style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
      >
        <RefreshCw size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Sincronizado com ORCID
            </p>
            <Badge variant="outline" className="text-[10px]">
              Atualização automática
            </Badge>
          </div>
          <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}>
            Estes dados vêm diretamente do ORCID{' '}
            <a
              href={record.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline inline-flex items-center gap-0.5"
              style={{ color: 'var(--color-academic)' }}
            >
              {record.orcidId}
              <ExternalLink size={11} strokeWidth={1.5} />
            </a>
            . Após uma atualização no ORCID, o site reflete em até 1 hora.
          </p>
        </div>
      </div>

      {!record.ok && (
        <div
          className="rounded border p-4 flex items-start gap-3"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
        >
          <Info size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
          <p className="text-sm" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            {record.errorMessage ?? 'Não foi possível carregar dados do ORCID no momento.'}
          </p>
        </div>
      )}

      {record.ok && !hasContent && (
        <div
          className="rounded border p-4 flex items-start gap-3"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
        >
          <Info size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
          <p className="text-sm" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            O perfil ORCID está sendo populado. Assim que houver publicações, educações e vínculos
            cadastrados lá, esta seção mostra tudo automaticamente.
          </p>
        </div>
      )}

      {/* Biografia */}
      {record.person.biography && (
        <div>
          <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-spectral)' }}>Biografia (ORCID)</h3>
          <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
            {record.person.biography}
          </p>
        </div>
      )}

      {/* Keywords */}
      {record.person.keywords.length > 0 && (
        <div>
          <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-spectral)' }}>Áreas de interesse</h3>
          <ul className="flex flex-wrap gap-2">
            {record.person.keywords.map((k) => (
              <li
                key={k}
                className="text-xs px-2.5 py-1 rounded border"
                style={{ borderColor: 'var(--color-rule)', color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Works */}
      {record.works.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h3 className="text-xl" style={{ fontFamily: 'var(--font-spectral)' }}>
              Publicações ({record.works.length})
            </h3>
          </div>
          <ul className="flex flex-col gap-3">
            {record.works.map((w) => (
              <li
                key={w.putCode}
                className="rounded border p-4"
                style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
              >
                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                  {w.year && (
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: 'rgba(201,168,76,0.18)',
                        color: 'var(--color-ink)',
                        fontFamily: 'var(--font-dm-sans)',
                      }}
                    >
                      {w.year}
                    </span>
                  )}
                  {w.type && (
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
                      {w.type.replace(/-/g, ' ')}
                    </span>
                  )}
                </div>
                <p
                  className="font-medium leading-snug"
                  style={{ fontFamily: 'var(--font-spectral)', color: 'var(--color-ink)' }}
                >
                  {w.title}
                </p>
                {w.journal && (
                  <p className="text-sm italic mt-1" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                    {w.journal}
                  </p>
                )}
                {w.url && (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs mt-2 hover:underline"
                    style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {w.doi ? `DOI: ${w.doi}` : 'Acessar'} <ExternalLink size={11} strokeWidth={1.5} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Employments */}
      {record.employments.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Building2 size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h3 className="text-xl" style={{ fontFamily: 'var(--font-spectral)' }}>Vínculos profissionais (ORCID)</h3>
          </div>
          <ul className="flex flex-col gap-2">
            {record.employments.map((a) => (
              <li
                key={a.putCode}
                className="flex items-baseline gap-3 flex-wrap text-sm"
                style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
              >
                <span className="text-xs" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)', minWidth: '100px' }}>
                  {formatPeriod(a)}
                </span>
                <span className="font-medium">{a.organization}</span>
                {a.role && <span style={{ color: 'var(--color-footnote)' }}>— {a.role}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Educations */}
      {record.educations.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h3 className="text-xl" style={{ fontFamily: 'var(--font-spectral)' }}>Formação (ORCID)</h3>
          </div>
          <ul className="flex flex-col gap-2">
            {record.educations.map((a) => (
              <li
                key={a.putCode}
                className="flex items-baseline gap-3 flex-wrap text-sm"
                style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
              >
                <span className="text-xs" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)', minWidth: '100px' }}>
                  {formatPeriod(a)}
                </span>
                <span className="font-medium">{a.organization}</span>
                {a.role && <span style={{ color: 'var(--color-footnote)' }}>— {a.role}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
