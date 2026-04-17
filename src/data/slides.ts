export interface Slide {
  id: number;
  type:
    | "cover"
    | "tujuan"
    | "intro"
    | "wujud"
    | "perubahan"
    | "example"
    | "diagram"
    | "closing";
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  emoji: string;
  bg: string;
  textColor?: string;
  tag?: string;
}

export const slides: Slide[] = [
  // ── 1. COVER ──────────────────────────────────────────────────────────
  {
    id: 1,
    type: "cover",
    title: "Wujud Benda",
    subtitle: "IPAS Kelas 3 SD",
    body: "Mari kita kenali benda-benda di sekitar kita dan bagaimana mereka bisa berubah!",
    emoji: "🔮",
    bg: "#6C63FF",
    textColor: "#FFFFFF",
    tag: "Magic Matter",
  },

  // ── 2. TUJUAN PEMBELAJARAN ────────────────────────────────────────────
  {
    id: 2,
    type: "tujuan",
    title: "Tujuan Pembelajaran",
    emoji: "🎯",
    bg: "#FF6B6B",
    textColor: "#FFFFFF",
    bullets: [
      "Menyebutkan 3 wujud benda (padat, cair, gas)",
      "Menjelaskan ciri-ciri setiap wujud benda",
      "Menyebutkan 6 jenis perubahan wujud benda",
      "Menjelaskan penyebab terjadinya perubahan wujud",
      "Memberikan contoh perubahan wujud dalam kehidupan sehari-hari",
    ],
  },

  // ── 3. INTRO WUJUD BENDA ──────────────────────────────────────────────
  {
    id: 3,
    type: "intro",
    title: "Apa itu Wujud Benda?",
    emoji: "🤔",
    bg: "#00C9A7",
    textColor: "#FFFFFF",
    body: "Semua benda di sekitar kita memiliki wujud. Wujud benda adalah bentuk atau keadaan fisik suatu benda.",
    bullets: [
      "🪨  Benda Padat — bentuk tetap",
      "💧  Benda Cair — mengikuti wadah",
      "💨  Benda Gas — memenuhi ruangan",
    ],
  },

  // ── 4. BENDA PADAT ────────────────────────────────────────────────────
  {
    id: 4,
    type: "wujud",
    title: "Benda Padat",
    subtitle: "Bentuk & Volume Tetap",
    emoji: "🪨",
    bg: "#FF6B6B",
    textColor: "#FFFFFF",
    body: "Benda padat memiliki bentuk dan volume yang tetap. Bentuknya tidak berubah meskipun dipindah ke wadah lain.",
    bullets: [
      "✅ Bentuk tidak mengikuti wadah",
      "✅ Volume selalu tetap",
      "✅ Dapat dipegang",
      "📦 Contoh: batu, kayu, es batu, buku, pensil",
    ],
    tag: "Wujud 1",
  },

  // ── 5. BENDA CAIR ─────────────────────────────────────────────────────
  {
    id: 5,
    type: "wujud",
    title: "Benda Cair",
    subtitle: "Bentuk Berubah, Volume Tetap",
    emoji: "💧",
    bg: "#4ECDC4",
    textColor: "#FFFFFF",
    body: "Benda cair mengikuti bentuk wadahnya namun volumenya tetap sama.",
    bullets: [
      "✅ Bentuk mengikuti wadah",
      "✅ Volume tetap",
      "✅ Dapat mengalir",
      "🫗 Contoh: air, minyak goreng, susu, jus",
    ],
    tag: "Wujud 2",
  },

  // ── 6. BENDA GAS ──────────────────────────────────────────────────────
  {
    id: 6,
    type: "wujud",
    title: "Benda Gas",
    subtitle: "Bentuk & Volume Berubah",
    emoji: "💨",
    bg: "#A78BFA",
    textColor: "#FFFFFF",
    body: "Benda gas tidak terlihat, tidak berbentuk, dan memenuhi seluruh ruangan yang ditempatinya.",
    bullets: [
      "✅ Bentuk mengikuti wadah",
      "✅ Volume mengikuti wadah",
      "✅ Tidak terlihat",
      "🌬️ Contoh: udara, uap air, asap, aroma parfum",
    ],
    tag: "Wujud 3",
  },

  // ── 7. DIAGRAM PERUBAHAN WUJUD ────────────────────────────────────────
  {
    id: 7,
    type: "diagram",
    title: "Perubahan Wujud Benda",
    subtitle: "Ada 6 jenis perubahan wujud",
    emoji: "🔄",
    bg: "#FFD93D",
    textColor: "#1A1A2E",
    bullets: [
      "🧊→💧  Mencair (padat → cair)",
      "💧→🧊  Membeku (cair → padat)",
      "💧→💨  Menguap (cair → gas)",
      "💨→💧  Mengembun (gas → cair)",
      "🪨→💨  Menyublim (padat → gas)",
      "💨→🪨  Mengkristal (gas → padat)",
    ],
  },

  // ── 8. MENCAIR ────────────────────────────────────────────────────────
  {
    id: 8,
    type: "perubahan",
    title: "Mencair",
    subtitle: "Padat → Cair",
    emoji: "🧊➡️💧",
    bg: "#FF6B6B",
    textColor: "#FFFFFF",
    body: "Mencair terjadi karena kenaikan suhu (pemanasan). Benda padat berubah menjadi cair.",
    bullets: [
      "🔥 Penyebab: dipanaskan / suhu naik",
      "📍 Contoh: es batu dipanaskan → air",
      "📍 Contoh: lilin dipanaskan → cairan lilin",
      "📍 Contoh: mentega di wajan → minyak",
    ],
    tag: "Perubahan 1",
  },

  // ── 9. MEMBEKU ────────────────────────────────────────────────────────
  {
    id: 9,
    type: "perubahan",
    title: "Membeku",
    subtitle: "Cair → Padat",
    emoji: "💧➡️🧊",
    bg: "#6EC1E4",
    textColor: "#FFFFFF",
    body: "Membeku terjadi karena penurunan suhu (pendinginan). Benda cair berubah menjadi padat.",
    bullets: [
      "❄️ Penyebab: didinginkan / suhu turun",
      "📍 Contoh: air di freezer → es batu",
      "📍 Contoh: cairan lilin dingin → lilin padat",
      "📍 Contoh: agar-agar cair → agar-agar padat",
    ],
    tag: "Perubahan 2",
  },

  // ── 10. MENGUAP ───────────────────────────────────────────────────────
  {
    id: 10,
    type: "perubahan",
    title: "Menguap",
    subtitle: "Cair → Gas",
    emoji: "💧➡️💨",
    bg: "#FF9F43",
    textColor: "#FFFFFF",
    body: "Menguap terjadi saat benda cair dipanaskan hingga berubah menjadi gas.",
    bullets: [
      "🔥 Penyebab: dipanaskan",
      "📍 Contoh: air mendidih → uap air",
      "📍 Contoh: bensin dibiarkan → menguap",
      "📍 Contoh: pakaian basah dijemur → mengering",
    ],
    tag: "Perubahan 3",
  },

  // ── 11. MENGEMBUN ─────────────────────────────────────────────────────
  {
    id: 11,
    type: "perubahan",
    title: "Mengembun",
    subtitle: "Gas → Cair",
    emoji: "💨➡️💧",
    bg: "#26de81",
    textColor: "#FFFFFF",
    body: "Mengembun terjadi saat uap air (gas) mendingin dan berubah menjadi tetes air (cair).",
    bullets: [
      "❄️ Penyebab: didinginkan / suhu turun",
      "📍 Contoh: gelas es → dinding gelas berembun",
      "📍 Contoh: rumput berembun di pagi hari",
      "📍 Contoh: kaca jendela berembun di pagi dingin",
    ],
    tag: "Perubahan 4",
  },

  // ── 12. MENYUBLIM ─────────────────────────────────────────────────────
  {
    id: 12,
    type: "perubahan",
    title: "Menyublim",
    subtitle: "Padat → Gas",
    emoji: "🪨➡️💨",
    bg: "#6C63FF",
    textColor: "#FFFFFF",
    body: "Menyublim adalah perubahan wujud langsung dari padat menjadi gas tanpa melalui fase cair.",
    bullets: [
      "🌡️ Penyebab: suhu dan tekanan tertentu",
      "📍 Contoh: kapur barus lama-lama mengecil/habis",
      "📍 Contoh: dry ice (es kering) mengeluarkan kabut",
      "📍 Contoh: es batu di suhu rendah bisa menyublim",
    ],
    tag: "Perubahan 5",
  },

  // ── 13. MENGKRISTAL ───────────────────────────────────────────────────
  {
    id: 13,
    type: "perubahan",
    title: "Mengkristal",
    subtitle: "Gas → Padat",
    emoji: "💨➡️🪨",
    bg: "#fd79a8",
    textColor: "#FFFFFF",
    body: "Mengkristal (deposisi) adalah perubahan wujud langsung dari gas menjadi padat.",
    bullets: [
      "❄️ Penyebab: pendinginan ekstrem",
      "📍 Contoh: salju terbentuk dari uap air di awan",
      "📍 Contoh: bulu-bulu es di kaca freezer",
      "📍 Contoh: embun beku di dedaunan",
    ],
    tag: "Perubahan 6",
  },

  // ── 14. CONTOH DALAM KEHIDUPAN ────────────────────────────────────────
  {
    id: 14,
    type: "example",
    title: "Contoh dalam Kehidupan",
    subtitle: "Siklus Air / Siklus Hujan",
    emoji: "🌧️",
    bg: "#00C9A7",
    textColor: "#FFFFFF",
    body: "Siklus hujan adalah contoh nyata perubahan wujud yang terjadi setiap hari di alam!",
    bullets: [
      "☀️ Air laut menguap karena panas matahari",
      "☁️ Uap air naik dan mengembun membentuk awan",
      "🌧️ Air di awan jatuh sebagai hujan",
      "💧 Air hujan mengalir kembali ke laut/sungai",
      "🔄 Siklus terus berulang!",
    ],
  },

  // ── 15. PENUTUP / CLOSING ─────────────────────────────────────────────
  {
    id: 15,
    type: "closing",
    title: "Yuk Uji Pengetahuanmu!",
    subtitle: "Rangkuman sudah selesai 🎉",
    emoji: "🏆",
    bg: "#6C63FF",
    textColor: "#FFFFFF",
    body: "Selamat! Kamu sudah mempelajari semua materi tentang Wujud Benda. Sekarang saatnya uji kemampuanmu di kuis!",
    bullets: [
      "📖 3 wujud benda: padat, cair, gas",
      "🔄 6 perubahan wujud benda",
      "🌧️ Contoh nyata: siklus hujan",
    ],
  },
];
