'use client';

import { Check, ArrowRight } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { LiveDashboard } from '@/components/shared/LiveDashboard';
import { CTAButton } from '@/components/shared/CTAButton';

export function FeatureDeepDiveTeaser() {
  const { t } = useLocale();

  return (
    <SectionWrapper tone="tint" className="!py-20 md:!py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
            {t.featureTeaser.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight">
            {t.featureTeaser.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-ink-soft)] md:text-lg">
            {t.featureTeaser.sub}
          </p>

          <ul className="mt-7 space-y-3">
            {t.featureTeaser.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-mid))',
                  }}
                >
                  <Check className="h-3 w-3 text-[var(--color-page-bg)]" />
                </span>
                <span className="text-sm text-[var(--color-ink)] md:text-base">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CTAButton
              variant="ghost"
              href="/features"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
            >
              {t.featureTeaser.ctaLabel}
            </CTAButton>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle at 50% 40%, var(--color-brand-pale), transparent 70%)',
              }}
            />
            <LiveDashboard variant="mini" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
