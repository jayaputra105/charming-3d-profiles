import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

const order = nav.map((n) => n.to) as readonly string[];

export function SiteShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const currentIdx = (() => {
    const i = order.indexOf(pathname);
    return i === -1 ? 0 : i;
  })();

  const goTo = (delta: number) => {
    const next = currentIdx + delta;
    if (next < 0 || next >= order.length) return;
    navigate({ to: order[next] as any });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold || info.velocity.x < -500) goTo(1);
    else if (info.offset.x > threshold || info.velocity.x > 500) goTo(-1);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
        <div className="surface-card mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 sm:px-5">
          <Link to="/" className="flex items-center gap-2 pl-1 font-semibold tracking-tight">
            <span className="surface-primary grid h-9 w-9 place-items-center rounded-full">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm sm:text-base">Jaya Putra</span>
          </Link>
          <nav className="flex items-center gap-1 text-xs sm:text-sm">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{
                  className:
                    "surface-primary rounded-full px-3 py-1.5 font-medium",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14 touch-pan-y"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} Jaya Putra Syaipul.</p>
          <Link to="/tc" className="hover:text-foreground hover:underline">
            Syarat &amp; Ketentuan
          </Link>
        </div>
      </footer>
    </div>
  );
}

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-10">
      {kicker && (
        <span className="chip inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          {kicker}
        </span>
      )}
      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`surface-card rounded-3xl p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
