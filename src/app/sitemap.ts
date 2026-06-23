import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceSlugs } from "@/lib/services-content";
import { solutionSlugs } from "@/lib/solutions-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const staticRoutes = [
    "",
    "/build",
    "/grow",
    "/solutions",
    "/packages",
    "/work",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const services = serviceSlugs.map((s) => `/services/${s}`);
  const solutions = solutionSlugs.map((s) => `/solutions/${s}`);

  return [...staticRoutes, ...services, ...solutions].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.includes("/") ? 0.7 : 0.8,
  }));
}
