import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { Camera, Sparkles, Maximize2 } from "lucide-react";

export default function BestMomentsGallery() {
  const moments = [
    { id: 1, title: "Sprint Final MyLB", date: "Jan 2024", img: "../../public/1.jpg" },
    { id: 2, title: "Brainstorming WebFusion", date: "Fév 2024", img: "../../public/2.jpg" },
    { id: 3, title: "Lancement Formacity", date: "Mar 2024", img: "../../public/3.jpg" },
    { id: 4, title: "Café Zone Setup", date: "Avr 2024", img: "../../public/4.jpg" },
    { id: 5, title: "Hackathon Night", date: "Mai 2024", img: "../../public/5.jpg" },
    { id: 6, title: "Team Building Mahdia", date: "Juin 2024", img: "../../public/6.jpg" },
    { id: 7, title: "Workshop Cybersécurité", date: "Juil 2024", img: "../../public/7.jpg" },
    { id: 8, title: "Victoire Pitch MyLB", date: "Août 2024", img: "../../public/8.jpg" },
  ];

  return (
    <PageTransition>
      <main className="pt-32 pb-24 bg-[#0a0a0c] min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* --- HEADER --- */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4"
            >
              <Camera className="w-3 h-3" /> RETROSPECTIVE
            </motion.div>
            <h1 className="text-5xl font-bold mb-4">
              The Best <span className="text-gradient">Moments</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto italic">
              "Le code s'efface, les souvenirs restent." Un aperçu de l'aventure humaine derrière chaque ligne de commande.
            </p>
          </div>

          {/* --- GALLERY GRID (4 Columns) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moments.map((moment, i) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-muted/20 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  
                  <img 
                    src={moment.img} 
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> {moment.date}
                        </p>
                        <h3 className="text-white font-bold text-sm leading-tight">
                          {moment.title}
                        </h3>
                      </div>
                      <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Petite décoration flottante */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* --- FOOTER SECTION --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 py-12 border-t border-white/5 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Envie de créer de nouveaux moments avec nous ?
            </p>
            <button className="mt-6 px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-primary hover:text-white transition-all duration-300">
              Rejoindre l'aventure
            </button>
          </motion.div>

        </div>
      </main>
    </PageTransition>
  );
}