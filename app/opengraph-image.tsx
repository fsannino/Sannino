import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Fabiano Sannino — Conectando indústria e academia pelo conhecimento';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '80px',
          background: 'linear-gradient(160deg, #0F3460 0%, #1A1A2E 100%)',
          color: '#F5F0E8',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Topo — eyebrow */}
        <div
          style={{
            display: 'flex',
            fontSize: '20px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#C9A84C',
          }}
        >
          Fabiano Sannino
        </div>

        {/* Meio — headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '68px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 700,
              color: '#F5F0E8',
              maxWidth: '900px',
            }}
          >
            Conectando indústria e{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic', padding: '0 12px' }}>
              academia
            </span>{' '}
            pelo conhecimento.
          </div>
        </div>

        {/* Rodapé — credenciais + moldura */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '2px solid rgba(201,168,76,0.3)',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div style={{ display: 'flex', fontSize: '16px', color: '#F5F0E8', opacity: 0.85 }}>
              Consultor · Pesquisador · Educador
            </div>
            <div style={{ display: 'flex', fontSize: '14px', color: '#C9A84C', opacity: 0.75 }}>
              MCMP™ · CCMP™ · PMP · SAFe · Doutor FEA-USP · Pós-Doc UNICAMP
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '18px',
              color: '#C9A84C',
              fontFamily: 'monospace',
            }}
          >
            sannino.com.br
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
