import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyBoth } from "@/lib/content";

export function WhyBoth() {
  return (
    <section className="relative section border-t border-line bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why both under one roof"
          title={
            <>
              Most agencies build <span className="text-muted">or</span> grow.
              <br className="hidden sm:block" /> We do both — so nothing falls through the cracks.
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {whyBoth.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card h-full p-7 transition-colors hover:border-line-strong">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-build/15 to-grow/15 text-ink">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
