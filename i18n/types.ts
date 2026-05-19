type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: ReadonlyArray<FooterLink>;
};

export type Dictionary = {
  nav: {
    features: string;
    industries: string;
    pricing: string;
    about: string;
    blog: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    headline: ReadonlyArray<string>;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPlayStore: string;
  };
  dashboard: {
    ariaLabel: string;
    browserUrl: string;
    todaySales: string;
    sparkChart: string;
    sparkSubtitle: string;
    activeOrders: string;
    activeOrdersCount: string;
    topItems: string;
    inventoryHealth: string;
    inventoryHealthy: string;
    staffActive: string;
    staffOnline: string;
    orderLabels: {
      table: string;
      takeaway: string;
      branch: string;
    };
    chips: {
      newOrder: { title: string; subtitle: string };
      lowStock: { title: string; subtitle: string };
      dailyReport: { title: string; subtitle: string };
    };
  };
  industries: {
    eyebrow: string;
    heading: string;
    items: ReadonlyArray<string>;
  };
  why: {
    eyebrow: string;
    heading: string;
    sub: string;
    features: ReadonlyArray<{
      number: string;
      title: string;
      body: string;
    }>;
  };
  featureTeaser: {
    eyebrow: string;
    heading: string;
    sub: string;
    bullets: ReadonlyArray<string>;
    ctaLabel: string;
  };
  proof: {
    eyebrow: string;
    items: ReadonlyArray<{ number: string; label: string }>;
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPlayStore: string;
  };
  footer: {
    manifesto: string;
    columns: {
      product: FooterColumn;
      company: FooterColumn;
      help: FooterColumn;
      legal: FooterColumn;
    };
    addressTitle: string;
    address: string;
    siblingPill: string;
    copyright: string;
  };
  language: {
    label: string;
    ms: string;
    en: string;
  };
  whatsapp: {
    floatLabel: string;
  };
};
