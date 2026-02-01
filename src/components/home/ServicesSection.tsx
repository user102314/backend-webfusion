import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Cpu, Workflow, Palette, Lightbulb, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Développement Web Full Stack",
    description: "Applications web modernes et performantes avec React, Node.js et les dernières technologies.",
    features: ["Applications SPA/SSR", "APIs RESTful", "Bases de données"],
    gradient: "from-primary to-neon-blue",
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description: "Applications mobiles cross-platform avec React Native et Flutter.",
    features: ["iOS & Android", "UI/UX Native", "Performance optimale"],
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Cpu,
    title: "Systèmes Embarqués",
    description: "Solutions IoT et systèmes embarqués pour l'industrie et la domotique.",
    features: ["Arduino & Raspberry Pi", "Capteurs & Actuateurs", "Protocoles IoT"],
    gradient: "from-neon-cyan to-primary",
  },
  {
    icon: Workflow,
    title: "Automatisation n8n",
    description: "Automatisation des workflows et intégration de systèmes avec n8n.",
    features: ["Workflows complexes", "Intégration API", "Automatisation tâches"],
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Conception d'interfaces utilisateur modernes et expériences utilisateur optimales.",
    features: ["Design System", "Prototypage", "User Research"],
    gradient: "from-primary to-secondary",
  },
  {
    icon: Lightbulb,
    title: "Solutions Digitales sur Mesure",
    description: "Solutions personnalisées adaptées à vos besoins spécifiques.",
    features: ["Consulting", "Architecture", "Support continu"],
    gradient: "from-neon-blue to-neon-cyan",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-4 block">Nos Services</span>
          <h2 className="section-heading">
            Des solutions <span className="text-gradient">complètes</span>
          </h2>
          <p className="section-subheading">
            De la conception à la maintenance, nous vous accompagnons à chaque étape de votre projet digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to="/projets"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
