'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  nome: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('Email inválido'),
  organizacao: z.string().optional(),
  assunto: z.enum(
    ['consultoria', 'mentoria', 'imprensa', 'colaboracao', 'outro'],
    { errorMap: () => ({ message: 'Selecione um assunto' }) },
  ),
  mensagem: z.string().min(20, 'Mensagem muito curta — descreva ao menos brevemente o contexto'),
});

type FormData = z.infer<typeof schema>;

const assuntoLabels: Record<FormData['assunto'], string> = {
  consultoria: 'Projeto de consultoria',
  mentoria: 'Mentoria acadêmica / banca',
  imprensa: 'Entrevista / imprensa',
  colaboracao: 'Colaboração de pesquisa',
  outro: 'Outro',
};

const TARGET_EMAIL = 'fabiano@sannino.com.br';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = `[sannino.com.br] ${assuntoLabels[data.assunto]} — ${data.nome}`;
    const lines = [
      `Nome: ${data.nome}`,
      `Email: ${data.email}`,
      data.organizacao ? `Organização: ${data.organizacao}` : null,
      `Assunto: ${assuntoLabels[data.assunto]}`,
      '',
      data.mensagem,
    ].filter(Boolean);
    const body = lines.join('\n');
    const href = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
    setTimeout(() => reset(), 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            Nome *
          </label>
          <Input id="nome" placeholder="Seu nome completo" {...register('nome')} aria-invalid={!!errors.nome} />
          {errors.nome && (
            <span className="text-xs" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}>{errors.nome.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
            Email *
          </label>
          <Input id="email" type="email" placeholder="seu@email.com" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && (
            <span className="text-xs" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}>{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="organizacao" className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Organização (opcional)
        </label>
        <Input id="organizacao" placeholder="Empresa, universidade ou veículo" {...register('organizacao')} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="assunto" className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Assunto *
        </label>
        <select
          id="assunto"
          {...register('assunto')}
          aria-invalid={!!errors.assunto}
          className="flex h-10 w-full rounded border bg-chalk px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-academic"
          style={{ borderColor: 'var(--color-rule)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
          defaultValue=""
        >
          <option value="" disabled>Selecione…</option>
          {(Object.keys(assuntoLabels) as Array<FormData['assunto']>).map((k) => (
            <option key={k} value={k}>{assuntoLabels[k]}</option>
          ))}
        </select>
        {errors.assunto && (
          <span className="text-xs" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}>{errors.assunto.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          rows={6}
          placeholder="Descreva brevemente o contexto, o desafio e o prazo. Quanto mais específico, mais útil minha resposta."
          {...register('mensagem')}
          aria-invalid={!!errors.mensagem}
          className="w-full rounded border bg-chalk px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-academic resize-y"
          style={{ borderColor: 'var(--color-rule)', color: 'var(--color-ink)', fontFamily: 'var(--font-source-serif)', lineHeight: 1.6 }}
        />
        {errors.mensagem && (
          <span className="text-xs" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}>{errors.mensagem.message}</span>
        )}
      </div>

      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
        Ao enviar, abrirá o seu cliente de email com a mensagem pré-formatada para
        <a href={`mailto:${TARGET_EMAIL}`} className="underline mx-1" style={{ color: 'var(--color-academic)' }}>
          {TARGET_EMAIL}
        </a>
        — basta clicar em "Enviar" no email. Resposta normalmente em 1 a 2 dias úteis.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <Button type="submit" variant="default" size="lg">
          <Send size={16} strokeWidth={2} />
          Enviar mensagem
        </Button>
        {sent && (
          <span className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--color-forest)', fontFamily: 'var(--font-dm-sans)' }}>
            <Check size={16} strokeWidth={2} />
            Cliente de email aberto. Confirme o envio por lá.
          </span>
        )}
      </div>
    </form>
  );
}
