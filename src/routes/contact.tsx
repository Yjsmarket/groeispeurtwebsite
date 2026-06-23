import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Calendar, Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan een gratis gesprek — Groeispeurt" },
      { name: "description", content: "30 minuten. Concreet plan voor jouw groei. Plan vandaag je gratis strategiegesprek met Groeispeurt." },
      { property: "og:title", content: "Plan een gratis gesprek — Groeispeurt" },
      { property: "og:description", content: "Plan je gratis strategiegesprek met Groeispeurt." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Naam is te kort").max(80),
  email: z.string().trim().email("Ongeldig e-mailadres").max(160),
  phone: z.string().trim().min(6, "Telefoonnummer te kort").max(30),
  company: z.string().trim().min(2, "Bedrijfsnaam ontbreekt").max(120),
  budget: z.string().min(1, "Kies een budget"),
  message: z.string().trim().min(10, "Vertel iets meer").max(1500),
});

const budgets = [
  "< €2.500 /mnd",
  "€2.500 – €5.000 /mnd",
  "€5.000 – €15.000 /mnd",
  "€15.000 – €50.000 /mnd",
  "€50.000+ /mnd",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSent(true);
  };

  return (
    <>
      <section className="container-page py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-hero opacity-70 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="text-sm font-medium text-primary">Plan een gratis gesprek</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Laten we 30 minuten <span className="text-gradient">sparren</span>.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Geen verkoopverhaal. Wel een concreet plan met de quick wins voor jouw groei. We bellen binnen 1 werkdag terug.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: "hallo@groeispeurt.nl" },
                { icon: Phone, label: "+31 20 808 1234" },
                { icon: MapPin, label: "Keizersgracht 123, Amsterdam" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg glass flex items-center justify-center text-primary">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-foreground">{c.label}</span>
                </div>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="h-10 w-10 rounded-lg glass flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  WhatsApp · {WHATSAPP_DISPLAY}
                </span>
              </a>
            </div>


            <div className="mt-10 glass-strong rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Liever direct inplannen?</p>
                  <p className="text-xs text-muted-foreground">Calendly embed placeholder</p>
                </div>
              </div>
              <div className="mt-4 aspect-[4/3] rounded-xl border border-dashed border-white/10 flex items-center justify-center text-xs text-muted-foreground">
                Calendly iframe wordt hier geladen
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-strong rounded-3xl p-8 md:p-10 shadow-elevated">
              {sent ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold">Bedankt — we bellen je snel terug.</h2>
                  <p className="mt-2 text-muted-foreground">We hebben je aanvraag ontvangen en nemen binnen 1 werkdag contact op.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                  <Field label="Naam" name="name" error={errors.name} />
                  <Field label="E-mail" name="email" type="email" error={errors.email} />
                  <Field label="Telefoon" name="phone" type="tel" error={errors.phone} />
                  <Field label="Bedrijf" name="company" error={errors.company} />

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2">Maandelijks marketing budget</label>
                    <select
                      name="budget"
                      defaultValue=""
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <option value="" disabled>Kies een budget…</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2">Vertel iets over je doel</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                      placeholder="Waar wil je groeien? Welke kanalen draaien al?"
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-primary text-primary-foreground px-5 py-3.5 rounded-xl font-semibold shadow-glow hover:scale-[1.01] transition-transform disabled:opacity-60"
                    >
                      {submitting ? "Versturen…" : "Plan een gratis gesprek"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-xs text-muted-foreground text-center">
                      We reageren binnen 1 werkdag. Geen spam, beloofd.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
