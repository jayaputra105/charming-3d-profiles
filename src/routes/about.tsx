import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Heart,
  Code2,
  Wrench,
  Languages,
  Sparkles,
  Mail,
  Instagram,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

const profileUrl = "/img/profile-square.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jaya Putra Syaipul" },
      {
        name: "description",
        content:
          "Tentang Jaya Putra Syaipul: pendidikan, soft skill, technical skill, skill set, interest, dan bahasa.",
      },
      { property: "og:title", content: "About — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content:
          "Tentang Jaya Putra Syaipul: pendidikan, soft skill, technical skill, skill set, interest, dan bahasa.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      {/* === Hero === */}
      <section className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div className="surface-card relative rounded-[2rem] p-6 sm:p-8">
          <div className="surface-primary inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold">
            <Sparkles className="h-4 w-4" /> About me
          </div>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Hi, my name is{" "}
            <span className="font-semibold text-foreground">Jaya Putra</span>. I
            am a Fullstack Web Developer based in Indonesia, blending experience
            across web, mobile, and design. My mission: shipping fast, secure,
            and human-friendly digital products that help businesses grow.
          </p>

          {/* Contact strip */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ContactPill
              icon={<Mail className="h-4 w-4" />}
              label="zeyyjay@gmail.com"
              href="mailto:zeyyjay@gmail.com"
            />
            <ContactPill
              icon={<Instagram className="h-4 w-4" />}
              label="@jayaputra.dev"
              href="https://instagram.com/jayaputra.dev"
            />
          </div>
        </div>

        {/* Photo frame */}
        <div className="surface-card mx-auto rounded-[2rem] p-3 md:mx-0">
          <img
            src={profileUrl}
            alt="Jaya Putra Syaipul"
            className="h-44 w-36 rounded-[1.5rem] object-cover sm:h-56 sm:w-44"
          />
        </div>
      </section>

      {/* === Info grid 2×3 (3 baris × 2 kolom) === */}
      <section className="mt-8 grid gap-5 sm:grid-cols-2">
        <InfoCard icon={<GraduationCap className="h-4 w-4" />} title="Education">
          <Row left="2020 — 2024" right="Sarjana Komputer" />
          <Row left="Universitas" right="Teknik Informatika" />
        </InfoCard>

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

        <InfoCard icon={<Code2 className="h-4 w-4" />} title="Technical skill">
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "MySQL",
              "Figma",
              "After Effects",
            ].map((t) => (
              <span
                key={t}
                className="chip rounded-lg px-3 py-1.5 text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </InfoCard>

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

        <InfoCard icon={<Sparkles className="h-4 w-4" />} title="Interest">
          <TwoCol items={["UI/UX", "Animation", "Open Source", "Photography"]} />
        </InfoCard>

        <InfoCard icon={<Languages className="h-4 w-4" />} title="Language">
          <LangBar label="Bahasa Indonesia" level="Aktif" pct={95} />
          <LangBar label="English" level="Intermediate" pct={65} />
        </InfoCard>
      </section>
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
    <div className="surface-card rounded-[1.5rem] p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="surface-primary grid h-8 w-8 place-items-center rounded-xl">
          {icon}
        </span>
        <h2 className="text-base font-bold tracking-tight">{title}</h2>
      </div>
      <div className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

function Row({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-foreground/90">{left}</span>
      <span className="truncate">{right}</span>
    </div>
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
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background:
              "linear-gradient(90deg, var(--primary-glow), var(--primary))",
          }}
        />
      </div>
    </div>
  );
}
