import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Heart,
  Code2,
  Wrench,
  Languages,
  CheckCircle2,
} from "lucide-react";
import { SiteShell, SectionTitle, GlassCard } from "@/components/SiteShell";

const profileUrl = "/img/profile-square.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jaya Putra Syaipul" },
      {
        name: "description",
        content:
          "Tentang Jaya Putra Syaipul: pendidikan, soft skill, technical skill, skill set, dan bahasa.",
      },
      { property: "og:title", content: "About — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "Tentang Jaya Putra Syaipul: pendidikan, soft skill, technical skill, skill set, dan bahasa.",
      },
    ],
  }),
  component: AboutPage,
});

const softSkills = [
  "Pemahaman kebutuhan",
  "Komunikasi jelas",
  "Tepat waktu",
  "Penyelesaian masalah",
  "Panduan penggunaan",
  "Tanggung jawab",
];

const technical = [
  { group: "Pengembangan Web", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "MySQL", "MongoDB", "Vercel", "Biznet Hosting", "SEO & Keamanan Dasar"] },
  { group: "Desain", items: ["Figma", "Adobe After Effects"] },
];

const skillSet = [
  "Website Profil",
  "Katalog & Pemesanan",
  "Tampilan Responsif",
  "Domain & Hosting",
  "Perawatan Sistem",
  "Dukungan Teknis",
];

function AboutPage() {
  return (
    <SiteShell>
      <SectionTitle kicker="About me" title="Tentang Saya" />

      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
        <div className="relative mx-auto md:mx-0">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/50 to-primary/10 blur-2xl" />
          <img
            src={profileUrl}
            alt="Jaya Putra Syaipul"
            className="h-40 w-40 rounded-3xl border border-primary/40 object-cover shadow-xl shadow-primary/30 sm:h-48 sm:w-48"
          />
        </div>
        <GlassCard>
          <p className="leading-relaxed text-muted-foreground">
            Halo! Saya <strong className="text-foreground">Jaya Putra</strong>,
            seorang Fullstack Web Developer yang berfokus membangun situs web yang
            cepat, stabil, aman, dan mudah digunakan. Saya mengembangkan solusi
            digital yang disesuaikan dengan kebutuhan, baik untuk keperluan profil,
            layanan, maupun sistem informasi, agar bisa berjalan optimal dan
            membantu mencapai tujuan yang diinginkan.
          </p>
        </GlassCard>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <GlassCard>
          <Header icon={<GraduationCap className="h-5 w-5" />} title="Education" />
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              S.Kom — Sarjana Komputer
            </li>
          </ul>
        </GlassCard>

        <GlassCard>
          <Header icon={<Heart className="h-5 w-5" />} title="Soft Skill" />
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {softSkills.map((s) => (
              <li key={s} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {s}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="md:col-span-2">
          <Header icon={<Code2 className="h-5 w-5" />} title="Technical Skill" />
          <div className="mt-4 space-y-5">
            {technical.map((t) => (
              <div key={t.group}>
                <p className="text-sm font-semibold text-foreground">{t.group}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <Header icon={<Wrench className="h-5 w-5" />} title="Skill Set" />
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {skillSet.map((s) => (
              <li key={s} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {s}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <Header icon={<Languages className="h-5 w-5" />} title="Language" />
          <ul className="mt-4 space-y-3">
            <LangBar label="Bahasa Indonesia" level="Aktif" pct={95} />
            <LangBar label="Bahasa Inggris" level="Dasar" pct={45} />
          </ul>
        </GlassCard>
      </div>
    </SiteShell>
  );
}

function Header({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-md shadow-primary/40">
        {icon}
      </span>
      <h2 className="text-lg font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function LangBar({ label, level, pct }: { label: string; level: string; pct: number }) {
  return (
    <li>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{level}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
          style={{ width: `${pct}%` }}
        />
      </div>
    </li>
  );
}
