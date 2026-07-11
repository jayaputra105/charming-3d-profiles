import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Globe, ShoppingBag, Wrench, Sparkles, MessageCircle, Timer, Flame } from "lucide-react";
import { SiteShell, SectionTitle, GlassCard } from "@/components/SiteShell";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";


export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Harga — Jaya Putra Syaipul" },
      {
        name: "description",
        content:
          "PROMO 20% OFF (2 minggu). Paket harga pembuatan website: Portofolio mulai 500rb, Landing Page Katalog Belanja mulai 800rb, dan paket Custom sesuai kebutuhan. Sudah termasuk custom domain, hosting 1 tahun, dan setup SEO dasar.",
      },
      { property: "og:title", content: "Harga — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "PROMO 20% OFF selama 2 minggu. Portofolio mulai 500rb, Katalog Belanja mulai 800rb, dan Custom sesuai kebutuhan. Termasuk domain, hosting 1 tahun & SEO dasar.",
      },
    ],
  }),
  component: PricingPage,
});

const WHATSAPP_NUMBER = "6282199870047";

// Promo: 20% off, berlaku 2 minggu sejak tanggal ini.
const PROMO_DISCOUNT = 0.2;
const PROMO_END = new Date("2026-07-25T23:59:59+07:00");

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

const applyPromo = (n: number) => Math.round((n * (1 - PROMO_DISCOUNT)) / 1000) * 1000;

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
        <PromoBanner />
      </Reveal>

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
            originalPrice="Rp 500rb"
            promoPrice="Rp 400rb"
            priceSuffix="/ mulai"
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
            originalPrice="Rp 800rb"
            promoPrice="Rp 640rb"
            priceSuffix="/ mulai"
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
            promoPrice="Hemat 20%"
            priceSuffix="sesuai kebutuhan"
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


function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { diff, days, hours, minutes, seconds };
}

function PromoBanner() {
  const { diff, days, hours, minutes, seconds } = useCountdown(PROMO_END);
  if (diff <= 0) return null;

  const endLabel = PROMO_END.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const Cell = ({ v, l }: { v: number; l: string }) => (
    <div className="min-w-[54px] rounded-xl border border-primary/30 bg-background/40 px-2 py-2 text-center backdrop-blur">
      <p className="bg-gradient-to-br from-primary to-accent bg-clip-text text-xl font-black text-transparent tabular-nums sm:text-2xl">
        {String(v).padStart(2, "0")}
      </p>
      <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[10px]">
        {l}
      </p>
    </div>
  );

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/15 p-4 shadow-lg shadow-primary/20 sm:mb-8 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/40"
          >
            <Flame className="h-5 w-5" />
          </motion.span>
          <div>
            <p className="flex flex-wrap items-center gap-2 text-sm font-bold sm:text-base">
              PROMO SPESIAL 20% OFF
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                2 Minggu
              </span>
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
              <Timer className="h-3.5 w-3.5" />
              Berakhir {endLabel}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Cell v={days} l="Hari" />
          <Cell v={hours} l="Jam" />
          <Cell v={minutes} l="Menit" />
          <Cell v={seconds} l="Detik" />
        </div>
      </div>
    </div>
  );
}


function PackageCard({
  icon,
  title,
  originalPrice,
  promoPrice,
  priceSuffix,
  desc,
  features,
  ctaText,
  highlight,
  exampleLabel,
  exampleHref,
}: {
  icon: React.ReactNode;
  title: string;
  originalPrice?: string;
  promoPrice: string;
  priceSuffix?: string;
  desc: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  exampleLabel?: string;
  exampleHref?: string;
}) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo, saya tertarik dengan paket ${title} (promo 20% off).`
  )}`;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`surface-card relative flex h-full flex-col rounded-2xl p-5 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_var(--primary-bright)] sm:rounded-3xl sm:p-7 ${
        highlight ? "ring-2 ring-primary/60" : ""
      }`}
    >
      <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/40">
        -20%
      </span>
      {highlight && (
        <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/40">
          Populer
        </span>
      )}
      <div className="flex items-center gap-3">
        <span className="surface-primary grid h-10 w-10 place-items-center rounded-xl">{icon}</span>
        <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
      </div>

      <div className="mt-4 space-y-1">
        {originalPrice && (
          <p className="text-sm font-semibold text-muted-foreground/80 line-through decoration-destructive/70 decoration-2">
            {originalPrice}
          </p>
        )}
        <p className="flex flex-wrap items-baseline gap-2">
          <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
            {promoPrice}
          </span>
          {priceSuffix && (
            <span className="text-xs font-medium text-muted-foreground">{priceSuffix}</span>
          )}
        </p>
      </div>

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
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-primary/60"
        >
          <MessageCircle className="h-4 w-4" /> {ctaText}
        </a>
        {exampleHref && (
          <a
            href={exampleHref}
            target={exampleHref.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            {exampleLabel ?? "Lihat contoh"}
          </a>
        )}
      </div>
    </motion.div>
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
  const promoTotal = applyPromo(total);
  const saved = total - promoTotal;

  const summaryText = () => {
    const page = PAGE_OPTIONS.find((p) => p.id === pageType)?.label ?? "";
    const feats = FEATURES.filter((f) => selected[f.id]).map((f) => `- ${f.label}`).join("\n");
    return `Halo, saya mau konsultasi paket Custom (promo 20% off):\n\nJenis: ${page}\nFitur:\n${feats || "- (belum ada)"}\n\nHarga normal: ${formatIDR(total)}\nHarga promo: ${formatIDR(promoTotal)}`;
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
          <div className="flex items-center gap-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Estimasi total</p>
            <span className="rounded-full bg-gradient-to-r from-primary to-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              -20%
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-muted-foreground line-through decoration-destructive/70 decoration-2">
            {formatIDR(total)}
          </p>
          <p className="mt-0.5 bg-gradient-to-br from-primary to-accent bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
            {formatIDR(promoTotal)}
          </p>
          {saved > 0 && (
            <p className="mt-1 text-xs font-semibold text-primary">
              Hemat {formatIDR(saved)} — promo 2 minggu
            </p>
          )}
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
