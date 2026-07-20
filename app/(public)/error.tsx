'use client';

// Captura erros dentro das rotas públicas. Mantém Navbar + Footer do
// (public)/layout, exibe mensagem consistente com /not-found e permite
// reset (tentar renderizar novamente).

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PublicError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log local no cliente. Em produção, enviar pra Sentry/Plausible custom event.
    // eslint-disable-next-line no-console
    console.error('[public error]', error);
  }, [error]);

  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      <p
        className="text-sm uppercase tracking-widest mb-4"
        style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}
      >
        Erro 500
      </p>
      <h1
        className="text-4xl md:text-5xl mb-6"
        style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
      >
        Algo saiu do trilho
      </h1>
      <p
        className="text-lg max-w-md mb-8"
        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
      >
        Um erro inesperado ocorreu ao carregar esta página. Registramos o
        incidente e uma tentativa de recarregar pode resolver.
      </p>

      {error.digest && (
        <p
          className="text-xs mb-8 font-mono"
          style={{ color: 'var(--color-footnote)' }}
        >
          ID do incidente: <span style={{ color: 'var(--color-ink)' }}>{error.digest}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded transition-opacity hover:opacity-90"
          style={{
            background: 'var(--color-ink)',
            color: 'var(--color-paper)',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded border transition-opacity hover:opacity-80"
          style={{
            borderColor: 'var(--color-rule)',
            color: 'var(--color-ink)',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          ← Voltar ao início
        </Link>
      </div>

      <p
        className="text-xs mt-10 max-w-md"
        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
      >
        Se o problema persistir,{' '}
        <Link
          href="/contato"
          className="underline"
          style={{ color: 'var(--color-academic)' }}
        >
          me avise
        </Link>
        {' '}— envie o ID do incidente se possível.
      </p>
    </div>
  );
}
