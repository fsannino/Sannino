import type { Metadata } from 'next';
import Link from 'next/link';
import { Quiz } from '@/components/metodometro/Quiz';

export const metadata: Metadata = {
  title: 'Metodômetro · Diagnóstico Metodológico em 7 Perguntas',
  description:
    'Ferramenta interativa que recomenda a abordagem e o método mais adequados para sua pesquisa, a partir de 7 perguntas sobre tipo de pergunta, área, estágio teórico e recursos disponíveis.',
};

export default function MetodometroPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/academico" className="hover:underline">Acadêmico</Link>
            <span className="mx-2">›</span>
            <span>Metodômetro</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Ferramenta · Pesquisa científica
            </p>
            <h1 className="text-4xl md:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Metodômetro
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Diagnóstico metodológico em 7 perguntas. Em ~3 minutos, descubra quais
              das 10 metodologias do Hub Acadêmico melhor se ajustam à sua pesquisa
              — pergunta, área, estágio teórico e tempo disponível.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-12" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-content">
          <Quiz />
        </div>
      </section>

      {/* Disclaimer + link pra base */}
      <section className="py-10" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content text-center">
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
          >
            Quer entender as metodologias antes de responder? Veja o panorama completo
            das 3 abordagens e 10 métodos em{' '}
            <Link href="/academico/base-conhecimento" className="underline" style={{ color: 'var(--color-academic)' }}>
              Base de Conhecimento
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
