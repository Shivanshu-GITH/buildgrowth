import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { allServices } from "@/lib/site";
import { accent } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section className="relative section">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to launch and grow"
          description="Pick a single service or combine them. Blue is our Build studio, coral is our Grow studio."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    "group card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1",
                    accent.hoverBorder(s.engine),
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn("grid size-12 place-items-center rounded-2xl", accent.iconBox(s.engine))}>
                      <Icon className="size-6" />
                    </span>
                    <span className={cn("text-[0.7rem] font-semibold uppercase tracking-widest", accent.text(s.engine))}>
                      {s.engine}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{s.blurb}</p>
                  <span className={cn("mt-5 inline-flex items-center gap-1.5 text-sm font-medium", accent.text(s.engine))}>
                    Learn more
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
