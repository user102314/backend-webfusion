import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { Gift, Rocket, CheckCircle, ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: CheckCircle,
    title: "Analyse gratuite",
    description: "Évaluation complète de vos besoins et objectifs"
  },
  {
    icon: CheckCircle,
    title: "Proposition personnalisée",
    description: "Solution sur mesure adaptée à votre budget"
  },
  {
    icon: CheckCircle,
    title: "Maquette offerte",
    description: "Premier aperçu visuel de votre projet"
  },
  {
    icon: CheckCircle,
    title: "Conseils d'experts",
    description: "Recommandations techniques et stratégiques"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function Parlez() {
  return (
    <PageTransition>
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary/30 mb-8"
            >
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Offre Spéciale</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              Votre Premier
              <span className="block text-gradient mt-2">Service Gratuit</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Nous croyons en notre travail. C'est pourquoi nous vous offrons votre 
              <strong className="text-foreground"> premier service gratuitement</strong>. 
              Découvrez notre expertise sans aucun risque.
            </p>
          </motion.div>

          {/* Main Offer Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-xl opacity-30 animate-pulse" />
              
              <div className="relative glass-card border border-primary/30 rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />
                
                <div className="relative flex flex-col lg:flex-row items-center gap-8">
                  {/* Icon */}
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 10 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                      <Gift className="w-16 h-16 text-primary-foreground" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                      Commencez Sans Risque
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      Nous sommes tellement confiants dans la qualité de notre travail que nous 
                      vous offrons votre première prestation. Testez nos services et jugez par vous-même.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                      <Link to="/contact">
                        <motion.button
                          className="btn-neon flex items-center gap-2 px-8 py-4 text-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Zap className="w-5 h-5" />
                          Profiter de l'Offre
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                      <span className="text-sm text-muted-foreground">
                        Sans engagement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto mb-20"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold font-display text-center mb-12"
            >
              Ce que vous obtenez <span className="text-gradient">gratuitement</span>
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="glass-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-display mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card border border-border/50 rounded-3xl p-8 md:p-12 text-center">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Notre Première Expérience de Travail
              </h3>
              
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Chez WebFusion, nous avons commencé avec une passion : créer des solutions 
                digitales exceptionnelles. Notre première expérience nous a appris l'importance 
                de la satisfaction client. C'est pourquoi aujourd'hui, nous vous offrons 
                l'opportunité de découvrir notre expertise sans aucun investissement initial.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Aucun frais caché</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Aucun engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Prêt à transformer votre idée en réalité ?
            </p>
            <Link to="/contact">
              <motion.button
                className="btn-neon px-10 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-nous Maintenant
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
