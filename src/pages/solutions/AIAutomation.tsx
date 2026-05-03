import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Brain, Mail, FileText, MessageSquare, TrendingUp, Eye, Sparkles, Search } from "lucide-react";

const AIAutomation = () => (
  <SolutionPageTemplate
    eyebrow="AI + Intelligent Automation"
    title="Smart Systems That"
    highlight="Think and Decide"
    intro="Move beyond rule-based automation. Our AI-powered systems read, understand, and decide — handling unstructured data, complex judgments, and contextual decisions at scale."
    icon={Brain}
    problem="Traditional automation breaks when faced with unstructured emails, varied document formats, or decisions requiring context and nuance."
    solution="We embed AI models into your operations to read, classify, summarize, and act — turning unstructured chaos into structured outcomes."
    outcome="Automation that adapts to real-world complexity, scales without rewrites, and continuously improves with usage."
    metrics={[
      { value: "95%+", label: "Classification Accuracy" },
      { value: "60%", label: "Faster Decisions" },
      { value: "10M+", label: "Documents Processed" },
      { value: "30+", label: "Languages Supported" },
    ]}
    capabilities={[
      { icon: Mail, title: "Email Intelligence", description: "Auto-classify, route, and respond to inbound emails with contextual understanding." },
      { icon: FileText, title: "Document AI", description: "Extract structured data from invoices, contracts, KYC docs, and forms." },
      { icon: MessageSquare, title: "Conversational Agents", description: "AI assistants that handle support, sales qualification, and internal queries." },
      { icon: TrendingUp, title: "Predictive Analytics", description: "Forecast churn, demand, and risk with models tuned to your data." },
      { icon: Eye, title: "Vision & OCR", description: "Read images, scanned documents, and handwritten content reliably." },
      { icon: Search, title: "Knowledge Search", description: "AI-powered search across your internal documents, wikis, and tickets." },
    ]}
    workflow={[
      { step: "01", title: "Data & Use Case", description: "We identify high-value AI opportunities and assess data readiness." },
      { step: "02", title: "Model Selection", description: "Choose between fine-tuned, foundation, or custom models per use case." },
      { step: "03", title: "Integration", description: "Embed AI into existing workflows with safe fallback patterns." },
      { step: "04", title: "Monitor & Tune", description: "Continuous evaluation, drift detection, and accuracy improvement." },
    ]}
    useCases={[
      { title: "Inbox Triage", description: "Auto-categorize support emails, extract intent, and draft responses for review." },
      { title: "Contract Intelligence", description: "Extract clauses, obligations, and risk factors from contracts at scale." },
      { title: "Demand Forecasting", description: "Predict inventory needs, staffing levels, and revenue with confidence intervals." },
      { title: "Voice of Customer", description: "Analyze reviews, calls, and tickets to surface trends and product insights." },
    ]}
    faqs={[
      { q: "Is our data used to train public models?", a: "No. We use enterprise endpoints with strict data isolation and zero data retention where required." },
      { q: "How do you ensure accuracy?", a: "Through human-in-the-loop reviews, evaluation pipelines, and continuous monitoring." },
      { q: "Which AI models do you use?", a: "Best-fit per use case — including OpenAI, Anthropic, Google, and open-source models." },
    ]}
  />
);

export default AIAutomation;
