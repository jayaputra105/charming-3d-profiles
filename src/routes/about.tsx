import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Code2,
  Wrench,
  Languages,
  Sparkles,
  Mail,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/SiteShell";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { TechMarquee } from "@/components/TechMarquee";


const profileUrl = "/img/profile-square.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Saya — Jaya Putra Syaipul, Fullstack Web Developer" },
      {
        name: "description",
        content:
          "Kenali Jaya Putra Syaipul: Fullstack Web Developer dengan keahlian React, TypeScript, Node.js, NeonDB, dan SEO. Membangun website modern untuk UMKM & personal branding.",
      },
      {
        name: "keywords",
        content:
          "tentang jaya putra syaipul, profil web developer, fullstack developer indonesia, skill web developer, react typescript developer",
      },
      { property: "og:title", content: "Tentang Saya — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "Fullstack Web Developer: soft skill, technical skill, dan tools yang saya kuasai untuk membangun website Anda.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: "/img/profile-square.png" },
      { name: "twitter:image", content: "/img/profile-square.png" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Tentang Jaya Putra Syaipul",
          mainEntity: {
            "@type": "Person",
            name: "Jaya Putra Syaipul",
            jobTitle: "Fullstack Web Developer",
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
} as const;

function AboutPage() {
  return (
    <SiteShell>
      {/* === Hero (foto di dalam border About me) === */}
      <Reveal>
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="surface-card relative rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-8"
        >
          <div className="grid grid-cols-[1fr_auto] items-start gap-3 sm:gap-6">
            <div className="min-w-0">
              <div className="surface-primary inline-flex items-center gap-2 rounded-2xl px-2.5 py-1 text-[11px] font-bold sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> About me
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground sm:mt-6" style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>
                Halo, nama saya{" "}
                <span className="font-semibold text-foreground">Jaya Putra</span>.
                Saya adalah Fullstack Web Developer yang berbasis di Indonesia,
                dengan pengalaman di bidang web, mobile, dan desain. Misi saya:
                menghadirkan produk digital yang cepat, aman, dan ramah pengguna
                untuk membantu bisnis berkembang.
              </p>
            </div>

            {/* Photo with floating purple 3D backdrop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ y: -4, rotate: -1 }}
              className="relative shrink-0"
            >
              {/* Purple 3D backdrop — offset, NOT merged with photo */}
              <div
                aria-hidden
                className="absolute -bottom-2 -right-2 h-full w-full rounded-[1.25rem] sm:-bottom-3 sm:-right-3 sm:rounded-[1.5rem]"
                style={{
                  background:
                    "linear-gradient(140deg, var(--primary-bright), var(--primary-deep))",
                  boxShadow:
                    "0 18px 40px -12px color-mix(in oklab, var(--primary-bright) 60%, transparent)",
                }}
              />
              <img
                src={profileUrl}
                alt="Jaya Putra Syaipul"
                className="relative rounded-[1rem] object-cover shadow-xl ring-1 ring-white/10 sm:rounded-[1.5rem]"
                style={{ width: "clamp(7rem, 28vw, 14rem)", height: "clamp(9rem, 36vw, 18rem)" }}
              />
            </motion.div>
          </div>

          {/* Contact strip */}
          <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
            <ContactPill
              icon={<Mail className="h-4 w-4" />}
              label="jayaputrasyaipul7@gmail.com"
              href="mailto:jayaputrasyaipul7@gmail.com"
            />
            <ContactPill
              icon={<Instagram className="h-4 w-4" />}
              label="@jaya_putra105"
              href="https://www.instagram.com/jaya_putra105?igsh=ZWFmczBkejM3NHY1"
            />
          </div>
        </motion.section>
      </Reveal>

      <Reveal className="mt-6 sm:mt-8">
        <TechMarquee />
      </Reveal>

      {/* === Info grid === */}
      <RevealStagger
        className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5"
        stagger={0.08}
      >
        <RevealItem>
          <InfoCard icon={<Heart className="h-4 w-4" />} title="Soft skill">
            <TwoCol
              items={[
                "Komunikasi",
                "Problem solving",
                "Tepat waktu",
                "Tanggung jawab",
                "Kerja tim",
                "Adaptif",
              ]}
            />
          </InfoCard>
        </RevealItem>

        <RevealItem>
          <InfoCard icon={<Code2 className="h-4 w-4" />} title="Technical skill">
            <p className="text-sm text-muted-foreground">
              Stack utama yang saya gunakan untuk membangun website modern dan
              scalable. Detail teknologi bisa dilihat di marquee di atas.
            </p>
          </InfoCard>
        </RevealItem>

        <RevealItem>
          <InfoCard icon={<Wrench className="h-4 w-4" />} title="Skill set">
            <TwoCol
              items={[
                "Web Profil",
                "Web App",
                "Landing Page",
                "Katalog & Order",
                "Dashboard",
                "Maintenance",
              ]}
            />
          </InfoCard>
        </RevealItem>

        <RevealItem>
          <InfoCard icon={<Languages className="h-4 w-4" />} title="Language">
            <LangBar label="Bahasa Indonesia" level="Aktif" pct={95} />
            <LangBar label="English" level="Dasar" pct={35} />
          </InfoCard>
        </RevealItem>
      </RevealStagger>
    </SiteShell>
  );
}


/* === Sub-components === */

function ContactPill({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="chip flex min-w-0 items-center gap-2 truncate rounded-xl px-3 py-2 text-sm transition-colors hover:text-foreground"
    >
      <span className="surface-primary grid h-7 w-7 shrink-0 place-items-center rounded-lg">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </a>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="surface-card rounded-[1.25rem] p-4 sm:rounded-[1.5rem] sm:p-6"
    >
      <div className="flex items-center gap-3">
        <span className="surface-primary grid h-8 w-8 place-items-center rounded-xl">
          {icon}
        </span>
        <h2 className="text-base font-bold tracking-tight">{title}</h2>
      </div>
      <div className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {children}
      </div>
    </motion.div>
  );
}

function TwoCol({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
      {items.map((s) => (
        <li key={s} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-glow)]" />
          <span className="truncate">{s}</span>
        </li>
      ))}
    </ul>
  );
}

function LangBar({
  label,
  level,
  pct,
}: {
  label: string;
  level: string;
  pct: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-foreground">{label}</span>
        <span>{level}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(90deg, var(--primary-glow), var(--primary))",
          }}
        />
      </div>
    </div>
  );
}
