import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell, SectionTitle } from "@/components/SiteShell";

const ecommerceUrl = "/img/ecommerce-demo.png";
const bakeryUrl = "/img/bakery-demo.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Jaya Putra Syaipul" },
      {
        name: "description",
        content:
          "Kumpulan proyek website oleh Jaya Putra Syaipul: e-commerce UMKM dan landing page bisnis kuliner.",
      },
      { property: "og:title", content: "Portfolio — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "Kumpulan proyek website oleh Jaya Putra Syaipul: e-commerce UMKM dan landing page bisnis kuliner.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    id: 1,
    title: "Contoh Web E-Commerce UMKM",
    tags: ["E-Commerce", "UMKM", "Mobile-first"],
    description:
      "Website e-commerce untuk UMKM dengan katalog produk, filter kategori (Fashion, Food, Craft, Elektronik), keranjang belanja, pencarian produk, serta panel kelola toko. Mobile-first, ringan, dan siap berjualan tanpa potongan marketplace.",
    image: ecommerceUrl,
    demoUrl: "https://e-commerce-demo-nine-xi.vercel.app/",
  },
  {
    id: 2,
    title: "Landing Page + Profil Usaha + Katalog Pesanan",
    tags: ["Landing", "Katalog", "Kuliner"],
    description:
      "Website untuk usaha bakery/kuliner: landing page elegan, halaman profil & cerita usaha, katalog pesanan, info lokasi, serta keranjang pesanan. Cocok untuk UMKM kuliner, restoran, atau brand lokal.",
    image: bakeryUrl,
    demoUrl: "https://bu-siti-bakery.vercel.app/",
  },
];

function PortfolioPage() {
  return (
    <SiteShell>
      <SectionTitle kicker="Portfolio" title="Proyek Pilihan" />

      <div className="space-y-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="grid items-center gap-6 rounded-3xl border border-border/70 bg-card/60 p-5 backdrop-blur-xl shadow-xl shadow-primary/10 md:grid-cols-2 md:p-8"
          >
            <div className="relative order-1 overflow-hidden rounded-2xl border border-primary/30 md:order-2">
              <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
              <img
                src={p.image}
                alt={`Mockup ${p.title}`}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <div className="order-2 space-y-4 md:order-1">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-black tracking-tight">{p.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{p.description}</p>
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:-translate-y-0.5"
              >
                Lihat Demo <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
