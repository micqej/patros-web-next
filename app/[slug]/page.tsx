import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HtmlPage } from "@/components/html-page"
import { siteRoutes, topLevelRouteKeys, type SiteRouteKey } from "@/lib/site"

type Params = {
  slug: string
}

const slugToRouteKey: Record<string, SiteRouteKey> = {
  "o-nas": "about",
  sluzby: "services",
  kariera: "career",
  kontakt: "contact",
}

export function generateStaticParams() {
  return topLevelRouteKeys.map((routeKey) => ({
    slug: siteRoutes[routeKey].path.replace("/", ""),
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

export default async function StaticTopLevelPage({
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
