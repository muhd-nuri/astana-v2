'use client';

import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export function Reasons() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="features" className="!py-20 md:!py-28">
      <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          {t.reasons.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
          {t.reasons.headline}
        </h2>
      </div>

      {/* 3 + 2 layout: first 3 in a row, last 2 centred under */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.reasons.items.slice(0, 3).map((item) => (
          <ReasonCard key={item.number} {...item} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:mx-auto md:max-w-[calc(66.666%+1rem)] md:grid-cols-2">
        {t.reasons.items.slice(3).map((item) => (
          <ReasonCard key={item.number} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ReasonCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)] p-7 transition-all duration-300 md:p-8"
    >
      {/* Left accent on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[var(--color-brand-primary)] transition-all duration-300 group-hover:w-1"
      />
      <p className="font-display text-2xl font-extrabold leading-none tracking-tight text-[var(--color-brand-primary)] md:text-3xl">
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
