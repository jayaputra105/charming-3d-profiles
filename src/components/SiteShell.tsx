import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useCallback, useRef, type ReactNode } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

import { AmbientBackground } from "./AmbientBackground";
import { useIsMobile } from "@/hooks/use-mobile";

const LOGO_URL = "/img/jps-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Harga" },
  { to: "/contact", label: "Contact" },
] as const;

const navPaths = nav.map((n) => n.to);

function getActiveIndex(pathname: string) {
  // Find the most specific matching nav route
  if (pathname === "/") return 0;
  const idx = navPaths.findIndex((p) => p !== "/" && pathname.startsWith(p));
  return idx === -1 ? 0 : idx;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const directionRef = useRef<"x" | "y" | null>(null);

  const activeIdx = getActiveIndex(pathname);

  const handlePanStart = useCallback((_: unknown, info: PanInfo) => {
    directionRef.current = null;
    // Determine direction on first meaningful movement
    if (Math.abs(info.offset.x) > Math.abs(info.offset.y)) {
      directionRef.current = "x";
    } else if (Math.abs(info.offset.y) > 0) {
      directionRef.current = "y";
    }
  }, []);

  const handlePan = useCallback((_: unknown, info: PanInfo) => {
    if (directionRef.current) return;
    if (Math.abs(info.offset.x) > 10 && Math.abs(info.offset.x) > Math.abs(info.offset.y) * 1.5) {
      directionRef.current = "x";
    } else if (Math.abs(info.offset.y) > 10) {
      directionRef.current = "y";
    }
  }, []);

  const handlePanEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      if (!isMobile) return;
      if (directionRef.current !== "x") return;
      const { offset, velocity } = info;
      // Require decisive horizontal gesture
      if (Math.abs(offset.x) < 70 && Math.abs(velocity.x) < 400) return;
      if (Math.abs(offset.y) > Math.abs(offset.x)) return;

      if (offset.x < 0 && activeIdx < navPaths.length - 1) {
        navigate({ to: navPaths[activeIdx + 1] });
      } else if (offset.x > 0 && activeIdx > 0) {
        navigate({ to: navPaths[activeIdx - 1] });
      }
    },
    [isMobile, activeIdx, navigate],
  );

  // Direction for enter/exit animation
  const dirRef = useRef(activeIdx);
  const direction = activeIdx >= dirRef.current ? 1 : -1;
  dirRef.current = activeIdx;

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <AmbientBackground />

      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <div
          className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full px-2 py-1.5 sm:px-4 sm:py-2"
          style={{
            background: "oklch(0.18 0.04 282 / 0.55)",
            backdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid oklch(1 0 0 / 0.08)",
            boxShadow:
              "0 10px 30px -15px oklch(0.05 0.05 280 / 0.6), inset 1px 1px 0 oklch(1 0 0 / 0.06)",
          }}
        >
          <Link to="/" className="flex min-w-0 items-center gap-2 pl-1 font-semibold tracking-tight">
            <span className="relative grid h-8 w-8 shrink-0 place-items-center sm:h-9 sm:w-9">
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full blur-md opacity-70"
                style={{ background: "radial-gradient(circle, var(--primary-bright) 0%, transparent 70%)" }}
              />
              <img
                src={LOGO_URL}
                alt="Logo Jaya Putra Syaipul"
                className="h-full w-full rounded-full object-cover"
                width={36}
                height={36}
              />
            </span>
            <span className="hidden truncate text-sm sm:inline sm:text-base">Jaya Putra</span>
          </Link>
          <nav className="relative flex items-center gap-0.5 text-[11px] sm:gap-1 sm:text-sm">
            {nav.map((item) => {
              const isActive =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative rounded-full px-2.5 py-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground sm:px-3.5"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        background: "var(--gradient-primary)",
                        boxShadow: "0 8px 20px -8px oklch(0.62 0.22 290 / 0.6)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={
                      isActive
                        ? "relative font-semibold text-primary-foreground"
                        : "relative"
                    }
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.main
          key={pathname}
          custom={direction}
          initial={(d: number) => ({ opacity: 0, x: isMobile ? d * 24 : 0, y: isMobile ? 0 : 8, scale: isMobile ? 0.985 : 1 })}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={(d: number) => ({ opacity: 0, x: isMobile ? -d * 24 : 0, y: isMobile ? 0 : -6, scale: isMobile ? 0.985 : 1 })}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onPanStart={isMobile ? handlePanStart : undefined}
          onPan={isMobile ? handlePan : undefined}
          onPanEnd={isMobile ? handlePanEnd : undefined}
          style={{ touchAction: "pan-y" }}
          className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-14"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {isMobile && (
        <div
          aria-hidden
          className="pointer-events-none fixed bottom-20 left-1/2 z-30 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-medium text-muted-foreground/70"
          style={{
            background: "oklch(0.18 0.04 282 / 0.5)",
            backdropFilter: "blur(10px)",
            border: "1px solid oklch(1 0 0 / 0.06)",
          }}
        >
          {nav.map((_, i) => (
            <span
              key={i}
              className="mx-0.5 inline-block h-1.5 w-1.5 rounded-full transition-all"
              style={{
                background: i === activeIdx ? "var(--primary-bright)" : "oklch(1 0 0 / 0.25)",
                width: i === activeIdx ? "1rem" : "0.375rem",
              }}
            />
          ))}
        </div>
      )}

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
      <h1 className="mt-3 font-black tracking-tight" style={{ fontSize: "clamp(1.75rem, 5.5vw, 3.25rem)" }}>{title}</h1>
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
