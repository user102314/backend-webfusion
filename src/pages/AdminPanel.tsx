import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Users, LogOut, Check, X, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Types basés sur ton backend Spring
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
  const API_BASE_URL = "http://localhost:9090/api/o"; // Ajuste le port si nécessaire

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
      const [avisRes, contactsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/avis`),
        fetch(`${API_BASE_URL}/contacts`)
      ]);
      
      if (avisRes.ok) setAvis(await avisRes.json());
      if (contactsRes.ok) setContacts(await contactsRes.json());
    } catch (error) {
      toast({ 
        title: "Erreur de connexion", 
        description: "Impossible de joindre le serveur Spring Boot.",
        variant: "destructive" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleModifyAvis = async (id: number, newEtat: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/avis/${id}/etat?etat=${newEtat}`, {
        method: 'PATCH',
      });

      if (response.ok) {
        setAvis(avis.map(a => a.id === id ? { ...a, etat: newEtat } : a));
        toast({ 
          title: "Succès", 
          description: `L'avis est maintenant : ${newEtat}` 
        });
      }
    } catch (error) {
      toast({ title: "Erreur", description: "Échec de la modification.", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/Admin067");
  };

  return (
    <main className="pt-28 pb-12 min-h-screen bg-[#0a0a0c] text-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panneau <span className="text-gradient">Admin</span></h1>
          <div className="flex gap-4">
            <button onClick={fetchData} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <RefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <motion.button onClick={handleLogout} className="btn-ghost-neon flex items-center gap-2 text-red-400 border-red-400/20" whileHover={{ scale: 1.02 }}>
              <LogOut className="w-4 h-4" />Déconnexion
            </motion.button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button onClick={() => setActiveTab("avis")} className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === "avis" ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "glass-card hover:border-primary/50"}`}>
            <MessageSquare className="w-5 h-5" />Avis ({avis.length})
          </button>
          <button onClick={() => setActiveTab("contacts")} className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === "contacts" ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "glass-card hover:border-primary/50"}`}>
            <Users className="w-5 h-5" />Contacts ({contacts.length})
          </button>
        </div>

        {/* Content Section */}
        {isLoading && avis.length === 0 ? (
          <div className="flex justify-center py-20"><RefreshCw className="w-10 h-10 animate-spin text-primary" /></div>
        ) : (
          <>
            {activeTab === "avis" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-4">
                {avis.length === 0 && <p className="text-muted-foreground text-center py-10">Aucun avis reçu.</p>}
                {avis.map((item) => (
                  <div key={item.id} className="glass-card p-6 flex justify-between items-start border-white/5 hover:border-primary/30 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-lg">{item.nomUtilisateur}</span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                          item.etat === "APPROUVE" ? "bg-green-500/10 text-green-400 border border-green-500/20" : 
                          item.etat === "REJETE" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                          "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                        }`}>
                          {item.etat}
                        </span>
                      </div>
                      <p className="text-foreground/80 mb-3 italic">"{item.message}"</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                        <span className="text-primary">Note: {item.note}/5</span>
                        <span>Date: {new Date(item.dateCreation).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button 
                        onClick={() => handleModifyAvis(item.id, "APPROUVE")} 
                        className="p-3 rounded-xl bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 transition-all"
                        title="Approuver"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleModifyAvis(item.id, "REJETE")} 
                        className="p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                        title="Rejeter"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "contacts" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-4">
                {contacts.length === 0 && <p className="text-muted-foreground text-center py-10">Aucun message de contact.</p>}
                {contacts.map((contact) => (
                  <div key={contact.id} className="glass-card p-6 border-white/5 hover:border-primary/30 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-primary">{contact.nom}</h3>
                        <p className="text-xs text-muted-foreground">{new Date(contact.dateEnvoi).toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-sm font-mono text-white/70">{contact.email}</span>
                        <span className="text-xs text-white/50">{contact.telephone}</span>
                      </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
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