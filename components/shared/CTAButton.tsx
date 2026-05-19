'use client';

import Link from 'next/link';
import type { ReactNode, MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  variant?: Variant;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  trailingIcon?: ReactNode | true;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  className?: string;
  ariaLabel?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium text-[0.95rem] px-6 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-[var(--color-page-bg)] active:translate-y-[1px]';

const variants: Record<Variant, string> = {
  primary:
    'text-[var(--color-page-bg)] [background:linear-gradient(135deg,var(--color-brand-primary)_0%,var(--color-brand-mid)_100%)] shadow-[0_6px_18px_-8px_rgba(15,140,92,0.55)] hover:[background:linear-gradient(135deg,var(--color-brand-mid)_0%,var(--color-brand-light)_100%)] hover:shadow-[0_10px_24px_-8px_rgba(15,140,92,0.6)]',
  secondary:
    'bg-transparent text-[var(--color-ink)] border border-[var(--color-border-hairline)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]',
  ghost:
    'bg-transparent text-[var(--color-ink)] hover:text-[var(--color-brand-primary)] px-3',
};

export function CTAButton({
  variant = 'primary',
  href,
  external,
  icon,
  trailingIcon,
  children,
  onClick,
  className,
  ariaLabel,
}: Props) {
  const classes = cn(base, variants[variant], className);
  const trailing =
    trailingIcon === true ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : trailingIcon;
  const content = (
    <>
      {icon ? <span className="inline-flex h-4 w-4 items-center justify-center">{icon}</span> : null}
      <span>{children}</span>
      {trailing ? <span className="inline-flex items-center">{trailing}</span> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
