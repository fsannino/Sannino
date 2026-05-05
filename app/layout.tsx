import type { Metadata } from 'next';
import { playfair, spectral, sourceSerif, dmSans, jetbrainsMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sannino.com.br'),
  title: {
    default: 'Fabiano Sannino — Consultor | Pesquisador | Educador',
    template: '%s | Fabiano Sannino',
  },
  description:
    'Hub acadêmico e profissional de Fabiano Sannino — Doutor pela FEA-USP, Master Licensee LaMarsh BR/LATAM. Transformação corporativa, M&A, Data & IA Generativa e Resolução de Disputas.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Fabiano Sannino',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={[
        playfair.variable,
        spectral.variable,
        sourceSerif.variable,
        dmSans.variable,
        jetbrainsMono.variable,
      ].join(' ')}
    >
      <body>{children}</body>
    </html>
  );
}
