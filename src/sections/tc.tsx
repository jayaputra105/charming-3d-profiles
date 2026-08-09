import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
} as const;

const sections = [
  {
    num: "01",
    title: "Sistem Pembayaran & Pembatalan",
    items: [
      <><strong>DP Wajib:</strong> Pengerjaan dimulai setelah pembayaran DP sebesar 50%.</>,
      <><strong>Pelunasan:</strong> Sisa 50% wajib dibayar maksimal 3 hari setelah web selesai diuji coba (sebelum serah terima hak akses penuh).</>,
      <><strong>Pembatalan:</strong> Jika klien membatalkan proyek di tengah jalan, uang DP dianggap hangus.</>,
    ],
  },
  {
    num: "02",
    title: "Pembatasan Fitur (Anti Scope-Creep)",
    items: [
      "Website dibangun hanya berdasarkan kesepakatan fitur di awal.",
      "Permintaan fitur tambahan di tengah jalan akan dikenakan biaya tambahan per fitur dan penyesuaian deadline.",
    ],
  },
  {
    num: "03",
    title: "Konten & Materi Website",
    items: [
      "Semua materi (teks, foto produk, logo) wajib disediakan oleh klien.",
      "Keterlambatan pengiriman materi akan otomatis memperpanjang deadline tanpa denda bagi developer.",
    ],
  },
  {
    num: "04",
    title: "Serah Terima & Hak Cipta",
    items: [
      "Setelah pelunasan 100%, seluruh hak akses sistem menjadi milik klien sepenuhnya.",
      <>Developer berhak mencantumkan tautan kecil di footer website (<em>"Designed by Jaya"</em>) sebagai bagian dari portofolio.</>,
    ],
  },
  {
    num: "05",
    title: "Aturan Garansi & Kelalaian",
    items: [
      <><strong>Garansi 3 Bulan:</strong> Hanya berlaku untuk perbaikan bug/error murni dari kode awal. Tidak berlaku untuk tambah fitur baru.</>,
      <><strong>Bimbingan Dasar:</strong> Klien mendapatkan 1x panduan dasar kelola konten secara mandiri setelah web live.</>,
      <><strong>Kelalaian Pengguna:</strong> Garansi hangus jika klien/pihak ketiga mengubah kodingan inti atau setelan server tanpa izin. Perbaikan akibat hal ini dikenakan biaya servis tambahan.</>,
    ],
  },
];

export function TermsSection() {
  return (
    <section id="tc" className="scroll-mt-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16"
      >
        {/* Header */}
        <div className="text-center">
          <div className="surface-primary mx-auto inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-xs font-bold sm:text-sm">
            <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Syarat & Ketentuan
          </div>
          <h1
            className="mt-4 font-bold tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.25rem)" }}
          >
            Ketentuan Layanan
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground" style={{ fontSize: "clamp(0.8rem, 2.2vw, 1rem)" }}>
            Mohon dibaca dengan saksama sebelum memulai proyek bersama kami.
          </p>
        </div>

        {/* Cards */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-8 space-y-4 sm:mt-10 sm:space-y-5"
        >
          {sections.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="surface-card rounded-[1.25rem] p-5 sm:rounded-[1.5rem] sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="surface-primary grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold sm:h-11 sm:w-11 sm:text-base">
                  {s.num}
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-bold tracking-tight sm:text-lg">
                    {s.title}
                  </h2>
                  <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                    {s.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-glow)]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Back link */}
        <motion.div variants={fadeUp} className="mt-8 flex justify-center sm:mt-10">
          <Link
            to="/"
            className="btn-ghost inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
