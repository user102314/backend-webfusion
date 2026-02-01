import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Title */}
          <h2 className="section-heading">
            Prêt à lancer votre{" "}
            <span className="text-gradient">prochain projet</span> ?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discutons de vos besoins et trouvons ensemble la solution idéale 
            pour transformer votre vision en réalité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                className="btn-neon group flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Démarrer un projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/projets">
              <motion.button
                className="btn-ghost-neon"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Voir nos réalisations
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
