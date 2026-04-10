export interface WujudBenda {
  id: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string;
  examples: string[];
  color: string;
}

export interface PerubahanWujud {
  id: string;
  title: string;
  emoji: string;
  from: string;
  to: string;
  description: string;
  example: string;
  color: string;
}

export const wujudBenda: WujudBenda[] = [
  {
    id: "padat",
    title: "Benda Padat",
    emoji: "🪨",
    description: "Benda padat memiliki bentuk dan ukuran yang tetap.",
    characteristics: "Bentuk tetap, tidak mengikuti wadah",
    examples: ["Batu 🪨", "Kayu 🪵", "Es batu 🧊", "Buku 📘"],
    color: "#FF6B6B",
  },
  {
    id: "cair",
    title: "Benda Cair",
    emoji: "💧",
    description: "Benda cair mengikuti bentuk wadahnya.",
    characteristics: "Bentuk berubah mengikuti wadah, volume tetap",
    examples: ["Air 💧", "Minyak 🫗", "Susu 🥛", "Jus 🧃"],
    color: "#4ECDC4",
  },
  {
    id: "gas",
    title: "Benda Gas",
    emoji: "💨",
    description: "Benda gas tidak terlihat dan menyebar ke segala arah.",
    characteristics: "Tidak terlihat, mengisi seluruh ruangan",
    examples: ["Udara 🌬️", "Uap air ♨️", "Asap 🌫️", "Aroma bunga 🌸"],
    color: "#A78BFA",
  },
];

export const perubahanWujud: PerubahanWujud[] = [
  {
    id: "mencair",
    title: "Mencair",
    emoji: "🧊➡️💧",
    from: "Padat",
    to: "Cair",
    description:
      "Mencair adalah perubahan wujud dari padat menjadi cair. Terjadi karena kenaikan suhu (pemanasan).",
    example: "Es batu yang dipanaskan akan mencair menjadi air.",
    color: "#FF6B6B",
  },
  {
    id: "membeku",
    title: "Membeku",
    emoji: "💧➡️🧊",
    from: "Cair",
    to: "Padat",
    description:
      "Membeku adalah perubahan wujud dari cair menjadi padat. Terjadi karena penurunan suhu (pendinginan).",
    example: "Air yang dimasukkan ke freezer akan membeku menjadi es.",
    color: "#6EC1E4",
  },
  {
    id: "menguap",
    title: "Menguap",
    emoji: "💧➡️💨",
    from: "Cair",
    to: "Gas",
    description:
      "Menguap adalah perubahan wujud dari cair menjadi gas. Terjadi karena pemanasan.",
    example: "Air yang dipanaskan di kompor akan menguap menjadi uap air.",
    color: "#FFD93D",
  },
  {
    id: "mengembun",
    title: "Mengembun",
    emoji: "💨➡️💧",
    from: "Gas",
    to: "Cair",
    description:
      "Mengembun adalah perubahan wujud dari gas menjadi cair. Terjadi karena penurunan suhu.",
    example:
      "Uap air di udara menjadi titik-titik air pada gelas berisi es.",
    color: "#00C9A7",
  },
  {
    id: "menyublim",
    title: "Menyublim",
    emoji: "🪨➡️💨",
    from: "Padat",
    to: "Gas",
    description:
      "Menyublim adalah perubahan wujud dari padat langsung menjadi gas tanpa menjadi cair dulu.",
    example: "Kapur barus di lemari lama-lama mengecil dan habis.",
    color: "#A78BFA",
  },
];
