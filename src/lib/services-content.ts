import {
  Smartphone,
  Search,
  Pencil,
  ShoppingCart,
  Gauge,
  Boxes,
  ReceiptText,
  Users,
  BarChart3,
  ShieldCheck,
  MessageSquare,
  PhoneCall,
  Workflow,
  FileStack,
  Crosshair,
  MousePointerClick,
  LineChart,
  CalendarDays,
  Sparkles,
  Heart,
  Megaphone,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { type Engine } from "./site";

export interface ServiceFeature {
  title: string;
  body: string;
  icon: LucideIcon;
}
export interface FAQ {
  q: string;
  a: string;
}
export interface ServiceContent {
  slug: string;
  engine: Engine;
  title: string;
  h1: string;
  sub: string;
  cta: string;
  pains: string[];
  features: ServiceFeature[];
  deliverables: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const servicesContent: Record<string, ServiceContent> = {
  "website-development": {
    slug: "website-development",
    engine: "build",
    title: "Website Development",
    h1: "A website that works as hard as you do.",
    sub: "Fast, modern, mobile-first websites for any business — from a clean one-pager to a full e-commerce store.",
    cta: "Get a Website Quote",
    pains: [
      "Your current site is slow, dated, or doesn't work on phones.",
      "You don't show up when people search for your business.",
      "Visitors come but never turn into enquiries.",
      "You can't update content without calling a developer.",
    ],
    features: [
      { title: "Mobile-first design", body: "Looks sharp and loads fast on every screen — most of your visitors are on a phone.", icon: Smartphone },
      { title: "SEO-ready foundation", body: "Clean structure, fast speeds and metadata so Google can find and rank you.", icon: Search },
      { title: "Edit it yourself", body: "An optional CMS lets you update text, images and blog posts without code.", icon: Pencil },
      { title: "E-commerce ready", body: "Sell products or take bookings with secure payments via Razorpay or Stripe.", icon: ShoppingCart },
      { title: "Built for speed", body: "Next.js and modern hosting for near-instant loads and great Core Web Vitals.", icon: Gauge },
    ],
    deliverables: [
      "Custom, responsive website",
      "Up to 5–10 core pages",
      "Contact form + WhatsApp",
      "Basic on-page SEO",
      "Analytics setup",
      "1 month post-launch support",
    ],
    faqs: [
      { q: "How long does a website take?", a: "Most business sites go live in 2–4 weeks, depending on the number of pages and how quickly we get your content." },
      { q: "Will I be able to edit it myself?", a: "Yes — if you choose a CMS build, you can update text, images and blog posts from a simple dashboard." },
      { q: "Do you handle SEO?", a: "Every site ships SEO-ready. Ongoing ranking and traffic growth is handled by our Grow studio." },
      { q: "What does it cost?", a: "It depends on scope. Book a free call and we'll give you a clear, fixed quote — no surprises." },
    ],
    metaTitle: "Website Development Company",
    metaDescription:
      "Fast, modern, mobile-first websites and e-commerce stores for any business. SEO-ready and easy to edit. Get a fixed quote from Ugrohi.",
  },

  "erp-management-systems": {
    slug: "erp-management-systems",
    engine: "build",
    title: "ERP & Management Systems",
    h1: "One system to run your entire operation.",
    sub: "Custom ERP and management software built around your domain — schools, clinics, retail, manufacturing and more. Admissions, billing, inventory, reports — all in one place.",
    cta: "Discuss Your System",
    pains: [
      "Your team juggles spreadsheets, WhatsApp and paper registers.",
      "Off-the-shelf software doesn't fit how you actually work.",
      "Data lives in silos and reports take hours to pull together.",
      "You can't see what's happening across the business in one place.",
    ],
    features: [
      { title: "Custom modules", body: "Built around your exact workflow — not a generic template you have to bend to.", icon: Boxes },
      { title: "Billing & GST", body: "Invoicing, payments and GST-ready reports baked in from day one.", icon: ReceiptText },
      { title: "Role-based access", body: "Everyone sees exactly what they should — admins, staff, managers and beyond.", icon: Users },
      { title: "Live dashboards", body: "Real-time reports so you always know where the business stands.", icon: BarChart3 },
      { title: "Secure by design", body: "Your data is encrypted, backed up and access-controlled.", icon: ShieldCheck },
    ],
    deliverables: [
      "Custom ERP / management system",
      "Domain-specific modules",
      "Billing & reporting",
      "Role-based user accounts",
      "Data migration",
      "Staff training & support",
    ],
    faqs: [
      { q: "Can it replace our current software?", a: "Usually yes. We map your existing process, migrate your data, and build a system that fits the way you work." },
      { q: "Is our data safe?", a: "Yes. We use encryption, access controls and regular backups, hosted on secure infrastructure." },
      { q: "Can staff learn it easily?", a: "We design for non-technical users and include training and documentation at handover." },
      { q: "Do you build for my industry?", a: "We have ready solutions for schools, clinics, retail and manufacturing — and build custom for any other domain." },
    ],
    metaTitle: "Custom ERP & Management Software",
    metaDescription:
      "Custom ERP and management systems for schools, clinics, retail, manufacturing and more. Billing, inventory, reports and dashboards in one place.",
  },

  "ai-automation": {
    slug: "ai-automation",
    engine: "build",
    title: "AI & Automation",
    h1: "Put the boring, repetitive work on autopilot.",
    sub: "WhatsApp bots, AI chat & calling agents, and automated workflows that save hours every day — built with n8n and OpenAI.",
    cta: "Automate Something",
    pains: [
      "Your team spends hours on repetitive, manual tasks.",
      "Leads and messages slip through the cracks after hours.",
      "Data is copied by hand between tools and spreadsheets.",
      "You can't respond to customers fast enough.",
    ],
    features: [
      { title: "WhatsApp & chatbots", body: "Answer FAQs, capture leads and book appointments 24/7 — automatically.", icon: MessageSquare },
      { title: "AI calling agents", body: "Voice agents that qualify, follow up and route calls without a human.", icon: PhoneCall },
      { title: "Workflow automation", body: "Connect your tools with n8n so data flows on its own — no copy-paste.", icon: Workflow },
      { title: "Auto-reports & docs", body: "Generate reports, invoices and summaries automatically on a schedule.", icon: FileStack },
    ],
    deliverables: [
      "Automation audit",
      "Custom workflows (n8n)",
      "WhatsApp / chatbot setup",
      "Tool integrations",
      "Monitoring & alerts",
      "Documentation & support",
    ],
    faqs: [
      { q: "What can be automated?", a: "Lead capture, follow-ups, reminders, reporting, data entry, customer support and more. If it's repetitive, it can probably be automated." },
      { q: "Will it integrate with my tools?", a: "Almost certainly. n8n connects to hundreds of apps — CRMs, sheets, WhatsApp, email, payments and more." },
      { q: "Is it expensive to run?", a: "Most automations cost a few hundred rupees a month to run and save many hours of work. We'll estimate costs upfront." },
    ],
    metaTitle: "AI Automation & Chatbot Development",
    metaDescription:
      "WhatsApp bots, AI chat and calling agents, and workflow automation built with n8n and OpenAI. Save hours every day with Ugrohi.",
  },

  "performance-marketing": {
    slug: "performance-marketing",
    engine: "grow",
    title: "Performance Marketing",
    h1: "Ads that bring in customers, not just clicks.",
    sub: "Google and Meta campaigns managed for ROI — we track every rupee from ad to enquiry to sale.",
    cta: "Get a Free Growth Audit",
    pains: [
      "You're spending on ads but can't tell what's working.",
      "Clicks come in but enquiries and sales don't.",
      "Your cost per lead keeps climbing.",
      "You're not sure which channel deserves more budget.",
    ],
    features: [
      { title: "Google & Meta Ads", body: "Search, display and social campaigns set up and managed for results.", icon: Crosshair },
      { title: "Conversion tracking", body: "We track every step so you know exactly what each rupee earns.", icon: MousePointerClick },
      { title: "Landing pages", body: "High-converting pages built by our Build studio to turn clicks into leads.", icon: MousePointerClick },
      { title: "Always optimising", body: "Continuous A/B testing on creative, audiences and budgets.", icon: LineChart },
    ],
    deliverables: [
      "Campaign strategy",
      "Ad creative & copy",
      "Google & Meta setup",
      "Conversion tracking",
      "A/B testing",
      "Transparent monthly reports",
    ],
    faqs: [
      { q: "What's the minimum ad budget?", a: "We typically recommend starting from a modest monthly budget so we have room to test and find what works. We'll advise based on your goals." },
      { q: "When will I see results?", a: "Early signals show in the first few weeks; meaningful, optimised results usually build over 1–3 months." },
      { q: "Do you report transparently?", a: "Always. You get clear monthly reports showing spend, leads, cost per result and what we're improving next." },
    ],
    metaTitle: "Performance Marketing & PPC Agency",
    metaDescription:
      "Google and Meta ad campaigns managed for ROI. Conversion tracking, landing pages and transparent reporting. Get a free growth audit from Ugrohi.",
  },

  "social-media-management": {
    slug: "social-media-management",
    engine: "grow",
    title: "Social Media Management",
    h1: "A brand people remember — posted consistently.",
    sub: "Content, design and community management that keep you visible and build trust, handled end-to-end.",
    cta: "Get a Free Growth Audit",
    pains: [
      "You know you should post, but never find the time.",
      "Your feed looks inconsistent and off-brand.",
      "Messages and comments go unanswered.",
      "You're posting, but it isn't bringing business.",
    ],
    features: [
      { title: "Content calendar", body: "A planned month of posts so you're never scrambling for ideas.", icon: CalendarDays },
      { title: "Reels & graphics", body: "Scroll-stopping creative designed to fit your brand and platform.", icon: Sparkles },
      { title: "Community management", body: "We reply to comments and DMs so no lead goes cold.", icon: Heart },
      { title: "Monthly analytics", body: "Clear reporting on reach, growth and engagement — and what's next.", icon: Megaphone },
    ],
    deliverables: [
      "Monthly content calendar",
      "Reels, posts & graphics",
      "Captions & hashtags",
      "Community management",
      "Profile optimisation",
      "Monthly performance report",
    ],
    faqs: [
      { q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn and YouTube are most common — we'll recommend the right mix for your audience." },
      { q: "Do you create the content?", a: "Yes — strategy, design, copy and scheduling are all handled by us. We just need your input and brand assets." },
      { q: "How many posts per month?", a: "It depends on your plan, typically 12–20 pieces a month across feed and reels. We'll tailor it to your goals." },
    ],
    metaTitle: "Social Media Management Agency",
    metaDescription:
      "End-to-end social media management — content, reels, graphics and community management that keep your brand visible and trusted.",
  },

  "growth-plans": {
    slug: "growth-plans",
    engine: "grow",
    title: "Growth Plans",
    h1: "A monthly engine of marketing, handled.",
    sub: "Performance marketing, social and creative bundled into one retainer with clear monthly reporting — so growth keeps compounding.",
    cta: "Build My Growth Plan",
    pains: [
      "You want marketing handled, not another thing to manage.",
      "You're hiring different vendors who don't talk to each other.",
      "Your marketing is on-and-off instead of consistent.",
      "You want one team accountable for results.",
    ],
    features: [
      { title: "One retainer, everything", body: "Ads, social and creative under a single monthly plan and point of contact.", icon: RefreshCw },
      { title: "A clear monthly roadmap", body: "You always know what we're doing this month and why.", icon: CalendarDays },
      { title: "ROI-focused reporting", body: "One report tying spend to leads and revenue across channels.", icon: BarChart3 },
      { title: "Scales with you", body: "Start lean and add firepower as results come in.", icon: LineChart },
    ],
    deliverables: [
      "Dedicated growth strategy",
      "Performance marketing",
      "Social media management",
      "Creative & content",
      "Monthly strategy call",
      "Unified reporting",
    ],
    faqs: [
      { q: "What's included in a growth plan?", a: "Typically performance marketing, social media and creative, tailored to your goals and budget — all in one retainer." },
      { q: "Is there a lock-in?", a: "We work in flexible monthly cycles. We'd rather earn your business with results than tie you down." },
      { q: "Can I combine it with a build?", a: "Absolutely — many clients pair a Growth Plan with a website or automation from our Build studio." },
    ],
    metaTitle: "Marketing Growth Plans & Retainers",
    metaDescription:
      "Performance marketing, social media and creative bundled into one monthly retainer with unified, ROI-focused reporting from Ugrohi.",
  },
};

export const serviceSlugs = Object.keys(servicesContent);
