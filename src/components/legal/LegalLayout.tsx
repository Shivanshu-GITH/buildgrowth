import { Reveal } from "@/components/ui/Reveal";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-40" aria-hidden />
      <div className="container-page max-w-3xl">
        <Reveal>
          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-faint">Last updated: {updated}</p>
          <div className="legal-prose mt-10 space-y-6 text-muted">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
