import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { solutionsContent, solutionSlugs } from "@/lib/solutions-content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industry Solutions — ERP & Management Systems",
  description:
    "Ready-made management systems for schools, clinics, retail and manufacturing — plus custom builds for any domain.",
};

const iconBySlug = Object.fromEntries(industries.map((i) => [i.slug, i.icon]));

export default function SolutionsIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className="glow -top-24 left-1/3 size-[34rem] bg-build/25" aria-hidden />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-build">
              <span className="size-1.5 rounded-full bg-build" />
              Solutions
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Management systems made for your world.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Each system is tailored to how your industry actually works — admissions, billing,
              inventory, reports and more. Don&apos;t see yours? We build custom for any domain.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            {solutionSlugs.map((slug, i) => {
              const s = solutionsContent[slug];
              const Icon = iconBySlug[slug];
              return (
                <Reveal key={slug} delay={(i % 2) * 0.08}>
                  <Link
                    href={`/solutions/${slug}`}
                    className="group card flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:border-build/40"
                  >
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <span className="grid size-12 place-items-center rounded-2xl bg-build/12 text-build">
                          <Icon className="size-6" />
                        </span>
                      )}
                      <h2 className="text-xl font-semibold">{s.title}</h2>
                    </div>
                    <p className="mt-5 flex-1 text-muted">{s.sub}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.modules.slice(0, 4).map((m) => (
                        <span key={m.title} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                          {m.title}
                        </span>
                      ))}
                      <span className="rounded-full border border-line px-3 py-1 text-xs text-faint">
                        +{s.modules.length - 4} more
                      </span>
                    </div>
                    <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-build">
                      Explore {s.title}
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-5 flex flex-col items-start gap-5 rounded-3xl border border-dashed border-line-strong p-8 sm:flex-row sm:items-center">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-grow/12 text-grow">
                <Sparkles className="size-6" />
              </span>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Need something custom?</h2>
                <p className="mt-1 text-sm text-muted">
                  Real estate, gyms, restaurants, logistics — if it runs on a process, we can build a system for it.
                </p>
              </div>
              <Button href="/contact" variant="grow" withArrow>
                Tell us your domain
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
