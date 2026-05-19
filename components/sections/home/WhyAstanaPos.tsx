'use client';

import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { cn } from '@/lib/utils';

// Bento layout — 2-1-2-1-2-1 mixed-size cards.
// Row 1: 01 spans 2, 02 spans 1
// Row 2: 03 spans 1, 04 spans 2
// Row 3: 05 spans 2, 06 spans 1
const SPANS = [
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-1',
];

export function WhyAstanaPos() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="features" className="!py-20 md:!py-28">
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          {t.why.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
          {t.why.heading}
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)] md:text-lg">{t.why.sub}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {t.why.features.map((feat, i) => (
          <BentoCard
            key={feat.number}
            number={feat.number}
            title={feat.title}
            body={feat.body}
            spanClass={SPANS[i]}
            large={SPANS[i] === 'md:col-span-2'}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function BentoCard({
  number,
  title,
  body,
  spanClass,
  large,
}: {
  number: string;
  title: string;
  body: string;
  spanClass?: string;
  large?: boolean;
}) {
  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-[var(--color-surface)] p-7 transition-all duration-300 md:p-9',
        'shadow-[0_8px_24px_-12px_rgba(15,140,92,0.10)] hover:shadow-[0_18px_40px_-12px_rgba(15,140,92,0.20)]',
        spanClass,
      )}
    >
      {/* Gradient top border */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, var(--color-brand-pale) 0%, var(--color-brand-primary) 50%, var(--color-brand-pale) 100%)',
        }}
      />

      <p className="font-display text-sm font-extrabold tracking-tight text-[var(--color-brand-primary)]">
        {number}
      </p>
      <h3
        className={cn(
          'font-display mt-2 font-extrabold tracking-tight text-[var(--color-ink)]',
          large ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl',
        )}
      >
        {title}
      </h3>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
        {body}
      </p>
    </article>
  );
}
