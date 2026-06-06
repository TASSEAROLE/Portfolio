"use client";

import { motion } from "framer-motion";
import { Award, Code2, ShieldAlert, Cpu, Heart, CheckCircle2, BookOpen } from "lucide-react";

const values = [
  {
    title: "Qualité du Code",
    description: "Écriture de code propre, modulaire et structuré en suivant les meilleures pratiques de programmation.",
    icon: Code2,
    color: "text-accent-purple bg-accent-purple/10",
  },
  {
    title: "Performance & Optimisation",
    description: "Conception d'architectures véloces, de requêtes optimisées et de temps de chargement minimes.",
    icon: Award,
    color: "text-accent-cyan bg-accent-cyan/10",
  },
  {
    title: "Sécurité & Robustesse",
    description: "Protection des données utilisateurs, mécanismes d'authentification forts et gestion des rôles.",
    icon: ShieldAlert,
    color: "text-accent-blue bg-accent-blue/10",
  },
  {
    title: "Maintenabilité",
    description: "Création de systèmes évolutifs, documentés et faciles à étendre par d'autres développeurs.",
    icon: Cpu,
    color: "text-purple-400 bg-purple-400/10",
  },
  {
    title: "Expérience Utilisateur (UX)",
    description: "Interfaces élégantes, fluides, adaptées aux mobiles et offrant une navigation intuitive.",
    icon: Heart,
    color: "text-rose-500 bg-rose-500/10",
  },
];

const courses = [
  "Algorithmique",
  "Structures de données",
  "Développement Web",
  "Développement Mobile",
  "Intelligence Artificielle",
  "Analyse de données",
  "Réseaux Informatiques",
  "Administration Réseau",
  "Programmation Orientée Objet",
  "Génie Logiciel",
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="a-propos" className="py-24 relative overflow-hidden px-4 border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-accent-cyan uppercase">
            À Propos de Moi
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Mon Parcours & Ma Philosophie
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Professional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              Qui suis-je ?
            </h3>
            
            <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-base sm:text-lg">
              <p>
                Actuellement élève ingénieur en <strong>Génie Informatique</strong> à l'<strong>École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)</strong>, je cultive une passion profonde pour le développement logiciel et l'ingénierie des systèmes.
              </p>
              <p>
                Mon approche de l'ingénierie logicielle s'étend sur tout le cycle de vie applicatif : depuis la formalisation des besoins et la conception de l'architecture, jusqu'au déploiement sécurisé en production et la maintenance. 
              </p>
              <p>
                Grâce à un cursus académique exigeant combiné à des expériences projets ambitieuses, j'ai développé des aptitudes fortes pour concevoir des backends performants, des applications mobiles centrées sur l'accessibilité, et des solutions prédictives à base de Machine Learning.
              </p>
            </div>

            {/* Core Values tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Créatif", "Rigoureux", "Orienté Solutions", "Passionné d'IA", "Autonome"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Education Box */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Formation Académique</h4>
                <p className="text-xs text-slate-400">2022 - Présent</p>
              </div>
            </div>

            <div className="space-y-4 border-l border-white/10 pl-4 ml-2.5">
              <div>
                <h5 className="font-bold text-white text-sm sm:text-base">Génie Informatique</h5>
                <p className="text-xs text-slate-400 mt-1">École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-accent-cyan">Cours Majeurs :</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 text-xs rounded-full bg-white/[0.03] border border-white/5 text-slate-300 hover:border-accent-purple/30 transition duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section: Values Grid */}
        <div className="space-y-8">
          <div className="text-center lg:text-left space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ce que je valorise dans chaque projet
            </h3>
            <p className="text-slate-400 text-sm">
              Des fondations techniques saines pour des produits durables.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-5 border border-white/5 space-y-4 hover:border-white/15 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`p-3 rounded-xl w-fit ${val.color} group-hover:scale-110 transition duration-300`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-white text-base tracking-tight">{val.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{val.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-600 group-hover:text-accent-cyan transition pt-4">
                    <CheckCircle2 className="h-3 w-3" /> ENGAGÉ
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
