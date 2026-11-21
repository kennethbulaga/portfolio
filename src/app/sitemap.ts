import type { MetadataRoute } from "next";
import {
  navItems,
  flagshipProjects,
  shippingSoonProjects,
} from "@/data/portfolio";

const siteUrl = "https://kennethbulaga.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-21";

  const staticRoutes: MetadataRoute.Sitemap = navItems.map((item) => ({
    url: item.href === "/" ? siteUrl : `${siteUrl}${item.href}`,
    lastModified,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));

  const systemRoutes: MetadataRoute.Sitemap = [
    ...flagshipProjects,
    ...shippingSoonProjects,
  ].map((p) => ({
    url: `${siteUrl}/systems/${p.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...systemRoutes];
}
