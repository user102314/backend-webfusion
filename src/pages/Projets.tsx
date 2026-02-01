import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "mylb",
    title: "MyLB - Plateforme d'Investissement",
    category: "FinTech",
    description: "Plateforme web sécurisée connectant propriétaires d'entreprises tunisiennes avec investisseurs pour lever des capitaux. Démocratisation de l'investissement et dynamisation de l'économie locale.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    stack: ["React", "Node.js", "MongoDB", "Security"],
    gradient: "from-primary to-neon-blue",
  },
  {
    id: "formacity",
    title: "Formacity - Gestion d'Étudiants",
    category: "Education",
    description: "Application de gestion complète pour centre de formation professionnelle. Suivi des étudiants, cours, examinations et certifications.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    stack: ["Full Stack", "Database", "Dashboard"],
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    id: "webfusion-digital",
    title: "WebFusion Digital",
    category: "Digital Agency",
    description: "Agence en ligne spécialisée en marketing digital et solutions digitales. Services complets de développement et présence digitale.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    stack: ["Web Dev", "Digital Marketing", "Branding"],
    gradient: "from-neon-cyan to-primary",
  },
  {
    id: "dathum",
    title: "Dathum IT - Contrôle de Versions",
    category: "DevTools",
    description: "Application web de gestion d'applications et contrôle de versions, similaire à GitHub. Collaboration d'équipe et versioning de code.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
    stack: ["Full Stack", "Version Control", "Collaboration"],
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    id: "cafe-zone",
    title: "Cafe Zone - Gestion Temps Réel",
    category: "Business Management",
    description: "Système de gestion de revenus en temps réel pour cafés. Contrôle de sécurité, gestion du matériel et des employés avec dashboard interactif.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    stack: ["Real-time", "WebSocket", "Dashboard"],
    gradient: "from-primary to-secondary",
  },
  {
    id: "bousetta-wedding",
    title: "Bousetta Wedding",
    category: "Event Management",
    description: "Système de gestion pour salle de mariage. Réservations, planning événements, gestion clients et services.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    stack: ["Full Stack", "Booking", "Event Management"],
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    id: "freelance",
    title: "Freelande - Jeu de Damma",
    category: "Gaming",
    description: "Application desktop du jeu traditionnel de Damma avec intelligence artificielle et mode multijoueur.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
    stack: ["Desktop App", "Game Dev", "AI"],
    gradient: "from-neon-purple to-primary",
  },
 
];

export default function Projets() {
  return (
    <PageTransition>
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">Portfolio</span>
            <h1 className="section-heading">
              Nos <span className="text-gradient">Réalisations</span>
            </h1>
            <p className="section-subheading">
              Découvrez nos projets récents et les solutions innovantes que nous avons développées pour nos clients.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/projets/${project.id}`}>
                  <div className="glass-card-hover group overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 mix-blend-overlay`} />
                      <div className="absolute top-4 right-4">
                        <div className="p-2 rounded-xl glass-card border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold font-display mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
