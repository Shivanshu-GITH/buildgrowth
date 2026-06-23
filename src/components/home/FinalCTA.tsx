import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-16 text-center sm:px-12 lg:py-20">
            <div className="absolute inset-0 -z-10 bg-dots opacity-40" aria-hidden />
            <div className="glow -top-10 left-1/4 size-72 bg-build/25" aria-hidden />
            <div className="glow -bottom-16 right-1/4 size-72 bg-grow/25" aria-hidden />

            <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Tell us what you need. We&apos;ll tell you exactly how we&apos;d do it.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted">
              A free 30-minute strategy call. No obligation, no jargon — whether you
              need to build, grow, or both.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Book a Free Strategy Call
              </Button>
              <Button href={site.whatsapp} external variant="outline" size="lg">
                <MessageCircle className="size-4.5" /> Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
