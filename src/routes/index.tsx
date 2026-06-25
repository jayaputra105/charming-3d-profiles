import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import { SiteShell, GlassCard } from "@/components/SiteShell";

const profileUrl = "/img/profile-square.png";

const WHATSAPP_NUMBER = "6282199870047";
const EMAIL_ADDRESS = "zeyyjay@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaya Putra Syaipul — Fullstack Web Developer" },
      {
        name: "description",
        content:
          "Portofolio Jaya Putra Syaipul, Fullstack Web Developer yang membangun website cepat, stabil, dan mudah digunakan.",
      },
      { property: "og:title", content: "Jaya Putra Syaipul — Fullstack Web Developer" },
      {
        property: "og:description",
        content:
          "Portofolio Jaya Putra Syaipul, Fullstack Web Developer yang membangun website cepat, stabil, dan mudah digunakan.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <section className="grid items-center gap-10 md:grid-cols-[1.2fr_auto]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary ring-1 ring-primary/40">
            <Sparkles className="h-3.5 w-3.5" /> Fullstack Web Developer
          </span>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Halo, saya{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Jaya Putra
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Saya membangun website yang cepat, stabil, aman, dan mudah digunakan —
            disesuaikan dengan kebutuhan profil, layanan, maupun sistem informasi
            bisnis Anda.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:-translate-y-0.5"
            >
              Lihat Portofolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
            >
              Hubungi Saya
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" /> 0821-9987-0047
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" /> {EMAIL_ADDRESS}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/60 to-primary/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-primary/40 bg-card/60 p-2 shadow-2xl shadow-primary/30 backdrop-blur-xl">
              <img
                src={profileUrl}
                alt="Foto profil Jaya Putra Syaipul"
                width={260}
                height={260}
                className="h-56 w-56 rounded-[1.5rem] object-cover sm:h-64 sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-5 sm:grid-cols-3">
        {[
          { k: "Fokus", v: "Fullstack Web" },
          { k: "Pengalaman", v: "Web Cepat & Aman" },
          { k: "Garansi", v: "3 Bulan Bebas Bug" },
        ].map((s) => (
          <GlassCard key={s.k}>
            <p className="text-xs uppercase tracking-widest text-primary">{s.k}</p>
            <p className="mt-2 text-xl font-bold">{s.v}</p>
          </GlassCard>
        ))}
      </section>
    </SiteShell>
  );
}
