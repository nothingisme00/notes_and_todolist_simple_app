# 📝 Notes & Todo App

Aplikasi web minimalis untuk mencatat dan mengatur tugas dengan React dan Tailwind CSS.

A minimalist web application for notes and task management built with React and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.3.1-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-cyan)

---

## 🌟 Fitur / Features

### 📒 Notes (Catatan)
- ✅ Membuat, membaca, mengubah, dan menghapus catatan
- ✅ Judul dan konten catatan
- ✅ Pencarian catatan
- ✅ Timestamp pembuatan dan pembaruan
- ✅ Penyimpanan otomatis ke browser (LocalStorage)

### ✔️ Todo List
- ✅ Menambahkan dan menghapus tugas
- ✅ Menandai tugas sebagai selesai
- ✅ Edit tugas yang belum selesai
- ✅ Filter: Semua / Aktif / Selesai
- ✅ Progress bar visual
- ✅ Statistik tugas
- ✅ Penyimpanan otomatis ke browser (LocalStorage)

### 🎨 UI/UX
- ✅ Desain minimalis dan modern
- ✅ Animasi halus
- ✅ Responsive design
- ✅ Ikon intuitif dengan Lucide React
- ✅ Gradient background
- ✅ Hover effects

---

## 🚀 Instalasi / Installation

### Prerequisites / Persyaratan

Pastikan Anda telah menginstal:
- **Node.js** (versi 16 atau lebih tinggi)
- **npm** atau **yarn** atau **pnpm**

Make sure you have installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** or **pnpm**

### Langkah Instalasi / Installation Steps

#### Bahasa Indonesia 🇮🇩

1. **Clone atau Download Repository**
   ```bash
   git clone <repository-url>
   cd notes_and_todolist_simple_app
   ```

2. **Install Dependencies**

   Menggunakan npm:
   ```bash
   npm install
   ```

   Atau menggunakan yarn:
   ```bash
   yarn install
   ```

   Atau menggunakan pnpm:
   ```bash
   pnpm install
   ```

3. **Jalankan Development Server**

   Menggunakan npm:
   ```bash
   npm run dev
   ```

   Atau menggunakan yarn:
   ```bash
   yarn dev
   ```

   Atau menggunakan pnpm:
   ```bash
   pnpm dev
   ```

4. **Buka di Browser**

   Aplikasi akan berjalan di: `http://localhost:5173`

   Server development akan otomatis reload saat Anda melakukan perubahan pada kode.

5. **Build untuk Production (Opsional)**

   Untuk membuat build production:
   ```bash
   npm run build
   ```

   Untuk preview build production:
   ```bash
   npm run preview
   ```

---

#### English 🇬🇧

1. **Clone or Download Repository**
   ```bash
   git clone <repository-url>
   cd notes_and_todolist_simple_app
   ```

2. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

   Or using pnpm:
   ```bash
   pnpm install
   ```

3. **Run Development Server**

   Using npm:
   ```bash
   npm run dev
   ```

   Or using yarn:
   ```bash
   yarn dev
   ```

   Or using pnpm:
   ```bash
   pnpm dev
   ```

4. **Open in Browser**

   The app will run on: `http://localhost:5173`

   The development server will automatically reload when you make changes to the code.

5. **Build for Production (Optional)**

   To create a production build:
   ```bash
   npm run build
   ```

   To preview the production build:
   ```bash
   npm run preview
   ```

---

## 📁 Struktur Proyek / Project Structure

```
notes_and_todolist_simple_app/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Notes.jsx     # Notes component
│   │   └── TodoList.jsx  # Todo list component
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

---

## 🛠️ Teknologi / Technologies

- **React 18** - Library UI
- **Vite** - Build tool dan dev server yang sangat cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icons
- **LocalStorage API** - Data persistence di browser

---

## 💡 Cara Penggunaan / How to Use

### Notes
1. Klik tombol **"Buat Catatan"** untuk membuat catatan baru
2. Isi judul dan konten catatan
3. Klik **"Simpan"** untuk menyimpan
4. Gunakan kotak pencarian untuk mencari catatan
5. Hover pada catatan untuk melihat tombol edit dan hapus

### Todo List
1. Ketik tugas baru di input field
2. Klik **"Tambah"** atau tekan Enter
3. Klik lingkaran untuk menandai tugas selesai/belum selesai
4. Gunakan filter untuk melihat tugas berdasarkan status
5. Lihat progress bar untuk melihat kemajuan Anda

---

## 🎯 Fitur Mendatang / Future Features

- [ ] Dark mode
- [ ] Categories/Tags untuk notes
- [ ] Priority levels untuk todos
- [ ] Due dates untuk todos
- [ ] Export/Import data
- [ ] Cloud sync (optional)
- [ ] Rich text editor untuk notes

---

## 📝 Catatan / Notes

- Data disimpan di **LocalStorage** browser, sehingga data akan tetap ada meskipun browser ditutup
- Membersihkan cache browser atau menggunakan mode incognito akan menghapus data
- Aplikasi ini berjalan sepenuhnya di sisi klien (client-side) tanpa memerlukan backend

---

## 📄 License

MIT License - Bebas digunakan untuk keperluan pribadi atau komersial.

MIT License - Free to use for personal or commercial purposes.

---

## 🤝 Kontribusi / Contributing

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk saran dan perbaikan.

Contributions are welcome! Please create a pull request or open an issue for suggestions and improvements.

---

**Dibuat dengan ❤️ menggunakan React & Tailwind CSS**

**Built with ❤️ using React & Tailwind CSS**
