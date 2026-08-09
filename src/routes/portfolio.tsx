import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SiteShell, SectionTitle } from "@/components/SiteShell";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { DeviceMockupShowcase } from "@/components/DeviceMockupShowcase";


export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portofolio Proyek Website — Jaya Putra Syaipul" },
      {
        name: "description",
        content:
          "Portofolio proyek website oleh Jaya Putra Syaipul: Beautyhaul, Arbi Printing, e-commerce UMKM, landing page bisnis kuliner, katering, restoran, percetakan & beauty haul.",
      },
      {
        name: "keywords",
        content:
          "portofolio website, contoh website UMKM, jasa landing page, contoh e-commerce, jasa website katering, website restoran, website percetakan",
      },
      { property: "og:title", content: "Portofolio Proyek Website — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "Kumpulan proyek: Beautyhaul, Arbi Printing, e-commerce UMKM, landing page kuliner, katering, restoran, percetakan & beauty haul.",
      },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: "/img/ecommerce-demo.png" },
      { name: "twitter:image", content: "/img/ecommerce-demo.png" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Portofolio Proyek Website",
          description: "Kumpulan proyek website yang dikerjakan oleh Jaya Putra Syaipul.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "/portfolio" },
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

type Project = {
  id: number;
  title: string;
  tags: string[];
  description: string;
  demoUrl: string;
  logo: React.ReactNode;
  bg: string; // gradient class for logo tile background
};

function TokoKitaLogo() {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24 sm:h-28 sm:w-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="200" height="200" rx="36" fill="#16a34a" />
      <path
        d="M55 70 h90 l-8 70 a10 10 0 0 1 -10 9 h-54 a10 10 0 0 1 -10 -9 z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path d="M78 78 v-14 a22 22 0 0 1 44 0 v14" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      <text x="100" y="172" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="22" fill="#ffffff">
        TokoKita
      </text>
    </svg>
  );
}

function BakeryLogo() {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24 sm:h-28 sm:w-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="200" height="200" rx="36" fill="#f5e9d4" />
      <circle cx="100" cy="88" r="46" fill="#3c2415" />
      <text x="100" y="104" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="60" fill="#f5e9d4">
        B
      </text>
      <text x="100" y="158" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="20" fill="#3c2415">
        Bu Siti
      </text>
      <text x="100" y="178" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="12" fill="#3c2415" letterSpacing="2">
        BAKERY
      </text>
    </svg>
  );
}

export function DamarLogo() {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24 sm:h-28 sm:w-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="damarFlame" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="0.6" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="36" fill="#1a1208" />
      <circle cx="100" cy="86" r="46" fill="none" stroke="#f59e0b" strokeWidth="3" />
      <path
        d="M100 54 c 10 14 20 22 20 38 a20 20 0 0 1 -40 0 c 0 -12 8 -18 12 -28 c 2 8 8 10 8 -10 z"
        fill="url(#damarFlame)"
      />
      <text x="100" y="158" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="26" fill="#f59e0b">
        Damar
      </text>
      <text x="100" y="180" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="11" fill="#f5e9d4" letterSpacing="3">
        CATERING
      </text>
    </svg>
  );
}

function SaerasaLogo() {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24 sm:h-28 sm:w-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="saerasaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ef4444" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="36" fill="#2a0a0a" />
      <circle cx="100" cy="86" r="44" fill="url(#saerasaGrad)" />
      <path
        d="M82 82 q18 -22 36 0 q-8 8 -8 18 q0 6 -4 10 q-12 8 -24 0 q-4 -4 -4 -10 q0 -10 -8 -18 z"
        fill="#fef3c7"
      />
      <circle cx="92" cy="78" r="4" fill="#2a0a0a" />
      <circle cx="108" cy="78" r="4" fill="#2a0a0a" />
      <path d="M96 88 q4 4 8 0" fill="none" stroke="#2a0a0a" strokeWidth="2" strokeLinecap="round" />
      <text x="100" y="150" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="900" fontSize="30" fill="#ef4444" letterSpacing="2">
        SAE
      </text>
      <text x="100" y="172" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="10" fill="#fca5a5" letterSpacing="1.5">
        RASA · THE CHICKEN
      </text>
    </svg>
  );
}

function DapoerBufahLogo() {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24 sm:h-28 sm:w-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="bufahGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="36" fill="#fff7ed" />
      <rect x="56" y="62" width="88" height="60" rx="12" fill="#f59e0b" />
      <rect x="68" y="74" width="64" height="36" rx="6" fill="#fff7ed" />
      <path d="M76 92 h48 M76 102 h48" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="148" r="6" fill="#d97706" />
      <text x="100" y="175" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="16" fill="#92400e" letterSpacing="0.5">
        DapoerBufah
      </text>
    </svg>
  );
}

function BeautyhaulLogo() {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24 sm:h-28 sm:w-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="beautyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f472b6" />
          <stop offset="1" stopColor="#db2777" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="36" fill="#2a0a18" />
      <path d="M70 70 h60 l10 90 a8 8 0 0 1 -8 8 h-64 a8 8 0 0 1 -8 -8 z" fill="url(#beautyGrad)" />
      <path d="M85 70 v-16 a15 15 0 0 1 30 0 v16" fill="none" stroke="#f9a8d4" strokeWidth="6" strokeLinecap="round" />
      <circle cx="130" cy="60" r="14" fill="#f9a8d4" />
      <path d="M126 58 l4 6 l8 -10" fill="none" stroke="#db2777" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="100" y="172" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="18" fill="#fbcfe8" letterSpacing="0.5">Beautyhaul</text>
    </svg>
  );
}

function ArbiprintingLogo() {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24 sm:h-28 sm:w-28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="arbiGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="36" fill="#0f172a" />
      <rect x="56" y="58" width="88" height="100" rx="12" fill="#1e293b" />
      <rect x="68" y="70" width="64" height="64" rx="6" fill="url(#arbiGrad)" />
      <path d="M82 96 h36 M82 112 h24" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" />
      <circle cx="144" cy="130" r="18" fill="url(#arbiGrad)" />
      <path d="M138 130 l4 4 l8 -10" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="100" y="178" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="16" fill="#e0f2fe" letterSpacing="0.5">ArbiPrinting</text>
    </svg>
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dapoer Bu Fah — Katering Rumahan & Nasi Box",
    tags: ["Katering", "Kuliner", "Nasi Box"],
    description:
      "Website katering rumahan Dapoer Bu Fah: spesialis katering harian, nasi kotak, tumpeng, snack box, dan katering acara keluarga/kantor. Menampilkan menu variatif, paket catering unggulan, alasan memilih (rasa rumahan autentik, bahan berkualitas, harga bersahabat), serta pemesanan langsung via WhatsApp.",
    demoUrl: "https://dapoerbufah.com/",
    logo: <DapoerBufahLogo />,
    bg: "from-orange-400/30 via-amber-600/10 to-transparent",
  },
  {
    id: 2,
    title: "Beautyhaul — E-Commerce Skincare & Kosmetik",
    tags: ["E-Commerce", "Beauty", "Skincare"],
    description:
      "Website e-commerce kecantikan Beautyhaul: katalog produk skincare dan kosmetik, fitur pencarian, kategori brand, halaman produk detail, serta pengalaman belanja mobile-friendly untuk pelanggan beauty haul.",
    demoUrl: "https://beautyhaul.com/",
    logo: <BeautyhaulLogo />,
    bg: "from-pink-500/30 via-rose-600/10 to-transparent",
  },
  {
    id: 3,
    title: "ArbiPrinting — Jasa Percetakan Digital & Offset",
    tags: ["Percetakan", "Printing", "Services"],
    description:
      "Website percetakan ArbiPrinting: layanan cetak digital, offset, spanduk, kartu nama, undangan, dan merchandise. Menampilkan katalog produk, portofolio hasil cetak, informasi layanan, serta pemesanan langsung via WhatsApp.",
    demoUrl: "https://arbiprinting.com/",
    logo: <ArbiprintingLogo />,
    bg: "from-cyan-500/30 via-blue-600/10 to-transparent",
  },
  {
    id: 4,
    title: "Contoh Web E-Commerce UMKM",
    tags: ["E-Commerce", "UMKM", "Mobile-first"],
    description:
      "Website e-commerce untuk UMKM dengan katalog produk, filter kategori (Fashion, Food, Craft, Elektronik), keranjang belanja, pencarian produk, serta panel kelola toko. Mobile-first, ringan, dan siap berjualan tanpa potongan marketplace.",
    demoUrl: "https://e-commerce-demo-nine-xi.vercel.app/",
    logo: <TokoKitaLogo />,
    bg: "from-emerald-500/30 via-emerald-600/10 to-transparent",
  },
  {
    id: 5,
    title: "Landing Page + Profil Usaha + Katalog Pesanan",
    tags: ["Landing", "Katalog", "Kuliner"],
    description:
      "Website untuk usaha bakery/kuliner: landing page elegan, halaman profil & cerita usaha, katalog pesanan, info lokasi, serta keranjang pesanan. Cocok untuk UMKM kuliner, restoran, atau brand lokal.",
    demoUrl: "https://bu-siti-bakery.vercel.app/",
    logo: <BakeryLogo />,
    bg: "from-amber-500/25 via-orange-700/10 to-transparent",
  },
  {
    id: 6,
    title: "Damar Catering — Katering Pernikahan & Prasmanan",
    tags: ["Katering", "Halal", "Balikpapan"],
    description:
      "Website resmi Damar Catering Balikpapan: jasa katering pernikahan dan prasmanan halal. Menampilkan hero dengan tagline brand, keunggulan usaha (halal terjamin, rasa autentik, kapasitas besar), katalog menu (pondokan, menu nusantara, snack box, minuman & dessert), serta tombol konsultasi langsung ke WhatsApp.",
    demoUrl: "https://damar-catering.vercel.app/",
    logo: <DamarLogo />,
    bg: "from-amber-400/25 via-red-700/10 to-transparent",
  },
  {
    id: 7,
    title: "SAE Rasa · The Chicken — Restoran Nusantara & Krispi Modern",
    tags: ["Restoran", "Kuliner", "Nusantara"],
    description:
      "Website restoran dua konsep: SAE Rasa (Indonesian Soul Food — ayam bakar kecap warisan keluarga, cumi hitam Madura, nasi bebek) dan SAE The Chicken (Modern Crispy Chicken — ayam geprek, sayap saus BBQ, rice bowl). Dilengkapi menu digital, katalog cabang (Nganjuk & Malang), testimoni, serta pemesanan langsung via WhatsApp tanpa potongan ojek online.",
    demoUrl: "https://saerasa.vercel.app/",
    logo: <SaerasaLogo />,
    bg: "from-red-500/30 via-red-700/10 to-transparent",
  },
];

function PortfolioPage() {
  return (
    <SiteShell>
      <SectionTitle kicker="Portfolio" title="Proyek Pilihan" />

      <Reveal>
        <div className="panel-hero mb-8 rounded-3xl p-5 sm:mb-12 sm:p-8">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Katalog karya — dari e-commerce UMKM sampai landing page kuliner. Semua dibangun
            ringan, cepat, dan rapi di semua ukuran layar.
          </p>
          <div className="mt-6">
            <DeviceMockupShowcase />
          </div>
        </div>
      </Reveal>

      <RevealStagger className="grid gap-5 sm:gap-7" stagger={0.09}>
        {projects.map((p, i) => (
          <RevealItem key={p.id}>
            <motion.article
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="surface-card group relative grid grid-cols-1 overflow-hidden rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:gap-6 md:p-8"
            >
              {/* index marker */}
              <span className="pointer-events-none absolute right-4 top-3 text-[11px] font-bold tabular-nums tracking-widest text-white/25 sm:right-6 sm:top-5 sm:text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative order-1 flex min-h-[190px] items-center justify-center overflow-hidden rounded-xl sm:min-h-[240px] md:order-2 md:min-h-[300px]"
                style={{
                  background:
                    "radial-gradient(90% 80% at 30% 15%, oklch(0.3 0 0) 0%, transparent 60%), linear-gradient(165deg, oklch(0.22 0 0), oklch(0.14 0 0))",
                  border: "1px solid oklch(1 0 0 / 0.07)",
                }}
              >
                <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.06, rotate: -1.5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  {p.logo}
                </motion.div>
              </div>

              <div className="order-2 flex flex-col justify-center gap-3 pt-4 sm:gap-4 md:order-1 md:pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="chip rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest transition-transform duration-200 hover:-translate-y-0.5 sm:px-3 sm:py-1 sm:text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2
                  className="font-extrabold leading-tight tracking-tight"
                  style={{ fontSize: "clamp(1.15rem, 3.4vw, 1.6rem)" }}
                >
                  {p.title}
                </h2>
                <p
                  className="leading-relaxed text-muted-foreground"
                  style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
                >
                  {p.description}
                </p>
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-light btn-shine group/cta mt-1 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Kunjungi Website
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          </RevealItem>
        ))}
      </RevealStagger>
    </SiteShell>
  );
}


