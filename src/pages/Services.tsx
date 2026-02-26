import { motion } from "framer-motion";
import parler from "./Parlez";

import { PageTransition } from "../components/layout/PageTransition";
import { 
  Globe, 
  LayoutDashboard, 
  Bot, 
  PhoneCall, 
  PenTool, 
  Megaphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Mail,
  Phone,
  Rocket,
  Layers,
  Zap,
  Target
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Interface pour les services
interface Service {
  id: string;
  numero: string;
  titre: string;
  description: string;
  categorie: string;
  icon: React.ElementType;
  features: string[];
}

// Interface pour les packs
interface Pack {
  nom: string;
  services: string[];
  description: string;
  icon: React.ElementType;
  popular?: boolean;
}

export default function Services() {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Liste des services
  const services: Service[] = [
    {
      id: "site-web",
      numero: "01",
      titre: "Site Web Professionnel",
      description: "Création d'un site web moderne et attractif permettant à vos clients d'explorer votre catalogue de vêtements, de voir les détails des produits et de passer des commandes directement en ligne.",
      categorie: "Présence en ligne",
      icon: Globe,
      features: [
        "Design responsive mobile/tablette",
        "Catalogue produits avec photos",
        "Gestion des tailles et couleurs",
        "Paiement en ligne sécurisé",
        "Optimisé pour le référencement"
      ]
    },
    {
      id: "dashboard",
      numero: "02",
      titre: "Tableau de Bord de Gestion",
      description: "Un espace privé complet qui vous permet de gérer facilement vos commandes, de suivre votre stock en temps réel et d'avoir une vue claire sur vos ventes.",
      categorie: "Gestion & Opérations",
      icon: LayoutDashboard,
      features: [
        "Gestion des commandes en temps réel",
        "Suivi de stock automatisé",
        "Ajout/modification produits",
        "Statistiques et rapports de ventes",
        "Interface intuitive sans compétences techniques"
      ]
    },
    {
      id: "chatbot",
      numero: "03",
      titre: "Chatbot Intelligent",
      description: "Un assistant automatique disponible 24h/24 sur Instagram et Facebook pour répondre instantanément aux questions fréquentes de vos clients.",
      categorie: "Service Client Automatisé",
      icon: Bot,
      features: [
        "Disponible 24h/24 et 7j/7",
        "Réponses instantanées",
        "Questions fréquentes automatisées",
        "Intégration Instagram & Facebook",
        "Plus de temps libéré pour vous"
      ]
    },
    {
      id: "workflow",
      numero: "04",
      titre: "Workflow de Confirmation",
      description: "Un système automatique qui prend en charge chaque nouvelle commande et effectue un appel téléphonique au client pour confirmer sa commande et réduire les retours.",
      categorie: "Gestion & Opérations",
      icon: PhoneCall,
      features: [
        "Appels automatiques dans les 12h",
        "Confirmation des détails commande",
        "Réduction des retours",
        "Professionnalisation relation client",
        "Soulagement du travail répétitif"
      ]
    },
    {
      id: "contenu",
      numero: "05",
      titre: "Création de Contenu",
      description: "5 publications par semaine pour vos réseaux sociaux avec photos mises en valeur, textes accrocheurs et hashtags ciblés pour développer votre communauté.",
      categorie: "Réseaux Sociaux & Contenu",
      icon: PenTool,
      features: [
        "5 posts par semaine",
        "Photos professionnelles",
        "Textes engageants",
        "Hashtags optimisés",
        "Calendrier éditorial"
      ]
    },
    {
      id: "publicite",
      numero: "06",
      titre: "Publicité Payante",
      description: "Gestion complète de vos campagnes publicitaires sur Facebook et Instagram avec ciblage précis et optimisation budgétaire pour maximiser vos ventes.",
      categorie: "Marketing Digital",
      icon: Megaphone,
      features: [
        "Campagnes Meta Ads",
        "Ciblage précis (âge, localisation, intérêts)",
        "Optimisation du budget",
        "Création d'annonces",
        "Rapports mensuels détaillés"
      ]
    }
  ];

  // Liste des packs combinés
  const packs: Pack[] = [
    {
      nom: "Pack Essentiel",
      services: ["Site Web", "Tableau de Bord"],
      description: "Lancez votre présence en ligne avec les outils fondamentaux pour commencer à vendre.",
      icon: Rocket
    },
    {
      nom: "Pack Standard",
      services: ["Site Web", "Dashboard", "Chatbot", "Workflow"],
      description: "Automatisez votre relation client et gagnez en efficacité opérationnelle.",
      icon: Layers,
      popular: true
    },
    {
      nom: "Pack Complet",
      services: ["Site Web", "Dashboard", "Chatbot", "Workflow", "Contenu", "Publicité"],
      description: "La solution intégrale pour dominer votre marché et maximiser vos ventes.",
      icon: Zap
    }
  ];

  // Catégories pour le filtrage
  const categories = ["Tous", "Présence en ligne", "Gestion & Opérations", "Service Client Automatisé", "Réseaux Sociaux & Contenu", "Marketing Digital"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredServices = activeCategory === "Tous" 
    ? services 
    : services.filter(s => s.categorie === activeCategory);

  const handleContactClick = (type: string, itemName: string) => {
    toast({
      title: "📬 Demande de devis",
      description: `Notre équipe vous contactera dans les 24h pour discuter du ${itemName}.`,
      duration: 5000,
    });
    
    // Ouvrir le mail par défaut
    window.location.href = "mailto:web.fusion.suport@gmail.com?subject=Demande%20de%20devis%20-%20WebFusion%20Digital&body=Bonjour,%0D%0A%0D%0AJe%20souhaite%20obtenir%20plus%20d'informations%20sur%20vos%20services.%0D%0A%0D%0ACordialement,";
  };

  return (
    <PageTransition>
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Éléments décoratifs */}
         
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">
              <Sparkles className="w-5 h-5 inline mr-2" />
              WebFusion Digital
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Catalogue des <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Nous accompagnons les boutiques de vêtements et les commerces en ligne 
              à développer leur présence digitale et à automatiser leurs opérations.
            </p>
          </motion.div>

          {/* Catégories filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted/50 hover:bg-muted text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grille des services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 relative group hover:border-primary/50 transition-all hover:shadow-xl"
                  onMouseEnter={() => setSelectedService(service.id)}
                  onMouseLeave={() => setSelectedService(null)}
                >
                  {/* Numéro de service */}
                  <span className="absolute top-6 right-6 text-5xl font-bold text-primary/10">
                    {service.numero}
                  </span>

                  {/* Icône */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Catégorie */}
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 inline-block">
                    {service.categorie}
                  </span>

                  {/* Titre */}
                  <h3 className="text-xl font-bold mb-3">{service.titre}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features (apparaissent au hover) */}
                  <motion.div 
                    className={`space-y-2 mb-6 overflow-hidden ${
                      selectedService === service.id ? "opacity-100" : "opacity-0 h-0"
                    } transition-all duration-300`}
                  >
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Bouton de contact */}
                  <button
                    onClick={() => handleContactClick("service", service.titre)}
                    className="w-full mt-4 py-3 px-4 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary font-medium flex items-center justify-center gap-2 transition-all group/btn"
                  >
                    <span>Demander le prix</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Section Packs Combinés */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Packs <span className="text-gradient">Combinés</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Profitez d'une réduction en choisissant un pack combiné adapté à vos objectifs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packs.map((pack, index) => {
                const Icon = pack.icon;
                return (
                  <motion.div
                    key={pack.nom}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`glass-card p-8 relative ${
                      pack.popular 
                        ? "border-2 border-primary shadow-xl shadow-primary/20 scale-105 z-10" 
                        : "hover:border-primary/50"
                    }`}
                  >
                    {pack.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                          🇵​🇴🇵🇺🇱🇦🇮🇷🇪
                        </span>
                      </div>
                    )}

                    {/* Icône */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
                      pack.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Titre */}
                    <h3 className="text-2xl font-bold text-center mb-4">{pack.nom}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm text-center mb-6">
                      {pack.description}
                    </p>

                    {/* Services inclus */}
                    <div className="space-y-3 mb-8">
                      {pack.services.map((service, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bouton */}
                    <button
                      onClick={() => handleContactClick("pack", pack.nom)}
                      className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                        pack.popular
                          ? "btn-neon"
                          : "bg-primary/10 hover:bg-primary/20 text-primary"
                      }`}
                    >
                      <Target className="w-5 h-5" />
                      Demander le prix
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Comment ça marche */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comment ça <span className="text-gradient">marche ?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  etape: "1",
                  titre: "Analyse de vos besoins",
                  description: "Nous discutons de votre activité, vos objectifs et vos défis actuels.",
                  icon: MessageCircle
                },
                {
                  etape: "2",
                  titre: "Proposition personnalisée",
                  description: "Vous recevez une offre sur mesure avec les services adaptés à votre budget.",
                  icon: Target
                },
                {
                  etape: "3",
                  titre: "Mise en place rapide",
                  description: "Notre équipe configure et lance vos outils digitaux en quelques jours.",
                  icon: Rocket
                },
                {
                  etape: "4",
                  titre: "Suivi & Support",
                  description: "Nous restons disponibles pour toute question, ajustement ou évolution.",
                  icon: PhoneCall
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-card p-6 text-center relative group hover:border-primary/50 transition-all"
                  >
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {item.etape}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{item.titre}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Contact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-12 border-t-4 border-t-primary shadow-xl">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Prêt à booster votre boutique en ligne ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et une offre personnalisée.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="mailto:web.fusion.suport@gmail.com"
                  className="px-8 py-4 bg-primary/10 hover:bg-primary/20 rounded-xl font-medium flex items-center justify-center gap-3 transition-all group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>web.fusion.suport@gmail.com</span>
                </a>
                <a
                  href="tel:+21644321987"
                  className="px-8 py-4 bg-primary/10 hover:bg-primary/20 rounded-xl font-medium flex items-center justify-center gap-3 transition-all group"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>+216 44 321 987</span>
                </a>
              </div>

              <p className="text-xs text-muted-foreground">
                * Les prix sont personnalisés selon vos besoins. Contactez-nous pour un devis sur mesure.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}