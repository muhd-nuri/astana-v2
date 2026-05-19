'use client';

import { MessageCircle } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { whatsappLink } from '@/lib/env';

export function WhatsAppFloat() {
  const { t } = useLocale();

  return (
    <a
      id="whatsapp"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floatLabel}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-[var(--color-page-bg)] shadow-[0_12px_30px_-8px_rgba(15,140,92,0.6)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-[var(--color-page-bg)] md:bottom-8 md:right-8"
      style={{
        background:
          'linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-mid) 100%)',
      }}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
