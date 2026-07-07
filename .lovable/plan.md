# Rencana Upgrade Visual & Interaktif Portofolio

## Tujuan
Bikin portofolio lebih "hidup" dan memorable tanpa mengubah identitas brand yang sudah ada (tema gelap ungu + glass card). Fokus ke micro-interaction, motion, dan struktur visual yang memandu visitor dari hero ke CTA.

## Opsi Upgrade (bisa pilih semua atau sebagian)

### A. Ambient Background Animation
- Tambahkan subtle animated gradient orbs / particles di background halaman.
- Efek: gerak pelan, opacity rendah, tidak ganggu readability.
- Diterapkan global di `SiteShell` jadi semua halaman ikut hidup.

### B. Scroll-Triggered Reveal Animations
- Setiap section/card muncul dengan fade + slide-up saat masuk viewport.
- Gunakan Framer Motion `whileInView` dengan stagger children.
- Diterapkan di: Home stats cards, About info cards, Portfolio project cards, Pricing cards, Contact cards.

### C. Tech Stack Orbit / Infinite Marquee
- Di halaman About, ganti bagian technical skill menjadi horizontal infinite marquee logo/logo tech (React, Next.js, TypeScript, Node.js, NeonDB, MySQL, Tailwind, Git).
- Hover: logo berhenti / scale up sedikit.
- Tambahkan section "Tools I Use" yang sama di Home bawah hero.

### D. Featured Project Spotlight + Proses Kerja
- Di Home, tambahkan satu section "Proyek Unggulan" yang menampilkan 1 project highlight dengan mockup/logo besar + CTA ke Portfolio.
- Tambahkan section "Cara Kerja Saya" (4 langkah: Konsultasi → Desain → Develop → Launch) dengan icon + step connector animasi.
- Ini menjawab kebutuhan UMKM yang mau tahu alur sebelum order.

### E. Micro-Interactions
- Hover state yang lebih kaya untuk tombol dan link (glow intensify, magnetic button ringan).
- Active nav indicator yang smooth slide.
- Card tilt 3D ringan on hover untuk portfolio cards.

## Yang TIDAK akan dilakukan
- Tidak mengganti tema warna utama.
- Tidak menambahkan dependency berat seperti Three.js/WebGL.
- Tidak merombak struktur navigasi atau konten utama yang sudah ada.

## Estimasi
- Scope ini masih dalam 1-2 putaran edit.
- Tidak perlu backend baru; semua pure frontend motion.

## Langkah Implementasi
1. Tambahkan `AmbientBackground` component ke `SiteShell`.
2. Buat reusable `Reveal` wrapper component untuk scroll animations.
3. Update Home: tambahkan Featured Project + How I Work sections.
4. Update About: ganti tech skills jadi marquee/orbit.
5. Update Portfolio & Pricing: wrap cards dengan `Reveal` + hover tilt.
6. Polish hover states di buttons, nav, dan cards.
7. Build & preview untuk cek responsif dan performa.

## Pertanyaan keputusan
1. Mau dikerjakan semua opsi (A-E) atau ada yang mau didahulukan / di-skip?
2. Untuk Tech Stack (opsi C), prefer infinite horizontal marquee atau grid logo static dengan hover scale?
3. Untuk Featured Project (opsi D), project mana yang mau di-highlight di home? (default: Damar Catering atau SAE Rasa)