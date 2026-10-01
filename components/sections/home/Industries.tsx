'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { LiveDashboard } from '@/components/shared/LiveDashboard';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';
import type { IndustryKey } from '@/i18n/types';

export function Industries() {
  const { t } = useLocale();
  const [active, setActive] = useState<IndustryKey>('restoran');
  const [comingSoonFor, setComingSoonFor] = useState<IndustryKey | null>(null);

  // Auto-clear the "Akan datang" pill after 2s
  useEffect(() => {
    if (!comingSoonFor) return;
    const timer = setTimeout(() => setComingSoonFor(null), 2000);
    return () => clearTimeout(timer);
  }, [comingSoonFor]);

  const activeChip = t.industries.chips.find((c) => c.key === active) ?? t.industries.chips[0];

  const handleChipClick = (key: IndustryKey) => {
    if (key === 'restoran') {
      setActive(key);
      setComingSoonFor(null);
    } else {
      setComingSoonFor(key);
    }
  };

  return (
    <SectionWrapper id="industries" className="!py-20 md:!py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-6">
          <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
            {t.industries.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
            {t.industries.headline}
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-ink-soft)] md:text-lg">
            {t.industries.sub}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" role="tablist">
            {t.industries.chips.map((chip) => {
              const isActive = chip.key === active;
              const isComingSoon = chip.key === comingSoonFor;
              return (
                <li key={chip.key} className="relative">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleChipClick(chip.key)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-[var(--color-page-bg)]'
                        : 'border-[var(--color-border-hairline)] bg-[var(--color-surface)]/70 text-[var(--color-ink)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]',
                    )}
                  >
                    {chip.label}
                  </button>
                  <AnimatePresence>
                    {isComingSoon && (
                      <motion.span
                        initial={{ opacity: 0, y: -4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        role="status"
                        className="absolute -top-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-brand-deep)] px-2.5 py-1 text-[0.65rem] font-medium text-[var(--color-page-bg)] shadow-md"
                      >
                        {t.industries.comingSoon}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)]/70 px-5 py-4 backdrop-blur">
            <span className="font-display tabular-nums text-3xl font-extrabold leading-none text-[var(--color-brand-primary)]">
              {t.industries.statValue}
            </span>
            <span className="text-sm font-medium text-[var(--color-ink-soft)]">
              {t.industries.statLabel}
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)] p-6 shadow-[0_18px_50px_-20px_rgba(15,140,92,0.18)] md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChip.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-lg font-bold leading-snug text-[var(--color-ink)] md:text-xl">
                  {t.industries.detailHeadingPrefix} {activeChip.label}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-ink-soft)] md:text-base">
                  {activeChip.detail || t.industries.chips[0].detail}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6">
              <LiveDashboard variant="mini" />
            </div>

            <div className="mt-6">
              <CTAButton
                variant="ghost"
                href="/features"
                trailingIcon={<ArrowRight className="h-4 w-4" />}
              >
                {t.industries.ctaPrimary}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
