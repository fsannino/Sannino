'use client';

// Captura erros no ROOT LAYOUT (quando /(public)/error.tsx não consegue
// interceptar). Substitui completamente <html>/<body> — precisa ser
// auto-contido em termos de estilos.
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('[global error]', error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
          background: '#F5F0E8',
          color: '#1A1A2E',
          fontFamily: 'Georgia, "Source Serif 4", serif',
          lineHeight: 1.6,
        }}
      >
        <p
          style={{
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#E63946',
            marginBottom: '1rem',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Erro crítico
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            lineHeight: 1.15,
          }}
        >
          Algo saiu do trilho
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6B6560',
            maxWidth: '480px',
            marginBottom: '2rem',
          }}
        >
          Uma falha inesperada impediu a página de carregar. Uma tentativa
          de recarregar pode resolver.
        </p>

        {error.digest && (
          <p
            style={{
              fontSize: '12px',
              color: '#6B6560',
              marginBottom: '2rem',
              fontFamily: 'ui-monospace, monospace',
            }}
          >
            ID do incidente: <span style={{ color: '#1A1A2E' }}>{error.digest}</span>
          </p>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={reset}
            type="button"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: '4px',
              background: '#1A1A2E',
              color: '#F5F0E8',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Tentar novamente
          </button>
          <a
            href="/"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: '4px',
              border: '1px solid #D4C9B0',
              color: '#1A1A2E',
              textDecoration: 'none',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            ← Voltar ao início
          </a>
        </div>

        <p
          style={{
            fontSize: '12px',
            color: '#6B6560',
            marginTop: '2.5rem',
            maxWidth: '480px',
          }}
        >
          Se o problema persistir,{' '}
          <a href="/contato" style={{ color: '#0F3460', textDecoration: 'underline' }}>
            me avise
          </a>
          {' '}— envie o ID do incidente se possível.
        </p>
      </body>
    </html>
  );
}
