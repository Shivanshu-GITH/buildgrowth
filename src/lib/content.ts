import { Handshake, Gauge, FileText, type LucideIcon } from "lucide-react";
import { type Engine } from "./site";

/** Reasons to choose a build + grow studio in one. */
export const whyBoth: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "No handoffs",
    body: "Your website, data and ads live with one team — no blaming the “other agency” when something breaks.",
    icon: Handshake,
  },
  {
    title: "Built to convert, grown to scale",
    body: "We design the system and drive the traffic that fills it. The two are planned together, not in silos.",
    icon: Gauge,
  },
  {
    title: "One invoice, one roadmap",
    body: "Tech and marketing under a single plan, a single point of contact, and a single monthly report.",
    icon: FileText,
  },
];

export const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Free call & audit",
    body: "We listen to what you need and audit your current setup — no jargon, no obligation.",
  },
  {
    step: "02",
    title: "Plan & quote",
    body: "You get a clear scope, timeline and fixed quote. You know exactly what you’re paying for.",
  },
  {
    step: "03",
    title: "Build / launch",
    body: "We design, build and ship — keeping you in the loop at every milestone.",
  },
  {
    step: "04",
    title: "Grow & support",
    body: "We run the marketing, watch the numbers, and keep improving month after month.",
  },
];

export interface CaseStudy {
  client: string;
  domain: string;
  metric: string;
  metricLabel: string;
  summary: string;
  engines: Engine[];
}

export const caseStudies: CaseStudy[] = [
  {
    client: "Sunrise Public School",
    domain: "Education",
    metric: "60%",
    metricLabel: "less time on fee collection",
    summary:
      "A custom school ERP replaced spreadsheets — automating admissions, fees and parent updates.",
    engines: ["build"],
  },
  {
    client: "CityCare Clinic",
    domain: "Healthcare",
    metric: "1,200+",
    metricLabel: "appointments handled / month",
    summary:
      "Online booking, records and WhatsApp reminders cut no-shows and freed up the front desk.",
    engines: ["build", "grow"],
  },
  {
    client: "Nova Retail",
    domain: "Retail & D2C",
    metric: "3×",
    metricLabel: "online orders in 4 months",
    summary:
      "A fast new store plus performance marketing turned a quiet website into a sales channel.",
    engines: ["build", "grow"],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They built our management system and then ran the marketing to grow it. Having one team for both saved us months of back-and-forth.",
    name: "Rajesh Menon",
    role: "Director, Sunrise Public School",
  },
  {
    quote:
      "Our clinic finally runs on one system. Appointments, billing, reminders — all automated. The team actually understood healthcare.",
    name: "Dr. Anita Rao",
    role: "Founder, CityCare Clinic",
  },
  {
    quote:
      "From a slow website to 3× the orders. They didn’t just hand over a site — they made sure it brought in customers.",
    name: "Karan Shah",
    role: "Owner, Nova Retail",
  },
];

export const techStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "n8n",
  "OpenAI",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Vercel",
  "Meta Ads",
  "Google Ads",
  "WhatsApp API",
  "Tailwind CSS",
  "Stripe",
  "Razorpay",
];
