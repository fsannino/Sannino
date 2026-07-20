// Integração com a Public API do ORCID (v3.0).
// Docs: https://info.orcid.org/documentation/api-tutorials/api-tutorial-read-data-on-a-record/
//
// Endpoint base: https://pub.orcid.org/v3.0/{orcid-id}/{endpoint}
// Retorna JSON quando header Accept: application/json.
//
// Estratégia de cache: server-side fetch com Next.js ISR (revalidate 3600s = 1h).
// Quando o usuário atualiza o ORCID, o site reflete em até 1h.

export const ORCID_ID =
  process.env.NEXT_PUBLIC_ORCID_ID ?? '0000-0002-2923-3057';

const ORCID_BASE = 'https://pub.orcid.org/v3.0';

// ————— Tipos —————

export interface OrcidWork {
  putCode: number;
  title: string;
  journal: string | null;
  year: number | null;
  type: string | null;
  doi: string | null;
  url: string | null;
}

export interface OrcidAffiliation {
  putCode: number;
  organization: string;
  role: string | null;
  startYear: number | null;
  endYear: number | null;
  ongoing: boolean;
}

export interface OrcidPerson {
  name: string | null;
  biography: string | null;
  keywords: string[];
  otherNames: string[];
  urls: Array<{ name: string; url: string }>;
}

export interface OrcidRecord {
  orcidId: string;
  orcidUrl: string;
  person: OrcidPerson;
  works: OrcidWork[];
  employments: OrcidAffiliation[];
  educations: OrcidAffiliation[];
  fetchedAt: string; // ISO
  ok: boolean;
  errorMessage?: string;
}

// ————— Fetcher —————

async function orcidFetch(path: string): Promise<any | null> {
  try {
    const res = await fetch(`${ORCID_BASE}/${ORCID_ID}/${path}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600 }, // ISR: revalida a cada 1h
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ————— Parsers —————

function parsePerson(data: any): OrcidPerson {
  if (!data) return { name: null, biography: null, keywords: [], otherNames: [], urls: [] };

  const givenName = data?.name?.['given-names']?.value ?? null;
  const familyName = data?.name?.['family-name']?.value ?? null;
  const name = [givenName, familyName].filter(Boolean).join(' ') || null;

  return {
    name,
    biography: data?.biography?.content ?? null,
    keywords: (data?.keywords?.keyword ?? []).map((k: any) => k?.content).filter(Boolean),
    otherNames: (data?.['other-names']?.['other-name'] ?? []).map((n: any) => n?.content).filter(Boolean),
    urls: (data?.['researcher-urls']?.['researcher-url'] ?? []).map((u: any) => ({
      name: u?.['url-name'] ?? '',
      url: u?.url?.value ?? '',
    })).filter((u: any) => u.url),
  };
}

function parseWorks(data: any): OrcidWork[] {
  if (!data?.group) return [];
  const works: OrcidWork[] = [];
  for (const group of data.group) {
    const summary = group?.['work-summary']?.[0];
    if (!summary) continue;

    const externalIds = summary?.['external-ids']?.['external-id'] ?? [];
    const doiEntry = externalIds.find((e: any) => e?.['external-id-type'] === 'doi');
    const urlEntry = externalIds.find((e: any) => e?.['external-id-url']?.value);

    works.push({
      putCode: summary?.['put-code'] ?? 0,
      title: summary?.title?.title?.value ?? '(sem título)',
      journal: summary?.['journal-title']?.value ?? null,
      year: summary?.['publication-date']?.year?.value ? Number(summary['publication-date'].year.value) : null,
      type: summary?.type ?? null,
      doi: doiEntry?.['external-id-value'] ?? null,
      url: urlEntry?.['external-id-url']?.value ?? (doiEntry ? `https://doi.org/${doiEntry['external-id-value']}` : null),
    });
  }
  return works.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

function parseAffiliations(data: any, kind: 'employment' | 'education'): OrcidAffiliation[] {
  if (!data?.['affiliation-group']) return [];
  const items: OrcidAffiliation[] = [];
  for (const group of data['affiliation-group']) {
    const summary = group?.summaries?.[0]?.[`${kind}-summary`];
    if (!summary) continue;
    const start = summary?.['start-date']?.year?.value ? Number(summary['start-date'].year.value) : null;
    const end = summary?.['end-date']?.year?.value ? Number(summary['end-date'].year.value) : null;
    items.push({
      putCode: summary?.['put-code'] ?? 0,
      organization: summary?.organization?.name ?? '(sem instituição)',
      role: summary?.['role-title'] ?? summary?.['department-name'] ?? null,
      startYear: start,
      endYear: end,
      ongoing: end === null && start !== null,
    });
  }
  return items.sort((a, b) => (b.startYear ?? 0) - (a.startYear ?? 0));
}

// ————— API pública deste módulo —————

export async function getOrcidRecord(): Promise<OrcidRecord> {
  const base: OrcidRecord = {
    orcidId: ORCID_ID,
    orcidUrl: `https://orcid.org/${ORCID_ID}`,
    person: { name: null, biography: null, keywords: [], otherNames: [], urls: [] },
    works: [],
    employments: [],
    educations: [],
    fetchedAt: new Date().toISOString(),
    ok: false,
    errorMessage: undefined,
  };

  const [personRaw, worksRaw, empRaw, eduRaw] = await Promise.all([
    orcidFetch('person'),
    orcidFetch('works'),
    orcidFetch('employments'),
    orcidFetch('educations'),
  ]);

  if (!personRaw && !worksRaw && !empRaw && !eduRaw) {
    base.errorMessage = 'Não foi possível conectar ao ORCID. Tentaremos novamente automaticamente.';
    return base;
  }

  return {
    ...base,
    ok: true,
    person: parsePerson(personRaw),
    works: parseWorks(worksRaw),
    employments: parseAffiliations(empRaw, 'employment'),
    educations: parseAffiliations(eduRaw, 'education'),
  };
}
