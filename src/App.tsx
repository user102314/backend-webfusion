import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Importation SEO

// Importation des pages
import Index from "./pages/Index";
import Projets from "./pages/Projets";
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
import JNBFitnessDetail from "./pages/JNBFitnessDetail";
import TeamSection from "./pages/TeamSection";
import Parlez from "./pages/Parlez";
import Services from "./pages/Services";
import AutoAssistAppDetail from "./pages/AutoAssistAppDetail";
import BrandsCityDetail from "./pages/BrandsCityDetail";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Configuration SEO par défaut pour tout le site */}
        <Helmet>
          <title>WebFusion | Agence Digitale & Solutions Web</title>
          <meta name="description" content="WebFusion accompagne les entreprises dans leur transformation digitale avec des solutions web modernes et performantes." />
          <link rel="canonical" href="https://webfusiondigital.tn" />
        </Helmet>

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
                <Route path="/projets/jnbfitness" element={<JNBFitnessDetail />} />
                <Route path="/projets/autoassistapp" element={<AutoAssistAppDetail />} />
                <Route path="/projets/brands-city" element={<BrandsCityDetail />} />
                <Route path="/temoignages" element={<Temoignages />} />
                <Route path="/gallery" element={<TeamSection />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/competences" element={<Competences />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/parlez" element={<Parlez />} />
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
  </HelmetProvider>
);

export default App;