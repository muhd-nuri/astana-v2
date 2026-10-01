'use client';

import { useMemo, useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import { env, whatsappLink } from '@/lib/env';
import { cn } from '@/lib/utils';
import type { PricingTier } from '@/i18n/types';

type Billing = 'monthly' | 'yearly';

export function Pricing() {
  const { t } = useLocale();
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <SectionWrapper id="pricing" className="!py-20 md:!py-28">
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          {t.pricing.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
          {t.pricing.headline}
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)] md:text-lg">{t.pricing.sub}</p>

        {/* Toggle */}
        <div
          role="group"
          aria-label="Billing period"
          className="mt-8 inline-flex items-center rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface)]/70 p-1 backdrop-blur"
        >
          <ToggleButton
            active={billing === 'monthly'}
            onClick={() => setBilling('monthly')}
            label={t.pricing.toggleMonthly}
          />
          <ToggleButton
            active={billing === 'yearly'}
            onClick={() => setBilling('yearly')}
            label={t.pricing.toggleYearly}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
        {t.pricing.tiers.map((tier) => (
          <TierCard key={tier.key} tier={tier} billing={billing} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <CTAButton variant="ghost" href="/pricing">
          {t.pricing.footerLink}
        </CTAButton>
      </div>
    </SectionWrapper>
  );
}

function ToggleButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'bg-[var(--color-brand-primary)] text-[var(--color-page-bg)]'
          : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]',
      )}
    >
      {label}
    </button>
  );
}

function TierCard({ tier, billing }: { tier: PricingTier; billing: Billing }) {
  const { t } = useLocale();
  const isPopular = tier.key === 'growth';

  const price = billing === 'monthly' ? tier.monthly : tier.yearly;
  const suffix = billing === 'monthly' ? t.pricing.perMonth : t.pricing.perYear;
  const priceDisplay = price === null ? tier.contactLabel ?? '—' : null;

  const waMessage = useMemo(
    () => t.pricing.waPrefillTemplate.replace('{tier}', tier.name),
    [t.pricing.waPrefillTemplate, tier.name],
  );

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-[var(--color-surface)] p-6 transition-all duration-300 md:p-8',
        isPopular
          ? 'shadow-[0_18px_40px_-14px_rgba(15,140,92,0.30)] ring-2 ring-[var(--color-brand-primary)] lg:scale-105'
          : 'shadow-[0_8px_24px_-12px_rgba(15,140,92,0.10)] hover:shadow-[0_14px_30px_-12px_rgba(15,140,92,0.18)]',
      )}
    >
      {/* Gradient top border */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, var(--color-brand-pale) 0%, var(--color-brand-primary) 50%, var(--color-brand-pale) 100%)',
        }}
      />

      {isPopular && (
        <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-[var(--color-brand-primary)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--color-page-bg)]">
          {t.pricing.mostPopular}
        </span>
      )}

      <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--color-ink)]">
        {tier.name}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        {priceDisplay ? (
          <span className="font-display text-2xl font-extrabold leading-none text-[var(--color-ink)] md:text-3xl">
            {priceDisplay}
          </span>
        ) : (
          <>
            <span className="font-display text-sm font-bold leading-none text-[var(--color-ink-soft)]">
              {t.pricing.currency}
            </span>
            <span className="font-display tabular-nums text-4xl font-extrabold leading-none text-[var(--color-ink)] md:text-[2.75rem]">
              {price}
            </span>
            <span className="text-sm font-medium text-[var(--color-text-muted)]">{suffix}</span>
          </>
        )}
      </div>

      <p className="mt-3 text-xs text-[var(--color-text-muted)]">
        <span className="font-medium">{t.pricing.untukPrefix}</span> {tier.for}
      </p>

      <ul className="mt-6 space-y-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-primary)]"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <CTAButton
          variant="primary"
          href={env.hubRegistrationUrl}
          external
          className="w-full"
        >
          {t.pricing.ctaTrial}
        </CTAButton>
        <CTAButton
          variant="ghost"
          href={whatsappLink(waMessage)}
          external
          icon={<MessageCircle className="h-4 w-4" />}
          className="mt-2 w-full !px-0"
        >
          {t.pricing.ctaChat}
        </CTAButton>
      </div>
    </article>
  );
}
