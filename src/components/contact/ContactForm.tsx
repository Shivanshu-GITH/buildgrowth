"use client";

import { useState } from "react";
import { Hammer, TrendingUp, Sparkles, Send, Check } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Interest = "build" | "grow" | "both";

const interests: { value: Interest; label: string; icon: typeof Hammer }[] = [
  { value: "build", label: "Build", icon: Hammer },
  { value: "grow", label: "Grow", icon: TrendingUp },
  { value: "both", label: "Both", icon: Sparkles },
];

const budgets = ["Not sure yet", "Under ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+"];

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-build/60 focus:ring-2 focus:ring-build/20";

export function ContactForm() {
  const [interest, setInterest] = useState<Interest>("both");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string) || "—";
    const label = interests.find((i) => i.value === interest)?.label ?? "Both";

    const subject = `New enquiry (${label}) — ${get("name")}`;
    const body = [
      `Interested in: ${label}`,
      `Name: ${get("name")}`,
      `Business: ${get("business")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Industry / domain: ${get("domain")}`,
      `Budget: ${get("budget")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    // Default: open the user's email client with a pre-filled message.
    // To collect submissions automatically instead, wire this to an endpoint
    // (Resend / Formspree / a /api/contact route) and POST `data`.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      {/* Interest segmented control */}
      <fieldset>
        <legend className="text-sm font-medium text-ink">I&apos;m interested in…</legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {interests.map((opt) => {
            const Icon = opt.icon;
            const active = interest === opt.value;
            const activeClass =
              opt.value === "build"
                ? "border-build/60 bg-build/12 text-build"
                : opt.value === "grow"
                  ? "border-grow/60 bg-grow/12 text-grow"
                  : "border-ink/30 bg-surface-3 text-ink";
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setInterest(opt.value)}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all",
                  active ? activeClass : "border-line text-muted hover:text-ink",
                )}
                aria-pressed={active}
              >
                <Icon className="size-4" />
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Your name" required>
          <input name="name" required placeholder="Jane Sharma" className={inputClass} />
        </Field>
        <Field label="Business name">
          <input name="business" placeholder="Acme Pvt Ltd" className={inputClass} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </Field>
        <Field label="Phone / WhatsApp">
          <input name="phone" placeholder="+91 …" className={inputClass} />
        </Field>
        <Field label="Industry / domain">
          <input name="domain" placeholder="School, clinic, retail…" className={inputClass} />
        </Field>
        <Field label="Budget">
          <select name="budget" className={cn(inputClass, "appearance-none")} defaultValue={budgets[0]}>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-surface">
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="What do you need?" required>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us a bit about your project or goal…"
            className={cn(inputClass, "resize-none")}
          />
        </Field>
      </div>

      <input type="hidden" name="interest" value={interest} />

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink font-medium text-bg transition-colors hover:bg-white"
      >
        {sent ? (
          <>
            <Check className="size-4" /> Opening your email…
          </>
        ) : (
          <>
            Send enquiry <Send className="size-4" />
          </>
        )}
      </button>
      {sent && (
        <p className="mt-3 text-center text-xs text-faint">
          If nothing opened, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">
        {label} {required && <span className="text-grow">*</span>}
      </span>
      {children}
    </label>
  );
}
