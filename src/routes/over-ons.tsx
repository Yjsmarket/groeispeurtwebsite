import { createFileRoute } from "@tanstack/react-router";
import { CTABanner } from "@/components/site/CTABanner";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Groeispeurt" },
      { name: "description", content: "Een team van strategen, marketeers en designers met één missie: jouw business laten groeien." },
      { property: "og:title", content: "Over ons — Groeispeurt" },
      { property: "og:description", content: "Premium marketing agency uit Amsterdam." },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Tom Bakker", role: "Founder & Strategy", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&q=80&auto=format&fit=crop" },
  { name: "Eva de Jong", role: "Head of Performance", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format&fit=crop" },
  { name: "Mounir El Idrissi", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop" },
  { name: "Sophie Vermeer", role: "SEO Lead", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop" },
];

const values = [
  { title: "Resultaat boven retoriek", body: "We laten ons werk spreken in cijfers, niet in mooie woorden." },
  { title: "Eerlijk en direct", body: "We zeggen wat werkt en wat niet. Geen powerpoints van 80 slides." },
  { title: "Speurder mentaliteit", body: "We zoeken net zo lang door tot we de échte kansen vinden." },
  { title: "Lange termijn relaties", body: "95% van onze klanten blijft langer dan een jaar. Daar zijn we trots op." },
];

function AboutPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl">
          <span className="text-sm font-medium text-primary">Over Groeispeurt</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Een agency met de mentaliteit van een <span className="text-gradient">speurder</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We zijn opgericht in Amsterdam in 2019, gefrustreerd door agencies die meer tijd staken in rapportages dan in resultaat. Groeispeurt doet het anders: we duiken in de cijfers, vinden de hefbomen en executeren snel.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="glass-strong rounded-3xl p-10 md:p-14 shadow-elevated grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: 2019, l: "Opgericht" },
            { v: 28, l: "Specialisten", s: "+" },
            { v: 200, l: "Klanten geholpen", s: "+" },
            { v: 95, l: "Retentie", s: "%" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-gradient">
                <AnimatedCounter to={s.v} suffix={s.s ?? ""} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="text-sm font-medium text-primary">Waar we voor staan</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
              Onze <span className="text-gradient">waarden</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Vier principes die elke beslissing in ons agency sturen.
            </p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary">Team</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            De mensen achter <span className="text-gradient">Groeispeurt</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((t) => (
            <div key={t.name} className="group glass rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
