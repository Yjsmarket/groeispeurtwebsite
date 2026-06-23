import {
  Target,
  Search,
  Music2,
  TrendingUp,
  Layout,
  MousePointerClick,
  Mail,
  PenLine,
  Instagram,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  forWho: string;
  approach: { title: string; body: string }[];
  results: { value: string; label: string }[];
  pricing: { name: string; price: string; features: string[]; featured?: boolean }[];
};

export const services: Service[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads",
    short: "Schaalbare campagnes op Facebook & Instagram die direct omzet draaien.",
    icon: Target,
    headline: "Meta Ads die jouw ROAS verdubbelen — niet je budget.",
    description:
      "Wij bouwen Meta-campagnes met scherpe targeting, creatives die scrollen stoppen en funnels die converteren. Geen vanity metrics, alleen omzet.",
    forWho: "E-commerce, D2C-merken en lead-gen bedrijven die structureel willen opschalen.",
    approach: [
      { title: "Account audit", body: "We analyseren je huidige setup, creatives en pixel-data." },
      { title: "Creative & funnel", body: "Nieuwe hooks, statics en UGC-video's gekoppeld aan een funnel die werkt." },
      { title: "Schalen & itereren", body: "Wekelijkse optimalisatie op CAC, ROAS en LTV." },
    ],
    results: [
      { value: "4.8x", label: "Gem. ROAS" },
      { value: "-38%", label: "CAC reductie" },
      { value: "€2.4M+", label: "Ad spend beheerd" },
    ],
    pricing: [
      { name: "Starter", price: "€1.450 /mnd", features: ["Tot €15k ad spend", "2 campagnes", "Weekly rapportage", "Creative briefing"] },
      { name: "Growth", price: "€2.450 /mnd", features: ["Tot €50k ad spend", "Full-funnel setup", "UGC creative productie", "Bi-weekly strategy call"], featured: true },
      { name: "Scale", price: "Op maat", features: ["€50k+ ad spend", "Dedicated team", "Server-side tracking", "Wekelijkse calls"] },
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Vang vraag die er al is — met Search, Shopping en Performance Max.",
    icon: Search,
    headline: "Google Ads die kopers brengen, geen klikkers.",
    description:
      "We bouwen Search, Shopping en PMax-campagnes die kopen-klare bezoekers leveren. Met scherpe biedstrategieën en conversie-gerichte landingspagina's.",
    forWho: "Webshops en B2B-bedrijven met intentie-gedreven zoekvolume.",
    approach: [
      { title: "Keyword & SERP audit", body: "We mappen vraag, concurrentie en intent-niveau." },
      { title: "Campagne architectuur", body: "Search, Shopping en PMax — slim gestructureerd op marge." },
      { title: "Conversie-optimalisatie", body: "Bidding, feeds en landingspagina's continu verbeterd." },
    ],
    results: [
      { value: "+312%", label: "Gem. omzetgroei" },
      { value: "0.34€", label: "Gem. CPC" },
      { value: "9.1%", label: "Conversie ratio" },
    ],
    pricing: [
      { name: "Starter", price: "€1.250 /mnd", features: ["Tot €10k ad spend", "Search + Shopping", "Conversion tracking", "Maandelijkse rapportage"] },
      { name: "Growth", price: "€2.150 /mnd", features: ["Tot €40k ad spend", "Search + Shopping + PMax", "Feed optimalisatie", "Bi-weekly calls"], featured: true },
      { name: "Scale", price: "Op maat", features: ["€40k+ ad spend", "Multi-market setup", "Server-side tracking", "Dedicated strateeg"] },
    ],
  },
  {
    slug: "tiktok-ads",
    name: "TikTok Ads",
    short: "Native creatives en Spark Ads die in de FYP exploderen.",
    icon: Music2,
    headline: "TikTok Ads die een nieuwe generatie kopers aanboren.",
    description:
      "We produceren native UGC, draaien Spark Ads en testen tot we de winnende hook vinden. Snel, datagedreven en zonder corporate gevoel.",
    forWho: "Brands die Gen-Z & Millennials willen bereiken — vooral D2C en lifestyle.",
    approach: [
      { title: "Creative strategie", body: "Hooks, formats en angles die passen bij het platform." },
      { title: "UGC productie", body: "Echte creators, native content, snel geleverd." },
      { title: "Test & schalen", body: "Iteraties op creative-level, niet op campaign-level." },
    ],
    results: [
      { value: "12M+", label: "Impressies gegenereerd" },
      { value: "3.7x", label: "Gem. ROAS" },
      { value: "€0.04", label: "Gem. CPM" },
    ],
    pricing: [
      { name: "Starter", price: "€1.650 /mnd", features: ["4 UGC video's/mnd", "Tot €10k ad spend", "Spark Ads setup", "Wekelijkse rapportage"] },
      { name: "Growth", price: "€2.850 /mnd", features: ["10 UGC video's/mnd", "Tot €30k ad spend", "Creator sourcing", "Bi-weekly strategy"], featured: true },
      { name: "Scale", price: "Op maat", features: ["Creator network", "€30k+ ad spend", "Multi-market", "Dedicated team"] },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    short: "Duurzame groei via Google — technisch, content en autoriteit.",
    icon: TrendingUp,
    headline: "SEO die je top-3 brengt op de zoekwoorden die geld opleveren.",
    description:
      "Een complete SEO-aanpak: technische optimalisatie, contentclusters en autoriteitsopbouw. Geen rankings als doel, maar pipeline en omzet.",
    forWho: "Bedrijven die afhankelijk willen worden van organisch verkeer in plaats van advertenties.",
    approach: [
      { title: "Audit & strategy", body: "Technische audit, keyword research en contentplan." },
      { title: "On-page & content", body: "Topical authority opbouwen met clusters en interne links." },
      { title: "Off-page & PR", body: "Kwalitatieve backlinks via digital PR en outreach." },
    ],
    results: [
      { value: "+420%", label: "Organisch verkeer" },
      { value: "1.4k", label: "Top-10 rankings" },
      { value: "8 mnd", label: "Gem. break-even" },
    ],
    pricing: [
      { name: "Foundation", price: "€1.950 /mnd", features: ["Technische SEO", "4 artikelen /mnd", "Maandelijkse rapportage", "On-page optimalisatie"] },
      { name: "Authority", price: "€3.450 /mnd", features: ["Alles in Foundation", "8 artikelen /mnd", "Digital PR & links", "Bi-weekly calls"], featured: true },
      { name: "Enterprise", price: "Op maat", features: ["Multi-market SEO", "Dedicated content team", "Internationale strategie", "Wekelijkse calls"] },
    ],
  },
  {
    slug: "website-development",
    name: "Website Design & Development",
    short: "High-end websites die laden in 1s en converteren als een gek.",
    icon: Layout,
    headline: "Websites die je merk premium maken én converteren.",
    description:
      "Custom design en development met Next.js, perfect on-page SEO en geoptimaliseerd voor Core Web Vitals. Geen templates, wel resultaat.",
    forWho: "Merken die hun website als omzetkanaal serieus willen nemen.",
    approach: [
      { title: "Strategie & UX", body: "Conversie-architectuur en design die je merk versterkt." },
      { title: "Design in Figma", body: "Premium UI met component library en design system." },
      { title: "Development & launch", body: "Performance-first build met CMS, analytics en testing." },
    ],
    results: [
      { value: "0.8s", label: "Gem. laadtijd" },
      { value: "+68%", label: "Conversie uplift" },
      { value: "98", label: "Lighthouse score" },
    ],
    pricing: [
      { name: "Launch", price: "vanaf €6.500", features: ["Tot 8 pagina's", "Custom design", "CMS integratie", "Analytics setup"] },
      { name: "Brand", price: "vanaf €14.500", features: ["Tot 20 pagina's", "Design system", "Custom animaties", "A/B test setup"], featured: true },
      { name: "E-commerce", price: "Op maat", features: ["Shopify of headless", "Custom checkout", "Subscription flows", "Performance audit"] },
    ],
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    short: "High-converting landingspagina's voor campagnes en launches.",
    icon: MousePointerClick,
    headline: "Landingspagina's die advertentie-euro's omzetten in klanten.",
    description:
      "Strategische copy, design en development van pagina's gebouwd voor één doel: converteren. Klaar binnen 10 werkdagen.",
    forWho: "Bedrijven die advertenties draaien en hun CVR willen verdubbelen.",
    approach: [
      { title: "Conversie copywriting", body: "Hooks, proof en CTA's gebaseerd op customer research." },
      { title: "Design & build", body: "Custom design, mobile-first, geoptimaliseerd voor speed." },
      { title: "Test & itereren", body: "A/B-tests op hero, copy en CTA voor continue uplift." },
    ],
    results: [
      { value: "+147%", label: "CVR uplift" },
      { value: "10", label: "Werkdagen levertijd" },
      { value: "1.1s", label: "Laadtijd" },
    ],
    pricing: [
      { name: "Single", price: "€3.250", features: ["1 landingspagina", "Copy + design + build", "Mobile-first", "Analytics setup"] },
      { name: "Funnel", price: "€6.950", features: ["3 pagina's + thank-you", "A/B testing setup", "Heatmaps integratie", "30 dagen optimalisatie"], featured: true },
      { name: "Retainer", price: "vanaf €2.450 /mnd", features: ["2 pagina's per maand", "Continue A/B tests", "Conversie audits", "Strategy calls"] },
    ],
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    short: "Flows en campagnes die 30%+ van je omzet draaien.",
    icon: Mail,
    headline: "Email marketing die slapend geld verdient — elke nacht opnieuw.",
    description:
      "Volledige Klaviyo of Mailchimp setup: welcome flows, abandoned cart, post-purchase en wekelijkse campagnes. Met copy die klinkt als jouw merk.",
    forWho: "E-commerce en SaaS-bedrijven met een mailinglijst van 2k+ contacten.",
    approach: [
      { title: "Audit & segmentatie", body: "We analyseren je lijst, flows en deliverability." },
      { title: "Flows bouwen", body: "Welcome, browse abandon, cart, post-purchase en winback." },
      { title: "Campagnes & testen", body: "Wekelijkse campagnes met copy, design en A/B tests." },
    ],
    results: [
      { value: "32%", label: "Omzet uit email" },
      { value: "8 flows", label: "Standaard setup" },
      { value: "45%", label: "Gem. open rate" },
    ],
    pricing: [
      { name: "Setup", price: "€3.950 eenmalig", features: ["6 core flows", "Klaviyo audit", "Template design", "Segmentatie"] },
      { name: "Retainer", price: "€1.850 /mnd", features: ["4 campagnes /mnd", "Flow optimalisatie", "A/B testing", "Maandelijkse rapportage"], featured: true },
      { name: "Full-service", price: "vanaf €3.450 /mnd", features: ["8 campagnes /mnd", "SMS + email", "Pop-up & form strategy", "Bi-weekly calls"] },
    ],
  },
  {
    slug: "content-strategy",
    name: "Content Strategie",
    short: "Contentplannen die rangschikken op Google én delen op LinkedIn.",
    icon: PenLine,
    headline: "Content die je merk autoriteit geeft — en leads aanlevert.",
    description:
      "We bouwen contentclusters voor SEO, korte vormen voor social en thought-leadership voor LinkedIn. Met een redactiekalender die loopt.",
    forWho: "B2B-merken, founders en agencies die organisch hun pipeline willen vullen.",
    approach: [
      { title: "Topic & pillar research", body: "Cluster mapping op intent en zoekvolume." },
      { title: "Editorial planning", body: "Maandkalender voor blog, social en nieuwsbrief." },
      { title: "Productie & distributie", body: "Schrijven, design en publicatie op alle kanalen." },
    ],
    results: [
      { value: "12+", label: "Stuks content /mnd" },
      { value: "+180%", label: "Engagement uplift" },
      { value: "3.4k", label: "Leads gegenereerd" },
    ],
    pricing: [
      { name: "Lite", price: "€1.450 /mnd", features: ["4 stuks content", "1 kanaal", "Editorial planning", "Maand rapportage"] },
      { name: "Pro", price: "€2.950 /mnd", features: ["12 stuks content", "3 kanalen", "Distributie strategie", "Bi-weekly calls"], featured: true },
      { name: "Brand", price: "Op maat", features: ["Founder-led content", "Video & podcast", "PR & outreach", "Wekelijkse sparring"] },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    short: "Volledige social-aanpak: strategie, content, community en groei.",
    icon: Instagram,
    headline: "Social media die je merk laat leven — niet alleen posten.",
    description:
      "Wij beheren je Instagram, TikTok en LinkedIn end-to-end. Strategie, creative, captions, scheduling, community management en rapportage.",
    forWho: "Merken die hun social presence professional willen maken zonder zelf alles te doen.",
    approach: [
      { title: "Brand & content audit", body: "We mappen je tone-of-voice, visuele identiteit en gaps." },
      { title: "Content productie", body: "Foto, video en design — gepland in een maandkalender." },
      { title: "Engagement & groei", body: "Community management, collabs en groeitactieken." },
    ],
    results: [
      { value: "20+", label: "Posts /mnd" },
      { value: "+260%", label: "Follower groei" },
      { value: "6.8%", label: "Engagement rate" },
    ],
    pricing: [
      { name: "Essentials", price: "€1.650 /mnd", features: ["2 kanalen", "12 posts /mnd", "Scheduling", "Maand rapportage"] },
      { name: "Pro", price: "€2.850 /mnd", features: ["3 kanalen", "20 posts /mnd", "Community management", "Strategy calls"], featured: true },
      { name: "Full-service", price: "Op maat", features: ["Alle kanalen", "Video productie", "Influencer outreach", "Dedicated manager"] },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
