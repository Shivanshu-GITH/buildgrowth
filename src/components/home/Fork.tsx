import Link from "next/link";
import { Hammer, TrendingUp, ArrowUpRight } from "lucide-react";
import { buildServices, growServices, type ServiceItem, type Engine } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const panels: {
  engine: Engine;
  href: string;
  label: string;
  icon: typeof Hammer;
  headline: string;
  services: ServiceItem[];
}[] = [
  {
    engine: "build",
    href: "/build",
    label: "Build",
    icon: Hammer,
    headline: "Websites, systems & automation that just work.",
    services: buildServices,
  },
  {
    engine: "grow",
    href: "/grow",
    label: "Grow",
    icon: TrendingUp,
    headline: "More reach, more leads, more revenue.",
    services: growServices,
  },
];

export function Fork() {
  return (
    <section className="relative section">
      <div className="container-page">
        <div className="grid gap-5 lg:grid-cols-2">
          {panels.map((p, i) => {
            const isBuild = p.engine === "build";
            const Icon = p.icon;
            return (
              <Reveal key={p.engine} delay={i * 0.08}>
                <Link
                  href={p.href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 lg:p-10",
                    isBuild ? "hover:border-build/50" : "hover:border-grow/50",
                  )}
                >
                  {/* glow */}
                  <div
                    className={cn(
                      "glow -right-16 -top-16 size-64 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      isBuild ? "bg-build/25" : "bg-grow/25",
                    )}
                    aria-hidden
                  />
                  <div className="relative flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-12 place-items-center rounded-2xl",
                        isBuild ? "bg-build/12 text-build" : "bg-grow/12 text-grow",
                      )}
                    >
                      <Icon className="size-6" />
                    </span>
                    <span
                      className={cn(
                        "text-sm font-semibold uppercase tracking-[0.2em]",
                        isBuild ? "text-build" : "text-grow",
                      )}
                    >
                      {p.label}
                    </span>
                  </div>

                  <h3 className="relative mt-6 max-w-sm text-2xl font-semibold sm:text-3xl">
                    {p.headline}
                  </h3>

                  <ul className="relative mt-7 flex flex-col gap-px overflow-hidden rounded-2xl border border-line bg-line">
                    {p.services.map((s) => {
                      const SIcon = s.icon;
                      return (
                        <li
                          key={s.slug}
                          className="flex items-center gap-3 bg-surface px-4 py-3.5 transition-colors group-hover:bg-surface-2"
                        >
                          <SIcon
                            className={cn("size-5 shrink-0", isBuild ? "text-build" : "text-grow")}
                          />
                          <span className="text-sm font-medium text-ink">{s.title}</span>
                          <span className="ml-auto text-xs text-faint">{s.short}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <span
                    className={cn(
                      "relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold",
                      isBuild ? "text-build" : "text-grow",
                    )}
                  >
                    Explore {p.label}
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
