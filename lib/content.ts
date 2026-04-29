import { cache } from "react"
import { readFileSync } from "node:fs"
import path from "node:path"
import { siteRoutes, type SiteRouteKey } from "@/lib/site"

type ParsedHtmlPage = {
  title: string
  body: string
  styles: string[]
  scripts: string[]
}

const CONTENT_ROOT = path.join(process.cwd(), "content")

const sourceToRoutePath = new Map<string, string>(
  Object.values(siteRoutes).flatMap((route) => {
    const entries: [string, string][] = [[route.source, route.path]]
    if (route.source === "sluzby/firemny-energetik.html") {
      entries.push(["sluzby/firemný-energetik.html", route.path])
      entries.push(["firemny-energetik.html", route.path])
      entries.push(["firemný-energetik.html", route.path])
    } else if (route.source.startsWith("sluzby/")) {
      entries.push([route.source.replace("sluzby/", ""), route.path])
    }
    return entries
  }),
)

function rewriteInternalLinks(html: string) {
  let output = html

  for (const [source, routePath] of sourceToRoutePath.entries()) {
    output = output.split(`"${source}"`).join(`"${routePath}"`)
    output = output.split(`"./${source}"`).join(`"${routePath}"`)
    output = output.split(`"../${source}"`).join(`"${routePath}"`)
  }

  for (const assetName of ["logo.jpg", "logo-cropped.jpg", "logo-cropped.png"]) {
    output = output.split(`"${assetName}"`).join(`"/${assetName}"`)
    output = output.split(`"./${assetName}"`).join(`"/${assetName}"`)
    output = output.split(`"../${assetName}"`).join(`"/${assetName}"`)
  }

  return output
}

function parseHtmlDocument(relativePath: string): ParsedHtmlPage {
  const fullPath = path.join(CONTENT_ROOT, relativePath)
  const raw = readFileSync(fullPath, "utf8")
  const normalized = rewriteInternalLinks(raw)

  const title = normalized.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() || "Patros Roll s.r.o."
  const styles = [...normalized.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((match) => match[1].trim())
  const scripts = [...normalized.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1].trim())
    .filter(Boolean)

  const bodyMatch = normalized.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const body = bodyMatch ? bodyMatch[1].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").trim() : normalized

  return { title, body, styles, scripts }
}

export const getHtmlPage = cache((routeKey: SiteRouteKey) => {
  return parseHtmlDocument(siteRoutes[routeKey].source)
})
