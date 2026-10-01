'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Chip = {
  key: string;
  type: 'module' | 'customer';
  label: string;
  icon?: ReactNode;
};

export function Marquee({ chips, className }: { chips: ReadonlyArray<Chip>; className?: string }) {
  return (
    <div
      className={cn(
        'group relative w-full overflow-hidden',
        className,
      )}
      aria-label="Marquee"
    >
      {/* Edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-page-bg)] to-transparent md:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-page-bg)] to-transparent md:w-24"
      />

      <div className="animate-marquee flex w-max items-center gap-3 motion-reduce:flex-wrap motion-reduce:justify-center">
        {/* Track A */}
        <Track chips={chips} />
        {/* Track B — duplicate for seamless loop */}
        <Track chips={chips} ariaHidden />
      </div>
    </div>
  );
}

function Track({ chips, ariaHidden }: { chips: ReadonlyArray<Chip>; ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden ? 'true' : undefined}
      className="flex shrink-0 items-center gap-3 px-1.5"
    >
      {chips.map((chip, idx) => (
        <li
          key={`${chip.key}-${idx}`}
          className={cn(
            'inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5',
            chip.type === 'module'
              ? 'border border-[var(--color-border-hairline)] bg-[var(--color-surface)]'
              : 'bg-[var(--color-brand-pale)]/70',
          )}
        >
          {chip.icon ? (
            <span
              className={cn(
                'inline-flex h-4 w-4 items-center justify-center',
                chip.type === 'module'
                  ? 'text-[var(--color-brand-primary)]'
                  : 'text-[var(--color-brand-deep)]',
              )}
            >
              {chip.icon}
            </span>
          ) : null}
          <span
            className={cn(
              'whitespace-nowrap text-sm',
              chip.type === 'module'
                ? 'font-display font-semibold text-[var(--color-ink)]'
                : 'font-body font-medium text-[var(--color-brand-deep)]',
            )}
          >
            {chip.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
