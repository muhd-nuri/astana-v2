# Astana POS — Claude Code Initial Prompt (V2 — Mirrors MCBIZ Structurally)

**Phase:** 1 of 4 — Foundation & Homepage (12 sections)

---

## Pre-flight Assumptions

- Working directory is the already-scaffolded project root (Next.js 15 + Tailwind v4 + shadcn/ui already initialised via `bunx --bun shadcn@latest init -t next .`).
- **Do NOT create a new project. Do NOT `cd` into a subdirectory. Do NOT run `create-next-app` or `shadcn init`.**
- `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `components.json`, `tsconfig.json` all exist — edit in place.
- **Tailwind v4 is active.** Theme tokens in `@theme {}` in `app/globals.css`. No `tailwind.config.ts`.
- Package manager is **Bun**.
- Deployment is out of scope — Mat handles VPS separately.

Before starting, read these two files in order:
1. `v2_astanapos_master_plan.md` — strategy, 12-section mapping to MCBIZ, full content placeholders
2. `v2_astanapos_design.md` — design system, component specs (Navbar, Buttons, Cards, LiveDashboard, Marquee, IndustryTabs, Timeline, Counter), full `globals.css` block

After reading both, **summarise back in 5 bullet points** what the site's job is, the V2 strategy in one sentence (structural mirror of MCBIZ), the 12 sections in order, any conflicts you noticed between the two documents, and anything you need clarified. **Wait for confirmation before writing code.**

---

## Design Vision Summary

- **Strategy:** Astana POS structurally mirrors MCBIZ — same 12-section homepage rhythm, same display font (Syne), same gradient-green palette, same atmosphere, same CTA patterns, same footer treatment. Every section's content is reoriented from hardware bundles to cloud software. The two sites should feel like two pages of one brochure.
- **Signature element (built in Phase 1):** A **live-feeling dashboard hero** — rendered Astana POS dashboard with mini-cards animating in over the first 6 seconds (sales counter ticking, new-order chip sliding in, low-stock alert flashing, daily-report chip appearing). This replaces MCBIZ's static terminal photo in the same hero composition.
- **Atmosphere layer:** Soft gradient mesh — three brand-tinted green radial blobs drifting slowly behind content. Matches MCBIZ.
- **The V2 strategic addition that has no MCBIZ equivalent:** the **hardware cross-sell band** between pricing and timeline — a single band linking out to MCBIZ for terminals, ensuring every Astana POS visitor sees the hardware path.
- **The single most important rule:** ship all **12 sections**, not 6. The structural mirror is the entire point of V2.

---

## Your Mission

Build the Phase 1 homepage for Astana POS — 12 sections in order, mirroring `mcbiz.astanabiz.com` section-for-section. The homepage must:

- Render fully on `localhost:3000` after `bun dev` with zero TypeScript or build errors
- Be **bilingual from the start** — BM (primary) + EN — with a working language toggle. No hardcoded copy.
- Be mobile-responsive at 375px / 768px / 1280px
- Pass `bunx tsc --noEmit` with zero errors
- Use **only `next/image`** for images (no `<img>` tags)
- Use **only Syne and Satoshi** (Fontshare WOFF2 via `next/font/local`)
- Have the WhatsApp floating button always visible
- Pause LiveDashboard animation when off-screen
- Honour `prefers-reduced-motion`

---

## Step 1 — Install Additional Dependencies

```bash
bun add framer-motion react-hook-form @hookform/resolvers zod react-calendly
```

shadcn components (one at a time):

```bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add accordion
bunx --bun shadcn@latest add tabs
bunx --bun shadcn@latest add separator
bunx --bun shadcn@latest add sheet
```

Confirm `lucide-react`, `clsx`, `tailwind-merge` already present.

---

## Step 2 — Download Fonts

Place in `public/fonts/`:
- `Syne-Semibold.woff2`, `Syne-Extrabold.woff2` (from `https://www.fontshare.com/fonts/syne`)
- `Satoshi-Regular.woff2`, `Satoshi-Medium.woff2`, `Satoshi-Bold.woff2` (from `https://www.fontshare.com/fonts/satoshi`)

If unavailable at build time, scaffold the `next/font/local` config per design.md, add a `TODO: download fonts` comment in `app/layout.tsx`, and degrade gracefully to system fonts.

---

## Step 3 — Global Setup

### 3.1 Replace `app/globals.css`

Use the full block from `v2_astanapos_design.md` under "Full `globals.css` Block." This installs theme tokens, type scale, hero gradient text utility, marquee keyframes, and mesh drift keyframes.

### 3.2 Update `app/layout.tsx`

- Metadata: `title: "Astana POS — Sistem Juruwang Cloud untuk PKS Malaysia"`, description from tagline
- `<html lang="ms">`
- Load Syne + Satoshi via `next/font/local` per design.md
- Add font variables to `<html>` className
- Render global `<GradientMeshAtmosphere />` (three drifting blob divs per design.md spec) inside `<body>` at z-index -10
- Wrap children in `<LocaleProvider>`
- Render `<Navbar />`, `<Footer />`, `<WhatsAppFloat />` at layout level

### 3.3 Set up `src/i18n/`

Create:
```
src/i18n/en.ts
src/i18n/ms.ts                   # primary
src/i18n/LocaleContext.tsx
```

Translation file shape:

```ts
// src/i18n/ms.ts
export const ms = {
  nav: {
    produk: 'Produk',
    pelan: 'Pelan',
    industri: 'Industri',
    tentang: 'Tentang Kami',
    hubungi: 'Hubungi',
    blog: 'Blog',
    logMasuk: 'Log Masuk',
    cubaPercuma: 'Cuba Percuma',
  },
  hero: {
    trustLine: 'Dipercayai 10,000+ Kedai di Malaysia',
    eyebrow: 'Sistem juruwang cloud untuk PKS Malaysia',
    // Headline split into two parts for the gradient sweep on the middle phrase
    headlinePre: 'Astana POS —',
    headlineGradient: 'cloud juruwang',
    headlinePost: 'anda.',
    sub: 'Dari laporan jualan hingga pengurusan stok — Astana POS berikan semua yang anda perlukan untuk urus perniagaan dari mana-mana. Cuba percuma 14 hari.',
    bullets: [
      'Tiada bayaran tahunan tersembunyi',
      'Cloud + offline mode',
      'LHDN e-invoice ready',
    ],
    ctaPrimary: 'Cuba Percuma 14 Hari',
    ctaSecondary: 'Sembang di WhatsApp',
    ctaPlayStore: 'Muat turun di Google Play',
  },
  marquee: {
    caption: 'Live modul · 7,000+ kedai · 177 negara · 6 modul ERP',
    modules: ['Sales', 'Marketing', 'Finance', 'Inventory', 'Employee', 'ERP Dashboard'],
    customers: ['D Apple Fried Chicken', 'Ani Sup Utara', 'Puas Cafe', 'JBR Bundle', 'Ani Sup Utara', 'Puas Cafe'],
  },
  industries: {
    eyebrow: 'Untuk Setiap Jenis Perniagaan',
    headline: 'Satu cloud. Dua belas industri. Tiada had.',
    sub: 'Pilih jenis perniagaan anda dan lihat bagaimana Astana POS disesuaikan.',
    statValue: '12',
    statLabel: 'industri',
    chips: [
      { key: 'restoran', label: 'Restoran', detail: 'Pesanan KDS, dapur tersusun, bil pantas. Laporan jualan real-time setiap meja.' },
      { key: 'kafe', label: 'Kafe', detail: '' },
      { key: 'runcit', label: 'Runcit', detail: '' },
      { key: 'klinik', label: 'Klinik', detail: '' },
      { key: 'gim', label: 'Gim', detail: '' },
      { key: 'hotel', label: 'Hotel', detail: '' },
      { key: 'salun', label: 'Salun', detail: '' },
      { key: 'dobi', label: 'Dobi', detail: '' },
      { key: 'cuciKereta', label: 'Cuci Kereta', detail: '' },
      { key: 'farmasi', label: 'Farmasi', detail: '' },
      { key: 'petShop', label: 'Pet Shop', detail: '' },
      { key: 'butik', label: 'Butik', detail: '' },
    ],
    detailHeadingPrefix: 'Sistem disesuaikan untuk',
    ctaPrimary: 'Lihat Ciri Lengkap',
    comingSoon: 'Akan datang',
  },
  pricing: {
    eyebrow: 'Pelan Langganan',
    headline: 'Pelan langganan untuk setiap saiz kedai.',
    sub: 'Bayar bulanan atau tahunan. Tukar pelan bila-bila. Batalkan tanpa penalti.',
    toggleMonthly: 'Bulanan',
    toggleYearly: 'Tahunan (jimat 20%)',
    mostPopular: 'Paling Popular',
    tiers: [
      { key: 'starter', name: 'Starter', monthly: 39, yearly: 374, for: 'Kedai tunggal kecil', features: ['1 outlet', '2 staff', 'Jualan tanpa had', 'Laporan asas'] },
      { key: 'growth', name: 'Growth', monthly: 79, yearly: 758, for: 'Kedai berkembang', features: ['1 outlet', '10 staff', 'Modul marketing', 'Customer loyalty', 'Jualan tanpa had'] },
      { key: 'multistore', name: 'Multi-store', monthly: 149, yearly: 1430, for: 'Multi-cawangan', features: ['5 outlets', '50 staff', 'Multi-store reports', 'Inventory lanjutan'] },
      { key: 'enterprise', name: 'Enterprise', monthly: null, yearly: null, contactLabel: 'Hubungi kami', for: 'Rangkaian besar', features: ['Outlets tanpa had', 'Custom integrations', 'Sokongan khusus'] },
    ],
    ctaTrial: 'Cuba Percuma',
    ctaChat: 'Sembang dengan kami',
    footerLink: 'Lihat Perbandingan Penuh',
    currency: 'RM',
    perMonth: '/bln',
    perYear: '/thn',
  },
  hardwareBand: {
    title: 'Perlukan perkakasan POS?',
    sub: 'Pakej hardware + setup tersedia di MCBIZ — jenama saudara dalam ekosistem Astana Group. Mulai RM490.',
    cta: 'Lihat Pakej MCBIZ →',
  },
  timeline: {
    eyebrow: 'Perjalanan Astana',
    headline: 'Enam tahun. Tujuh ribu kedai. Satu misi.',
    paragraph1: 'Astana Group bermula pada 2020 dengan satu cita-cita mudah — bantu peniaga Malaysia digitalisasi tanpa beban kos. Kami bermula dengan perkakasan POS, kemudian membangun perisian sendiri.',
    paragraph2: 'Hari ini, Astana POS adalah enjin cloud yang menggerakkan ekosistem ini — perisian yang dipercayai oleh 7,000+ kedai dalam 177 negara. Berdaftar trademark, dilindungi undang-undang, komited menjadi tulang belakang digital perniagaan kecil.',
    stats: [
      { value: '2020', label: 'Diasaskan' },
      { value: '6', label: 'Tahun' },
      { value: 'MyIPO', label: 'Trademark' },
    ],
    events: [
      { year: '2020', title: 'Penubuhan', body: '1,000 kedai aktif dengan perkakasan POS khusus.' },
      { year: '2021', title: 'Jenama & Identiti', body: 'Melancarkan Astana Biz dan Mesincashier.biz. 1,200 kedai.' },
      { year: '2022', title: 'Pengembangan Wilayah', body: 'Cawangan Kelantan dibuka. Mencapai 2,000 kedai.' },
      { year: '2023', title: 'Ekosistem', body: 'Astana POS dibangun. Program Dealership DNA dilancarkan.' },
      { year: '2024', title: 'Integrasi Digital', body: 'Penjenamaan semula sebagai MCBIZ. 7,000 kedai.' },
      { year: '2025', title: 'Penetrasi Global', body: 'Play Store 177 negara. 10,000 kedai. Trademark berdaftar.' },
      { year: '2026', title: 'Pertumbuhan Pantas', body: 'Sasaran 500% pertumbuhan. Ekosistem ERP enam-tiang.', current: true, currentLabel: 'Tahun Semasa' },
    ],
  },
  reasons: {
    eyebrow: 'Mengapa Astana POS',
    headline: 'Lima sebab peniaga pilih cloud kami.',
    items: [
      { number: '01', title: 'Tiada Yuran Tahunan', body: 'Bayar bulanan atau tahunan. Berhenti bila-bila tanpa penalti.' },
      { number: '02', title: 'Cloud + Offline', body: 'Jualan jalan walaupun internet down. Sync automatik bila online balik.' },
      { number: '03', title: '7,000+ Kedai', body: 'Dipercayai oleh ribuan pemilik perniagaan dari Perlis ke Sabah.' },
      { number: '04', title: '177 Negara', body: 'Tersedia di Play Store seluruh dunia. Skala antarabangsa.' },
      { number: '05', title: 'LHDN E-Invoice Ready', body: 'MyInvois compliant. Auto-submit e-invoice tanpa kerja tambahan.' },
    ],
  },
  steps: {
    eyebrow: 'Cara Ia Berfungsi',
    headline: 'Tiga langkah ke jualan pintar.',
    sub: 'Tiada teknikal. Tiada kerumitan. Mula dalam masa kurang 24 jam.',
    items: [
      { number: '01', title: 'Daftar Cuba Percuma', body: 'Daftar dalam masa 2 minit. Tiada kad kredit diperlukan.' },
      { number: '02', title: 'Pasang & Konfigurasi', body: 'Muat turun di Play Store. Pasang katalog produk dan staf.' },
      { number: '03', title: 'Mula Jual & Lihat Laporan', body: 'Jualan masuk terus ke dashboard. Laporan automatik setiap hari.' },
    ],
  },
  counters: {
    eyebrow: 'Dengan nombor',
    headline: 'Pertumbuhan dipacu kepercayaan.',
    items: [
      { value: 7000, suffix: '+', label: 'Kedai Aktif' },
      { value: 177, suffix: '', label: 'Negara' },
      { value: 6, suffix: '', label: 'Tahun Pengalaman' },
      { value: 500, suffix: '%', label: 'Sasaran 2026' },
    ],
  },
  testimonials: {
    eyebrow: 'Suara Peniaga',
    headline: 'Apa kata pemilik kedai.',
    sub: 'Kisah benar dari peniaga yang menjalankan Astana POS setiap hari.',
    rating: '4.9 / 5',
    items: [
      { quote: 'Astana POS bagi saya laporan jualan real-time. Saya boleh tengok kedai dari rumah.', name: 'Nur Aisyah', business: 'Kafe Pagi Cerah, Selangor' },
      { quote: 'Stok tak pernah habis sebab alert automatik. Untung naik 30% sejak guna cloud.', name: 'Wong Chee Keong', business: 'Runcit Setia, Penang' },
      { quote: 'E-invoice automatik. Tak payah keluar dari sistem. Save masa 5 jam seminggu.', name: 'Hafiz Rahman', business: 'Butik Modern, Kuala Lumpur' },
    ],
  },
  finalCta: {
    eyebrow: 'Mula hari ini',
    headline: 'Sedia untuk cloud kedai anda?',
    sub: 'Cuba percuma 14 hari. Tiada kad kredit. Tiada komitmen.',
    ctaPrimary: 'Cuba Percuma 14 Hari',
    ctaSecondary: 'Sembang di WhatsApp',
    stats: [
      { value: '< 5 min', label: 'Masa daftar' },
      { value: '24 jam', label: 'Mula jualan' },
      { value: '14 negeri', label: 'Pelanggan' },
    ],
  },
  footer: {
    manifesto: 'Sistem juruwang cloud untuk peniaga Malaysia. Cuba percuma, batal bila-bila.',
    badges: ['Trademark Berdaftar', 'Tersedia di Play Store'],
    columns: {
      produk: {
        title: 'Produk',
        links: [
          { label: 'Ciri-ciri', href: '/features' },
          { label: 'Pelan Langganan', href: '/pricing' },
          { label: 'Industri', href: '/industries' },
        ],
      },
      syarikat: {
        title: 'Syarikat',
        links: [
          { label: 'Tentang Kami', href: '/about' },
          { label: 'Rakan Kongsi', href: '/partners' },
          { label: 'Hubungi', href: '/contact' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      sumber: {
        title: 'Sumber',
        links: [
          { label: 'Pusat Bantuan', href: '#' },
          { label: 'Status Sistem', href: '#' },
          { label: 'Log Masuk', href: 'https://hub.astanabiz.com/' },
        ],
      },
    },
    address: 'No 19A Jalan Astana E13/E, 42300 Bandar Puncak Alam, Selangor',
    copyright: '© 2026 Astana POS. Hak cipta terpelihara.',
    privacy: 'Privasi',
    terms: 'Terma',
    siblingPill: 'Sebahagian daripada Astana Group · Lihat juga: MCBIZ →',
  },
  dashboard: {
    todaySales: 'Jualan hari ini',
    sparkChart: '7 hari',
    activeOrders: 'Pesanan aktif',
    activeOrdersCount: '12 aktif',
    activeOrdersList: ['#1247 · Meja 5', '#1246 · Bungkus', '#1245 · Cabang 02'],
    topItems: 'Item terlaris hari ini',
    topItemsList: [
      { name: 'Nasi Lemak', count: 47 },
      { name: 'Teh Ais', count: 38 },
      { name: 'Roti John', count: 24 },
    ],
    inventoryHealth: 'Stok sihat',
    inventoryHealthValue: '87%',
    staffActive: 'Staf aktif',
    chips: {
      newOrder: {
        title: 'Pesanan baru · Kedai Cabang 02',
        subtitle: '2× Nasi Lemak, 1× Teh Ais — RM18.50',
      },
      lowStock: {
        title: 'Stok rendah · Roti John',
        subtitle: '3 unit lagi · Buat PO?',
      },
      dailyReport: {
        title: 'Laporan harian siap',
        subtitle: 'Untung kasar RM2,847 · 23% dari semalam',
      },
    },
  },
} as const;

export type Dictionary = typeof ms;
```

The EN file mirrors this structure with translations from the master plan. **Default state: `locale = 'ms'`, persisted in `localStorage['astanapos-locale']`.**

---

## Step 4 — Shared Components

Build in `src/components/shared/`:

### 4.1 `Navbar.tsx`
Sticky, borderless above 20px scroll, hairline + backdrop-blur below. Logo wordmark left. Centre nav links from `t.nav.*`. Right: language toggle → Log Masuk ghost → Cuba Percuma gradient primary. Mobile: hamburger + Sheet.

### 4.2 `Footer.tsx`
Deep brand background + vertical gradient + scoped mini mesh. 4 columns left (Produk, Syarikat, Sumber, no Social yet) + decorative oversized wordmark right (`--color-brand-mid` at ~18%). Bottom row: copyright + address + Privasi/Terma + sibling-brand pill linking to MCBIZ.

### 4.3 `LanguageToggle.tsx`
Two pill segments (BM/EN). Active filled with brand-primary. Persist to localStorage.

### 4.4 `CTAButton.tsx`
Variants: `primary` (gradient bg), `secondary` (hairline border), `ghost`. All pill-shaped. Accept href/external/icon/children/onClick.

### 4.5 `SectionWrapper.tsx`
Standard section container. Accepts `id`, `tone` (`'page'|'tint'|'deep'`). Wraps children in motion.div with sectionVariants (whileInView, viewport once).

### 4.6 `WhatsAppFloat.tsx`
Bottom-right fixed button. Links to `wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE)}`.

### 4.7 `LiveDashboard.tsx` ⭐
**This is the signature visual asset.** Build per the **"LiveDashboard Component Specification"** section of `v2_astanapos_design.md`. Full DOM + Framer Motion + inline SVG (no video). Two variants: `hero` (full 6-card grid + chip cycle) and `mini` (3-card simplified, no chips). `useInView` pauses everything off-screen. `prefers-reduced-motion` renders static final state.

### 4.8 `Marquee.tsx`
CSS-animation horizontal marquee. Two duplicated tracks for seamless loop. Pause on hover. Accepts array of `chips: { type: 'module' | 'customer', label: string, icon?: LucideIcon }[]`. Caption above. Reduced motion: static wrap.

### 4.9 `useCountUp.ts` (hook)
Custom hook in `src/hooks/`. Animates value from start to end over duration using easeOutCubic. Used by LiveDashboard sales counter AND Counter Stats section.

---

## Step 5 — Homepage Sections

Build all 12 in `src/components/sections/home/`. Each file is its own component. Each receives content via `useLocale()`. No hardcoded strings.

### Section 1 — `Hero.tsx`
Two-column. Left: `t.hero.trustLine` (small pill above headline) → eyebrow → 3-line headline (with `.hero-gradient-text` on the middle phrase `t.hero.headlineGradient`) → sub → 3 trust bullets with Lucide check icons → dual CTA → Play Store badge link. Right: `<LiveDashboard variant="hero" />` with subtle scroll parallax. Mobile stacks.

### Section 2 — `ModuleMarquee.tsx`
Full-bleed band. Caption `t.marquee.caption` above. Below: `<Marquee chips={[...modules, ...customers]} />` with module chips styled differently from customer chips (per design.md).

### Section 3 — `Industries.tsx`
Two-column. Left: eyebrow + headline + sub + 12 industry chips (flex wrap) + stat callout below ("12 industri"). Right: detail card showing selected industry with `<LiveDashboard variant="mini" />`. State: `useState('restoran')` for selected chip. Clicking non-restoran chips shows a "Akan datang" toast (use shadcn or simple inline indicator). Animate detail content swap with `AnimatePresence`.

### Section 4 — `Pricing.tsx`
Eyebrow + headline + sub. Monthly/Yearly toggle below (uses `useState`). 4-column tier card grid below the toggle. Each tier card: name, price (reactive to toggle), suffix (`/bln` or `/thn`), "Untuk: [for]" caption, feature bullets, primary CTA "Cuba Percuma" routing to `NEXT_PUBLIC_HUB_REGISTRATION_URL`, ghost secondary "Sembang dengan kami" routing to WhatsApp with prefilled tier name. Growth tier has `scale-105`, gradient ring, "Paling Popular" badge. Mobile single column.

### Section 5 — `HardwareCrossSell.tsx`
Full-bleed band on `--color-surface-tint`. Centred: title + sub + CTA linking to `NEXT_PUBLIC_MCBIZ_PRODUCTS_URL`. Below: 4 small terminal thumbnails (use placeholder image URLs from MCBIZ or generic placeholder boxes if unsure — flag as a follow-up).

### Section 6 — `Timeline.tsx`
Two-column desktop. Left: eyebrow + headline + 2 paragraphs + 3 stat cards (`t.timeline.stats`). Right: vertical timeline rail with 7 milestone events (`t.timeline.events`). 2026 event has "Tahun Semasa" badge per the `current: true` flag. Each event reveals on scroll with stagger 0.08s.

### Section 7 — `Reasons.tsx`
Eyebrow + headline above. 5 reason cards (`t.reasons.items`) arranged in 3+2 grid on desktop, single column mobile. Each card uses the **reason card variant** from design.md: hairline + numbered + green corner accent on hover.

### Section 8 — `Steps.tsx`
Eyebrow + headline + sub. 3 step cards in a row on desktop, single column mobile. Each uses the **step card variant** from design.md: thick gradient top border + big number + heading + body.

### Section 9 — `Counters.tsx`
Eyebrow + headline centred. 4-column counter card grid (2x2 tablet, single mobile). Each counter card uses `useCountUp` animating from 0 to target value over 1.6s on scroll-into-view (use `useInView` to trigger). Tabular-nums. Format with locale-aware thousand separators (`Intl.NumberFormat`).

### Section 10 — `Testimonials.tsx`
Eyebrow + headline + sub + 4.9/5 rating badge. 3 quote cards in a row (single column mobile). Each card uses the **testimonial card variant** from design.md: large green opening quote mark + italic quote + avatar circle with initials + name + business.

### Section 11 — `FinalCTA.tsx`
Full-bleed `--color-brand-deep` band. Scoped intensified mesh. Centred: eyebrow + headline + sub + dual CTA. 3 mini stats below CTAs (`t.finalCta.stats`).

### Section 12 — `Footer.tsx`
Already built as a shared component (4.2). Just referenced in `app/layout.tsx`.

---

## Step 6 — Wiring It Together

In `app/page.tsx`:

```tsx
import { Hero } from '@/components/sections/home/Hero';
import { ModuleMarquee } from '@/components/sections/home/ModuleMarquee';
import { Industries } from '@/components/sections/home/Industries';
import { Pricing } from '@/components/sections/home/Pricing';
import { HardwareCrossSell } from '@/components/sections/home/HardwareCrossSell';
import { Timeline } from '@/components/sections/home/Timeline';
import { Reasons } from '@/components/sections/home/Reasons';
import { Steps } from '@/components/sections/home/Steps';
import { Counters } from '@/components/sections/home/Counters';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ModuleMarquee />
      <Industries />
      <Pricing />
      <HardwareCrossSell />
      <Timeline />
      <Reasons />
      <Steps />
      <Counters />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
```

`<Navbar />`, `<Footer />`, `<WhatsAppFloat />`, `<GradientMeshAtmosphere />` live in `app/layout.tsx`.

---

## Step 7 — Environment Variables

Create `.env.local.example` with all keys from `v2_astanapos_master_plan.md` env vars section. Phase 1 uses `NEXT_PUBLIC_*` keys; RESEND keys for Phase 2.

---

## Step 8 — Quality Checklist

Before declaring Phase 1 done, verify:

**Structural**
- [ ] No second project created. No `tailwind.config.ts`.
- [ ] `app/globals.css` contains the full `@theme {}` block + mesh keyframes + marquee keyframes + `.hero-gradient-text` utility
- [ ] All custom utilities resolve: `bg-brand-primary`, `text-counter`, `text-marquee-chip`, `font-display`, etc.

**Bilingual**
- [ ] `src/i18n/ms.ts` and `en.ts` have every string used in all 12 sections
- [ ] `useLocale()` toggles every visible string immediately (including dashboard chips, marquee chips, tier features, timeline events, etc.)
- [ ] Default `'ms'`, persisted in localStorage under `astanapos-locale`
- [ ] No hardcoded copy anywhere

**Typography & assets**
- [ ] Display font is **Syne** (NOT Cabinet Grotesk, NOT Inter — Syne is mandatory for V2)
- [ ] Body font is Satoshi
- [ ] Hero headline middle phrase uses `.hero-gradient-text` (green sweep visible)
- [ ] Dashboard numbers + counter stats use `tabular-nums`
- [ ] No `<img>` tags — only `next/image`

**All 12 sections present, in order**
- [ ] Section 1 Hero with LiveDashboard right + 3 trust bullets + dual CTA
- [ ] Section 2 Module Marquee — full-bleed, two-track marquee, pauses on hover
- [ ] Section 3 Industries — 12 chips + selected detail with mini dashboard
- [ ] Section 4 Pricing — 4 tier cards, monthly/yearly toggle, Growth highlighted
- [ ] Section 5 Hardware Cross-Sell — band linking to MCBIZ products
- [ ] Section 6 Timeline — 7 milestones from 2020 to 2026, 2026 marked Tahun Semasa
- [ ] Section 7 Reasons — 5 numbered reason cards
- [ ] Section 8 Steps — 3 step cards
- [ ] Section 9 Counters — 4 counter cards animating up from 0 on scroll
- [ ] Section 10 Testimonials — 3 quote cards + 4.9/5 badge
- [ ] Section 11 Final CTA — deep brand band with dual CTA + 3 mini stats
- [ ] Section 12 Footer — 4 columns + decorative wordmark + **sibling-brand pill linking to MCBIZ**

**LiveDashboard non-negotiables**
- [ ] DOM + Framer Motion + inline SVG (no video, no GIF, no Canvas)
- [ ] Sales counter ticks from RM38,420 → RM43,567 on mount, then increments randomly RM1-8 every 3-6s
- [ ] New order chip at t=2s, low stock at t=5s, daily report at t=9s, cycle restarts at t=30s
- [ ] `useInView` pauses everything off-screen
- [ ] `prefers-reduced-motion` renders static final state
- [ ] `role="img"`, `aria-label`, chips have `aria-live="polite"`
- [ ] Both variants work: `hero` (full) and `mini` (used in Industries section)

**Counter Stats**
- [ ] Numbers match MCBIZ exactly: 7,000+ / 177 / 6 / 500%
- [ ] Animate from 0 on scroll-into-view via `useCountUp` + `useInView`
- [ ] Tabular figures
- [ ] Use `Intl.NumberFormat` for locale-aware thousand separators

**Timeline**
- [ ] All 7 events present (2020-2026)
- [ ] 2026 has "Tahun Semasa" badge
- [ ] Vertical rail visible with milestone dots
- [ ] Events stagger-reveal on scroll (0.08s)

**Pricing**
- [ ] Monthly/Yearly toggle changes displayed prices reactively
- [ ] Growth tier visually elevated (scale-105 + gradient ring + "Paling Popular" badge)
- [ ] All "Cuba Percuma" CTAs route to `NEXT_PUBLIC_HUB_REGISTRATION_URL`
- [ ] All "Sembang dengan kami" CTAs route to WhatsApp with tier name prefilled in the message

**Hardware Cross-Sell**
- [ ] CTA links to `NEXT_PUBLIC_MCBIZ_PRODUCTS_URL` (not a deadlink)

**Footer**
- [ ] Sibling-brand pill is present, visible, and links to `NEXT_PUBLIC_MCBIZ_URL`

**Atmosphere**
- [ ] Gradient mesh visible across entire page, drifts slowly
- [ ] Footer has scoped mini mesh

**Marquee**
- [ ] Auto-scrolls left smoothly
- [ ] Pauses on hover
- [ ] Module chips styled distinctly from customer chips
- [ ] Reduced motion: static wrap, no animation

**Responsiveness**
- [ ] 375px / 768px / 1280px all render cleanly across all 12 sections
- [ ] Hero stacks copy/dashboard vertically on mobile
- [ ] Industry chips wrap to multiple rows on smaller widths
- [ ] Timeline becomes single-column vertical on mobile
- [ ] Pricing cards single-column on mobile

**Performance & quality**
- [ ] `bunx tsc --noEmit` passes
- [ ] `bun run lint` passes
- [ ] No console errors/warnings
- [ ] All `whileInView` animations have `viewport={{ once: true }}` (except counters which need to trigger only once per scroll)
- [ ] `setInterval` properly cleared on unmount in LiveDashboard
- [ ] Mesh keyframes paused via `prefers-reduced-motion`

---

## What NOT to Build in Phase 1

- `/features`, `/industries` full pages (Phase 2)
- `/pricing` full comparison page (Phase 2 — homepage section 4 is the teaser)
- `/about`, `/partners`, `/contact` pages (Phase 2)
- Calendly embed and booking form (Phase 2)
- React Hook Form + Zod enquiry form + Resend (Phase 2)
- Blog index and `/blog/[slug]` (Phase 3)
- Legal pages (Phase 4)
- SEO structured data beyond homepage title/description (Phase 4)
- `sitemap.xml`, `robots.txt`, OG image (Phase 4)
- Per-industry dashboard variants for the 11 non-Restoran industries (Phase 2 expansion)
- Deployment scripts, PM2, nginx (Mat handles VPS)

---

## Done?

When Phase 1 is complete, reply with:

1. **File tree** of all new files under `src/` (12 sections, 9 shared components, i18n, hooks)
2. **Side-by-side screenshot description** comparing the Astana POS homepage section flow vs MCBIZ's section flow — confirm all 12 sections present in the same order
3. **Translation coverage check**: every visible string in both `ms.ts` and `en.ts`
4. **Animation pause check**: confirm LiveDashboard pauses off-screen, mesh + marquee respect reduced motion
5. **Pricing toggle check**: monthly → yearly switch updates all 4 tier card prices
6. **Counter trigger check**: counters animate from 0 on scroll-into-view, not on page load
7. **Any blockers** — missing fonts, missing env vars, ambiguities resolved with assumptions
8. Confirmation that the **quality checklist** passes top to bottom