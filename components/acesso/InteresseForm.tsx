'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bell, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const interessesOpcoes = [
  'Metodologia científica',
  'Templates ABNT',
  'Slides de aulas',
  'Checklists CEP/CONEP',
  'Ferramentas (Metodômetro)',
  'Newsletter mensal',
] as const;

const schema = z.object({
  nome: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('Email inválido'),
  perfil: z.enum(['mestrando', 'doutorando', 'professor', 'profissional', 'outro'], {
    errorMap: () => ({ message: 'Selecione seu perfil' }),
  }),
  interesses: z.array(z.string()).min(1, 'Marque pelo menos um interesse'),
});

type FormData = z.infer<typeof schema>;

const perfilLabels: Record<FormData['perfil'], string> = {
  mestrando:    'Mestrando(a)',
  doutorando:   'Doutorando(a)',
  professor:    'Professor(a) / Pesquisador(a)',
  profissional: 'Profissional / Executivo(a)',
  outro:        'Outro',
};

const TARGET_EMAIL = 'fabiano@sannino.com.br';

export function InteresseForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interesses: [] },
  });

  const onSubmit = (data: FormData) => {
    const subject = `[sannino.com.br] Lista de espera — ${data.nome}`;
    const lines = [
      `Nome: ${data.nome}`,
      `Email: ${data.email}`,
      `Perfil: ${perfilLabels[data.perfil]}`,
      '',
      'Interesses:',
      ...data.interesses.map((i) => `- ${i}`),
      '',
      'Enviado pela página /acesso/cadastro.',
    ];
    const href = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
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
        <label htmlFor="perfil" className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Perfil *
        </label>
        <select
          id="perfil"
          {...register('perfil')}
          aria-invalid={!!errors.perfil}
          className="flex h-10 w-full rounded border bg-chalk px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-academic"
          style={{ borderColor: 'var(--color-rule)', color: 'var(--color-ink)', fontFamily: 'var(--font-dm-sans)' }}
          defaultValue=""
        >
          <option value="" disabled>Selecione…</option>
          {(Object.keys(perfilLabels) as Array<FormData['perfil']>).map((k) => (
            <option key={k} value={k}>{perfilLabels[k]}</option>
          ))}
        </select>
        {errors.perfil && (
          <span className="text-xs" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}>{errors.perfil.message}</span>
        )}
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
          Interesses (marque ao menos um) *
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {interessesOpcoes.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 text-sm cursor-pointer rounded border p-2.5 transition-colors hover:bg-chalk"
              style={{ borderColor: 'var(--color-rule)', fontFamily: 'var(--font-source-serif)' }}
            >
              <input
                type="checkbox"
                value={opt}
                {...register('interesses')}
                className="w-4 h-4 accent-academic"
              />
              <span style={{ color: 'var(--color-ink)' }}>{opt}</span>
            </label>
          ))}
        </div>
        {errors.interesses && (
          <span className="text-xs" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-sans)' }}>
            {errors.interesses.message as string}
          </span>
        )}
      </fieldset>

      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-footnote)', fontFamily: 'var(--font-dm-sans)' }}>
        Ao enviar, abrirá o seu cliente de email com a mensagem pré-formatada para
        <a href={`mailto:${TARGET_EMAIL}`} className="underline mx-1" style={{ color: 'var(--color-academic)' }}>
          {TARGET_EMAIL}
        </a>
        — basta confirmar o envio. Você entrará na lista de espera e será avisado quando os materiais
        forem liberados. Sem spam — você pode cancelar a qualquer momento.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <Button type="submit" variant="default" size="lg">
          <Bell size={16} strokeWidth={2} />
          Entrar na lista de espera
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
