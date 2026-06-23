import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, MessageCircle } from "lucide-react";
import { getService, services, type Service } from "@/lib/services";
import { CTABanner } from "@/components/site/CTABanner";
import { WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/diensten/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Dienst"} — Groeispeurt` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: `${loaderData?.name ?? "Dienst"} — Groeispeurt` },
      { property: "og:description", content: loaderData?.description ?? "" },
      { property: "og:url", content: `/diensten/${loaderData?.slug ?? ""}` },
    ],
    links: [{ rel: "canonical", href: `/diensten/${loaderData?.slug ?? ""}` }],
  }),
  errorComponent: ({ error }) => (
    <div className="container-page py-32 text-center">
      <h1 className="text-2xl font-semibold">Er ging iets mis</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-2xl font-semibold">Dienst niet gevonden</h1>
      <Link to="/diensten" className="mt-4 inline-flex text-primary font-semibold">Bekijk alle diensten</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const s = Route.useLoaderData() as Service;
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container-page relative py-16 md:py-24">
          <Link to="/diensten" className="text-sm text-muted-foreground hover:text-foreground">
            ← Alle diensten
          </Link>
          <div className="mt-6 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-primary">{s.name}</span>
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                {s.headline}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">{s.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  Plan een gratis gesprek <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-white/15 text-foreground px-5 py-3 rounded-xl font-semibold hover:bg-white/5 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glass-strong rounded-2xl p-6 shadow-elevated">
                <p className="text-sm font-semibold text-primary mb-4 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" /> Resultaten
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {s.results.map((r) => (
                    <div key={r.label}>
                      <p className="text-2xl md:text-3xl font-semibold text-gradient">{r.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-semibold">Wat het is</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
          <div className="glass rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-semibold">Voor wie</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.forWho}</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Aanpak</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            Onze <span className="text-gradient">aanpak</span>, stap voor stap.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {s.approach.map((a, i) => (
            <div key={i} className="glass rounded-2xl p-7 shadow-card">
              <span className="text-5xl font-semibold text-primary/40">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{a.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary">Pricing</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            Transparante <span className="text-gradient">tarieven</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {s.pricing.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 shadow-card relative ${
                p.featured
                  ? "glass-strong border-primary/30 ring-1 ring-primary/30"
                  : "glass"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-semibold bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full shadow-glow">
                  Populair
                </span>
              )}
              <p className="text-sm text-muted-foreground">{p.name}</p>
              <p className="mt-2 text-3xl font-semibold">{p.price}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-semibold transition-all ${
                  p.featured
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02]"
                    : "border border-white/15 text-foreground hover:bg-white/5"
                }`}
              >
                Start gesprek <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Combineer met andere diensten
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((r) => {
            const RIcon = r.icon;
            return (
              <Link
                key={r.slug}
                to="/diensten/$slug"
                params={{ slug: r.slug }}
                className="group glass rounded-2xl p-6 shadow-card hover:bg-white/[0.04] transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <RIcon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-semibold">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
