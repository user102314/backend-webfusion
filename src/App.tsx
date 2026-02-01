import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Index from "./pages/Index";
import Projets from "./pages/Projets";
import ProjetDetail from "./pages/ProjetDetail";
import Temoignages from "./pages/Temoignages";
import Equipe from "./pages/Equipe";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import MyLBDetail from "./pages/MyLBDetail";
import FormacityDetail from "./pages/FormacityDetail";
import CafeZoneProject from "./pages/cafeDetail";
import WebFusionDetail from "./pages/WebFusionDetail";
import TeamSection from "./pages/TeamSection";
  

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/projets/mylb" element={<MyLBDetail />} />
              <Route path="/projets/formacity" element={<FormacityDetail />} />
              <Route path="/projets/cafe-zone" element={<CafeZoneProject />} />
              <Route path="/projets/webfusion-digital" element={<WebFusionDetail />} />

              <Route path="/temoignages" element={<Temoignages />} />
              <Route path="/gallery" element={<TeamSection />} />

              <Route path="/equipe" element={<Equipe />} />
              <Route path="/competences" element={<Competences />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="/Admin067" element={<AdminLogin />} />
              <Route path="/Admin067/panel" element={<AdminPanel />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
