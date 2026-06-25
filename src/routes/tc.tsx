import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tc")({
  head: () => ({
    meta: [
      { title: "Syarat & Ketentuan Layanan" },
      { name: "description", content: "Syarat dan ketentuan layanan pengembangan website." },
    ],
  }),
  component: TermsPage,
});

function Section({ title, items }: { title: string; items: React.ReactNode[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">📋 Syarat & Ketentuan Layanan</h1>

      <section className="mt-10 space-y-8">
        <Section
          title="1. Sistem Pembayaran & Pembatalan"
          items={[
            <><strong>DP Wajib:</strong> Pengerjaan dimulai setelah pembayaran DP sebesar 50%.</>,
            <><strong>Pelunasan:</strong> Sisa 50% wajib dibayar maksimal 3 hari setelah web selesai diuji coba (sebelum serah terima hak akses penuh).</>,
            <><strong>Pembatalan:</strong> Jika klien membatalkan proyek di tengah jalan, uang DP dianggap hangus.</>,
          ]}
        />
        <Section
          title="2. Pembatasan Fitur (Anti Scope-Creep)"
          items={[
            "Website dibangun hanya berdasarkan kesepakatan fitur di awal.",
            "Permintaan fitur tambahan di tengah jalan akan dikenakan biaya tambahan per fitur dan penyesuaian deadline.",
          ]}
        />
        <Section
          title="3. Konten & Materi Website"
          items={[
            "Semua materi (teks, foto produk, logo) wajib disediakan oleh klien.",
            "Keterlambatan pengiriman materi akan otomatis memperpanjang deadline tanpa denda bagi developer.",
          ]}
        />
        <Section
          title="4. Serah Terima & Hak Cipta"
          items={[
            "Setelah pelunasan 100%, seluruh hak akses sistem menjadi milik klien sepenuhnya.",
            'Developer berhak mencantumkan tautan kecil di footer website ("Designed by Jaya") sebagai bagian dari portofolio.',
          ]}
        />
        <Section
          title="5. Aturan Garansi & Kelalaian"
          items={[
            <><strong>Garansi 3 Bulan:</strong> Hanya berlaku untuk perbaikan bug/error murni dari kode awal. Tidak berlaku untuk tambah fitur baru.</>,
            <><strong>Bimbingan Dasar:</strong> Klien mendapatkan 1x panduan dasar kelola konten secara mandiri setelah web live.</>,
            <><strong>Kelalaian Pengguna:</strong> Garansi hangus jika klien/pihak ketiga mengubah kodingan inti atau setelan server tanpa izin. Perbaikan akibat hal ini dikenakan biaya servis tambahan.</>,
          ]}
        />
      </section>

      <Link to="/" className="mt-10 inline-block text-sm font-medium text-muted-foreground hover:text-foreground hover:underline">
        ← Kembali ke Beranda
      </Link>
    </main>
  );
}
