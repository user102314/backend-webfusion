import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Innovation Continue",
    description: "Nous utilisons les dernières technologies pour créer des solutions à la pointe de l'innovation.",
  },
  {
    icon: Target,
    title: "Approche Sur Mesure",
    description: "Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques.",
  },
  {
    icon: Zap,
    title: "Performance Optimale",
    description: "Des applications rapides, sécurisées et optimisées pour une expérience utilisateur exceptionnelle.",
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
