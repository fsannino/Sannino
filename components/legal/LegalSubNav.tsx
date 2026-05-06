'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { label: 'Privacidade', href: '/legal/privacidade' },
  { label: 'Termos de Uso', href: '/legal/termos' },
  { label: 'LGPD', href: '/legal/lgpd' },
];

export function LegalSubNav() {
  const pathname = usePathname();
  return (
    <div
      className="border-b sticky top-16 z-40"
      style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}
    >
      <div className="container-site">
        <nav className="flex gap-0 overflow-x-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors"
                style={{
                  borderBottomColor: active ? 'var(--color-academic)' : 'transparent',
                  color: active ? 'var(--color-academic)' : 'var(--color-footnote)',
                  fontWeight: active ? 500 : 400,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
