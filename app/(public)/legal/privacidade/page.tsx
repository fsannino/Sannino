import type { Metadata } from 'next';
import { Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade do site sannino.com.br — quais dados são coletados, como são armazenados, com quem são compartilhados e como exercer os direitos do titular conforme a LGPD.',
};

const sections = [
  { id: 'quem-somos', label: 'Quem somos' },
  { id: 'dados', label: 'Dados que coletamos' },
  { id: 'finalidade', label: 'Por que coletamos' },
  { id: 'armazenamento', label: 'Como armazenamos' },
  { id: 'compartilhamento', label: 'Compartilhamento' },
  { id: 'cookies', label: 'Cookies e rastreio' },
  { id: 'retencao', label: 'Retenção' },
  { id: 'direitos', label: 'Seus direitos' },
  { id: 'contato', label: 'Contato' },
  { id: 'atualizacoes', label: 'Atualizações' },
];

export default function PrivacidadePage() {
  return (
    <article className="py-12" style={{ background: 'var(--color-paper)' }}>
      <div className="container-content">
        <p className="text-xs mb-2" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Última atualização: maio de 2026 · v1.0
        </p>
        <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
          Política de Privacidade
        </h2>

        {/* Disclaimer */}
        <div
          className="rounded border p-4 mb-8 flex items-start gap-3"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
        >
          <Info size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Esta política reflete o tratamento de dados praticado por este site e segue
            o disposto na <strong>Lei nº 13.709/2018 (LGPD)</strong>. Documento em revisão
            jurídica contínua — sugestões pelo email ao final.
          </p>
        </div>

        {/* TOC */}
        <nav
          className="rounded border p-5 mb-10"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
          aria-label="Sumário"
        >
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Sumário
          </p>
          <ol
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm list-decimal list-inside"
            style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
          >
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:underline">{s.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div
          className="flex flex-col gap-8 text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
        >
          <section id="quem-somos" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              1. Quem somos
            </h3>
            <p>
              O site <strong>sannino.com.br</strong> é mantido pessoalmente por
              <strong> Fabiano Sannino</strong> (CPF/CNPJ disponível mediante solicitação),
              com sede em São Paulo, Brasil. Funciona como hub acadêmico e profissional —
              divulgação de pesquisa, serviços de consultoria e materiais de apoio
              metodológico.
            </p>
          </section>

          <section id="dados" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              2. Dados que coletamos
            </h3>
            <p className="mb-3">Coletamos apenas o estritamente necessário:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              <li>
                <strong>Formulário de contato:</strong> nome, email, organização (opcional),
                assunto e mensagem. Esses dados <strong>não são armazenados em servidor
                próprio</strong> — o formulário abre o cliente de email do visitante e envia
                diretamente para o email pessoal de Fabiano Sannino.
              </li>
              <li>
                <strong>Dados de navegação:</strong> atualmente o site não utiliza ferramentas
                de rastreio nem cookies de terceiros. Quando passar a usar uma analítica
                privacy-friendly (Plausible), apresentaremos banner de consentimento.
              </li>
              <li>
                <strong>Materiais para download:</strong> caso passe a oferecer cadastro
                para acessar materiais (slides, templates), serão coletados nome e email
                — sempre com finalidade explícita.
              </li>
            </ul>
          </section>

          <section id="finalidade" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              3. Por que coletamos
            </h3>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              <li>Responder mensagens enviadas pelo formulário de contato.</li>
              <li>Manter histórico mínimo de comunicação profissional pré-acordada.</li>
              <li>Cumprir obrigações legais (fiscais, regulatórias).</li>
              <li>
                No futuro: enviar comunicações ocasionais sobre novos materiais
                (mediante consentimento expresso e opt-out a qualquer momento).
              </li>
            </ul>
          </section>

          <section id="armazenamento" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              4. Como armazenamos
            </h3>
            <p>
              Mensagens recebidas via formulário ficam armazenadas no provedor de email
              utilizado por Fabiano Sannino (Google Workspace), protegido por autenticação
              de dois fatores. Eventuais bases de cadastro futuras serão armazenadas em
              provedor LGPD-compliant (Supabase, Brevo) com acesso restrito ao titular.
            </p>
          </section>

          <section id="compartilhamento" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              5. Compartilhamento com terceiros
            </h3>
            <p className="mb-3">
              <strong>Não vendemos, alugamos ou cedemos</strong> dados pessoais a terceiros.
              Os únicos sub-processadores envolvidos são fornecedores essenciais à
              operação técnica do site:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              <li><strong>Vercel:</strong> hospedagem da aplicação Next.js.</li>
              <li><strong>Google Workspace:</strong> recebimento de emails do formulário.</li>
              <li>
                Eventuais futuros: Brevo/Resend (email transacional), Supabase (base de dados),
                Plausible (analítica anônima).
              </li>
            </ul>
          </section>

          <section id="cookies" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              6. Cookies e rastreio
            </h3>
            <p className="mb-3">
              Este site <strong>não utiliza cookies próprios</strong>. Usamos{' '}
              <strong>Plausible Analytics</strong>, uma ferramenta de analítica de
              audiência <em>privacy-first</em>, que:
            </p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc">
              <li>Não usa cookies</li>
              <li>Não coleta dados pessoais identificáveis</li>
              <li>Não faz cross-site tracking nem fingerprinting</li>
              <li>Agrega estatísticas em nível de página (visitas, referrer, país, dispositivo) sem construir perfil individual</li>
              <li>É totalmente compatível com LGPD e GDPR — sem necessidade de banner de consentimento (parecer da própria ANPD sobre analíticos anônimos)</li>
            </ul>
            <p className="mt-3">
              Se você preferir bloquear analíticos mesmo assim, extensões como uBlock Origin
              e o próprio Brave/Firefox já bloqueiam Plausible por padrão sem prejudicar
              a navegação.
            </p>
          </section>

          <section id="retencao" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              7. Retenção
            </h3>
            <p>
              Mensagens de contato e correspondências profissionais são mantidas
              por até <strong>5 anos</strong> a partir do último contato, prazo prudencial
              para fins de prestação de serviços, fiscais e regulatórios. Você pode
              solicitar a eliminação imediata a qualquer momento.
            </p>
          </section>

          <section id="direitos" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              8. Seus direitos como titular
            </h3>
            <p className="mb-3">A LGPD assegura, entre outros, os seguintes direitos:</p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação</li>
              <li>Portabilidade</li>
              <li>Eliminação dos dados tratados com seu consentimento</li>
              <li>Informação sobre o compartilhamento</li>
              <li>Revogação do consentimento</li>
            </ul>
            <p className="mt-3">
              Detalhes em <a href="/legal/lgpd" className="underline" style={{ color: 'var(--color-academic)' }}>
              /legal/lgpd</a>.
            </p>
          </section>

          <section id="contato" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              9. Contato
            </h3>
            <p>
              Para exercer qualquer direito, esclarecer dúvidas ou enviar reclamações:
              <br />
              <a href="mailto:fabiano@sannino.com.br" className="underline" style={{ color: 'var(--color-academic)' }}>
                fabiano@sannino.com.br
              </a>
              <br />
              Resposta em até <strong>15 dias úteis</strong>.
            </p>
          </section>

          <section id="atualizacoes" style={{ scrollMarginTop: '8rem' }}>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              10. Atualizações desta política
            </h3>
            <p>
              Esta política pode ser atualizada periodicamente para refletir novas
              funcionalidades do site, ferramentas adotadas ou mudanças regulatórias.
              Mudanças relevantes serão sinalizadas no topo desta página com a data
              de última atualização.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
