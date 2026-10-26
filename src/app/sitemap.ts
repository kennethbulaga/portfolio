import type { MetadataRoute } from "next";
import { navItems } from "@/data/portfolio";

const siteUrl = "https://kennethbulaga.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navItems.map((item) => ({
    url: item.href === "/" ? siteUrl : `${siteUrl}${item.href}`,
    lastModified,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
