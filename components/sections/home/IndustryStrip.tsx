'use client';

import {
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Stethoscope,
  Dumbbell,
  Hotel,
  Scissors,
  WashingMachine,
  Car,
  Pill,
  Cat,
  Shirt,
  type LucideIcon,
} from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

const ICONS: LucideIcon[] = [
  UtensilsCrossed, // Restoran
  Coffee,          // Kafe
  ShoppingBag,     // Runcit
  Stethoscope,     // Klinik
  Dumbbell,        // Gim
  Hotel,           // Hotel
  Scissors,        // Salun
  WashingMachine,  // Dobi
  Car,             // Cuci Kereta
  Pill,            // Farmasi
  Cat,             // Pet Shop
  Shirt,           // Butik
];

export function IndustryStrip() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="industries" className="!py-12 md:!py-16" fullBleed>
      <div className="mx-auto mb-6 max-w-[1280px] px-6 md:px-10">
        <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          {t.industries.eyebrow}
        </p>
        <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
          {t.industries.heading}
        </h2>
      </div>

      <div className="relative w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--color-page-bg)] to-transparent md:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--color-page-bg)] to-transparent md:w-16"
        />
        <ul
          className="no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-6 py-2 md:justify-center md:gap-4 md:px-10"
          style={{ scrollPaddingLeft: '1.5rem' }}
        >
          {t.industries.items.map((name, i) => {
            const Icon = ICONS[i] ?? ShoppingBag;
            return (
              <li
                key={name}
                className="group flex shrink-0 snap-start items-center gap-2 rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface)]/70 px-4 py-2.5 backdrop-blur transition-all hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-pale)]/40"
              >
                <Icon
                  className="h-4 w-4 text-[var(--color-ink-soft)] transition-colors group-hover:text-[var(--color-brand-primary)]"
                  aria-hidden="true"
                />
                <span className="font-body text-sm font-medium text-[var(--color-ink)]">
                  {name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
}
