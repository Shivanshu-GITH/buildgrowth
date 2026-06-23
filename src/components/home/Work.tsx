import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section className="relative section">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Real projects. Real results."
            className="max-w-xl"
          />
          <Reveal>
            <Button href="/work" variant="outline" withArrow>
              View all work
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.client} delay={(i % 3) * 0.08}>
              <article className="card group flex h-full flex-col overflow-hidden p-7 transition-colors hover:border-line-strong">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {cs.domain}
                  </span>
                  <div className="ml-auto flex gap-1.5">
                    {cs.engines.map((e) => (
                      <span
                        key={e}
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider",
                          e === "build" ? "bg-build/12 text-build" : "bg-grow/12 text-grow",
                        )}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="font-display text-5xl font-semibold text-gradient">{cs.metric}</div>
                  <div className="mt-1.5 text-sm text-muted">{cs.metricLabel}</div>
                </div>

                <h3 className="mt-8 text-lg font-semibold">{cs.client}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cs.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
