import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Bot, Cpu, Database, FileSpreadsheet, Repeat, Monitor, ShieldCheck, Activity } from "lucide-react";

const RPABots = () => (
  <SolutionPageTemplate
    eyebrow="Robotic Process Automation"
    title="Software Bots That"
    highlight="Work Around the Clock"
    intro="Deploy intelligent bots across desktop, web, and legacy systems to handle repetitive, rule-based work with 100% accuracy — without touching your existing software."
    icon={Bot}
    problem="Repetitive tasks like data entry, reconciliation, and report generation drain hours every week and introduce costly human errors."
    solution="We build and deploy enterprise-grade bots that operate across any application — UI, API, or legacy — executing rule-based work with precision."
    outcome="Massive time savings, zero typos, and your team reclaimed for high-judgment, high-value work."
    metrics={[
      { value: "100%", label: "Task Accuracy" },
      { value: "24/7", label: "Bot Availability" },
      { value: "70%", label: "Cost Reduction" },
      { value: "< 1s", label: "Avg Task Time" },
    ]}
    capabilities={[
      { icon: Monitor, title: "Desktop Automation", description: "Bots that operate any Windows or Mac application — including legacy software." },
      { icon: Cpu, title: "Cloud & Web Bots", description: "Headless and browser-based bots for SaaS platforms and web portals." },
      { icon: Database, title: "Data Entry & Extraction", description: "Pull from PDFs, Excel, emails, and databases — push to anywhere." },
      { icon: FileSpreadsheet, title: "Report Generation", description: "Aggregate, format, and distribute scheduled operational and financial reports." },
      { icon: Repeat, title: "Multi-System Sync", description: "Keep CRM, ERP, billing, and ops platforms perfectly in sync." },
      { icon: ShieldCheck, title: "Secure Execution", description: "Credential vault, role-based access, and full execution audit logs." },
    ]}
    workflow={[
      { step: "01", title: "Task Analysis", description: "We profile candidate tasks for ROI, complexity, and stability." },
      { step: "02", title: "Bot Development", description: "Built and tested in isolated environments before production rollout." },
      { step: "03", title: "Deployment", description: "Bots deployed with monitoring, alerts, and exception handling baked in." },
      { step: "04", title: "Bot Operations", description: "Ongoing maintenance, scaling, and updates as your processes evolve." },
    ]}
    useCases={[
      { title: "Invoice Processing", description: "Read invoices from email, validate against POs, and post to ERP with no human touch." },
      { title: "Payroll Reconciliation", description: "Match attendance, leaves, and payroll across HRMS and accounting systems." },
      { title: "Order-to-Cash Automation", description: "Bots create orders, sync inventory, generate invoices, and follow up on collections." },
      { title: "KYC & Compliance Checks", description: "Pull data from registries, validate documents, and route exceptions to officers." },
    ]}
    faqs={[
      { q: "Will bots break if our software updates?", a: "We build resilient bots with self-healing patterns and monitor them proactively for changes." },
      { q: "Can bots handle exceptions?", a: "Yes — exceptions are routed to humans through structured queues with full context." },
      { q: "Where do bots run?", a: "On your infrastructure, our managed cloud, or a hybrid setup — your choice." },
    ]}
  />
);

export default RPABots;
