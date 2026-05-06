import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, GraduationCap, ListChecks, Calculator, FileSignature, Lock, Hourglass, type LucideProps } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Materiais · Templates, Slides e Checklists',
  description:
    'Materiais para apoio à pesquisa: templates ABNT, slides de aulas, checklists CEP/CONEP, planilhas estatísticas e modelos de TCLE. Acesso gratuito mediante cadastro.',
};

interface Material {
  icon: React.ComponentType<LucideProps>;
  title: string;
  format: string;
  description: string;
}

const materiais: Material[] = [
  { icon: FileText, title: 'Template ABNT — Dissertação/Tese', format: 'DOCX + LaTeX', description: 'Modelo configurado com formatação NBR 14724, sumário automático, lista de figuras/tabelas, citações no Word/Google Docs e classe LaTeX para mestrandos exigentes.' },
  { icon: FileSignature, title: 'TCLE em 4 versões', format: 'DOCX', description: 'TCLE para adultos, TALE para crianças (assentimento), versão para entrevista qualitativa e versão para coleta de dados secundários — todos LGPD-ready.' },
  { icon: ListChecks, title: 'Checklist de submissão CEP', format: 'PDF interativo', description: 'Lista completa de documentos e verificações antes de submeter à Plataforma Brasil. Reduz retornos de pendência em ~70%.' },
  { icon: GraduationCap, title: 'Slides — Metodologia Quantitativa', format: 'PPTX + Keynote', description: 'Deck usado em aulas de FEA-USP e ESALQ-USP — tipos de variáveis, escalas, coleta, análise descritiva e inferencial. Editáveis e atribuíveis.' },
  { icon: GraduationCap, title: 'Slides — Metodologia Qualitativa', format: 'PPTX + Keynote', description: 'Análise de conteúdo (Bardin), estudo de caso (Yin), grounded theory (Charmaz). Casos brasileiros, exemplos de codificação.' },
  { icon: Calculator, title: 'Planilha de análise estatística', format: 'XLSX', description: 'Calculadora de tamanho de amostra (G*Power-style), descritivas com gráficos automáticos, t-test/ANOVA básicos. Sem precisar do R.' },
];

export default function MateriaisPage() {
  return (
    <>
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/academico" className="hover:underline">Acadêmico</Link>
            <span className="mx-2">›</span>
            <span>Materiais</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
              Templates · Slides · Checklists
            </p>
            <h1 className="text-4xl md:text-5xl mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Materiais
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
              Acervo em produção: 6 materiais já em curadoria final, +30 planejados.
              Liberação por cadastro gratuito quando a área autenticada estrear (Sprint 3).
            </p>
          </div>
        </div>
      </section>

      {/* Aviso */}
      <section className="py-8" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content">
          <div
            className="rounded border p-5 flex items-start gap-3"
            style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
          >
            <Hourglass size={20} strokeWidth={1.5} className="shrink-0 mt-0.5" style={{ color: 'var(--color-gold)' }} />
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-source-serif)' }}>
                <strong>Status atual:</strong> os materiais abaixo estão em curadoria final.
                Como o sistema de cadastro/login ainda não foi publicado, a liberação será
                por <strong>lista de espera</strong>. Você entra na lista, recebe os materiais
                pelo email cadastrado quando o acervo abrir.
              </p>
              <Link
                href="/acesso/cadastro"
                className="inline-flex items-center gap-1.5 text-sm font-medium w-fit transition-colors hover:underline"
                style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Entrar na lista de espera →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
            Pré-catálogo (curadoria final)
          </p>
          <h2 className="text-2xl md:text-3xl mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Em produção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {materiais.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="rounded border p-5 flex flex-col gap-3"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded"
                      style={{ background: 'rgba(201,168,76,0.18)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      <Lock size={9} className="inline mr-1" />
                      Em breve
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base leading-tight" style={{ fontFamily: 'var(--font-spectral)' }}>
                      {m.title}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-mono)' }}>
                      {m.format}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
                    {m.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA cadastro */}
      <section className="py-12" style={{ background: 'var(--color-academic)' }}>
        <div className="container-site text-center">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
            Acesso gratuito · Sem spam
          </p>
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
            Reserve sua vaga na lista de espera
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-base" style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}>
            Você entra com nome, email e perfil acadêmico. Quando os materiais abrirem,
            recebe um email com link de acesso.
          </p>
          <Link
            href="/acesso/cadastro"
            className="inline-flex items-center px-7 py-3.5 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Entrar na lista de espera →
          </Link>
        </div>
      </section>
    </>
  );
}
