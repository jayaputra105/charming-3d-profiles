import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

const JPS_PATH = "M3545 12668 c-2 -7 -6 -1838 -9 -4068 -4 -2644 -9 -4081 -16 -4129 -122 -897 -621 -1513 -1425 -1760 -251 -77 -443 -96 -958 -96 l-387 0 0 -435 c-1 -239 -2 -516 -3 -615 l-2 -180 410 -3 c616 -5 892 23 1285 128 270 73 663 251 925 419 217 139 543 437 750 687 70 84 87 107 238 326 192 279 405 850 461 1238 42 287 41 179 41 4425 l0 4070 -653 3 c-515 1 -653 -1 -657 -10z M5768 12673 l-36 -4 -4 -522 c-10 -1571 -3 -2999 15 -3127 38 -270 65 -376 160 -626 209 -548 550 -973 1092 -1361 123 -88 236 -158 341 -212 87 -45 183 -98 199 -111 18 -15 380 -198 430 -218 28 -11 145 -66 260 -122 116 -56 257 -123 315 -150 58 -26 222 -104 365 -173 143 -69 323 -155 400 -192 404 -194 617 -350 688 -503 150 -327 -166 -755 -674 -912 -55 -17 -98 -34 -95 -37 10 -10 925 -3 1039 7 1042 98 1436 1196 689 1922 -207 201 -413 323 -1082 638 -207 98 -369 176 -430 209 -30 17 -104 52 -165 79 -60 27 -135 66 -165 86 -30 20 -80 44 -110 52 -30 9 -89 34 -130 55 -41 21 -183 90 -315 154 -132 64 -262 131 -290 149 -27 18 -73 42 -102 53 -399 162 -844 624 -1027 1065 -121 292 -126 354 -126 1604 l0 1001 143 5 c206 7 4137 1 4144 -6 3 -3 -7 -24 -23 -46 -126 -177 -261 -374 -387 -566 l-86 -131 -51 -7 c-28 -4 -674 -6 -1435 -5 -761 0 -1387 -1 -1392 -4 -18 -11 -8 -1195 11 -1281 46 -210 171 -425 349 -599 94 -92 315 -261 413 -316 38 -21 105 -58 149 -83 44 -25 139 -75 210 -113 72 -37 162 -85 200 -105 39 -21 97 -51 130 -68 100 -52 1515 -752 1519 -752 3 0 42 -22 88 -49 46 -26 130 -75 188 -108 256 -147 530 -381 672 -573 446 -606 479 -1457 81 -2075 -292 -452 -701 -720 -1278 -838 -98 -20 -136 -20 -1826 -24 l-1727 -4 -4 168 c-2 92 -2 311 0 485 l4 318 387 2 386 3 0 600 0 600 -1055 5 c-580 3 -1063 1 -1072 -3 -16 -7 -31 -5221 -15 -5228 1 -1 296 -3 655 -5 l652 -3 1 77 c1 42 3 84 4 92 1 8 3 394 4 858 l1 842 1698 0 c1968 0 1951 0 2332 81 668 141 1239 484 1715 1029 122 140 306 427 411 640 36 73 141 350 164 431 11 41 32 115 46 166 168 614 79 1469 -210 2008 -87 162 -111 202 -194 328 -262 397 -776 841 -1242 1072 -52 25 -102 52 -110 59 -8 7 -33 20 -55 28 -22 9 -96 43 -165 76 -69 32 -199 94 -290 137 -91 42 -275 131 -410 197 -135 66 -267 129 -293 139 -27 11 -72 34 -101 53 -28 18 -70 39 -91 46 -48 15 -226 97 -355 164 -52 27 -155 79 -228 116 -73 38 -141 75 -151 84 -10 9 -69 42 -131 74 -62 31 -115 62 -117 68 -3 9 278 11 1075 10 890 -1 1082 1 1095 12 14 12 269 390 323 479 10 17 44 69 75 115 31 46 86 128 123 183 36 55 72 109 80 120 7 11 34 52 60 90 25 39 52 79 60 90 8 11 71 108 142 215 273 419 397 607 437 665 139 206 357 535 372 564 9 19 45 73 79 120 34 47 80 115 101 151 22 36 77 121 122 189 46 68 83 127 83 132 0 9 -7652 10 -7732 2z";

function JPSLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="jps-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#jps-ring)" />
      <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <svg x="12" y="12" width="40" height="40" viewBox="0 0 14340 13740" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0,13740) scale(1,-1)" fill="#ffffff">
          <path d={JPS_PATH} />
        </g>
      </svg>
    </svg>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Harga" },
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
            <JPSLogo className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
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
