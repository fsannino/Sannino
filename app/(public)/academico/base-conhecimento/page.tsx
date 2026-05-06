import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Beaker, Microscope, Users, Network, Compass, Layers, Repeat, FileSearch, Lightbulb, type LucideProps } from 'lucide-react';
import { approaches, methods, type Approach } from '@/lib/data/methodologies';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Base de Conhecimento — Tipos de Metodologia Científica',
  description:
    'Visão geral das principais metodologias científicas para apoio a alunos, mestrandos, doutorandos e pesquisadores: 3 abordagens (quantitativa, qualitativa, mista) e 10 métodos específicos com referências.',
};

const methodIconMap: Record<string, React.ComponentType<LucideProps>> = {
  experimental: Beaker,
  'quase-experimental': Beaker,
  survey: BookOpen,
  'estudo-de-caso': Microscope,
  etnografia: Users,
  fenomenologia: Lightbulb,
  'grounded-theory': Network,
  'pesquisa-acao': Repeat,
  'revisao-sistematica': FileSearch,
  'design-science': Layers,
};

const approachColor: Record<Approach, { bg: string; text: string }> = {
  quanti:    { bg: 'rgba(15,52,96,0.10)',  text: 'var(--color-academic)' },
  quali:     { bg: 'rgba(45,106,79,0.12)', text: 'var(--color-forest)' },
  mista:     { bg: 'rgba(201,168,76,0.18)', text: 'var(--color-ink)' },
  flexivel:  { bg: 'rgba(107,101,96,0.10)', text: 'var(--color-footnote)' },
};

export default function BaseConhecimentoPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/academico" className="hover:underline">Acadêmico</Link>
            <span className="mx-2">›</span>
            <span>Base de Conhecimento</span>
          </nav>
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Apoio ao aluno e pesquisador
            </p>
            <h1 className="text-4xl md:text-5xl mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Tipos de Metodologia Científica
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Um mapa das principais abordagens e métodos da pesquisa científica — para
              ajudar a escolher o caminho metodológico certo para sua dissertação, tese
              ou projeto aplicado. Não é tratado exaustivo: é o ponto de partida.
            </p>
            <p
              className="text-sm leading-relaxed mt-4"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Referências centrais: Gil (2008), Marconi &amp; Lakatos (2017), Sampieri et al.
              (2013), Creswell (2014), Yin (2018), van Aken (2007).
            </p>
          </div>
        </div>
      </section>

      {/* Sub-navegação âncora */}
      <div className="border-b sticky top-16 z-40" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="flex gap-0 overflow-x-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            <a href="#abordagens" className="px-4 py-3 text-sm whitespace-nowrap transition-colors hover:text-academic" style={{ color: 'var(--color-academic)' }}>
              Abordagens
            </a>
            <a href="#metodos" className="px-4 py-3 text-sm whitespace-nowrap transition-colors hover:text-academic" style={{ color: 'var(--color-footnote)' }}>
              Métodos específicos
            </a>
            <a href="#como-escolher" className="px-4 py-3 text-sm whitespace-nowrap transition-colors hover:text-academic" style={{ color: 'var(--color-footnote)' }}>
              Como escolher?
            </a>
          </nav>
        </div>
      </div>

      {/* Section 1 — Abordagens */}
      <section id="abordagens" className="py-20" style={{ background: 'var(--color-paper)', scrollMarginTop: '8rem' }}>
        <div className="container-site">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Camada 1
            </p>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Três abordagens
            </h2>
            <p
              className="max-w-xl mx-auto text-base"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              A primeira escolha de qualquer projeto. Define a lógica de raciocínio, o
              tipo de dado e a forma de análise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approaches.map((approach, i) => (
              <FadeInSection key={approach.id} delay={i * 0.08}>
                <div
                  className="p-8 rounded border h-full flex flex-col gap-4"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
                >
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {approach.short}
                    </p>
                    <h3 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {approach.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                  >
                    {approach.description}
                  </p>

                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Características
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {approach.characteristics.map((c) => (
                        <li
                          key={c}
                          className="text-sm leading-snug pl-4 relative"
                          style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}
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

                  <div className="mt-auto pt-4 border-t" style={{ borderColor: 'var(--color-rule)' }}>
                    <p
                      className="text-xs uppercase tracking-widest mb-1.5"
                      style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Use quando
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                    >
                      {approach.whenUse}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
                      {approach.authors}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Métodos específicos */}
      <section id="metodos" className="py-20" style={{ background: 'var(--color-chalk)', scrollMarginTop: '8rem' }}>
        <div className="container-site">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Camada 2
            </p>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Dez métodos específicos
            </h2>
            <p
              className="max-w-xl mx-auto text-base"
              style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
            >
              Os procedimentos mais usados em ciências sociais aplicadas, administração,
              educação, saúde e engenharias. Cada um pode operar dentro de uma ou mais
              abordagens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {methods.map((method, i) => {
              const Icon = methodIconMap[method.id] ?? Compass;
              const color = approachColor[method.approach];
              return (
                <FadeInSection key={method.id} delay={(i % 3) * 0.06}>
                  <div
                    className="h-full p-6 rounded border flex flex-col gap-3"
                    style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded whitespace-nowrap"
                        style={{ background: color.bg, color: color.text, fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {method.approachLabel}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg leading-tight" style={{ fontFamily: 'var(--font-spectral)' }}>
                        {method.title}
                      </h3>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {method.subtitle}
                      </p>
                    </div>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                    >
                      {method.description}
                    </p>

                    <div className="mt-auto pt-3 border-t" style={{ borderColor: 'var(--color-rule)' }}>
                      <p
                        className="text-xs uppercase tracking-widest mb-1"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        Use quando
                      </p>
                      <p
                        className="text-sm leading-snug"
                        style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-footnote)' }}
                      >
                        {method.whenUse}
                      </p>
                      <p
                        className="text-xs mt-2"
                        style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {method.authors}
                      </p>
                      {method.deepLink && method.deepLinkLabel && (
                        <Link
                          href={method.deepLink}
                          className="inline-flex items-center gap-1 text-xs font-medium mt-3 transition-colors hover:underline"
                          style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {method.deepLinkLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 — Como escolher */}
      <section id="como-escolher" className="py-20" style={{ background: 'var(--color-academic)', scrollMarginTop: '8rem' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Camada 3
              </p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
                Como escolher a metodologia certa?
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}
              >
                Não existe "melhor metodologia" em abstrato — existe a metodologia mais
                adequada para sua pergunta de pesquisa, dado o estágio do conhecimento na
                área, o tipo de evidência aceito pelo seu campo e os recursos disponíveis.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  'Refine sua pergunta antes da metodologia. Se ela começa com "quanto", tende a ser quanti; com "como" ou "por quê", tende a ser quali.',
                  'Verifique o que sua banca/área aceita. Em saúde, ensaios clínicos pesam mais; em administração, estudos de caso e DSR são bem-vindos.',
                  'Considere o estágio teórico do tema. Pouca teoria → exploratório/qualitativo. Teoria madura → confirmatório/quantitativo.',
                  'Avalie tempo, dados e equipe disponíveis. Métodos mistos exigem mais de tudo.',
                ].map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 text-sm leading-relaxed pl-1"
                    style={{ color: 'rgba(250,250,247,0.85)', fontFamily: 'var(--font-source-serif)' }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'var(--color-gold)' }}
                      aria-hidden="true"
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded p-8 flex flex-col gap-4"
              style={{ background: 'rgba(250,250,247,0.05)', border: '1px solid rgba(250,250,247,0.15)' }}
            >
              <Badge variant="gold" className="w-fit">Ferramenta</Badge>
              <h3 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
                Metodômetro
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(250,250,247,0.7)', fontFamily: 'var(--font-source-serif)' }}>
                Em 7 perguntas, descubra quais metodologias melhor se ajustam ao seu
                problema, à sua área e ao tempo que você tem. Indica abordagem, método
                principal e leituras de partida.
              </p>
              <Link
                href="/academico/metodometro"
                className="inline-flex items-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90 w-fit"
                style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
              >
                Iniciar diagnóstico →
              </Link>

              <div className="pt-4 mt-2 border-t" style={{ borderColor: 'rgba(250,250,247,0.15)' }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
                  Próximos passos
                </p>
                <ul className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}>
                  <li>
                    <Link href="/academico/etica-pesquisa" className="hover:underline">→ Ética em Pesquisa (CEP/CONEP, IA)</Link>
                  </li>
                  <li>
                    <Link href="/academico/pesquisa-por-area" className="hover:underline">→ Pesquisa por Área de Conhecimento</Link>
                  </li>
                  <li>
                    <Link href="/academico/materiais" className="hover:underline">→ Materiais para baixar (templates, checklists)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 text-center" style={{ background: 'var(--color-paper)' }}>
        <div className="container-site">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Tem uma pergunta específica?
          </p>
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Posso ajudar na sua banca, qualificação ou projeto
          </h2>
          <p
            className="max-w-xl mx-auto mb-6 text-base"
            style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
          >
            Mentoria metodológica, revisão sistemática, apoio à submissão ao CEP ou
            consultoria em desenho de pesquisa aplicada.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center px-7 py-3.5 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Entrar em contato →
          </Link>
        </div>
      </section>
    </>
  );
}
