import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import logoAsset from "@/assets/logo.png.asset.json";

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
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="surface-card mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full px-2 py-1.5 sm:px-5 sm:py-2">
          <Link to="/" className="flex min-w-0 items-center gap-2 pl-1 font-semibold tracking-tight">
            <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white sm:h-9 sm:w-9">
              <img src={logoAsset.url} alt="JP Logo" className="h-full w-full object-contain p-0.5" />
            </span>
            <span className="truncate text-xs sm:text-base">Jaya Putra</span>
          </Link>
          <nav className="flex items-center gap-0.5 text-[11px] sm:gap-1 sm:text-sm">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:px-3"
                activeProps={{
                  className:
                    "surface-primary rounded-full px-2 py-1.5 font-medium sm:px-3",
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
          dragElastic={0.15}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-14 touch-pan-y"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="mt-12 sm:mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8 sm:py-8 sm:text-sm">
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
    <div className="mb-8 sm:mb-10">
      {kicker && (
        <span className="chip inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:text-xs">
          {kicker}
        </span>
      )}
      <h1 className="mt-3 font-black tracking-tight sm:mt-4" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>{title}</h1>
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
    <div className={`surface-card rounded-2xl p-5 sm:rounded-3xl sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
