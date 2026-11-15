import type { MetadataRoute } from "next";
import { navItems } from "@/data/portfolio";

const siteUrl = "https://kennethbulaga.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-16";

  return navItems.map((item) => ({
    url: item.href === "/" ? siteUrl : `${siteUrl}${item.href}`,
    lastModified,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
