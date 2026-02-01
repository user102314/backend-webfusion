import { motion } from "framer-motion";
import { ArrowRight, Code2, Shield, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSphere } from "../3d/HeroSphere";

const services = [
  { icon: Code2, label: "Développement Web" },
  { icon: Smartphone, label: "Applications Mobile" },
  { icon: Shield, label: "Cybersécurité" },
  { icon: Zap, label: "Solutions Innovantes" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroSphere />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Innovation • Excellence • Sécurité</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
          >
            <span className="block">Transformez vos</span>
            <span className="text-gradient">idées en réalité</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            WebFusion conçoit des solutions numériques innovantes : développement web & mobile, 
            cybersécurité et résolution de problèmes complexes pour propulser votre entreprise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/projets">
              <motion.button
                className="btn-neon group flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Découvrir nos projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="btn-ghost-neon"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Nous contacter
              </motion.button>
            </Link>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card-hover p-4 group cursor-pointer"
              >
                <service.icon className="w-8 h-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
