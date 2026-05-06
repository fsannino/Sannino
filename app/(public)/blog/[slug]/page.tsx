import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, Bell } from 'lucide-react';
import { allArticles } from '@/lib/data/static';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = allArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Artigo não encontrado' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const isAvailable = article.status === 'available';

  // Por enquanto, todos os artigos estão "em produção" — render do stub.
  // Quando um artigo for publicado (status: 'available'), substituir por MDX/CMS.
  return (
    <>
      {/* Hero do artigo */}
      <article>
        <header className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
          <div className="container-content">
            <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <span className="mx-2">›</span>
              <span>{article.category}</span>
            </nav>

            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge variant="outline">{article.category}</Badge>
              {!isAvailable && (
                <Badge variant="gold" className="text-[10px]">
                  {article.status === 'soon' ? 'Em produção' : 'Planejado'}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              {article.title}
            </h1>

            <div
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} strokeWidth={1.5} />
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} strokeWidth={1.5} />
                {article.readingTimeMinutes} min de leitura estimados
              </span>
              <span style={{ color: 'var(--color-academic)' }}>por Fabiano Sannino</span>
            </div>
          </div>
        </header>

        {/* Corpo */}
        <div className="py-16" style={{ background: 'var(--color-paper)' }}>
          <div className="container-content">
            {!isAvailable ? (
              <div className="flex flex-col gap-6">
                <p
                  className="text-lg leading-relaxed"
                  style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                >
                  {article.excerpt}
                </p>

                <div
                  className="rounded border p-6 flex flex-col gap-4 mt-2"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                    >
                      <Bell size={16} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {article.status === 'soon' ? 'Em produção' : 'Planejado'}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                      >
                        Este ensaio ainda está em redação. Quer ser avisado quando ele
                        for publicado, ou contribuir com perguntas/casos para enriquecê-lo?
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-medium transition-opacity hover:opacity-90 w-fit"
                    style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Quero ser avisado →
                  </Link>
                </div>
              </div>
            ) : (
              <p style={{ fontFamily: 'var(--font-source-serif)' }}>
                Conteúdo em MDX/CMS — placeholder; substituir quando publicado.
              </p>
            )}
          </div>
        </div>

        {/* Footer do artigo */}
        <div className="py-10 border-t" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
          <div className="container-content flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-academic"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <ArrowLeft size={14} />
              Todos os artigos
            </Link>
            <Link
              href="/contato"
              className="text-sm transition-colors hover:underline"
              style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Comentar / propor pauta →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
