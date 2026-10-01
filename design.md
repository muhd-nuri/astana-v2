# Astana POS — Design System & Style Guide (V2 — Mirrors MCBIZ Structurally)

## Design Vision

**Three-word brand statement:** *Unlimited. Cloud. Yours.*

**Aesthetic thesis (one sentence):**
Astana POS shares MCBIZ's brand language — same display font (Syne), same emerald-gradient palette, same warm atmosphere, **same 12-section homepage rhythm** — but every section's content is reoriented from hardware bundles to cloud software, with the live-feeling dashboard replacing the static terminal photo as the hero visual.

**Signature element:**
The **live-feeling dashboard hero** — a rendered Astana POS dashboard at the top of the page, with mini-cards animating in over the first ~6 seconds (sales counter ticking, new-order chip sliding in, low-stock alert flashing, daily-report-ready chip appearing). This is the one part of the hero composition that diverges from MCBIZ's static terminal image — everything around it (eyebrow + bullets + dual CTA + trust line) follows the same layout.

**Atmosphere layer (mandatory, global):**
A **soft gradient mesh** — three brand-tinted green radial blobs drifting slowly behind the content (90–110s loops). Same atmosphere logic as MCBIZ. Fixed-position, z-index -10, pointer-events none.

**Voice & copy tone:**
Confident, plain-spoken. Same tone as MCBIZ copy. BM-primary, EN as faithful translation.

---

## Anti-Patterns — Do Not Ship

**Do not use:**
- Any display font other than **Syne** (family resemblance depends on it — Cabinet Grotesk was V1, here Syne is mandatory)
- Inter, Plus Jakarta, Geist, Cabinet Grotesk, Roboto
- Video or GIF for the live dashboard — DOM + Framer Motion only
- A 6-section homepage (must be the full 12)
- Generic SaaS blue accents
- Pure black or pure white
- Hover-scale 1.05 on cards
- Stock photo cashier-with-tablet imagery
- A "Tambah ke Troli" / cart UI on the pricing section (this is not e-commerce)
- A different number scheme on the counter stats — they must match MCBIZ exactly

**Do use:**
- Syne for all display (matching MCBIZ exactly)
- Gradient text treatment on the bolded hero phrase
- Gradient buttons (matching MCBIZ CTA style)
- Soft rounded cards with green-tinted shadow
- The full 12-section MCBIZ rhythm in order
- Real DOM dashboard mockup (LiveDashboard component)
- Marquee with CSS `animation` (not JS-based)
- Tabular figures for any number animating or in a counter

---

## Color Palette

**Hue strategy:** **inherit MCBIZ's palette wholesale**. Same emerald spine. Same gradient logic. Same warm cream background. Zero brand whiplash crossing between sites.

| Token | Value (oklch + hex fallback) | Usage |
|---|---|---|
| `--color-brand-primary` | `oklch(0.52 0.16 158)` ≈ `#0F8C5C` | Primary CTAs, headline accents, brand mark |
| `--color-brand-mid` | `oklch(0.62 0.14 158)` ≈ `#26A876` | Hover states, gradient mid-stops |
| `--color-brand-light` | `oklch(0.78 0.10 158)` ≈ `#75CBA9` | Gradient highlight stops |
| `--color-brand-pale` | `oklch(0.94 0.04 158)` ≈ `#DDF2E7` | Tag/badge backgrounds, mesh blob colour |
| `--color-brand-deep` | `oklch(0.32 0.10 165)` ≈ `#0B4A35` | Footer, dark accent moments |
| `--color-ink` | `oklch(0.20 0.02 250)` ≈ `#1A1F2B` | Body text, headlines |
| `--color-ink-soft` | `oklch(0.42 0.02 250)` ≈ `#5A6273` | Secondary text |
| `--color-text-muted` | `oklch(0.62 0.02 250)` ≈ `#8E93A4` | Captions |
| `--color-page-bg` | `oklch(0.98 0.005 80)` ≈ `#FAF9F5` | Warm cream page background |
| `--color-surface` | `oklch(1 0 0)` ≈ `#FFFFFF` | Cards, dashboard mockup |
| `--color-surface-tint` | `oklch(0.96 0.008 80)` ≈ `#F2EFE7` | Alternating section background |
| `--color-border-hairline` | `oklch(0.90 0.005 250)` ≈ `#E0E2E5` | Hairline dividers, card borders |

**Color rules:**
- **Gradients are part of the brand language** — CTA buttons, hero headline phrase, card top borders.
- **Hero headline bolded phrase** uses `.hero-gradient-text` — green sweep from `--color-brand-primary` → `--color-brand-mid` → `--color-brand-light` via `background-clip: text`.
- **Page bg is warm cream**, not pure white.
- **Footer** is `--color-brand-deep` with subtle vertical gradient overlay for depth.
- **CTA buttons** use linear gradient (`--color-brand-primary` → `--color-brand-mid` at 135°).
- **Section background alternation**: sections 1, 2, 3, 5, 7, 9, 11 = page-bg; sections 4, 6, 8, 10 = surface-tint. Creates visual rhythm matching MCBIZ.

---

## Typography

**Display:** **Syne** (Fontshare, free for commercial use). **Mandatory** for family resemblance with MCBIZ.
**Body:** **Satoshi** (Fontshare, free for commercial use).

**Weights to load:**
- Syne: 600 (Semibold), 800 (Extrabold)
- Satoshi: 400 (Regular), 500 (Medium), 700 (Bold)

**`next/font` snippet for `app/layout.tsx`:**

```tsx
import localFont from 'next/font/local';

const syne = localFont({
  src: [
    { path: '../public/fonts/Syne-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/Syne-Extrabold.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});

// Apply to <html>: <html lang="ms" className={`${syne.variable} ${satoshi.variable}`}>
```

Download from `https://www.fontshare.com/fonts/syne` and `https://www.fontshare.com/fonts/satoshi`.

**Type scale:**

| Token | Size / Line / Weight / Family | Use |
|---|---|---|
| `text-hero-headline` | clamp(2.75rem, 7vw, 5.5rem) / 0.95 / 800 / display | Section 1 hero headline |
| `text-display-xl` | clamp(2.25rem, 5vw, 4rem) / 1.05 / 800 / display | Section H2 ("Enam tahun. Tujuh ribu kedai.") |
| `text-display-lg` | clamp(2rem, 4vw, 3.25rem) / 1.1 / 800 / display | Smaller section H2 |
| `text-display-md` | 2rem / 1.15 / 600 / display | Subsection headings |
| `text-display-sm` | 1.5rem / 1.2 / 600 / display | Card headings (tier name, reason title) |
| `text-counter` | clamp(2.5rem, 6vw, 4.5rem) / 1 / 800 / display | "Dengan nombor" counter stats |
| `text-body-lg` | 1.125rem / 1.6 / 400 / body | Hero subhead, intro paragraphs |
| `text-body` | 1rem / 1.65 / 400 / body | Default paragraph |
| `text-body-sm` | 0.875rem / 1.55 / 400 / body | Secondary copy |
| `text-eyebrow` | 0.75rem / 1.4 / 700 / body / 0.12em / uppercase | Section eyebrows |
| `text-caption` | 0.75rem / 1.4 / 400 / body | Captions, fine print |
| `text-dashboard-num` | clamp(1.25rem, 2.5vw, 1.75rem) / 1 / 800 / display | Dashboard mockup numbers (tabular-nums) |
| `text-dashboard-label` | 0.75rem / 1.3 / 500 / body / uppercase / 0.08em | Dashboard mockup labels |
| `text-marquee-chip` | 0.875rem / 1 / 600 / display | Module marquee chip text |

**Typography rules:**
- All headings → Syne (`font-display`).
- All body, button, form text → Satoshi (`font-body`).
- Hero headline applies `.hero-gradient-text` to the bolded phrase ("cloud juruwang" / "cashier cloud").
- All dashboard and counter numbers use `tabular-nums`.
- Letter-spacing: tighten display by `-0.02em`, leave body default.

---

## Spacing System

| Token | Value | Usage |
|---|---|---|
| `--space-3xs` | 0.25rem | Inline gaps |
| `--space-2xs` | 0.5rem | Form input padding |
| `--space-xs` | 0.75rem | Card internal gaps |
| `--space-sm` | 1rem | Default content gap |
| `--space-md` | 1.5rem | Section internal blocks |
| `--space-lg` | 2.5rem | Between sub-sections |
| `--space-xl` | 4rem | Between cards in a grid |
| `--space-2xl` | 6rem | Default desktop section padding-y |
| `--space-3xl` | 9rem | Hero section padding-y |

Sections use `py-[clamp(4rem,8vw,6rem)]` for fluid mobile→desktop scaling.

---

## Layout Grid

**12-column with intentional full-bleed breaks.**

- Standard container: `max-w-[1280px] mx-auto px-6 md:px-10`
- Full-bleed sections: the module marquee strip (section 2), the hardware cross-sell band (section 5), and the final CTA (section 11) break out to viewport edges.
- Hero (section 1) is contained but the live dashboard intentionally bleeds slightly beyond the right gutter for visual weight.

---

## Component Design Tokens

### Navbar

Mirrors MCBIZ navbar structure exactly:
- **Left**: logo (text wordmark "Astana POS" in Syne Extrabold with `.` in `--color-brand-primary`)
- **Centre links**: Produk · Pelan · Industri · Tentang Kami · Hubungi · Blog
- **Right**: BM/EN toggle → "Log Masuk" (ghost) → "Cuba Percuma" (gradient primary)
- **Mobile**: hamburger right; shadcn Sheet from the right; stacked links + CTA at the bottom

Sticky behaviour:
- Below 20px scroll: borderless, transparent, mesh shows through
- Above 20px: thin bottom border + `backdrop-blur-md` + cream background

### Buttons (gradient — matching MCBIZ)

**Primary (`btn-primary`):**
- Background: **linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-mid))**
- Text: `--color-page-bg`
- Padding: `px-6 py-3`
- Border-radius: `rounded-full` (pill)
- Hover: gradient shifts to mid → light, subtle 4px shadow expanding
- Active: `translateY(1px)`
- Icon (optional): ArrowRight / WhatsApp / Sparkle from Lucide, 16px

**Secondary (`btn-secondary`):**
- Transparent bg, `--color-ink` text, hairline border
- Hover: border + text become `--color-brand-primary`
- Same pill shape

**Ghost (`btn-ghost`):**
- Transparent, no border, `--color-ink` text
- Hover: text becomes `--color-brand-primary`

### Pricing Tier Card

**Variant: soft rounded with gradient top border.**

- Background: `--color-surface` (white)
- Border-radius: `rounded-2xl`
- 2px top border with horizontal gradient `--color-brand-pale` → `--color-brand-primary` → `--color-brand-pale`
- Shadow: `shadow-[0_8px_24px_-12px_rgba(15,140,92,0.10)]`
- Padding: `p-8` desktop, `p-6` mobile
- **"Paling Popular" tier**: receives a slight scale-up (`scale-105`), gradient ring around the card, and a small badge chip in the top-right corner
- Internal stack: tier name (Syne Semibold) → price (large, tabular-nums) → "/bulan" or "/tahun" suffix → "Untuk: [subtitle]" caption → 4-5 feature bullets with Lucide check icons → primary CTA "Cuba Percuma" (gradient button) → ghost secondary "Sembang dengan kami" → WhatsApp
- Hover: shadow deepens, no transform

### Reason Card (section 7)

**Variant: numbered card with hairline + green corner accent.**

- Background: `--color-surface`
- Border-radius: `rounded-2xl`
- 1px hairline border in `--color-border-hairline`
- Padding: `p-8`
- Large number ("01"–"05") in `--color-brand-primary` Syne Extrabold at top-left, `text-display-md` size
- Heading below: `text-display-sm` Syne Semibold
- Body below: `text-body` Satoshi Regular
- Hover: border-left shifts to a 4px solid `--color-brand-primary` accent over 0.3s ease-out
- Layout: 3 cards in the top row, 2 cards in the bottom row, mobile single column

### Step Card (section 8)

**Variant: numbered card with thick top border.**

- Background: `--color-surface`
- Border-radius: `rounded-2xl`
- 4px top border in gradient `--color-brand-primary` → `--color-brand-mid`
- Padding: `p-8`
- Big number "01"/"02"/"03" in Syne Extrabold, `--color-brand-primary`
- Heading + body below
- 3 cards in a row, mobile single column

### Testimonial Card (section 10)

**Variant: quote-marked white card.**

- Background: `--color-surface`
- Border-radius: `rounded-2xl`
- Hairline border
- Padding: `p-8`
- Large green opening quote mark in top-left (Syne Extrabold, `--color-brand-primary`, `text-6xl`)
- Quote in `text-body-lg` italic
- Bottom row: small circular avatar with initials in `--color-brand-pale` background → name + business in two lines
- 3 cards in a row, mobile single column

### Footer

- Background: `--color-brand-deep` with subtle vertical gradient overlay (top brand-deep → bottom slightly darker)
- Scoped mini gradient mesh inside footer (brand-deep + brand-mid blobs at lower opacity)
- Container: 4 columns left (Produk, Syarikat, Sumber, Sosial) + decorative oversized wordmark right (absolutely positioned, `--color-brand-mid` at ~18% opacity)
- Below columns: hairline divider in `--color-brand-mid` at 30% opacity
- Bottom row: copyright on left, HQ address + Privasi + Terma links centre, **sibling-brand pill on right**: *"Sebahagian daripada Astana Group · Lihat juga: MCBIZ →"* linking to `process.env.NEXT_PUBLIC_MCBIZ_URL`
- Mobile: columns stack, hide decorative wordmark, pill becomes full-width below copyright

---

## Texture & Visual Atmosphere

**Soft gradient mesh (mandatory, global)**

Three radial blobs in a fixed-position container, each on a slow keyframe drift.

```tsx
function GradientMeshAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 animate-mesh-drift-1"
        style={{ background: 'radial-gradient(circle at 20% 30%, var(--color-brand-pale), transparent 50%)' }}
      />
      <div
        className="absolute inset-0 animate-mesh-drift-2 opacity-60"
        style={{ background: 'radial-gradient(circle at 80% 20%, var(--color-brand-light), transparent 55%)' }}
      />
      <div
        className="absolute inset-0 animate-mesh-drift-3 opacity-30"
        style={{ background: 'radial-gradient(circle at 50% 80%, var(--color-brand-mid), transparent 60%)' }}
      />
    </div>
  );
}
```

Keyframes defined in `globals.css` (each blob shifts `translate3d` by ~5-8% over 90-110s, independent timing so they never sync).

Footer uses a scoped smaller mesh with brand-deep/brand-mid blobs at lower opacity.

---

## LiveDashboard Component Specification

The signature visual asset. Replaces MCBIZ's static terminal photo in the hero.

**Component:** `<LiveDashboard variant="hero" | "mini" />`

**Layout:**
- Outer card: `rounded-2xl`, `--color-surface` background, hairline border, drop shadow `shadow-[0_24px_60px_-20px_rgba(15,140,92,0.22)]`
- Top chrome: 3 traffic-light dots top-left + faint URL bar centred showing `app.astanabiz.com`
- Body: 2-column × 3-row grid of dashboard stat cards
- Floating notification chips overlay (top-right)

**Always-on element: Sales counter (top-left card)**
- Label: *Jualan hari ini* / *Today's sales* (`text-dashboard-label`)
- Number: starts at RM38,420, animates to RM43,567 over 4s on mount (easeOutCubic via `useCountUp`)
- After reaching target, increments by random RM1–RM8 every 3–6s via `setInterval`
- Pauses when component is off-screen (`useInView` from Framer Motion)
- Tabular figures

**Static cards (visually rich, no animation):**
- Top-right: 7-day spark chart (inline SVG, brand-primary stroke with subtle gradient fill below)
- Mid-left: "Pesanan aktif · 12 aktif" + 3 fake order rows ("#1247 · Meja 5", "#1246 · Bungkus", "#1245 · Cabang 02")
- Mid-right: "Item terlaris hari ini" — 3 products with progress bars proportional to count
- Bottom-left: Circular SVG inventory health indicator at 87% with label "stok sihat"
- Bottom-right: 3 staff avatar circles (initials, `--color-brand-pale` background) with green online dots

**Timed notification chips (the live-feeling moments):**

| Time | Event | Content |
|---|---|---|
| t=2s | New order chip slides in | Title: "Pesanan baru · Kedai Cabang 02"; Subtitle: "2× Nasi Lemak, 1× Teh Ais — RM18.50" |
| t=5s | New order fades, Low stock chip slides in | Title: "Stok rendah · Roti John"; Subtitle: "3 unit lagi · Buat PO?" |
| t=9s | Low stock faded, Daily report chip slides in | Title: "Laporan harian siap"; Subtitle: "Untung kasar RM2,847 · 23% dari semalam" |
| t=12s | Daily report fades, gap | |
| t=30s | Cycle restarts from new order | |

Each chip: `rounded-full` pill, white background, hairline border, icon left, text right. Slide in from x:100 → x:0 + opacity 0 → 1 over 0.5s easeOut. Fade out x:0 → x:20 + opacity 1 → 0 over 0.4s easeIn. All chip text from `t.dashboard.chips.*` (bilingual).

**Variants:**
- `hero`: full 6-card grid + all chip animations
- `mini`: 3-card simplified grid (sales counter + spark chart + top-items), no chips — used inside section 3 (industry tab right panel)

**Accessibility:**
- `role="img"` + `aria-label="Astana POS dashboard — animated demonstration"`
- Chips have `aria-live="polite"`
- `prefers-reduced-motion`: render final state, no animation

**Performance:**
- `useInView` pauses `setInterval` + chip cycle when off-screen
- Pure DOM + Framer Motion + inline SVG — no video, no Canvas, no WebGL

---

## Module Marquee Specification (Section 2)

Mirrors MCBIZ's catalogue marquee but with cloud module names + customer logos.

**Component:** `<Marquee />`

**Behaviour:**
- Two horizontally-tracked rows (or one row in mobile) of pill-shaped chips
- Auto-scrolls left at constant speed using CSS `animation: marquee 40s linear infinite` + `transform: translateX()`
- Two duplicated tracks side-by-side for seamless loop (when first track completes one cycle, second is already in view)
- Pauses on hover (`:hover { animation-play-state: paused; }`)

**Chip styling:**
- Module chips (Sales, Marketing, Finance, Inventory, Employee, ERP Dashboard): solid `--color-surface` background, hairline border, `--color-brand-primary` icon on left, label in `text-marquee-chip` Syne Semibold
- Customer chips (D Apple Fried Chicken, Ani Sup Utara, etc.): `--color-brand-pale` background, customer name in Satoshi Medium
- Chip padding: `px-5 py-2.5`, `rounded-full`
- Gap between chips: `gap-3`

**Caption above the marquee:**
- Small eyebrow text in `--color-text-muted`: *"Live modul · 7,000+ kedai · 177 negara · 6 modul ERP"*

**Reduced motion:**
- Disable the marquee animation, render chips static in a wrapping flex container

---

## Industry Tabs Specification (Section 3)

Mirrors MCBIZ's "Satu sistem. Dua belas industri" pattern.

**Layout:**
- Two-column desktop:
  - Left (50%): eyebrow + headline + sub + 12 industry chips in a `flex flex-wrap gap-2` arrangement + "12 industri" stat callout below
  - Right (50%): selected industry detail card with subheading + body + mini dashboard preview (`<LiveDashboard variant="mini" />` configured to show industry-relevant data) + "Lihat Produk" CTA
- Mobile: stacks vertically (chips first, then detail card below)

**Chip styling:**
- Default: `--color-surface` background, hairline border, `--color-ink` text
- Hover: border + text become `--color-brand-primary`
- Active: filled `--color-brand-primary` background, `--color-page-bg` text
- All 12 chips visible at once (no horizontal scroll); wraps to multiple rows on smaller widths

**Phase 1 behaviour:**
- Restoran chip is the default selected; clicking it shows the full Restoran content with the configured dashboard
- Other 11 chips are clickable but show a "Akan datang" / "Coming soon" toast — Phase 2 will wire each chip to its own industry-specific dashboard variant
- Use `useState` for selected chip, `AnimatePresence` for content swap

---

## Timeline Specification (Section 6)

Mirrors MCBIZ's "Perjalanan Astana" timeline.

**Layout:**
- Two-column desktop:
  - Left (40%): eyebrow + headline + 2 lead paragraphs + 3 stat cards (2020, 6, MyIPO)
  - Right (60%): vertical timeline rail with 7 milestone events (2020-2026)
- Mobile: stacks vertically; timeline becomes a left-aligned single column

**Timeline rail (right column):**
- Vertical line down the centre/left of the column in `--color-border-hairline`, with each milestone's dot intersecting the line
- Each milestone card: small dot on the rail + content card to the right with year badge + title + body
- 2026 milestone gets a "Tahun Semasa" / "Current Year" badge in `--color-brand-pale` background with `--color-brand-primary` text
- Stat cards on the left (the 3 anchor stats): rounded-2xl cards, surface background, hairline border, large stat in Syne Extrabold + small label in Satoshi Medium

**Motion:**
- Each timeline milestone reveals on scroll-into-view via `whileInView` with stagger 0.08s

---

## Counter Stats Specification (Section 9)

Mirrors MCBIZ's "Dengan nombor" pattern.

**Layout:**
- Eyebrow + headline centred above
- 4-column grid of counter cards on desktop, 2x2 on tablet, single column on mobile
- Each card: oversized number (Syne Extrabold, `text-counter`, `--color-brand-primary`) + label below

**Animation:**
- On scroll-into-view, each counter animates up from 0 to its target value over 1.6s using `useCountUp` hook (easeOutCubic)
- `aria-live="polite"` for screen readers
- Tabular-nums to prevent digit jitter

**Numbers (mirror MCBIZ exactly — same ecosystem stats):**
- 7,000+ Kedai Aktif
- 177 Negara
- 6 Tahun Pengalaman
- 500% Sasaran 2026

---

## Animation & Motion

**Motion concept: live, warm, restrained.**

Each motion element has a purpose: the dashboard ticker says "this software is alive", the marquee says "this ecosystem is busy", the counters say "this scale is real", the chips say "this is happening now". Nothing decorative.

**Framer Motion patterns:**

```tsx
// Section reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

// Stagger for grid items (reasons, steps, testimonials, tiers)
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Count-up (counter stats + dashboard sales)
function useCountUp(start: number, end: number, duration: number = 1600) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    const startTime = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(start + (end - start) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);
  return value;
}

// Chip slide-in
const chipVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.4, ease: 'easeIn' } },
};
```

**Easing standard:** `[0.16, 1, 0.3, 1]` (custom easeOutExpo), exposed as `--ease-out-expo`.

**Reduced motion:** every animation has a `prefers-reduced-motion` fallback. The mesh stops, the dashboard renders final state, counters render final values, section reveals snap, chips render static stack.

---

## Layout Patterns Per Section

| # | Section | Layout |
|---|---|---|
| 1 | Hero | Two-column. Left: trust line + eyebrow + 3-word headline with gradient phrase + sub + 3 trust bullets + dual CTA + Play Store badge. Right: `<LiveDashboard variant="hero" />` with subtle scroll parallax. Mobile stacks. |
| 2 | Module marquee | Full-bleed horizontal marquee with two tracks, eyebrow caption above. Pauses on hover. |
| 3 | Industries | Two-column. Left: eyebrow + headline + sub + 12 chips + stat. Right: selected industry detail with mini dashboard. |
| 4 | Pricing tiers | Eyebrow + headline + sub + monthly/yearly toggle, then 4-column tier card grid. Growth tier scaled up. Mobile single column. |
| 5 | Hardware cross-sell band | Full-bleed band with `--color-surface-tint` background. Centred: title + sub + CTA. 4 small terminal thumbnails below in a row. |
| 6 | Timeline | Two-column. Left: eyebrow + headline + 2 paragraphs + 3 stat cards. Right: vertical timeline rail with 7 milestone events. |
| 7 | 5 Reasons | Eyebrow + headline. 3+2 grid of reason cards on desktop. Mobile single column. |
| 8 | 3 Steps | Eyebrow + headline + sub. 3 step cards in a row. Mobile single column. |
| 9 | Counter stats | Eyebrow + headline centred. 4-column counter card grid below. Mobile 2x2 → single. |
| 10 | Testimonials | Eyebrow + headline + sub + 4.9/5 badge. 3 quote cards in a row. Mobile single column. |
| 11 | Final CTA | Full-bleed `--color-brand-deep` band with scoped mesh atmosphere. Centred: eyebrow + headline + sub + dual CTA. 3 mini stats below CTAs. |
| 12 | Footer | Deep brand background + scoped mesh + 4 columns + decorative wordmark right + bottom row with sibling-brand pill. |

---

## Full `globals.css` Block

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme {
  /* Brand greens (inherited from MCBIZ) */
  --color-brand-primary: oklch(0.52 0.16 158);
  --color-brand-mid: oklch(0.62 0.14 158);
  --color-brand-light: oklch(0.78 0.10 158);
  --color-brand-pale: oklch(0.94 0.04 158);
  --color-brand-deep: oklch(0.32 0.10 165);

  /* Ink + neutrals */
  --color-ink: oklch(0.20 0.02 250);
  --color-ink-soft: oklch(0.42 0.02 250);
  --color-text-muted: oklch(0.62 0.02 250);

  /* Surfaces */
  --color-page-bg: oklch(0.98 0.005 80);
  --color-surface: oklch(1 0 0);
  --color-surface-tint: oklch(0.96 0.008 80);

  /* Lines */
  --color-border-hairline: oklch(0.90 0.005 250);

  /* Typography */
  --font-display: var(--font-display), "Helvetica Neue", system-ui, sans-serif;
  --font-body: var(--font-body), "Helvetica Neue", system-ui, sans-serif;

  /* Type scale */
  --text-hero-headline: clamp(2.75rem, 7vw, 5.5rem);
  --text-hero-headline--line-height: 0.95;
  --text-display-xl: clamp(2.25rem, 5vw, 4rem);
  --text-display-xl--line-height: 1.05;
  --text-display-lg: clamp(2rem, 4vw, 3.25rem);
  --text-display-lg--line-height: 1.1;
  --text-display-md: 2rem;
  --text-display-md--line-height: 1.15;
  --text-display-sm: 1.5rem;
  --text-display-sm--line-height: 1.2;
  --text-counter: clamp(2.5rem, 6vw, 4.5rem);
  --text-counter--line-height: 1;
  --text-body-lg: 1.125rem;
  --text-body-lg--line-height: 1.6;
  --text-body: 1rem;
  --text-body--line-height: 1.65;
  --text-body-sm: 0.875rem;
  --text-body-sm--line-height: 1.55;
  --text-eyebrow: 0.75rem;
  --text-eyebrow--line-height: 1.4;
  --text-eyebrow--letter-spacing: 0.12em;
  --text-dashboard-num: clamp(1.25rem, 2.5vw, 1.75rem);
  --text-dashboard-num--line-height: 1;
  --text-dashboard-label: 0.75rem;
  --text-dashboard-label--line-height: 1.3;
  --text-dashboard-label--letter-spacing: 0.08em;
  --text-marquee-chip: 0.875rem;
  --text-marquee-chip--line-height: 1;

  /* Spacing */
  --spacing-section: 6rem;
  --spacing-section-lg: 9rem;

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

@layer base {
  html {
    background: var(--color-page-bg);
    color: var(--color-ink);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background: var(--color-page-bg);
    color: var(--color-ink);
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    color: var(--color-ink);
    letter-spacing: -0.02em;
  }

  ::selection {
    background: var(--color-brand-pale);
    color: var(--color-brand-deep);
  }

  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }

  .hero-gradient-text {
    background: linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-mid) 50%, var(--color-brand-light) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
}

/* Gradient mesh drift animations */
@keyframes mesh-drift-1 {
  0%   { transform: translate3d(0, 0, 0); }
  50%  { transform: translate3d(5%, -3%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes mesh-drift-2 {
  0%   { transform: translate3d(0, 0, 0); }
  50%  { transform: translate3d(-4%, 5%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes mesh-drift-3 {
  0%   { transform: translate3d(0, 0, 0); }
  50%  { transform: translate3d(3%, -5%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animate-mesh-drift-1 { animation: mesh-drift-1 95s ease-in-out infinite; }
.animate-mesh-drift-2 { animation: mesh-drift-2 110s ease-in-out infinite; }
.animate-mesh-drift-3 { animation: mesh-drift-3 100s ease-in-out infinite; }

/* Marquee */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
.animate-marquee:hover,
.animate-marquee.paused {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .animate-mesh-drift-1,
  .animate-mesh-drift-2,
  .animate-mesh-drift-3,
  .animate-marquee {
    animation: none;
  }
}
```

---

## Do's and Don'ts (V2-specific)

**Do:**
- Build all 12 homepage sections in order — the structural mirror is the whole point
- Use Syne for every heading (mandatory family-resemblance lock-in)
- Apply the hero gradient text treatment to the bolded phrase
- Use the gradient mesh atmosphere globally
- Use gradient CTA buttons throughout
- Mirror MCBIZ's exact 2020-2026 timeline content (it's the same company history)
- Mirror MCBIZ's exact counter stat numbers (it's the same ecosystem)
- Place the mandatory sibling-brand pill in the footer
- Use tabular figures on dashboard numbers and counter stats
- Pause LiveDashboard animation when off-screen via `useInView`
- Honour `prefers-reduced-motion` with static fallback for mesh, marquee, dashboard, counters

**Don't:**
- Don't ship fewer than 12 sections — the structural mirror is incomplete without it
- Don't use any display font other than Syne
- Don't put a checkout/cart on the pricing section
- Don't paraphrase the timeline content — it's the same company history as MCBIZ
- Don't use different numbers in the counter stats — they must match MCBIZ
- Don't omit the hardware cross-sell band — it's V2's strategic differentiator
- Don't omit the sibling-brand pill in the footer
- Don't write English copy first — BM is the primary audience