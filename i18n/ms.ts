import type { Dictionary } from './types';
export type { Dictionary };

export const ms: Dictionary = {
  nav: {
    features: 'Ciri-ciri',
    industries: 'Industri',
    pricing: 'Harga',
    about: 'Tentang',
    blog: 'Blog',
    contact: 'Hubungi',
    cta: 'Hubungi WhatsApp',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
  },
  hero: {
    eyebrow: 'Sistem juruwang cloud untuk PKS Malaysia',
    headline: ['Jualan jalan.', 'Stok terurus.', 'Anda bebas.'],
    sub: 'Sistem POS cloud yang tidak menghadkan pertumbuhan anda. Jualan tanpa had. Stok tanpa had. Laporan tanpa had.',
    ctaPrimary: 'Hubungi kami di WhatsApp',
    ctaSecondary: 'Tempah sesi konsultasi',
    ctaPlayStore: 'Muat turun di Google Play',
  },
  dashboard: {
    ariaLabel: 'Papan pemuka Astana POS — demonstrasi animasi',
    browserUrl: 'app.astanabiz.com',
    todaySales: 'Jualan hari ini',
    sparkChart: '7 hari',
    sparkSubtitle: 'Trend jualan',
    activeOrders: 'Pesanan aktif',
    activeOrdersCount: 'aktif',
    topItems: 'Item terlaris hari ini',
    inventoryHealth: 'Status stok',
    inventoryHealthy: 'stok sihat',
    staffActive: 'Staf aktif',
    staffOnline: 'dalam talian',
    orderLabels: {
      table: 'Meja',
      takeaway: 'Bungkus',
      branch: 'Cabang',
    },
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
  industries: {
    eyebrow: 'Untuk setiap jenis perniagaan',
    heading: 'Direka untuk SME Malaysia',
    items: [
      'Restoran',
      'Kafe',
      'Runcit',
      'Klinik',
      'Gim',
      'Hotel',
      'Salun',
      'Dobi',
      'Cuci Kereta',
      'Farmasi',
      'Pet Shop',
      'Butik',
    ],
  },
  why: {
    eyebrow: 'Mengapa Astana POS',
    heading: 'Sistem yang tumbuh dengan perniagaan anda',
    sub: 'Enam keupayaan teras yang menghilangkan had dalam operasi harian anda.',
    features: [
      {
        number: '01',
        title: 'Cloud + Offline',
        body: 'Jualan jalan walaupun internet down. Sync automatik bila online balik.',
      },
      {
        number: '02',
        title: 'Stok tanpa had',
        body: 'Purchase order, GRN, stok adjustment, laporan stok — semuanya satu tempat.',
      },
      {
        number: '03',
        title: 'Pengurusan pekerja',
        body: 'Buat akaun staf, set hak akses, jejak komisen, dapat alert bila ada login mencurigakan.',
      },
      {
        number: '04',
        title: 'Laporan kewangan automatik',
        body: 'Net profit, kos operasi, overhead — kira automatik tanpa accounting software berasingan.',
      },
      {
        number: '05',
        title: 'Marketing built-in',
        body: 'Loyalty points, customer database, top-selling reports — ubah pelanggan one-time jadi pelanggan tetap.',
      },
      {
        number: '06',
        title: 'LHDN E-Invoice ready',
        body: 'MyInvois compliant. Auto-submit e-invoice tanpa kerja tambahan.',
      },
    ],
  },
  featureTeaser: {
    eyebrow: 'Lihat di dalam papan pemuka',
    heading: 'Laporan kewangan, automatik. Sepanjang masa.',
    sub: 'Net profit, kos operasi, overhead — semuanya dikira automatik tanpa accounting software berasingan.',
    bullets: [
      'Filter tarikh tanpa had untuk laporan jualan',
      'Untung bersih dikira selepas COGS dan overhead',
      'Eksport ke spreadsheet untuk akauntan anda',
    ],
    ctaLabel: 'Lihat semua ciri',
  },
  proof: {
    eyebrow: 'Dengan nombor',
    items: [
      { number: '7,000+', label: 'kedai aktif' },
      { number: '177', label: 'negara di Play Store' },
      { number: '6 tahun', label: 'beroperasi sejak 2020' },
      { number: 'MyIPO', label: 'trademark berdaftar' },
    ],
  },
  finalCta: {
    eyebrow: 'Mula hari ini',
    heading: 'Bersedia untuk POS yang tumbuh dengan anda?',
    sub: 'Hubungi kami di WhatsApp atau tempah sesi konsultasi 30 minit. Kami balas dalam masa kerja.',
    ctaPrimary: 'Hubungi WhatsApp',
    ctaSecondary: 'Tempah konsultasi',
    ctaPlayStore: 'Muat turun di Google Play',
  },
  footer: {
    manifesto:
      'Astana POS — sistem juruwang pintar yang berkembang dengan perniagaan anda. Tanpa had. Tanpa kompromi.',
    columns: {
      product: {
        title: 'Produk',
        links: [
          { label: 'Ciri-ciri', href: '/features' },
          { label: 'Industri', href: '/industries' },
          { label: 'Harga', href: '/pricing' },
          { label: 'Muat turun', href: '#' },
        ],
      },
      company: {
        title: 'Syarikat',
        links: [
          { label: 'Tentang', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Hubungi', href: '/contact' },
        ],
      },
      help: {
        title: 'Bantuan',
        links: [
          { label: 'Hubungi WhatsApp', href: '#whatsapp', external: true },
          { label: 'Daftar akaun', href: 'https://hub.astanabiz.com/registration_form', external: true },
          { label: 'Log masuk', href: 'https://hub.astanabiz.com/', external: true },
        ],
      },
      legal: {
        title: 'Sah',
        links: [
          { label: 'Polisi privasi', href: '/legal/privacy' },
          { label: 'Terma perkhidmatan', href: '/legal/terms' },
        ],
      },
    },
    addressTitle: 'Ibu pejabat',
    address: 'No 19A Jalan Astana E13/E, Pusat Niaga Astana Alam, 42300 Bandar Puncak Alam, Selangor',
    siblingPill: 'Sebahagian daripada Astana Group · Lihat juga: MCBIZ →',
    copyright: '© 2026 Astana POS. Hak cipta terpelihara.',
  },
  language: {
    label: 'Bahasa',
    ms: 'BM',
    en: 'EN',
  },
  whatsapp: {
    floatLabel: 'Hubungi WhatsApp',
  },
};
