import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { Workflow, GitBranch, Bell, FileCheck, Users, Clock, Layers, Shield } from "lucide-react";

const BusinessProcessAutomation = () => (
  <SolutionPageTemplate
    eyebrow="Business Process Automation"
    title="Run Your Operations on"
    highlight="Auto-Pilot"
    intro="Replace manual approvals, handoffs, and follow-ups with intelligent workflows that route, escalate, and execute across your organization — 24/7."
    icon={Workflow}
    problem="Manual processes create bottlenecks, missed approvals, and inconsistent execution. Teams spend hours on coordination instead of decisions."
    solution="We design end-to-end workflows that orchestrate approvals, routing, notifications, and SLAs across departments — giving you a single source of truth."
    outcome="Faster execution, complete visibility, and zero dropped tasks. Operations run consistently regardless of team size or time zone."
    metrics={[
      { value: "10x", label: "Faster Execution" },
      { value: "99.6%", label: "Process Accuracy" },
      { value: "24/7", label: "Always-On Workflows" },
      { value: "85%", label: "Manual Effort Reduced" },
    ]}
    capabilities={[
      { icon: GitBranch, title: "Approval Workflows", description: "Multi-level approvals with conditional routing, delegation, and SLA tracking." },
      { icon: Bell, title: "Smart Notifications", description: "Right person, right channel, right moment — across email, WhatsApp, and Slack." },
      { icon: FileCheck, title: "Document Routing", description: "Auto-route documents through review, approval, signature, and archival." },
      { icon: Users, title: "Cross-Team Orchestration", description: "Coordinate sales, ops, finance, and HR in unified end-to-end workflows." },
      { icon: Clock, title: "SLA Management", description: "Automatic escalations and reminders to prevent breached deadlines." },
      { icon: Shield, title: "Audit Trails", description: "Every action logged for compliance, governance, and operational reviews." },
    ]}
    workflow={[
      { step: "01", title: "Process Discovery", description: "We map your existing workflows and identify high-impact bottlenecks." },
      { step: "02", title: "Blueprint Design", description: "A tailored automation blueprint covering rules, roles, and integrations." },
      { step: "03", title: "Build & Deploy", description: "Workflows configured, tested, and deployed with zero disruption." },
      { step: "04", title: "Optimize & Scale", description: "Continuous monitoring, refinement, and rollout across departments." },
    ]}
    useCases={[
      { title: "Purchase Order Approvals", description: "Route POs through finance, procurement, and leadership with automatic escalations." },
      { title: "Employee Onboarding", description: "Trigger IT provisioning, document collection, training, and access — automatically." },
      { title: "Customer Refund Workflows", description: "Validate, approve, and process refunds with full audit trails and customer updates." },
      { title: "Vendor Management", description: "Onboard, verify, and manage vendor lifecycles with policy-driven controls." },
    ]}
    faqs={[
      { q: "How long does implementation take?", a: "Most workflows go live in 2–4 weeks. Complex enterprise rollouts typically span 6–10 weeks." },
      { q: "Do we need to change our existing software?", a: "No. We integrate with the tools you already use — ERP, CRM, email, and SaaS systems." },
      { q: "Can workflows adapt as our business changes?", a: "Yes. Workflows are modular and can be updated without rebuilding from scratch." },
    ]}
  />
);

export default BusinessProcessAutomation;
