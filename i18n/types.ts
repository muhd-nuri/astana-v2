type Link = { label: string; href: string; external?: boolean };
type Column = { title: string; links: ReadonlyArray<Link> };

export type IndustryKey =
  | 'restoran'
  | 'kafe'
  | 'runcit'
  | 'klinik'
  | 'gim'
  | 'hotel'
  | 'salun'
  | 'dobi'
  | 'cuciKereta'
  | 'farmasi'
  | 'petShop'
  | 'butik';

export type IndustryChip = {
  key: IndustryKey;
  label: string;
  detail: string;
};

export type PricingTier = {
  key: 'starter' | 'growth' | 'multistore' | 'enterprise';
  name: string;
  monthly: number | null;
  yearly: number | null;
  contactLabel?: string;
  for: string;
  features: ReadonlyArray<string>;
};

export type TimelineEvent = {
  year: string;
  title: string;
  body: string;
  current?: boolean;
  currentLabel?: string;
};

export type Dictionary = {
  nav: {
    produk: string;
    pelan: string;
    industri: string;
    tentang: string;
    hubungi: string;
    blog: string;
    logMasuk: string;
    cubaPercuma: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    trustLine: string;
    eyebrow: string;
    headlinePre: string;
    headlineGradient: string;
    headlinePost: string;
    sub: string;
    bullets: ReadonlyArray<string>;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPlayStore: string;
  };
  marquee: {
    caption: string;
    modules: ReadonlyArray<string>;
    customers: ReadonlyArray<string>;
  };
  industries: {
    eyebrow: string;
    headline: string;
    sub: string;
    statValue: string;
    statLabel: string;
    chips: ReadonlyArray<IndustryChip>;
    detailHeadingPrefix: string;
    ctaPrimary: string;
    comingSoon: string;
  };
  pricing: {
    eyebrow: string;
    headline: string;
    sub: string;
    toggleMonthly: string;
    toggleYearly: string;
    mostPopular: string;
    tiers: ReadonlyArray<PricingTier>;
    ctaTrial: string;
    ctaChat: string;
    footerLink: string;
    currency: string;
    perMonth: string;
    perYear: string;
    untukPrefix: string;
    waPrefillTemplate: string; // e.g. "Hai Astana POS! Saya berminat dengan pelan {tier}."
  };
  hardwareBand: {
    title: string;
    sub: string;
    cta: string;
  };
  timeline: {
    eyebrow: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    stats: ReadonlyArray<{ value: string; label: string }>;
    events: ReadonlyArray<TimelineEvent>;
  };
  reasons: {
    eyebrow: string;
    headline: string;
    items: ReadonlyArray<{ number: string; title: string; body: string }>;
  };
  steps: {
    eyebrow: string;
    headline: string;
    sub: string;
    items: ReadonlyArray<{ number: string; title: string; body: string }>;
  };
  counters: {
    eyebrow: string;
    headline: string;
    items: ReadonlyArray<{ value: number; suffix: string; label: string }>;
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    sub: string;
    rating: string;
    items: ReadonlyArray<{ quote: string; name: string; business: string }>;
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: ReadonlyArray<{ value: string; label: string }>;
  };
  footer: {
    manifesto: string;
    badges: ReadonlyArray<string>;
    columns: {
      produk: Column;
      syarikat: Column;
      sumber: Column;
    };
    address: string;
    copyright: string;
    privacy: string;
    terms: string;
    siblingPill: string;
  };
  dashboard: {
    ariaLabel: string;
    browserUrl: string;
    todaySales: string;
    sparkChart: string;
    sparkSubtitle: string;
    activeOrders: string;
    activeOrdersCount: string;
    activeOrdersList: ReadonlyArray<string>;
    topItems: string;
    topItemsList: ReadonlyArray<{ name: string; count: number }>;
    inventoryHealth: string;
    inventoryHealthValue: string;
    inventoryHealthy: string;
    staffActive: string;
    staffOnline: string;
    chips: {
      newOrder: { title: string; subtitle: string };
      lowStock: { title: string; subtitle: string };
      dailyReport: { title: string; subtitle: string };
    };
  };
  whatsapp: {
    floatLabel: string;
  };
  language: {
    label: string;
    ms: string;
    en: string;
  };
};
