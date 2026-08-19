import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AiAutomationLanding from "./pages/AiAutomationLanding";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import CookieConsent from "@/components/CookieConsent";
import { captureAttribution } from "@/lib/attribution";

const queryClient = new QueryClient();

/* First touch is recorded once, before anything renders. */
captureAttribution();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Destination for /mkt reels and LinkedIn case-study posts. */}
          <Route path="/ai-automation" element={<AiAutomationLanding />} />
          <Route path="/ai" element={<AiAutomationLanding />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CookieConsent />
    </TooltipProvider>
    <SpeedInsights />
  </QueryClientProvider>


);

export default App;
