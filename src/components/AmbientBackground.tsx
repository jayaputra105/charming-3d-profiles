import { useEffect, useState } from "react";

/**
 * Subtle animated gradient orbs that sit behind page content.
 * Uses CSS transforms for performance; reduced-motion aware.
 */
export function AmbientBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      <div
        className="absolute -left-[20%] -top-[10%] h-[60vmax] w-[60vmax] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--primary-bright) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "floatA 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-[15%] -right-[15%] h-[55vmax] w-[55vmax] rounded-full opacity-25 blur-[110px]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "floatB 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute left-[30%] top-[40%] h-[35vmax] w-[35vmax] rounded-full opacity-20 blur-[90px]"
        style={{
          background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "floatC 30s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8%, 6%) scale(1.08); }
        }
        @keyframes floatB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-6%, -8%) scale(1.05); }
        }
        @keyframes floatC {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, -5%) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
