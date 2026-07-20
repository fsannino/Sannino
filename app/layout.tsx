import type { Metadata } from 'next';
import { playfair, spectral, sourceSerif, dmSans, jetbrainsMono } from '@/lib/fonts';
import { JsonLd } from '@/components/shared/JsonLd';
import { Analytics } from '@/components/shared/Analytics';
import { personSchema, websiteSchema } from '@/lib/schema';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sannino.com.br'),
  title: {
    default: 'Fabiano Sannino — Consultor | Pesquisador | Educador',
    template: '%s | Fabiano Sannino',
  },
  description:
    'Hub acadêmico e profissional de Fabiano Sannino — Engenheiro, Doutor pela FEA-USP. Conectando indústria e academia pelo conhecimento: transformação corporativa, M&A, Data & IA Generativa e Resolução de Disputas.',
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
      <JsonLd data={[personSchema(), websiteSchema()]} />
      <Analytics />
    </html>
  );
}
