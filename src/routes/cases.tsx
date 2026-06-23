import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases & Resultaten — Groeispeurt" },
      { name: "description", content: "Echte cases van klanten die met Groeispeurt hun omzet, ROAS en groei verdubbelden." },
      { property: "og:title", content: "Cases & Resultaten — Groeispeurt" },
      { property: "og:description", content: "Echte resultaten van merken die met ons schalen." },
      { property: "og:url", content: "/cases" },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
  component: CasesPage,
});

const cases = [
  {
    client: "Lumen Skincare",
    industry: "D2C Beauty",
    headline: "5.2x ROAS in 90 dagen via Meta + TikTok",
    summary: "Volledige rebuild van de creative pipeline, server-side tracking en een nieuwe funnel-structuur.",
    metrics: [
      { value: "+412%", label: "Omzet" },
      { value: "5.2x", label: "ROAS" },
      { value: "-44%", label: "CAC" },
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=80&auto=format&fit=crop",
  },
  {
    client: "Nordic Coffee Co.",
    industry: "Subscription E-com",
    headline: "Van €30k naar €280k MRR in 12 maanden",
    summary: "Email flows, Klaviyo segmentatie en TikTok UGC zorgden voor een 9x omzetgroei.",
    metrics: [
      { value: "9.3x", label: "Omzetgroei" },
      { value: "+187%", label: "AOV" },
      { value: "32%", label: "Email omzet" },
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80&auto=format&fit=crop",
  },
  {
    client: "Aurora Studio",
    industry: "B2B SaaS",
    headline: "MRR x3 met SEO en thought leadership",
    summary: "Topical authority strategie + LinkedIn content motor voor een dev-tools startup.",
    metrics: [
      { value: "+540%", label: "Organisch verkeer" },
      { value: "3.1x", label: "MRR" },
      { value: "1.4k", label: "Top-10 KW's" },
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop",
  },
  {
    client: "Fjord Outdoor",
    industry: "Outdoor Apparel",
    headline: "Internationale launch in 6 markten",
    summary: "Performance ads in NL, BE, DE, FR, UK, US met geo-specifieke creatives en landingspagina's.",
    metrics: [
      { value: "6 markten", label: "Launch" },
      { value: "4.1x", label: "ROAS" },
      { value: "€1.8M", label: "Ad spend" },
    ],
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80&auto=format&fit=crop",
  },
  {
    client: "Helix Health",
    industry: "HealthTech",
    headline: "20.000 leads via SEO + Google Ads",
    summary: "Multi-channel lead generatie voor een privékliniek in heel Nederland.",
    metrics: [
      { value: "20k+", label: "Leads" },
      { value: "€14", label: "CPL" },
      { value: "+278%", label: "Pipeline" },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format&fit=crop",
  },
  {
    client: "Maison Vert",
    industry: "Hospitality",
    headline: "Nieuw merk, volgeboekt in maand 2",
    summary: "Branding, website, social en Meta Ads voor de launch van een boutique hotel.",
    metrics: [
      { value: "100%", label: "Bezetting" },
      { value: "+€220k", label: "Q1 omzet" },
      { value: "12 weken", label: "Tot launch" },
    ],
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80&auto=format&fit=crop",
  },
];

function CasesPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl">
          <span className="text-sm font-medium text-primary">Cases</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Resultaten die voor zich <span className="text-gradient">spreken</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Een selectie van merken die met ons hebben gewerkt. Echte cijfers, echte groei — geen vanity metrics.
          </p>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <article
              key={c.client}
              className={`group glass rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 transition-transform ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <img
                  src={c.image}
                  alt={c.client}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{c.industry}</span>
                  <span>·</span>
                  <span>{c.client}</span>
                </div>
                <h2 className={`mt-2 font-semibold ${i === 0 ? "text-3xl md:text-4xl" : "text-xl"}`}>
                  {c.headline}
                </h2>
                <p className="mt-3 text-muted-foreground">{c.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xl md:text-2xl font-semibold text-primary">{m.value}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-glow hover:scale-[1.02] transition-transform"
          >
            Word de volgende case <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
