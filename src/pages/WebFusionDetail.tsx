import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { 
  Code2, 
  ShieldAlert, 
  Cpu, 
  Globe, 
  Zap, 
  Layers, 
  Terminal, 
  Lock, 
  Smartphone,
  CheckCircle2,
  Workflow,
  Search,
  MousePointer2
} from "lucide-react";

export default function WebFusionProject() {
  const expertises = [
    { role: "Dev Fullstack", desc: "Architectures robustes et évolutives (React, Node.js, Spring)." },
    { role: "Cyber-Experts", desc: "Audit de sécurité et protection contre les cyber-attaques." },
    { role: "Product Design", desc: "Interfaces UI/UX orientées conversion et expérience utilisateur." },
    { role: "Consultants", desc: "Stratégie digitale et résolution de problèmes complexes." }
  ];

  const solutions = [
    {
      title: "Développement Agile",
      desc: "Création d'applications web et mobiles sur mesure, performantes et scalables.",
      icon: Code2
    },
    {
      title: "Hardened Security",
      desc: "Protocoles de cybersécurité avancés pour protéger vos actifs numériques.",
      icon: ShieldAlert
    },
    {
      title: "Complex Solving",
      desc: "Analyse et résolution de défis techniques critiques pour les entreprises.",
      icon: Cpu
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
              <Terminal className="w-3 h-3" /> DIGITAL SOLUTIONS HUB
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              WebFusion <span className="text-gradient">Digital</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Nous concevons des solutions numériques innovantes. Développement web & mobile, 
              cybersécurité et ingénierie complexe pour propulser votre entreprise vers l'avenir.
            </motion.p>
              <br />
              SiteWeb : 
<a href="https://webfusiondigital.tn" style={{ color: "#e5ff00" }}>WebFusionDigital</a>
          </div>

          {/* --- EXPERTISES GRID --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {expertises.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-1 text-sm">{item.role}</h3>
                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* --- CORE CAPABILITIES --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Workflow className="text-primary" /> 
                Méthodologie Fusion
              </h2>
              <p className="text-muted-foreground mb-8">
                Chez **WebFusion**, nous fusionnons créativité technique et rigueur analytique. 
                Chaque projet est traité comme un écosystème unique nécessitant une sécurité maximale.
              </p>
              <ul className="space-y-4">
                {[
                  "Développement orienté performance (Clean Code)",
                  "Sécurisation des endpoints et des APIs",
                  "Optimisation SEO et visibilité digitale",
                  "Support technique et maintenance 24/7"
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
                  <h4 className="font-bold flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Security Layer</h4>
                  <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-1 rounded font-mono">ENCRYPTED</span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono text-primary">SCANNING_VULNERABILITIES...</span>
                      <span className="text-xs text-primary">98%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        transition={{ duration: 2 }}
                        className="h-full bg-primary shadow-[0_0_10px_#6366f1]" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">Stack</p>
                      <p className="text-lg font-bold">MERN / Java</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">Uptime</p>
                      <p className="text-lg font-bold">99.9%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- SOLUTIONS GRID --- */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Nos Champs d'<span className="text-primary">Action</span></h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {solutions.map((sol, i) => (
                <div key={i} className="p-8 glass-card border-white/5 group hover:border-primary/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                    <sol.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-3">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- LOGO SECTION --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center mb-32"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 blur-[70px] rounded-full group-hover:bg-primary/50 transition-all duration-700" />
              <img 
                src="../../public/logo.png" 
                alt="WebFusion Logo" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8 tracking-[0.3em] uppercase">
              Web<span className="text-primary">Fusion</span> Digital
            </h2>
          </motion.div>

          {/* --- GALLERY / PROJECTS --- */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Portfolio <span className="text-gradient">Sélectif</span></h2>
                <p className="text-muted-foreground italic">Aperçu de nos déploiements les plus critiques.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/w1.png" alt="Cybersecurity" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Audits de Sécurité</p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/w2.png" alt="Web App" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Web-Apps Évolutives</p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/w3.png" alt="Complex Systems" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><Cpu className="w-4 h-4 text-primary" /> Systèmes Complexes</p>
              </motion.div>
            </div>
          </div>

          {/* --- FOOTER / TEAM --- */}
          <div className="text-center p-12 rounded-[40px] bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-8">Prêt à fusionner votre business avec le futur ?</h2>
            <div className="flex flex-wrap justify-center gap-4">
                 <span className="px-10 py-4 rounded-xl bg-primary text-white font-bold flex items-center gap-2 cursor-pointer hover:bg-primary/80 transition-all">
                   <MousePointer2 className="w-4 h-4" /> Discuter avec WebFusion
                 </span>
            </div>
          </div>

        </div>
      </main>
    </PageTransition>
  );
}