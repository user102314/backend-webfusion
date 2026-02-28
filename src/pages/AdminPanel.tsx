import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Users, LogOut, Check, X, RefreshCw, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Types basés sur le backend Spring
interface AvisO {
  id: number;
  nomUtilisateur: string;
  message: string;
  note: number;
  etat: string;
  dateCreation: string;
}

interface ContactO {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  dateEnvoi: string;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<"avis" | "contacts">("avis");
  const [avis, setAvis] = useState<AvisO[]>([]);
  const [contacts, setContacts] = useState<ContactO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  // ✅ URLs correctes selon vos controllers
  const AVIS_URL = "http://localhost:9090/api/avis";
  const CONTACTS_URL = "http://localhost:9090/api/contacts";

  // Vérification Auth + Chargement initial
  useEffect(() => {
    if (!localStorage.getItem("adminAuth")) {
      navigate("/Admin067");
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      console.log("📡 Chargement des données...");

      const [avisRes, contactsRes] = await Promise.all([
        fetch(AVIS_URL),
        fetch(CONTACTS_URL)
      ]);

      if (avisRes.ok) {
        const avisData = await avisRes.json();
        console.log("✅ Avis chargés:", avisData.length);
        setAvis(avisData);
      } else {
        console.error("❌ Erreur chargement avis:", avisRes.status);
      }

      if (contactsRes.ok) {
        const contactsData = await contactsRes.json();
        console.log("✅ Contacts chargés:", contactsData.length);
        setContacts(contactsData);
      } else {
        console.error("❌ Erreur chargement contacts:", contactsRes.status);
      }
    } catch (error) {
      console.error("❌ Erreur de connexion:", error);
      toast({
        title: "Erreur de connexion",
        description: "Impossible de joindre le serveur Spring Boot sur le port 9090.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Modifier l'état d'un avis (PUT /api/avis/{id}/etat?etat=APPROUVE)
  const handleModifyAvis = async (id: number, newEtat: string) => {
    try {
      console.log(`🔄 Modification avis ${id} → ${newEtat}`);

      const response = await fetch(`${AVIS_URL}/${id}/etat?etat=${newEtat}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const updatedAvis = await response.json();
        console.log("✅ Avis modifié:", updatedAvis);

        // Mettre à jour l'état local
        setAvis(avis.map(a => a.id === id ? updatedAvis : a));

        toast({
          title: "✅ Succès",
          description: `L'avis est maintenant : ${newEtat}`
        });
      } else {
        const errorText = await response.text();
        console.error("❌ Erreur modification:", errorText);
        throw new Error(errorText);
      }
    } catch (error) {
      console.error("❌ Erreur:", error);
      toast({
        title: "❌ Erreur",
        description: "Échec de la modification de l'avis.",
        variant: "destructive"
      });
    }
  };

  // ✅ Supprimer un avis (DELETE /api/avis/{id})
  const handleDeleteAvis = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet avis ?")) return;

    try {
      console.log(`🗑️ Suppression avis ${id}`);

      const response = await fetch(`${AVIS_URL}/${id}`, {
        method: 'DELETE'
      });

      if (response.ok || response.status === 204) {
        console.log("✅ Avis supprimé");
        setAvis(avis.filter(a => a.id !== id));
        toast({
          title: "✅ Supprimé",
          description: "L'avis a été supprimé avec succès."
        });
      } else {
        throw new Error("Erreur lors de la suppression");
      }
    } catch (error) {
      console.error("❌ Erreur suppression:", error);
      toast({
        title: "❌ Erreur",
        description: "Impossible de supprimer l'avis.",
        variant: "destructive"
      });
    }
  };

  // ✅ Supprimer un contact (DELETE /api/contacts/{id})
  const handleDeleteContact = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce contact ?")) return;

    try {
      console.log(`🗑️ Suppression contact ${id}`);

      const response = await fetch(`${CONTACTS_URL}/${id}`, {
        method: 'DELETE'
      });

      if (response.ok || response.status === 204) {
        console.log("✅ Contact supprimé");
        setContacts(contacts.filter(c => c.id !== id));
        toast({
          title: "✅ Supprimé",
          description: "Le contact a été supprimé avec succès."
        });
      } else {
        throw new Error("Erreur lors de la suppression");
      }
    } catch (error) {
      console.error("❌ Erreur suppression:", error);
      toast({
        title: "❌ Erreur",
        description: "Impossible de supprimer le contact.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/Admin067");
  };

  // Formater la date
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <main className="pt-28 pb-12 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Panneau <span className="text-gradient">Admin</span>
          </h1>
          <div className="flex gap-4">
            <button
              onClick={fetchData}
              className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
              disabled={isLoading}
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <motion.button
              onClick={handleLogout}
              className="btn-ghost-neon flex items-center gap-2 text-red-400 border-red-400/20"
              whileHover={{ scale: 1.02 }}
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </motion.button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("avis")}
            className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === "avis"
              ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              : "glass-card hover:border-primary/50"
              }`}
          >
            <MessageSquare className="w-5 h-5" />
            Avis ({avis.length})
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === "contacts"
              ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              : "glass-card hover:border-primary/50"
              }`}
          >
            <Users className="w-5 h-5" />
            Contacts ({contacts.length})
          </button>
        </div>

        {/* Content Section */}
        {isLoading && avis.length === 0 && contacts.length === 0 ? (
          <div className="flex justify-center py-20">
            <RefreshCw className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* ONGLET AVIS */}
            {activeTab === "avis" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4"
              >
                {avis.length === 0 && (
                  <p className="text-muted-foreground text-center py-10">
                    Aucun avis reçu.
                  </p>
                )}
                {avis.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card p-6 flex justify-between items-start border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-lg">{item.nomUtilisateur}</span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${item.etat === "APPROUVE" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                          item.etat === "REJETE" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                            "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          }`}>
                          {item.etat}
                        </span>
                      </div>
                      <p className="text-foreground/80 mb-3 italic">"{item.message}"</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                        <span className="text-primary">Note: {item.note}/5</span>
                        <span>Date: {formatDate(item.dateCreation)}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleModifyAvis(item.id, "APPROUVE")}
                        className="p-3 rounded-xl bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 transition-all"
                        title="Approuver"
                        disabled={item.etat === "APPROUVE"}
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleModifyAvis(item.id, "REJETE")}
                        className="p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                        title="Rejeter"
                        disabled={item.etat === "REJETE"}
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteAvis(item.id)}
                        className="p-3 rounded-xl bg-muted text-muted-foreground hover:bg-muted/80 border border-border/50 transition-all"
                        title="Supprimer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ONGLET CONTACTS */}
            {activeTab === "contacts" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4"
              >
                {contacts.length === 0 && (
                  <p className="text-muted-foreground text-center py-10">
                    Aucun message de contact.
                  </p>
                )}
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="glass-card p-6 border-border/50 hover:border-primary/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-primary">{contact.nom}</h3>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(contact.dateEnvoi)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-sm font-mono text-muted-foreground">{contact.email}</span>
                          {contact.telephone && (
                            <span className="text-xs text-muted-foreground/70">{contact.telephone}</span>
                          )}
                        </div>
                        <button
                          onClick={() => handleDeleteContact(contact.id)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-foreground/5 p-4 rounded-lg border border-border/50">
                      <p className="text-sm leading-relaxed">{contact.message}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </main>
  );
}