import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Mic, Quote, Download, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Imprensa — Sobre',
  description:
    'Press kit de Fabiano Sannino: bio resumida, foto em alta resolução, áreas de expertise para entrevistas, contato direto para imprensa em prazo curto.',
};

const expertise = [
  { titulo: 'Transformação corporativa', topicos: ['Programas SAP/ERP em larga escala', 'Adoção e gestão da mudança', 'Cultura organizacional'] },
  { titulo: 'M&A e integração pós-fusão', topicos: ['Captura de sinergia', 'Integração cultural multi-país', 'TSAs e cisões corporativas'] },
  { titulo: 'Data, BI e IA generativa em corporações', topicos: ['Power BI / Tableau executivo', 'LLMs locais em ambientes regulados', 'Automação com agentes (CrewAI, LangGraph)'] },
  { titulo: 'Resolução de disputas', topicos: ['Mediação executiva pós-M&A', 'Conciliação contratual', 'Arbitragem (CIArb)'] },
  { titulo: 'Pesquisa aplicada e regulação', topicos: ['Pós-Doc UNICAMP/FCA — Blockchain + IA em farma', 'ANVISA e ALCOA+', 'Métodos científicos para empresas'] },
];

const bioCurta =
  'Fabiano Sannino é Engenheiro (Bacharel em Eng. Elétrica pelo IMT, Mestre em Eng. Industrial pela PUC-Rio) e Doutor em Administração de Empresas pela FEA-USP. Atua como sócio-fundador da CollabZ Consultoria (São Paulo), com 25+ anos liderando programas de transformação corporativa, integrações de M&A multi-países e iniciativas de Data Analytics e IA Generativa em corporações globais — incluindo Coca-Cola FEMSA, Dow Chemical, Tate & Lyle e Nexa Resources. Conduz Pós-Doutoramento na UNICAMP/FCA sobre blockchain e IA generativa em ambientes farmacêuticos regulados (ANVISA). É Conciliador Judicial pelo TJSP e membro do CIArb (UK).';

const bioCompacta =
  'Fabiano Sannino — sócio-fundador da CollabZ Consultoria; Doutor pela FEA-USP, Pós-Doc em andamento na UNICAMP/FCA. Especialista em transformação corporativa, M&A, Data & IA generativa e resolução de disputas.';

const credenciais = [
  'Doutor em Administração de Empresas — FEA-USP (2021)',
  'MBA em Data Science & Analytics — ESALQ-USP (2024)',
  'Pós-Doutoramento em andamento — UNICAMP/FCA',
  'Mestre em Engenharia Industrial — PUC-Rio (2006)',
  'MCMP™ · CCMP™ (ACMP) · PMP · SAFe · PROSCI · LaMarsh Certified',
  'Conciliador Judicial — TJSP · Membro CIArb (UK)',
];

export default function ImprensaPage() {
  return (
    <>
      <section className="py-14 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/sobre" className="hover:underline">Sobre</Link>
            <span className="mx-2">›</span>
            <span>Imprensa</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Press kit · Bio · Áreas de expertise
            </p>
            <h1 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Imprensa
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Material para jornalistas, podcasts e veículos especializados. Para entrevistas
              em prazo curto, prefira email ou WhatsApp diretos (abaixo).
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
            <div className="flex flex-col gap-3">
              <div
                className="w-full aspect-[3/4] rounded overflow-hidden relative"
                style={{ border: '2px solid var(--color-gold)', boxShadow: '6px 6px 0px rgba(201,168,76,0.15)' }}
              >
                <Image
                  src="/images/sannino.jpg"
                  alt="Fabiano Sannino — foto oficial"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <a
                href="/images/sannino.jpg"
                download="fabiano-sannino.jpg"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded text-sm font-medium border transition-colors hover:bg-chalk"
                style={{ borderColor: 'var(--color-rule)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
              >
                <Download size={14} strokeWidth={2} />
                Baixar foto (JPG)
              </a>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                Uso autorizado para matérias jornalísticas com atribuição. Para outras
                aplicações, solicitar permissão.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Quote size={16} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
                  <h2 className="text-xl" style={{ fontFamily: 'var(--font-playfair)' }}>Bio compacta</h2>
                  <Badge variant="outline" className="text-[10px]">~30 palavras</Badge>
                </div>
                <p
                  className="text-base leading-relaxed italic"
                  style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                >
                  {bioCompacta}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Quote size={16} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
                  <h2 className="text-xl" style={{ fontFamily: 'var(--font-playfair)' }}>Bio resumida</h2>
                  <Badge variant="outline" className="text-[10px]">~120 palavras</Badge>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                >
                  {bioCurta}
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Credenciais-chave</h2>
                <ul className="flex flex-col gap-1.5">
                  {credenciais.map((c) => (
                    <li
                      key={c}
                      className="text-sm leading-relaxed pl-4 relative"
                      style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                    >
                      <span
                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--color-gold)' }}
                        aria-hidden="true"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-chalk)' }}>
        <div className="container-site">
          <div className="flex items-center gap-2 mb-6">
            <Mic size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>Áreas para entrevista</h2>
          </div>
          <p
            className="text-sm mb-6"
            style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
          >
            Tópicos sobre os quais costumo falar em matérias, podcasts e mesas redondas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((e) => (
              <div
                key={e.titulo}
                className="rounded border p-5"
                style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
              >
                <h3 className="text-base mb-3" style={{ fontFamily: 'var(--font-spectral)', fontWeight: 600 }}>
                  {e.titulo}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {e.topicos.map((t) => (
                    <li
                      key={t}
                      className="text-sm pl-4 relative leading-snug"
                      style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}
                    >
                      <span
                        className="absolute left-0 top-2 w-1 h-1 rounded-full"
                        style={{ background: 'var(--color-gold)' }}
                        aria-hidden="true"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-academic)' }}>
        <div className="container-content text-center">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Prazo curto?
          </p>
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
            Contato direto para imprensa
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
            <a
              href="mailto:fabiano@sannino.com.br?subject=[Imprensa]%20Solicita%C3%A7%C3%A3o%20de%20entrevista"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <Mail size={14} strokeWidth={2} />
              fabiano@sannino.com.br
            </a>
            <a
              href="tel:+5511981330567"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-medium border transition-opacity hover:opacity-80"
              style={{ borderColor: 'rgba(250,250,247,0.3)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <Phone size={14} strokeWidth={2} />
              +55 11 98133-0567
            </a>
          </div>
          <p
            className="text-xs mt-5"
            style={{ color: 'rgba(250,250,247,0.55)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Resposta em até 24h em dias úteis. Para imprensa, prazo mais curto sob solicitação.
          </p>
        </div>
      </section>
    </>
  );
}
