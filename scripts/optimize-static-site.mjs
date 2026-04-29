import fs from "node:fs"
import path from "node:path"

const root = "/Users/michalmikula/Documents/New project 2/patros-web-next"
const publicDir = path.join(root, "public")
const siteUrl = "https://patros-web-next.vercel.app"
const siteName = "Patros Roll s.r.o."
const defaultImage = `${siteUrl}/og-image.jpg`

const pages = {
  "index.html": {
    path: "/",
    title: "Energetické audity a energetické poradenstvo | Patros Roll s.r.o.",
    description:
      "Patros Roll s.r.o. zabezpečuje energetické audity, technické audity, poradenstvo, online monitoring spotreby energií a službu firemného energetika pre firmy a verejné budovy.",
    keywords:
      "energetické audity, energetické poradenstvo, technické audity, monitoring spotreby energií, firemný energetik, Patros Roll, Košice",
    type: "WebPage",
  },
  "o-nas.html": {
    path: "/o-nas",
    title: "O nás | Patros Roll s.r.o.",
    description:
      "Spoznajte tím Patros Roll s.r.o. a náš prístup k energetickým auditom, technickému poradenstvu a energetickému manažmentu pre firmy aj verejné budovy.",
    keywords:
      "o nás Patros Roll, energetickí špecialisti, energetický manažment, energetické služby Košice",
    type: "AboutPage",
  },
  "sluzby.html": {
    path: "/sluzby",
    title: "Služby v oblasti energetiky | Patros Roll s.r.o.",
    description:
      "Prehľad služieb Patros Roll s.r.o.: energetické audity, technické audity, energetické poradenstvo, online monitoring a firemný energetik.",
    keywords:
      "energetické služby, energetické audity, technické audity, energetické poradenstvo, online monitoring, firemný energetik",
    type: "CollectionPage",
  },
  "kariera.html": {
    path: "/kariera",
    title: "Kariéra a spolupráca | Patros Roll s.r.o.",
    description:
      "Zistite možnosti spolupráce s Patros Roll s.r.o. v oblasti energetiky, auditov, technických riešení a obchodných partnerstiev.",
    keywords:
      "kariéra energetika, spolupráca energetické audity, práca Patros Roll, stáž energetika",
    type: "WebPage",
  },
  "kontakt.html": {
    path: "/kontakt",
    title: "Kontakt | Patros Roll s.r.o.",
    description:
      "Kontaktujte Patros Roll s.r.o. pre energetické audity, poradenstvo a monitoring spotreby energií. Nájdete tu kontaktné a fakturačné údaje.",
    keywords:
      "kontakt Patros Roll, energetické audity kontakt, energetické poradenstvo Košice, Patros Roll s.r.o.",
    type: "ContactPage",
  },
  "sluzby/energeticke-audity.html": {
    path: "/sluzby/energeticke-audity",
    title: "Energetické audity | Patros Roll s.r.o.",
    description:
      "Komplexné energetické audity pre firmy, výrobné prevádzky a budovy. Patros Roll s.r.o. identifikuje úspory, riziká aj návratnosť opatrení.",
    keywords:
      "energetické audity, audit energetického hospodárstva, úspora energií, energetický audit firmy",
    type: "Service",
  },
  "sluzby/technicke-audity.html": {
    path: "/sluzby/technicke-audity",
    title: "Technické audity | Patros Roll s.r.o.",
    description:
      "Technické audity zariadení, technológií a budov so zameraním na efektivitu prevádzky, úspory energií a spoľahlivosť riešení.",
    keywords:
      "technické audity, audit technológií, audit budov, prevádzková efektivita",
    type: "Service",
  },
  "sluzby/poradenstvo.html": {
    path: "/sluzby/poradenstvo",
    title: "Energetické poradenstvo | Patros Roll s.r.o.",
    description:
      "Odborné energetické poradenstvo pre firmy a verejné budovy. Návrhy opatrení, technické konzultácie a podpora pri optimalizácii nákladov.",
    keywords:
      "energetické poradenstvo, poradenstvo energia, optimalizácia nákladov energie, energetický konzultant",
    type: "Service",
  },
  "sluzby/online-monitoring.html": {
    path: "/sluzby/online-monitoring",
    title: "Online monitoring spotreby energií | Patros Roll s.r.o.",
    description:
      "Online monitoring spotreby energií s priebežným dohľadom nad dátami, odchýlkami a potenciálom úspor pre prevádzky aj budovy.",
    keywords:
      "online monitoring energií, monitoring spotreby, energetický monitoring, meranie energií",
    type: "Service",
  },
  "sluzby/firemny-energetik.html": {
    path: "/sluzby/firemny-energetik",
    title: "Firemný energetik | Patros Roll s.r.o.",
    description:
      "Externý firemný energetik pre firmy, ktoré chcú mať energetický manažment, reporting a optimalizáciu spotreby pod kontrolou.",
    keywords:
      "firemný energetik, externý energetik, energetický manažment firmy, energetický reporting",
    type: "Service",
  },
  "sluzby/firemný-energetik.html": {
    path: "/sluzby/firemny-energetik",
    title: "Firemný energetik | Patros Roll s.r.o.",
    description:
      "Externý firemný energetik pre firmy, ktoré chcú mať energetický manažment, reporting a optimalizáciu spotreby pod kontrolou.",
    keywords:
      "firemný energetik, externý energetik, energetický manažment firmy, energetický reporting",
    type: "Service",
    noindex: true,
  },
  "sluzby/ea-budov.html": {
    path: "/sluzby/ea-budov",
    title: "Energetické audity budov a verejných budov | Patros Roll s.r.o.",
    description:
      "Energetické audity budov a verejných budov pre vlastníkov, správcov a organizácie s dôrazom na efektivitu, legislatívu a návrh opatrení.",
    keywords:
      "energetický audit budovy, energetický audit verejnej budovy, audit budov, audit správy budov",
    type: "Service",
  },
  "sluzby/ea-budov-a-verejných-budov.html": {
    path: "/sluzby/ea-budov-a-verejnych-budov",
    title: "Energetické audity budov a verejných budov | Patros Roll s.r.o.",
    description:
      "Energetické audity budov a verejných budov vrátane zhodnotenia prevádzky, technológií a odporúčaní pre úsporu energií.",
    keywords:
      "energetické audity budov, verejné budovy audit, audit spotreby energií budovy",
    type: "Service",
  },
}

const rewrites = new Map([
  ["../index.html", "/"],
  ["index.html", "/"],
  ["o-nas.html", "/o-nas"],
  ["sluzby.html", "/sluzby"],
  ["kariera.html", "/kariera"],
  ["kontakt.html", "/kontakt"],
  ["../o-nas.html", "/o-nas"],
  ["../sluzby.html", "/sluzby"],
  ["../kariera.html", "/kariera"],
  ["../kontakt.html", "/kontakt"],
  ["sluzby.html#energeticke-audity", "/sluzby/energeticke-audity"],
  ["sluzby.html#technicke-audity", "/sluzby/technicke-audity"],
  ["sluzby.html#poradenstvo", "/sluzby/poradenstvo"],
  ["sluzby.html#online-monitoring", "/sluzby/online-monitoring"],
  ["sluzby.html#firemny-energetik", "/sluzby/firemny-energetik"],
  ["sluzby.html#ea-budov", "/sluzby/ea-budov"],
  ["../sluzby/energeticke-audity.html", "/sluzby/energeticke-audity"],
  ["../sluzby/technicke-audity.html", "/sluzby/technicke-audity"],
  ["../sluzby/poradenstvo.html", "/sluzby/poradenstvo"],
  ["../sluzby/online-monitoring.html", "/sluzby/online-monitoring"],
  ["../sluzby/firemny-energetik.html", "/sluzby/firemny-energetik"],
  ["../sluzby/ea-budov.html", "/sluzby/ea-budov"],
  ["energeticke-audity.html", "/sluzby/energeticke-audity"],
  ["technicke-audity.html", "/sluzby/technicke-audity"],
  ["poradenstvo.html", "/sluzby/poradenstvo"],
  ["online-monitoring.html", "/sluzby/online-monitoring"],
  ["firemny-energetik.html", "/sluzby/firemny-energetik"],
  ["firemný-energetik.html", "/sluzby/firemny-energetik"],
  ["ea-budov.html", "/sluzby/ea-budov"],
  ["ea-budov-a-verejných-budov.html", "/sluzby/ea-budov-a-verejnych-budov"],
])

function fullUrl(pathname) {
  return pathname === "/" ? siteUrl : `${siteUrl}${pathname}`
}

function createSchema(meta) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo-cropped.png`,
    email: "patros@patros.sk",
    telephone: "+421902241620",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zelená stráň 2042/13",
      addressLocality: "Košice",
      postalCode: "040 14",
      addressCountry: "SK",
    },
  }

  const webpage = {
    "@context": "https://schema.org",
    "@type": meta.type,
    name: meta.title,
    description: meta.description,
    url: fullUrl(meta.path),
    inLanguage: "sk-SK",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  }

  if (meta.type === "Service") {
    webpage.provider = {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    }
    webpage.areaServed = {
      "@type": "Country",
      name: "Slovensko",
    }
    webpage.serviceType = meta.title.replace(` | ${siteName}`, "")
  }

  return [org, webpage]
}

function buildHead(meta) {
  const robots = meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
  const schema = JSON.stringify(createSchema(meta))
  return `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<meta name="keywords" content="${meta.keywords}">
<meta name="author" content="${siteName}">
<meta name="robots" content="${robots}">
<meta name="googlebot" content="${robots}">
<meta name="theme-color" content="#1c3a5c">
<meta name="format-detection" content="telephone=yes">
<link rel="canonical" href="${fullUrl(meta.path)}">
<link rel="icon" href="/logo-cropped.png" type="image/png">
<link rel="apple-touch-icon" href="/logo-cropped.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="/logo-cropped.png" fetchpriority="high">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<meta property="og:locale" content="sk_SK">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${siteName}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:url" content="${fullUrl(meta.path)}">
<meta property="og:image" content="${defaultImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${siteName}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${meta.description}">
<meta name="twitter:image" content="${defaultImage}">
<script type="application/ld+json">${schema}</script>`
}

function processHtml(relativePath) {
  const filePath = path.join(publicDir, relativePath)
  const meta = pages[relativePath]
  let html = fs.readFileSync(filePath, "utf8")

  html = html.replace(/<head>[\s\S]*?<style>/, `${buildHead(meta)}\n<style>`)
  html = html.replace(
    /@import url\("https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:[^"]+"\);\s*/g,
    "",
  )
  html = html.replace(/src="data:image\/[^"]+"/g, 'src="/logo-cropped.png"')
  html = html.replace(/<img src="\/logo-cropped\.png" alt="Patros Roll"/g, '<img src="/logo-cropped.png" alt="Patros Roll" fetchpriority="high" decoding="async"')

  for (const [from, to] of rewrites.entries()) {
    html = html.split(`"${from}"`).join(`"${to}"`)
  }

  fs.writeFileSync(filePath, html)
}

for (const relativePath of Object.keys(pages)) {
  processHtml(relativePath)
}

const sitemapEntries = Object.values(pages)
  .filter((page) => !page.noindex)
  .map(
    (page) => `  <url>\n    <loc>${fullUrl(page.path)}</loc>\n    <changefreq>${page.path === "/" ? "weekly" : "monthly"}</changefreq>\n    <priority>${page.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
  )
  .join("\n")

fs.writeFileSync(
  path.join(publicDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
)

fs.writeFileSync(
  path.join(publicDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)

fs.writeFileSync(
  path.join(publicDir, "manifest.webmanifest"),
  JSON.stringify(
    {
      name: siteName,
      short_name: "Patros Roll",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#1c3a5c",
      icons: [
        {
          src: "/logo-cropped.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    null,
    2,
  ),
)
