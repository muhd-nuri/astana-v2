'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useLocale } from '@/i18n/LocaleContext';
import { env } from '@/lib/env';
import { cn } from '@/lib/utils';
import { LanguageToggle } from './LanguageToggle';
import { CTAButton } from './CTAButton';

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: t.nav.produk, href: '/#features' },
    { label: t.nav.pelan, href: '/#pricing' },
    { label: t.nav.industri, href: '/#industries' },
    { label: t.nav.tentang, href: '/about' },
    { label: t.nav.hubungi, href: '/contact' },
    { label: t.nav.blog, href: '/blog' },
  ];

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-40 w-full transition-colors duration-300',
        scrolled
          ? 'bg-[var(--color-page-bg)]/85 backdrop-blur-md border-b border-[var(--color-border-hairline)]'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-[1.4rem] font-extrabold leading-none tracking-tight text-[var(--color-ink)]"
          aria-label="Astana POS"
        >
          Astana POS<span className="text-[var(--color-brand-primary)]">.</span>
        </Link>

        {/* Centre nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />
          <CTAButton
            variant="ghost"
            href={env.hubLoginUrl}
            external
            className="hidden md:inline-flex !px-3 text-sm"
          >
            {t.nav.logMasuk}
          </CTAButton>
          <CTAButton
            variant="primary"
            href={env.hubRegistrationUrl}
            external
            className="hidden md:inline-flex"
          >
            {t.nav.cubaPercuma}
          </CTAButton>

          {/* Mobile menu */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={t.nav.openMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface)]/70 backdrop-blur md:hidden"
              >
                <Menu className="h-5 w-5 text-[var(--color-ink)]" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-[var(--color-border-hairline)] bg-[var(--color-page-bg)] p-6"
            >
              <SheetTitle className="sr-only">{t.nav.openMenu}</SheetTitle>
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-xl font-extrabold tracking-tight">
                  Astana POS<span className="text-[var(--color-brand-primary)]">.</span>
                </span>
                <LanguageToggle />
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="rounded-xl px-2 py-3 font-display text-lg font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-brand-pale)]/40"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <CTAButton
                  variant="primary"
                  href={env.hubRegistrationUrl}
                  external
                  className="w-full"
                >
                  {t.nav.cubaPercuma}
                </CTAButton>
                <CTAButton
                  variant="secondary"
                  href={env.hubLoginUrl}
                  external
                  className="w-full"
                >
                  {t.nav.logMasuk}
                </CTAButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
