'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleContext';
import { useCountUp } from '@/hooks/useCountUp';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export function Counters() {
  const { t, locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();

  // Trigger animation once on first scroll-into-view
  const enabled = inView && !reducedMotion;

  return (
    <SectionWrapper className="!py-20 md:!py-28">
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          {t.counters.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
          {t.counters.headline}
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8"
      >
        {t.counters.items.map((item) => (
          <CounterCard
            key={item.label}
            target={item.value}
            suffix={item.suffix}
            label={item.label}
            enabled={enabled}
            locale={locale}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function CounterCard({
  target,
  suffix,
  label,
  enabled,
  locale,
}: {
  target: number;
  suffix: string;
  label: string;
  enabled: boolean;
  locale: 'ms' | 'en';
}) {
  const value = useCountUp({ end: target, duration: 1600, enabled });
  const formatter = new Intl.NumberFormat(locale === 'ms' ? 'ms-MY' : 'en-MY');
  const displayed = formatter.format(Math.round(value));

  return (
    <div className="flex flex-col items-center" aria-live="polite">
      <p className="font-display tabular-nums text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-none tracking-tight">
        <span className="hero-gradient-text">
          {displayed}
          {suffix}
        </span>
      </p>
      <p className="mt-3 max-w-[12rem] text-sm font-medium text-[var(--color-ink-soft)] md:text-base">
        {label}
      </p>
    </div>
  );
}
