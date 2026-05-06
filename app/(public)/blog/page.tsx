import type { Metadata } from 'next';
import Link from 'next/link';
import { allArticles } from '@/lib/data/static';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FadeInSection } from '@/components/shared/FadeInSection';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Blog de Fabiano Sannino — ensaios e notas sobre transformação corporativa, M&A, Data & IA Generativa, gestão da mudança, metodologia científica e resolução de disputas.',
};

const categoryFilters = ['Todos', 'M&A', 'Pesquisa', 'Analytics', 'Gestão da Mudança', 'Metodologia'];

export default function BlogPage() {
  const sorted = [...allArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      {/* Hero interno */}
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Blog</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Ensaios, notas e análises
            </p>
            <h1 className="text-4xl md:text-5xl mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Blog
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Reflexões a partir de 20+ anos em projetos de transformação, M&A e pesquisa
              aplicada — e do que aprendo nas bancas, conselhos e salas de aula. Em construção:
              os primeiros artigos saem em breve.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros (visual — sem JS por enquanto) */}
      <div className="border-b" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site py-4">
          <div className="flex flex-wrap gap-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {categoryFilters.map((c, i) => (
              <span
                key={c}
                className="text-xs px-3 py-1.5 rounded border"
                style={{
                  borderColor: i === 0 ? 'var(--color-academic)' : 'var(--color-rule)',
                  color: i === 0 ? 'var(--color-academic)' : 'var(--color-footnote)',
                  background: i === 0 ? 'rgba(15,52,96,0.08)' : 'transparent',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lista */}
      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((article, i) => (
              <FadeInSection key={article.slug} delay={(i % 3) * 0.06}>
                <Link href={article.href} className="block h-full group">
                  <Card className="h-full flex flex-col transition-shadow hover:shadow-card">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <Badge variant="outline">{article.category}</Badge>
                        {article.status !== 'available' && (
                          <Badge variant="gold" className="text-[10px]">
                            {article.status === 'soon' ? 'Em breve' : 'Planejado'}
                          </Badge>
                        )}
                        <span
                          className="text-xs"
                          style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {article.readingTimeMinutes} min
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-academic transition-colors leading-snug">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pt-3">
                      <CardDescription className="leading-relaxed">{article.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <time
                        dateTime={article.publishedAt}
                        className="text-xs"
                        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {formatDate(article.publishedAt)}
                      </time>
                    </CardFooter>
                  </Card>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA newsletter */}
      <section className="py-16" style={{ background: 'var(--color-academic)' }}>
        <div className="container-site text-center">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Não perca os primeiros artigos
          </p>
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
            Receba os artigos novos por email
          </h2>
          <p
            className="max-w-lg mx-auto mb-6 text-base"
            style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
          >
            Sem spam. Apenas quando há ensaio novo no ar — geralmente uma vez ao mês.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center px-7 py-3.5 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Quero receber →
          </Link>
        </div>
      </section>
    </>
  );
}
