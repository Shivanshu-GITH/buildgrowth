import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
      <div className="glow -top-10 left-1/3 size-[28rem] bg-build/20" aria-hidden />
      <div className="container-page flex flex-col items-center text-center">
        <span className="font-display text-7xl font-semibold text-gradient sm:text-8xl">404</span>
        <h1 className="mt-6 text-2xl font-semibold sm:text-3xl">This page wandered off.</h1>
        <p className="mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" withArrow>
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}
