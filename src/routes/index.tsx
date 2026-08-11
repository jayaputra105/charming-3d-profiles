import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, Sparkles, MessageSquare, PencilRuler, Code, Rocket } from "lucide-react";
import { SiteShell, GlassCard } from "@/components/SiteShell";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { AboutSection } from "@/sections/about";
import { PortfolioSection } from "@/sections/portfolio";
import { PricingSection } from "@/sections/pricing";
import { ContactSection } from "@/sections/contact";
import { TermsSection } from "@/sections/tc";
import { TechMarquee } from "@/components/TechMarquee";
import { LilaLogo } from "@/sections/portfolio";


const profileUrl = "/img/profile-square.png";

const WHATSAPP_NUMBER = "6282199870047";
const EMAIL_ADDRESS = "jayaputrasyaipul7@gmail.com";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaya Putra Syaipul — Jasa Pembuatan Website Fullstack" },
      {
        name: "description",
        content:
          "Portofolio Jaya Putra Syaipul, Fullstack Web Developer. Jasa pembuatan website portofolio, landing page katalog belanja UMKM, & website custom. Sudah termasuk domain, hosting 1 tahun & SEO dasar.",
      },
      {
        name: "keywords",
        content:
          "jasa pembuatan website, web developer indonesia, jasa website UMKM, landing page katalog, portofolio developer, fullstack developer, Jaya Putra Syaipul",
      },
      { property: "og:title", content: "Jaya Putra Syaipul — Jasa Pembuatan Website Fullstack" },
      {
        property: "og:description",
        content:
          "Jasa pembuatan website: portofolio, landing page katalog UMKM, & website custom. Termasuk domain, hosting 1 tahun & SEO dasar.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/img/profile-square.png" },
      { name: "twitter:image", content: "/img/profile-square.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Jaya Putra Syaipul — Jasa Pembuatan Website",
          image: "/img/profile-square.png",
          description:
            "Jasa pembuatan website profesional: portofolio, landing page katalog UMKM, & website custom.",
          areaServed: "ID",
          priceRange: "Rp 400.000 - Rp 5.000.000+",
          telephone: "+6282199870047",
          email: "jayaputrasyaipul7@gmail.com",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <Reveal className="mt-8 sm:mt-12">
        <TechMarquee />
      </Reveal>

      <RevealStagger className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5" stagger={0.1}>
        {[
          { k: "Fokus", v: "Fullstack Web" },
          { k: "Pengalaman", v: "Web Cepat & Aman" },
          { k: "Garansi", v: "3 Bulan Bebas Bug" },
        ].map((s) => (
          <RevealItem key={s.k}>
            <GlassCard className="h-full p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <p className="text-[10px] uppercase tracking-widest text-primary sm:text-xs">{s.k}</p>
              <p className="mt-2 text-lg font-bold sm:text-xl">{s.v}</p>
            </GlassCard>
          </RevealItem>
        ))}
      </RevealStagger>

      <FeaturedProject />
      <HowIWork />

      <div className="mt-16 sm:mt-24">
        <AboutSection />
      </div>
      <div className="mt-16 sm:mt-24">
        <PortfolioSection />
      </div>
      <div className="mt-16 sm:mt-24">
        <PricingSection />
      </div>
      <div className="mt-16 sm:mt-24">
        <ContactSection />
      </div>
      <div className="mt-16 sm:mt-24">
        <TermsSection />
      </div>
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="panel-hero grid items-center gap-8 rounded-[28px] px-5 py-8 sm:rounded-[40px] sm:px-10 sm:py-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10 md:px-14 md:py-16">
      {/* ID-card style portrait */}
      <Reveal direction="right" className="flex justify-center md:justify-start">
        <div className="relative w-[190px] sm:w-[230px] md:w-[260px]">
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, var(--primary-bright) 0%, transparent 70%)",
              opacity: 0.22,
              animation: "pulse-glow 9s ease-in-out infinite",
            }}
          />
          {/* lanyard */}
          <div className="mx-auto h-10 w-6 rounded-b-md bg-gradient-to-b from-white/25 to-white/5 sm:h-14" />
          <div
            className="rounded-[22px] p-3 pb-8 shadow-2xl"
            style={{
              background: "var(--gradient-light)",
              transformOrigin: "top center",
              animation: "swing 7s ease-in-out infinite",
              willChange: "transform",
            }}
          >
            <img
              src={profileUrl}
              alt="Foto profil Jaya Putra Syaipul"
              loading="eager"
              decoding="async"
              className="block aspect-[4/5] w-full rounded-[14px] object-cover object-center"
            />
            <p
              className="mt-3 text-center text-lg font-semibold text-neutral-800 sm:text-xl"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              Fullstack Dev
            </p>
          </div>
        </div>
      </Reveal>

      <div className="min-w-0">
        <Reveal>
          <p
            className="text-muted-foreground"
            style={{ fontSize: "clamp(1.1rem, 3vw, 1.7rem)" }}
          >
            Halo! Saya <span className="font-bold text-foreground">Jaya Putra</span>
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            className="mt-1 font-extrabold leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 8.5vw, 4.75rem)" }}
          >
            Web Developer<span className="text-primary">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="mt-4 max-w-2xl leading-relaxed text-muted-foreground"
            style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)" }}
          >
            Membangun website yang cepat, modern, SEO friendly, dan responsif untuk
            UMKM, bisnis, serta personal branding — dirancang agar bisnis Anda tampil
            lebih dipercaya dan mendatangkan pelanggan baru.
            <span
              className="ml-0.5 inline-block"
              style={{ animation: "caret 1.1s steps(1) infinite" }}
            >
              |
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
            <a
              href="#portfolio"
              className="btn-light btn-shine group inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold sm:text-base"
            >
              Portofolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground sm:text-base"
            >
              Hubungi Saya
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground sm:gap-5 sm:text-sm">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" /> 0821-9987-0047
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-2 break-all transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" /> {EMAIL_ADDRESS}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function FeaturedProject() {
  return (
    <Reveal className="mt-12 sm:mt-20">
      <div className="surface-card grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-8 md:grid-cols-2 md:p-10">
        <div className="relative order-1 flex min-h-[220px] items-center justify-center overflow-hidden rounded-xl border border-primary/30 sm:min-h-[280px] md:order-2">
          <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-amber-400/25 via-red-700/10 to-transparent blur-2xl" />
          <LilaLogo />
        </div>
        <div className="order-2 space-y-4 md:order-1 md:space-y-5">
          <span className="chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:text-xs">
            <Sparkles className="h-3 w-3" /> Proyek Unggulan
          </span>
          <h2 className="font-black tracking-tight" style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)" }}>
            Lila Catering
          </h2>
          <p className="leading-relaxed text-muted-foreground" style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
            Website katering pernikahan & prasmanan di Balikpapan: tagline brand,
            katalog menu lengkap, keunggulan usaha, dan tombol konsultasi langsung
            ke WhatsApp.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="#portfolio"
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Lihat Semua Proyek
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://lilacatering.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-foreground sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Kunjungi Demo
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

const steps = [
  {
    icon: MessageSquare,
    title: "Konsultasi",
    desc: "Diskusi kebutuhan, target audience, dan fitur yang diinginkan.",
  },
  {
    icon: PencilRuler,
    title: "Desain",
    desc: "Konsep visual, struktur halaman, dan pengalaman pengguna.",
  },
  {
    icon: Code,
    title: "Develop",
    desc: "Coding, integrasi fitur, optimasi performa & SEO dasar.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Deploy ke domain Anda, testing, dan serah terima akses.",
  },
];

function HowIWork() {
  return (
    <Reveal className="mt-12 sm:mt-20">
      <div className="text-center">
        <span className="chip inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:text-xs">
          Proses
        </span>
        <h2 className="mt-3 font-black tracking-tight" style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)" }}>
          Cara Kerja Saya
        </h2>
      </div>
      <RevealStagger className="relative mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <RevealItem key={s.title} className="relative">
              <GlassCard className="relative h-full p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6">
                <span className="surface-primary mb-4 grid h-10 w-10 place-items-center rounded-xl text-sm font-bold sm:h-11 sm:w-11">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold sm:text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="absolute right-4 top-4 text-2xl font-black text-primary/20 sm:text-3xl">
                  0{i + 1}
                </span>
              </GlassCard>
            </RevealItem>
          );
        })}
      </RevealStagger>
    </Reveal>
  );
}

