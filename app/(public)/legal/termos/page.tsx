import type { Metadata } from 'next';
import { Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de Uso do site sannino.com.br — regras de utilização do conteúdo, propriedade intelectual, limitações de responsabilidade e foro aplicável.',
};

export default function TermosPage() {
  return (
    <article className="py-12" style={{ background: 'var(--color-paper)' }}>
      <div className="container-content">
        <p className="text-xs mb-2" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Última atualização: maio de 2026 · v1.0
        </p>
        <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
          Termos de Uso
        </h2>

        <div
          className="rounded border p-4 mb-8 flex items-start gap-3"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-chalk)' }}
        >
          <Info size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
            Documento em revisão jurídica contínua. Reflete as condições de uso
            praticadas neste site. Sugestões pelo email ao final.
          </p>
        </div>

        <div
          className="flex flex-col gap-8 text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
        >
          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>1. Aceitação</h3>
            <p>
              Ao acessar e utilizar o site <strong>sannino.com.br</strong>, você concorda
              integralmente com estes Termos de Uso. Caso não concorde com qualquer
              cláusula, recomenda-se interromper imediatamente a utilização.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>2. Sobre o site</h3>
            <p>
              O site é um hub pessoal e profissional de Fabiano Sannino — divulgação de
              pesquisa acadêmica, serviços de consultoria, materiais de apoio metodológico
              e informações de contato. Tem caráter <strong>informativo e educacional</strong>.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>3. Conteúdo</h3>
            <p className="mb-3">
              O conteúdo do site reflete opinião e análise profissional do autor com base
              em sua experiência e referências citadas. <strong>Não constitui</strong>:
            </p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc">
              <li>Consultoria personalizada de gestão, change management ou M&A</li>
              <li>Parecer jurídico (mesmo nas áreas de mediação/arbitragem)</li>
              <li>Recomendação de investimento ou fiscal</li>
              <li>Diagnóstico ou recomendação médica</li>
            </ul>
            <p className="mt-3">
              Para serviços profissionais, consulte a página de Serviços e entre em
              contato para um engajamento formal.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              4. Materiais para download
            </h3>
            <p>
              Templates, slides, checklists e demais materiais disponibilizados no site
              são oferecidos <strong>"como estão"</strong>, para uso pessoal e educacional.
              É permitida a redistribuição com atribuição da fonte; é vedada a comercialização
              ou repackaging sem autorização expressa.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              5. Propriedade intelectual
            </h3>
            <p>
              Salvo indicação em contrário, o conteúdo deste site (textos, imagens,
              identidade visual, código aberto deste repositório) é de autoria de Fabiano
              Sannino. É permitido o uso pessoal e educacional com atribuição da fonte e
              link para o original. Reprodução comercial, integral ou substancial requer
              autorização escrita prévia.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              6. Conduta do usuário
            </h3>
            <p className="mb-3">Ao utilizar o site, você concorda em não:</p>
            <ul className="flex flex-col gap-1.5 pl-5 list-disc">
              <li>Tentar acesso não autorizado a sistemas, áreas restritas ou dados</li>
              <li>Realizar engenharia reversa, scraping massivo ou ataques DoS</li>
              <li>Utilizar o formulário de contato para spam, propostas de SEO/backlinks
                ou conteúdo abusivo</li>
              <li>Distribuir os materiais para baixar fora dos termos previstos</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              7. Limitações de responsabilidade
            </h3>
            <p>
              O site é fornecido <strong>"como está"</strong>. Esforço razoável é feito
              para manter precisão e disponibilidade, mas não garantimos: (i) ausência
              de interrupções; (ii) que o conteúdo seja adequado a um caso específico;
              (iii) que os materiais para baixar produzam um resultado em particular.
              Decisões tomadas com base no conteúdo são de exclusiva responsabilidade do
              usuário.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              8. Links externos
            </h3>
            <p>
              O site pode conter links para sites de terceiros (LinkedIn, Lattes, periódicos
              acadêmicos, ferramentas). Não controlamos nem nos responsabilizamos pelo
              conteúdo, políticas ou práticas desses sites.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              9. Alterações dos termos
            </h3>
            <p>
              Estes Termos podem ser revisados periodicamente. A versão vigente é sempre
              a publicada nesta página, com a data de última atualização indicada no topo.
              O uso continuado após mudanças significativas implica aceitação tácita.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              10. Lei aplicável e foro
            </h3>
            <p>
              Estes Termos são regidos pela legislação da <strong>República Federativa
              do Brasil</strong>. Fica eleito o foro da Comarca de São Paulo, SP, para
              dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais
              privilegiado que seja.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-spectral)' }}>
              11. Contato
            </h3>
            <p>
              Dúvidas, sugestões ou solicitações:
              <br />
              <a href="mailto:fabiano@sannino.com.br" className="underline" style={{ color: 'var(--color-academic)' }}>
                fabiano@sannino.com.br
              </a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
