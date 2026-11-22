# 🕌 TK AL KHOIRIYAH SUMBEREJO - Aplikasi Pembelajaran Interaktif PAUD

> **Kelompok A (Usia 4-5 Tahun)**  
> **RT 002 RW 025 - Dusun Bregoh, Desa Sumberejo**

Aplikasi web interaktif pembelajaran ramah anak usia dini berbasis web modern yang responsif, ceria, dan edukatif. Dirancang khusus untuk menstimulasi 6 aspek perkembangan anak (Nilai Agama & Moral, Motorik Halus, Kognitif, Bahasa, Sosial Emosional, dan Seni) melalui pendekatan bermain sambil belajar (*play-based learning*).

---

## 🌟 Fitur Utama Aplikasi

1. **Layar Menu Utama Interaktif (Hotspot Presisi)**
   - Desain visual kartun 3D yang cerah dan ramah anak.
   - Hotspot interaktif responsif pada setiap tombol ilustrasi:
     - 🟡 **Petunjuk Media**: Membuka layar tujuan & cara menggunakan media.
     - 🔴 **Video**: Bioskop video edukasi anak usia dini.
     - 🔵 **Game Edukasi**: 3 permainan edukatif (Hijaiyah, Balon Warna, Tebak Suara Hewan).
     - 🟣 **Animasi Karya**: Studio melukis digital dengan crayon warna & stempel lucu.
     - 🟢 **Buku Cerita**: Dongeng islami digital bergambar dengan narasi audio.
     - 🏠 **Beranda & ➡️ Lanjut**: Navigasi antarmuka yang intuitif bagi anak.
   - Karakter **Budi** & **Siti**, Kubah Masjid, dan Matahari bersuara saat disentuh.

2. **Layar Petunjuk Media Pembelajaran Interaktif (Layar Kedua)**
   - **Tujuan Pembelajaran (5 Poin)**: Stimulasi nilai agama, kognitif, bahasa, kemandirian, dan bermain ceria.
   - **Cara Menggunakan Media (5 Langkah)**: Panduan visual interaktif bertahap.
   - **Petunjuk Guru dan Orang Tua**: Panduan pendampingan ramah anak di rumah dan di sekolah.

3. **Bioskop Video Edukasi**
   - Pemutaran video cerita lokal (`assets/video_watu_ulo_cerita_transisi.mp4`).
   - Mendukung integrasi video Google Drive dan link YouTube.

4. **Portal Guru (Admin CMS & Database)**
   - Diakses melalui ikon ⚙️ Portal Guru di pojok kanan atas dengan PIN keamanan `123456`.
   - Menambah, mengubah materi video, soal kuis game, dan cerita dongeng.
   - Mendukung integrasi langsung ke Google Sheets / Google Apps Script.

---

## 🚀 Panduan Migrasi ke GitHub & Deploy ke Vercel

### Langkah 1: Inisialisasi Git di Folder Ini

Buka terminal (PowerShell / Command Prompt / Git Bash) di folder proyek ini:

```bash
cd C:\Users\freza\tk-alkhoiriyah-web
git init
git add .
git commit -m "Initial commit: Aplikasi Pembelajaran Interaktif TK Al Khoiriyah Sumberejo"
```

### Langkah 2: Buat Repository Baru di GitHub

1. Buka [github.com](https://github.com) dan login ke akun GitHub Anda.
2. Klik tombol **New** (atau ikon **+** di pojok kanan atas > **New repository**).
3. Beri nama repository, misalnya: `tk-alkhoiriyah-web`.
4. Pilih **Public**, jangan centang *Initialize this repository with a README* (karena sudah ada).
5. Klik **Create repository**.

### Langkah 3: Push Kode ke GitHub

Salin URL repository GitHub Anda, lalu jalankan di terminal:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/tk-alkhoiriyah-web.git
git push -u origin main
```
*(Ganti `USERNAME_ANDA` dengan username akun GitHub Anda)*

---

## ⚡ Langkah Deploy ke Vercel (Gratis & Otomatis)

1. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
2. Di Dashboard Vercel, klik tombol **Add New...** di pojok kanan atas > pilih **Project**.
3. Di daftar repository GitHub, cari `tk-alkhoiriyah-web` lalu klik tombol **Import**.
4. Di bagian konfigurasi:
   - **Framework Preset**: Biarkan *Other* (karena proyek static HTML/CSS/JS murni).
   - **Root Directory**: `./` (biarkan default).
5. Klik tombol **Deploy** (Terapkan).
6. Dalam waktu kurang dari 30 detik, website Anda sudah aktif secara global dengan domain gratis dari Vercel, misalnya:
   👉 `https://tk-alkhoiriyah-web.vercel.app`

Setiap kali Anda melakukan update kode dan `git push` ke GitHub, Vercel akan otomatis meng-update web Anda seketika!

---

## 📁 Struktur Berkas Proyek

```
tk-alkhoiriyah-web/
├── index.html         # Halaman utama aplikasi interaktif lengkap
├── package.json       # Konfigurasi metadata proyek
├── vercel.json        # Pengaturan headers dan cache CDN Vercel
├── .gitignore         # Berkas yang diabaikan oleh git
├── README.md          # Dokumentasi proyek & panduan deploy
└── assets/            # Aset grafis beresolusi tinggi & video
    ├── menu_bg.jpg                        # Latar Menu Utama (1024x572)
    ├── petunjuk_media_bg.jpg              # Latar Petunjuk Media (1024x572)
    └── video_watu_ulo_cerita_transisi.mp4 # Video edukasi cerita anak (22 MB)
```

---

## 📞 Informasi Kontak & Hak Cipta
* **Lembaga**: TK Al Khoiriyah Sumberejo
* **Alamat**: RT 002 RW 025 Dusun Bregoh, Desa Sumberejo
* **Lisensi**: MIT
