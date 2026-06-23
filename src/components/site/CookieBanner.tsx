import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const KEY = "gs-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  const accept = (value: "all" | "essential") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 animate-fade-up">
      <div className="glass-strong rounded-2xl p-5 shadow-elevated">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
            <Cookie className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Cookies, lekker dan</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              We gebruiken cookies om je ervaring te verbeteren en onze marketing te meten. Je kunt zelf kiezen wat je accepteert.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => accept("all")}
                className="text-xs font-semibold bg-gradient-primary text-primary-foreground px-3 py-2 rounded-lg shadow-glow"
              >
                Alles accepteren
              </button>
              <button
                onClick={() => accept("essential")}
                className="text-xs font-semibold border border-white/15 text-foreground px-3 py-2 rounded-lg hover:bg-white/5"
              >
                Alleen essentieel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
