'use client';

import { useRef } from 'react';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleContext';
import { CTAButton } from '@/components/shared/CTAButton';
import { LiveDashboard } from '@/components/shared/LiveDashboard';
import { whatsappLink, env } from '@/lib/env';

export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section ref={ref} id="hero" className="relative w-full pt-10 md:pt-14 lg:pt-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 pb-16 md:gap-14 md:px-10 md:pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        {/* Left — copy */}
        <div className="flex flex-col justify-center lg:col-span-6">
          {/* Trust line pill */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface)]/70 px-3 py-1.5 text-xs font-medium text-[var(--color-ink-soft)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-brand-primary)]" aria-hidden="true" />
            {t.hero.trustLine}
          </span>

          <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display mt-4 text-[clamp(2.5rem,7vw,5.25rem)] font-extrabold leading-[0.98] tracking-tight text-[var(--color-ink)]">
            {t.hero.headlinePre}{' '}
            <span className="hero-gradient-text whitespace-nowrap">{t.hero.headlineGradient}</span>{' '}
            {t.hero.headlinePost}
          </h1>

          <p className="mt-6 max-w-xl text-[var(--color-ink-soft)] md:text-lg">{t.hero.sub}</p>

          <ul className="mt-6 space-y-2.5">
            {t.hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton variant="primary" href={env.hubRegistrationUrl} external>
              {t.hero.ctaPrimary}
            </CTAButton>
            <CTAButton
              variant="secondary"
              href={whatsappLink()}
              external
              icon={<MessageCircle className="h-4 w-4" />}
            >
              {t.hero.ctaSecondary}
            </CTAButton>
          </div>

          {env.playStoreUrl && (
            <a
              href={env.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-medium text-[var(--color-ink-soft)] underline-offset-4 hover:text-[var(--color-brand-primary)] hover:underline"
            >
              <PlayStoreGlyph />
              {t.hero.ctaPlayStore}
            </a>
          )}
        </div>

        {/* Right — live dashboard */}
        <motion.div style={{ y }} className="lg:col-span-6 lg:pl-4">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-50 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at 60% 40%, var(--color-brand-pale), transparent 70%)',
              }}
            />
            <LiveDashboard variant="hero" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlayStoreGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M3.5 2.7c-.3.3-.5.7-.5 1.3v16c0 .6.2 1 .5 1.3l.1.1L13 12 3.6 2.6l-.1.1zm10.6 9.7l3.1-3.1 4.5 2.6c1.3.7 1.3 2 0 2.7l-4.5 2.6-3.1-3.1V12.4zm-.7-.7l-9.5 9.4 9.5-5.5 3.1-3.1L13.4 9.6l-9.5-5.5 9.5 9.5z" />
    </svg>
  );
}
