import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOGO_URL = "/img/jps-logo.png";

/**
 * Lightweight intro loader with a percentage counter (reference-style).
 * Runs once per browser session, uses only opacity/transform.
 */
export function Preloader() {
  const [done, setDone] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("jps-intro") === "1") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("jps-intro", "1");
      return;
    }

    setDone(false);
    const start = performance.now();
    const DURATION = 1400;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setPct(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("jps-intro", "1");
        setTimeout(() => setDone(true), 220);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ background: "oklch(0.13 0 0)" }}
        >
          <div className="flex flex-col items-center gap-5 px-6">
            <motion.img
              src={LOGO_URL}
              alt=""
              aria-hidden
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10 sm:w-64">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${pct}%`, transition: "width 90ms linear" }}
              />
            </div>
            <p className="text-sm font-semibold tabular-nums tracking-widest text-white/70">
              {pct}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
