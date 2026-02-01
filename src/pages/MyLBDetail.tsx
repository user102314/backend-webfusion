import { color, motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { 
  ShieldCheck, 
  Users, 
  LineChart, 
  Lock, 
  Zap, 
  Search, 
  Wallet, 
  CheckCircle2,
  Database,
  Globe,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function MyLBProject() {
  const actors = [
    { role: "Owners", desc: "Entrepreneurs et PME cherchant à lever des capitaux." },
    { role: "Investisseurs", desc: "Individus ou institutions achetant des parts sociales." },
    { role: "Admins", desc: "Équipe de support gérant la validation et la conformité." },
    { role: "Civiliens", desc: "Public consultant les opportunités du marché." }
  ];

  const securityPoints = [
    { title: "KYC Rigoureux", desc: "Vérification d'identité (CIN, Registre de commerce) obligatoire avant toute transaction." },
    { title: "Anti-Vulnérabilité", desc: "Tests systématiques contre CSRF, XSS et SQL Injection." },
    { title: "Cryptage", desc: "Données sensibles et transactions chiffrées de bout en bout." }
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
              <Zap className="w-3 h-3" /> PROJET FINTECH - TUNISIE
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              MyLB <span className="text-gradient">Investment</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Une plateforme web sécurisée conçue pour démocratiser l'investissement en Tunisie, connectant Owners ambitieux et Investisseurs stratégiques.
              <br />
              SiteWeb : 
<a href="https://my-lb-make-your-life-better.vercel.app" style={{ color: "#e5ff00" }}>
   MyLb
</a>
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

          {/* --- CORE FEATURES (KYC & TRADING) --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-primary" /> 
                Sécurité & Conformité KYC
              </h2>
              <p className="text-muted-foreground mb-8">
                Le processus **Know Your Customer** est le cœur du système. Aucune action de trading n'est permise sans une vérification rigoureuse des documents (CIN, Passeport, Registre de Commerce).
              </p>
              <ul className="space-y-4">
                {[
                  "Vérification d'identité des particuliers",
                  "Audit des documents légaux d'entreprise",
                  "Cryptage des données transactionnelles",
                  "Conformité avec la Banque Centrale de Tunisie"
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
                  <h4 className="font-bold flex items-center gap-2"><LineChart className="w-4 h-4 text-primary" /> Portefeuille Temps Réel</h4>
                  <span className="text-[10px] text-green-500 bg-green-500/10 px-2 py-1 rounded">Websocket Active</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-white/5 rounded w-full" />
                  <div className="h-2 bg-white/5 rounded w-3/4" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-[10px] text-muted-foreground uppercase">Profit Brut</p>
                      <p className="text-xl font-bold text-gradient">0.02% Fee</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-[10px] text-muted-foreground uppercase">Sécurité</p>
                      <p className="text-xl font-bold">SQL-i Proof</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- TECH STACK SECTION --- */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Architecture Technique <span className="text-primary">MERN+S</span></h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 glass-card border-white/5">
                <Globe className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Front-end</h3>
                <p className="text-sm text-muted-foreground">React pour une interface réactive et performante.</p>
              </div>
              <div className="p-8 glass-card border-white/5">
                <Database className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Back-end</h3>
                <p className="text-sm text-muted-foreground">Spring Boot pour la robustesse des APIs bancaires.</p>
              </div>
              <div className="p-8 glass-card border-white/5">
                <Lock className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Base de données</h3>
                <p className="text-sm text-muted-foreground">MySQL pour l'intégrité transactionnelle.</p>
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
              {/* Effet de lueur derrière le logo */}
              <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full group-hover:bg-primary/50 transition-all duration-500" />
              
              <img 

                src="../../public/mylb1.png" // Remplace par le chemin réel de ton logo
                alt="MyLB Logo" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8 tracking-[0.2em] uppercase">
              The <span className="text-primary">Identity</span> of Trust
            </h2>
          </motion.div>

          {/* --- GALERIE DES INTERFACES --- */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Aperçu de la <span className="text-gradient">Plateforme</span></h2>
                <p className="text-muted-foreground italic">Exploration des tableaux de bord Owner & Investisseur.</p>
              </div>
              <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Image 1: Dashboard Principal */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video"
              >
                <img 
                  src="../../public/mylb2.png" 
                  alt="Market Overview" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 text-sm font-medium">Vue du L'integration de AI</p>
              </motion.div>

              {/* Image 2: KYC Process */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video"
              >
                <img 
                  src="../../public/mylb3.png" 
                  alt="KYC Verification" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 text-sm font-medium">Vue du Marché Temps Réel</p>
              </motion.div>

              {/* Image 3: Wallet/Transactions */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:col-span-2 lg:col-span-1"
              >
                <img 
                  src="../../public/mylb4.png" 
                  alt="Trading Terminal" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 text-sm font-medium">Terminal D'admin</p>
              </motion.div>
            </div>
          </div>
          {/* --- PROFIT MODEL & ECONOMY --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] bg-gradient-to-br from-primary/10 to-transparent border border-white/5 mb-32"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Modèle de Rentabilité</h2>
                <p className="text-muted-foreground mb-6">
                  Le système MyLB génère des revenus via des micro-commissions compétitives, garantissant un volume de trading élevé tout en restant rentable.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-bold text-primary">0.02%</p>
                    <p className="text-xs text-muted-foreground uppercase">Commission Achat</p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div>
                    <p className="text-3xl font-bold text-blue-400">0.01%</p>
                    <p className="text-xs text-muted-foreground uppercase">Commission Vente</p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 bg-white/5 border-white/10">
                <h4 className="flex items-center gap-2 text-sm font-bold mb-4"><ShieldAlert className="w-4 h-4 text-amber-500" /> Audit de Sécurité Permanent</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Le système est testé unitairement contre :
                  <br /><br />
                  <span className="text-foreground font-mono bg-white/10 px-2 py-0.5 rounded">XSS</span> - Prévention des scripts malicieux.
                  <br />
                  <span className="text-foreground font-mono bg-white/10 px-2 py-0.5 rounded">CSRF</span> - Protection des requêtes cross-site.
                  <br />
                  <span className="text-foreground font-mono bg-white/10 px-2 py-0.5 rounded">SQLi</span> - Sécurisation totale des accès MySQL.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- SCRUM TEAM --- */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Équipe de Développement (Scrum)</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {[ "Oussema Karia", "Salahedine Jendoubi"].map((name) => (
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