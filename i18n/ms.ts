import type { Dictionary } from './types';

export const ms: Dictionary = {
  nav: {
    produk: 'Produk',
    pelan: 'Pelan',
    industri: 'Industri',
    tentang: 'Tentang Kami',
    hubungi: 'Hubungi',
    blog: 'Blog',
    logMasuk: 'Log Masuk',
    cubaPercuma: 'Cuba Percuma',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
  },
  hero: {
    trustLine: 'Dipercayai 10,000+ Kedai di Malaysia',
    eyebrow: 'Sistem juruwang cloud untuk PKS Malaysia',
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
    eyebrow: 'Untuk Setiap Jenis Perniagaan',
    headline: 'Satu cloud. Dua belas industri. Tiada had.',
    sub: 'Pilih jenis perniagaan anda dan lihat bagaimana Astana POS disesuaikan.',
    statValue: '12',
    statLabel: 'industri',
    chips: [
      {
        key: 'restoran',
        label: 'Restoran',
        detail:
          'Pesanan KDS, dapur tersusun, bil pantas. Laporan jualan real-time setiap meja.',
      },
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
      {
        key: 'starter',
        name: 'Starter',
        monthly: 39,
        yearly: 374,
        for: 'Kedai tunggal kecil',
        features: ['1 outlet', '2 staff', 'Jualan tanpa had', 'Laporan asas'],
      },
      {
        key: 'growth',
        name: 'Growth',
        monthly: 79,
        yearly: 758,
        for: 'Kedai berkembang',
        features: [
          '1 outlet',
          '10 staff',
          'Modul marketing',
          'Customer loyalty',
          'Jualan tanpa had',
        ],
      },
      {
        key: 'multistore',
        name: 'Multi-store',
        monthly: 149,
        yearly: 1430,
        for: 'Multi-cawangan',
        features: ['5 outlets', '50 staff', 'Multi-store reports', 'Inventory lanjutan'],
      },
      {
        key: 'enterprise',
        name: 'Enterprise',
        monthly: null,
        yearly: null,
        contactLabel: 'Hubungi kami',
        for: 'Rangkaian besar',
        features: ['Outlets tanpa had', 'Custom integrations', 'Sokongan khusus'],
      },
    ],
    ctaTrial: 'Cuba Percuma',
    ctaChat: 'Sembang dengan kami',
    footerLink: 'Lihat Perbandingan Penuh',
    currency: 'RM',
    perMonth: '/bln',
    perYear: '/thn',
    untukPrefix: 'Untuk:',
    waPrefillTemplate:
      'Hai Astana POS! Saya berminat dengan pelan {tier} — boleh kongsi maklumat lanjut?',
  },
  hardwareBand: {
    title: 'Perlukan perkakasan POS?',
    sub: 'Pakej hardware + setup tersedia di MCBIZ — jenama saudara dalam ekosistem Astana Group. Mulai RM490.',
    cta: 'Lihat Pakej MCBIZ →',
  },
  timeline: {
    eyebrow: 'Perjalanan Astana',
    headline: 'Enam tahun. Tujuh ribu kedai. Satu misi.',
    paragraph1:
      'Astana Group bermula pada 2020 dengan satu cita-cita mudah — bantu peniaga Malaysia digitalisasi tanpa beban kos. Kami bermula dengan perkakasan POS, kemudian membangun perisian sendiri.',
    paragraph2:
      'Hari ini, Astana POS adalah enjin cloud yang menggerakkan ekosistem ini — perisian yang dipercayai oleh 7,000+ kedai dalam 177 negara. Berdaftar trademark, dilindungi undang-undang, komited menjadi tulang belakang digital perniagaan kecil.',
    stats: [
      { value: '2020', label: 'Diasaskan' },
      { value: '6', label: 'Tahun' },
      { value: 'MyIPO', label: 'Trademark' },
    ],
    events: [
      { year: '2020', title: 'Penubuhan', body: '1,000 kedai aktif dengan perkakasan POS khusus.' },
      {
        year: '2021',
        title: 'Jenama & Identiti',
        body: 'Melancarkan Astana Biz dan Mesincashier.biz. 1,200 kedai.',
      },
      {
        year: '2022',
        title: 'Pengembangan Wilayah',
        body: 'Cawangan Kelantan dibuka. Mencapai 2,000 kedai.',
      },
      {
        year: '2023',
        title: 'Ekosistem',
        body: 'Astana POS dibangun. Program Dealership DNA dilancarkan.',
      },
      {
        year: '2024',
        title: 'Integrasi Digital',
        body: 'Penjenamaan semula sebagai MCBIZ. 7,000 kedai.',
      },
      {
        year: '2025',
        title: 'Penetrasi Global',
        body: 'Play Store 177 negara. 10,000 kedai. Trademark berdaftar.',
      },
      {
        year: '2026',
        title: 'Pertumbuhan Pantas',
        body: 'Sasaran 500% pertumbuhan. Ekosistem ERP enam-tiang.',
        current: true,
        currentLabel: 'Tahun Semasa',
      },
    ],
  },
  reasons: {
    eyebrow: 'Mengapa Astana POS',
    headline: 'Lima sebab peniaga pilih cloud kami.',
    items: [
      {
        number: '01',
        title: 'Tiada Yuran Tahunan',
        body: 'Bayar bulanan atau tahunan. Berhenti bila-bila tanpa penalti.',
      },
      {
        number: '02',
        title: 'Cloud + Offline',
        body: 'Jualan jalan walaupun internet down. Sync automatik bila online balik.',
      },
      {
        number: '03',
        title: '7,000+ Kedai',
        body: 'Dipercayai oleh ribuan pemilik perniagaan dari Perlis ke Sabah.',
      },
      {
        number: '04',
        title: '177 Negara',
        body: 'Tersedia di Play Store seluruh dunia. Skala antarabangsa.',
      },
      {
        number: '05',
        title: 'LHDN E-Invoice Ready',
        body: 'MyInvois compliant. Auto-submit e-invoice tanpa kerja tambahan.',
      },
    ],
  },
  steps: {
    eyebrow: 'Cara Ia Berfungsi',
    headline: 'Tiga langkah ke jualan pintar.',
    sub: 'Tiada teknikal. Tiada kerumitan. Mula dalam masa kurang 24 jam.',
    items: [
      {
        number: '01',
        title: 'Daftar Cuba Percuma',
        body: 'Daftar dalam masa 2 minit. Tiada kad kredit diperlukan.',
      },
      {
        number: '02',
        title: 'Pasang & Konfigurasi',
        body: 'Muat turun di Play Store. Pasang katalog produk dan staf.',
      },
      {
        number: '03',
        title: 'Mula Jual & Lihat Laporan',
        body: 'Jualan masuk terus ke dashboard. Laporan automatik setiap hari.',
      },
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
      {
        quote:
          'Astana POS bagi saya laporan jualan real-time. Saya boleh tengok kedai dari rumah.',
        name: 'Nur Aisyah',
        business: 'Kafe Pagi Cerah, Selangor',
      },
      {
        quote:
          'Stok tak pernah habis sebab alert automatik. Untung naik 30% sejak guna cloud.',
        name: 'Wong Chee Keong',
        business: 'Runcit Setia, Penang',
      },
      {
        quote: 'E-invoice automatik. Tak payah keluar dari sistem. Save masa 5 jam seminggu.',
        name: 'Hafiz Rahman',
        business: 'Butik Modern, Kuala Lumpur',
      },
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
    manifesto:
      'Sistem juruwang cloud untuk peniaga Malaysia. Cuba percuma, batal bila-bila.',
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
          {
            label: 'Log Masuk',
            href: 'https://hub.astanabiz.com/',
            external: true,
          },
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
    ariaLabel: 'Papan pemuka Astana POS — demonstrasi animasi',
    browserUrl: 'app.astanabiz.com',
    todaySales: 'Jualan hari ini',
    sparkChart: '7 hari',
    sparkSubtitle: 'Trend jualan',
    activeOrders: 'Pesanan aktif',
    activeOrdersCount: '12 aktif',
    activeOrdersList: ['#1247 · Meja 5', '#1246 · Bungkus', '#1245 · Cabang 02'],
    topItems: 'Item terlaris hari ini',
    topItemsList: [
      { name: 'Nasi Lemak', count: 47 },
      { name: 'Teh Ais', count: 38 },
      { name: 'Roti John', count: 24 },
    ],
    inventoryHealth: 'Status stok',
    inventoryHealthValue: '87%',
    inventoryHealthy: 'stok sihat',
    staffActive: 'Staf aktif',
    staffOnline: 'dalam talian',
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
  whatsapp: { floatLabel: 'Hubungi WhatsApp' },
  language: { label: 'Bahasa', ms: 'BM', en: 'EN' },
};
