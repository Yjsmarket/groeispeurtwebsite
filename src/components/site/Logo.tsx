import logo from "@/assets/logo.png.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <img
        src={logo.url}
        alt="Groeispeurt logo"
        className="h-10 w-10 rounded-full ring-1 ring-white/10 transition-transform group-hover:scale-105"
      />
      <span className="font-semibold text-base tracking-tight">
        Groei<span className="text-primary">speurt</span>
      </span>
    </Link>
  );
}
