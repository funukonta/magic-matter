# 🔮 Magic Matter: Dunia Perubahan Benda

Aplikasi edukasi interaktif berbasis React Native (Expo) untuk siswa sekolah dasar tentang **perubahan wujud benda** dalam mata pelajaran IPAS.

## 📱 Fitur

| Menu | Deskripsi |
|------|-----------|
| 📖 **Materi** | Penjelasan wujud benda (padat, cair, gas) dan 5 jenis perubahan wujud |
| 🎮 **Game** | Mini-game "Petualangan Si Wujud Ajaib" dengan 5 level |
| 🎬 **Video** | Video pembelajaran perubahan wujud benda |
| 📝 **Rangkuman** | Kesimpulan materi dan contoh siklus hujan |
| 🎯 **CP & TP** | Capaian dan Tujuan Pembelajaran |
| 👨‍💻 **Tim Pengembang** | Profil kreator aplikasi |

## 🛠️ Tech Stack

- **Framework:** React Native + Expo SDK 54
- **Language:** TypeScript
- **Navigation:** React Navigation (Native Stack)
- **Styling:** NativeWind (Tailwind CSS for RN)
- **Video:** expo-av
- **Animations:** lottie-react-native (placeholder)

## 📁 Struktur Project

```
MagicMatter/
├── App.tsx                    # Entry point + Navigation setup
├── global.css                 # Tailwind CSS directives
├── tailwind.config.js         # NativeWind/Tailwind config
├── metro.config.js            # Metro bundler config
├── babel.config.js            # Babel config
└── src/
    ├── screens/
    │   ├── HomeScreen.tsx     # Menu utama + input nama
    │   ├── MateriScreen.tsx   # Materi wujud & perubahan benda
    │   ├── GameScreen.tsx     # Mini-game 5 level
    │   ├── ResultScreen.tsx   # Hasil akhir game (skor & bintang)
    │   ├── VideoScreen.tsx    # Video pembelajaran
    │   ├── RangkumanScreen.tsx # Rangkuman materi
    │   ├── CPTPScreen.tsx     # Capaian & Tujuan Pembelajaran
    │   └── TimPengembangScreen.tsx # Profil tim
    └── data/
        ├── gameData.ts        # Data 5 level game
        └── materi.ts          # Data materi wujud & perubahan benda
```

## 🚀 Cara Menjalankan (Development)

### Prasyarat

- [Node.js](https://nodejs.org/) v20+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Android device atau emulator (untuk testing)
- [Expo Go](https://expo.dev/go) app di HP Android (cara termudah)

### Langkah-langkah

```bash
# 1. Masuk ke folder project
cd MagicMatter

# 2. Install dependencies
npm install

# 3. Jalankan development server
npx expo start
```

Setelah server berjalan, akan muncul QR code di terminal.

### Opsi Testing

#### Opsi A: Pakai HP langsung (Paling Mudah) 📱
1. Install **Expo Go** dari Google Play Store
2. Pastikan HP dan laptop terhubung ke **WiFi yang sama**
3. Scan QR code yang muncul di terminal menggunakan app Expo Go
4. Aplikasi akan langsung terbuka di HP

#### Opsi B: Pakai Android Emulator 💻
1. Install [Android Studio](https://developer.android.com/studio)
2. Buat Virtual Device (AVD) di Android Studio
3. Jalankan emulator
4. Tekan `a` di terminal Expo untuk membuka di emulator

#### Opsi C: Pakai Web Browser 🌐
```bash
npx expo start --web
```
> ⚠️ Beberapa fitur native (video, lottie) mungkin tidak bekerja sempurna di web.

## 📦 Build APK (Untuk Install di Android)

### Opsi 1: EAS Build (Cloud - Recommended)

```bash
# 1. Install EAS CLI
npm install -g eas-cli

# 2. Login ke akun Expo
eas login

# 3. Konfigurasi build
eas build:configure

# 4. Build APK (development)
eas build --platform android --profile preview

# 5. Atau build APK (production)
eas build --platform android --profile production
```

Setelah build selesai, link download APK akan diberikan di terminal dan di dashboard [expo.dev](https://expo.dev).

### Opsi 2: Build Lokal (Tanpa Cloud)

```bash
# 1. Install EAS CLI
npm install -g eas-cli

# 2. Build APK secara lokal (butuh Android SDK)
eas build --platform android --profile preview --local
```

### Konfigurasi EAS (eas.json)

Buat file `eas.json` di root project:

```json
{
  "cli": {
    "version": ">= 3.0.0"
  },
  "build": {
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

## 📲 Cara Install APK

1. Transfer file `.apk` ke HP Android
2. Buka file APK di HP
3. Jika muncul peringatan "Install from unknown sources", aktifkan dulu di Settings
4. Tekan **Install**
5. Selesai! Aplikasi siap digunakan 🎉

## 🎮 Cara Bermain Game

1. Masukkan nama di halaman utama
2. Tekan tombol **Game** 🎮
3. Ikuti petualangan Si Wujud Ajaib melalui 5 level:
   - Level 1: Dunia Es (Mencair)
   - Level 2: Dunia Api (Menguap)
   - Level 3: Dunia Awan (Mengembun)
   - Level 4: Dunia Beku (Membeku)
   - Level 5: Dunia Ajaib (Menyublim)
4. Pilih jawaban yang benar untuk lanjut ke level berikutnya
5. Setiap jawaban benar = ⭐ 1 bintang + 20 poin
6. Di akhir, lihat total skor dan bintangmu!

## 👥 Tim Pengembang

- Aulia Luthfi Dewi Pramesta
- Tutik Ernawati
- Erwin Ardianzah
- Prof. Dr. Ambarwati, M.Si (Pembimbing)
- Dr. Anatri Desstya, M.Pd (Pembimbing)

## 📄 Lisensi

Aplikasi ini dibuat untuk keperluan edukasi.
