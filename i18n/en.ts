import type { Dictionary } from './ms';

export const en: Dictionary = {
  nav: {
    features: 'Features',
    industries: 'Industries',
    pricing: 'Pricing',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    cta: 'Chat on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'Cloud POS for Malaysian SMEs',
    headline: ['Sales running.', 'Stock under control.', 'You stay free.'],
    sub: "The cloud POS that doesn't cap your growth. Unlimited sales. Unlimited inventory. Unlimited reports.",
    ctaPrimary: 'Chat with us on WhatsApp',
    ctaSecondary: 'Book a consultation',
    ctaPlayStore: 'Get it on Google Play',
  },
  dashboard: {
    ariaLabel: 'Astana POS dashboard — animated demonstration',
    browserUrl: 'app.astanabiz.com',
    todaySales: "Today's sales",
    sparkChart: '7 days',
    sparkSubtitle: 'Sales trend',
    activeOrders: 'Active orders',
    activeOrdersCount: 'active',
    topItems: 'Top items today',
    inventoryHealth: 'Inventory health',
    inventoryHealthy: 'healthy stock',
    staffActive: 'Staff active',
    staffOnline: 'online',
    orderLabels: {
      table: 'Table',
      takeaway: 'Takeaway',
      branch: 'Branch',
    },
    chips: {
      newOrder: {
        title: 'New order · Branch 02',
        subtitle: '2× Nasi Lemak, 1× Iced Tea — RM18.50',
      },
      lowStock: {
        title: 'Low stock · Roti John',
        subtitle: '3 units left · Create PO?',
      },
      dailyReport: {
        title: 'Daily report ready',
        subtitle: 'Gross profit RM2,847 · 23% from yesterday',
      },
    },
  },
  industries: {
    eyebrow: 'For every type of business',
    heading: 'Built for Malaysian SMEs',
    items: [
      'Restaurant',
      'Cafe',
      'Retail',
      'Clinic',
      'Gym',
      'Hotel',
      'Salon',
      'Laundry',
      'Car Wash',
      'Pharmacy',
      'Pet Shop',
      'Boutique',
    ],
  },
  why: {
    eyebrow: 'Why Astana POS',
    heading: 'A system that grows with your business',
    sub: 'Six core capabilities that remove the ceiling on your daily operations.',
    features: [
      {
        number: '01',
        title: 'Cloud + Offline',
        body: 'Sales keep running even when the internet is down. Auto-syncs when you reconnect.',
      },
      {
        number: '02',
        title: 'Unlimited inventory',
        body: 'Purchase orders, GRN, stock adjustments, inventory reports — all in one place.',
      },
      {
        number: '03',
        title: 'Employee management',
        body: 'Create staff accounts, set permissions, track commissions, get alerts on suspicious logins.',
      },
      {
        number: '04',
        title: 'Automated financial reports',
        body: 'Net profit, operating cost, overhead — calculated automatically without separate accounting software.',
      },
      {
        number: '05',
        title: 'Marketing built-in',
        body: 'Loyalty points, customer database, top-selling reports — turn one-time customers into regulars.',
      },
      {
        number: '06',
        title: 'LHDN E-Invoice ready',
        body: 'MyInvois compliant. Auto-submit e-invoices with zero extra work.',
      },
    ],
  },
  featureTeaser: {
    eyebrow: 'Look inside the dashboard',
    heading: 'Financial reports, automated. All day, every day.',
    sub: 'Net profit, operating cost, overhead — calculated automatically without a separate accounting tool.',
    bullets: [
      'Unlimited date filtering on sales reports',
      'Net profit calculated after COGS and overhead',
      'Export to spreadsheet for your accountant',
    ],
    ctaLabel: 'See all features',
  },
  proof: {
    eyebrow: 'By the numbers',
    items: [
      { number: '7,000+', label: 'active shops' },
      { number: '177', label: 'countries on Play Store' },
      { number: '6 years', label: 'operating since 2020' },
      { number: 'MyIPO', label: 'registered trademark' },
    ],
  },
  finalCta: {
    eyebrow: 'Start today',
    heading: 'Ready for a POS that grows with you?',
    sub: 'Chat with us on WhatsApp or book a 30-minute consultation. We reply during business hours.',
    ctaPrimary: 'Chat on WhatsApp',
    ctaSecondary: 'Book a consultation',
    ctaPlayStore: 'Get it on Google Play',
  },
  footer: {
    manifesto:
      'Astana POS — the smart cashier system that grows with your business. No limits. No compromises.',
    columns: {
      product: {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Industries', href: '/industries' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Download', href: '#' },
        ],
      },
      company: {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      help: {
        title: 'Help',
        links: [
          { label: 'Chat on WhatsApp', href: '#whatsapp', external: true },
          { label: 'Create account', href: 'https://hub.astanabiz.com/registration_form', external: true },
          { label: 'Sign in', href: 'https://hub.astanabiz.com/', external: true },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Privacy policy', href: '/legal/privacy' },
          { label: 'Terms of service', href: '/legal/terms' },
        ],
      },
    },
    addressTitle: 'Headquarters',
    address: 'No 19A Jalan Astana E13/E, Pusat Niaga Astana Alam, 42300 Bandar Puncak Alam, Selangor',
    siblingPill: 'Part of Astana Group · See also: MCBIZ →',
    copyright: '© 2026 Astana POS. All rights reserved.',
  },
  language: {
    label: 'Language',
    ms: 'BM',
    en: 'EN',
  },
  whatsapp: {
    floatLabel: 'Chat on WhatsApp',
  },
};
