import type { Metadata } from 'next';
import { Info, ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LGPD — Direitos do Titular',
  description:
    'Como sannino.com.br trata dados pessoais sob a Lei Geral de Proteção de Dados (LGPD): bases legais, encarregado, direitos do titular (Art. 18) e como exercê-los.',
};

const direitos = [
  { ref: 'I',    title: 'Confirmação',     desc: 'Confirmar a existência de tratamento dos seus dados.' },
  { ref: 'II',   title: 'Acesso',          desc: 'Acessar os dados que armazenamos sobre você.' },
  { ref: 'III',  title: 'Correção',        desc: 'Corrigir dados incompletos, inexatos ou desatualizados.' },
  { ref: 'IV',   title: 'Anonimização, bloqueio ou eliminação', desc: 'Para dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.' },
  { ref: 'V',    title: 'Portabilidade',   desc: 'Receber seus dados em formato estruturado e legível por máquina.' },
  { ref: 'VI',   title: 'Eliminação',      desc: 'Apagar dados pessoais tratados com base no seu consentimento.' },
  { ref: 'VII',  title: 'Informação sobre compartilhamento', desc: 'Saber com quais entidades públicas e privadas seus dados foram compartilhados.' },
  { ref: 'VIII', title: 'Informação sobre não consentimento', desc: 'Saber sobre a possibilidade de não fornecer consentimento e suas consequências.' },
  { ref: 'IX',   title: 'Revogação',       desc: 'Revogar seu consentimento a qualquer momento, sem ônus.' },
];

export default function LgpdPage() {
  return (
    <article className="py-12" style={{ background: 'var(--color-paper)' }}>
      <div className="container-content">
        <p className="text-xs mb-2" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Última atualização: maio de 2026 · v1.0
        </p>
        <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
          LGPD — Lei Geral de Proteção de Dados
        </h2>

        <div
          className="rounded border p-4 mb-8 flex items-start gap-3"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
        >
          <Info size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Esta página complementa a{' '}
            <a href="/legal/privacidade" className="underline" style={{ color: 'var(--color-academic)' }}>
              Política de Privacidade
            </a>
            {' '}com foco específico nos direitos do titular conforme a Lei nº 13.709/2018.
          </p>
        </div>

        <div
          className="flex flex-col gap-8 text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
        >
          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              O que é a LGPD?
            </h3>
            <p>
              A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) regula o
              tratamento de dados pessoais no Brasil. Estabelece princípios, fundamentos,
              direitos do titular e obrigações para quem coleta, armazena ou processa
              esses dados — pessoa física ou jurídica, pública ou privada.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              Controlador de dados
            </h3>
            <p>
              <strong>Fabiano Sannino</strong> (pessoa física), responsável por decisões
              sobre o tratamento de dados pessoais coletados via sannino.com.br. Documento
              identificador disponível mediante solicitação formal.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              Encarregado pelo tratamento (DPO)
            </h3>
            <p>
              Nesta fase, o próprio titular do site exerce a função de encarregado.
              Contato direto:{' '}
              <a href="mailto:fabiano@sannino.com.br" className="underline" style={{ color: 'var(--color-academic)' }}>
                fabiano@sannino.com.br
              </a>.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              Bases legais utilizadas
            </h3>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              <li>
                <strong>Consentimento</strong> (Art. 7º, I) — para newsletters e materiais
                opcionais, quando aplicável.
              </li>
              <li>
                <strong>Execução de contrato</strong> (Art. 7º, V) — para clientes com
                proposta/contrato de consultoria assinado.
              </li>
              <li>
                <strong>Legítimo interesse</strong> (Art. 7º, IX) — para responder mensagens
                espontâneas enviadas pelo formulário de contato.
              </li>
              <li>
                <strong>Cumprimento de obrigação legal</strong> (Art. 7º, II) — para
                dados fiscais e contábeis vinculados a serviços prestados.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              Seus direitos como titular (Art. 18)
            </h3>
            <ul className="flex flex-col gap-3">
              {direitos.map((d) => (
                <li
                  key={d.ref}
                  className="flex gap-4 items-start pb-3 border-b"
                  style={{ borderColor: 'var(--color-rule)' }}
                >
                  <span
                    className="text-xs px-2 py-1 rounded shrink-0"
                    style={{
                      background: 'rgba(15,52,96,0.08)',
                      color: 'var(--color-academic)',
                      fontFamily: 'var(--font-dm-sans)',
                      minWidth: '2.4rem',
                      textAlign: 'center',
                    }}
                  >
                    {d.ref}
                  </span>
                  <div>
                    <p className="font-medium" style={{ fontFamily: 'var(--font-spectral)' }}>
                      {d.title}
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}
                    >
                      {d.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="exercer"
            className="rounded border p-6"
            style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)', scrollMarginTop: '8rem' }}
          >
            <div className="flex items-start gap-3 mb-3">
              <ShieldCheck size={20} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              <h3 className="text-xl" style={{ fontFamily: 'var(--font-spectral)' }}>
                Como exercer seus direitos
              </h3>
            </div>
            <p className="mb-3">
              Envie uma solicitação clara e objetiva por email:
            </p>
            <a
              href="mailto:fabiano@sannino.com.br?subject=[LGPD]%20Solicitação%20de%20titular%20de%20dados"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <Mail size={14} strokeWidth={2} />
              fabiano@sannino.com.br
            </a>
            <p className="text-sm mt-4" style={{ color: 'var(--color-footnote)' }}>
              <strong>Prazo de resposta:</strong> até 15 dias úteis. Em alguns casos (acesso
              a dados, portabilidade), poderemos solicitar comprovação de identidade para
              proteção do próprio titular.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              Autoridade Nacional de Proteção de Dados (ANPD)
            </h3>
            <p>
              Caso considere que sua solicitação não foi adequadamente atendida, você
              pode peticionar diretamente à{' '}
              <a
                href="https://www.gov.br/anpd/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: 'var(--color-academic)' }}
              >
                ANPD
              </a>
              , autoridade federal responsável pela aplicação da LGPD.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              Atualizações
            </h3>
            <p>
              Esta página será atualizada conforme novos serviços forem incorporados
              (autenticação, materiais com cadastro, newsletter) e conforme orientações
              da ANPD evoluírem. A versão vigente é sempre a publicada nesta URL.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
