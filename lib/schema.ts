// Helpers para gerar objetos Schema.org / JSON-LD.
// Consumidos pelo componente <JsonLd> que injeta <script type="application/ld+json">.

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sannino.vercel.app';

export function abs(path: string): string {
  return path.startsWith('http') ? path : `${BASE_URL}${path}`;
}

// ————— Person / Sameas —————
export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Fabiano Sannino',
  url: BASE_URL,
  image: abs('/images/sannino.jpg'),
  jobTitle: 'Sócio-fundador · Consultor · Pesquisador · Educador',
  worksFor: {
    '@type': 'Organization',
    name: 'CollabZ Consultoria',
    url: BASE_URL,
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Universidade de São Paulo (FEA-USP)', url: 'https://www.fea.usp.br/' },
    { '@type': 'CollegeOrUniversity', name: 'ESALQ-USP',                            url: 'https://www.esalq.usp.br/' },
    { '@type': 'CollegeOrUniversity', name: 'UNICAMP (FCA)',                        url: 'https://www.fca.unicamp.br/' },
    { '@type': 'CollegeOrUniversity', name: 'PUC-Rio',                              url: 'https://www.puc-rio.br/' },
    { '@type': 'CollegeOrUniversity', name: 'Instituto Mauá de Tecnologia',         url: 'https://maua.br/' },
  ],
  hasCredential: [
    'MCMP™ (Master Certified Management Professional) — ACMP',
    'CCMP™ (Certified Change Management Professional) — ACMP',
    'PMP — Project Management Institute',
    'SAFe Agilist — Scaled Agile',
    'PROSCI Change Practitioner',
    'LaMarsh Certified Change Manager',
    'CIArb (UK) — Chartered Institute of Arbitrators',
    'Conciliador Judicial — TJSP',
  ],
  knowsAbout: [
    'Transformação Corporativa',
    'Gestão da Mudança (Change Management)',
    'M&A · Integração pós-fusão',
    'PMO e Portfólio Estratégico',
    'Data Analytics & Business Intelligence',
    'IA Generativa aplicada',
    'Métodos Alternativos de Resolução de Conflitos (Arbitragem, Mediação, Conciliação)',
    'Blockchain em ambientes regulados (ANVISA, ALCOA+)',
  ],
  sameAs: [
    'https://linkedin.com/in/sannino',
    'http://lattes.cnpq.br/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressCountry: 'BR',
  },
  email: 'mailto:fabiano@sannino.com.br',
  telephone: '+55-11-98133-0567',
  description:
    'Sócio-fundador da CollabZ Consultoria. Engenheiro (IMT, PUC-Rio), Doutor pela FEA-USP, Pós-Doc em andamento na UNICAMP/FCA. 25+ anos em transformação corporativa, M&A, Data & IA e resolução de disputas.',
});

// ————— Website —————
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Fabiano Sannino',
  description: 'Hub acadêmico e profissional — conectando indústria e academia pelo conhecimento.',
  publisher: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'pt-BR',
});

// ————— Service —————
export const serviceSchema = (opts: {
  slug: string;
  title: string;
  description: string;
  serviceType?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': abs(`/servicos/${opts.slug}#service`),
  name: opts.title,
  description: opts.description,
  serviceType: opts.serviceType ?? opts.title,
  provider: { '@id': `${BASE_URL}/#person` },
  areaServed: [
    { '@type': 'Country', name: 'Brasil' },
    { '@type': 'Place', name: 'América Latina' },
  ],
  url: abs(`/servicos/${opts.slug}`),
});

// ————— Article (Blog) —————
export const articleSchema = (opts: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': abs(`/blog/${opts.slug}#article`),
  headline: opts.title,
  description: opts.excerpt,
  articleSection: opts.category,
  datePublished: opts.publishedAt,
  author: { '@id': `${BASE_URL}/#person` },
  publisher: {
    '@type': 'Organization',
    name: 'Fabiano Sannino',
    logo: {
      '@type': 'ImageObject',
      url: abs('/icons/icon-512.png'),
    },
  },
  image: abs('/opengraph-image'),
  url: abs(`/blog/${opts.slug}`),
  inLanguage: 'pt-BR',
});

// ————— BreadcrumbList —————
export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(item.url),
  })),
});

// ————— FAQPage —————
export const faqPageSchema = (items: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
});

// ————— ProfessionalService (para /servicos landing) —————
export const professionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#collabz`,
  name: 'CollabZ Consultoria',
  founder: { '@id': `${BASE_URL}/#person` },
  areaServed: [
    { '@type': 'Country', name: 'Brasil' },
    { '@type': 'Place', name: 'América Latina' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressCountry: 'BR',
  },
  url: BASE_URL,
});
