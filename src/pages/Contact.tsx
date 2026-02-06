import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "web.fusion.suport@gmail.com",
    description: "Réponse sous 24h",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+216 44 321 987",
    description: "Lun-Ven, 9h-18h",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Tunis, Tunisie",
    description: "Rendez-vous sur place",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Clock,
    title: "Disponibilité",
    value: "Lun - Ven",
    description: "9h00 - 18h00",
    color: "from-amber-500 to-orange-500"
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
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({ 
    nom: "", 
    email: "", 
    telephone: "", 
    message: "" 
  });
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // ✅ Format correspondant exactement à ContactODTO
    const dataToSend = {
      nom: formData.nom,
      email: formData.email,
      telephone: formData.telephone, // Correspond à "telephone" dans le DTO
      message: formData.message
    };

    console.log("📤 Envoi des données contact:", dataToSend);

    try {
      const response = await fetch("http://localhost:9090/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataToSend),
      });

      console.log("📥 Réponse status:", response.status);

      if (response.ok) {
        const savedContact = await response.json();
        console.log("✅ Contact sauvegardé:", savedContact);
        
        toast({ 
          title: "✨ Message envoyé avec succès !", 
          description: "Nous vous répondrons dans les plus brefs délais." 
        });
        
        // Réinitialiser le formulaire
        setFormData({ nom: "", email: "", telephone: "", message: "" });
      } else {
        const errorText = await response.text();
        console.error("❌ Erreur serveur:", errorText);
        throw new Error(`Erreur ${response.status}`);
      }
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi:", error);
      toast({ 
        variant: "destructive",
        title: "❌ Échec de l'envoi", 
        description: "Impossible d'envoyer le message. Vérifiez que le serveur backend est démarré." 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Contactez-nous</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Parlons de votre{" "}
              <span className="text-gradient relative">
                projet
                <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-primary animate-pulse" />
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une idée innovante ? Un projet ambitieux ? Notre équipe est prête à 
              transformer votre vision en réalité digitale.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="glass-card p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 text-foreground">{info.title}</h3>
                  <p className="text-foreground font-medium text-sm mb-1">{info.value}</p>
                  <p className="text-muted-foreground text-xs">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-card p-8 border border-border/50">
                <h2 className="text-2xl font-bold mb-4">
                  Pourquoi nous <span className="text-gradient">choisir</span> ?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Expertise technique de pointe",
                    "Approche personnalisée",
                    "Communication transparente",
                    "Support continu post-projet"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 border border-border/50 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">Envoyez-nous un message</h2>
                  <p className="text-muted-foreground mb-8">Remplissez le formulaire et nous reviendrons vers vous rapidement.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.nom} 
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })} 
                          onFocus={() => setFocused("nom")}
                          onBlur={() => setFocused(null)}
                          placeholder="Votre nom"
                          className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-all outline-none ${
                            focused === "nom" ? "border-primary ring-2 ring-primary/20" : "border-border"
                          }`}
                          required
                          minLength={2}
                          maxLength={100}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="votre@email.com"
                          className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-all outline-none ${
                            focused === "email" ? "border-primary ring-2 ring-primary/20" : "border-border"
                          }`}
                          required 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Téléphone</label>
                      <input 
                        type="tel" 
                        value={formData.telephone} 
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} 
                        onFocus={() => setFocused("telephone")}
                        onBlur={() => setFocused(null)}
                        placeholder="+216 XX XXX XXX"
                        className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-all outline-none ${
                          focused === "telephone" ? "border-primary ring-2 ring-primary/20" : "border-border"
                        }`}
                        maxLength={20}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        value={formData.message} 
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Décrivez votre projet..."
                        className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-all outline-none min-h-[150px] resize-none ${
                          focused === "message" ? "border-primary ring-2 ring-primary/20" : "border-border"
                        }`}
                        required
                        minLength={10}
                        maxLength={2000}
                      />
                      <p className="text-sm text-muted-foreground">
                        Minimum 10 caractères
                      </p>
                    </div>

                    <motion.button 
                      type="submit" 
                      disabled={submitting || !formData.nom || !formData.email || !formData.message} 
                      className="btn-neon w-full flex items-center justify-center gap-3 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </motion.button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}