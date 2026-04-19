import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Abstract from "@/pages/Abstract";
import Modules from "@/pages/Modules";
import ModuleDetail from "@/pages/ModuleDetail";
import Results from "@/pages/Results";
import DownloadPage from "@/pages/DownloadPage";
import References from "@/pages/References";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GlassNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:slug" element={<ModuleDetail />} />
          <Route path="/results" element={<Results />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
