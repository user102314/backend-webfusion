import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Mission",
    description: "Créer des solutions digitales sur mesure qui répondent aux défis uniques de chaque client.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Adopter les technologies les plus avancées pour rester à la pointe de l'industrie.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travailler en étroite collaboration avec nos clients pour garantir leur succès.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Livrer des solutions optimisées, sécurisées et prêtes pour l'échelle.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold mb-4 block">Qui sommes-nous</span>
            <h2 className="section-heading">
              Votre partenaire pour la{" "}
              <span className="text-gradient">transformation digitale</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              WebFusion est une équipe passionnée de développeurs, designers et experts en 
              cybersécurité. Nous combinons expertise technique et créativité pour concevoir 
              des solutions numériques qui font la différence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Depuis notre création, nous avons accompagné de nombreuses entreprises dans leur 
              transformation digitale, en proposant des solutions innovantes adaptées à leurs besoins spécifiques.
            </p>
          </motion.div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold font-display mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projets réalisés" },
            { value: "30+", label: "Clients satisfaits" },
            { value: "3", label: "Experts dédiés" },
            { value: "100%", label: "Satisfaction client" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold font-display text-gradient block mb-2"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
