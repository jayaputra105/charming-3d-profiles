import { useEffect, useState } from "react";

const LOGO_URL = "/img/jps-logo.png";

/**
 * Subtle animated gradient orbs + faint logo watermark that sit behind page content.
 * Uses CSS transforms only; reduced-motion aware.
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
    >
      {/* Technical grid */}
      <div className="grid-bg absolute inset-0 opacity-90" />

      {/* Subtle violet ambience — accent only, never dominant */}
      <div
        className="absolute -right-[15%] -top-[15%] h-[55vmax] w-[55vmax] rounded-full opacity-[0.18] blur-[130px]"
        style={{
          background: "radial-gradient(circle, var(--primary-bright) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "floatA 24s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute -bottom-[20%] -left-[15%] h-[50vmax] w-[50vmax] rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "floatB 28s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Faint logo watermark */}
      <img
        src={LOGO_URL}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-[0.035]"
        style={{
          filter: "grayscale(0.6) blur(1px)",
          mixBlendMode: "screen",
          animation: prefersReducedMotion ? "none" : "pulse-glow 12s ease-in-out infinite",
          willChange: "opacity, transform",
        }}
      />


      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(6%, 4%, 0) scale(1.06); }
        }
        @keyframes floatB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-5%, -6%, 0) scale(1.04); }
        }
      `}</style>
    </div>
  );
}
