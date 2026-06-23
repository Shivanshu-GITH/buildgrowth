import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-grid place-items-center", className)}>
      <svg viewBox="0 0 36 36" className="size-full" aria-hidden="true">
        <defs>
          <linearGradient id="bf-mark" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f86f7" />
            <stop offset="1" stopColor="#ff6b3d" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="34" height="34" rx="10" fill="url(#bf-mark)" />
        {/* ascending bars = build + grow */}
        <g fill="#fff">
          <rect x="9" y="20" width="4.2" height="7" rx="1.6" opacity="0.9" />
          <rect x="15.9" y="15" width="4.2" height="12" rx="1.6" opacity="0.95" />
          <rect x="22.8" y="9" width="4.2" height="18" rx="1.6" />
        </g>
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${site.name} home`}>
      <LogoMark className="size-8 transition-transform duration-300 group-hover:scale-105" />
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        {site.name}
      </span>
    </Link>
  );
}
