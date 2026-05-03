import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Plug, Database, CreditCard, MessageSquare, Cloud, Code, Link2, Shuffle } from "lucide-react";

const Integrations = () => (
  <SolutionPageTemplate
    eyebrow="Enterprise Integrations"
    title="Connect Every System"
    highlight="Seamlessly"
    intro="Eliminate silos and manual data transfers. We build robust, secure integrations across your CRM, ERP, payments, communication, and SaaS platforms."
    icon={Plug}
    problem="Disconnected systems create data drift, duplicate work, and slow decision-making. Teams copy-paste between tools all day."
    solution="We design and operate enterprise-grade integrations that move data reliably between every system in your stack — in real-time or scheduled."
    outcome="A unified data fabric where every tool reflects the same truth, and every team works from the same source."
    metrics={[
      { value: "200+", label: "Pre-Built Connectors" },
      { value: "99.9%", label: "Sync Reliability" },
      { value: "< 100ms", label: "Avg Sync Latency" },
      { value: "Real-time", label: "Event Streaming" },
    ]}
    capabilities={[
      { icon: Database, title: "CRM & ERP Sync", description: "Bidirectional sync between Salesforce, HubSpot, Zoho, SAP, Oracle, and more." },
      { icon: CreditCard, title: "Payment Gateways", description: "Automate Razorpay, Stripe, PayPal flows including reconciliation and refunds." },
      { icon: MessageSquare, title: "Comms Platforms", description: "WhatsApp, email, SMS, Slack, and Teams integrations for automation triggers." },
      { icon: Cloud, title: "SaaS Connectors", description: "Connect Google Workspace, Microsoft 365, Notion, Airtable, and 200+ tools." },
      { icon: Code, title: "Custom APIs", description: "Build and host secure custom APIs for internal and partner integrations." },
      { icon: Shuffle, title: "ETL & Pipelines", description: "Schedule, transform, and route data between databases and warehouses." },
    ]}
    workflow={[
      { step: "01", title: "Systems Audit", description: "Map your stack, data flows, and integration gaps." },
      { step: "02", title: "Architecture", description: "Design event-driven, fault-tolerant integration patterns." },
      { step: "03", title: "Build & Test", description: "Implement with retries, idempotency, and full observability." },
      { step: "04", title: "Operate", description: "Monitor, alert, and evolve as your stack grows." },
    ]}
    useCases={[
      { title: "Lead-to-CRM Pipeline", description: "Capture leads from forms, ads, and chat, enrich, and sync into the CRM with attribution." },
      { title: "Payment Reconciliation", description: "Match payment gateway settlements to invoices and post entries automatically." },
      { title: "Inventory Sync", description: "Keep stock levels consistent across e-commerce, marketplaces, and POS in real time." },
      { title: "WhatsApp Workflow Triggers", description: "Customer actions on WhatsApp triggering CRM updates, tickets, and alerts." },
    ]}
    faqs={[
      { q: "Do you build custom connectors?", a: "Yes. If a tool has an API, we can integrate it. We also build for legacy and on-prem systems." },
      { q: "How do you handle security?", a: "Encrypted credentials, scoped tokens, IP whitelisting, and SOC 2-aligned practices." },
      { q: "What if an integration fails?", a: "We implement retries, dead-letter queues, and alerts so nothing is silently dropped." },
    ]}
  />
);

export default Integrations;
