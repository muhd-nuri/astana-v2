'use client';

import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export function Steps() {
  const { t } = useLocale();

  return (
    <SectionWrapper className="!py-20 md:!py-28">
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          {t.steps.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
          {t.steps.headline}
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)] md:text-lg">{t.steps.sub}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.steps.items.map((item) => (
          <StepCard key={item.number} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function StepCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-[var(--color-surface)] p-7 shadow-[0_8px_24px_-12px_rgba(15,140,92,0.10)] transition-shadow duration-300 hover:shadow-[0_16px_36px_-12px_rgba(15,140,92,0.20)] md:p-9">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[4px]"
        style={{
          background:
            'linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-mid))',
        }}
      />
      <p className="font-display text-3xl font-extrabold leading-none tracking-tight text-[var(--color-brand-primary)] md:text-4xl">
        {number}
      </p>
      <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-[var(--color-ink)] md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
        {body}
      </p>
    </article>
  );
}
