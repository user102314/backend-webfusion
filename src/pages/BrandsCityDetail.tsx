import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import {
    ShoppingBag,
    Layers,
    Truck,
    CreditCard,
    LayoutDashboard,
    Search,
    Shield,
    CheckCircle2,
    Zap,
    Database,
    Globe
} from "lucide-react";

export default function BrandsCityDetail() {
    const features = [
        { role: "Catalogue Complet", desc: "Présentation de toutes les marques de chaussures avec filtres avancés." },
        { role: "Expérience Utilisateur", desc: "Interface moderne et intuitive pour une navigation fluide." },
        { role: "Gestion des Stocks", desc: "Suivi en temps réel des disponibilités par taille et couleur." },
        { role: "Paiement Sécurisé", desc: "Transactions sécurisées avec multiples options de paiement." }
    ];

    const functionalNeeds = [
        {
            title: "Catalogue Produits",
            desc: "Affichage détaillé des chaussures avec photos HD, tailles disponibles, prix et descriptions.",
            icon: ShoppingBag
        },
        {
            title: "Recherche Avancée",
            desc: "Filtrage par marque, taille, couleur, prix et catégorie pour trouver la paire parfaite.",
            icon: Search
        },
        {
            title: "Gestion des Commandes",
            desc: "Panier, checkout optimisé et suivi des commandes pour une expérience d'achat complète.",
            icon: Truck
        }
    ];

    return (
        <PageTransition>
            <main className="pt-32 pb-24 bg-background min-h-screen">
                <div className="container mx-auto px-4">

                    {/* --- HERO SECTION --- */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
                        >
                            <ShoppingBag className="w-3 h-3" /> E-COMMERCE
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        >
                            Brands<span className="text-gradient">City</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            Une plateforme e-commerce moderne dédiée à la vente de chaussures de marques.
                            Design élégant, navigation intuitive et expérience d'achat optimisée pour les amateurs de sneakers et chaussures tendance.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-24"
                    >
                        <div className="relative group rounded-3xl overflow-hidden border border-border/50 max-w-4xl w-full aspect-video md:aspect-[21/9] bg-muted shadow-2xl">
                            <img
                                src="/BrandCity.webp"
                                alt="Brands City Interface"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>

                    {/* --- EXPERTISES GRID --- */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold mb-10 text-center">Points <span className="text-primary">Clés</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-6 text-center border-border/50 hover:border-primary/50 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Layers className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-md">{item.role}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* --- LA PROBLEMATIQUE --- */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Globe className="text-primary" />
                                Le Projet
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Brands City répond aux besoins des passionnés de chaussures en offrant une plateforme centralisée 
                                pour découvrir et acheter les dernières tendances des grandes marques.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Catalogue exhaustif des marques populaires",
                                    "Système de filtrage intelligent par taille et style",
                                    "Processus de commande simplifié et rapide",
                                    "Interface responsive adaptée à tous les appareils"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-primary" /> {text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative glass-card p-8 border-border/50"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <h4 className="font-bold flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /> Stack Technique</h4>
                                    <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded font-mono">FULL STACK</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                                        <p className="text-sm italic font-light mb-4 text-muted-foreground">
                                            "Une architecture robuste combinant la puissance de .NET côté serveur avec la réactivité de React pour une expérience utilisateur optimale."
                                        </p>
                                        <div className="flex items-center gap-3 justify-end">
                                            <Shield className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-bold text-gradient">Architecture Moderne</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                                            <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">Frontend</p>
                                            <p className="text-sm font-bold">React</p>
                                        </div>
                                        <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                                            <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">Backend</p>
                                            <p className="text-sm font-bold">.NET</p>
                                        </div>
                                        <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                                            <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">Database</p>
                                            <p className="text-sm font-bold">MySQL</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- FONCTIONNALITÉS GRID --- */}
                    <div className="mb-32">
                        <h2 className="text-3xl font-bold text-center mb-16">Fonctionnalités <span className="text-primary">Principales</span></h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {functionalNeeds.map((sol, i) => (
                                <div key={i} className="p-8 glass-card border-border/50 group hover:border-primary/50 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                                        <sol.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-bold mb-3">{sol.title}</h3>
                                    <p className="text-sm text-muted-foreground">{sol.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- GALERIE DES INTERFACES --- */}
                    <div className="mb-32">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Aperçu de la <span className="text-gradient">Plateforme</span></h2>
                                <p className="text-muted-foreground italic">Exploration des interfaces e-commerce et gestion.</p>
                            </div>
                            <div className="h-px flex-grow bg-foreground/10 mx-8 hidden md:block" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Image 1: Catalogue Produits */}
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group relative rounded-2xl overflow-hidden border border-border/50 aspect-video"
                            >
                                <img 
                                    src="/bcproducts.webp" 
                                    alt="Catalogue Produits" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                                <p className="absolute bottom-4 left-4 text-sm font-medium">Catalogue Produits</p>
                            </motion.div>

                            {/* Image 2: Dashboard Admin */}
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group relative rounded-2xl overflow-hidden border border-border/50 aspect-video"
                            >
                                <img 
                                    src="/bcdashboardadmin.webp" 
                                    alt="Dashboard Admin" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                                <p className="absolute bottom-4 left-4 text-sm font-medium">Dashboard Administrateur</p>
                            </motion.div>

                            {/* Image 3: Panier */}
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group relative rounded-2xl overflow-hidden border border-border/50 aspect-video md:col-span-2 lg:col-span-1"
                            >
                                <img 
                                    src="/bcpanier.webp" 
                                    alt="Panier d'achat" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                                <p className="absolute bottom-4 left-4 text-sm font-medium">Panier d'Achat</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="text-center p-12 rounded-[40px] bg-foreground/5 border border-border/50">
                        <h2 className="text-2xl font-bold mb-4">Une solution e-commerce complète</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Brands City offre une expérience d'achat fluide avec un backend .NET performant, 
                            une interface React réactive et une base de données MySQL fiable pour gérer 
                            efficacement le catalogue produits et les commandes clients.
                        </p>
                    </div>

                </div>
            </main>
        </PageTransition>
    );
}
