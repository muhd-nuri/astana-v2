'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { cn } from '@/lib/utils';

const milestoneVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 },
  }),
};

export function Timeline() {
  const { t } = useLocale();

  return (
    <SectionWrapper tone="tint" className="!py-20 md:!py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — intro + stat cards */}
        <div className="lg:col-span-5">
          <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
            {t.timeline.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight">
            {t.timeline.headline}
          </h2>
          <p className="mt-5 text-[var(--color-ink-soft)] md:text-base">
            {t.timeline.paragraph1}
          </p>
          <p className="mt-4 text-[var(--color-ink-soft)] md:text-base">
            {t.timeline.paragraph2}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {t.timeline.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-display tabular-nums text-xl font-extrabold leading-none text-[var(--color-ink)] md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — vertical timeline rail */}
        <div className="lg:col-span-7">
          <ol className="relative ml-3 border-l border-[var(--color-border-hairline)] md:ml-4">
            {t.timeline.events.map((event, i) => (
              <motion.li
                key={event.year}
                custom={i}
                variants={milestoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative ml-6 pb-8 last:pb-0 md:ml-8"
              >
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute -left-[35px] top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 md:-left-[39px]',
                    event.current
                      ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]'
                      : 'border-[var(--color-brand-mid)] bg-[var(--color-page-bg)]',
                  )}
                >
                  {event.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-page-bg)]" />
                  )}
                </span>

                <div
                  className={cn(
                    'rounded-2xl border bg-[var(--color-surface)] p-5',
                    event.current
                      ? 'border-[var(--color-brand-primary)]/50 shadow-[0_10px_30px_-12px_rgba(15,140,92,0.25)]'
                      : 'border-[var(--color-border-hairline)]',
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display tabular-nums inline-flex items-center rounded-full bg-[var(--color-brand-pale)]/60 px-2.5 py-0.5 text-xs font-bold text-[var(--color-brand-deep)]">
                      {event.year}
                    </span>
                    {event.current && event.currentLabel && (
                      <span className="inline-flex items-center rounded-full bg-[var(--color-brand-primary)] px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--color-page-bg)]">
                        {event.currentLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display mt-3 text-lg font-bold leading-tight text-[var(--color-ink)]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{event.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
}
