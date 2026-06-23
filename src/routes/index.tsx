import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Star,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/services";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Groeispeurt — Marketing agency die je business laat groeien" },
      {
        name: "description",
        content:
          "Full-service marketing agency uit Nederland. Meta Ads, Google Ads, TikTok, SEO, websites en meer. Wij groeien je business, niet je budget.",
      },
      { property: "og:title", content: "Groeispeurt — Marketing agency die je business laat groeien" },
      {
        property: "og:description",
        content: "Wij draaien performance campagnes en bouwen websites die converteren. Plan een gratis strategiegesprek.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const logos = ["Meta", "Google", "TikTok", "Shopify", "Klaviyo", "HubSpot", "LinkedIn", "YouTube"];

const cases = [
  {
    client: "Lumen Skincare",
    industry: "D2C E-commerce",
    headline: "5.2x ROAS in 90 dagen",
    metrics: [
      { value: "+412%", label: "Omzet" },
      { value: "5.2x", label: "ROAS" },
      { value: "-44%", label: "CAC" },
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop",
  },
  {
    client: "Nordic Coffee Co.",
    industry: "Coffee Subscription",
    headline: "Van €30k naar €280k/mnd",
    metrics: [
      { value: "9.3x", label: "Omzetgroei" },
      { value: "+187%", label: "AOV" },
      { value: "12%", label: "Churn" },
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
  },
  {
    client: "Aurora Studio",
    industry: "B2B SaaS",
    headline: "MRR x3 met SEO + content",
    metrics: [
      { value: "+540%", label: "Organisch verkeer" },
      { value: "3.1x", label: "MRR" },
      { value: "1.4k", label: "Top-10 KW's" },
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote: "Groeispeurt heeft onze ROAS verdubbeld in 60 dagen. Eindelijk een agency die echt naar de cijfers kijkt.",
    name: "Lotte van Dijk",
    role: "Founder, Lumen Skincare",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
  },
  {
    quote: "Geen fluff, alleen executie. Onze pipeline is binnen 4 maanden verdrievoudigd.",
    name: "Mark de Vries",
    role: "CMO, Aurora Studio",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  },
  {
    quote: "Eindelijk een partner die durft te zeggen wat werkt en wat niet. Topwerk op alle vlakken.",
    name: "Sanne Kuipers",
    role: "E-commerce Manager, Nordic Coffee",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
  },
];

const faqs = [
  {
    q: "Wat kost een samenwerking met Groeispeurt?",
    a: "Onze retainers starten bij €1.250/maand voor performance ads en €1.950/maand voor SEO. We werken altijd met een transparante prijsstructuur — geen verrassingen achteraf.",
  },
  {
    q: "Hoe snel zien we resultaat?",
    a: "Voor performance marketing zie je doorgaans binnen 30 dagen significante verbetering. SEO en content zijn investeringen op middellange termijn — reken op 4-8 maanden voor structurele groei.",
  },
  {
    q: "Werken jullie met vaste contracten?",
    a: "We werken met een initiële commitment van 3 maanden zodat we genoeg tijd hebben om écht resultaat te leveren. Daarna maandelijks opzegbaar — als wij niet leveren, moet je weg kunnen.",
  },
  {
    q: "Doen jullie ook eenmalige projecten?",
    a: "Ja. Voor websites, landingspagina's en eenmalige campagnes werken we projectmatig. Voor marketing als groeikanaal raden we een retainer aan.",
  },
  {
    q: "Met welke tools werken jullie?",
    a: "Klaviyo, Meta Business Suite, Google Ads, GA4, Ahrefs, Figma, Webflow, Next.js, Shopify, HubSpot — en alles wat verder nodig is om resultaat te leveren.",
  },
  {
    q: "Werken jullie ook internationaal?",
    a: "Zeker. We draaien campagnes in 14 landen in Europa, UK en VS. Onze copywriters werken native in NL, EN, DE en FR.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ServicesGrid />
      <Numbers />
      <Process />
      <Cases />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />

      <div className="container-page relative pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full glass animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Marketing agency · Amsterdam
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] animate-fade-up">
            Wij groeien je business,
            <br />
            <span className="text-gradient">niet je budget.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Performance marketing, SEO en high-converting websites voor ambitieuze merken in Nederland en daarbuiten. Resultaat-gericht. Zonder fluff.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 animate-fade-up">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-glow hover:scale-[1.02] transition-transform"
            >
              Plan een gratis gesprek
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/cases"
              className="inline-flex items-center gap-1.5 glass text-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-white/5"
            >
              Bekijk onze cases
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-up">
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <span>200+ tevreden klanten</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1.5">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>4.9 gemiddelde score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoBar() {
  return (
    <section className="border-y border-white/5 bg-surface/40 backdrop-blur-sm py-10">
      <div className="container-page">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Gecertificeerd partner van
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 md:gap-16 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-sm font-medium text-primary">Onze diensten</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Alles wat je nodig hebt om te <span className="text-gradient">schalen</span>.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Van performance ads tot SEO, websites tot email marketing — wij zijn je full-service groei-partner.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, idx) => {
          const Icon = s.icon;
          const num = String(idx + 1).padStart(2, "0");
          return (
            <Link
              key={s.slug}
              to="/diensten/$slug"
              params={{ slug: s.slug }}
              className="group relative glass rounded-2xl p-7 shadow-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/20"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center ring-1 ring-primary/20 group-hover:bg-primary/25 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono tracking-widest text-muted-foreground/60">
                  {num} / {String(services.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold tracking-tight">{s.name}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>

              <div className="relative mt-7 pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80 group-hover:text-foreground/90 transition-colors">
                  Bekijk dienst
                </span>
                <span
                  aria-hidden
                  className="relative h-10 w-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-foreground/80 transition-all duration-500 group-hover:border-primary/60 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { value: 10, prefix: "€", suffix: "M+", label: "Ad spend beheerd" },
    { value: 200, suffix: "+", label: "Klanten geholpen" },
    { value: 95, suffix: "%", label: "Klant retentie" },
    { value: 4.9, suffix: "/5", label: "Gem. score", decimals: 1 },
  ];

  return (
    <section className="container-page py-20 md:py-28">
      <div className="glass-strong rounded-3xl p-10 md:p-16 shadow-elevated relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
                <AnimatedCounter
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Analyse",
      body: "We duiken in je business, doelgroep, concurrenten en huidige funnel. We mappen de quick wins en lange-termijn kansen.",
    },
    {
      n: "02",
      title: "Strategie",
      body: "Een concreet 90-dagen plan met kanalen, budgetten, KPI's en deliverables. Geen powerpoint van 80 slides.",
    },
    {
      n: "03",
      title: "Groei",
      body: "We executeren, meten en itereren wekelijks. Met heldere rapportages en geen excuses bij tegenvallers.",
    },
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary">Hoe we werken</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
          Drie stappen naar <span className="text-gradient">structurele groei</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s) => (
          <div key={s.n} className="glass rounded-2xl p-7 shadow-card hover:bg-white/[0.04] transition-colors">
            <span className="text-5xl font-semibold text-primary/40">{s.n}</span>
            <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-sm font-medium text-primary">Cases</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Resultaten die <span className="text-gradient">spreken</span>.
          </h2>
        </div>
        <Link
          to="/cases"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
        >
          Alle cases bekijken <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {cases.map((c) => (
          <article key={c.client} className="group glass rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 transition-transform">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.client}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{c.industry}</span>
                <span>·</span>
                <span>{c.client}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{c.headline}</h3>
              <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-white/5">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-lg font-semibold text-primary">{m.value}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-medium text-primary">Wat klanten zeggen</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
          Vertrouwd door <span className="text-gradient">200+ merken</span>.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="glass rounded-2xl p-7 shadow-card">
            <div className="flex text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            Veelgestelde <span className="text-gradient">vragen</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Staat je vraag er niet bij? Plan een gesprek of mail ons direct.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Stel je vraag <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="md:col-span-8 divide-y divide-white/5 glass rounded-2xl px-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-5 flex items-start gap-4"
              >
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{f.q}</p>
                  {isOpen && (
                    <p className="mt-3 text-muted-foreground leading-relaxed animate-fade-up">{f.a}</p>
                  )}
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// suppress unused import warning if Check is used elsewhere
void Check;
