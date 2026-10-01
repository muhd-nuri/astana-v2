import type { Dictionary } from './types';

export const en: Dictionary = {
  nav: {
    produk: 'Product',
    pelan: 'Pricing',
    industri: 'Industries',
    tentang: 'About',
    hubungi: 'Contact',
    blog: 'Blog',
    logMasuk: 'Log In',
    cubaPercuma: 'Try Free',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    trustLine: 'Trusted by 10,000+ shops in Malaysia',
    eyebrow: 'Cloud POS for Malaysian SMEs',
    headlinePre: 'Astana POS — your',
    headlineGradient: 'cashier cloud',
    headlinePost: '.',
    sub: 'From sales reports to inventory management — Astana POS gives you everything to run your business from anywhere. Try free for 14 days.',
    bullets: ['No hidden annual fees', 'Cloud + offline mode', 'LHDN e-invoice ready'],
    ctaPrimary: 'Try Free for 14 Days',
    ctaSecondary: 'Chat on WhatsApp',
    ctaPlayStore: 'Get it on Google Play',
  },
  marquee: {
    caption: 'Live modules · 7,000+ shops · 177 countries · 6 ERP modules',
    modules: ['Sales', 'Marketing', 'Finance', 'Inventory', 'Employee', 'ERP Dashboard'],
    customers: [
      'D Apple Fried Chicken',
      'Ani Sup Utara',
      'Puas Cafe',
      'JBR Bundle',
      'Ani Sup Utara',
      'Puas Cafe',
    ],
  },
  industries: {
    eyebrow: 'For Every Type of Business',
    headline: 'One cloud. Twelve industries. No limits.',
    sub: 'Pick your business type and see how Astana POS adapts to you.',
    statValue: '12',
    statLabel: 'industries',
    chips: [
      {
        key: 'restoran',
        label: 'Restaurant',
        detail:
          'KDS orders, organised kitchen, fast billing. Real-time sales reports per table.',
      },
      { key: 'kafe', label: 'Cafe', detail: '' },
      { key: 'runcit', label: 'Retail', detail: '' },
      { key: 'klinik', label: 'Clinic', detail: '' },
      { key: 'gim', label: 'Gym', detail: '' },
      { key: 'hotel', label: 'Hotel', detail: '' },
      { key: 'salun', label: 'Salon', detail: '' },
      { key: 'dobi', label: 'Laundry', detail: '' },
      { key: 'cuciKereta', label: 'Car Wash', detail: '' },
      { key: 'farmasi', label: 'Pharmacy', detail: '' },
      { key: 'petShop', label: 'Pet Shop', detail: '' },
      { key: 'butik', label: 'Boutique', detail: '' },
    ],
    detailHeadingPrefix: 'System tailored for',
    ctaPrimary: 'See Full Features',
    comingSoon: 'Coming soon',
  },
  pricing: {
    eyebrow: 'Subscription Plans',
    headline: 'Subscription plans for every shop size.',
    sub: 'Pay monthly or yearly. Switch plans anytime. Cancel without penalty.',
    toggleMonthly: 'Monthly',
    toggleYearly: 'Yearly (save 20%)',
    mostPopular: 'Most Popular',
    tiers: [
      {
        key: 'starter',
        name: 'Starter',
        monthly: 39,
        yearly: 374,
        for: 'Small single shop',
        features: ['1 outlet', '2 staff', 'Unlimited sales', 'Basic reports'],
      },
      {
        key: 'growth',
        name: 'Growth',
        monthly: 79,
        yearly: 758,
        for: 'Growing shop',
        features: [
          '1 outlet',
          '10 staff',
          'Marketing module',
          'Customer loyalty',
          'Unlimited sales',
        ],
      },
      {
        key: 'multistore',
        name: 'Multi-store',
        monthly: 149,
        yearly: 1430,
        for: 'Multi-branch',
        features: ['5 outlets', '50 staff', 'Multi-store reports', 'Advanced inventory'],
      },
      {
        key: 'enterprise',
        name: 'Enterprise',
        monthly: null,
        yearly: null,
        contactLabel: 'Contact us',
        for: 'Large networks',
        features: ['Unlimited outlets', 'Custom integrations', 'Dedicated support'],
      },
    ],
    ctaTrial: 'Try Free',
    ctaChat: 'Chat with us',
    footerLink: 'See Full Comparison',
    currency: 'RM',
    perMonth: '/mo',
    perYear: '/yr',
    untukPrefix: 'For:',
    waPrefillTemplate:
      "Hi Astana POS! I'm interested in the {tier} plan — could you share more details?",
  },
  hardwareBand: {
    title: 'Need POS hardware?',
    sub: 'Hardware + setup bundles available at MCBIZ — our sister brand in the Astana Group ecosystem. From RM490.',
    cta: 'See MCBIZ Bundles →',
  },
  timeline: {
    eyebrow: "Astana's Journey",
    headline: 'Six years. Seven thousand shops. One mission.',
    paragraph1:
      'Astana Group started in 2020 with one simple ambition — help Malaysian businesses digitalise without cost burden. We began with POS hardware, then built our own software.',
    paragraph2:
      'Today, Astana POS is the cloud engine driving this ecosystem — software trusted by 7,000+ shops across 177 countries. Trademark-registered, legally protected, committed to being the digital backbone of small business.',
    stats: [
      { value: '2020', label: 'Founded' },
      { value: '6', label: 'Years' },
      { value: 'MyIPO', label: 'Trademark' },
    ],
    events: [
      { year: '2020', title: 'Founded', body: '1,000 active shops with dedicated POS hardware.' },
      {
        year: '2021',
        title: 'Brand & Identity',
        body: 'Launched Astana Biz and Mesincashier.biz. 1,200 shops.',
      },
      {
        year: '2022',
        title: 'Regional Expansion',
        body: 'Kelantan branch opened. Reached 2,000 shops.',
      },
      {
        year: '2023',
        title: 'Ecosystem',
        body: 'Astana POS built. Dealership DNA program launched.',
      },
      {
        year: '2024',
        title: 'Digital Integration',
        body: 'Rebranded as MCBIZ. 7,000 shops.',
      },
      {
        year: '2025',
        title: 'Global Penetration',
        body: 'Play Store in 177 countries. 10,000 shops. Trademark registered.',
      },
      {
        year: '2026',
        title: 'Rapid Growth',
        body: '500% growth target. Six-pillar ERP ecosystem.',
        current: true,
        currentLabel: 'Current Year',
      },
    ],
  },
  reasons: {
    eyebrow: 'Why Astana POS',
    headline: 'Five reasons businesses choose our cloud.',
    items: [
      {
        number: '01',
        title: 'No Annual Fees',
        body: 'Pay monthly or yearly. Cancel anytime without penalty.',
      },
      {
        number: '02',
        title: 'Cloud + Offline',
        body: 'Sales keep running even when offline. Auto-sync when reconnected.',
      },
      {
        number: '03',
        title: '7,000+ Shops',
        body: 'Trusted by thousands of business owners from Perlis to Sabah.',
      },
      {
        number: '04',
        title: '177 Countries',
        body: 'Available on Play Store worldwide. International scale.',
      },
      {
        number: '05',
        title: 'LHDN E-Invoice Ready',
        body: 'MyInvois compliant. Auto-submit e-invoices with zero extra work.',
      },
    ],
  },
  steps: {
    eyebrow: 'How It Works',
    headline: 'Three steps to smart selling.',
    sub: 'No tech skills needed. No complexity. Start in under 24 hours.',
    items: [
      {
        number: '01',
        title: 'Register Free Trial',
        body: 'Sign up in 2 minutes. No credit card required.',
      },
      {
        number: '02',
        title: 'Install & Configure',
        body: 'Download from Play Store. Set up your catalog and staff.',
      },
      {
        number: '03',
        title: 'Start Selling & See Reports',
        body: 'Sales flow into your dashboard. Automatic daily reports.',
      },
    ],
  },
  counters: {
    eyebrow: 'By the numbers',
    headline: 'Growth powered by trust.',
    items: [
      { value: 7000, suffix: '+', label: 'Active Shops' },
      { value: 177, suffix: '', label: 'Countries' },
      { value: 6, suffix: '', label: 'Years of Experience' },
      { value: 500, suffix: '%', label: '2026 Target' },
    ],
  },
  testimonials: {
    eyebrow: 'Voices from Business',
    headline: 'What shop owners say.',
    sub: 'Real stories from owners running Astana POS daily.',
    rating: '4.9 / 5',
    items: [
      {
        quote:
          'Astana POS gives me real-time sales reports. I can check on my shop from home.',
        name: 'Nur Aisyah',
        business: 'Kafe Pagi Cerah, Selangor',
      },
      {
        quote:
          'Stock never runs out thanks to automatic alerts. Profits up 30% since switching to cloud.',
        name: 'Wong Chee Keong',
        business: 'Runcit Setia, Penang',
      },
      {
        quote: 'Automatic e-invoicing. No leaving the system. Saves me 5 hours a week.',
        name: 'Hafiz Rahman',
        business: 'Butik Modern, Kuala Lumpur',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Start today',
    headline: "Ready for your shop's cloud?",
    sub: 'Try free for 14 days. No credit card. No commitment.',
    ctaPrimary: 'Try Free for 14 Days',
    ctaSecondary: 'Chat on WhatsApp',
    stats: [
      { value: '< 5 min', label: 'Sign-up time' },
      { value: '24 hours', label: 'Start selling' },
      { value: '14 states', label: 'Customers' },
    ],
  },
  footer: {
    manifesto:
      'Cloud cashier system for Malaysian businesses. Try free, cancel anytime.',
    badges: ['Registered Trademark', 'Available on Play Store'],
    columns: {
      produk: {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Subscription Plans', href: '/pricing' },
          { label: 'Industries', href: '/industries' },
        ],
      },
      syarikat: {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Partners', href: '/partners' },
          { label: 'Contact', href: '/contact' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      sumber: {
        title: 'Resources',
        links: [
          { label: 'Help Center', href: '#' },
          { label: 'System Status', href: '#' },
          { label: 'Log In', href: 'https://hub.astanabiz.com/', external: true },
        ],
      },
    },
    address: 'No 19A Jalan Astana E13/E, 42300 Bandar Puncak Alam, Selangor',
    copyright: '© 2026 Astana POS. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
    siblingPill: 'Part of Astana Group · See also: MCBIZ →',
  },
  dashboard: {
    ariaLabel: 'Astana POS dashboard — animated demonstration',
    browserUrl: 'app.astanabiz.com',
    todaySales: "Today's sales",
    sparkChart: '7 days',
    sparkSubtitle: 'Sales trend',
    activeOrders: 'Active orders',
    activeOrdersCount: '12 active',
    activeOrdersList: ['#1247 · Table 5', '#1246 · Takeaway', '#1245 · Branch 02'],
    topItems: 'Top items today',
    topItemsList: [
      { name: 'Nasi Lemak', count: 47 },
      { name: 'Iced Tea', count: 38 },
      { name: 'Roti John', count: 24 },
    ],
    inventoryHealth: 'Inventory health',
    inventoryHealthValue: '87%',
    inventoryHealthy: 'healthy stock',
    staffActive: 'Staff active',
    staffOnline: 'online',
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
  whatsapp: { floatLabel: 'Chat on WhatsApp' },
  language: { label: 'Language', ms: 'BM', en: 'EN' },
};
