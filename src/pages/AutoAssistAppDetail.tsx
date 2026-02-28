import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import {
    Smartphone,
    BrainCircuit,
    Share2,
    Clock,
    LayoutDashboard,
    Bot,
    Zap,
    CheckCircle2,
    Workflow
} from "lucide-react";

export default function AutoAssistAppDetail() {
    const features = [
        { role: "Centralisation", desc: "Une seule app pour tout le cycle de vie du contenu social." },
        { role: "Intelligence Artificielle", desc: "Modèles IA (Gemini) pour réécrire, améliorer et adapter le contenu." },
        { role: "Automatisation", desc: "Planification avancée et publication automatique via workflows backend." },
        { role: "Multi-plateforme", desc: "Connectivité native avec Twitter (X) et LinkedIn." }
    ];

    const functionalNeeds = [
        {
            title: "Gestion de Contenu",
            desc: "Création de contenu, éditeur riche, et amélioration par bouton 'Enhance with AI'.",
            icon: LayoutDashboard
        },
        {
            title: "Planification & Publication",
            desc: "Publication immédiate ou planifiée, visualisation des posts programmés.",
            icon: Clock
        },
        {
            title: "Authentification & Profil",
            desc: "Connexion sécurisée, gestion du profil utilisateur et de l'état des connexions OAuth.",
            icon: Share2
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
                            <Smartphone className="w-3 h-3" /> MOBILE APPS
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        >
                            AutoAssist<span className="text-gradient">App</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            Une solution mobile unifiée conçue pour simplifier et automatiser le flux de travail des médias sociaux en
                            combinant la puissance de l'Intelligence Artificielle avec une interface utilisateur intuitive.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-24"
                    >
                        <div className="relative group rounded-3xl overflow-hidden border border-border/50 max-w-4xl w-full aspect-video md:aspect-[21/9] bg-muted shadow-2xl">
                            <img
                                src="/autoassitapp.webp"
                                alt="AutoAssistApp Interface"
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
                                        <BrainCircuit className="w-6 h-6 text-primary" />
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
                                <Workflow className="text-primary" />
                                La Problématique
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Dans le paysage numérique actuel, la gestion efficace des réseaux sociaux est devenue un défi majeur pour les créateurs de contenu et les entreprises.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Fragmentation des outils et multiplication des applications",
                                    "Perte de temps dans la création de contenu engageant",
                                    "Manque de cohérence et difficulté de maintenir une fréquence",
                                    "Syndrome de la page blanche et la barrière à l'optimisation"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-destructive" /> {text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative glass-card p-8 border-border/50"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <h4 className="font-bold flex items-center gap-2"><Zap className="w-5 h-5 text-secondary" /> Solution AI Activable</h4>
                                    <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded font-mono">ENHANCED</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                                        <p className="text-sm italic font-light mb-4 text-muted-foreground">
                                            "Écrire des posts attractifs n'a jamais été aussi simple, notre bouton IA transforme une idée brute en un post viral en un clic."
                                        </p>
                                        <div className="flex items-center gap-3 justify-end">
                                            <Bot className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-bold text-gradient">Gemini AI Model</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                                            <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">Stack Mobile</p>
                                            <p className="text-sm font-bold">Flutter & Dart</p>
                                        </div>
                                        <div className="p-4 bg-foreground/5 rounded-xl border border-border/50">
                                            <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-tighter">Backend API</p>
                                            <p className="text-sm font-bold">Node.js / Express</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- FONCTIONNALITÉS GRID --- */}
                    <div className="mb-32">
                        <h2 className="text-3xl font-bold text-center mb-16">Besoins <span className="text-primary">Fonctionnels</span></h2>
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

                    <div className="text-center p-12 rounded-[40px] bg-foreground/5 border border-border/50">
                        <h2 className="text-2xl font-bold mb-4">Une architecture technique solide</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Sécurité via Google Cloud Firestore, NoSQL, APIs Firebase Auth. Interface à 60fps, optimisée pour minimiser les requêtes asynchrones en arrière-plan et supporter des workflows de bout en bout.
                        </p>
                    </div>

                </div>
            </main>
        </PageTransition>
    );
}
