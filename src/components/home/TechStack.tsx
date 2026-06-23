import { techStack } from "@/lib/content";

export function TechStack() {
  const row = [...techStack, ...techStack];
  return (
    <section className="relative border-y border-line py-14">
      <div className="container-page">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-faint">
          The tools we build &amp; grow on
        </p>
      </div>
      <div className="marquee-pause relative mt-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted"
            >
              <span className="size-1.5 rounded-full bg-gradient-to-r from-build to-grow" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
