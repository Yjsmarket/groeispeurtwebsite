import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function CTABanner() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 shadow-elevated">
        <div className="absolute inset-0 bg-hero opacity-80 pointer-events-none" />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full glass text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Beperkt aantal plekken /maand
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
              Klaar om <span className="text-gradient">harder te groeien</span> dan je concurrenten?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              30 minuten. Geen verkoopverhaal. Wel een concreet plan voor jouw groei. Plan vandaag je gratis strategiegesprek in.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Plan een gratis gesprek
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-white/15 text-foreground px-5 py-3 rounded-xl font-semibold hover:bg-white/5 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp ons
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="glass-strong rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Beschikbaar deze week</p>
                  <p className="text-xs text-muted-foreground">30 minuten · Video call</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Di 14:00", "Wo 10:30", "Wo 15:00", "Do 09:00", "Do 13:30", "Vr 11:00"].map((slot) => (
                  <div
                    key={slot}
                    className="text-xs text-center py-2 rounded-lg border border-white/10 bg-white/5 hover:border-primary/40 hover:text-primary cursor-pointer transition-colors"
                  >
                    {slot}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-muted-foreground text-center">
                Calendly embed placeholder — vervang met live booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
