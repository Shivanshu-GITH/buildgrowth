import type { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Work — Case Studies",
  description:
    "Real projects and real results across education, healthcare, retail and more — websites, ERP systems, automation and marketing by Brandforge.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className="glow -top-24 left-1/3 size-[32rem] bg-grow/20" aria-hidden />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-build to-grow" />
              Our work
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Real projects. <span className="text-gradient">Real results.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              A look at how we&apos;ve helped businesses build the systems they run on — and grow the
              audiences that keep them busy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-6">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.client} delay={(i % 3) * 0.08}>
                <article className="card flex h-full flex-col p-7 transition-colors hover:border-line-strong">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">{cs.domain}</span>
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
                  <h2 className="mt-8 text-lg font-semibold">{cs.client}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cs.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-14 text-center sm:px-12">
              <div className="glow -top-10 left-1/3 size-72 bg-build/25" aria-hidden />
              <h2 className="mx-auto max-w-xl text-3xl font-semibold sm:text-4xl">
                Your project could be the next one here.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Let&apos;s talk about what you want to build or grow — the first call is free.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Start your project
                </Button>
                <Button href={site.whatsapp} external variant="outline" size="lg">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
