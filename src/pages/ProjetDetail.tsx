import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { PageTransition } from "../components/layout/PageTransition";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  images: string[];
  stack: string[];
  gradient: string;
}> = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    category: "Développement Web",
    description: "Plateforme e-commerce complète avec gestion de produits, paiements et analytics.",
    fullDescription: "Une plateforme e-commerce moderne et performante, conçue pour offrir une expérience utilisateur optimale. Le système intègre une gestion complète des produits, un système de paiement sécurisé via Stripe, et un tableau de bord analytics avancé pour le suivi des ventes.",
    challenge: "Le client avait besoin d'une plateforme capable de gérer des milliers de produits avec des variations complexes, tout en maintenant des performances optimales et une sécurité renforcée pour les transactions.",
    solution: "Nous avons développé une architecture microservices avec React pour le frontend, Node.js pour l'API, et MongoDB pour la flexibilité du stockage produit. L'intégration Stripe assure des paiements sécurisés et conformes PCI-DSS.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
    ],
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
    gradient: "from-primary to-neon-blue",
  },
  "mobile-banking": {
    title: "Application Bancaire Mobile",
    category: "Développement Mobile",
    description: "Application mobile sécurisée pour la gestion de comptes et transactions bancaires.",
    fullDescription: "Une application bancaire mobile de nouvelle génération offrant une expérience utilisateur fluide et sécurisée. L'application permet la gestion complète des comptes, les virements instantanés, et intègre l'authentification biométrique.",
    challenge: "Concevoir une application répondant aux exigences strictes de sécurité bancaire tout en offrant une interface moderne et intuitive adaptée à tous les profils d'utilisateurs.",
    solution: "Développement en React Native pour une expérience native sur iOS et Android. Implémentation de multiples couches de sécurité incluant le chiffrement end-to-end, l'authentification biométrique, et la détection de fraude en temps réel.",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop",
    ],
    stack: ["React Native", "TypeScript", "Firebase", "Biometric Auth", "Node.js", "PostgreSQL"],
    gradient: "from-neon-purple to-neon-pink",
  },
  "security-audit": {
    title: "Système d'Audit de Sécurité",
    category: "Cybersécurité",
    description: "Plateforme d'audit automatisé pour la détection de vulnérabilités.",
    fullDescription: "Un système d'audit de sécurité automatisé utilisant l'intelligence artificielle pour détecter les vulnérabilités dans les infrastructures IT. La plateforme génère des rapports détaillés et propose des recommandations de remédiation.",
    challenge: "Automatiser la détection de vulnérabilités complexes tout en réduisant les faux positifs et en fournissant des recommandations actionnables pour les équipes de sécurité.",
    solution: "Développement d'algorithmes de machine learning entraînés sur des millions de scénarios d'attaque. L'architecture containerisée permet un déploiement flexible et une scalabilité horizontale.",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop",
    ],
    stack: ["Python", "Docker", "PostgreSQL", "Machine Learning", "Kubernetes", "Elasticsearch"],
    gradient: "from-neon-cyan to-primary",
  },
  "saas-dashboard": {
    title: "Dashboard SaaS Analytics",
    category: "Développement Web",
    description: "Tableau de bord analytics en temps réel pour applications SaaS.",
    fullDescription: "Un tableau de bord analytics puissant offrant une visualisation en temps réel des métriques clés pour les applications SaaS. Le système agrège les données de multiples sources et les présente de manière intuitive.",
    challenge: "Traiter et visualiser des millions de points de données en temps réel tout en maintenant une interface réactive et des performances optimales.",
    solution: "Architecture event-driven avec GraphQL pour des requêtes optimisées. Utilisation de Redis pour le caching et D3.js pour des visualisations interactives et performantes.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    ],
    stack: ["Next.js", "GraphQL", "Redis", "D3.js", "PostgreSQL", "WebSockets"],
    gradient: "from-neon-pink to-neon-purple",
  },
  "iot-platform": {
    title: "Plateforme IoT Industrielle",
    category: "Solutions Complexes",
    description: "Système de monitoring IoT pour équipements industriels avec ML prédictif.",
    fullDescription: "Une plateforme IoT industrielle complète permettant le monitoring en temps réel d'équipements de production. Le système utilise le machine learning pour la maintenance prédictive et l'optimisation des performances.",
    challenge: "Gérer des milliers de capteurs IoT avec une latence minimale tout en prédisant les pannes équipements avant qu'elles ne surviennent.",
    solution: "Architecture MQTT pour la communication IoT, InfluxDB pour les séries temporelles, et modèles TensorFlow pour la maintenance prédictive avec une précision de 95%.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=800&fit=crop",
    ],
    stack: ["Python", "MQTT", "InfluxDB", "TensorFlow", "Grafana", "Docker"],
    gradient: "from-primary to-secondary",
  },
  "healthcare-app": {
    title: "Application Santé Connectée",
    category: "Développement Mobile",
    description: "Application de suivi santé avec intégration d'appareils connectés.",
    fullDescription: "Une application mobile de suivi santé permettant aux utilisateurs de monitorer leurs constantes vitales via des appareils connectés. L'application offre des recommandations personnalisées basées sur les données collectées.",
    challenge: "Intégrer de multiples appareils de santé connectés tout en garantissant la conformité RGPD et la sécurité des données médicales sensibles.",
    solution: "Développement Flutter pour une expérience multiplateforme. Intégration HealthKit/Google Fit avec chiffrement des données et stockage conforme aux normes de santé.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=800&fit=crop",
    ],
    stack: ["Flutter", "Dart", "HealthKit", "Google Fit", "Firebase", "Node.js"],
    gradient: "from-neon-blue to-neon-cyan",
  },
};

export default function ProjetDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <PageTransition>
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
            <Link to="/projets" className="text-primary hover:underline">
              Retour aux projets
            </Link>
          </div>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card">
                <img
                  src={project.images[activeImage]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 mix-blend-overlay`} />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative flex-1 aspect-video rounded-xl overflow-hidden transition-all ${
                      activeImage === index
                        ? "ring-2 ring-primary"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-semibold mb-2 block">
                  {project.category}
                </span>
                <h1 className="text-4xl font-bold font-display mb-4">
                  {project.title}
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenge */}
              <div className="glass-card p-6">
                <h3 className="font-semibold font-display mb-3 text-primary">Le Défi</h3>
                <p className="text-sm text-muted-foreground">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="glass-card p-6">
                <h3 className="font-semibold font-display mb-3 text-secondary">Notre Solution</h3>
                <p className="text-sm text-muted-foreground">{project.solution}</p>
              </div>

              {/* Stack */}
              <div>
                <h3 className="font-semibold font-display mb-4">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl glass-card border border-border/50 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <motion.button
                  className="btn-neon flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir le projet
                </motion.button>
                <motion.button
                  className="btn-ghost-neon flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  Code source
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
