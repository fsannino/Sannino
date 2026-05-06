import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Hourglass, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Login · Em construção',
  description:
    'O login do Hub Acadêmico ainda está em construção. Por enquanto, o acervo é gerenciado por lista de espera. Entre na lista para ser avisado quando a área for liberada.',
};

export default function LoginPage() {
  return (
    <section className="py-20" style={{ background: 'var(--color-paper)' }}>
      <div className="container-content">
        <nav className="text-xs mb-8" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span>Login</span>
        </nav>

        <div
          className="rounded border p-8 md:p-10 flex flex-col gap-5"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-11 h-11 rounded flex items-center justify-center shrink-0"
              style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
            >
              <Hourglass size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Em construção
              </p>
              <h1 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                Login estará disponível em breve
              </h1>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
          >
            <p>
              A área autenticada do Hub Acadêmico está sendo construída. Por enquanto,
              os <strong>materiais ainda não estão disponíveis para download</strong> —
              eles ficarão acessíveis quando o sistema de cadastro estiver no ar
              (Sprint 3 do roadmap, com Supabase + autenticação Google/LinkedIn).
            </p>
            <p>
              Enquanto isso, você pode <strong>reservar sua vaga na lista de espera</strong>
              e ser o primeiro a receber acesso quando o acervo for liberado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              href="/acesso/cadastro"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Entrar na lista de espera <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <Link
              href="/academico/base-conhecimento"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
              style={{ borderColor: 'var(--color-rule)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Conteúdo aberto disponível
            </Link>
          </div>
        </div>

        <p className="mt-8 text-sm flex items-center gap-2" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
          <Lock size={14} strokeWidth={1.5} />
          Já tem credenciais? Aguarde — a infraestrutura de autenticação ainda não foi
          publicada. Quando estiver, o login aceitará os mesmos emails da lista de espera.
        </p>
      </div>
    </section>
  );
}
