
const SITE_DATA = {
  pages: [{"title":"Domov","titleEn":"Home","url":"/","desc":"Úvodná stránka","descEn":"Homepage","icon":"home"},{"title":"O nás","titleEn":"About us","url":"/o-nas","desc":"Kto sme a ako pracujeme","descEn":"Who we are","icon":"user"},{"title":"Kariéra a spolupráca","titleEn":"Career & Cooperation","url":"/kariera","desc":"Spolupráca, stáže a partnerstvá","descEn":"Collaboration and internships","icon":"team"},{"title":"Kontakt","titleEn":"Contact","url":"/kontakt","desc":"Kontakty a formulár","descEn":"Contacts and form","icon":"mail"},{"title":"Energetické audity","titleEn":"Energy Audits","url":"/sluzby/energeticke-audity","desc":"Ukážeme Vám kde všade viete ušetriť...","descEn":"We will show you where you can save energy and costs...","icon":"bolt"},{"title":"EA budov a verejných budov","titleEn":"Energy Audits for Buildings and Public Buildings","url":"/sluzby/ea-budov","desc":"Energetický audit pre vlastníkov budov a podklady k obnove verejných budov.","descEn":"Energy audits for building owners and public building renovation planning.","icon":"building"},{"title":"Technické audity","titleEn":"Technical Due Diligence","url":"/sluzby/technicke-audity","desc":"Buďte si vedomí čo predávate, a na druhej strane nekupujte mačku vo vreci...","descEn":"Know what you are selling and do not buy blind...","icon":"clipboard"},{"title":"Online monitorovanie spotreby energií","titleEn":"Online Energy Monitoring","url":"/sluzby/online-monitoring","desc":"Odhaľte plytvanie s energiami nepretržitým monitorovaním výšky ich spotreby...","descEn":"Detect energy waste with continuous consumption monitoring...","icon":"monitor"},{"title":"Firemný energetik","titleEn":"Energy Management Outsourcing","url":"/sluzby/firemny-energetik","desc":"Prenechajte celú oblasť energií na nás a získaný čas venujte svojmu podnikaniu...","descEn":"Leave the entire energy agenda to us and focus on your business...","icon":"gear"},{"title":"Energetické poradenstvo","titleEn":"Energy Consulting","url":"/sluzby/poradenstvo","desc":"Obráťte sa na nás pre získanie odborného názoru...","descEn":"Reach out for an expert opinion...","icon":"idea"}],
  spotlight: [{"title":"Energetické audity","titleEn":"Energy Audits","short":"Ukážeme Vám kde všade viete ušetriť...","shortEn":"We will show you where you can save energy and costs...","url":"/sluzby/energeticke-audity","icon":"bolt"},{"title":"EA budov a verejných budov","titleEn":"Energy Audits for Buildings and Public Buildings","short":"Energetický audit pre vlastníkov budov a podklady k obnove verejných budov.","shortEn":"Energy audits for building owners and public building renovation planning.","url":"/sluzby/ea-budov","icon":"building"},{"title":"Technické audity","titleEn":"Technical Due Diligence","short":"Buďte si vedomí čo predávate, a na druhej strane nekupujte mačku vo vreci...","shortEn":"Know what you are selling and do not buy blind...","url":"/sluzby/technicke-audity","icon":"clipboard"},{"title":"Online monitorovanie spotreby energií","titleEn":"Online Energy Monitoring","short":"Odhaľte plytvanie s energiami nepretržitým monitorovaním výšky ich spotreby...","shortEn":"Detect energy waste with continuous consumption monitoring...","url":"/sluzby/online-monitoring","icon":"monitor"},{"title":"Firemný energetik","titleEn":"Energy Management Outsourcing","short":"Prenechajte celú oblasť energií na nás a získaný čas venujte svojmu podnikaniu...","shortEn":"Leave the entire energy agenda to us and focus on your business...","url":"/sluzby/firemny-energetik","icon":"gear"},{"title":"Energetické poradenstvo","titleEn":"Energy Consulting","short":"Obráťte sa na nás pre získanie odborného názoru...","shortEn":"Reach out for an expert opinion...","url":"/sluzby/poradenstvo","icon":"idea"}],
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
  host.querySelector('[data-spotlight-icon]').innerHTML = icon(item.icon)
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
