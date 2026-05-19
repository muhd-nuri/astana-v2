'use client';

import { MessageCircle, Calendar } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { CTAButton } from '@/components/shared/CTAButton';
import { whatsappLink, env } from '@/lib/env';

export function FinalCTA() {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="relative overflow-hidden text-[var(--color-page-bg)]"
      style={{
        background:
          'linear-gradient(180deg, var(--color-brand-deep) 0%, oklch(0.24 0.09 165) 100%)',
      }}
    >
      {/* Scoped mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 animate-mesh-drift-1"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, var(--color-brand-mid), transparent 55%)',
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0 animate-mesh-drift-2"
          style={{
            background:
              'radial-gradient(circle at 80% 60%, var(--color-brand-light), transparent 50%)',
            opacity: 0.2,
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[1024px] flex-col items-center px-6 py-24 text-center md:px-10 md:py-32">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-white/70">
          {t.finalCta.eyebrow}
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
          {t.finalCta.heading}
        </h2>
        <p className="mt-5 max-w-xl text-white/80 md:text-lg">{t.finalCta.sub}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <CTAButton
            variant="primary"
            href={whatsappLink()}
            external
            icon={<MessageCircle className="h-4 w-4" />}
          >
            {t.finalCta.ctaPrimary}
          </CTAButton>
          <CTAButton
            variant="secondary"
            href={env.calendlyUrl || '#contact'}
            external={Boolean(env.calendlyUrl)}
            icon={<Calendar className="h-4 w-4" />}
            className="border-white/30 !text-white hover:!border-white hover:!text-white"
          >
            {t.finalCta.ctaSecondary}
          </CTAButton>
        </div>

        {env.playStoreUrl && (
          <a
            href={env.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            {t.finalCta.ctaPlayStore}
          </a>
        )}
      </div>
    </section>
  );
}
