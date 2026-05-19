'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Bell, AlertTriangle, FileText } from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

type Variant = 'hero' | 'mini';
type ChipKey = 'newOrder' | 'lowStock' | 'dailyReport';

const CHIP_SEQUENCE: { key: ChipKey; start: number; end: number }[] = [
  { key: 'newOrder', start: 2000, end: 5000 },
  { key: 'lowStock', start: 5000, end: 8000 },
  { key: 'dailyReport', start: 9000, end: 12000 },
];
const CYCLE_MS = 30_000;

const SALES_START = 38_420;
const SALES_END = 43_567;
const COUNTUP_DURATION = 4000;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatRM(n: number) {
  return `RM${Math.round(n).toLocaleString('en-MY')}`;
}

export function LiveDashboard({ variant = 'hero' }: { variant?: Variant }) {
  const { t } = useLocale();
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '0px 0px -10% 0px', amount: 0.2 });

  const [sales, setSales] = useState(SALES_START);
  const [activeChip, setActiveChip] = useState<ChipKey | null>(null);
  const displaySales = reducedMotion ? SALES_END : sales;

  // --- Count-up + idle ticker ---
  useEffect(() => {
    if (reducedMotion || !inView) return;

    let frame: number | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;
    let cancelled = false;

    const startTime = performance.now();
    const animate = (now: number) => {
      if (cancelled) return;
      const t = Math.min((now - startTime) / COUNTUP_DURATION, 1);
      const eased = easeOutCubic(t);
      setSales(SALES_START + (SALES_END - SALES_START) * eased);
      if (t < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        // Idle ticker — increment by RM1-8 every 3-6s
        const tick = () => {
          if (cancelled) return;
          setSales((prev) => prev + 1 + Math.floor(Math.random() * 8));
          const next = 3000 + Math.random() * 3000;
          interval = setTimeout(tick, next) as unknown as ReturnType<typeof setInterval>;
        };
        const first = 3000 + Math.random() * 3000;
        interval = setTimeout(tick, first) as unknown as ReturnType<typeof setInterval>;
      }
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelled = true;
      if (frame !== null) cancelAnimationFrame(frame);
      if (interval !== null) clearTimeout(interval as unknown as number);
    };
  }, [inView, reducedMotion]);

  // --- Chip cycle ---
  useEffect(() => {
    if (reducedMotion || !inView) {
      return () => {};
    }

    if (variant === 'mini') {
      const timers: ReturnType<typeof setTimeout>[] = [];
      const runMini = () => {
        timers.push(setTimeout(() => setActiveChip('lowStock'), 800));
        timers.push(setTimeout(() => setActiveChip(null), 4500));
      };
      runMini();
      const interval = setInterval(runMini, 8000);
      return () => {
        timers.forEach(clearTimeout);
        clearInterval(interval);
        setActiveChip(null);
      };
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const scheduleCycle = (offset: number) => {
      CHIP_SEQUENCE.forEach(({ key, start, end }) => {
        timers.push(
          setTimeout(() => {
            if (!cancelled) setActiveChip(key);
          }, offset + start),
        );
        timers.push(
          setTimeout(() => {
            if (!cancelled) setActiveChip((curr) => (curr === key ? null : curr));
          }, offset + end),
        );
      });
    };

    scheduleCycle(0);
    const loop = setInterval(() => scheduleCycle(0), CYCLE_MS);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      clearInterval(loop);
      setActiveChip(null);
    };
  }, [inView, reducedMotion, variant]);

  const isMini = variant === 'mini';

  return (
    <div
      ref={ref}
      role="img"
      aria-label={t.dashboard.ariaLabel}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-[var(--color-border-hairline)] bg-[var(--color-surface)] shadow-[0_24px_60px_-20px_rgba(15,140,92,0.22)]',
        isMini ? 'w-full max-w-md' : 'w-full',
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border-hairline)] bg-[var(--color-surface-tint)]/60 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-full bg-[var(--color-surface)] px-3 py-0.5 text-center text-[0.7rem] text-[var(--color-text-muted)]">
          {t.dashboard.browserUrl}
        </div>
      </div>

      {/* Dashboard body */}
      <div
        className={cn(
          'grid gap-3 p-3 md:gap-4 md:p-5',
          isMini ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-2',
        )}
      >
        <SalesCard
          label={t.dashboard.todaySales}
          value={formatRM(displaySales)}
          subtitle="+12.4% ↑"
        />
        <SparkCard
          label={t.dashboard.sparkChart}
          subtitle={t.dashboard.sparkSubtitle}
        />
        {!isMini && (
          <>
            <OrdersCard
              label={t.dashboard.activeOrders}
              countLabel={`12 ${t.dashboard.activeOrdersCount}`}
              orderLabels={t.dashboard.orderLabels}
            />
            <TopItemsCard label={t.dashboard.topItems} />
            <InventoryCard
              label={t.dashboard.inventoryHealth}
              healthy={t.dashboard.inventoryHealthy}
            />
            <StaffCard
              label={t.dashboard.staffActive}
              online={t.dashboard.staffOnline}
            />
          </>
        )}
        {isMini && (
          <>
            <OrdersCard
              label={t.dashboard.activeOrders}
              countLabel={`12 ${t.dashboard.activeOrdersCount}`}
              orderLabels={t.dashboard.orderLabels}
            />
            <InventoryCard
              label={t.dashboard.inventoryHealth}
              healthy={t.dashboard.inventoryHealthy}
            />
          </>
        )}
      </div>

      {/* Floating chip overlay */}
      <div
        aria-live="polite"
        className="pointer-events-none absolute right-3 top-12 flex w-[min(20rem,80%)] flex-col items-end gap-2 md:right-5 md:top-16"
      >
        <AnimatePresence mode="wait">
          {activeChip && (
            <Chip key={activeChip} chipKey={activeChip} reducedMotion={reducedMotion} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* -------------------- Sub-components -------------------- */

function CardShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-page-bg)]/60 p-3 md:p-4',
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[0.65rem] font-medium uppercase leading-tight tracking-[0.08em] text-[var(--color-text-muted)] md:text-[0.7rem]">
      {children}
    </p>
  );
}

function SalesCard({
  label,
  value,
  subtitle,
}: {
  label: string;
  value: string;
  subtitle: string;
}) {
  return (
    <CardShell>
      <CardLabel>{label}</CardLabel>
      <p className="font-display tabular-nums mt-2 text-[clamp(1.25rem,2.6vw,1.9rem)] font-extrabold leading-none text-[var(--color-ink)]">
        {value}
      </p>
      <p className="mt-1.5 text-[0.7rem] font-medium text-[var(--color-brand-primary)] md:text-xs">
        {subtitle}
      </p>
    </CardShell>
  );
}

function SparkCard({ label, subtitle }: { label: string; subtitle: string }) {
  // 7-day believable trend
  const data = [22, 28, 25, 31, 29, 38, 41];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 100;
  const h = 36;
  const stepX = w / (data.length - 1);
  const points = data
    .map((v, i) => {
      const x = i * stepX;
      const y = h - ((v - min) / (max - min || 1)) * h;
      return `${x},${y}`;
    })
    .join(' ');
  const areaPath = `M0,${h} L${points.split(' ').join(' L')} L${w},${h} Z`;
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <CardLabel>{label}</CardLabel>
        <span className="text-[0.65rem] text-[var(--color-text-muted)]">{subtitle}</span>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="mt-3 h-12 w-full md:h-16"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#spark-fill)" />
        <polyline
          points={points}
          fill="none"
          stroke="var(--color-brand-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </CardShell>
  );
}

function OrdersCard({
  label,
  countLabel,
  orderLabels,
}: {
  label: string;
  countLabel: string;
  orderLabels: { table: string; takeaway: string; branch: string };
}) {
  const rows = [
    { id: '#1247', meta: `${orderLabels.table} 5` },
    { id: '#1246', meta: orderLabels.takeaway },
    { id: '#1245', meta: `${orderLabels.branch} 02` },
  ];
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <CardLabel>{label}</CardLabel>
        <span className="text-[0.7rem] font-semibold text-[var(--color-brand-primary)]">
          {countLabel}
        </span>
      </div>
      <ul className="mt-2 space-y-1.5">
        {rows.map((r) => (
          <li
            key={r.id}
            className="flex items-center justify-between rounded-md bg-[var(--color-surface)] px-2 py-1.5 text-[0.7rem] text-[var(--color-ink)] md:text-xs"
          >
            <span className="font-display font-bold tabular-nums">{r.id}</span>
            <span className="text-[var(--color-text-muted)]">{r.meta}</span>
          </li>
        ))}
      </ul>
    </CardShell>
  );
}

function TopItemsCard({ label }: { label: string }) {
  const items = [
    { name: 'Nasi Lemak', count: 47, pct: 100 },
    { name: 'Teh Ais', count: 38, pct: 80 },
    { name: 'Roti John', count: 24, pct: 50 },
  ];
  return (
    <CardShell>
      <CardLabel>{label}</CardLabel>
      <ul className="mt-2.5 space-y-2">
        {items.map((it) => (
          <li key={it.name}>
            <div className="flex items-center justify-between text-[0.7rem] text-[var(--color-ink)] md:text-xs">
              <span className="truncate font-medium">{it.name}</span>
              <span className="tabular-nums text-[var(--color-text-muted)]">{it.count}</span>
            </div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-[var(--color-border-hairline)]/60">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${it.pct}%`,
                  background:
                    'linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-mid))',
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </CardShell>
  );
}

function InventoryCard({ label, healthy }: { label: string; healthy: string }) {
  const pct = 87;
  const r = 22;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <CardShell>
      <CardLabel>{label}</CardLabel>
      <div className="mt-2 flex items-center gap-3">
        <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
          <circle
            cx="28"
            cy="28"
            r={r}
            stroke="var(--color-border-hairline)"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="28"
            cy="28"
            r={r}
            stroke="var(--color-brand-primary)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            transform="rotate(-90 28 28)"
          />
          <text
            x="28"
            y="32"
            textAnchor="middle"
            className="font-display tabular-nums"
            style={{ fill: 'var(--color-ink)', fontSize: '0.75rem', fontWeight: 800 }}
          >
            {pct}%
          </text>
        </svg>
        <p className="text-[0.7rem] font-medium text-[var(--color-text-muted)] md:text-xs">
          {healthy}
        </p>
      </div>
    </CardShell>
  );
}

function StaffCard({ label, online }: { label: string; online: string }) {
  const staff = [
    { initials: 'AZ', bg: 'oklch(0.78 0.10 158)' },
    { initials: 'NS', bg: 'oklch(0.68 0.14 50)' },
    { initials: 'KH', bg: 'oklch(0.62 0.14 158)' },
  ];
  return (
    <CardShell>
      <CardLabel>{label}</CardLabel>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex -space-x-2">
          {staff.map((s) => (
            <div
              key={s.initials}
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-page-bg)] font-display text-[0.65rem] font-extrabold text-[var(--color-page-bg)] md:h-9 md:w-9"
              style={{ background: s.bg }}
            >
              {s.initials}
              <span className="absolute -bottom-0.5 -right-0.5 inline-block h-2.5 w-2.5 rounded-full border-2 border-[var(--color-page-bg)] bg-[var(--color-brand-primary)]" />
            </div>
          ))}
        </div>
        <span className="text-[0.7rem] text-[var(--color-text-muted)] md:text-xs">
          3 {online}
        </span>
      </div>
    </CardShell>
  );
}

function Chip({
  chipKey,
  reducedMotion,
}: {
  chipKey: ChipKey;
  reducedMotion: boolean;
}) {
  const { t } = useLocale();
  const data = t.dashboard.chips[chipKey];

  const icon = useMemo(() => {
    if (chipKey === 'newOrder') return <Bell className="h-3.5 w-3.5" />;
    if (chipKey === 'lowStock') return <AlertTriangle className="h-3.5 w-3.5" />;
    return <FileText className="h-3.5 w-3.5" />;
  }, [chipKey]);

  const accent =
    chipKey === 'newOrder'
      ? 'var(--color-brand-primary)'
      : chipKey === 'lowStock'
        ? 'oklch(0.65 0.16 50)'
        : 'var(--color-brand-mid)';

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
      transition={{
        duration: reducedMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="pointer-events-auto w-full max-w-xs rounded-full border border-[var(--color-border-hairline)] bg-[var(--color-surface)] px-3 py-2 shadow-[0_10px_28px_-12px_rgba(15,140,92,0.35)]"
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--color-page-bg)]"
          style={{ background: accent }}
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[0.72rem] font-bold leading-tight text-[var(--color-ink)] md:text-xs">
            {data.title}
          </p>
          <p className="truncate text-[0.65rem] leading-tight text-[var(--color-ink-soft)] md:text-[0.7rem]">
            {data.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
