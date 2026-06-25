import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Book a Free Strategy Call",
  description:
    "Tell us what you need to build or grow. Book a free 30-minute strategy call with Ugrohi — no obligation, no jargon.",
};

const channels = [
  { label: "Email us", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "WhatsApp", value: "Chat with us", href: site.whatsapp, icon: MessageCircle, external: true },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
      <div className="glow -top-24 left-1/4 size-[30rem] bg-build/20" aria-hidden />
      <div className="glow top-20 right-1/4 size-[30rem] bg-grow/20" aria-hidden />

      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-build to-grow" />
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Tell us what you need.
          </h1>
          <p className="mt-6 text-lg text-muted">
            A free 30-minute call. We&apos;ll listen, then tell you exactly how we&apos;d approach it —
            whether you need to build, grow, or both.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-surface-3 text-ink transition-colors group-hover:bg-build/12 group-hover:text-build">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs text-faint">{c.label}</span>
                      <span className="font-medium text-ink">{c.value}</span>
                    </span>
                  </a>
                );
              })}

              <div className="rounded-2xl border border-line bg-surface p-5">
                <div className="flex items-center gap-2 text-ink">
                  <Clock className="size-4 text-build" />
                  <span className="text-sm font-medium">Office hours</span>
                </div>
                <p className="mt-2 text-sm text-muted">Mon – Sat, 10am – 7pm IST</p>
                <p className="mt-1 text-sm text-faint">We usually reply within a few hours.</p>
              </div>

              <div className="rounded-2xl border border-dashed border-line-strong p-5">
                <p className="text-sm text-muted">
                  Prefer to book a slot directly? Mention your preferred time in the form and we&apos;ll
                  send a calendar invite.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
