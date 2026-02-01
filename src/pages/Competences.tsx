import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { 
  Code2, 
  Smartphone, 
  Shield, 
  Database, 
  Cloud, 
  Cpu,
  Globe,
  Lock,
  Layers,
  Terminal,
  GitBranch,
  Palette
} from "lucide-react";

const skillCategories = [
  {
    title: "Développement Web",
    icon: Globe,
    gradient: "from-primary to-neon-blue",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Vue.js / Nuxt", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Node.js / Express", level: 92 },
      { name: "Python / Django", level: 88 },
      { name: "PHP / Laravel", level: 82 },
    ],
  },
  {
    title: "Développement Mobile",
    icon: Smartphone,
    gradient: "from-neon-purple to-neon-pink",
    skills: [
      { name: "React Native", level: 94 },
      { name: "Flutter / Dart", level: 88 },
      { name: "iOS (Swift)", level: 80 },
      { name: "Android (Kotlin)", level: 82 },
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
      { name: "Cryptographie", level: 85 },
      { name: "RGPD Compliance", level: 90 },
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
      { name: "MySQL", level: 92 },
      { name: "Elasticsearch", level: 82 },
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
      { name: "Terraform", level: 85 },
      { name: "Linux Administration", level: 88 },
    ],
  },
  {
    title: "Automatisation n8n",
    icon: Cpu,
    gradient: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "Workflows complexes", level: 95 },
      { name: "Intégration API", level: 92 },
      { name: "Automatisation tâches", level: 94 },
      { name: "Webhooks & Triggers", level: 90 },
      { name: "Data Transformation", level: 88 },
    ],
  },
];

const techLogos = [
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Terminal },
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "Docker", icon: Layers },
  { name: "AWS", icon: Cloud },
  { name: "PostgreSQL", icon: Database },
  { name: "Security", icon: Lock },
  { name: "Git", icon: GitBranch },
  { name: "Design", icon: Palette },
];

export default function Competences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <main className="pt-32 pb-24" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold mb-4 block">Compétences</span>
            <h1 className="section-heading">
              Notre <span className="text-gradient">expertise</span> technique
            </h1>
            <p className="section-subheading">
              Des compétences pointues dans les technologies les plus demandées du marché.
            </p>
          </motion.div>

          {/* Animated Tech Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-2xl glass-card border border-border/50 hover:border-primary/50 hover:glow-primary transition-all cursor-pointer"
              >
                <tech.icon className="w-8 h-8 text-primary" />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                className="glass-card-hover p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold font-display">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold font-display text-center mb-12">
              Notre <span className="text-gradient">parcours</span>
            </h2>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />

              {/* Timeline Items */}
              {[
                { year: "2020", title: "Création de WebFusion", description: "Lancement de l'entreprise avec une vision claire : transformer le digital." },
                { year: "2021", title: "Première grande réalisation", description: "Livraison de notre première plateforme e-commerce majeure." },
                { year: "2022", title: "Expansion des services", description: "Ajout de l'expertise cybersécurité et développement mobile." },
                { year: "2023", title: "Croissance continue", description: "Plus de 50 projets réalisés et une équipe grandissante." },
                { year: "2024", title: "Innovation IA", description: "Intégration de solutions d'intelligence artificielle dans nos projets." },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 glass-card p-6 ${
                      index % 2 === 0 ? "text-right mr-auto" : "text-left ml-auto"
                    }`}
                  >
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h4 className="font-semibold font-display mt-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
