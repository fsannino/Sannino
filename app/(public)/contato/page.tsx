import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, Linkedin, GraduationCap, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contato/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com Fabiano Sannino: consultoria em transformação corporativa, M&A, Data & IA, mentoria acadêmica e imprensa. Resposta normalmente em 1 a 2 dias úteis.',
};

const directContacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fabiano@sannino.com.br',
    href: 'mailto:fabiano@sannino.com.br',
    primary: true,
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '+55 11 98133-0567',
    href: 'tel:+5511981330567',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sannino',
    href: 'https://linkedin.com/in/sannino',
    external: true,
  },
  {
    icon: GraduationCap,
    label: 'Lattes',
    value: 'CV Lattes / CNPq',
    href: 'http://lattes.cnpq.br/',
    external: true,
  },
];

const meta = [
  { icon: MapPin, label: 'São Paulo, Brasil · Dupla cidadania (BR/IT)' },
  { icon: Clock, label: 'Resposta em 1 a 2 dias úteis · Seg–Sex' },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Contato</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Fale comigo
            </p>
            <h1 className="text-4xl md:text-5xl mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Vamos conversar?
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Seja para um projeto de consultoria, mentoria acadêmica, colaboração de
              pesquisa ou entrevista para imprensa. Quanto mais contexto você trouxer
              (desafio, prazo, recursos), mais útil será minha resposta.
            </p>
          </div>
        </div>
      </section>

      {/* Form + canais diretos */}
      <section className="py-16" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                Envie uma mensagem
              </h2>
              <p
                className="text-sm mb-8"
                style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
              >
                Preencha o formulário e o seu cliente de email abrirá com a mensagem
                pré-formatada — basta confirmar o envio.
              </p>
              <ContactForm />
            </div>

            {/* Canais diretos */}
            <aside className="flex flex-col gap-6">
              <div
                className="rounded border p-6 flex flex-col gap-4"
                style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  Canais diretos
                </p>
                <ul className="flex flex-col gap-4">
                  {directContacts.map((c) => {
                    const Icon = c.icon;
                    return (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="flex items-start gap-3 group"
                        >
                          <div
                            className="w-9 h-9 rounded flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                          >
                            <Icon size={16} strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col">
                            <p
                              className="text-xs uppercase tracking-widest"
                              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                            >
                              {c.label}
                            </p>
                            <p
                              className="text-sm group-hover:text-academic transition-colors"
                              style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)', wordBreak: 'break-word' }}
                            >
                              {c.value}
                            </p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div
                className="rounded border p-6 flex flex-col gap-3"
                style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
              >
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                >
                  Sobre os contatos
                </p>
                <ul className="flex flex-col gap-2.5">
                  {meta.map((m) => {
                    const Icon = m.icon;
                    return (
                      <li
                        key={m.label}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                      >
                        <Icon size={14} strokeWidth={1.5} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                        <span>{m.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Para imprensa em prazo curto, prefira email ou LinkedIn diretos. Não
                respondo a propostas de SEO/links/backlinks por aqui.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
