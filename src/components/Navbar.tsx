"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#a-propos" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress & active section
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      setScrolled(window.scrollY > 20);

      // Scroll Progress calculations
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Scroll spy logic
      const sections = navItems.map((item) => {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Find section occupying the middle of the viewport
          return {
            id,
            offsetTop: rect.top + window.scrollY - 150,
            height: rect.height,
          };
        }
        return null;
      }).filter(Boolean);

      const currentScrollY = window.scrollY;
      let active = "accueil";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          if (
            currentScrollY >= section.offsetTop &&
            currentScrollY < section.offsetTop + section.height
          ) {
            active = section.id;
            break;
          }
        }
      }
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // height of floating header approx
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-45 transition-all duration-300 ${
          scrolled
            ? "glass-card py-3 rounded-full px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "py-5 px-4 bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#accueil"
            onClick={(e) => handleClick(e, "#accueil")}
            className="group flex items-center gap-1.5 font-bold tracking-tight text-white transition"
          >
            <span className="h-2 w-2 rounded-full bg-accent-cyan group-hover:animate-ping" />
            <span className="text-lg tracking-wider font-mono">
              TASSE<span className="text-accent-purple">.AROLE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.05] border border-white/[0.08] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Right Button + Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white tracking-wide uppercase border border-white/10 rounded-full hover:bg-white/[0.05] transition-all hover:border-white/30"
            >
              Collaborer <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 glass-card rounded-3xl p-6 shadow-[0_24px_48px_rgba(0,0,0,0.8)] z-40 md:hidden border border-white/10"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`px-4 py-3 rounded-xl font-medium text-sm transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-white/5 text-white border-l-2 border-accent-purple"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent-purple" />}
                  </motion.a>
                );
              })}
              <hr className="border-white/10 my-2" />
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="flex items-center justify-center gap-1.5 px-4 py-3 text-center text-sm font-semibold bg-gradient-to-r from-accent-purple to-accent-blue rounded-xl text-white hover:brightness-110 transition"
              >
                Me Contacter <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
