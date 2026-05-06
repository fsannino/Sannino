import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, FileText, GraduationCap, Wrench, Mail, Info } from 'lucide-react';
import { InteresseForm } from '@/components/acesso/InteresseForm';

export const metadata: Metadata = {
  title: 'Cadastro · Lista de Espera de Materiais',
  description:
    'Entre na lista de espera dos materiais do Hub Acadêmico de Fabiano Sannino — slides, templates ABNT, checklists CEP/CONEP e ferramentas. Aviso por email quando o acervo for liberado.',
};

const beneficios = [
  { icon: FileText, title: 'Templates ABNT', desc: 'Modelos prontos de TCLE, parecer técnico e relatório de pesquisa.' },
  { icon: GraduationCap, title: 'Slides de aulas', desc: 'Decks usados em FEA-USP, ESALQ-USP e cursos in-company.' },
  { icon: Wrench, title: 'Ferramentas', desc: 'Metodômetro, planilhas estatísticas e checklists de submissão.' },
  { icon: Mail, title: 'Newsletter', desc: 'Avisos pontuais quando há ensaio novo ou material novo no ar.' },
];

export default function CadastroPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b" style={{ background: 'var(--color-academic)', borderColor: 'rgba(250,250,247,0.08)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'rgba(250,250,247,0.55)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Cadastro</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest w-fit px-3 py-1.5 rounded mb-4"
            style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
          >
            <Lock size={12} />
            Acesso gratuito · Em construção
          </div>
          <h1 className="text-4xl md:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-paper)' }}>
            Lista de espera dos materiais
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
          >
            Slides, templates ABNT, checklists CEP/CONEP e ferramentas — em produção. Entre na
            lista de espera e receba aviso quando o acervo for liberado, sem custo e sem spam.
          </p>
        </div>
      </section>

      {/* O que vem */}
      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
          >
            O que está chegando
          </p>
          <h2 className="text-2xl md:text-3xl mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            4 trilhas no acervo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {beneficios.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded border p-5 flex flex-col gap-3"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center"
                    style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base" style={{ fontFamily: 'var(--font-spectral)' }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-content">
          <div
            className="rounded border p-4 mb-6 flex items-start gap-3"
            style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
          >
            <Info size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
              <strong>Como funciona hoje:</strong> o formulário abre o seu cliente de
              email com seus dados pré-formatados. Você confirma o envio e entra numa
              lista de espera mantida manualmente. Quando a área de materiais for
              liberada, você ganha acesso direto sem precisar refazer cadastro.
            </p>
          </div>

          <h2 className="text-xl mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
            Reservar minha vaga
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Leva 30 segundos.
          </p>
          <InteresseForm />
        </div>
      </section>

      {/* LGPD */}
      <section className="py-10" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content text-center">
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Tratamos seus dados conforme a{' '}
            <Link href="/legal/privacidade" className="underline" style={{ color: 'var(--color-academic)' }}>
              Política de Privacidade
            </Link>
            {' '}e a{' '}
            <Link href="/legal/lgpd" className="underline" style={{ color: 'var(--color-academic)' }}>
              LGPD
            </Link>
            . Você pode pedir remoção a qualquer momento por{' '}
            <a href="mailto:fabiano@sannino.com.br" className="underline" style={{ color: 'var(--color-academic)' }}>
              email
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
