'use client';

import { Star } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

const AVATAR_BGS = [
  'oklch(0.78 0.10 158)',
  'oklch(0.68 0.14 50)',
  'oklch(0.62 0.14 158)',
];

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? '')
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function Testimonials() {
  const { t } = useLocale();

  return (
    <SectionWrapper tone="tint" className="!py-20 md:!py-28">
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
        <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          {t.testimonials.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
          {t.testimonials.headline}
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)] md:text-lg">{t.testimonials.sub}</p>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface)] px-4 py-1.5 text-sm">
          <Star
            className="h-4 w-4 fill-[var(--color-brand-primary)] text-[var(--color-brand-primary)]"
            aria-hidden="true"
          />
          <span className="font-display tabular-nums font-bold text-[var(--color-ink)]">
            {t.testimonials.rating}
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.testimonials.items.map((item, idx) => (
          <article
            key={item.name}
            className="relative flex flex-col rounded-2xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)] p-7 md:p-8"
          >
            <span
              aria-hidden="true"
              className="font-display absolute -top-2 left-6 text-6xl font-extrabold leading-none text-[var(--color-brand-primary)]"
            >
              “
            </span>

            <p className="mt-5 text-base italic leading-relaxed text-[var(--color-ink)] md:text-lg">
              {item.quote}
            </p>

            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[var(--color-border-hairline)]">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-extrabold text-[var(--color-page-bg)]"
                style={{ background: AVATAR_BGS[idx % AVATAR_BGS.length] }}
              >
                {initialsOf(item.name)}
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight text-[var(--color-ink)]">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{item.business}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
