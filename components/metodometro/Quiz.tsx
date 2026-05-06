'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { questions, computeRanking, type MethodId } from '@/lib/data/metodometro';
import { methods as methodsData } from '@/lib/data/methodologies';

export function Quiz() {
  const [step, setStep] = useState(0); // 0 = intro, 1..n = questions, n+1 = result
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const total = questions.length;
  const isResult = step === total + 1;
  const currentQ = step >= 1 && step <= total ? questions[step - 1] : null;

  const ranking = useMemo(() => (isResult ? computeRanking(answers) : []), [isResult, answers]);
  const top3 = ranking.slice(0, 3);

  const handleSelect = (optId: string) => {
    if (!currentQ) return;
    setAnswers((a) => ({ ...a, [currentQ.id]: optId }));
  };

  const goNext = () => setStep((s) => Math.min(s + 1, total + 1));
  const goPrev = () => setStep((s) => Math.max(s - 1, 0));
  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  // Progress
  const progressPct = step === 0 ? 0 : isResult ? 100 : Math.round(((step - 1) / total) * 100);

  return (
    <div className="flex flex-col gap-6">
      {/* Progress bar */}
      {!isResult && step > 0 && (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            <span>Pergunta {step} de {total}</span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1 w-full rounded overflow-hidden" style={{ background: 'var(--color-rule)' }}>
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${progressPct}%`, background: 'var(--color-gold)' }}
            />
          </div>
        </div>
      )}

      {/* Intro */}
      {step === 0 && (
        <div
          className="rounded border p-8 flex flex-col gap-5"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-11 h-11 rounded flex items-center justify-center"
              style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold)' }}
            >
              <Sparkles size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
                7 perguntas · ~3 minutos
              </p>
              <h2 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                Como funciona o Metodômetro
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-base leading-relaxed" style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}>
            <p>
              Você responde 7 perguntas sobre sua pesquisa — tipo de pergunta, área,
              estágio teórico, tempo. O Metodômetro pontua cada metodologia com base
              nas suas respostas e devolve um <strong>ranking dos 3 métodos mais
              alinhados</strong> ao seu projeto.
            </p>
            <p>
              É um ponto de partida, não uma sentença. A escolha final depende da sua
              banca, da sua área e da sua leitura crítica da literatura.
            </p>
          </div>
          <Button onClick={() => setStep(1)} variant="default" size="lg" className="w-fit">
            Começar <ArrowRight size={16} strokeWidth={2} />
          </Button>
        </div>
      )}

      {/* Pergunta */}
      {currentQ && (
        <div
          className="rounded border p-6 md:p-8 flex flex-col gap-5"
          style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
        >
          <div>
            <h2 className="text-xl md:text-2xl leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
              {currentQ.prompt}
            </h2>
            {currentQ.hint && (
              <p className="text-sm mt-1.5" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                {currentQ.hint}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {currentQ.options.map((opt) => {
              const selected = answers[currentQ.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id)}
                  className="text-left rounded border p-4 transition-all hover:shadow-card"
                  style={{
                    borderColor: selected ? 'var(--color-academic)' : 'var(--color-rule)',
                    background: selected ? 'rgba(15,52,96,0.05)' : 'var(--color-chalk)',
                    boxShadow: selected ? 'var(--shadow-card)' : 'none',
                  }}
                >
                  <p
                    className="font-medium"
                    style={{
                      fontFamily: 'var(--font-spectral)',
                      color: selected ? 'var(--color-academic)' : 'var(--color-ink)',
                    }}
                  >
                    {opt.label}
                  </p>
                  {opt.description && (
                    <p className="text-sm mt-1" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                      {opt.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
            <Button onClick={goPrev} variant="outline" size="md" disabled={step === 0}>
              <ArrowLeft size={14} strokeWidth={2} /> Anterior
            </Button>
            <Button
              onClick={goNext}
              variant="default"
              size="md"
              disabled={!answers[currentQ.id]}
            >
              {step === total ? 'Ver resultado' : 'Próximo'} <ArrowRight size={14} strokeWidth={2} />
            </Button>
          </div>
        </div>
      )}

      {/* Resultado */}
      {isResult && (
        <div className="flex flex-col gap-6">
          <div
            className="rounded border p-8 flex flex-col gap-4"
            style={{ borderColor: 'var(--color-rule)', background: 'var(--color-academic)' }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-11 h-11 rounded flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--color-gold)' }}
              >
                <Trophy size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
                  Recomendação
                </p>
                <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-paper)' }}>
                  Top 3 metodologias para sua pesquisa
                </h2>
              </div>
            </div>
            <p className="text-sm" style={{ color: 'rgba(250,250,247,0.75)', fontFamily: 'var(--font-source-serif)' }}>
              Baseado em suas {total} respostas. Quanto maior a pontuação, mais alinhada
              é a metodologia ao seu perfil de pergunta + área + recursos.
            </p>
          </div>

          <ol className="flex flex-col gap-4">
            {top3.map((r, i) => {
              const meta = methodsData.find((m) => m.id === r.id);
              if (!meta) return null;
              return (
                <li
                  key={r.id}
                  className="rounded border p-6 flex flex-col gap-3"
                  style={{ borderColor: 'var(--color-rule)', background: 'var(--color-paper)' }}
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded flex items-center justify-center text-sm font-bold shrink-0"
                        style={{
                          background: i === 0 ? 'var(--color-gold)' : 'var(--color-chalk)',
                          color: 'var(--color-ink)',
                          fontFamily: 'var(--font-playfair)',
                        }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-lg leading-tight" style={{ fontFamily: 'var(--font-spectral)' }}>
                          {meta.title}
                        </h3>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
                          {meta.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">{meta.approachLabel}</Badge>
                      <Badge variant="gold" className="text-[10px]">Pontos: {r.score}</Badge>
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-source-serif)', color: 'var(--color-ink)' }}
                  >
                    {meta.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-dm-sans)' }}>
                      Use quando
                    </p>
                    <p className="text-sm" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-source-serif)' }}>
                      {meta.whenUse}
                    </p>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t" style={{ borderColor: 'var(--color-rule)' }}>
                    <p className="text-xs" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
                      Autores de partida: {meta.authors}
                    </p>
                    <Link
                      href="/academico/base-conhecimento#metodos"
                      className="text-sm font-medium transition-colors hover:underline"
                      style={{ color: 'var(--color-academic)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Saber mais →
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button onClick={restart} variant="outline" size="md">
              <RotateCcw size={14} strokeWidth={2} /> Refazer com respostas diferentes
            </Button>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-ink)', color: 'var(--color-chalk)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Quero uma mentoria metodológica →
            </Link>
          </div>

          <p className="text-xs text-center mt-4" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            ⚠ Este resultado é orientativo. Confirme sempre com sua banca/orientador
            e consulte a literatura específica da sua área.
          </p>
        </div>
      )}
    </div>
  );
}
