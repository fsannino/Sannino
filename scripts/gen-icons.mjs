import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';

mkdirSync('public/icons', { recursive: true });

// Cores do design system (Hero / Sobre placeholders)
const ink = '#1A1A2E';
const academic = '#0F3460';
const gold = '#C9A84C';

// SVG 512 — não-maskable (full-bleed, monograma maior)
const svg192 = `
<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${academic}"/>
      <stop offset="100%" stop-color="${ink}"/>
    </linearGradient>
  </defs>
  <rect width="192" height="192" fill="url(#bg)"/>
  <text x="96" y="120" text-anchor="middle"
        font-family="Georgia, serif" font-size="100" font-weight="700"
        fill="${gold}">FS</text>
  <rect x="6" y="6" width="180" height="180" fill="none"
        stroke="${gold}" stroke-opacity="0.6" stroke-width="2"/>
</svg>`;

// SVG 512 — maskable (conteúdo dentro do safe zone — 80% central)
// Safe zone: círculo central com diâmetro 80% (raio 205 px). Padding ~51 px de cada lado.
const svg512 = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${academic}"/>
      <stop offset="100%" stop-color="${ink}"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  <!-- Conteúdo dentro do safe zone (centro, ~310 px) -->
  <text x="256" y="310" text-anchor="middle"
        font-family="Georgia, serif" font-size="220" font-weight="700"
        fill="${gold}">FS</text>
</svg>`;

await sharp(Buffer.from(svg192)).png().toFile('public/icons/icon-192.png');
await sharp(Buffer.from(svg512)).png().toFile('public/icons/icon-512.png');

// Apple touch icon (180×180) — bonus
const svgApple = svg192.replace(/192/g, '180');
await sharp(Buffer.from(svgApple)).resize(180, 180).png().toFile('public/icons/apple-touch-icon.png');

// Favicon (32×32) PNG — Next 14 procura /icon.png ou /favicon.ico
const svgFav = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="${ink}"/>
  <text x="16" y="22" text-anchor="middle"
        font-family="Georgia, serif" font-size="18" font-weight="700"
        fill="${gold}">FS</text>
</svg>`;
await sharp(Buffer.from(svgFav)).png().toFile('public/icons/favicon-32.png');

console.log('Done.');
