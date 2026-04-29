export const SITE_NAME = "Patros Roll s.r.o."
export const DEFAULT_DESCRIPTION =
  "Energetické audity, poradenstvo a monitoring pre firmy, budovy a verejný sektor od Patros Roll s.r.o."

export const siteRoutes = {
  home: {
    path: "/",
    source: "index.html",
    title: "Domov",
    description:
      "Patros Roll s.r.o. pomáha s energetickými auditmi, technickým poradenstvom a monitoringom spotreby energií.",
  },
  about: {
    path: "/o-nas",
    source: "o-nas.html",
    title: "O nás",
    description:
      "Spoznajte Patros Roll s.r.o., skúsenosti tímu a prístup k energetickému manažmentu pre firmy aj verejné budovy.",
  },
  services: {
    path: "/sluzby",
    source: "sluzby.html",
    title: "Služby",
    description:
      "Prehľad služieb Patros Roll s.r.o. od energetických auditov cez firemného energetika až po online monitoring.",
  },
  career: {
    path: "/kariera",
    source: "kariera.html",
    title: "Kariéra a spolupráca",
    description:
      "Možnosti spolupráce a kariéry v Patros Roll s.r.o. pre odborníkov na energetiku a technické poradenstvo.",
  },
  contact: {
    path: "/kontakt",
    source: "kontakt.html",
    title: "Kontakt",
    description:
      "Kontaktujte Patros Roll s.r.o. pre energetické audity, poradenstvo a monitoring. Nájdete tu kontakty aj fakturačné údaje.",
  },
  "energeticke-audity": {
    path: "/sluzby/energeticke-audity",
    source: "sluzby/energeticke-audity.html",
    title: "Energetické audity",
    description:
      "Energetické audity od Patros Roll s.r.o. pre optimalizáciu prevádzky, nákladov a legislatívnych povinností.",
  },
  "technicke-audity": {
    path: "/sluzby/technicke-audity",
    source: "sluzby/technicke-audity.html",
    title: "Technické audity",
    description:
      "Technické audity budov, technológií a prevádzok so zameraním na efektivitu, bezpečnosť a kvalitu prevádzky.",
  },
  poradenstvo: {
    path: "/sluzby/poradenstvo",
    source: "sluzby/poradenstvo.html",
    title: "Energetické poradenstvo",
    description:
      "Odborné energetické poradenstvo pre firmy, verejný sektor a vlastníkov budov s dôrazom na praktické výsledky.",
  },
  "online-monitoring": {
    path: "/sluzby/online-monitoring",
    source: "sluzby/online-monitoring.html",
    title: "Online monitorovanie spotreby energií",
    description:
      "Online monitoring spotreby energií s prehľadom o dátach, odchýlkach a príležitostiach na úsporu.",
  },
  "firemny-energetik": {
    path: "/sluzby/firemny-energetik",
    source: "sluzby/firemny-energetik.html",
    title: "Firemný energetik",
    description:
      "Služba firemného energetika pre firmy, ktoré chcú mať energetický manažment, reporting a úspory pod kontrolou.",
  },
  "ea-budov": {
    path: "/sluzby/ea-budov",
    source: "sluzby/ea-budov.html",
    title: "EA budov a verejných budov",
    description:
      "Energetické audity budov a verejných budov pre vlastníkov, správcov a organizácie so zákonnými povinnosťami.",
  },
} as const

export type SiteRouteKey = keyof typeof siteRoutes

export const topLevelRouteKeys: SiteRouteKey[] = ["about", "services", "career", "contact"]
export const serviceRouteKeys: SiteRouteKey[] = [
  "energeticke-audity",
  "technicke-audity",
  "poradenstvo",
  "online-monitoring",
  "firemny-energetik",
  "ea-budov",
]

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL

  if (!envUrl) {
    return "http://localhost:3000"
  }

  return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`
}

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString()
}

export function getRouteByPath(pathname: string) {
  return Object.values(siteRoutes).find((route) => route.path === pathname)
}
