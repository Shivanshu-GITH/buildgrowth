import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/site";

export function SolutionsStrip() {
  return (
    <section className="relative section border-t border-line bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Built for your domain"
          accent="build"
          title="Management systems made for your world"
          description="Ready-made ERP solutions tailored to how your industry actually works — and custom builds for anything else."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/solutions/${ind.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-build/40"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-build/12 text-build">
                    <Icon className="size-6" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-medium text-ink">{ind.title}</span>
                    <span className="text-xs text-faint">{ind.short}</span>
                  </span>
                  <ArrowUpRight className="ml-auto size-5 text-faint transition-all duration-200 group-hover:text-build group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={0.12}>
            <Link
              href="/contact"
              className="group flex h-full items-center gap-4 rounded-2xl border border-dashed border-line-strong bg-transparent p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-grow/50"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-grow/12 text-grow">
                <Sparkles className="size-6" />
              </span>
              <span className="flex flex-col">
                <span className="font-medium text-ink">Don&apos;t see yours?</span>
                <span className="text-xs text-faint">We build custom systems for any domain.</span>
              </span>
              <ArrowUpRight className="ml-auto size-5 text-faint transition-all duration-200 group-hover:text-grow group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
