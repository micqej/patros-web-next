import type { MetadataRoute } from "next"
import { SITE_NAME, getSiteUrl } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = getSiteUrl()

  return {
    name: SITE_NAME,
    short_name: "Patros Roll",
    description:
      "Energetické audity, poradenstvo a monitoring spotreby energií od Patros Roll s.r.o.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1c3a5c",
    icons: [
      {
        src: `${siteUrl}/logo-cropped.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
