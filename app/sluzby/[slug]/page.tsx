import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HtmlPage } from "@/components/html-page"
import { serviceRouteKeys, siteRoutes, type SiteRouteKey } from "@/lib/site"

type Params = {
  slug: string
}

const slugToRouteKey: Record<string, SiteRouteKey> = {
  "energeticke-audity": "energeticke-audity",
  "technicke-audity": "technicke-audity",
  poradenstvo: "poradenstvo",
  "online-monitoring": "online-monitoring",
  "firemny-energetik": "firemny-energetik",
  "ea-budov": "ea-budov",
}

export function generateStaticParams() {
  return serviceRouteKeys.map((routeKey) => ({
    slug: siteRoutes[routeKey].path.replace("/sluzby/", ""),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const routeKey = slugToRouteKey[slug]
  if (!routeKey) {
    return {}
  }

  const route = siteRoutes[routeKey]

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: route.path,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const routeKey = slugToRouteKey[slug]
  if (!routeKey) {
    notFound()
  }

  return <HtmlPage routeKey={routeKey} />
}
