'use client';

import { ArrowUpRight, Monitor } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import { env } from '@/lib/env';

// TODO: replace placeholder thumbnails with real MCBIZ terminal image URLs
// once Mat confirms the 4 most popular bundles + their public image paths.
const PLACEHOLDER_THUMBS = [
  { name: 'Tablet Bundle' },
  { name: 'Counter Bundle' },
  { name: 'Restaurant Bundle' },
  { name: 'Retail Bundle' },
];

export function HardwareCrossSell() {
  const { t } = useLocale();

  return (
    <SectionWrapper tone="tint" className="!py-16 md:!py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-tight text-[var(--color-ink)]">
            {t.hardwareBand.title}
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-ink-soft)] md:text-lg">
            {t.hardwareBand.sub}
          </p>
          <div className="mt-7">
            <CTAButton
              variant="primary"
              href={env.mcbizProductsUrl}
              external
              trailingIcon={<ArrowUpRight className="h-4 w-4" />}
            >
              {t.hardwareBand.cta}
            </CTAButton>
          </div>
        </div>

        {/* Placeholder thumbnail row */}
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {PLACEHOLDER_THUMBS.map((thumb) => (
            <li
              key={thumb.name}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)] transition-shadow hover:shadow-[0_18px_40px_-16px_rgba(15,140,92,0.2)]"
            >
              <a
                href={env.mcbizProductsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center"
                aria-label={`${thumb.name} — MCBIZ`}
              >
                <div
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-brand-pale), var(--color-brand-light))',
                  }}
                >
                  <Monitor className="h-7 w-7 text-[var(--color-brand-deep)]" aria-hidden="true" />
                </div>
                <span className="font-body text-xs font-medium text-[var(--color-ink-soft)] transition-colors group-hover:text-[var(--color-brand-primary)]">
                  {thumb.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
