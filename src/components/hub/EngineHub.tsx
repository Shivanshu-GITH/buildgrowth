import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStack } from "@/components/home/TechStack";
import { site } from "@/lib/site";
import { type HubContent } from "@/lib/hubs";
import { accent } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function EngineHub({ hub }: { hub: HubContent }) {
  const isBuild = hub.engine === "build";
  const heading = (
    <>
      {hub.title}{" "}
      <span className={isBuild ? "text-gradient-build" : "text-gradient-grow"}>{hub.highlight}</span>
    </>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className={cn("glow -top-24 left-1/4 size-[34rem]", isBuild ? "bg-build/25" : "bg-grow/25")} aria-hidden />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <span className={cn("eyebrow", accent.text(hub.engine))}>
              <span className={cn("size-1.5 rounded-full", isBuild ? "bg-build" : "bg-grow")} />
              {hub.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{heading}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{hub.sub}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={hub.cta.href} variant={hub.engine} size="lg" withArrow>
                {hub.cta.label}
              </Button>
              <Button href="/work" variant="outline" size="lg">
                See our work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            align="left"
            accent={hub.engine}
            eyebrow="What we do"
            title={`The ${hub.label} studio, service by service`}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {hub.services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/services/${s.slug}`}
                    className={cn(
                      "group card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1",
                      accent.hoverBorder(hub.engine),
                    )}
                  >
                    <span className={cn("grid size-12 place-items-center rounded-2xl", accent.iconBox(hub.engine))}>
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{s.blurb}</p>
                    <span className={cn("mt-5 inline-flex items-center gap-1.5 text-sm font-medium", accent.text(hub.engine))}>
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

      {/* Why */}
      <section className="section border-t border-line bg-surface/40">
        <div className="container-page">
          <SectionHeading
            eyebrow={`Why ${hub.label.toLowerCase()} with us`}
            accent={hub.engine}
            title={`Why teams choose our ${hub.label} studio`}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hub.why.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={(i % 4) * 0.06}>
                  <div className="card h-full p-6">
                    <span className={cn("grid size-11 place-items-center rounded-xl", accent.iconBox(hub.engine))}>
                      <Icon className="size-5.5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <TechStack />

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-14 text-center sm:px-12">
              <div className={cn("glow -top-10 left-1/3 size-72", isBuild ? "bg-build/25" : "bg-grow/25")} aria-hidden />
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">
                Ready to {isBuild ? "build something" : "grow your business"}?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Book a free call and we&apos;ll tell you exactly how we&apos;d approach it.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={hub.cta.href} variant={hub.engine} size="lg" withArrow>
                  {hub.cta.label}
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
