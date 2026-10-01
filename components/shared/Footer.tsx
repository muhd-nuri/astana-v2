'use client';

import Link from 'next/link';
import { Award, Smartphone } from 'lucide-react';
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
        {/* Manifesto + badges */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Link
              href="/"
              className="font-display inline-flex text-2xl font-extrabold tracking-tight text-[var(--color-page-bg)]"
            >
              Astana POS<span className="text-[var(--color-brand-light)]">.</span>
            </Link>
            <p className="font-display mt-5 max-w-2xl text-xl font-semibold leading-snug md:text-2xl">
              {t.footer.manifesto}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
                {t.footer.badges[0]}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                {t.footer.badges[1]}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
          <FooterColumn title={cols.produk.title} links={cols.produk.links} />
          <FooterColumn title={cols.syarikat.title} links={cols.syarikat.links} />
          <FooterColumn title={cols.sumber.title} links={cols.sumber.links} />
        </div>

        <hr className="mt-14 border-t border-[var(--color-brand-mid)]/30" />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          <div className="text-xs text-white/60">{t.footer.copyright}</div>
          <div className="text-xs leading-relaxed text-white/70 md:text-center">
            <p>{t.footer.address}</p>
            <p className="mt-2 inline-flex items-center gap-4">
              <Link
                href="/legal/privacy"
                className="text-white/70 transition-colors hover:text-white"
              >
                {t.footer.privacy}
              </Link>
              <span className="text-white/30">·</span>
              <Link
                href="/legal/terms"
                className="text-white/70 transition-colors hover:text-white"
              >
                {t.footer.terms}
              </Link>
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
      </div>
    </footer>
  );
}

type FooterLink = { label: string; href: string; external?: boolean };

function FooterColumn({ title, links }: { title: string; links: ReadonlyArray<FooterLink> }) {
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
