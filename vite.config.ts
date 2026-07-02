// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro, componentTagger, VITE_* env injection, @ alias,
// dedupe, error loggers, and sandbox detection — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Target Vercel: Nitro emits `.vercel/output/` which Vercel auto-detects.
  nitro: {
    preset: "vercel",
  },
});
