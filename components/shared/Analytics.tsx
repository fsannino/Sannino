import Script from 'next/script';

/**
 * Plausible Analytics — privacy-first, sem cookies, LGPD-friendly.
 * Só renderiza se NEXT_PUBLIC_PLAUSIBLE_DOMAIN estiver configurado
 * (via .env.local em dev; via Environment Variables na Vercel em prod).
 *
 * Docs: https://plausible.io/docs/plausible-script
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
