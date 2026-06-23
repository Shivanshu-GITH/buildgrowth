import type { Metadata } from "next";
import { Check } from "lucide-react";
import { packages } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages — Build + Grow Bundles",
  description:
    "Ready-made packages that combine build and growth — Launch, Launch + Grow, Operate and Full-Stack. Mix and match, fully customizable.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className="glow -top-24 left-1/4 size-[30rem] bg-build/20" aria-hidden />
        <div className="glow top-10 right-1/4 size-[30rem] bg-grow/20" aria-hidden />
        <div className="container-page relative text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-build to-grow" />
              Packages
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Build and grow together — <span className="text-gradient">and save.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              Mix and match across both studios, or start from a ready-made bundle. Every package is
              customizable to your goals and budget.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-6">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.06}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border bg-surface p-7",
                    p.featured ? "border-grow/40 ring-1 ring-grow/20" : "border-line",
                  )}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-grow px-3 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                      Most popular
                    </span>
                  )}
                  <h2 className="font-display text-xl font-semibold">{p.name}</h2>
                  <p className="mt-1.5 text-sm text-faint">Best for: {p.best}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check className={cn("mt-0.5 size-4 shrink-0", p.featured ? "text-grow" : "text-build")} />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant={p.featured ? "grow" : "outline"}
                    className="mt-7 w-full"
                    withArrow
                  >
                    Get this package
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-center text-sm text-faint">
              Prices are tailored to scope — book a free call for a fixed quote. Add-ons and custom
              combinations are always welcome.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-14 text-center sm:px-12">
              <div className="glow -top-10 left-1/3 size-72 bg-build/20" aria-hidden />
              <div className="glow -bottom-10 right-1/3 size-72 bg-grow/20" aria-hidden />
              <SectionHeading
                title="Not sure which package fits?"
                description="Tell us your goals and budget — we'll recommend the right mix, no pressure."
              />
              <div className="mt-8 flex justify-center">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Book a Free Strategy Call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
