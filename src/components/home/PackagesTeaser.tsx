import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { packages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PackagesTeaser() {
  return (
    <section className="relative section border-t border-line bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages"
          title="Need build + growth together? We bundle it."
          description="Mix and match across both studios, or start from a ready-made package. Everything is customizable."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.06}>
              <Link
                href="/packages"
                className={cn(
                  "group relative flex h-full flex-col rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1",
                  p.featured ? "border-grow/40 ring-1 ring-grow/20" : "border-line hover:border-line-strong",
                )}
              >
                {p.featured && (
                  <span className="absolute -top-2.5 left-6 rounded-full bg-grow px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-faint">Best for: {p.best}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-build" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                  See packages
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
