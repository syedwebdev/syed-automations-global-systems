import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { LayoutDashboard, BarChart3, Activity, Bell, Users, Filter, Zap, Eye } from "lucide-react";

const DashboardsCommandCenters = () => (
  <SolutionPageTemplate
    eyebrow="Dashboards & Command Centers"
    title="One Screen to"
    highlight="Run Your Business"
    intro="Custom-built command centers that unify automation status, KPIs, and live operations — giving leadership full visibility and instant control."
    icon={LayoutDashboard}
    problem="Operational data is scattered across tools. Leaders lack a unified view of what's running, what's stuck, and what matters."
    solution="We build branded command centers that consolidate automation health, business KPIs, and workflow control into a single real-time interface."
    outcome="Decisions made in seconds, not days. Issues spotted before they become incidents. Teams aligned on the same source of truth."
    metrics={[
      { value: "Real-time", label: "Live Data Refresh" },
      { value: "100%", label: "Operational Visibility" },
      { value: "< 5min", label: "Issue Detection" },
      { value: "∞", label: "Custom Views" },
    ]}
    capabilities={[
      { icon: Activity, title: "Live Monitoring", description: "Real-time status of every workflow, bot, and integration." },
      { icon: BarChart3, title: "KPI Dashboards", description: "Revenue, ops, and team metrics with drill-down analytics." },
      { icon: Bell, title: "Alerting & Anomalies", description: "Smart alerts when patterns break or thresholds are crossed." },
      { icon: Users, title: "Client Portals", description: "White-labeled portals for clients to view their data and reports." },
      { icon: Filter, title: "Custom Views", description: "Role-based views for ops, finance, sales, and leadership." },
      { icon: Zap, title: "Workflow Controls", description: "Pause, retry, and trigger workflows directly from the dashboard." },
    ]}
    workflow={[
      { step: "01", title: "Stakeholder Mapping", description: "We define what each role needs to see — and act on." },
      { step: "02", title: "Data Pipelines", description: "Connect data sources, automation runs, and external APIs." },
      { step: "03", title: "Dashboard Build", description: "Branded, responsive dashboards with role-based access." },
      { step: "04", title: "Iterate & Expand", description: "Refine based on usage and add new modules as needs evolve." },
    ]}
    useCases={[
      { title: "Operations Command Center", description: "Real-time view of orders, inventory, deliveries, and exceptions across regions." },
      { title: "Sales Performance Hub", description: "Pipeline, conversion rates, and rep performance with automated leaderboards." },
      { title: "Finance Control Tower", description: "Cash flow, AR/AP, and reconciliation status with drill-downs by entity." },
      { title: "Automation Health Dashboard", description: "Monitor every running workflow, bot, and integration in one view." },
    ]}
    faqs={[
      { q: "Can you connect to our existing tools?", a: "Yes. We integrate with virtually any database, SaaS API, spreadsheet, or warehouse." },
      { q: "Are dashboards mobile-friendly?", a: "Absolutely — designed responsive-first for executives on the go." },
      { q: "Who owns the dashboard code?", a: "You do. We deliver source-available, fully owned dashboards on your infrastructure." },
    ]}
  />
);

export default DashboardsCommandCenters;
