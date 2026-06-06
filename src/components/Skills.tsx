"use client";

import { motion } from "framer-motion";
import { 
  Code, Terminal, Laptop, Database, Globe, Brain, HelpCircle, 
  MessageSquare, Users, GitBranch, ShieldCheck, Zap 
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: string[];
  color: string; // text and border glow colors
}

const technicalSkills: SkillCategory[] = [
  {
    title: "Langages de Prog",
    icon: Code,
    color: "border-accent-purple/20 text-accent-purple bg-accent-purple/5",
    skills: ["Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Frontend",
    icon: Laptop,
    color: "border-accent-blue/20 text-accent-blue bg-accent-blue/5",
    skills: ["React", "Next.js", "TailwindCSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    icon: Terminal,
    color: "border-accent-cyan/20 text-accent-cyan bg-accent-cyan/5",
    skills: ["Spring Boot", "FastAPI", "Django REST Framework", "Node.js"]
  },
  {
    title: "Bases de Données",
    icon: Database,
    color: "border-purple-400/20 text-purple-400 bg-purple-400/5",
    skills: ["PostgreSQL", "MySQL", "Supabase", "PostGIS"]
  },
  {
    title: "Mobile",
    icon: Globe,
    color: "border-sky-400/20 text-sky-400 bg-sky-400/5",
    skills: ["Flutter"]
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    color: "border-indigo-400/20 text-indigo-400 bg-indigo-400/5",
    skills: ["Docker", "Kubernetes", "GitHub", "GitLab CI/CD", "Nginx"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: ShieldCheck,
    color: "border-emerald-400/20 text-emerald-400 bg-emerald-400/5",
    skills: ["Linux", "Containerisation", "Developer Platforms"]
  },
  {
    title: "Intelligence Artificielle",
    icon: Brain,
    color: "border-amber-400/20 text-amber-400 bg-amber-400/5",
    skills: ["Machine Learning", "Analyse de données", "Modèles prédictifs", "Applications IA"]
  }
];

const softSkills = [
  { name: "Communication", desc: "Clarté d'expression technique et vulgarisation pour les équipes métiers.", icon: MessageSquare },
  { name: "Travail d'équipe", desc: "Esprit de collaboration, participation active aux rituels agiles.", icon: Users },
  { name: "Résolution de problèmes", desc: "Capacité à décomposer des problèmes complexes en blocs simples.", icon: HelpCircle },
  { name: "Adaptabilité", desc: "Apprentissage rapide de nouveaux frameworks et environnements.", icon: Zap },
  { name: "Organisation", desc: "Rigueur dans le suivi des tâches, de la conception au déploiement.", icon: GitBranch },
  { name: "Esprit d'analyse", desc: "Évaluation objective des solutions d'architecture et de scalabilité.", icon: Brain }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="competences" className="py-24 relative overflow-hidden px-4 border-t border-white/5 bg-slate-950/20">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-accent-cyan uppercase">
            Compétences
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Mon Bagage Technique
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Technical Skills Grid */}
        <div className="space-y-6">
          <h3 className="text-lg font-mono uppercase text-slate-400 tracking-wider text-center md:text-left">
            Compétences Techniques
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technicalSkills.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`glass-card rounded-2xl p-6 border transition-all duration-300 hover:border-white/15 hover:bg-white/[0.03] flex flex-col gap-4 ${cat.color.split(" ")[0]}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${cat.color.split(" ").slice(1).join(" ")}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-white text-base tracking-tight">{cat.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 mt-auto">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/5 text-slate-300 font-medium hover:text-white hover:border-white/20 transition duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-8 pt-10 border-t border-white/5">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-lg font-mono uppercase text-slate-400 tracking-wider">
              Qualités Humaines & Professionnelles
            </h3>
            <p className="text-slate-400 text-sm">
              Savoir-être essentiel pour travailler dans des environnements d'ingénierie agiles et performants.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {softSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-5 border border-white/5 hover:border-white/15 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-white/5 text-slate-400 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition duration-300 shrink-0">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-white text-base leading-tight group-hover:text-accent-cyan transition duration-300">
                      {skill.name}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {skill.desc}
                    </p>
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
