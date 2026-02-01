import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Users, LogOut, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockAvis = [
  { id: 1, nomUtilisateur: "Sophie Martin", message: "Excellente équipe!", note: 5, etat: "APPROUVE", dateCreation: "2024-01-15" },
  { id: 2, nomUtilisateur: "Jean Test", message: "En attente de validation", note: 4, etat: "EN_ATTENTE", dateCreation: "2024-01-20" },
];

const mockContacts = [
  { id: 1, nom: "Pierre Dupont", email: "pierre@email.com", telephone: "+33123456789", message: "Je souhaite un devis", dateEnvoi: "2024-01-18" },
  { id: 2, nom: "Marie Durand", email: "marie@email.com", telephone: "+33987654321", message: "Question sur vos services", dateEnvoi: "2024-01-19" },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<"avis" | "contacts">("avis");
  const [avis, setAvis] = useState(mockAvis);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!localStorage.getItem("adminAuth")) navigate("/Admin067");
  }, [navigate]);

  const handleModifyAvis = (id: number, newEtat: string) => {
    setAvis(avis.map(a => a.id === id ? { ...a, etat: newEtat } : a));
    toast({ title: "Avis modifié", description: `État changé en ${newEtat}` });
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/Admin067");
  };

  return (
    <main className="pt-28 pb-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-display">Panneau <span className="text-gradient">Admin</span></h1>
          <motion.button onClick={handleLogout} className="btn-ghost-neon flex items-center gap-2" whileHover={{ scale: 1.02 }}>
            <LogOut className="w-4 h-4" />Déconnexion
          </motion.button>
        </div>

        <div className="flex gap-4 mb-8">
          <button onClick={() => setActiveTab("avis")} className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === "avis" ? "bg-primary text-primary-foreground" : "glass-card hover:border-primary/50"}`}>
            <MessageSquare className="w-5 h-5" />Avis
          </button>
          <button onClick={() => setActiveTab("contacts")} className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === "contacts" ? "bg-primary text-primary-foreground" : "glass-card hover:border-primary/50"}`}>
            <Users className="w-5 h-5" />Contacts
          </button>
        </div>

        {activeTab === "avis" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {avis.map((item) => (
              <div key={item.id} className="glass-card p-6 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold">{item.nomUtilisateur}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${item.etat === "APPROUVE" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>{item.etat}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">Note: {item.note}/5 • {item.dateCreation}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleModifyAvis(item.id, "APPROUVE")} className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30"><Check className="w-4 h-4" /></button>
                  <button onClick={() => handleModifyAvis(item.id, "REJETE")} className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30"><X className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "contacts" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {mockContacts.map((contact) => (
              <div key={contact.id} className="glass-card p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-semibold">{contact.nom}</span>
                  <span className="text-xs text-muted-foreground">{contact.dateEnvoi}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{contact.message}</p>
                <div className="flex gap-4 text-xs text-primary"><span>{contact.email}</span><span>{contact.telephone}</span></div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
