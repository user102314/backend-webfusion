import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { Star, Send, Quote, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Interface alignée sur ton modèle Java AvisO
interface Avis {
  id: number;
  nom: string;
  message: string;
  note: number;
  etat: string;
}

export default function Temoignages() {
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nom: "",
    message: "",
    note: 5,
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  // 1. Récupération des avis depuis le Backend
  const fetchAvis = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/o/avis");
      if (response.ok) {
        const data = await response.json();
        // On n'affiche que les avis qui sont déjà approuvés (ex: etat === "1")
        // Si tu veux tout afficher même ceux à "0", enlève le filter
        setAvis(data.filter((a: Avis) => a.etat === "APPROUVE")); 
      }
    } catch (error) {
      console.error("Erreur fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvis();
  }, []);

  // 2. Envoi d'un nouvel avis
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const dataToSend = {
      ...formData,
      etat: "0" // L'état est initialisé à 0 par défaut
    };

    try {
      const response = await fetch("http://localhost:9090/api/o/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast({
          title: "✨ Avis envoyé !",
          description: "Merci ! Votre témoignage sera visible après validation par l'administrateur.",
        });
        setFormData({ nom: "", message: "", note: 5 });
      } else {
        throw new Error("Erreur serveur");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "❌ Erreur",
        description: "Impossible d'envoyer l'avis pour le moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
            className={interactive ? "transition-transform hover:scale-110" : ""}
            disabled={!interactive}
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating ? "fill-primary text-primary" : "text-muted-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <PageTransition>
      <main className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">Témoignages</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ce que disent nos <span className="text-gradient">clients</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les retours de nos clients et partagez votre expérience avec nous.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {loading ? (
              <div className="col-span-full flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : avis.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground italic">
                Aucun avis publié pour le moment. Soyez le premier !
              </p>
            ) : (
              avis.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 relative group hover:border-primary/50 transition-colors"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                  <div className="mb-4">{renderStars(item.note)}</div>
                  <p className="text-foreground mb-6 italic">"{item.message}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {item.nom.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold">{item.nom}</span>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="glass-card p-8 border-t-4 border-t-primary">
              <h2 className="text-2xl font-bold mb-6 text-center">Laissez un avis</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary outline-none transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Note</label>
                  {renderStars(formData.note, true, (n) => setFormData({ ...formData, note: n }))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary outline-none transition-all min-h-[120px] resize-none"
                    placeholder="Qu'avez-vous pensé de nos services ?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-neon w-full py-4 flex items-center justify-center gap-2 font-bold"
                >
                  {submitting ? <Loader2 className="animate-spin" /> : <Send className="w-4 h-4" />}
                  Envoyer mon témoignage
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}