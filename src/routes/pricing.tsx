import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Globe, ShoppingBag, Wrench, Sparkles, MessageCircle } from "lucide-react";
import { SiteShell, SectionTitle, GlassCard } from "@/components/SiteShell";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";


export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Harga — Jaya Putra Syaipul" },
      {
        name: "description",
        content:
          "Paket harga pembuatan website: Portofolio mulai 500rb, Landing Page Katalog Belanja mulai 800rb, dan paket Custom sesuai kebutuhan. Sudah termasuk custom domain, hosting 1 tahun, dan setup SEO dasar.",
      },
      { property: "og:title", content: "Harga — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "Paket harga pembuatan website: Portofolio mulai 500rb, Katalog Belanja mulai 800rb, dan Custom sesuai kebutuhan. Termasuk domain, hosting 1 tahun & SEO dasar.",
      },
    ],
  }),
  component: PricingPage,
});

const WHATSAPP_NUMBER = "6282199870047";

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

type Feature = {
  id: string;
  label: string;
  price: number;
  desc?: string;
};

const PAGE_OPTIONS = [
  { id: "landing", label: "Landing Page (1 halaman)", price: 500_000, desc: "Satu halaman scroll panjang" },
  { id: "multi", label: "Multi Page (5 halaman)", price: 1_200_000, desc: "Home, About, Layanan, Portofolio, Kontak" },
  { id: "multi-plus", label: "Multi Page + (8+ halaman)", price: 2_000_000, desc: "Struktur lebih kompleks & sub-halaman" },
] as const;

const FEATURES: Feature[] = [
  { id: "cms", label: "CMS / Admin Panel", price: 800_000, desc: "Kelola konten sendiri" },
  { id: "auth", label: "Login & User Account", price: 700_000 },
  { id: "db", label: "Database Dinamis", price: 500_000 },
  { id: "wa", label: "Integrasi WhatsApp Order", price: 150_000 },
  { id: "payment", label: "Payment Gateway", price: 900_000, desc: "Midtrans / Xendit" },
  { id: "blog", label: "Blog / Artikel", price: 400_000 },
  { id: "multilang", label: "Multi Bahasa", price: 500_000 },
  { id: "animation", label: "Animasi & Interaksi Premium", price: 300_000 },
  { id: "seo-pro", label: "SEO Advanced + Schema", price: 400_000, desc: "Di atas SEO dasar bawaan" },
  { id: "email", label: "Form + Notifikasi Email", price: 250_000 },
];

function PricingPage() {
  return (
    <SiteShell>
      <SectionTitle kicker="Harga" title="Paket Pembuatan Website" />

      <Reveal>
        <p className="mb-8 max-w-2xl leading-relaxed text-muted-foreground" style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)" }}>
          Semua paket sudah <span className="font-semibold text-foreground">termasuk custom domain</span>,
          <span className="font-semibold text-foreground"> hosting 1 tahun</span>, dan
          <span className="font-semibold text-foreground"> setup SEO dasar</span>. Harga bisa disesuaikan dengan kebutuhan.
        </p>
      </Reveal>

      <RevealStagger className="grid gap-5 sm:gap-6 md:grid-cols-3" stagger={0.1}>
        <RevealItem>
          <PackageCard
            icon={<Globe className="h-5 w-5" />}
            title="Website Portofolio"
            price="Mulai 500rb"
            exampleLabel="Contoh"
            exampleHref="/portfolio"
            desc="Cocok untuk personal branding, freelancer, jasa, atau company profile ringkas."
            features={[
              "1–3 halaman siap pakai",
              "Desain modern & responsif",
              "Custom domain + hosting 1 tahun",
              "Setup SEO dasar",
              "Form kontak / WhatsApp",
            ]}
            ctaText="Konsultasi Portofolio"
          />
        </RevealItem>
        <RevealItem>
          <PackageCard
            icon={<ShoppingBag className="h-5 w-5" />}
            title="Landing Page Katalog Belanja"
            price="Mulai 800rb"
            exampleLabel="Contoh"
            exampleHref="https://e-commerce-demo-nine-xi.vercel.app/"
            desc="Untuk UMKM & bisnis kuliner: pajang produk/menu, tombol pesan cepat via WhatsApp."
            highlight
            features={[
              "Katalog produk / menu",
              "Keranjang & checkout WhatsApp",
              "Kategori & pencarian",
              "Custom domain + hosting 1 tahun",
              "Setup SEO dasar",
            ]}
            ctaText="Konsultasi Katalog"
          />
        </RevealItem>
        <RevealItem>
          <PackageCard
            icon={<Wrench className="h-5 w-5" />}
            title="Custom"
            price="Sesuai kebutuhan"
            exampleLabel="Contoh"
            exampleHref="https://zettapedia.vercel.app/"
            desc="Rakit sendiri fitur & jumlah halaman sesuai kebutuhan. Gunakan estimator di bawah."
            features={[
              "Pilih landing atau multi-page",
              "Fitur bebas (CMS, login, payment, dsb.)",
              "Custom domain + hosting 1 tahun",
              "Setup SEO dasar",
              "Estimasi harga transparan",
            ]}
            ctaText="Konsultasi Custom"
          />
        </RevealItem>
      </RevealStagger>

      <Reveal className="mt-10 sm:mt-14">
        <CustomEstimator />
      </Reveal>

      <Reveal>
        <p className="mt-8 text-center text-xs text-muted-foreground sm:text-sm">
          Harga bersifat estimasi awal. Final harga menyesuaikan kompleksitas & scope setelah diskusi.
        </p>
      </Reveal>
    </SiteShell>
  );
}


function PackageCard({
  icon,
  title,
  price,
  desc,
  features,
  ctaText,
  highlight,
  exampleLabel,
  exampleHref,
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
  desc: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  exampleLabel?: string;
  exampleHref?: string;
}) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo, saya tertarik dengan paket ${title}.`
  )}`;
  return (
    <div
      className={`surface-card relative flex h-full flex-col rounded-2xl p-5 sm:rounded-3xl sm:p-7 ${
        highlight ? "ring-2 ring-primary/60" : ""
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/40">
          Populer
        </span>
      )}
      <div className="flex items-center gap-3">
        <span className="surface-primary grid h-10 w-10 place-items-center rounded-xl">{icon}</span>
        <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
      </div>
      <p className="mt-4 bg-gradient-to-br from-primary to-accent bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
        {price}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>

      <ul className="mt-5 space-y-2.5 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-2">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" /> {ctaText}
        </a>
        {exampleHref && (
          <a
            href={exampleHref}
            target={exampleHref.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            {exampleLabel ?? "Lihat contoh"}
          </a>
        )}
      </div>
    </div>
  );
}

function CustomEstimator() {
  const [pageType, setPageType] = useState<(typeof PAGE_OPTIONS)[number]["id"]>("landing");
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setSelected((s) => ({ ...s, [id]: !s[id] }));

  const basePrice = PAGE_OPTIONS.find((p) => p.id === pageType)?.price ?? 0;
  const featurePrice = useMemo(
    () => FEATURES.filter((f) => selected[f.id]).reduce((sum, f) => sum + f.price, 0),
    [selected]
  );
  const total = basePrice + featurePrice;

  const summaryText = () => {
    const page = PAGE_OPTIONS.find((p) => p.id === pageType)?.label ?? "";
    const feats = FEATURES.filter((f) => selected[f.id]).map((f) => `- ${f.label}`).join("\n");
    return `Halo, saya mau konsultasi paket Custom:\n\nJenis: ${page}\nFitur:\n${feats || "- (belum ada)"}\n\nEstimasi: ${formatIDR(total)}`;
  };

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summaryText())}`;

  return (
    <GlassCard className="mt-10 sm:mt-14">
      <div className="flex items-center gap-3">
        <span className="surface-primary grid h-10 w-10 place-items-center rounded-xl">
          <Sparkles className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-lg font-bold sm:text-xl">Estimator Paket Custom</h2>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Pilih tipe halaman & fitur yang kamu butuhkan — harga terupdate otomatis.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">1. Tipe Halaman</h3>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {PAGE_OPTIONS.map((opt) => {
            const active = pageType === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setPageType(opt.id)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  active
                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                    : "border-white/10 hover:border-primary/40"
                }`}
              >
                <p className="text-sm font-bold">{opt.label}</p>
                {opt.desc && <p className="mt-1 text-xs text-muted-foreground">{opt.desc}</p>}
                <p className="mt-2 text-sm font-semibold text-primary">{formatIDR(opt.price)}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">2. Fitur Tambahan</h3>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {FEATURES.map((f) => {
            const active = !!selected[f.id];
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => toggle(f.id)}
                className={`flex items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                  active
                    ? "border-primary bg-primary/10"
                    : "border-white/10 hover:border-primary/40"
                }`}
              >
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border ${
                    active ? "border-primary bg-primary text-primary-foreground" : "border-white/20"
                  }`}
                >
                  {active && <Check className="h-3.5 w-3.5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">{f.label}</span>
                    <span className="shrink-0 text-xs font-bold text-primary">+{formatIDR(f.price)}</span>
                  </span>
                  {f.desc && <span className="mt-0.5 block text-xs text-muted-foreground">{f.desc}</span>}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Estimasi total</p>
          <p className="mt-1 bg-gradient-to-br from-primary to-accent bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
            {formatIDR(total)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Sudah termasuk custom domain, hosting 1 tahun & setup SEO dasar.
          </p>
        </div>
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" /> Diskusi via WhatsApp
        </a>
      </div>
    </GlassCard>
  );
}
