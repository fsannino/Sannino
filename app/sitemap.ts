import type { MetadataRoute } from 'next';
import { servicesDetail } from '@/lib/data/servicesDetail';
import { allArticles } from '@/lib/data/static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sannino.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/',                                priority: 1.0, changeFrequency: 'weekly' },
    { path: '/sobre',                           priority: 0.9, changeFrequency: 'monthly' },
    { path: '/sobre/trajetoria',                priority: 0.7, changeFrequency: 'monthly' },
    { path: '/sobre/publicacoes',               priority: 0.7, changeFrequency: 'monthly' },
    { path: '/sobre/imprensa',                  priority: 0.7, changeFrequency: 'monthly' },
    { path: '/servicos',                        priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pesquisa',                        priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pesquisa/postdoc-unicamp',        priority: 0.8, changeFrequency: 'monthly' },
    { path: '/pesquisa/colaboracao',            priority: 0.7, changeFrequency: 'monthly' },
    { path: '/academico',                       priority: 0.9, changeFrequency: 'weekly' },
    { path: '/academico/base-conhecimento',     priority: 0.9, changeFrequency: 'monthly' },
    { path: '/academico/metodometro',           priority: 0.8, changeFrequency: 'monthly' },
    { path: '/academico/etica-pesquisa',        priority: 0.8, changeFrequency: 'monthly' },
    { path: '/academico/pesquisa-por-area',     priority: 0.8, changeFrequency: 'monthly' },
    { path: '/academico/materiais',             priority: 0.7, changeFrequency: 'monthly' },
    { path: '/academico/glossario',             priority: 0.7, changeFrequency: 'monthly' },
    { path: '/academico/prisma',                priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog',                            priority: 0.9, changeFrequency: 'weekly' },
    { path: '/contato',                         priority: 0.8, changeFrequency: 'yearly' },
    { path: '/faq',                             priority: 0.6, changeFrequency: 'monthly' },
    { path: '/acesso/cadastro',                 priority: 0.6, changeFrequency: 'yearly' },
    { path: '/acesso/login',                    priority: 0.4, changeFrequency: 'yearly' },
    { path: '/legal/privacidade',               priority: 0.3, changeFrequency: 'yearly' },
    { path: '/legal/termos',                    priority: 0.3, changeFrequency: 'yearly' },
    { path: '/legal/lgpd',                      priority: 0.3, changeFrequency: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicesDetail.map((s) => ({
    url: `${BASE_URL}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = allArticles.map((a) => ({
    url: `${BASE_URL}${a.href}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'yearly',
    priority: a.status === 'available' ? 0.8 : 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
