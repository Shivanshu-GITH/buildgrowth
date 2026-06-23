import { buildServices, growServices, type Engine, type ServiceItem } from "./site";
import {
  Layers,
  MapPin,
  Rocket,
  LifeBuoy,
  Target,
  BarChart3,
  Palette,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface HubContent {
  engine: Engine;
  label: string;
  eyebrow: string;
  title: string;
  highlight: string;
  sub: string;
  cta: { label: string; href: string };
  services: ServiceItem[];
  why: { title: string; body: string; icon: LucideIcon }[];
  metaTitle: string;
  metaDescription: string;
}

export const hubs: Record<Engine, HubContent> = {
  build: {
    engine: "build",
    label: "Build",
    eyebrow: "Build — our tech studio",
    title: "Websites, systems and automation that",
    highlight: "actually work.",
    sub: "From a simple business website to a full school or clinic management system, we build software that's fast, reliable and made for the way you run things.",
    cta: { label: "Get a Build Quote", href: "/contact" },
    services: buildServices,
    why: [
      { title: "Built on a modern stack", body: "React, Next.js and battle-tested tools — fast, secure and easy to extend later.", icon: Layers },
      { title: "Made for your domain", body: "We shape every system around how your industry actually works, not a generic template.", icon: MapPin },
      { title: "Fast, milestone-based delivery", body: "You see progress at every step and always know what's shipping next.", icon: Rocket },
      { title: "Ongoing support", body: "We don't disappear after launch — we maintain, improve and grow what we build.", icon: LifeBuoy },
    ],
    metaTitle: "Build — Web, Software, ERP & AI Development",
    metaDescription:
      "Brandforge's tech studio builds websites, custom ERP and management systems, and AI automation — fast, reliable and made for your domain.",
  },
  grow: {
    engine: "grow",
    label: "Grow",
    eyebrow: "Grow — our marketing studio",
    title: "More reach. More leads.",
    highlight: "More revenue.",
    sub: "We run the ads, manage the content, and build the growth systems that turn your website and brand into a steady stream of customers.",
    cta: { label: "Get a Free Growth Audit", href: "/contact" },
    services: growServices,
    why: [
      { title: "ROI-focused, not vanity metrics", body: "We optimise for enquiries and sales — not likes that don't pay the bills.", icon: Target },
      { title: "Transparent reporting", body: "Clear monthly reports showing exactly where your money went and what it earned.", icon: BarChart3 },
      { title: "Creative + data together", body: "Scroll-stopping creative backed by hard numbers — both in one team.", icon: Palette },
      { title: "We can build what we grow", body: "Need a landing page or automation? Our Build studio is right next door.", icon: Workflow },
    ],
    metaTitle: "Grow — Performance Marketing & Social Media",
    metaDescription:
      "Brandforge's marketing studio runs performance marketing and social media management built for ROI — more reach, more leads, more revenue.",
  },
};
