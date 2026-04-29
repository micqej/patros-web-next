import Script from "next/script"
import { getHtmlPage } from "@/lib/content"
import type { SiteRouteKey } from "@/lib/site"

type HtmlPageProps = {
  routeKey: SiteRouteKey
}

export function HtmlPage({ routeKey }: HtmlPageProps) {
  const page = getHtmlPage(routeKey)

  return (
    <>
      {page.styles.map((style, index) => (
        <style key={`${routeKey}-style-${index}`} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      <main dangerouslySetInnerHTML={{ __html: page.body }} />
      {page.scripts.map((script, index) => (
        <Script
          key={`${routeKey}-script-${index}`}
          id={`${routeKey}-script-${index}`}
          strategy="afterInteractive"
        >
          {script}
        </Script>
      ))}
    </>
  )
}
