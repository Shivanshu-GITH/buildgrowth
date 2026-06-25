import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";


export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex items-center justify-center bg-white rounded-lg overflow-hidden p-0.5", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.png" alt="" className="size-full object-contain" />
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
