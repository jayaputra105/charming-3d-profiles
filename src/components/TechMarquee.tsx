import {
  Atom,
  Code2,
  Database,
  GitBranch,
  Layers,
  Palette,
  Server,
  Type,
} from "lucide-react";

const techs = [
  { label: "React", icon: Atom },
  { label: "Next.js", icon: Layers },
  { label: "TypeScript", icon: Type },
  { label: "Node.js", icon: Server },
  { label: "NeonDB", icon: Database },
  { label: "MySQL", icon: Database },
  { label: "Tailwind", icon: Palette },
  { label: "Git", icon: GitBranch },
  { label: "React", icon: Atom },
  { label: "Next.js", icon: Layers },
  { label: "TypeScript", icon: Type },
  { label: "Node.js", icon: Server },
];

export function TechMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] py-4 sm:rounded-3xl sm:py-5 ${className}`}
    >
      <div className="flex w-max animate-marquee items-center gap-6 group-hover:[animation-play-state:paused] sm:gap-8">
        {techs.map((t, i) => {
          const Icon = t.icon;
          return (
            <div
              key={`${t.label}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:px-4 sm:py-2 sm:text-sm"
            >
              <Icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              {t.label}
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
