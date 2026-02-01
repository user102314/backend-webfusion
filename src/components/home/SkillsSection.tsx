import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Smartphone, 
  Shield, 
  Database, 
  Cloud, 
  Cpu,
  ArrowRight
} from "lucide-react";

const skillCategories = [
  {
    title: "Développement Web",
    icon: Code2,
    gradient: "from-primary to-neon-blue",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Node.js / Express", level: 92 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    title: "Développement Mobile",
    icon: Smartphone,
    gradient: "from-neon-purple to-neon-pink",
    skills: [
      { name: "React Native", level: 94 },
      { name: "Flutter / Dart", level: 88 },
      { name: "PWA", level: 90 },
    ],
  },
  {
    title: "Cybersécurité",
    icon: Shield,
    gradient: "from-neon-cyan to-primary",
    skills: [
      { name: "Pentesting", level: 92 },
      { name: "Audit de sécurité", level: 94 },
      { name: "OWASP", level: 96 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-primary to-secondary",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Docker / Kubernetes", level: 92 },
      { name: "CI/CD", level: 94 },
    ],
  },
  {
    title: "Bases de données",
    icon: Database,
    gradient: "from-neon-pink to-neon-purple",
    skills: [
      { name: "PostgreSQL", level: 94 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 88 },
    ],
  },
  {
    title: "Intelligence Artificielle",
    icon: Cpu,
    gradient: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "TensorFlow / PyTorch", level: 82 },
      { name: "Data Science", level: 88 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-4 block">Compétences</span>
          <h2 className="section-heading">
            Notre <span className="text-gradient">expertise</span> technique
          </h2>
          <p className="section-subheading">
            Des compétences pointues dans les technologies les plus demandées du marché.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold font-display group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to full competences page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/competences"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Voir toutes nos compétences
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
