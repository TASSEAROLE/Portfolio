"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail, ExternalLink, Code, Server, Cpu, Database } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Élève Ingénieur en Génie Informatique",
  "Ingénieur Logiciel Full-Stack",
  "Passionné d'Intelligence Artificielle",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleDownloadCV = () => {
    // Opens /cv.pdf placed in the public/ folder
    window.open("/cv.pdf", "_blank");
  };

  const floatingIcons = [
    { Icon: Code, className: "top-10 left-[10%] text-accent-purple bg-accent-purple/10 border-accent-purple/20 animate-float-slow" },
    { Icon: Server, className: "top-1/4 right-[12%] text-accent-blue bg-accent-blue/10 border-accent-blue/20 animate-float-medium" },
    { Icon: Database, className: "bottom-1/3 left-[8%] text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20 animate-float-fast" },
    { Icon: Cpu, className: "bottom-24 right-[15%] text-purple-400 bg-purple-400/10 border-purple-400/20 animate-float-slow" },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4"
    >
      {/* Background Grids and Light Beams */}
      <div className="absolute inset-0 bg-grid-pattern -z-20 opacity-40 animate-grid-move" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-purple/15 to-accent-blue/15 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[80px] -z-10" />

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, className }, index) => (
        <div
          key={index}
          className={`absolute p-3 rounded-2xl border hidden md:block shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${className}`}
        >
          <Icon className="h-6 w-6" />
        </div>
      ))}

      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-300 font-mono backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
            Disponible pour opportunités
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Je conçois et développe des <br className="hidden lg:block" />
            <span className="text-gradient-purple-cyan">solutions logicielles</span> <br />
            modernes et performantes.
          </h1>

          {/* Animated typing roles */}
          <div className="h-8 flex items-center justify-center md:justify-start">
            <p className="text-lg sm:text-xl font-mono text-accent-cyan font-medium flex items-center">
              <span>{currentText}</span>
              <span className="ml-1 w-[2px] h-5 bg-accent-cyan animate-pulse" />
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed font-sans mx-auto md:mx-0">
            Élève ingénieur en génie informatique à l'École Nationale Supérieure Polytechnique de Yaoundé (ENSPY). Passionné par le développement Full-Stack, les architectures cloud-natives et les applications intelligentes.
          </p>

          {/* Statistics Grid (In Hero) */}
          <div className="grid grid-cols-3 gap-4 py-4 max-w-md mx-auto md:mx-0">
            <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-4 text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">4+</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Projets Clés</div>
            </div>
            <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-4 text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">ENSPY</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Génie Info</div>
            </div>
            <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-4 text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Engagé</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#projets"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-accent-purple to-accent-blue px-8 py-3.5 rounded-full font-semibold text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:brightness-110 active:scale-98 transition-all"
            >
              Voir mes projets <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={handleDownloadCV}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 px-8 py-3.5 rounded-full font-semibold text-white active:scale-98 transition-all"
            >
              CV <Download className="h-4 w-4" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 hover:border-accent-cyan/30 px-6 py-3.5 rounded-full text-slate-300 hover:text-white transition-all text-sm font-medium"
            >
              Contact <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Profile / Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
        >
          {/* Ambient Glows around the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple to-accent-cyan rounded-full opacity-30 blur-3xl animate-pulse-slow" />
          
          {/* Profile Card border beam effect */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent-purple via-transparent to-accent-cyan opacity-40 blur-sm" />

          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-slate-900 shadow-[0_24px_48px_rgba(0,0,0,0.8)]">
            <Image
              src="/profile_avatar.png"
              alt="Tasse Wembe Jerry Arole Profile Avatar"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 256px, 384px"
            />
          </div>
          
          {/* Decorative tag overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono text-slate-300 shadow-xl flex items-center gap-1.5">
            <span className="text-accent-cyan">@</span>Yaoundé, CM
          </div>
        </motion.div>
      </div>
    </section>
  );
}
