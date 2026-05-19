'use client';

import Link from 'next/link';
import { useLocale } from '@/i18n/LocaleContext';
import { env } from '@/lib/env';

function FooterMesh() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 animate-mesh-drift-1"
        style={{
          background:
            'radial-gradient(circle at 15% 25%, var(--color-brand-mid), transparent 55%)',
          opacity: 0.18,
        }}
      />
      <div
        className="absolute inset-0 animate-mesh-drift-3"
        style={{
          background:
            'radial-gradient(circle at 85% 75%, var(--color-brand-light), transparent 50%)',
          opacity: 0.12,
        }}
      />
    </div>
  );
}

export function Footer() {
  const { t } = useLocale();
  const cols = t.footer.columns;

  return (
    <footer
      className="relative overflow-hidden text-[var(--color-page-bg)]"
      style={{
        background:
          'linear-gradient(180deg, var(--color-brand-deep) 0%, oklch(0.26 0.09 165) 100%)',
      }}
    >
      <FooterMesh />

      {/* Decorative oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-0 hidden h-full select-none items-center md:flex"
      >
        <span
          className="font-display font-extrabold leading-none tracking-tighter"
          style={{
            color: 'var(--color-brand-mid)',
            opacity: 0.18,
            fontSize: 'clamp(6rem, 14vw, 12rem)',
          }}
        >
          POS.
        </span>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pb-10 pt-16 md:px-10 md:pb-12 md:pt-24">
        {/* Manifesto */}
        <p className="font-display max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
          {t.footer.manifesto}
        </p>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <FooterColumn title={cols.product.title} links={cols.product.links} />
          <FooterColumn title={cols.company.title} links={cols.company.links} />
          <FooterColumn title={cols.help.title} links={cols.help.links} />
          <FooterColumn title={cols.legal.title} links={cols.legal.links} />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.12em] text-white/60">
              {t.footer.addressTitle}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
              {t.footer.address}
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href={env.mcbizUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/10"
            >
              {t.footer.siblingPill}
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/60">
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = { label: string; href: string; external?: boolean };

function FooterColumn({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div>
      <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-white/70">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
