// Mesma imagem do OpenGraph — Twitter/X consome via meta tag distinta.
// Next.js exige que `runtime`, `alt`, `size` e `contentType` sejam literais
// exportados diretamente (não re-exports), por isso duplicamos aqui.
export { default } from './opengraph-image';

export const runtime = 'edge';
export const alt = 'Fabiano Sannino — Conectando indústria e academia pelo conhecimento';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
