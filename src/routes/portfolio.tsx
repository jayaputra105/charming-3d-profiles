import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell, SectionTitle } from "@/components/SiteShell";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Jaya Putra Syaipul" },
      {
        name: "description",
        content:
          "Kumpulan proyek website oleh Jaya Putra Syaipul: e-commerce UMKM, landing page bisnis kuliner, katering, dan restoran.",
      },
      { property: "og:title", content: "Portfolio — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "Kumpulan proyek website oleh Jaya Putra Syaipul: e-commerce UMKM, landing page bisnis kuliner, katering, dan restoran.",
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

function DamarLogo() {
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

const projects: Project[] = [
  {
    id: 1,
    title: "Contoh Web E-Commerce UMKM",
    tags: ["E-Commerce", "UMKM", "Mobile-first"],
    description:
      "Website e-commerce untuk UMKM dengan katalog produk, filter kategori (Fashion, Food, Craft, Elektronik), keranjang belanja, pencarian produk, serta panel kelola toko. Mobile-first, ringan, dan siap berjualan tanpa potongan marketplace.",
    demoUrl: "https://e-commerce-demo-nine-xi.vercel.app/",
    logo: <TokoKitaLogo />,
    bg: "from-emerald-500/30 via-emerald-600/10 to-transparent",
  },
  {
    id: 2,
    title: "Landing Page + Profil Usaha + Katalog Pesanan",
    tags: ["Landing", "Katalog", "Kuliner"],
    description:
      "Website untuk usaha bakery/kuliner: landing page elegan, halaman profil & cerita usaha, katalog pesanan, info lokasi, serta keranjang pesanan. Cocok untuk UMKM kuliner, restoran, atau brand lokal.",
    demoUrl: "https://bu-siti-bakery.vercel.app/",
    logo: <BakeryLogo />,
    bg: "from-amber-500/25 via-orange-700/10 to-transparent",
  },
  {
    id: 3,
    title: "Damar Catering — Katering Pernikahan & Prasmanan",
    tags: ["Katering", "Halal", "Balikpapan"],
    description:
      "Website resmi Damar Catering Balikpapan: jasa katering pernikahan dan prasmanan halal. Menampilkan hero dengan tagline brand, keunggulan usaha (halal terjamin, rasa autentik, kapasitas besar), katalog menu (pondokan, menu nusantara, snack box, minuman & dessert), serta tombol konsultasi langsung ke WhatsApp.",
    demoUrl: "https://damar-catering.vercel.app/",
    logo: <DamarLogo />,
    bg: "from-amber-400/25 via-red-700/10 to-transparent",
  },
];

function PortfolioPage() {
  return (
    <SiteShell>
      <SectionTitle kicker="Portfolio" title="Proyek Pilihan" />

      <div className="space-y-6 sm:space-y-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="surface-card grid items-center gap-5 rounded-2xl p-4 sm:gap-6 sm:rounded-3xl sm:p-5 md:grid-cols-2 md:p-8"
          >
            <div className="relative order-1 flex items-center justify-center overflow-hidden rounded-xl border border-primary/30 py-8 sm:rounded-2xl sm:py-10 md:order-2 md:py-14">
              <div className={`absolute -inset-6 -z-10 bg-gradient-to-br ${p.bg} blur-2xl`} />
              {p.logo}
            </div>
            <div className="order-2 space-y-3 sm:space-y-4 md:order-1">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/40 sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-black tracking-tight" style={{ fontSize: "clamp(1.125rem, 3.5vw, 1.5rem)" }}>{p.title}</h2>
              <p className="leading-relaxed text-muted-foreground" style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>{p.description}</p>
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Kunjungi Website <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
