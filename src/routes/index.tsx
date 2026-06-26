import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import { SiteShell, GlassCard } from "@/components/SiteShell";

const profileUrl = "/img/profile-square.png";

const WHATSAPP_NUMBER = "6282199870047";
const EMAIL_ADDRESS = "jayaputrasyaipul7@gmail.com";


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
      <section className="space-y-6">
        <span className="chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Fullstack Web Developer
        </span>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Round portrait with purple 3D glow */}
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full blur-xl"
              style={{
                background:
                  "radial-gradient(circle, var(--primary-bright) 0%, transparent 70%)",
                opacity: 0.7,
              }}
            />
            <div
              className="rounded-full p-[3px]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <img
                src={profileUrl}
                alt="Foto profil Jaya Putra Syaipul"
                className="block h-20 w-20 rounded-full object-cover object-top ring-2 ring-background sm:h-28 sm:w-28 md:h-32 md:w-32"
              />
            </div>
          </div>

          <h1 className="text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Halo, saya{" "}
            <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              Jaya Putra
            </span>
          </h1>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Saya membangun website yang cepat, stabil, aman, dan mudah digunakan —
          disesuaikan dengan kebutuhan profil, layanan, maupun sistem informasi
          bisnis Anda.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/portfolio"
            className="btn-primary group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Lihat Portofolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground"
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
            className="inline-flex items-center gap-2 break-all hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-primary" /> {EMAIL_ADDRESS}
          </a>
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
