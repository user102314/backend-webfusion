import { motion } from "framer-motion";
import { PageTransition } from "../components/layout/PageTransition";
import { Star, Send, Quote, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Interface alignée sur AvisODTO
interface Avis {
  id: number;
  nomUtilisateur: string;
  message: string;
  note: number;
  etat: string;
  dateCreation: string;
}

export default function Temoignages() {
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nomUtilisateur: "",
    message: "",
    note: 5,
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  // 1. Récupération des avis depuis le Backend
  const fetchAvis = async () => {
    try {
      console.log("Fetching avis from API...");
      const response = await fetch("http://localhost:9090/api/avis");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: Avis[] = await response.json();
      console.log("Avis reçus:", data);
      
      // Filtrer pour n'afficher que les avis approuvés
      const avisApprouves = data.filter((a: Avis) => a.etat === "APPROUVE");
      console.log("Avis approuvés:", avisApprouves);
      
      setAvis(avisApprouves);
    } catch (error) {
      console.error("Erreur fetch:", error);
      toast({
        variant: "destructive",
        title: "❌ Erreur",
        description: "Impossible de charger les avis. Vérifiez que le serveur backend est démarré.",
      });
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

    // Format des données pour correspondre à AvisODTO
    const dataToSend = {
      nomUtilisateur: formData.nomUtilisateur,
      message: formData.message,
      note: formData.note,
      // L'état sera mis à "EN_ATTENTE" par défaut côté serveur
    };

    console.log("Envoi des données:", dataToSend);

    try {
      const response = await fetch("http://localhost:9090/api/avis", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataToSend),
      });

      console.log("Réponse status:", response.status);
      
      if (response.ok) {
        const newAvis = await response.json();
        console.log("Avis créé:", newAvis);
        
        toast({
          title: "✨ Avis envoyé !",
          description: "Merci ! Votre témoignage sera visible après validation par l'administrateur.",
        });
        
        // Réinitialiser le formulaire
        setFormData({ 
          nomUtilisateur: "", 
          message: "", 
          note: 5 
        });
        
        // Rafraîchir la liste des avis
        fetchAvis();
      } else {
        const errorText = await response.text();
        console.error("Erreur serveur:", errorText);
        throw new Error(`Erreur ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        variant: "destructive",
        title: "❌ Erreur",
        description: "Impossible d'envoyer l'avis pour le moment. Vérifiez votre connexion.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (e) {
      return dateString;
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
                <span className="ml-3 text-muted-foreground">Chargement des avis...</span>
              </div>
            ) : avis.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <Quote className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
                <p className="text-muted-foreground italic">
                  Aucun avis publié pour le moment. Soyez le premier !
                </p>
              </div>
            ) : (
              avis.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 relative group hover:border-primary/50 transition-colors hover:shadow-xl"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                  <div className="mb-4">{renderStars(item.note)}</div>
                  <p className="text-foreground mb-6 italic line-clamp-4">"{item.message}"</p>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {item.nomUtilisateur.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-semibold block">{item.nomUtilisateur}</span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(item.dateCreation)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {item.etat === "APPROUVE" ? "✓ Approuvé" : item.etat}
                    </span>
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
            <div className="glass-card p-8 border-t-4 border-t-primary shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Laissez un avis</h2>
              </div>
              <p className="text-center text-muted-foreground mb-8">
                Votre avis nous aide à nous améliorer. Les témoignages sont modérés avant publication.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.nomUtilisateur}
                    onChange={(e) => setFormData({ ...formData, nomUtilisateur: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Votre nom ou pseudonyme"
                    required
                    minLength={2}
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Note <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-4">
                    {renderStars(formData.note, true, (n) => setFormData({ ...formData, note: n }))}
                    <span className="text-lg font-bold text-primary">
                      {formData.note}/5
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Cliquez sur les étoiles pour donner une note
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[120px] resize-none"
                    placeholder="Partagez votre expérience avec nous..."
                    required
                    minLength={10}
                    maxLength={1000}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Minimum 10 caractères
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting || !formData.nomUtilisateur || !formData.message}
                  className="btn-neon w-full py-4 flex items-center justify-center gap-2 font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer mon témoignage
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez que votre avis soit publié après modération.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}