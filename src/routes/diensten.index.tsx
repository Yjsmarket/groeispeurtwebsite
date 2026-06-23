import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { CTABanner } from "@/components/site/CTABanner";
import { WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/diensten/")({
  head: () => ({
    meta: [
      { title: "Diensten — Groeispeurt" },
      { name: "description", content: "Onze diensten: Meta Ads, Google Ads, TikTok, SEO, websites, landingspagina's, email, content en social media." },
      { property: "og:title", content: "Diensten — Groeispeurt" },
      { property: "og:description", content: "Full-service marketing voor merken die willen schalen." },
      { property: "og:url", content: "/diensten" },
    ],
    links: [{ rel: "canonical", href: "/diensten" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="container-page pt-28 md:pt-36 pb-12 md:pb-20 relative">
        <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-primary/60" />
            <span>Capabilities · 01 — 09</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Eén partner. <span className="text-gradient">Negen disciplines.</span>
            <br />
            Eén doel: omzet.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Geen losse freelancers, geen versnipperde resultaten. We combineren paid, organic, design en data tot één groei-engine voor jouw merk.
          </p>
        </div>
      </section>

      <section className="container-page pb-24 md:pb-32">
        <div className="border-t border-white/8">
          {services.map((s, i) => {
            const Icon = s.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <article
                key={s.slug}
                className="group relative grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-white/8 transition-colors hover:bg-white/[0.015]"
              >
                <div className="md:col-span-2 flex md:block items-center gap-4">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    {num}
                  </span>
                  <div className="h-px flex-1 bg-white/8 md:hidden" />
                </div>

                <div className="md:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {s.name.split(" ").slice(-1)[0] === "Management" ? "Service" : s.name.includes("Ads") ? "Paid media" : s.name === "SEO" ? "Organic" : "Service"}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                    {s.name}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                    {s.short}
                  </p>
                </div>

                <div className="md:col-span-3 flex md:flex-col gap-6 md:gap-5 md:border-l md:border-white/8 md:pl-8">
                  {s.results.slice(0, 2).map((r) => (
                    <div key={r.label}>
                      <p className="text-3xl md:text-4xl font-semibold text-gradient leading-none">
                        {r.value}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-2 flex md:flex-col gap-3 md:items-end md:justify-between">
                  <Link
                    to="/diensten/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <span>Bekijk dienst</span>
                    <span className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
