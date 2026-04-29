import type { Metadata } from "next"
import { HtmlPage } from "@/components/html-page"
import { siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: siteRoutes.home.title,
  description: siteRoutes.home.description,
  alternates: {
    canonical: siteRoutes.home.path,
  },
}

export default function HomePage() {
  return <HtmlPage routeKey="home" />
}
