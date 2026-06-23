import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/lib/services";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Premium marketing agency uit Nederland. Wij groeien je business, niet je budget.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-foreground mb-4">Diensten</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/diensten/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Bedrijf</h4>
            <ul className="space-y-2.5">
              <li><Link to="/over-ons" className="text-sm text-muted-foreground hover:text-foreground">Over ons</Link></li>
              <li><Link to="/cases" className="text-sm text-muted-foreground hover:text-foreground">Cases</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Amsterdam, Nederland</li>
              <li><a href="mailto:hallo@groeispeurt.nl" className="hover:text-foreground">hallo@groeispeurt.nl</a></li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>KVK: 87654321</li>
              <li>BTW: NL00123456B01</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Groeispeurt. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-foreground">Privacybeleid</Link>
            <Link to="/privacy" className="hover:text-foreground">Cookies</Link>
            <Link to="/privacy" className="hover:text-foreground">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
