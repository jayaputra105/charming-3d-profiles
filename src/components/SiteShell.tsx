import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useCallback, useRef, type ReactNode } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

import { AmbientBackground } from "./AmbientBackground";
import { Preloader } from "./Preloader";
import { useIsMobile } from "@/hooks/use-mobile";

const LOGO_URL = "/img/jps-logo.png";
const INSTAGRAM_URL = "https://www.instagram.com/jaya_putra105";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portofolio" },
  { to: "/pricing", label: "Harga" },
  { to: "/contact", label: "Order" },
] as const;

const navPaths = nav.map((n) => n.to);

function getActiveIndex(pathname: string) {
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

  const dirRef = useRef(activeIdx);
  const direction = activeIdx >= dirRef.current ? 1 : -1;
  dirRef.current = activeIdx;

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <Preloader />
      <AmbientBackground />

      {/* Reference-style top bar: full width, dark, subtle bottom rounding */}
      <header className="sticky top-0 z-40">
        <div
          className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-8 sm:py-3.5"
          style={{
            background: "oklch(0.16 0 0 / 0.86)",
            backdropFilter: "blur(16px) saturate(120%)",
            borderBottom: "1px solid oklch(1 0 0 / 0.07)",
            boxShadow: "0 18px 40px -32px oklch(0 0 0 / 1)",
          }}
        >
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2">
            <img
              src={LOGO_URL}
              alt="Logo Jaya Putra Syaipul"
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
              width={36}
              height={36}
            />
            <span className="hidden text-sm font-extrabold tracking-tight sm:inline sm:text-base">
              Jaya Putra
            </span>
          </Link>

          <nav className="relative flex items-center gap-0.5 text-[11px] font-medium sm:gap-2 sm:text-[15px]">
            {nav.map((item) => {
              const isActive =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative rounded-full px-2 py-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground sm:px-4"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ background: "oklch(1 0 0 / 0.1)" }}
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className={isActive ? "relative font-semibold text-foreground" : "relative"}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-light hidden shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold lg:inline-flex"
          >
            @jaya_putra105
          </a>
        </div>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, x: isMobile ? direction * 24 : 0, y: isMobile ? 0 : 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: isMobile ? -direction * 24 : 0, y: isMobile ? 0 : -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onPanStart={isMobile ? handlePanStart : undefined}
          onPan={isMobile ? handlePan : undefined}
          onPanEnd={isMobile ? handlePanEnd : undefined}
          style={{ touchAction: "pan-y", willChange: "transform, opacity" }}
          className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-8 sm:py-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {isMobile && (
        <div
          aria-hidden
          className="pointer-events-none fixed bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full px-3 py-1"
          style={{
            background: "oklch(0.16 0 0 / 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid oklch(1 0 0 / 0.06)",
          }}
        >
          {nav.map((_, i) => (
            <span
              key={i}
              className="mx-0.5 inline-block h-1.5 rounded-full transition-all"
              style={{
                background: i === activeIdx ? "oklch(1 0 0)" : "oklch(1 0 0 / 0.25)",
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

/** Reference-style section heading: bold, with the last word inside a white marker box. */
export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  const words = title.trim().split(" ");
  const last = words.length > 1 ? words.pop()! : "";
  const head = words.join(" ");

  return (
    <div className="mb-8 sm:mb-10">
      {kicker && (
        <span className="chip inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:text-xs">
          {kicker}
        </span>
      )}
      <h1
        className="mt-3 font-extrabold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(1.85rem, 6vw, 3.5rem)" }}
      >
        {head}
        {last && <> <span className="mark-box">{last}</span></>}
      </h1>
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
