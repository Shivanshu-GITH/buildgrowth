import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ChevronDown } from "lucide-react";
import { servicesContent, serviceSlugs } from "@/lib/services-content";
import { processSteps } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accent } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesContent[slug];
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = servicesContent[slug];
  if (!s) notFound();

  const isBuild = s.engine === "build";
  const hubHref = isBuild ? "/build" : "/grow";
  const hubLabel = isBuild ? "Build" : "Grow";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className={cn("glow -top-24 left-1/4 size-[32rem]", isBuild ? "bg-build/25" : "bg-grow/25")} aria-hidden />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-faint">
              <Link href={hubHref} className={cn("transition-colors hover:text-ink", accent.text(s.engine))}>
                {hubLabel}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-muted">{s.title}</span>
            </nav>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{s.h1}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{s.sub}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant={s.engine} size="lg" withArrow>
                {s.cta}
              </Button>
              <Button href="/work" variant="outline" size="lg">
                See our work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="section border-t border-line bg-surface/40">
        <div className="container-page">
          <SectionHeading align="left" accent={s.engine} eyebrow="Does this sound like you?" title="The problems we fix" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.pains.map((p, i) => (
              <Reveal key={p} delay={(i % 2) * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-grow/12 text-grow">
                    <X className="size-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            accent={s.engine}
            title={`Inside ${s.title}`}
            description="Everything included to get the job done properly — and built to last."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={(i % 3) * 0.06}>
                  <div className={cn("card h-full p-7 transition-colors", accent.hoverBorder(s.engine))}>
                    <span className={cn("grid size-12 place-items-center rounded-2xl", accent.iconBox(s.engine))}>
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process + deliverables */}
      <section className="section border-t border-line bg-surface/40">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" accent={s.engine} eyebrow="How it works" title="A simple, clear process" />
            <ol className="mt-10 space-y-6">
              {processSteps.map((step) => (
                <Reveal key={step.step} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong bg-surface font-display text-xs font-semibold">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal>
            <div className="card sticky top-24 p-7">
              <h3 className="font-display text-lg font-semibold">What you get</h3>
              <ul className="mt-5 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-muted">
                    <Check className={cn("mt-0.5 size-4 shrink-0", accent.text(s.engine))} />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-line pt-6">
                <Button href="/contact" variant={s.engine} className="w-full" withArrow>
                  {s.cta}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
            {s.faqs.map((f) => (
              <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-ink">
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-faint transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-14 text-center sm:px-12">
              <div className={cn("glow -top-10 left-1/3 size-72", isBuild ? "bg-build/25" : "bg-grow/25")} aria-hidden />
              <h2 className="mx-auto max-w-xl text-3xl font-semibold sm:text-4xl">
                Let&apos;s talk about your {s.title.toLowerCase()}.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Book a free call — we&apos;ll listen, then tell you exactly how we&apos;d approach it.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant={s.engine} size="lg" withArrow>
                  {s.cta}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
