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
      <div
        className="absolute -left-[20%] -top-[10%] h-[60vmax] w-[60vmax] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--primary-bright) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "floatA 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute -bottom-[15%] -right-[15%] h-[55vmax] w-[55vmax] rounded-full opacity-25 blur-[110px]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "floatB 26s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Faint logo watermark */}
      <img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-[0.05] sm:opacity-[0.06]"
        style={{
          filter: "blur(1px) saturate(1.1)",
          mixBlendMode: "screen",
          animation: prefersReducedMotion ? "none" : "pulse-glow 10s ease-in-out infinite",
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
