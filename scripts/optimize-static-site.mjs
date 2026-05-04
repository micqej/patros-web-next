import fs from "node:fs"
import path from "node:path"

const root = "/Users/michalmikula/Documents/New project 2/patros-web-next"
const publicDir = path.join(root, "public")
const siteUrl = "https://patros-web-next.vercel.app"
const siteName = "Patros Roll s.r.o."
const defaultImage = `${siteUrl}/og-image.jpg`
const faviconFile = "/favicon-patros.png"
const logoFile = "/logo-transparent.png"
const logoUrl = `${siteUrl}${logoFile}`

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
    logo: logoUrl,
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
<link rel="icon" href="${faviconFile}" type="image/png">
<link rel="shortcut icon" href="${faviconFile}" type="image/png">
<link rel="apple-touch-icon" href="${faviconFile}">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="${logoFile}" fetchpriority="high">
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
  html = html.replace(/src="data:image\/[^"]+"/g, `src="${logoFile}"`)
  html = html.replace(
    /<img src="\/(?:logo-cropped|logo-transparent)\.png" alt="Patros Roll"(?: fetchpriority="high" decoding="async")*/g,
    `<img src="${logoFile}" alt="Patros Roll" fetchpriority="high" decoding="async"`,
  )
  html = html.replace(/(<img src="\/(?:logo-cropped|logo-transparent)\.png"[^>]*?) style="height:64px"/g, "$1")
  html = html.split("/logo-cropped.png").join(logoFile)

  for (const [from, to] of rewrites.entries()) {
    html = html.split(`"${from}"`).join(`"${to}"`)
  }

  const replacements = [
    [
      '.nav{position:fixed;top:0;left:0;right:0;z-index:200;height:var(--nav-h);background:var(--white);border-bottom:3px solid var(--green);display:flex;align-items:center;justify-content:space-between;padding:0 52px;gap:20px;box-shadow:0 2px 12px rgba(0,0,0,.06)}',
      '.nav{position:fixed;top:0;left:0;right:0;z-index:200;height:var(--nav-h);background:var(--white);border-bottom:3px solid var(--green);display:flex;align-items:center;justify-content:space-between;padding:0 52px;gap:20px;box-shadow:0 2px 12px rgba(0,0,0,.06);overflow:visible}.nav::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:3px;background:linear-gradient(90deg,rgba(45,122,45,0) 0%,rgba(45,122,45,.22) 18%,rgba(45,122,45,.55) 50%,rgba(45,122,45,.22) 82%,rgba(45,122,45,0) 100%);pointer-events:none}.nav-logo{display:flex;align-items:center;justify-content:flex-start;height:100%;min-width:460px;position:relative;z-index:2}.nav-logo::after{content:"";position:absolute;left:0;bottom:-24px;transform:translateX(348px);width:72px;height:24px;background:radial-gradient(circle,rgba(76,175,80,.22) 0%,rgba(76,175,80,.08) 45%,rgba(76,175,80,0) 75%);filter:blur(5px);pointer-events:none}',
    ],
    [
      '.nav-logo img{height:96px;transition:opacity .2s;display:block;margin-bottom:-3px}',
      '.nav-logo img{height:84px;transition:transform .18s,filter .18s,opacity .2s;display:block;transform:translate(10px,24px);filter:drop-shadow(0 8px 18px rgba(28,58,92,.14))}.nav-logo:hover img{transform:translate(10px,23px);filter:drop-shadow(0 12px 22px rgba(28,58,92,.18))}',
    ],
    [
      '.nav-logo img{height:110px;transition:transform .18s,filter .18s,opacity .2s;display:block;margin-bottom:-18px;filter:drop-shadow(0 8px 18px rgba(28,58,92,.14))}.nav-logo:hover img{transform:translateY(-1px);filter:drop-shadow(0 12px 22px rgba(28,58,92,.18))}',
      '.nav-logo img{height:84px;transition:transform .18s,filter .18s,opacity .2s;display:block;transform:translate(10px,24px);filter:drop-shadow(0 8px 18px rgba(28,58,92,.14))}.nav-logo:hover img{transform:translate(10px,23px);filter:drop-shadow(0 12px 22px rgba(28,58,92,.18))}',
    ],
    [
      '.svc-cell{background:#fff;padding:32px 28px;border-right:1px solid var(--border);border-bottom:1px solid var(--border);display:flex;flex-direction:column;gap:13px;transition:background .18s}',
      '.svc-cell{background:#fff;padding:32px 28px;border-right:1px solid var(--border);border-bottom:1px solid var(--border);display:flex;flex-direction:column;gap:13px;transition:background .18s,transform .18s,box-shadow .18s;position:relative;overflow:hidden;isolation:isolate}.svc-cell::after{content:"";position:absolute;left:50%;bottom:-92px;transform:translateX(-50%) scale(.9);width:210px;height:210px;border-radius:50%;background:radial-gradient(circle,rgba(76,175,80,.16) 0%,rgba(76,175,80,0) 70%);opacity:0;transition:opacity .25s,transform .25s;pointer-events:none;z-index:0}.svc-cell>*{position:relative;z-index:1}',
    ],
    [
      '.svc-cell:hover{background:var(--green-l)}',
      '.svc-cell:hover{background:var(--green-l);transform:translateY(-3px);box-shadow:0 20px 44px rgba(28,58,92,.08)}.svc-cell:hover::after{opacity:1;transform:translateX(-50%) scale(1.08)}',
    ],
    [
      '.svc-vis{display:flex;align-items:center;justify-content:center}',
      '.svc-vis{display:flex;align-items:center;justify-content:center}.svc-vis svg{box-shadow:0 18px 44px rgba(28,58,92,.16);transition:transform .28s,box-shadow .28s}.svc-section:hover .svc-vis svg{transform:translateY(-4px);box-shadow:0 24px 54px rgba(28,58,92,.22)}',
    ],
    [
      'footer{background:var(--navy);padding:36px 52px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;border-top:3px solid var(--green)}',
      'footer{background:var(--navy);padding:36px 112px 36px 52px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;border-top:3px solid var(--green);position:relative}',
    ],
    [
      '.footer-links{display:flex;gap:24px;flex-wrap:wrap}',
      '.footer-links{display:flex;gap:24px;flex-wrap:wrap;max-width:calc(100% - 96px)}',
    ],
    [
      '.btt{position:fixed;bottom:32px;right:32px;width:44px;height:44px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 3px 14px rgba(45,122,45,.4);transition:background .15s;z-index:100}',
      '.btt{position:fixed;bottom:40px;right:24px;width:52px;height:52px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 10px 28px rgba(45,122,45,.38);transition:transform .18s,background .15s,box-shadow .18s;z-index:100;animation:btt-pulse 2.6s ease-in-out infinite}',
    ],
    [
      '.btt:hover{background:var(--navy)}',
      '.btt:hover{background:var(--navy);transform:translateY(-2px)}@keyframes btt-pulse{0%,100%{box-shadow:0 10px 28px rgba(45,122,45,.34)}50%{box-shadow:0 14px 34px rgba(45,122,45,.5)}}',
    ],
    [
      '.nav{padding:0 18px}.nav-logo img{height:72px}',
      '.nav{padding:0 18px}.nav-logo{min-width:auto;justify-content:flex-start}.nav-logo img{height:68px;transform:translate(20px,14px)}.nav-logo::after{bottom:-18px;transform:translateX(176px);width:52px;height:14px}',
    ],
    [
      '.nav{padding:0 18px}.nav-logo img{height:86px;margin-bottom:-12px}.nav-logo::after{bottom:-14px;width:60px;height:18px}',
      '.nav{padding:0 18px}.nav-logo{min-width:auto;justify-content:flex-start}.nav-logo img{height:68px;transform:translate(20px,14px)}.nav-logo::after{bottom:-18px;transform:translateX(176px);width:52px;height:14px}',
    ],
    [
      'footer{padding:24px 20px}',
      'footer{padding:24px 20px}.footer-links{max-width:100%}',
    ],
    [
      '.hero-energy-bg .ep{position:absolute;border-radius:50%;animation:ep-rise linear infinite}',
      '.hero-energy-bg .ep{position:absolute;border-radius:50%;animation:ep-rise linear infinite,ep-drift ease-in-out infinite alternate}',
    ],
    [
      '@keyframes ep-rise{0%{opacity:0;transform:translateY(0) scale(1)}15%{opacity:.5}80%{opacity:.25}100%{opacity:0;transform:translateY(-120px) scale(.2)}}',
      '@keyframes ep-rise{0%{opacity:0;transform:translateY(0) scale(1)}15%{opacity:.55}80%{opacity:.25}100%{opacity:0;transform:translateY(-120px) scale(.2)}}@keyframes ep-drift{0%{margin-left:-4px}100%{margin-left:10px}}',
    ],
    [
      '<a href="/"><img src="/logo-cropped.png" alt="Patros Roll" fetchpriority="high" decoding="async" style="height:64px"></a>',
      `<a href="/" class="nav-logo"><img src="${logoFile}" alt="Patros Roll" fetchpriority="high" decoding="async"></a>`,
    ],
    [
      '<a href="/" class="nav-logo"><img src="/logo-cropped.png" alt="Patros Roll" fetchpriority="high" decoding="async" style="height:64px"></a>',
      `<a href="/" class="nav-logo"><img src="${logoFile}" alt="Patros Roll" fetchpriority="high" decoding="async"></a>`,
    ],
    [
      'class="btn " style="color:#fff;border-color:rgba(255,255,255,.3)"',
      'class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,.3)"',
    ],
    ['href="/sluzby/energeticke-audity"', 'href="/sluzby#energeticke-audity"'],
    ['href="/sluzby/ea-budov"', 'href="/sluzby#ea-budov"'],
    ['href="/sluzby/technicke-audity"', 'href="/sluzby#technicke-audity"'],
    ['href="/sluzby/online-monitoring"', 'href="/sluzby#online-monitoring"'],
    ['href="/sluzby/firemny-energetik"', 'href="/sluzby#firemny-energetik"'],
    ['href="/sluzby/poradenstvo"', 'href="/sluzby#poradenstvo"'],
    ['url:"/sluzby/energeticke-audity"', 'url:"/sluzby#energeticke-audity"'],
    ['url:"/sluzby/ea-budov"', 'url:"/sluzby#ea-budov"'],
    ['url:"/sluzby/technicke-audity"', 'url:"/sluzby#technicke-audity"'],
    ['url:"/sluzby/online-monitoring"', 'url:"/sluzby#online-monitoring"'],
    ['url:"/sluzby/firemny-energetik"', 'url:"/sluzby#firemny-energetik"'],
    ['url:"/sluzby/poradenstvo"', 'url:"/sluzby#poradenstvo"'],
  ]

  for (const [from, to] of replacements) {
    html = html.split(from).join(to)
  }
  html = html.replace(
    /\.nav-logo\{display:flex;align-items:center(?:;justify-content:center)?;height:100%;(?:min-width:\d+px;)?position:relative;z-index:2\}\.nav-logo::after\{content:"";position:absolute;left:50%;bottom:-\d+px;transform:translateX\(-18%\);width:\d+px;height:\d+px;background:radial-gradient\(circle,rgba\(76,175,80,\.?\d+\) 0%,rgba\(76,175,80,\.08\) 45%,rgba\(76,175,80,0\) 75%\);filter:blur\(5px\);pointer-events:none\}/g,
    '.nav-logo{display:flex;align-items:center;justify-content:flex-start;height:100%;min-width:460px;position:relative;z-index:2}.nav-logo::after{content:"";position:absolute;left:0;bottom:-24px;transform:translateX(348px);width:72px;height:24px;background:radial-gradient(circle,rgba(76,175,80,.22) 0%,rgba(76,175,80,.08) 45%,rgba(76,175,80,0) 75%);filter:blur(5px);pointer-events:none}',
  )
  html = html.replace(
    /\.nav-logo img\{height:\d+px;transition:transform \.18s,filter \.18s,opacity \.2s;display:block(?:;margin-bottom:-\d+px)?(?:;transform:translate(?:Y)?\([-0-9px, ]+\))?;filter:drop-shadow\(0 8px 18px rgba\(28,58,92,.14\)\)\}\.nav-logo:hover img\{transform:translate(?:Y)?\([-0-9px, ]+\);filter:drop-shadow\(0 12px 22px rgba\(28,58,92,.18\)\)\}/g,
    '.nav-logo img{height:84px;transition:transform .18s,filter .18s,opacity .2s;display:block;transform:translate(10px,24px);filter:drop-shadow(0 8px 18px rgba(28,58,92,.14))}.nav-logo:hover img{transform:translate(10px,23px);filter:drop-shadow(0 12px 22px rgba(28,58,92,.18))}',
  )
  html = html.replace(
    /\.nav\{padding:0 18px\}(?:\.nav-logo\{min-width:auto(?:;justify-content:flex-start)?\})?\.nav-logo img\{height:\d+px(?:;margin-bottom:-\d+px|;transform:translate(?:Y)?\([-0-9px, ]+\))*\}\.nav-logo::after\{bottom:-\d+px(?:;transform:translateX\(\d+px\))?;width:\d+px;height:\d+px\}/g,
    '.nav{padding:0 18px}.nav-logo{min-width:auto;justify-content:flex-start}.nav-logo img{height:68px;transform:translate(20px,14px)}.nav-logo::after{bottom:-18px;transform:translateX(176px);width:52px;height:14px}',
  )
  html = html.replace(/(\.footer-links\{max-width:100%\}){2,}/g, ".footer-links{max-width:100%}")

  fs.writeFileSync(filePath, html)
}

for (const relativePath of Object.keys(pages)) {
  processHtml(relativePath)
}

const sitemapEntries = Object.values(pages)
  .filter((page) => !page.noindex && page.type !== "Service")
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
          src: logoFile,
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    null,
    2,
  ),
)
