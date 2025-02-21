
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import LanguageSwitcher from "./components/LanguageSwitcher";

const queryClient = new QueryClient();

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative">
            <Navigation currentLanguage={currentLanguage} />
            <LanguageSwitcher 
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products currentLanguage={currentLanguage} />} />
              <Route path="/about" element={<About currentLanguage={currentLanguage} />} />
              <Route path="/contact" element={<Contact currentLanguage={currentLanguage} />} />
              <Route path="/admin" element={<Admin currentLanguage={currentLanguage} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
