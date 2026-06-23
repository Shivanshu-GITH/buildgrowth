import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="relative section border-t border-line bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="How we work"
          title="A simple way to work with us"
          description="Four clear steps from first conversation to ongoing growth — no surprises."
        />
        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connector line */}
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-build/40 via-line-strong to-grow/40 lg:block"
            aria-hidden
          />
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="relative">
                <span className="relative grid size-12 place-items-center rounded-full border border-line-strong bg-surface font-display text-sm font-semibold text-ink">
                  {s.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
