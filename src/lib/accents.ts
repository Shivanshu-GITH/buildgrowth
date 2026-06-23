import { type Engine } from "./site";

/**
 * Accent class helpers. The literal class strings live here so Tailwind's
 * source scan generates them (build = blue, grow = coral).
 */
export const accent = {
  text: (e?: Engine) =>
    e === "build" ? "text-build" : e === "grow" ? "text-grow" : "text-ink",
  iconBox: (e?: Engine) =>
    e === "build"
      ? "bg-build/12 text-build"
      : e === "grow"
        ? "bg-grow/12 text-grow"
        : "bg-surface-3 text-ink",
  hoverBorder: (e?: Engine) =>
    e === "build"
      ? "hover:border-build/50"
      : e === "grow"
        ? "hover:border-grow/50"
        : "hover:border-ink/30",
  glow: (e?: Engine) =>
    e === "build" ? "bg-build/20" : e === "grow" ? "bg-grow/20" : "bg-ink/10",
  ring: (e?: Engine) =>
    e === "build" ? "ring-build/30" : e === "grow" ? "ring-grow/30" : "ring-ink/20",
};
