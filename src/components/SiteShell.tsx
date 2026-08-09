import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

import { AmbientBackground } from "./AmbientBackground";
import { Preloader } from "./Preloader";

const LOGO_URL = "/img/jps-logo.png";
const INSTAGRAM_URL = "https://www.instagram.com/jaya_putra105";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portofolio" },
  { id: "pricing", label: "Harga" },
  { id: "contact", label: "Order" },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

function useActiveSection() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = [...nav.map((n) => n.id), "tc"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const active = useActiveSection();

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <Preloader />
      <AmbientBackground />

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
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex min-w-0 shrink-0 items-center gap-2"
          >
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
          </button>

          <nav className="relative flex items-center gap-0.5 text-[11px] font-medium sm:gap-2 sm:text-[15px]">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
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
                </a>
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

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-8 sm:py-10">{children}</main>

      <footer className="mt-12 sm:mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8 sm:py-8 sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Jaya Putra Syaipul.</p>
          <a
            href="#tc"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tc");
            }}
            className="hover:text-foreground hover:underline"
          >
            Syarat &amp; Ketentuan
          </a>
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
      <h2
        className="mt-3 font-extrabold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(1.85rem, 6vw, 3.5rem)" }}
      >
        {head}
        {last && <> <span className="mark-box">{last}</span></>}
      </h2>
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
