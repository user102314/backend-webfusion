import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { 
  Coffee, 
  LayoutDashboard, 
  History, 
  ShieldCheck, 
  Wifi, 
  Users2, 
  BarChart3, 
  Database, 
  Smartphone,
  CheckCircle2,
  Lock,
  Zap,
  TrendingUp
} from "lucide-react";

export default function CafeZoneProject() {
  const features = [
    { role: "Gérants", desc: "Contrôle total des revenus et des stocks en temps réel." },
    { role: "Serveurs", desc: "Interface rapide pour la prise de commande fluide." },
    { role: "Admins", desc: "Gestion des accès employés et audits de sécurité." },
    { role: "Analystes", desc: "Rapports détaillés sur les performances quotidiennes." }
  ];

  const techHighlights = [
    {
      title: "Real-Time Tracking",
      desc: "Suivi instantané de chaque transaction via WebSockets pour éviter les pertes.",
      icon: Wifi
    },
    {
      title: "Contrôle Matériel",
      desc: "Surveillance de l'utilisation des machines et des équipements du café.",
      icon: Database
    },
    {
      title: "Dashboard Analytique",
      desc: "Visualisation des pics d'activité et des produits les plus rentables.",
      icon: BarChart3
    }
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
              <Coffee className="w-3 h-3" /> BUSINESS MANAGEMENT SYSTEM
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              Cafe <span className="text-gradient">Zone</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Une solution de gestion intelligente pour cafés, centralisant le contrôle des revenus, 
              la sécurité des transactions et la performance des employés en temps réel.
            </motion.p>
          </div>

          {/* --- ACTEURS / RÔLES --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-1">{item.role}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* --- CORE FUNCTIONALITY (LIVE CONTROL) --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-primary" /> 
                Sécurité des Recettes
              </h2>
              <p className="text-muted-foreground mb-8">
                Le système **Cafe Zone** élimine les erreurs de caisse et les fraudes. Chaque commande est enregistrée et liée à un compte employé avec un traçage précis de l'inventaire.
              </p>
              <ul className="space-y-4">
                {[
                  "Fermeture de caisse automatisée",
                  "Gestion des stocks en temps réel",
                  "Historique des transactions inaltérable",
                  "Alertes en cas d'anomalie de stock"
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
                  <h4 className="font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Performance Live</h4>
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded">Update Every 1s</span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Chiffre du jour</span>
                    <span className="text-primary font-bold">1,240 DT</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-primary to-blue-500" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase mb-1">Commandes</p>
                      <p className="text-xl font-bold italic">42</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase mb-1">Actif</p>
                      <p className="text-xl font-bold italic">86%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- HIGHLIGHTS GRID --- */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Intelligence de <span className="text-primary">Gestion</span></h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {techHighlights.map((tech, i) => (
                <div key={i} className="p-8 glass-card border-white/5 group hover:border-primary/50 transition-all">
                  <tech.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- SECTION LOGO --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center mb-32"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full group-hover:bg-primary/50 transition-all duration-500" />
              <img 
                src="../../public/zone1.png"
                alt="Cafe Zone Logo" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8 tracking-[0.2em] uppercase italic">
              Control <span className="text-primary">Zone</span>
            </h2>
          </motion.div>

          {/* --- GALLERY --- */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Interface <span className="text-gradient">Système</span></h2>
                <p className="text-muted-foreground italic">Optimisé pour Tablettes, POS et PC.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/zone4.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><Smartphone className="w-4 h-4 text-primary" /> POS Tactile</p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/zone2.png" alt="Analytics" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><LayoutDashboard className="w-4 h-4 text-primary" /> Dashboard Manager</p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/zone3.png" alt="History" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><History className="w-4 h-4 text-primary" /> Historique & Audit</p>
              </motion.div>
            </div>
          </div>
          {/* --- FOOTER / TEAM --- */}
          {/* --- FOOTER / TEAM --- */}
          {/* --- FOOTER / TEAM --- */}

          {/* --- FOOTER / TEAM --- */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Développé pour la Performance Commerciale</h2>
            <div className="flex flex-wrap justify-center gap-4">
                 <span className="px-8 py-3 rounded-xl glass-card border-white/10 text-sm font-bold tracking-wide">
                   Oussema Karia
                 </span>
                 <span className="px-8 py-3 rounded-xl glass-card border-white/10 text-sm font-bold tracking-wide">
                   Full Stack Developer
                 </span>
            </div>
          </div>

        </div>
      </main>
    </PageTransition>
  );
}