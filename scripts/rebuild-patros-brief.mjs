import fs from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const publicDir = path.join(root, "public")

const site = {
  name: "Patros Roll s.r.o.",
  url: "https://patros-web-next.vercel.app",
  email: "patros@patros.sk",
  phone: "+421 902 241 620",
  phoneHref: "+421902241620",
  address: ["Zelená stráň 2042/13", "040 14 Košice", "Slovenská republika"],
}

const services = [
  {
    key: "energeticke-audity",
    path: "/sluzby/energeticke-audity",
    title: "Energetické audity",
    titleEn: "Energy Audits",
    short: "Ukážeme Vám kde všade viete ušetriť...",
    shortEn: "We will show you where you can save energy and costs...",
    card: "Energetické audity pre firmy, výrobu a prevádzky s dôrazom na reálne úspory a zákonné povinnosti.",
    cardEn: "Energy audits for companies and operations focused on real savings and statutory compliance.",
    icon: "bolt",
    badge: "Audit",
    metaDescription:
      "Energetické audity od Patros Roll s.r.o. pomáhajú identifikovať úspory, splniť legislatívne povinnosti a pripraviť opatrenia s ekonomickou návratnosťou.",
    bodySk: `
      <p>Energetický audit (ďalej iba EA) môžeme zjednodušene považovať za nástroj, ktorý na základe preverenia skutočného stavu technológií a zariadení, stavebných objektov a budov, prístupu zamestnancov a tiež zmluvných či právnych dojednaní, poskytne zákazníkom jasný obraz o možnostiach zlepšenia.</p>
      <h3>Energetický audit zákazníkovi pomáha</h3>
      <ul>
        <li>identifikovať oblasti, kde reálne existuje priestor na úsporu energií a nákladov,</li>
        <li>navrhnúť konkrétne opatrenia s dôrazom na ekonomickú návratnosť, výšku investície a environmentálne prínosy,</li>
        <li>zostaviť viacero súborov opatrení tak, aby ich realizácia bola ekonomicky rentabilná aj v praxi.</li>
      </ul>
      <h3>Kedy je energetický audit potrebný</h3>
      <ul>
        <li>na splnenie zákonnej povinnosti v prípade veľkého podniku podľa zákona č. 321/2014 Z. z.,</li>
        <li>ako súčasť podkladov pri rôznych žiadostiach o dotácie a nenávratné finančné príspevky z fondov EÚ,</li>
        <li>ako východzí dokument pri snahe znížiť náklady na nákup energií.</li>
      </ul>
      <h3>Definícia veľkého podniku</h3>
      <ul>
        <li>nad 250 zamestnancov,</li>
        <li>ročný obrat nad 50 mil. EUR,</li>
        <li>celková ročná súvaha nad 43 mil. EUR,</li>
        <li>alebo ak je viac ako 25 % imania či hlasovacích práv priamo alebo nepriamo kontrolovaných verejnými orgánmi.</li>
      </ul>
      <h3>Doplňujúce fakty o EA</h3>
      <ul>
        <li>ako podklad slúži obhliadka na mieste, prehľad platieb za energie za posledné 2 až 4 roky, dostupná projektová a technická dokumentácia a konzultácie so znalou osobou,</li>
        <li>trvanie vyhotovenia závisí od konkrétneho prípadu, pri časovej tiesni vieme celý proces výrazne prispôsobiť požiadavkám zákazníka,</li>
        <li>výstupom je písomná správa odovzdávaná zadávateľovi spolu s ďalšími formulármi,</li>
        <li>opatrenia formulované v audite majú odporúčací charakter a nepredstavujú obmedzujúci rámec pri realizácii projektov,</li>
        <li>veľké podniky v EÚ majú povinnosť zabezpečiť vykonanie EA aspoň raz za štyri roky alebo audit v rámci systému STN EN ISO 50001 alebo STN EN ISO 14001,</li>
        <li>dozorným orgánom nad vykonávaním EA je Slovenská obchodná inšpekcia.</li>
      </ul>
      <h3>Legislatívny rámec pre EA</h3>
      <ul>
        <li>Zákon NR SR č. 321/2014 Z. z. o energetickej efektívnosti v znení novely č. 4/2019,</li>
        <li>Vyhláška MH SR č. 179/2015 Z. z. o energetickom audite,</li>
        <li>Vyhláška MH SR č. 587/2009 Z. z. o skúške odbornej spôsobilosti energetického audítora.</li>
      </ul>
    `,
    bodyEn: `
      <p>An energy audit is a practical assessment tool that reviews technologies, equipment, buildings, employee behaviour and contractual or legal arrangements to identify opportunities for energy and cost optimisation.</p>
      <h3>What the audit delivers</h3>
      <ul>
        <li>identification of areas with realistic potential for energy and cost savings,</li>
        <li>specific measures with economic payback, required investment and environmental benefits,</li>
        <li>bundled implementation scenarios designed to remain economically viable in practice.</li>
      </ul>
      <h3>When an audit is needed</h3>
      <ul>
        <li>to meet statutory requirements for large enterprises,</li>
        <li>as supporting documentation for grants and EU funding applications,</li>
        <li>as a baseline document for companies that want to reduce energy purchasing costs.</li>
      </ul>
      <h3>Additional facts</h3>
      <ul>
        <li>inputs usually include an on-site inspection, 2 to 4 years of energy cost history, available technical documents and consultations with a knowledgeable representative,</li>
        <li>delivery time depends on the project scope and can be adapted when timing is critical,</li>
        <li>the output is a written report with accompanying forms,</li>
        <li>recommendations remain non-binding and can support broader renovation or efficiency projects.</li>
      </ul>
    `,
    visual: "audit",
  },
  {
    key: "ea-budov",
    path: "/sluzby/ea-budov",
    title: "EA budov a verejných budov",
    titleEn: "Energy Audits for Buildings and Public Buildings",
    short: "Energetický audit pre vlastníkov budov a podklady k obnove verejných budov.",
    shortEn: "Energy audits for building owners and public building renovation planning.",
    card: "Energetické audity budov pre vlastníkov, správcov aj verejný sektor vrátane dotácií a obnovy budov.",
    cardEn: "Energy audits for owners, managers and the public sector including grants and renovation planning.",
    icon: "building",
    badge: "Budovy",
    metaDescription:
      "EA budov a verejných budov od Patros Roll s.r.o. pre vlastníkov budov, obnovu verejných budov a prípravu podkladov k financovaniu.",
    bodySk: `
      <p>Energetický audit je v tomto prípade určený pre vlastníka budovy a potreby jeho rozhodovania sa o možnostiach realizácie opatrení na zlepšenie energetickej hospodárnosti budovy.</p>
      <p>Ďalším účelom môže byť využitie ako podklad pre prípravu projektovej dokumentácie obnovy budovy. Je vhodné uviesť, že EA nenahrádza energetické hodnotenie budovy podľa príslušnej legislatívy.</p>
      <p>V rámci príslušných programových období je EA dôležitou súčasťou podkladov pre podanie žiadosti o financovanie projektov na obnovu verejných budov, teda budov štátnej správy a miestnej samosprávy.</p>
      <h3>Obsah auditu budov</h3>
      <ul>
        <li>posúdenie súčasných tepelno-technických vlastností stavebných konštrukcií budovy,</li>
        <li>posúdenie technických systémov v budove,</li>
        <li>návrh opatrení na významnú alebo hĺbkovú obnovu budovy,</li>
        <li>návrh opatrení na rekonštrukciu alebo modernizáciu technických systémov,</li>
        <li>stanovenie potenciálu úspor energie a ich ekonomické a environmentálne hodnotenie.</li>
      </ul>
    `,
    bodyEn: `
      <p>This type of energy audit is intended for building owners evaluating measures to improve the energy performance of a building.</p>
      <p>It can also be used as a basis for renovation design documentation, while not replacing the formal building energy assessment required by law.</p>
      <p>In public grant schemes, this audit is often an essential supporting document for renovation projects of state and municipal buildings.</p>
      <h3>Typical scope</h3>
      <ul>
        <li>assessment of thermal properties of building structures,</li>
        <li>assessment of technical systems in the building,</li>
        <li>proposal of measures for major or deep renovation,</li>
        <li>modernisation measures for technical systems,</li>
        <li>energy saving potential with economic and environmental evaluation.</li>
      </ul>
    `,
    visual: "building",
  },
  {
    key: "technicke-audity",
    path: "/sluzby/technicke-audity",
    title: "Technické audity",
    titleEn: "Technical Due Diligence",
    short: "Buďte si vedomí čo predávate, a na druhej strane nekupujte mačku vo vreci...",
    shortEn: "Know what you are selling and do not buy blind...",
    card: "Technické due diligence objektov a zariadení s fotodokumentáciou, závadami aj odhadom nákladov.",
    cardEn: "Technical due diligence with photo documentation, defect mapping and cost estimation.",
    icon: "clipboard",
    badge: "Due diligence",
    metaDescription:
      "Technické audity a due diligence od Patros Roll s.r.o. preverujú stav nehnuteľností, technológií aj rizík pred kúpou či predajom.",
    bodySk: `
      <p>Efektívnym spôsobom zameraným na zistenie skutočného stavu objektov či inštalovaného technického zabezpečenia objektov sú tzv. technické audity.</p>
      <p>Výstupom je správa popisujúca stav nehnuteľnosti a jej technických zariadení s uvedením identifikovaných nedostatkov či závad. Zistenia sú podporené fotodokumentáciou a podľa potreby je možné vyčísliť náklady na odstránenie nedostatkov.</p>
      <p>Z pohľadu predávajúceho technický audit uľahčuje povinnosť upozorniť kupujúceho na závady objektu a pomáha chrániť sa pred neoprávnenými reklamáciami. Z pohľadu kupujúceho ide o nástroj, ktorý uľahčuje rozhodovací proces pri kúpe nehnuteľnosti.</p>
      <h3>Oblasti záberu technického auditu</h3>
      <ul>
        <li>kontrola úplnosti stavebnej a technickej dokumentácie,</li>
        <li>kontrola stavu konštrukcie a použitých stavebných materiálov,</li>
        <li>kontrola stavu technického zabezpečenia objektu vrátane vykurovania, chladenia, vetrania a rozvodov,</li>
        <li>kontrola prvkov požiarnej a priemyselnej bezpečnosti,</li>
        <li>kontrola výskytu rizík s negatívnym dopadom na životné prostredie,</li>
        <li>kontrola požiadaviek energetickej certifikácie a ESG/Enviro certifikácií.</li>
      </ul>
    `,
    bodyEn: `
      <p>Technical audits are an effective way to determine the actual condition of buildings and installed technical systems.</p>
      <p>The output is a report describing the condition of the property and its technical systems, including identified defects, supported by photo documentation and, if needed, estimated remediation costs.</p>
      <p>For sellers, the audit helps disclose issues properly. For buyers, it highlights risks that could become unplanned post-acquisition investments.</p>
      <h3>Typical scope</h3>
      <ul>
        <li>review of construction and technical documentation,</li>
        <li>inspection of structures and building materials,</li>
        <li>inspection of heating, cooling, ventilation and utilities,</li>
        <li>fire and industrial safety checks,</li>
        <li>environmental risk checks,</li>
        <li>review of energy certification and ESG/Enviro requirements.</li>
      </ul>
    `,
    visual: "technical",
  },
  {
    key: "online-monitoring",
    path: "/sluzby/online-monitoring",
    title: "Online monitorovanie spotreby energií",
    titleEn: "Online Energy Monitoring",
    short: "Odhaľte plytvanie s energiami nepretržitým monitorovaním výšky ich spotreby...",
    shortEn: "Detect energy waste with continuous consumption monitoring...",
    card: "Monitoring spotreby energií, reporting a vyhľadávanie úspor s platformou Enectiva a reálnymi dátami.",
    cardEn: "Energy monitoring, reporting and savings detection with Enectiva and real data.",
    icon: "monitor",
    badge: "Enectiva",
    metaDescription:
      "Online monitorovanie spotreby energií s aplikáciou Enectiva pomáha odhaľovať plytvanie, automatizovať reporting a motivovať k úsporám.",
    bodySk: `
      <p>Online monitorovanie je považované za jeden z nástrojov energetického manažmentu. V jednoduchosti ide o uzavretý opakujúci sa proces merania spotreby, návrhu vhodných opatrení, ich realizácie v praxi a následného vyhodnotenia reálnych prínosov.</p>
      <p>Dôležitým aspektom pri každom meraní je zaznamenávanie a vyhodnocovanie získaných dát. Už pri počte zopár desiatok meraní sú manuálny odpočet hodnôt a archivácia údajov časovo náročné a nepresné.</p>
      <p>K tomuto účelu je možné veľmi dobre využiť aplikáciu Enectiva. Ide o webový energetický informačný systém s prvkami systému pre manažment nehnuteľností. Zákazníci ju vedia využívať aj ako samostatné serverové riešenie pri vyššom počte budov či objektov.</p>
      <p>Enectiva zobrazuje vývoj spotrieb a porovnáva zastúpenie jednotlivých druhov energií na celkovej spotrebe. To je možné využiť na vytipovanie oblastí, v ktorých budú mať úsporné opatrenia najväčší vplyv na konečné finančné úspory.</p>
      <h3>Hlavné výhody aplikácie Enectiva</h3>
      <ul>
        <li>odhaľuje plytvanie a dokáže vyhľadať úspory 10 až 20 %,</li>
        <li>motivuje zamestnancov k ďalším úsporám prevádzkových nákladov,</li>
        <li>umožňuje automatický zber dát a ich automatické reportovanie,</li>
        <li>zjednodušuje administratívu súvisiacu so zberom energetických dát,</li>
        <li>je kompatibilná s ISO 50001,</li>
        <li>vytvára detailný prehľad nákladov v EUR a umožňuje on-line sledovanie výsledkov úsporných projektov,</li>
        <li>vykonáva zálohovanie dát jedenkrát denne.</li>
      </ul>
      <p>V oblasti online monitorovania spotreby energií úzko spolupracujeme so spoločnosťou ENERFIS S.R.O., ktorá priamo stojí za vývojom aplikácie Enectiva.</p>
    `,
    bodyEn: `
      <p>Online monitoring is one of the core tools of energy management: measure consumption, design actions, implement them and evaluate real outcomes.</p>
      <p>As the number of measured points grows, manual readings and archiving become time-consuming and inaccurate. That is why digital monitoring and reporting matter.</p>
      <p>The Enectiva platform provides a web-based energy information system with real-estate management features and can also be used as a standalone server solution for larger portfolios.</p>
      <h3>Main advantages of Enectiva</h3>
      <ul>
        <li>reveals waste and identifies 10 to 20% saving potential,</li>
        <li>motivates teams to reduce operating costs further,</li>
        <li>automates data collection and reporting,</li>
        <li>reduces administration around energy data,</li>
        <li>supports ISO 50001 workflows,</li>
        <li>creates a detailed cost overview in EUR and tracks actual project savings online,</li>
        <li>backs up all data daily.</li>
      </ul>
    `,
    visual: "monitor",
  },
  {
    key: "firemny-energetik",
    path: "/sluzby/firemny-energetik",
    title: "Firemný energetik",
    titleEn: "Energy Management Outsourcing",
    short: "Prenechajte celú oblasť energií na nás a získaný čas venujte svojmu podnikaniu...",
    shortEn: "Leave the entire energy agenda to us and focus on your business...",
    card: "Externá správa energetického hospodárstva formou paušálnej služby prispôsobenej reálnym potrebám firmy.",
    cardEn: "External energy management delivered as a tailored flat-fee service.",
    icon: "gear",
    badge: "Outsourcing",
    metaDescription:
      "Služba firemného energetika od Patros Roll s.r.o. pokrýva odber energií, reporting, kontroly a optimalizáciu energetického hospodárstva firmy.",
    bodySk: `
      <p>Efektívne nakupovanie, zaobchádzanie a spotrebúvanie energií si v každej firme vyžaduje pravidelnú pozornosť. Popri hlavnom predmete podnikania a každodennej operatíve môže vo firmách ľahko dochádzať k zanedbávaniu energetického hospodárstva ako dôležitej súčasti podnikania.</p>
      <p>Prostredníctvom tejto paušálnej služby zákazníkom ponúkame komplexné pokrytie činností v rámci ich energetického hospodárstva externým spôsobom.</p>
      <h3>Čo služba firemného energetika pokrýva</h3>
      <ul>
        <li>pomoc pri výbere alebo obstarávaní dodávateľov energií,</li>
        <li>pravidelný zber a reportovanie energetických údajov vrátane odpočtov meradiel,</li>
        <li>kontrolu a vyhodnocovanie vyúčtovaní spotreby energií,</li>
        <li>identifikáciu oblastí na možnú úsporu energií,</li>
        <li>optimalizáciu odberného miesta elektrickej energie a zemného plynu,</li>
        <li>zabezpečenie pravidelných kontrol vykurovacích a klimatizačných systémov,</li>
        <li>zabezpečenie pravidelného čistenia a kontroly komínov.</li>
      </ul>
      <p>V prípade potreby majú zákazníci možnosť zostavenia vlastného výberu jednotlivých činností v súlade s ich potrebami.</p>
    `,
    bodyEn: `
      <p>Effective purchasing, handling and use of energy requires regular attention in every company. In everyday operations, energy management is often neglected despite its direct business impact.</p>
      <p>Through this flat-fee service, we provide external coverage of selected or complete energy-management activities.</p>
      <h3>Typical scope</h3>
      <ul>
        <li>support in selecting or procuring energy suppliers,</li>
        <li>regular data collection and reporting including meter readings,</li>
        <li>invoice checks and consumption reconciliation,</li>
        <li>identification of saving opportunities,</li>
        <li>optimisation of electricity and gas supply points,</li>
        <li>coordination of regular heating and cooling inspections,</li>
        <li>coordination of chimney cleaning and checks.</li>
      </ul>
    `,
    visual: "gear",
  },
  {
    key: "poradenstvo",
    path: "/sluzby/poradenstvo",
    title: "Energetické poradenstvo",
    titleEn: "Energy Consulting",
    short: "Obráťte sa na nás pre získanie odborného názoru...",
    shortEn: "Reach out for an expert opinion...",
    card: "Odborné poradenstvo pri energiách, ISO 50001/14001, modernizácii budov a technických systémov.",
    cardEn: "Expert energy consulting for ISO, renovations and technical systems.",
    icon: "idea",
    badge: "Consulting",
    metaDescription:
      "Energetické poradenstvo od Patros Roll s.r.o. zahŕňa efektívne využitie energií, ISO 50001, rekonštrukcie a legislatívne poradenstvo.",
    bodySk: `
      <p>Každý z nás raz za čas rieši záležitosť z oblasti energetiky. Obráťte sa na nás s Vašimi otázkami alebo problémami. Radi Vám pomôžeme nájsť riešenie alebo Vás nasmerujeme konkrétnym smerom.</p>
      <h3>Oblasti energetického poradenstva</h3>
      <ul>
        <li>efektívne využívanie elektrickej energie,</li>
        <li>efektívne spôsoby vykurovania a prípravy teplej vody,</li>
        <li>efektívne spôsoby vetrania a klimatizácie,</li>
        <li>poradenstvo pri rekonštrukciách zariadení, budov a technických systémov budov,</li>
        <li>odborná podpora pri zavádzaní certifikácií ISO 50001 a ISO 14001,</li>
        <li>možnosti aktívneho využívania energetického manažmentu a energetického monitoringu,</li>
        <li>informovanosť a motivácia zamestnancov pri využívaní energií,</li>
        <li>legislatívne poradenstvo v oblasti energetickej efektívnosti pre firmy, vlastníkov a správcov budov.</li>
      </ul>
    `,
    bodyEn: `
      <p>Energy-related questions appear in every organisation sooner or later. Bring us your questions and we will help you find a practical direction.</p>
      <h3>Consulting areas</h3>
      <ul>
        <li>effective use of electricity,</li>
        <li>efficient heating and hot-water preparation,</li>
        <li>effective ventilation and air-conditioning strategies,</li>
        <li>consulting for renovation of equipment, buildings and building systems,</li>
        <li>support for ISO 50001 and ISO 14001 implementation,</li>
        <li>active use of energy management and monitoring,</li>
        <li>employee awareness and motivation around energy use,</li>
        <li>legislative consulting for companies, owners and building managers.</li>
      </ul>
    `,
    visual: "idea",
  },
]

const homepageCards = [
  services[0],
  services[2],
  services[3],
  services[4],
  services[5],
]

const searchPages = [
  { title: "Domov", titleEn: "Home", url: "/", desc: "Úvodná stránka", descEn: "Homepage", icon: "home" },
  { title: "O nás", titleEn: "About us", url: "/o-nas", desc: "Kto sme a ako pracujeme", descEn: "Who we are", icon: "user" },
  { title: "Kariéra a spolupráca", titleEn: "Career & Cooperation", url: "/kariera", desc: "Spolupráca, stáže a partnerstvá", descEn: "Collaboration and internships", icon: "team" },
  { title: "Kontakt", titleEn: "Contact", url: "/kontakt", desc: "Kontakty a formulár", descEn: "Contacts and form", icon: "mail" },
  ...services.map((service) => ({
    title: service.title,
    titleEn: service.titleEn,
    url: service.path,
    desc: service.short,
    descEn: service.shortEn,
    icon: service.icon,
  })),
]

const css = `
:root{
  --navy:#1c3a5c;
  --navy-strong:#132b46;
  --green:#2d7a2d;
  --green-dark:#236023;
  --green-soft:#e8f5e9;
  --green-mist:#f4faf4;
  --border:#dde5ef;
  --text:#243044;
  --muted:#637086;
  --off:#f7fafc;
  --shadow:0 24px 54px rgba(22,45,73,.08);
  --radius:22px;
  --header-h:96px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--text);background:#fff}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
button,input,textarea{font:inherit}
.page{padding-top:var(--header-h)}
.shell{width:min(1180px,calc(100% - 40px));margin:0 auto}
.site-header{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-bottom:3px solid var(--green);box-shadow:0 8px 24px rgba(19,43,70,.06)}
.site-header::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:3px;background:linear-gradient(90deg,rgba(45,122,45,0),rgba(45,122,45,.25),rgba(45,122,45,.6),rgba(45,122,45,.25),rgba(45,122,45,0))}
.nav-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;height:var(--header-h)}
.brand{position:relative;display:flex;align-items:flex-end;min-width:400px;height:100%}
.brand img{height:86px;transform:translate(6px,20px);filter:drop-shadow(0 10px 18px rgba(28,58,92,.14))}
.brand::after{content:"";position:absolute;left:310px;bottom:-22px;width:74px;height:26px;background:radial-gradient(circle,rgba(87,181,87,.25),rgba(87,181,87,0) 72%);filter:blur(6px)}
.nav-links{display:flex;align-items:center;gap:4px;flex-wrap:nowrap}
.nav-link,.home-link,.search-btn,.lang-btn{display:flex;align-items:center;justify-content:center;border-radius:12px;color:var(--muted);transition:.18s ease;padding:10px 14px}
.nav-link:hover,.nav-link.active,.home-link:hover,.home-link.active,.search-btn:hover{background:var(--green-soft);color:var(--green)}
.home-link{padding:10px}
.home-link svg,.search-btn svg{width:20px;height:20px}
.search-btn{border:0;background:transparent;cursor:pointer}
.lang-switch{display:flex;border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-left:6px}
.lang-btn{border:0;background:#fff;padding:9px 14px;cursor:pointer;font-size:12px;font-weight:700;letter-spacing:.08em}
.lang-btn.is-on{background:var(--green);color:#fff}
.search-trigger{position:relative}
.search-panel{position:absolute;top:calc(100% + 12px);right:0;width:min(380px,calc(100vw - 32px));padding:14px;border:1px solid var(--border);border-radius:18px;background:#fff;box-shadow:var(--shadow);opacity:0;transform:translateY(8px);pointer-events:none;transition:.18s ease}
.search-trigger.is-open .search-panel,.search-trigger:hover .search-panel,.search-trigger:focus-within .search-panel{opacity:1;transform:translateY(0);pointer-events:auto}
.search-panel input{width:100%;border:1px solid var(--border);border-radius:12px;padding:12px 14px;font-size:15px;outline:none}
.search-panel input:focus{border-color:#97c79a;box-shadow:0 0 0 4px rgba(45,122,45,.08)}
.search-results{display:grid;gap:8px;margin-top:10px;max-height:280px;overflow:auto}
.search-result{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:start;padding:10px;border-radius:12px}
.search-result:hover{background:var(--green-mist)}
.search-result-icon{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:var(--green-soft);color:var(--green)}
.search-result-title{font-size:14px;font-weight:700;color:var(--navy)}
.search-result-desc{font-size:12px;line-height:1.5;color:var(--muted)}
.hero{padding:58px 0 30px}
.hero-grid{display:grid;grid-template-columns:1.06fr .94fr;gap:0;border-radius:34px;overflow:hidden;border:1px solid var(--border);background:#fff;box-shadow:var(--shadow)}
.hero-copy{position:relative;padding:68px 64px 58px;background:#fff}
.eyebrow{display:flex;align-items:center;gap:12px;margin:0 0 18px;color:var(--green);font-size:13px;font-weight:800;letter-spacing:.24em;text-transform:uppercase}
.eyebrow::before{content:"";width:34px;height:2px;background:var(--green)}
h1{margin:0 0 18px;font-size:clamp(48px,6vw,78px);line-height:.98;letter-spacing:-.06em;color:var(--navy)}
h1 em{font-style:normal;color:var(--green)}
.lead{max-width:640px;font-size:18px;line-height:1.8;color:var(--muted)}
.hero-stats{display:flex;gap:22px;flex-wrap:wrap;margin:34px 0;padding:26px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.hero-stat{min-width:130px}
.hero-stat strong{display:block;font-size:42px;line-height:1;color:var(--green)}
.hero-stat span{display:block;margin-top:8px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:16px;padding:15px 22px;font-weight:700;transition:.18s ease}
.btn-primary{background:var(--green);color:#fff}
.btn-primary:hover{background:var(--green-dark);transform:translateY(-1px)}
.btn-secondary{background:#fff;border:1px solid var(--border);color:var(--navy)}
.btn-secondary:hover{border-color:#b9c9db;background:var(--off)}
.hero-visual{position:relative;overflow:hidden;background:linear-gradient(135deg,#eef6ff 0%,#f8fcf8 58%,#e7f5e8 100%);padding:48px}
.hero-orbs span{position:absolute;display:block;border-radius:999px;filter:blur(4px);opacity:.55;animation:floatUp linear infinite}
.hero-orbs span:nth-child(1){width:9px;height:9px;background:#2d7a2d;left:16%;top:76%;animation-duration:6s}
.hero-orbs span:nth-child(2){width:6px;height:6px;background:#1c3a5c;left:38%;top:84%;animation-duration:7.5s;animation-delay:1s}
.hero-orbs span:nth-child(3){width:11px;height:11px;background:#8ccf8c;left:62%;top:74%;animation-duration:6.2s;animation-delay:2s}
.hero-orbs span:nth-child(4){width:7px;height:7px;background:#a6d8a6;left:80%;top:82%;animation-duration:8s;animation-delay:3s}
@keyframes floatUp{0%{transform:translateY(0) scale(1);opacity:0}15%{opacity:.52}100%{transform:translateY(-140px) scale(.25);opacity:0}}
.device-card{position:relative;width:min(540px,100%);margin:0 auto;background:#11263e;border-radius:28px;padding:20px 20px 26px;box-shadow:0 32px 70px rgba(18,38,63,.24)}
.device-screen{border-radius:20px;background:#163454;padding:20px;color:#fff}
.screen-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px}
.screen-pill{padding:12px;border-radius:14px;background:rgba(255,255,255,.07)}
.screen-pill strong{display:block;font-size:20px}
.screen-pill span{display:block;margin-top:4px;font-size:11px;color:rgba(255,255,255,.6)}
.chart-panel{display:grid;grid-template-columns:1.5fr .9fr;gap:14px}
.bars{display:flex;align-items:flex-end;gap:10px;height:190px;padding:18px;border-radius:18px;background:rgba(255,255,255,.06)}
.bars span{display:block;width:28px;border-radius:16px 16px 6px 6px;background:linear-gradient(180deg,#7cbbff,#214e80)}
.bars span:nth-child(5),.bars span:nth-child(6){background:linear-gradient(180deg,#6bd06f,#2d7a2d)}
.ring{display:flex;align-items:center;justify-content:center;border-radius:18px;background:rgba(255,255,255,.06)}
.ring-core{width:154px;height:154px;border-radius:50%;border:14px solid rgba(255,255,255,.08);border-top-color:#58c458;border-right-color:#58c458;display:grid;place-items:center;transform:rotate(-35deg)}
.ring-core span{transform:rotate(35deg);text-align:center;font-weight:800;font-size:30px}
.ring-core small{display:block;font-size:12px;color:rgba(255,255,255,.6);font-weight:600}
.section{padding:76px 0}
.section-alt{background:var(--off)}
.section-title{margin:0 0 18px;font-size:clamp(32px,4vw,48px);line-height:1.04;letter-spacing:-.04em;color:var(--navy)}
.section-intro{max-width:760px;font-size:18px;line-height:1.8;color:var(--muted)}
.service-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:34px}
.service-card{display:flex;flex-direction:column;gap:14px;padding:24px;border-radius:22px;background:#fff;border:1px solid var(--border);box-shadow:0 10px 28px rgba(19,43,70,.04);transition:.2s ease}
.service-card:hover{transform:translateY(-4px);border-color:#c7d7e8;box-shadow:var(--shadow)}
.service-icon{display:flex;align-items:center;justify-content:center;width:50px;height:50px;border-radius:16px;background:var(--green-soft);color:var(--green)}
.service-card h3{margin:0;font-size:18px;line-height:1.25;color:var(--navy)}
.service-card p{margin:0;font-size:14px;line-height:1.7;color:var(--muted)}
.service-card .more{margin-top:auto;font-size:14px;font-weight:700;color:var(--green)}
.spotlight{display:grid;grid-template-columns:minmax(0,1.05fr) 220px;gap:26px;align-items:stretch;margin-top:22px;padding:26px;border-radius:26px;background:linear-gradient(135deg,#163454 0%,#1c3a5c 100%);color:#fff;box-shadow:var(--shadow)}
.spotlight-copy h3{margin:0 0 10px;font-size:30px;line-height:1.08}
.spotlight-copy p{margin:0 0 16px;font-size:16px;line-height:1.8;color:rgba(255,255,255,.78)}
.spotlight-copy .spotlight-link{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:700;color:#a7e2a7}
.spotlight-meta{display:flex;align-items:center;justify-content:center;border-radius:22px;background:rgba(255,255,255,.08);padding:20px;text-align:center}
.spotlight-meta strong{display:block;font-size:48px;color:#8dd28d}
.spotlight-meta span{display:block;margin-top:10px;color:rgba(255,255,255,.72);font-size:12px;letter-spacing:.14em;text-transform:uppercase}
.feature-split{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:stretch}
.panel{padding:34px;border-radius:28px;background:#fff;border:1px solid var(--border);box-shadow:0 10px 24px rgba(19,43,70,.04)}
.panel h2,.panel h3{margin:0 0 12px;color:var(--navy)}
.panel p{margin:0 0 14px;font-size:16px;line-height:1.85;color:var(--muted)}
.panel ul{margin:0;padding:0;list-style:none}
.panel li{position:relative;padding:0 0 0 22px;margin:0 0 12px;font-size:15px;line-height:1.78;color:var(--muted)}
.panel li::before{content:"";position:absolute;left:0;top:10px;width:8px;height:8px;border-radius:50%;background:var(--green)}
.illustration{display:grid;place-items:center;min-height:100%;padding:28px;border-radius:28px;background:linear-gradient(145deg,#eef6ff 0%,#f7fbff 42%,#eef8ee 100%);border:1px solid var(--border)}
.service-page{padding:54px 0 76px}
.crumbs{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:18px;font-size:13px;color:var(--muted)}
.crumbs span.sep{color:#b6c2d0}
.service-head{display:grid;grid-template-columns:minmax(0,1.08fr) 320px;gap:24px;align-items:start}
.kicker{display:inline-flex;align-items:center;gap:10px;padding:8px 12px;border-radius:999px;background:var(--green-soft);color:var(--green);font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
.service-head h1{font-size:clamp(38px,5vw,62px);margin-top:14px}
.service-short{max-width:760px;font-size:20px;line-height:1.7;color:var(--muted)}
.service-side{display:flex;flex-direction:column;gap:14px}
.mini-card{padding:20px;border-radius:20px;background:#fff;border:1px solid var(--border);box-shadow:0 10px 24px rgba(19,43,70,.04)}
.mini-card strong{display:block;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--green);margin-bottom:8px}
.service-layout{display:grid;grid-template-columns:minmax(0,1.06fr) .94fr;gap:28px;margin-top:26px}
.enectiva-box{display:grid;gap:16px;padding:24px;border-radius:24px;background:#163454;color:#fff;box-shadow:var(--shadow)}
.enectiva-mark{display:inline-flex;align-items:center;justify-content:center;padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.08);font-size:30px;font-weight:800;letter-spacing:.18em}
.enectiva-box p{margin:0;color:rgba(255,255,255,.8)}
.career-visual img{width:100%;height:100%;object-fit:cover;border-radius:24px;box-shadow:var(--shadow)}
.tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
.tag{display:inline-flex;align-items:center;padding:10px 14px;border-radius:999px;background:var(--green-soft);color:var(--navy);font-weight:600;font-size:14px}
.contact-grid{display:grid;grid-template-columns:.94fr 1.06fr;gap:28px}
.contact-stack{display:grid;gap:18px}
.contact-card{padding:26px;border-radius:24px;background:#fff;border:1px solid var(--border);box-shadow:0 10px 24px rgba(19,43,70,.04)}
.contact-card h3{margin:0 0 14px;color:var(--navy)}
.contact-card p{margin:0;line-height:1.85;color:var(--muted)}
.contact-card strong{color:var(--navy)}
.contact-line{display:flex;gap:14px;align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--border)}
.contact-line:last-child{border-bottom:0;padding-bottom:0}
.contact-ico{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:14px;background:var(--green-soft);color:var(--green);flex:0 0 auto}
.form-card form{display:grid;gap:14px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form-card label{display:block;margin-bottom:6px;font-size:13px;font-weight:700;color:var(--navy)}
.field{width:100%;padding:13px 14px;border-radius:14px;border:1px solid var(--border);background:#fff;color:var(--text);outline:none}
.field:focus{border-color:#8ebf92;box-shadow:0 0 0 4px rgba(45,122,45,.08)}
textarea.field{min-height:132px;resize:vertical}
.footer{padding:28px 0 36px;background:var(--navy);border-top:3px solid var(--green)}
.footer-inner{display:flex;justify-content:space-between;gap:20px;align-items:center;flex-wrap:wrap}
.footer p,.footer a{color:rgba(255,255,255,.7);font-size:14px}
.footer-links{display:flex;gap:18px;flex-wrap:wrap}
.to-top{position:fixed;right:24px;bottom:24px;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:var(--green);color:#fff;box-shadow:0 16px 32px rgba(45,122,45,.3)}
.fade{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
.fade.in{opacity:1;transform:none}
@media (max-width:1120px){
  .service-grid{grid-template-columns:repeat(2,1fr)}
  .hero-grid,.feature-split,.service-layout,.contact-grid,.service-head{grid-template-columns:1fr}
  .spotlight{grid-template-columns:1fr}
}
@media (max-width:860px){
  .nav-inner{gap:16px}
  .brand{min-width:auto}
  .brand img{height:70px;transform:translate(0,14px)}
  .brand::after{left:190px;bottom:-14px;width:54px;height:16px}
  .nav-links{gap:0}
  .nav-link{padding:8px 10px;font-size:14px}
  .hero-copy{padding:42px 24px}
  .hero-visual{padding:24px}
  .shell{width:min(1180px,calc(100% - 24px))}
}
@media (max-width:720px){
  .nav-inner{height:auto;padding:12px 0;flex-direction:column;align-items:stretch}
  .brand{height:74px}
  .nav-links{justify-content:space-between;flex-wrap:wrap}
  .service-grid{grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
}
`

const js = `
const SITE_DATA = {
  pages: ${JSON.stringify(searchPages)},
  spotlight: ${JSON.stringify(
    services.map((service, index) => ({
      index: index + 1,
      title: service.title,
      titleEn: service.titleEn,
      short: service.short,
      shortEn: service.shortEn,
      url: service.path,
    })),
  )},
}

function icon(name){
  const map = {
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
    team:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>',
    clipboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M9 3a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V5a2 2 0 0 0-2-2"/><path d="M9 12l2 2 4-4"/></svg>',
    monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M2 20h20"/></svg>',
    gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-.33-1 1.65 1.65 0 0 0-1-.6 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 0-1-.33H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1-.33 1.65 1.65 0 0 0 .6-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-.6 1.65 1.65 0 0 0 .33-1V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 .33 1 1.65 1.65 0 0 0 1 .6 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.26.3.46.65.6 1 .14.36.2.74.2 1.13"/></svg>',
    idea:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.74c.55.39 1 1.08 1 1.76V18h6v-1.5c0-.68.45-1.37 1-1.76A7 7 0 0 0 12 2z"/></svg>',
  }
  return map[name] || map.idea
}

function setLang(lang){
  localStorage.setItem('patros-lang', lang)
  document.documentElement.lang = lang
  document.querySelectorAll('[data-sk][data-en]').forEach((el) => {
    el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.sk
  })
  document.querySelectorAll('[data-ph-sk][data-ph-en]').forEach((el) => {
    el.placeholder = lang === 'en' ? el.dataset.phEn : el.dataset.phSk
  })
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-on', btn.dataset.lang === lang)
  })
  updateSearchResults(document.querySelector('[data-search-input]')?.value || '')
  updateSpotlight(spotlightIndex)
}

function activeLang(){
  return localStorage.getItem('patros-lang') || 'sk'
}

function searchLabel(page){
  const lang = activeLang()
  return {
    title: lang === 'en' ? page.titleEn : page.title,
    desc: lang === 'en' ? page.descEn : page.desc,
  }
}

function updateSearchResults(query){
  const box = document.querySelector('[data-search-results]')
  if(!box) return
  const q = query.trim().toLowerCase()
  const results = SITE_DATA.pages.filter((page) => {
    const label = searchLabel(page)
    return !q || label.title.toLowerCase().includes(q) || label.desc.toLowerCase().includes(q)
  }).slice(0, 8)
  box.innerHTML = results.map((page) => {
    const label = searchLabel(page)
    return '<a class="search-result" href="' + page.url + '">' +
      '<div class="search-result-icon">' + icon(page.icon) + '</div>' +
      '<div><div class="search-result-title">' + label.title + '</div><div class="search-result-desc">' + label.desc + '</div></div>' +
    '</a>'
  }).join('')
}

let spotlightIndex = 0
function updateSpotlight(index){
  const host = document.querySelector('[data-spotlight]')
  if(!host) return
  const item = SITE_DATA.spotlight[index]
  const lang = activeLang()
  host.querySelector('[data-spotlight-title]').textContent = lang === 'en' ? item.titleEn : item.title
  host.querySelector('[data-spotlight-text]').textContent = lang === 'en' ? item.shortEn : item.short
  host.querySelector('[data-spotlight-link]').setAttribute('href', item.url)
  host.querySelector('[data-spotlight-num]').textContent = String(item.index).padStart(2, '0')
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(activeLang())
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang))
  })
  const input = document.querySelector('[data-search-input]')
  if (input) {
    updateSearchResults('')
    input.addEventListener('input', () => updateSearchResults(input.value))
  }
  document.querySelectorAll('.search-trigger').forEach((node) => {
    node.addEventListener('mouseenter', () => node.classList.add('is-open'))
    node.addEventListener('mouseleave', () => node.classList.remove('is-open'))
  })
  if(document.querySelector('[data-spotlight]')){
    updateSpotlight(spotlightIndex)
    setInterval(() => {
      spotlightIndex = (spotlightIndex + 1) % SITE_DATA.spotlight.length
      updateSpotlight(spotlightIndex)
    }, 4000)
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) entry.target.classList.add('in')
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.fade').forEach((el) => observer.observe(el))
})
`

const baseMeta = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="author" content="${site.name}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="googlebot" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#1c3a5c">
<meta name="format-detection" content="telephone=yes">
<link rel="icon" href="/favicon-patros.png" type="image/png">
<link rel="shortcut icon" href="/favicon-patros.png" type="image/png">
<link rel="apple-touch-icon" href="/favicon-patros.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="/logo-transparent.png" fetchpriority="high">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/site.css">
`

function meta({ title, description, pathName, type = "website", schema }) {
  const absolute = `${site.url}${pathName}`
  return `
<title>${title}</title>
<meta name="description" content="${escapeAttr(description)}">
<link rel="canonical" href="${absolute}">
<meta property="og:locale" content="sk_SK">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(description)}">
<meta property="og:url" content="${absolute}">
<meta property="og:image" content="${site.url}/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(title)}">
<meta name="twitter:description" content="${escapeAttr(description)}">
<meta name="twitter:image" content="${site.url}/og-image.jpg">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
`
}

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;")
}

function layout({ title, description, pathName, schema, active, body, type }) {
  return `<!DOCTYPE html>
<html lang="sk">
<head>
${baseMeta}
${meta({ title, description, pathName, schema, type })}
</head>
<body class="page">
  ${header(active)}
  ${body}
  ${footer()}
  <a class="to-top" href="#top" aria-label="Späť hore">${inlineIcon("up")}</a>
  <script src="/site.js" defer></script>
</body>
</html>`
}

function header(active) {
  return `
  <header class="site-header" id="top">
    <div class="shell nav-inner">
      <a class="brand" href="/"><img src="/logo-transparent.png" alt="Patros Roll"></a>
      <nav class="nav-links" aria-label="Hlavná navigácia">
        <a class="home-link ${active === "home" ? "active" : ""}" href="/" aria-label="Domov">${inlineIcon("home")}</a>
        <a class="nav-link ${active === "about" ? "active" : ""}" href="/o-nas" data-sk="O nás" data-en="About us">O nás</a>
        <a class="nav-link ${active === "career" ? "active" : ""}" href="/kariera" data-sk="Kariéra a spolupráca" data-en="Career &amp; Cooperation">Kariéra a spolupráca</a>
        <a class="nav-link ${active === "contact" ? "active" : ""}" href="/kontakt" data-sk="Kontakt" data-en="Contact">Kontakt</a>
        <div class="search-trigger">
          <button class="search-btn" type="button" aria-label="Hľadať">${inlineIcon("search")}</button>
          <div class="search-panel">
            <input type="text" data-search-input data-ph-sk="Hľadajte na stránke..." data-ph-en="Search the site..." placeholder="Hľadajte na stránke...">
            <div class="search-results" data-search-results></div>
          </div>
        </div>
        <div class="lang-switch" aria-label="Prepínač jazyka">
          <button class="lang-btn" data-lang="sk" type="button">SK</button>
          <button class="lang-btn" data-lang="en" type="button">EN</button>
        </div>
      </nav>
    </div>
  </header>`
}

function footer() {
  return `
  <footer class="footer">
    <div class="shell footer-inner">
      <p>© 2026 ${site.name}</p>
      <div class="footer-links">
        <a href="tel:${site.phoneHref}">${site.phone}</a>
        <a href="mailto:${site.email}">${site.email}</a>
        <a href="/kontakt" data-sk="Kontaktný formulár" data-en="Contact form">Kontaktný formulár</a>
      </div>
    </div>
  </footer>`
}

function inlineIcon(name) {
  const icons = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  }
  return icons[name]
}

function serviceIcon(name) {
  return `<div class="service-icon">${jsIcon(name)}</div>`
}

function jsIcon(name) {
  const map = {
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M9 3a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V5a2 2 0 0 0-2-2"/><path d="M9 12l2 2 4-4"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M2 20h20"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-.33-1 1.65 1.65 0 0 0-1-.6 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 0-1-.33H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1-.33 1.65 1.65 0 0 0 .6-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-.6 1.65 1.65 0 0 0 .33-1V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 .33 1 1.65 1.65 0 0 0 1 .6 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.26.3.46.65.6 1 .14.36.2.74.2 1.13"/></svg>',
    idea: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.74c.55.39 1 1.08 1 1.76V18h6v-1.5c0-.68.45-1.37 1-1.76A7 7 0 0 0 12 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  }
  return map[name] || map.idea
}

function renderVisual(type) {
  if (type === "building") {
    return `<div class="illustration fade"><svg viewBox="0 0 480 420" width="100%" height="100%" aria-hidden="true"><defs><linearGradient id="bgBuild" x1="0" x2="1"><stop offset="0%" stop-color="#f4fbff"/><stop offset="100%" stop-color="#e8f5e9"/></linearGradient><linearGradient id="build" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#2c5888"/><stop offset="100%" stop-color="#173454"/></linearGradient></defs><rect width="480" height="420" rx="28" fill="url(#bgBuild)"/><rect x="86" y="90" width="122" height="246" rx="10" fill="url(#build)"/><rect x="224" y="52" width="170" height="284" rx="12" fill="#1c3a5c"/><rect x="116" y="122" width="20" height="20" fill="#8bd28b"/><rect x="150" y="122" width="20" height="20" fill="#8bd28b"/><rect x="116" y="158" width="20" height="20" fill="#8bd28b"/><rect x="150" y="158" width="20" height="20" fill="#8bd28b"/><rect x="116" y="194" width="20" height="20" fill="#8bd28b"/><rect x="150" y="194" width="20" height="20" fill="#8bd28b"/><rect x="256" y="92" width="26" height="26" fill="#8bd28b"/><rect x="302" y="92" width="26" height="26" fill="#8bd28b"/><rect x="348" y="92" width="26" height="26" fill="#8bd28b"/><rect x="256" y="138" width="26" height="26" fill="#8bd28b"/><rect x="302" y="138" width="26" height="26" fill="#8bd28b"/><rect x="348" y="138" width="26" height="26" fill="#8bd28b"/><rect x="256" y="184" width="26" height="26" fill="#8bd28b"/><rect x="302" y="184" width="26" height="26" fill="#8bd28b"/><rect x="348" y="184" width="26" height="26" fill="#8bd28b"/><path d="M70 346h340" stroke="#2d7a2d" stroke-width="8" stroke-linecap="round"/><circle cx="390" cy="94" r="28" fill="#e8f5e9" stroke="#2d7a2d" stroke-width="8"/><path d="M390 76v18h18" stroke="#2d7a2d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`
  }
  if (type === "monitor") {
    return `<div class="illustration fade"><div class="enectiva-box"><div class="enectiva-mark">ENECTIVA</div><p data-sk="Odhaľujeme plytvanie, motivujeme k úsporám." data-en="We reveal waste and motivate savings.">Odhaľujeme plytvanie, motivujeme k úsporám.</p><a class="btn btn-secondary" href="https://www.enectiva.cz" target="_blank" rel="noreferrer" data-sk="Navštíviť enectiva.cz" data-en="Visit enectiva.cz">Navštíviť enectiva.cz</a></div><svg viewBox="0 0 480 300" width="100%" aria-hidden="true"><rect x="38" y="28" width="404" height="210" rx="22" fill="#132b46"/><rect x="58" y="48" width="364" height="170" rx="16" fill="#163454"/><rect x="74" y="70" width="98" height="48" rx="12" fill="rgba(255,255,255,.08)"/><rect x="188" y="70" width="98" height="48" rx="12" fill="rgba(255,255,255,.08)"/><rect x="302" y="70" width="98" height="48" rx="12" fill="rgba(45,122,45,.18)"/><rect x="74" y="140" width="202" height="54" rx="14" fill="rgba(255,255,255,.05)"/><rect x="92" y="168" width="18" height="16" rx="5" fill="#7dbef9"/><rect x="122" y="156" width="18" height="28" rx="5" fill="#7dbef9"/><rect x="152" y="146" width="18" height="38" rx="5" fill="#58c458"/><rect x="182" y="138" width="18" height="46" rx="5" fill="#58c458"/><circle cx="344" cy="166" r="42" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="12"/><path d="M344 124a42 42 0 1 1-34.4 17.9" fill="none" stroke="#58c458" stroke-width="12" stroke-linecap="round"/><text x="344" y="170" text-anchor="middle" font-size="22" font-weight="800" fill="#ffffff">20%</text><rect x="130" y="250" width="220" height="16" rx="8" fill="#c5ccd5"/></svg></div>`
  }
  if (type === "technical") {
    return `<div class="illustration fade"><svg viewBox="0 0 480 420" width="100%" height="100%" aria-hidden="true"><rect width="480" height="420" rx="30" fill="#f4faf4"/><rect x="68" y="82" width="344" height="236" rx="24" fill="#163454"/><rect x="94" y="106" width="292" height="188" rx="18" fill="#eff5fb"/><path d="M146 160l44 44 88-88" fill="none" stroke="#2d7a2d" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><rect x="132" y="242" width="168" height="16" rx="8" fill="#cbd7e4"/><rect x="132" y="272" width="104" height="16" rx="8" fill="#d9e3ed"/><circle cx="352" cy="138" r="34" fill="#e8f5e9"/><path d="M368 155l18 18" stroke="#1c3a5c" stroke-width="10" stroke-linecap="round"/><circle cx="352" cy="138" r="18" fill="none" stroke="#1c3a5c" stroke-width="8"/></svg></div>`
  }
  if (type === "gear") {
    return `<div class="illustration fade"><svg viewBox="0 0 480 420" width="100%" height="100%" aria-hidden="true"><rect width="480" height="420" rx="30" fill="#f6fbff"/><circle cx="176" cy="210" r="94" fill="#1c3a5c"/><circle cx="176" cy="210" r="44" fill="#f6fbff"/><circle cx="314" cy="166" r="58" fill="#2d7a2d"/><circle cx="314" cy="166" r="28" fill="#f6fbff"/><path d="M124 292h208" stroke="#2d7a2d" stroke-width="16" stroke-linecap="round"/><path d="M124 332h148" stroke="#1c3a5c" stroke-width="16" stroke-linecap="round"/><rect x="246" y="250" width="116" height="66" rx="20" fill="#163454"/><rect x="266" y="272" width="74" height="12" rx="6" fill="#e8f5e9"/></svg></div>`
  }
  if (type === "idea") {
    return `<div class="illustration fade"><svg viewBox="0 0 480 420" width="100%" height="100%" aria-hidden="true"><rect width="480" height="420" rx="30" fill="#f9fcff"/><circle cx="240" cy="166" r="90" fill="#e8f5e9"/><path d="M214 134c8-22 42-28 58-6 14 18 7 39-10 52-13 10-19 18-20 34" fill="none" stroke="#1c3a5c" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><path d="M224 274h40" stroke="#2d7a2d" stroke-width="16" stroke-linecap="round"/><path d="M216 312h56" stroke="#2d7a2d" stroke-width="16" stroke-linecap="round"/><path d="M136 120l-30-22M346 120l30-22M240 52V18M116 220H82M398 220h-34" stroke="#8ac98a" stroke-width="12" stroke-linecap="round"/></svg></div>`
  }
  return `<div class="illustration fade"><svg viewBox="0 0 480 420" width="100%" height="100%" aria-hidden="true"><rect width="480" height="420" rx="30" fill="#f8fcff"/><circle cx="240" cy="210" r="120" fill="#1c3a5c"/><circle cx="240" cy="210" r="60" fill="#e8f5e9"/><polygon points="250 102 150 222 232 222 218 320 328 192 246 192" fill="#58c458"/></svg></div>`
}

function serviceOverviewCard(service) {
  return `<article class="service-card fade">
    ${serviceIcon(service.icon)}
    <h3 data-sk="${service.title}" data-en="${service.titleEn}">${service.title}</h3>
    <p data-sk="${service.card}" data-en="${service.cardEn}">${service.card}</p>
    <a class="more" href="${service.path}" data-sk="Ďalšie informácie" data-en="More information">Ďalšie informácie</a>
  </article>`
}

function homepage() {
  return layout({
    active: "home",
    pathName: "",
    title: "Energetická efektívnosť a inžiniering | Patros Roll s.r.o.",
    description:
      "Patros Roll s.r.o. pomáha firmám šetriť energie aj náklady prostredníctvom auditov, monitoringu, poradenstva a externého energetického manažmentu.",
    schema: [
      orgSchema(),
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Energetická efektívnosť a inžiniering | Patros Roll s.r.o.",
        url: site.url,
        description:
          "Patros Roll s.r.o. pomáha firmám šetriť energie aj náklady prostredníctvom auditov, monitoringu, poradenstva a externého energetického manažmentu.",
      },
    ],
    body: `
      <main>
        <section class="hero">
          <div class="shell hero-grid">
            <div class="hero-copy">
              <p class="eyebrow" data-sk="Energetická efektívnosť · Inžiniering · SK+CZ" data-en="Energy Efficiency · Engineering · SK+CZ">Energetická efektívnosť · Inžiniering · SK+CZ</p>
              <h1 data-sk="Pomáhame firmám<br>šetriť <em>energie</em><br>aj náklady" data-en="We help companies<br>save <em>energy</em><br>and costs">Pomáhame firmám<br>šetriť <em>energie</em><br>aj náklady</h1>
              <p class="lead" data-sk="Energetická efektívnosť a inžinierske činnosti na slovenskom a českom trhu od roku 2013." data-en="Energy efficiency and engineering services on the Slovak and Czech market since 2013.">Energetická efektívnosť a inžinierske činnosti na slovenskom a českom trhu od roku 2013.</p>
              <div class="hero-stats">
                <div class="hero-stat"><strong>2013</strong><span data-sk="Na trhu od" data-en="On market since">Na trhu od</span></div>
                <div class="hero-stat"><strong>10–20%</strong><span data-sk="Úspory energií" data-en="Energy savings">Úspory energií</span></div>
                <div class="hero-stat"><strong>SK+CZ</strong><span data-sk="Trhy" data-en="Markets">Trhy</span></div>
              </div>
              <div class="hero-actions">
                <a class="btn btn-primary" href="/sluzby" data-sk="Prehľad služieb" data-en="Service overview">Prehľad služieb</a>
                <a class="btn btn-secondary" href="/kontakt" data-sk="Kontaktujte nás" data-en="Contact us">Kontaktujte nás</a>
              </div>
            </div>
            <div class="hero-visual">
              <div class="hero-orbs" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
              <div class="device-card">
                <div class="device-screen">
                  <div class="screen-row">
                    <div class="screen-pill"><strong>-18%</strong><span data-sk="spotreba" data-en="consumption">spotreba</span></div>
                    <div class="screen-pill"><strong>€ 12 400</strong><span data-sk="ročná úspora" data-en="annual savings">ročná úspora</span></div>
                    <div class="screen-pill"><strong>ISO 50001</strong><span>workflow</span></div>
                    <div class="screen-pill"><strong data-sk="Dnes" data-en="Today">Dnes</strong><span data-sk="nový report" data-en="new report">nový report</span></div>
                  </div>
                  <div class="chart-panel">
                    <div class="bars">
                      <span style="height:58px"></span><span style="height:74px"></span><span style="height:96px"></span><span style="height:122px"></span><span style="height:146px"></span><span style="height:136px"></span><span style="height:118px"></span>
                    </div>
                    <div class="ring"><div class="ring-core"><span>20%<small data-sk="potenciál úspor" data-en="saving potential">potenciál úspor</small></span></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-alt">
          <div class="shell">
            <p class="eyebrow fade" data-sk="Homepage" data-en="Homepage">Homepage</p>
            <h2 class="section-title fade" data-sk="Ponúkané služby" data-en="Offered services">Ponúkané služby</h2>
            <p class="section-intro fade" data-sk="Na homepage je podľa briefu zobrazených 5 ikoniek služieb. Pod nimi sa v 4-sekundových intervaloch presúva názov služby s krátkym textom a odkazom na detail." data-en="The homepage shows five featured service icons. Below them, the service name, short text and detail link rotate every four seconds.">Na homepage je podľa briefu zobrazených 5 ikoniek služieb. Pod nimi sa v 4-sekundových intervaloch presúva názov služby s krátkym textom a odkazom na detail.</p>
            <div class="service-grid">
              ${homepageCards.map(serviceOverviewCard).join("\n")}
            </div>
            <div class="spotlight fade" data-spotlight>
              <div class="spotlight-copy">
                <h3 data-spotlight-title></h3>
                <p data-spotlight-text></p>
                <a class="spotlight-link" data-spotlight-link href="/sluzby" data-sk="Ďalšie informácie" data-en="More information">Ďalšie informácie</a>
              </div>
              <div class="spotlight-meta"><div><strong data-spotlight-num>01</strong><span data-sk="Rotácia každé 4 sekundy" data-en="Rotation every 4 seconds">Rotácia každé 4 sekundy</span></div></div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="shell feature-split">
            <div class="panel fade">
              <p class="eyebrow" data-sk="O nás" data-en="About us">O nás</p>
              <h2 class="section-title" style="font-size:40px" data-sk="Stabilný partner v energetike" data-en="A stable energy partner">Stabilný partner v energetike</h2>
              <p data-sk="Vitajte na webovej stránke spoločnosti Patros Roll s.r.o. V oblasti energetiky na slovenskom a českom trhu aktívne pôsobíme od roku 2013. V tomto smere je našou nosnou činnosťou energetická efektívnosť a inžinierske činnosti, ktoré s ňou priamo súvisia." data-en="Welcome to the website of Patros Roll s.r.o. We have been actively operating in energy on the Slovak and Czech market since 2013, with a strong focus on energy efficiency and related engineering activities.">Vitajte na webovej stránke spoločnosti Patros Roll s.r.o. V oblasti energetiky na slovenskom a českom trhu aktívne pôsobíme od roku 2013. V tomto smere je našou nosnou činnosťou energetická efektívnosť a inžinierske činnosti, ktoré s ňou priamo súvisia.</p>
              <p data-sk="Energetika je dôležitou súčasťou fungovania každého štátu aj väčšiny podnikateľských činností. Zodpovedný prístup k efektívnemu využívaniu energií výrazne podporuje ekonomickú výkonnosť a konkurencieschopnosť. Preto sa prostredníctvom našich služieb snažíme dopomôcť zákazníkom k dosahovaniu ich plánov a cieľov." data-en="Energy is an essential part of every state's functioning and most business activities. A responsible approach to efficient energy use directly supports economic performance and competitiveness, which is why our services are designed to help clients reach their plans and goals.">Energetika je dôležitou súčasťou fungovania každého štátu aj väčšiny podnikateľských činností. Zodpovedný prístup k efektívnemu využívaniu energií výrazne podporuje ekonomickú výkonnosť a konkurencieschopnosť. Preto sa prostredníctvom našich služieb snažíme dopomôcť zákazníkom k dosahovaniu ich plánov a cieľov.</p>
              <a class="btn btn-secondary" href="/o-nas" data-sk="Viac o spoločnosti" data-en="More about us">Viac o spoločnosti</a>
            </div>
            ${renderVisual("building")}
          </div>
        </section>
      </main>
    `,
  })
}

function servicesPage() {
  return layout({
    active: "",
    pathName: "/sluzby",
    title: "Služby v oblasti energetiky | Patros Roll s.r.o.",
    description:
      "Prehľad služieb Patros Roll s.r.o. vrátane energetických auditov, technických auditov, monitoringu, firemného energetika a poradenstva.",
    schema: [
      orgSchema(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Služby v oblasti energetiky | Patros Roll s.r.o.",
        url: `${site.url}/sluzby`,
        description:
          "Prehľad služieb Patros Roll s.r.o. vrátane energetických auditov, technických auditov, monitoringu, firemného energetika a poradenstva.",
      },
    ],
    body: `
      <main class="section">
        <div class="shell">
          <div class="crumbs"><a href="/" data-sk="Domov" data-en="Home">Domov</a><span class="sep">/</span><span data-sk="Služby" data-en="Services">Služby</span></div>
          <p class="eyebrow fade" data-sk="Popisy služieb" data-en="Service descriptions">Popisy služieb</p>
          <h1 class="fade" style="font-size:clamp(40px,5vw,62px)" data-sk="Služby v oblasti energetiky" data-en="Energy services">Služby v oblasti energetiky</h1>
          <p class="section-intro fade" data-sk="Tu sú všetky samostatné detailné stránky služieb, ktoré brief požadoval. Homepage ostáva kompaktnejšia, ale každý servis má svoj vlastný plný obsah." data-en="Here are all standalone service detail pages requested in the brief. The homepage stays compact, while each service has its own full detail page.">Tu sú všetky samostatné detailné stránky služieb, ktoré brief požadoval. Homepage ostáva kompaktnejšia, ale každý servis má svoj vlastný plný obsah.</p>
          <div class="service-grid">
            ${services.map(serviceOverviewCard).join("\n")}
          </div>
        </div>
      </main>
    `,
  })
}

function aboutPage() {
  return layout({
    active: "about",
    pathName: "/o-nas",
    title: "O nás | Patros Roll s.r.o.",
    description:
      "Patros Roll s.r.o. pôsobí v energetike na slovenskom a českom trhu od roku 2013 so zameraním na energetickú efektívnosť a inžinierske činnosti.",
    schema: [orgSchema(), { "@context": "https://schema.org", "@type": "AboutPage", name: "O nás | Patros Roll s.r.o.", url: `${site.url}/o-nas` }],
    body: `
      <main class="section">
        <div class="shell feature-split">
          <div class="panel fade">
            <div class="crumbs"><a href="/" data-sk="Domov" data-en="Home">Domov</a><span class="sep">/</span><span data-sk="O nás" data-en="About us">O nás</span></div>
            <p class="eyebrow" data-sk="O nás" data-en="About us">O nás</p>
            <h1 style="font-size:clamp(40px,5vw,62px)" data-sk="Energetika s dôrazom na výsledok" data-en="Energy with a focus on results">Energetika s dôrazom na výsledok</h1>
            <p class="lead" data-sk="Vitajte na webovej stránke spoločnosti Patros Roll s.r.o. V oblasti energetiky na slovenskom a českom trhu aktívne pôsobíme od roku 2013. V tomto smere je našou nosnou činnosťou energetická efektívnosť a inžinierske činnosti, ktoré s ňou priamo súvisia." data-en="Welcome to the website of Patros Roll s.r.o. We have been actively operating in energy on the Slovak and Czech market since 2013, with a strong focus on energy efficiency and related engineering activities.">Vitajte na webovej stránke spoločnosti Patros Roll s.r.o. V oblasti energetiky na slovenskom a českom trhu aktívne pôsobíme od roku 2013. V tomto smere je našou nosnou činnosťou energetická efektívnosť a inžinierske činnosti, ktoré s ňou priamo súvisia.</p>
            <p data-sk="Energetika ako taká je dôležitou súčasťou fungovania každého štátu a denne ovplyvňuje život väčšiny obyvateľov, subjektov aj firiem. Zodpovedný prístup k efektívnemu využívaniu energií výrazne podporuje ekonomickú výkonnosť a konkurencieschopnosť väčšiny podnikateľských činností." data-en="Energy is an important part of every state's operation and affects the daily life of most people, institutions and companies. A responsible approach to efficient energy use strongly supports economic performance and competitiveness.">Energetika ako taká je dôležitou súčasťou fungovania každého štátu a denne ovplyvňuje život väčšiny obyvateľov, subjektov aj firiem. Zodpovedný prístup k efektívnemu využívaniu energií výrazne podporuje ekonomickú výkonnosť a konkurencieschopnosť väčšiny podnikateľských činností.</p>
            <p data-sk="Preto sa prostredníctvom našich služieb v oblasti energetiky snažíme dopomôcť zákazníkom k dosahovaniu ich plánov a cieľov. Náš prístup spája technickú presnosť, zrozumiteľné odporúčania a praktické zameranie na to, čo bude mať pre klienta reálny dopad." data-en="That is why our energy services are designed to help clients achieve their plans and goals. Our approach combines technical accuracy, understandable recommendations and practical focus on what creates real impact.">Preto sa prostredníctvom našich služieb v oblasti energetiky snažíme dopomôcť zákazníkom k dosahovaniu ich plánov a cieľov. Náš prístup spája technickú presnosť, zrozumiteľné odporúčania a praktické zameranie na to, čo bude mať pre klienta reálny dopad.</p>
          </div>
          ${renderVisual("idea")}
        </div>
      </main>
    `,
  })
}

function careerPage() {
  return layout({
    active: "career",
    pathName: "/kariera",
    title: "Kariéra a spolupráca | Patros Roll s.r.o.",
    description:
      "Patros Roll s.r.o. ponúka spoluprácu študentom, odborníkom aj obchodným partnerom v oblasti technických zariadení budov a energetiky.",
    schema: [orgSchema(), { "@context": "https://schema.org", "@type": "WebPage", name: "Kariéra a spolupráca | Patros Roll s.r.o.", url: `${site.url}/kariera` }],
    body: `
      <main class="section">
        <div class="shell feature-split">
          <div class="panel fade">
            <div class="crumbs"><a href="/" data-sk="Domov" data-en="Home">Domov</a><span class="sep">/</span><span data-sk="Kariéra a spolupráca" data-en="Career &amp; Cooperation">Kariéra a spolupráca</span></div>
            <p class="eyebrow" data-sk="Kariéra a spolupráca" data-en="Career &amp; Cooperation">Kariéra a spolupráca</p>
            <h1 style="font-size:clamp(38px,5vw,60px)" data-sk="Spájame technické know-how a praktickú skúsenosť" data-en="We connect technical know-how and practical experience">Spájame technické know-how a praktickú skúsenosť</h1>
            <p class="lead" data-sk="Ponúkame študentom vysokých škôl, predovšetkým stavebných a strojníckych fakúlt, možnosť získania praktických skúseností z oblasti pôsobenia našej spoločnosti." data-en="We offer university students, especially from civil and mechanical engineering faculties, an opportunity to gain practical experience in the areas where our company operates.">Ponúkame študentom vysokých škôl, predovšetkým stavebných a strojníckych fakúlt, možnosť získania praktických skúseností z oblasti pôsobenia našej spoločnosti.</p>
            <p data-sk="V súčasnosti hľadáme nových spolupracovníkov alebo obchodných partnerov so znalosťami v oblastiach technických zariadení budov a energetiky." data-en="We are currently looking for new collaborators or business partners with expertise in building systems and energy.">V súčasnosti hľadáme nových spolupracovníkov alebo obchodných partnerov so znalosťami v oblastiach technických zariadení budov a energetiky.</p>
            <div class="tags">
              <span class="tag">Technické zariadenia budov</span>
              <span class="tag">Tepelná ochrana budov</span>
              <span class="tag">Vykurovanie a TÚV</span>
              <span class="tag">Vetranie a klimatizácia</span>
              <span class="tag">Elektroinštalácie a osvetlenie</span>
            </div>
            <p style="margin-top:22px" data-sk="Máte záujem o vzájomnú spoluprácu? Ozvite sa nám cez kontaktný formulár a radi sa spojíme." data-en="Interested in cooperation? Reach out through the contact form and we will gladly connect.">Máte záujem o vzájomnú spoluprácu? Ozvite sa nám cez kontaktný formulár a radi sa spojíme.</p>
            <a class="btn btn-primary" href="/kontakt" data-sk="Kontaktujte nás" data-en="Contact us">Kontaktujte nás</a>
          </div>
          <div class="career-visual fade"><img src="/spolupraca.jpg" alt="Spolupráca"></div>
        </div>
      </main>
    `,
  })
}

function contactPage() {
  return layout({
    active: "contact",
    pathName: "/kontakt",
    title: "Kontakt | Patros Roll s.r.o.",
    description:
      "Kontaktné a fakturačné údaje Patros Roll s.r.o. vrátane kontaktného formulára pre otázky k auditom, monitoringu a energetickému poradenstvu.",
    schema: [orgSchema(), { "@context": "https://schema.org", "@type": "ContactPage", name: "Kontakt | Patros Roll s.r.o.", url: `${site.url}/kontakt` }],
    body: `
      <main class="section">
        <div class="shell">
          <div class="crumbs"><a href="/" data-sk="Domov" data-en="Home">Domov</a><span class="sep">/</span><span data-sk="Kontakt" data-en="Contact">Kontakt</span></div>
          <p class="eyebrow fade" data-sk="Kontakt" data-en="Contact">Kontakt</p>
          <h1 class="fade" style="font-size:clamp(40px,5vw,62px)" data-sk="Spojme sa" data-en="Let's connect">Spojme sa</h1>
          <p class="section-intro fade" data-sk="Ak máte otázky k energetickým auditom, technickému due diligence, monitoringu alebo poradenstvu, ozvite sa nám. Nižšie nájdete plné kontaktné aj fakturačné údaje a formulár." data-en="If you have questions about energy audits, technical due diligence, monitoring or consulting, get in touch. Below you will find our contact details, billing information and contact form.">Ak máte otázky k energetickým auditom, technickému due diligence, monitoringu alebo poradenstvu, ozvite sa nám. Nižšie nájdete plné kontaktné aj fakturačné údaje a formulár.</p>
          <div class="contact-grid">
            <div class="contact-stack">
              <div class="contact-card fade">
                <h3>${site.name}</h3>
                <div class="contact-line"><div class="contact-ico">${jsIcon("building")}</div><div><strong data-sk="Adresa sídla" data-en="Registered address">Adresa sídla</strong><p>${site.address.join("<br>")}</p></div></div>
                <div class="contact-line"><div class="contact-ico">${inlineIcon("search")}</div><div><strong data-sk="Telefón" data-en="Phone">Telefón</strong><p><a href="tel:${site.phoneHref}">${site.phone}</a></p></div></div>
                <div class="contact-line"><div class="contact-ico">${jsIcon("mail")}</div><div><strong>E-mail</strong><p><a href="mailto:${site.email}">${site.email}</a></p></div></div>
                <div class="contact-line"><div class="contact-ico">${jsIcon("clipboard")}</div><div><strong data-sk="Obchodný register" data-en="Business register">Obchodný register</strong><p data-sk="Spoločnosť zapísaná v obchodnom registri Okresného súdu Košice I, oddiel Sro, vložka číslo 29320/V." data-en="Company registered in the business register of Košice I District Court, section Sro, insert no. 29320/V.">Spoločnosť zapísaná v obchodnom registri Okresného súdu Košice I, oddiel Sro, vložka číslo 29320/V.</p></div></div>
              </div>
              <div class="contact-card fade">
                <h3 data-sk="Fakturačné údaje" data-en="Billing information">Fakturačné údaje</h3>
                <p><strong>IČO:</strong> 46553479<br><strong>DIČ:</strong> 2023433786<br><strong>IČ DPH:</strong> SK2023433786</p>
                <p><strong data-sk="Bankové spojenie" data-en="Bank account">Bankové spojenie</strong><br>Tatra banka, a. s.<br>Hodžovo námestie 3<br>P. O. BOX 42<br>850 05 Bratislava 55</p>
                <p><strong data-sk="Bankový účet" data-en="Account number">Bankový účet</strong>: 2948456925/1100<br><strong>IBAN:</strong> SK38 1100 0000 0029 4845 6925<br><strong>SWIFT:</strong> TATR SK BX</p>
              </div>
            </div>
            <div class="contact-card form-card fade">
              <h3 data-sk="Kontaktný formulár" data-en="Contact form">Kontaktný formulár</h3>
              <form onsubmit="return false">
                <div>
                  <label data-sk="Spoločnosť" data-en="Company">Spoločnosť</label>
                  <input class="field" type="text" data-ph-sk="Názov spoločnosti" data-ph-en="Company name" placeholder="Názov spoločnosti">
                </div>
                <div class="form-row">
                  <div>
                    <label data-sk="Meno *" data-en="Name *">Meno *</label>
                    <input class="field" type="text" required data-ph-sk="Vaše meno" data-ph-en="Your name" placeholder="Vaše meno">
                  </div>
                  <div>
                    <label data-sk="Priezvisko *" data-en="Surname *">Priezvisko *</label>
                    <input class="field" type="text" required data-ph-sk="Vaše priezvisko" data-ph-en="Your surname" placeholder="Vaše priezvisko">
                  </div>
                </div>
                <div class="form-row">
                  <div>
                    <label>E-mail *</label>
                    <input class="field" type="email" required data-ph-sk="vas@email.sk" data-ph-en="your@email.com" placeholder="vas@email.sk">
                  </div>
                  <div>
                    <label data-sk="Telefón" data-en="Telephone">Telefón</label>
                    <input class="field" type="text" data-ph-sk="+421 ..." data-ph-en="+421 ..." placeholder="+421 ...">
                  </div>
                </div>
                <div>
                  <label data-sk="Váš odkaz *" data-en="Your message *">Váš odkaz *</label>
                  <textarea class="field" required data-ph-sk="Napíšte nám, s čím Vám vieme pomôcť..." data-ph-en="Tell us how we can help..." placeholder="Napíšte nám, s čím Vám vieme pomôcť..."></textarea>
                </div>
                <p style="margin:0;font-size:12px;color:var(--muted)" data-sk="* povinný údaj" data-en="* mandatory field">* povinný údaj</p>
                <button class="btn btn-primary" type="submit" data-sk="Odoslať" data-en="Send">Odoslať</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    `,
  })
}

function servicePage(service) {
  const breadcrumbs = `<div class="crumbs"><a href="/" data-sk="Domov" data-en="Home">Domov</a><span class="sep">/</span><a href="/sluzby" data-sk="Služby" data-en="Services">Služby</a><span class="sep">/</span><span data-sk="${service.title}" data-en="${service.titleEn}">${service.title}</span></div>`
  const sideCard = service.key === "online-monitoring"
    ? `<div class="mini-card"><strong>Enectiva</strong><p data-sk="Odhaľujeme plytvanie, motivujeme k úsporám. Pre viac informácií pozrite www.enectiva.cz." data-en="We reveal waste and motivate savings. See www.enectiva.cz for more information.">Odhaľujeme plytvanie, motivujeme k úsporám. Pre viac informácií pozrite www.enectiva.cz.</p><a class="btn btn-secondary" href="https://www.enectiva.cz" target="_blank" rel="noreferrer">enectiva.cz</a></div>`
    : `<div class="mini-card"><strong data-sk="Kontaktujte nás" data-en="Contact us">Kontaktujte nás</strong><p data-sk="Uvažujete nad touto službou alebo máte ďalšie otázky? Ozvite sa nám cez kontaktný formulár a pripravíme vhodné riešenie." data-en="Considering this service or do you have further questions? Reach out through the contact form and we will prepare a suitable solution.">Uvažujete nad touto službou alebo máte ďalšie otázky? Ozvite sa nám cez kontaktný formulár a pripravíme vhodné riešenie.</p><a class="btn btn-primary" href="/kontakt" data-sk="Prejsť na kontakt" data-en="Go to contact">Prejsť na kontakt</a></div>`
  return layout({
    active: "",
    pathName: service.path,
    title: `${service.title} | ${site.name}`,
    description: service.metaDescription,
    type: "article",
    schema: [
      orgSchema(),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        url: `${site.url}${service.path}`,
        description: service.metaDescription,
        serviceType: service.title,
        provider: { "@type": "Organization", name: site.name, url: site.url },
      },
    ],
    body: `
      <main class="service-page">
        <div class="shell">
          ${breadcrumbs}
          <div class="service-head fade">
            <div>
              <span class="kicker">${service.badge}</span>
              <h1 data-sk="${service.title}" data-en="${service.titleEn}">${service.title}</h1>
              <p class="service-short" data-sk="${service.short}" data-en="${service.shortEn}">${service.short}</p>
            </div>
            <div class="service-side">
              ${sideCard}
              <div class="mini-card"><strong data-sk="Súvisiaca stránka" data-en="Related page">Súvisiaca stránka</strong><p data-sk="Všetky služby zostávajú dostupné aj v samostatnom prehľade." data-en="All services remain available in the standalone overview.">Všetky služby zostávajú dostupné aj v samostatnom prehľade.</p><a class="btn btn-secondary" href="/sluzby" data-sk="Prehľad služieb" data-en="Service overview">Prehľad služieb</a></div>
            </div>
          </div>
          <div class="service-layout">
            <div class="panel fade" data-sk='${escapeAttr(service.bodySk)}' data-en='${escapeAttr(service.bodyEn)}'>${service.bodySk}</div>
            ${renderVisual(service.visual)}
          </div>
        </div>
      </main>
    `,
  })
}

function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo-transparent.png`,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address[0],
      addressLocality: "Košice",
      postalCode: "040 14",
      addressCountry: "SK",
    },
  }
}

const files = [
  ["site.css", css],
  ["site.js", js],
  ["index.html", homepage()],
  ["o-nas.html", aboutPage()],
  ["sluzby.html", servicesPage()],
  ["kariera.html", careerPage()],
  ["kontakt.html", contactPage()],
  ...services.map((service) => [service.path.replace("/sluzby/", "sluzby/") + ".html".replace(".html.html", ".html"), servicePage(service)]),
]

await fs.mkdir(path.join(publicDir, "sluzby"), { recursive: true })

for (const [relativePath, contents] of files) {
  const target = path.join(publicDir, relativePath)
  await fs.mkdir(path.dirname(target), { recursive: true })
  await fs.writeFile(target, contents, "utf8")
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${["", "/o-nas", "/sluzby", "/kariera", "/kontakt", ...services.map((service) => service.path)]
    .map((pathname) => `<url><loc>${site.url}${pathname}</loc></url>`)
    .join("\n  ")}
</urlset>
`

await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemap, "utf8")
