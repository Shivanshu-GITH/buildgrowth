import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { solutionsContent, solutionSlugs } from "@/lib/solutions-content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = solutionsContent[slug];
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutionsContent[slug];
  if (!s) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className="glow -top-24 left-1/4 size-[32rem] bg-build/25" aria-hidden />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-faint">
              <Link href="/solutions" className="text-build transition-colors hover:text-build-bright">
                Solutions
              </Link>
              <span aria-hidden>/</span>
              <span className="text-muted">{s.title}</span>
            </nav>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{s.h1}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{s.sub}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="build" size="lg" withArrow>
                Book a Free Demo
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      <section className="section border-t border-line bg-surface/40">
        <div className="container-page">
          <SectionHeading
            eyebrow={`Built for ${s.industry}`}
            accent="build"
            title="Everything in one system"
            description="Modules that cover your whole operation — use what you need, add the rest when you're ready."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.title} delay={(i % 4) * 0.05}>
                  <div className="card h-full p-6 transition-colors hover:border-build/40">
                    <span className="grid size-11 place-items-center rounded-xl bg-build/12 text-build">
                      <Icon className="size-5.5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            align="left"
            accent="build"
            eyebrow="Why it works"
            title={`Why ${s.industry} choose us`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {s.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <span className="grid size-10 place-items-center rounded-xl bg-build/12 text-build">
                    <Check className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line bg-surface/40">
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
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-14 text-center sm:px-12">
              <div className="glow -top-10 left-1/3 size-72 bg-build/25" aria-hidden />
              <h2 className="mx-auto max-w-xl text-3xl font-semibold sm:text-4xl">
                See it running for your {s.title.toLowerCase()}.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Book a free, no-obligation demo and we&apos;ll walk you through it with your use case.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="build" size="lg" withArrow>
                  Book a Free Demo
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
