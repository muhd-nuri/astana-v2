'use client';

import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export function ProofStrip() {
  const { t } = useLocale();

  return (
    <SectionWrapper tone="tint" className="!py-16 md:!py-20">
      <p className="font-body text-center text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        {t.proof.eyebrow}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-6">
        {t.proof.items.map((item, idx) => (
          <div key={`${item.label}-${idx}`} className="flex flex-col items-center">
            <p className="font-display tabular-nums text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-none tracking-tight">
              <span className="hero-gradient-text">{item.number}</span>
            </p>
            <p className="mt-3 max-w-[12rem] text-sm font-medium text-[var(--color-ink-soft)]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
