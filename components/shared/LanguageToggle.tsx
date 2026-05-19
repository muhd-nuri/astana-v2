'use client';

import { useLocale } from '@/i18n/LocaleContext';
import { cn } from '@/lib/utils';

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface)]/60 p-0.5 backdrop-blur',
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLocale('ms')}
        aria-pressed={locale === 'ms'}
        className={cn(
          'rounded-full px-3 py-1 text-xs font-bold tracking-wide transition-colors',
          locale === 'ms'
            ? 'bg-[var(--color-brand-primary)] text-[var(--color-page-bg)]'
            : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]',
        )}
      >
        {t.language.ms}
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={cn(
          'rounded-full px-3 py-1 text-xs font-bold tracking-wide transition-colors',
          locale === 'en'
            ? 'bg-[var(--color-brand-primary)] text-[var(--color-page-bg)]'
            : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]',
        )}
      >
        {t.language.en}
      </button>
    </div>
  );
}
