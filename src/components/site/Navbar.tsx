import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/cases", label: "Cases" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-page">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-elevated" : "glass"
          }`}
        >
          <Logo />

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "px-3 py-2 rounded-lg text-sm text-foreground bg-white/5" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-1.5 border border-white/10 hover:border-primary/40 hover:text-primary text-muted-foreground px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform"
            >
              Plan een gratis gesprek
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[76px] bottom-0 z-40 bg-background/95 backdrop-blur-xl animate-fade-up">
          <div className="container-page py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-4 rounded-xl text-lg text-foreground border-b border-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-1.5 bg-gradient-primary text-primary-foreground px-4 py-4 rounded-xl text-base font-semibold shadow-glow"
            >
              Plan een gratis gesprek
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 border border-white/15 text-foreground px-4 py-4 rounded-xl text-base font-semibold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp ons direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
