import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Premium device mockup: laptop (focus) + tablet (behind) + phone (front-right).
 * Frames are pure CSS/SVG; the screens embed live iframes of this same site
 * so mockups always reflect the current design.
 */
export function DeviceMockupShowcase({ src = "/" }: { src?: string }) {
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
  const iframeSrc = origin ? `${origin}${src}` : src;

  const badges = ["Responsive Design", "Mobile First", "Modern UI", "SEO Friendly"];

  return (
    <section className="relative mt-16 sm:mt-24">
      <div className="mb-8 text-center sm:mb-12">
        <span className="chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
          <Sparkles className="h-3.5 w-3.5" /> Live Preview
        </span>
        <h2
          className="mt-3 font-black tracking-tight"
          style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.5rem)" }}
        >
          Tampil Sempurna di Semua Perangkat
        </h2>
        <p
          className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground"
          style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)" }}
        >
          Preview langsung website ini — otomatis sinkron di laptop, tablet, dan smartphone.
        </p>
      </div>

      <div
        className="relative mx-auto aspect-[16/10] w-full max-w-5xl"
        style={{ perspective: 1600 }}
      >
        {/* Ambient purple glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
          style={{
            background:
              "radial-gradient(45% 55% at 50% 55%, oklch(0.62 0.22 290 / 0.35) 0%, transparent 70%)",
          }}
        />

        {/* Tablet (behind, left) */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateY: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 8 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[2%] top-[6%] hidden w-[46%] sm:block"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ y: -6, rotateY: 4, transition: { duration: 0.4 } }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <TabletFrame>
              <MockupIframe src={iframeSrc} title="Tablet preview" scale={0.55} />
            </TabletFrame>
          </motion.div>
        </motion.div>

        {/* Laptop (main focus, center) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mx-auto w-full sm:w-[72%]"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ y: -4, transition: { duration: 0.4 } }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <LaptopFrame>
              <MockupIframe src={iframeSrc} title="Laptop preview" scale={0.7} />
            </LaptopFrame>
          </motion.div>
        </motion.div>

        {/* Phone (front-right) */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateY: -6 }}
          whileInView={{ opacity: 1, y: 0, rotateY: -6 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute -bottom-[2%] right-[2%] w-[26%] sm:w-[20%]"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ y: -8, rotateY: -3, transition: { duration: 0.4 } }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <PhoneFrame>
              <MockupIframe src={iframeSrc} title="Phone preview" scale={0.38} mobile />
            </PhoneFrame>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-14 sm:gap-3">
        {badges.map((b, i) => (
          <motion.span
            key={b}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary shadow-[0_4px_16px_-8px_oklch(0.62_0.22_290_/_0.6)] backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs"
          >
            {b}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function MockupIframe({
  src,
  title,
  scale,
  mobile = false,
}: {
  src: string;
  title: string;
  scale: number;
  mobile?: boolean;
}) {
  // Scale a larger viewport into the frame so the site renders at a natural width.
  const vw = mobile ? 390 : 1280;
  const vh = mobile ? 780 : 800;
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        aria-hidden="true"
        tabIndex={-1}
        scrolling="no"
        style={{
          width: `${vw}px`,
          height: `${vh}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          border: "0",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Screen bezel */}
      <div
        className="relative overflow-hidden rounded-t-[14px] sm:rounded-t-[18px]"
        style={{
          background: "linear-gradient(180deg, #1a1720, #0d0b13)",
          padding: "10px 10px 12px",
          border: "1px solid oklch(1 0 0 / 0.08)",
          boxShadow:
            "0 30px 60px -20px oklch(0.05 0.05 280 / 0.7), 0 0 0 1px oklch(1 0 0 / 0.03)",
        }}
      >
        {/* Camera notch */}
        <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-black/70" />
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-black"
          style={{ boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.05)" }}
        >
          {children}
        </div>
      </div>
      {/* Base */}
      <div
        className="mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[14px] sm:h-4"
        style={{
          background: "linear-gradient(180deg, #2a2632, #14121a)",
          boxShadow: "0 12px 24px -8px oklch(0.05 0.05 280 / 0.7)",
        }}
      >
        <div className="mx-auto h-full w-[18%] rounded-b-xl bg-black/40" />
      </div>
    </div>
  );
}

function TabletFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-[18px]"
      style={{
        background: "linear-gradient(180deg, #1a1720, #0d0b13)",
        padding: "10px",
        border: "1px solid oklch(1 0 0 / 0.08)",
        boxShadow:
          "0 24px 50px -18px oklch(0.05 0.05 280 / 0.7), 0 0 0 1px oklch(1 0 0 / 0.03)",
      }}
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-black"
        style={{ boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.05)" }}
      >
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-[22px] sm:rounded-[28px]"
      style={{
        background: "linear-gradient(180deg, #1a1720, #0d0b13)",
        padding: "6px",
        border: "1px solid oklch(1 0 0 / 0.1)",
        boxShadow:
          "0 20px 40px -12px oklch(0.05 0.05 280 / 0.75), 0 0 30px -6px oklch(0.62 0.22 290 / 0.35)",
      }}
    >
      <div
        className="relative aspect-[9/19] w-full overflow-hidden rounded-[16px] bg-black sm:rounded-[22px]"
        style={{ boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.06)" }}
      >
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-1.5 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-black sm:h-4 sm:w-16" />
        {children}
      </div>
    </div>
  );
}
