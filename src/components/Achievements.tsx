"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderGit, Landmark, GraduationCap, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ComponentType<any>;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

function StatCard({ icon: Icon, value, suffix, label, sublabel }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(value / (duration / 16)); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col justify-between items-center text-center space-y-4 hover:border-white/10 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
    >
      <div className="p-3 rounded-2xl bg-white/5 text-slate-300 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition-all duration-300">
        <Icon className="h-6 w-6" />
      </div>

      <div className="space-y-1">
        <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight flex items-center justify-center">
          <span>{count}</span>
          <span className="text-accent-purple">{suffix}</span>
        </div>
        <p className="text-base font-bold text-slate-200 tracking-tight pt-1">{label}</p>
        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[180px]">{sublabel}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const stats = [
    {
      icon: FolderGit,
      value: 4,
      suffix: "+",
      label: "Projets Déployés",
      sublabel: "Du backend Django/Spring à l'intégration mobile Flutter."
    },
    {
      icon: Landmark,
      value: 1,
      suffix: " Stage",
      label: "Banque Afriland",
      sublabel: "Automatisation de plateforme & portail développeur Backstage."
    },
    {
      icon: GraduationCap,
      value: 10,
      suffix: "+",
      label: "Matières Validées",
      sublabel: "Cours majeurs d'ingénierie informatique de l'ENSPY."
    },
    {
      icon: Users,
      value: 3,
      suffix: " Ans",
      label: "Tuteur & Mentor",
      sublabel: "Accompagnement pédagogique chez Intelligentsia Corp."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden px-4 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
