import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            <span className="text-sm font-extrabold tracking-tight sm:text-base">
              Jaya Putra
            </span>
          </button>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost grid h-10 w-10 shrink-0 place-items-center rounded-full text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.button
                type="button"
                aria-label="Tutup menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 -z-10 cursor-default"
                style={{ background: "oklch(0 0 0 / 0.55)" }}
              />
              <motion.nav
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute inset-x-0 top-full flex flex-col gap-1 px-3 pb-4 pt-3 sm:px-8"
                style={{
                  background: "oklch(0.16 0 0 / 0.96)",
                  backdropFilter: "blur(16px) saturate(120%)",
                  borderBottom: "1px solid oklch(1 0 0 / 0.07)",
                }}
              >
                {nav.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        scrollToSection(item.id);
                      }}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      style={isActive ? { background: "oklch(1 0 0 / 0.1)" } : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-light mt-2 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[13px] font-semibold"
                >
                  @jaya_putra105
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
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
