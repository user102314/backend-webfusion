import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  ClipboardList, 
  Zap, 
  CheckCircle2,
  Database,
  Globe,
  Lock,
  UserCheck,
  Clock,
  BarChart3
} from "lucide-react";

export default function JNBFitnessDetail() {
  const actors = [
    { role: "Clients", desc: "Membres de la salle suivant leurs entraînements et abonnements." },
    { role: "Coachs", desc: "Entraîneurs professionnels gérant les séances et programmes." },
    { role: "Admins", desc: "Gestionnaires supervisant l'ensemble des opérations." },
    { role: "Réceptionnistes", desc: "Personnel gérant les inscriptions et accueil." }
  ];

  const features = [
    { title: "Suivi des Clients", desc: "Historique complet des entraînements, progression et objectifs personnalisés." },
    { title: "Gestion des Coachs", desc: "Planning, disponibilités et attribution des séances." },
    { title: "Planification des Séances", desc: "Calendrier interactif pour réservations et cours collectifs." }
  ];

  return (
    <PageTransition>
      <main className="pt-32 pb-24 bg-[#0a0a0c]">
        <div className="container mx-auto px-4">
          
          {/* --- HERO SECTION --- */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
            >
              <Dumbbell className="w-3 h-3" /> FITNESS MANAGEMENT SYSTEM
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              JNB<span className="text-gradient">Fitness</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Système complet de gestion de salle de sport avec suivi des clients, 
              gestion des coachs, planification des séances et gestion des cours.
            </motion.p>
          </div>

          {/* --- ACTEURS GRID --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {actors.map((actor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-1">{actor.role}</h3>
                <p className="text-xs text-muted-foreground">{actor.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* --- CORE FEATURES --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ClipboardList className="text-primary" /> 
                Fonctionnalités Principales
              </h2>
              <p className="text-muted-foreground mb-8">
                JNBFitness offre une solution complète pour gérer efficacement tous les aspects d'une salle de sport moderne, 
                de la gestion des abonnements au suivi personnalisé des membres.
              </p>
              <ul className="space-y-4">
                {[
                  "Gestion complète des abonnements et paiements",
                  "Suivi de la progression des membres",
                  "Planning des coachs et réservation de séances",
                  "Gestion des cours collectifs",
                  "Tableau de bord analytique en temps réel"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {text}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative glass-card p-8 border-white/10"
              >
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold flex items-center gap-2"><BarChart3 className="w-4 h-4 text-primary" /> Dashboard Analytics</h4>
                  <span className="text-[10px] text-green-500 bg-green-500/10 px-2 py-1 rounded">Real-time</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-white/5 rounded w-full" />
                  <div className="h-2 bg-white/5 rounded w-3/4" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-[10px] text-muted-foreground uppercase">Membres Actifs</p>
                      <p className="text-xl font-bold text-gradient">+250</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-[10px] text-muted-foreground uppercase">Séances/Jour</p>
                      <p className="text-xl font-bold">45+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- TECH STACK SECTION --- */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Architecture Technique <span className="text-primary">Full Stack</span></h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 glass-card border-white/5">
                <Globe className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Front-end</h3>
                <p className="text-sm text-muted-foreground">React.js pour une interface moderne et réactive.</p>
              </div>
              <div className="p-8 glass-card border-white/5">
                <Database className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Back-end</h3>
                <p className="text-sm text-muted-foreground">.NET pour des APIs robustes et performantes.</p>
              </div>
              <div className="p-8 glass-card border-white/5">
                <Lock className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Base de données</h3>
                <p className="text-sm text-muted-foreground">MySQL pour la gestion des données relationnelles.</p>
              </div>
            </div>
          </div>

          {/* --- SECTION LOGO & BRANDING --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center mb-32"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full group-hover:bg-primary/50 transition-all duration-500" />
              <img 
                src="/jfl.png"
                alt="JNBFitness Logo" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8 tracking-[0.2em] uppercase">
              Train <span className="text-primary">Hard</span>, Stay Fit
            </h2>
          </motion.div>

          {/* --- GALERIE DES INTERFACES --- */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Aperçu de la <span className="text-gradient">Plateforme</span></h2>
                <p className="text-muted-foreground italic">Exploration des interfaces de gestion et réservation.</p>
              </div>
              <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Image 1: Page d'accueil */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video"
              >
                <img 
                  src="/jfpa.png" 
                  alt="Page d'accueil" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 text-sm font-medium">Page d'Accueil</p>
              </motion.div>

              {/* Image 2: Dashboard Admin */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video"
              >
                <img 
                  src="/jfda.png" 
                  alt="Dashboard Admin" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 text-sm font-medium">Dashboard Administrateur</p>
              </motion.div>

              {/* Image 3: Réservation Coaching */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:col-span-2 lg:col-span-1"
              >
                <img 
                  src="/jfrc.png" 
                  alt="Réservation Coaching" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 text-sm font-medium">Réservation Coaching</p>
              </motion.div>
            </div>
          </div>

          {/* --- FEATURES HIGHLIGHT --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] bg-gradient-to-br from-primary/10 to-transparent border border-white/5 mb-32"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Modules Clés</h2>
                <p className="text-muted-foreground mb-6">
                  JNBFitness propose une suite complète de modules pour gérer efficacement 
                  tous les aspects de votre salle de sport.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-bold text-primary">4+</p>
                    <p className="text-xs text-muted-foreground uppercase">Modules Intégrés</p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div>
                    <p className="text-3xl font-bold text-blue-400">24/7</p>
                    <p className="text-xs text-muted-foreground uppercase">Accès Dashboard</p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 bg-white/5 border-white/10">
                <h4 className="flex items-center gap-2 text-sm font-bold mb-4"><Calendar className="w-4 h-4 text-amber-500" /> Système de Réservation</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Le système offre :
                  <br /><br />
                  <span className="text-foreground font-mono bg-white/10 px-2 py-0.5 rounded">Planning</span> - Calendrier interactif des séances.
                  <br />
                  <span className="text-foreground font-mono bg-white/10 px-2 py-0.5 rounded">Coaching</span> - Réservation de sessions privées.
                  <br />
                  <span className="text-foreground font-mono bg-white/10 px-2 py-0.5 rounded">Cours</span> - Inscription aux cours collectifs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- TEAM --- */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Équipe de Développement</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {["Salahedine Jendoubi"].map((name) => (
                 <span key={name} className="px-6 py-2 rounded-full glass-card border-white/10 text-sm font-medium">
                   {name}
                 </span>
               ))}
            </div>
          </div>

        </div>
      </main>
    </PageTransition>
  );
}
