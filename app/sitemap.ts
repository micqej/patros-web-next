import type { MetadataRoute } from "next"
import { getSiteUrl, siteRoutes } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return Object.values(siteRoutes).map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.7,
  }))
}
