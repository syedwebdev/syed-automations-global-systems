import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import BusinessProcessAutomation from "./pages/solutions/BusinessProcessAutomation";
import RPABots from "./pages/solutions/RPABots";
import AIAutomation from "./pages/solutions/AIAutomation";
import DashboardsCommandCenters from "./pages/solutions/DashboardsCommandCenters";
import Integrations from "./pages/solutions/Integrations";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Audit from "./pages/Audit";
import StartAutomation from "./pages/StartAutomation";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/business-process-automation" element={<BusinessProcessAutomation />} />
          <Route path="/solutions/rpa-bots" element={<RPABots />} />
          <Route path="/solutions/ai-automation" element={<AIAutomation />} />
          <Route path="/solutions/dashboards-command-centers" element={<DashboardsCommandCenters />} />
          <Route path="/solutions/integrations" element={<Integrations />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/start-your-automation" element={<StartAutomation />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout/:plan" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
