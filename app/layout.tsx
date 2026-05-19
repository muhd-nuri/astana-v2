// TODO: download Syne + Satoshi WOFF2 from Fontshare into public/fonts/ and swap
// the Google-hosted Syne below for the localFont() block in design.md §Typography.
// Files expected:
//   public/fonts/Syne-Semibold.woff2
//   public/fonts/Syne-Extrabold.woff2
//   public/fonts/Satoshi-Regular.woff2
//   public/fonts/Satoshi-Medium.woff2
//   public/fonts/Satoshi-Bold.woff2
import type { Metadata } from 'next';
import { Syne } from 'next/font/google';

import './globals.css';
import { GradientMeshAtmosphere } from '@/components/shared/GradientMeshAtmosphere';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { LocaleProvider } from '@/i18n/LocaleContext';
import { cn } from '@/lib/utils';

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-display-local',
  display: 'swap',
  preload: true,
});

// Satoshi is Fontshare-only — kept as system stack until WOFF2 ships.
// When the files arrive, replace with:
// const satoshi = localFont({
//   src: [
//     { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
//     { path: '../public/fonts/Satoshi-Medium.woff2',  weight: '500', style: 'normal' },
//     { path: '../public/fonts/Satoshi-Bold.woff2',    weight: '700', style: 'normal' },
//   ],
//   variable: '--font-body-local',
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: 'Astana POS — Sistem Juruwang Cloud untuk PKS Malaysia',
  description:
    'Sistem POS cloud yang tidak menghadkan pertumbuhan anda. Jualan tanpa had, stok tanpa had, laporan tanpa had — dibina untuk PKS Malaysia.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://astanabiz.com'),
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={cn('antialiased', syne.variable)} suppressHydrationWarning>
      <body className="font-body">
        <LocaleProvider>
          <GradientMeshAtmosphere />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </LocaleProvider>
      </body>
    </html>
  );
}
