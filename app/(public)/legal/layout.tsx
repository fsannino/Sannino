import Link from 'next/link';
import { LegalSubNav } from '@/components/legal/LegalSubNav';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hero comum */}
      <section className="py-14 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-4" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Legal</span>
          </nav>
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Documentos legais
          </p>
          <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Política, Termos e LGPD
          </h1>
        </div>
      </section>

      {/* Sub-navegação */}
      <LegalSubNav />

      {children}
    </>
  );
}
