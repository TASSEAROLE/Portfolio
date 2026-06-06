"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-slate-950/80 border-t border-white/5 py-10 px-4 relative mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo/Copyright */}
        <div className="text-center md:text-left space-y-2">
          <p className="font-mono text-sm tracking-wider font-bold text-white">
            TASSE<span className="text-accent-purple">.AROLE</span>
          </p>
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Tasse Arole. Tous droits réservés.
          </p>
        </div>

        {/* Scroll back to top */}
        <a
          href="#"
          onClick={scrollToTop}
          className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:scale-105 active:scale-95 transition"
          title="Retourner en haut"
        >
          <ArrowUp className="h-4 w-4" />
        </a>

      </div>
    </footer>
  );
}
