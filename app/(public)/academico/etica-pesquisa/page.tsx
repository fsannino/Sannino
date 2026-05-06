import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Bot, AlertTriangle, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ética em Pesquisa · CEP/CONEP, IA e Integridade',
  description:
    'Ética em pesquisa para alunos e pesquisadores: CEP/CONEP e Plataforma Brasil, integridade científica, IA generativa em pesquisa, plagiarismo, conflitos de interesse e proteção de dados (LGPD).',
};

const sections = [
  { id: 'cep', label: 'CEP/CONEP' },
  { id: 'integridade', label: 'Integridade' },
  { id: 'ia', label: 'IA na pesquisa' },
  { id: 'plagiarismo', label: 'Plagiarismo' },
  { id: 'conflito', label: 'Conflito de interesse' },
  { id: 'dados', label: 'Proteção de dados' },
];

export default function EticaPesquisaPage() {
  return (
    <>
      <section className="py-16 border-b" style={{ background: 'var(--color-chalk)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site">
          <nav className="text-xs mb-6" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/academico" className="hover:underline">Acadêmico</Link>
            <span className="mx-2">›</span>
            <span>Ética em Pesquisa</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
              CEP/CONEP · Integridade · IA · LGPD
            </p>
            <h1 className="text-4xl md:text-5xl mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ética em Pesquisa
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
              Cinco frentes que a banca e os comitês cobram — antes, durante e depois
              da coleta. Foco prático: o que precisa ser feito, quando, e onde tropeçar
              menos.
            </p>
          </div>
        </div>
      </section>

      {/* TOC */}
      <div className="border-b sticky top-16 z-40" style={{ background: 'var(--color-paper)', borderColor: 'var(--color-rule)' }}>
        <div className="container-site py-3">
          <nav className="flex gap-1 overflow-x-auto" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs px-3 py-1.5 rounded border whitespace-nowrap transition-colors hover:bg-chalk"
                style={{ borderColor: 'var(--color-rule)', color: 'var(--color-academic)' }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <article className="py-12" style={{ background: 'var(--color-paper)' }}>
        <div className="container-content flex flex-col gap-10 text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>

          <section id="cep" style={{ scrollMarginTop: '8rem' }}>
            <div className="flex items-center gap-2 mb-3">
              <FileCheck size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>1. CEP/CONEP e Plataforma Brasil</h2>
            </div>
            <p className="mb-3">
              Toda pesquisa com seres humanos no Brasil precisa de aprovação ética prévia.
              O <strong>CEP</strong> (Comitê de Ética em Pesquisa) é local — vinculado a
              uma instituição. O <strong>CONEP</strong> é nacional, supervisor, e analisa
              casos específicos (áreas temáticas especiais).
            </p>
            <p className="mb-3"><strong>Submissão:</strong> 100% online via{' '}
              <a href="https://plataformabrasil.saude.gov.br" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--color-academic)' }}>
                Plataforma Brasil
              </a>
              . Documentos centrais:</p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc">
              <li>Projeto detalhado (folha de rosto + cronograma + orçamento)</li>
              <li>TCLE (Termo de Consentimento Livre e Esclarecido)</li>
              <li>TALE (para menores)</li>
              <li>Instrumentos de coleta (questionários, roteiros)</li>
              <li>Carta de anuência da instituição coparticipante</li>
            </ul>
            <p className="mt-3">
              <strong>Prazo médio</strong>: 30-60 dias na maioria dos CEPs. Submissão de
              alterações (emendas) requer nova apreciação.
            </p>
          </section>

          <section id="integridade" style={{ scrollMarginTop: '8rem' }}>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>2. Integridade científica</h2>
            </div>
            <p className="mb-3">
              Conduta responsável evita os "três F": <strong>fabricação</strong> (inventar
              dados), <strong>falsificação</strong> (alterar dados) e <strong>plagiarismo</strong>
              {' '}(usar trabalho alheio sem atribuição).
            </p>
            <p>Outros aspectos críticos:</p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc mt-2">
              <li>Atribuição de autoria — critérios ICMJE: contribuição substancial, redação, aprovação, responsabilidade</li>
              <li>Transparência metodológica — relatar limitações, não só sucessos</li>
              <li>Pré-registro de hipóteses (PROSPERO para revisões; OSF para empíricos)</li>
              <li>Open data quando possível (FAIR principles)</li>
            </ul>
          </section>

          <section id="ia" style={{ scrollMarginTop: '8rem' }}>
            <div className="flex items-center gap-2 mb-3">
              <Bot size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>3. IA generativa na pesquisa</h2>
            </div>
            <p className="mb-3">
              ChatGPT, Claude, Gemini e similares são ferramentas — nem proibidas nem
              irrestritas. As regras estão sendo escritas em tempo real. Princípios atuais:
            </p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc">
              <li><strong>Transparência:</strong> declare uso de IA na seção de métodos (qual ferramenta, para quê)</li>
              <li><strong>Não atribuir autoria a IA:</strong> ICMJE, COPE e maioria dos periódicos rejeitam IA como autor</li>
              <li><strong>Verificar tudo:</strong> alucinações de citações são frequentes — confira referências geradas</li>
              <li><strong>Privacidade de dados sensíveis:</strong> não cole TCLEs, dados clínicos ou propriedade intelectual em LLMs comerciais — prefira LLMs locais (Ollama)</li>
              <li><strong>Plagiarismo automatizado:</strong> texto gerado por IA pode reproduzir conteúdo treinado sem atribuição — risco real</li>
            </ul>
          </section>

          <section id="plagiarismo" style={{ scrollMarginTop: '8rem' }}>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>4. Plagiarismo</h2>
            </div>
            <p className="mb-3">
              Tipos comuns: cópia direta, paráfrase sem atribuição, autoplagiarismo
              (republicar próprio trabalho como inédito), plagiarismo de ideias.
            </p>
            <p>
              <strong>Ferramentas:</strong> Turnitin, iThenticate, plagius. A maioria das
              IES exige relatório de similaridade abaixo de 15-20% (excluindo citações e bibliografia).
            </p>
            <p className="mt-3">
              <strong>Boas práticas:</strong> sempre cite fonte ao parafrasear; use aspas
              para citações diretas; mantenha registro detalhado das fontes durante a redação.
            </p>
          </section>

          <section id="conflito" style={{ scrollMarginTop: '8rem' }}>
            <div className="flex items-center gap-2 mb-3">
              <Users size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>5. Conflito de interesse</h2>
            </div>
            <p>
              Declare relações financeiras, profissionais ou pessoais que possam influenciar
              ou parecer influenciar a pesquisa: financiamentos, vínculos com a empresa
              estudada, parcerias com fornecedores, aconselhamento remunerado. Periódicos
              sérios exigem declaração explícita (ICMJE form). A omissão pode resultar em
              retratação.
            </p>
          </section>

          <section id="dados" style={{ scrollMarginTop: '8rem' }}>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={18} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>6. Proteção de dados (LGPD)</h2>
            </div>
            <p className="mb-3">
              Pesquisas que coletam dados identificáveis (nome, CPF, email, voz, imagem)
              estão sob LGPD. O TCLE deve detalhar:
            </p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc">
              <li>Quais dados são coletados</li>
              <li>Finalidade (vinculada à pergunta de pesquisa)</li>
              <li>Período de retenção</li>
              <li>Compartilhamento com terceiros (sub-processadores, coautores)</li>
              <li>Direitos do titular (acesso, correção, eliminação)</li>
            </ul>
            <p className="mt-3">
              Sempre que possível, anonimize ou pseudo-anonimize os dados antes da análise.
              Em saúde, atenção redobrada para o que a Resolução CNS 466/2012 e 510/2016
              definem como dados sensíveis.
            </p>
          </section>
        </div>
      </article>

      <section className="py-12" style={{ background: 'var(--color-academic)' }}>
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-chalk)' }}>
            Submetendo ao CEP em breve?
          </h2>
          <p className="max-w-xl mx-auto mb-5 text-base" style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}>
            Posso ajudar com revisão pré-submissão, estruturação do TCLE e adequação à LGPD.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Falar sobre meu caso →
          </Link>
        </div>
      </section>
    </>
  );
}
