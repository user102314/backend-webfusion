import { color, motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { 
  GraduationCap, 
  Briefcase, 
  Languages, 
  UserCheck, 
  BadgeCheck, 
  Globe2, 
  PlaneTakeoff, 
  Clock,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Search
} from "lucide-react";

export default function FormacityProject() {
  const categories = [
    { role: "Étudiants", desc: "De 6 à 18 ans pour les langues et études." },
    { role: "Adultes", desc: "18 à 45+ ans pour le travail et l'immigration." },
    { role: "Professionnels", desc: "Séminaires et ateliers de montée en compétences." },
    { role: "Partenaires", desc: "Universités et entreprises à l'international." }
  ];

  const services = [
    { 
      icon: GraduationCap, 
      title: "Études à l'étranger", 
      desc: "Accompagnement complet pour l'inscription en universités internationales." 
    },
    { 
      icon: Briefcase, 
      title: "Travail International", 
      desc: "Opportunités de carrière et contrats de travail à l'étranger." 
    },
    { 
      icon: Languages, 
      title: "Formation Linguistique", 
      desc: "Anglais, Français, Italien, Allemand et plus encore." 
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
              <Sparkles className="w-3 h-3" /> VOTRE AVENIR À L'INTERNATIONAL
            </motion.div>   
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              Formacity <span className="text-gradient">Agency</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Une agence innovante basée à Mahdia, dédiée à transformer vos rêves en réalité. Études, travail et formations linguistiques avec une approche sans risque financier.
            </motion.p>
            <Sparkles className="w-3 h-3" /> SiteWeb : <a href="https://formacity.vercel.app">Formacity</a>
          </div>

          {/* --- ACTEURS / PUBLIC CIBLE --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {categories.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-1">{item.role}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* --- CORE PHILOSOPHY (ZERO RISK) --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BadgeCheck className="text-primary" /> 
                Engagement & Confiance
              </h2>
              <p className="text-muted-foreground mb-8">
                Notre philosophie repose sur le professionnalisme. Nous vous accompagnons dans toutes vos démarches **sans aucun frais initial** jusqu'à l'obtention de votre acceptation.
              </p>
              <ul className="space-y-4">
                {[
                  "Accompagnement personnalisé de A à Z",
                  "Zéro frais avant acceptation",
                  "Solutions sur mesure (Mahdia, Tunisie)",
                  "Partenariats mondiaux solides"
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
                  <h4 className="font-bold flex items-center gap-2"><Languages className="w-4 h-4 text-primary" /> Hub Linguistique</h4>
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded">Multi-langues</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Anglais", "Français", "Italien", "Allemand"].map((lang) => (
                    <div key={lang} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-primary/50" />
                      <p className="text-sm font-bold">{lang}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
                  <p className="text-xs font-medium italic">"Apprendre une langue, c'est ouvrir une fenêtre sur le monde."</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- SERVICES GRID --- */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Nos Services <span className="text-primary">Premium</span></h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {services.map((service, i) => (
                <div key={i} className="p-8 glass-card border-white/5 group hover:border-primary/50 transition-all">
                  <service.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
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
                src="../../public/formacity1.jpg" 
                alt="Formacity Logo" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold mt-8 tracking-[0.2em] uppercase">
              Beyond <span className="text-primary">Borders</span>
            </h2>
          </motion.div>

          {/* --- GALERIE / VISUELS --- */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Expérience <span className="text-gradient">Visuelle</span></h2>
                <p className="text-muted-foreground italic">Une immersion dans nos centres de formation et séminaires.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img  src="../../public/formacity2.png"  alt="Students" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><PlaneTakeoff className="w-4 h-4 text-primary" /> Études Internationales</p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/formacity3.png" alt="Workshop" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Séminaires & Ateliers</p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img src="../../public/formacity4.png" alt="Consultation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium flex items-center gap-2"><HeartHandshake className="w-4 h-4 text-primary" /> Coaching Personnalisé</p>
              </motion.div>
            </div>
          </div>

          {/* --- SCRUM TEAM --- */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8 italic text-muted-foreground">"Concevoir des solutions sur mesure pour vos projets."</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {["Oussema Karia", "Equipe WebFusion"].map((name) => (
                 <span key={name} className="px-8 py-3 rounded-xl glass-card border-white/10 text-sm font-bold tracking-wide">
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