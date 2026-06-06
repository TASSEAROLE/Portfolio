"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "work" | "academic";
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
}

const experiences: TimelineItem[] = [
  {
    type: "work",
    role: "Stagiaire Ingénieur Logiciel",
    organization: "AFRILAND FIRST BANK",
    location: "Yaoundé, Cameroun",
    period: "Juillet 2025 - Septembre 2025",
    description: "Participation active au déploiement d'un portail développeur centralisé basé sur Spotify Backstage, visant à améliorer la productivité et la gouvernance des développements au sein de l'environnement bancaire.",
    responsibilities: [
      "Automatisation complète des workflows de création de projets et gestion des repositories.",
      "Centralisation de la documentation technique interne et des architectures de référence.",
      "Mise en place d'une plateforme d'expérience développeur (Developer Experience - DX).",
      "Intégration transparente des pipelines de CI/CD automatisés.",
      "Intégration d'Identity and Access Management (IAM) avec Keycloak pour la sécurité du portail.",
      "Accompagnement dans les architectures d'hébergement cloud-natives internes de la banque."
    ],
    technologies: [
      "Backstage",
      "Kubernetes",
      "Docker",
      "GitLab CI/CD",
      "PostgreSQL",
      "Node.js",
      "React",
      "Nginx",
      "Keycloak"
    ]
  },
  {
    type: "academic",
    role: "Tuteur (Mathématiques & Physique)",
    organization: "INTELLIGENTSIA CORPORATION",
    location: "Yaoundé, Cameroun",
    period: "2022 - 2025",
    description: "Encadrement, animation de séances pédagogiques et enseignement des Mathématiques et de la Physique pour les bacheliers préparant les concours d'entrée très sélectifs des grandes écoles d'ingénieurs camerounaises (dont l'ENSPY).",
    responsibilities: [
      "Animation de cours magistraux et travaux dirigés intensifs.",
      "Conception d'exercices d'application et de devoirs de simulation.",
      "Accompagnement méthodologique et psychologique des candidats aux concours.",
      "Suivi personnalisé des performances des étudiants."
    ],
    technologies: [
      "Pédagogie",
      "Résolution de Problèmes",
      "Mathématiques Appliquées",
      "Physique Classique & Moderne"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden px-4 border-t border-white/5 bg-slate-950/20">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-accent-cyan uppercase">
            Parcours Professionnel
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Expériences Récentes
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12 ml-4">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 p-1 rounded-full bg-background border-2 border-white/10 text-white z-10 group-hover:border-accent-cyan transition duration-300">
                {exp.type === "work" ? (
                  <div className="bg-accent-purple/10 p-1.5 rounded-full text-accent-purple">
                    <Briefcase className="h-4 w-4" />
                  </div>
                ) : (
                  <div className="bg-accent-cyan/10 p-1.5 rounded-full text-accent-cyan">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 group-hover:border-white/10 transition-all duration-300 space-y-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider uppercase mb-2 ${
                      exp.type === "work" ? "bg-accent-purple/20 text-accent-purple border border-accent-purple/30" : "bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30"
                    }`}>
                      {exp.type === "work" ? "Expérience Pro" : "Engagement Associatif"}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-semibold text-accent-cyan mt-0.5">{exp.organization}</p>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-slate-400 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Brief Intro */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>

                {/* Detailed Responsibilities */}
                {exp.responsibilities && (
                  <div className="space-y-2.5 pt-2 border-t border-white/5">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Responsabilités clés :</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applied Technologies tags */}
                {exp.technologies && (
                  <div className="space-y-2.5 pt-3">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
