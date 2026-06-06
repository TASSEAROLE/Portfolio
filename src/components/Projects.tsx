"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Calendar, Layout, Award, Server, ArrowRight, ShieldCheck, X, Eye, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "fullstack" | "ml" | "mobile" | "geospatial";
  categoryLabel: string;
  shortDesc: string;
  longDesc: string;
  challenges: string;
  architecture: string;
  features: string[];
  technologies: string[];
  results: string;
  githubUrl?: string;
  demoUrl?: string;
  visualBg: string; // Tailwind class gradient
}

const projects: Project[] = [
  {
    id: "fultang",
    title: "FULTANG",
    category: "fullstack",
    categoryLabel: "Gestion Hospitalière",
    shortDesc: "Application web complète de gestion hospitalière intégrant les dossiers médicaux et la comptabilité OHADA.",
    longDesc: "Développement d'une plateforme d'envergure regroupant la gestion clinique des patients, l'archivage sécurisé des dossiers médicaux par les médecins, et le suivi comptable rigoureux des flux financiers hospitaliers conformément aux directives de l'OHADA.",
    challenges: "Modélisation conforme aux normes comptables complexes d'OHADA et sécurisation absolue des données médicales hautement sensibles face aux accès non autorisés.",
    architecture: "Architecture découplée avec une API REST robuste (Django REST Framework) communiquant avec un client web interactif (React). Base de données PostgreSQL gérant les transactions et déploiement conteneurisé.",
    features: [
      "Gestion clinique des patients et admission",
      "Dossiers médicaux informatisés et ordonnances",
      "Gestion du planning des médecins et consultations",
      "Module de comptabilité générale conforme OHADA",
      "Comptabilité matière pour la pharmacie hospitalière",
      "Authentification forte et habilitation basée sur les rôles (RBAC)",
      "Notifications en temps réel pour le personnel soignant"
    ],
    technologies: ["Django REST Framework", "React", "PostgreSQL", "Docker", "JWT", "Nginx"],
    results: "Centralisation réussie des activités médicales et comptables, permettant d'éviter 98% des incohérences de facturation et de diviser par deux le temps de traitement administratif.",
    visualBg: "from-purple-900/60 to-indigo-950/80",
    githubUrl: "https://github.com/jerryarole/fultang",
  },
  {
    id: "pricing-api",
    title: "PRICING API",
    category: "ml",
    categoryLabel: "Tarification Dynamique & IA",
    shortDesc: "Plateforme REST d'optimisation et de prédiction automatique de prix basée sur le machine learning.",
    longDesc: "Conception d'une infrastructure d'API capable d'analyser les données de marché en continu pour calculer et recommander les prix de vente idéaux, en s'appuyant sur des algorithmes de régression et des règles métier avancées.",
    challenges: "Assurer la communication bidirectionnelle ultra-rapide entre la stack d'intelligence artificielle (Python) et le moteur de services d'entreprise (Java) tout en maintenant un temps de réponse inférieur à 150ms.",
    architecture: "Microservice central écrit en Java Spring Boot chargé de l'orchestration, des stratégies tarifaires (pénétration, écrémage, prix concurrentiel) et de l'authentification. Moteur analytique Python (FastAPI/Scikit-Learn) pour l'inférence ML, et frontend de pilotage React.",
    features: [
      "Moteur de calcul dynamique en temps réel",
      "Collecte et nettoyage automatisé des données concurrentielles",
      "Modèles de régression prédictive de prix",
      "Implémentation des stratégies de prix : pénétration, écrémage, tarification concurrentielle",
      "Visualisation des courbes d'élasticité prix/demande sur un dashboard"
    ],
    technologies: ["Java", "Spring Boot", "Python", "FastAPI", "Scikit-Learn", "React", "MySQL", "JUnit"],
    results: "Optimisation de la marge bénéficiaire moyenne de 12% lors des simulations, avec une justesse d'inférence prédictive évaluée à 94% d'exactitude.",
    visualBg: "from-blue-900/60 to-cyan-950/80",
    githubUrl: "https://github.com/jerryarole/pricing-api",
  },
  {
    id: "smart-cane",
    title: "CANNE INTELLIGENTE",
    category: "mobile",
    categoryLabel: "IoT / Accessibilité",
    shortDesc: "Application mobile connectée par Bluetooth pour l'assistance à la mobilité des personnes non-voyantes.",
    longDesc: "Création d'une application compagnon mobile communiquant directement avec une canne physique équipée de capteurs ultrasoniques, fournissant des retours haptiques et vocaux instantanés pour guider les personnes malvoyantes dans leur environnement quotidien.",
    challenges: "Garantir une stabilité de connexion Bluetooth Low Energy (BLE) sans latence et concevoir une interface mobile parfaitement utilisable via les lecteurs d'écran (TalkBack/VoiceOver).",
    architecture: "Application multiplateforme développée en Flutter intégrant des gestionnaires natifs Bluetooth BLE. Serveur backend léger en FastAPI assurant la géolocalisation et la synchronisation des points d'intérêts.",
    features: [
      "Appairage Bluetooth BLE robuste et automatique",
      "Guidage spatial intelligent et calcul de proximité",
      "Synthèse vocale intégrée pour les alarmes d'obstacles",
      "Interface épurée et accessible (contraste élevé, zones de clic larges, compatibilité avec les gestures d'accessibilité)",
      "Bouton d'alerte SOS envoyant la position GPS par SMS"
    ],
    technologies: ["Flutter", "FastAPI", "Bluetooth BLE", "Dart", "Google Maps SDK"],
    results: "Prototype fonctionnel validé par des tests utilisateurs, démontrant une réduction du temps de repérage spatial des obstacles de 40% par rapport à une canne classique.",
    visualBg: "from-rose-950/80 to-slate-900/90",
    githubUrl: "https://github.com/jerryarole/smart-cane",
  },
  {
    id: "route-planner",
    title: "PLANIFICATEUR D'ITINÉRAIRES",
    category: "geospatial",
    categoryLabel: "Cartographie & Géospatial",
    shortDesc: "Calculateur géospatial et plateforme cartographique interactive pour l'optimisation d'itinéraires.",
    longDesc: "Développement d'une plateforme cartographique réactive intégrant des calculs de routage géodésique, la gestion dynamique de points d'intérêt sur carte vectorielle et le calcul d'itinéraires optimaux multimodaux.",
    challenges: "Gérer l'indexation spatiale rapide de millions de coordonnées géographiques et assurer la fluidité de rendu lors des déplacements interactifs sur carte vectorielle.",
    architecture: "Backend asynchrone Spring WebFlux gérant le streaming de flux cartographiques. Base de données PostgreSQL enrichie de l'extension spatiale PostGIS. Frontend Next.js intégrant les tuiles vectorielles MapLibre GL.",
    features: [
      "Calcul de trajets optimaux et plus courts chemins (Dijkstra/A*)",
      "Intégration et personnalisation de cartes vectorielles MapLibre GL",
      "Requêtes de proximité géospatiale (K-Nearest Neighbors)",
      "Gestion hiérarchique et filtrage des points d'intérêt (POI)",
      "Export de trajets en format GPX/KML"
    ],
    technologies: ["Next.js", "Spring WebFlux", "PostgreSQL", "PostGIS", "MapLibre GL", "Docker"],
    results: "Résolution des requêtes spatiales complexes en moins de 100ms grâce à l'optimisation des index GIST sur PostGIS, offrant un rendu fluide de 60 FPS sur le frontend.",
    visualBg: "from-teal-950/80 to-slate-900/90",
    githubUrl: "https://github.com/jerryarole/route-planner",
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "ml" | "mobile" | "geospatial">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projets" className="py-24 relative overflow-hidden px-4 border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-accent-cyan uppercase">
            Réalisations
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Projets Majeurs
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto py-2">
          {(
            [
              { id: "all", label: "Tous" },
              { id: "fullstack", label: "Full-Stack" },
              { id: "ml", label: "Tarification & IA" },
              { id: "mobile", label: "IoT / Flutter" },
              { id: "geospatial", label: "Géospatial" },
            ] as const
          ).map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === btn.id
                  ? "bg-white text-black shadow-lg"
                  : "border border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden glass-card border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Tech Dashboard Graphic Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.visualBg} relative flex items-center justify-center border-b border-white/5 overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  
                  {/* Glowing core */}
                  <div className="absolute w-32 h-32 rounded-full bg-white/5 blur-2xl group-hover:scale-125 transition duration-500" />
                  
                  {/* Stylized Visual Layout representing app type */}
                  <div className="z-10 text-center space-y-2 select-none pointer-events-none p-4">
                    <span className="inline-block p-3 rounded-2xl bg-slate-950/80 border border-white/10 text-white shadow-xl glow-cyan">
                      <FolderGit2 className="h-8 w-8 text-accent-cyan" />
                    </span>
                    <p className="font-mono text-[10px] text-slate-400 tracking-wider font-semibold uppercase mt-1">
                      {project.categoryLabel}
                    </p>
                  </div>

                  {/* Absolute Badge */}
                  <span className="absolute top-4 right-4 bg-slate-950/70 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-slate-300 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">{project.title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="space-y-4 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 border border-white/5 text-accent-cyan">
                          +{project.technologies.length - 4} plus
                        </span>
                      )}
                    </div>

                    {/* Action trigger */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white py-3 rounded-2xl text-xs sm:text-sm font-semibold transition"
                    >
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Slide-out/Modal detail drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop click closer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.9)] z-10 flex flex-col"
            >
              
              {/* Header Visual Hero */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${selectedProject.visualBg} relative flex items-center border-b border-white/10`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {/* Header text */}
                <div className="z-10 space-y-2">
                  <div className="inline-flex items-center gap-1 bg-slate-950/70 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-accent-cyan uppercase">
                    <Sparkles className="h-3 w-3 animate-spin" /> {selectedProject.categoryLabel}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-950/60 border border-white/10 text-slate-400 hover:text-white transition"
                  aria-label="Fermer le dialogue"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Main Content Pane */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 text-slate-300 font-sans">
                
                {/* Long description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-500 tracking-wider">Description :</h4>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-200">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Challenges & Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase text-accent-cyan tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4" /> Défis Techniques
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase text-accent-purple tracking-wider flex items-center gap-1.5">
                      <Layout className="h-4 w-4" /> Architecture
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-mono uppercase text-slate-500 tracking-wider">Fonctionnalités Clés :</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {selectedProject.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results Section */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 mt-4">
                  <Award className="h-6 w-6 text-accent-cyan shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h5 className="text-xs font-mono uppercase text-slate-400">Résultats :</h5>
                    <p className="text-sm leading-relaxed font-semibold text-white">
                      {selectedProject.results}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Tech & Social links */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Tech stack */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono uppercase text-slate-500">Technologies :</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions links */}
                  <div className="flex items-center gap-2.5 shrink-0 pt-2 sm:pt-0">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] rounded-xl text-xs font-bold text-white transition"
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-xl text-xs font-bold text-white shadow-lg transition"
                      >
                        <Eye className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
