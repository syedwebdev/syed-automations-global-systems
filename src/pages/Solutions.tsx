import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { 
  Workflow, Bot, Brain, LayoutDashboard, Plug, 
  ArrowRight, CheckCircle, Zap 
} from "lucide-react";

const solutions = [
  {
    id: "bpa",
    icon: Workflow,
    title: "Business Process Automation",
    subtitle: "End-to-End Workflow Automation",
    problem: "Manual processes create bottlenecks, delays, and inconsistencies across your organization.",
    solution: "We design and implement automated workflows that handle approvals, notifications, data routing, and operations seamlessly.",
    outcome: "Faster execution, zero bottlenecks, and complete visibility across all business processes.",
    features: [
      "Approval workflow automation",
      "Document routing & processing",
      "Cross-department orchestration",
      "Real-time status tracking",
      "Exception handling & escalation",
    ],
  },
  {
    id: "rpa",
    icon: Bot,
    title: "RPA (Robotic Process Automation)",
    subtitle: "Intelligent Software Bots",
    problem: "Repetitive tasks drain employee time and are prone to human error.",
    solution: "Deploy intelligent bots that work across desktop and cloud applications, handling rule-based processes 24/7.",
    outcome: "Massive time savings, 100% accuracy, and employees freed for higher-value work.",
    features: [
      "Desktop & cloud bot deployment",
      "Legacy software automation",
      "Data entry & extraction",
      "Report generation",
      "Multi-system synchronization",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI + Intelligent Automation",
    subtitle: "Machine Learning Powered Systems",
    problem: "Traditional automation can't handle unstructured data or make intelligent decisions.",
    solution: "AI-powered systems that understand emails, process documents, make predictions, and automate complex decisions.",
    outcome: "Smart automation that adapts, learns, and handles complexity beyond rule-based systems.",
    features: [
      "Email understanding & routing",
      "Document AI & extraction",
      "Predictive analytics",
      "Decision automation",
      "Natural language processing",
    ],
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    title: "Dashboards & Command Centers",
    subtitle: "Central Control & Visibility",
    problem: "No unified view of operations, automation status, and business metrics.",
    solution: "Custom-built command centers that provide real-time visibility, analytics, and control over all automated systems.",
    outcome: "Complete operational transparency and instant access to actionable insights.",
    features: [
      "Real-time automation monitoring",
      "KPI dashboards & analytics",
      "Client portals",
      "Exception management",
      "Custom reporting",
    ],
  },
  {
    id: "integrations",
    icon: Plug,
    title: "Enterprise Integrations",
    subtitle: "Connected Business Systems",
    problem: "Siloed systems create data inconsistencies and manual data transfer between platforms.",
    solution: "Seamless integrations that connect your CRM, ERP, payment gateways, communication tools, and SaaS platforms.",
    outcome: "Unified data flow, eliminated manual transfers, and systems that work together intelligently.",
    features: [
      "CRM integrations (Salesforce, HubSpot)",
      "ERP connectivity",
      "Payment gateway automation",
      "WhatsApp & email automation",
      "Custom API development",
    ],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Our Solutions
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade{" "}
              <span className="gradient-text">Automation Solutions</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              From simple task automation to complex AI-driven workflows, 
              we deliver solutions that transform how your business operates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions List */}
      <section className="pb-24">
        <div className="section-container">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.id}>
                <div id={solution.id} className="scroll-mt-24">
                  <GlassCard className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Content */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <solution.icon className="w-7 h-7 text-primary-foreground" />
                          </div>
                          <div>
                            <h2 className="font-display text-2xl lg:text-3xl font-bold">
                              {solution.title}
                            </h2>
                            <p className="text-primary text-sm">{solution.subtitle}</p>
                          </div>
                        </div>

                        {/* Problem/Solution/Outcome */}
                        <div className="space-y-6 mb-8">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-xs">!</span>
                              The Problem
                            </h4>
                            <p className="text-muted-foreground">{solution.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <Zap className="w-5 h-5 text-primary" />
                              Our Solution
                            </h4>
                            <p className="text-muted-foreground">{solution.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              The Outcome
                            </h4>
                            <p className="text-muted-foreground">{solution.outcome}</p>
                          </div>
                        </div>

                        <Link to="/audit" className="btn-primary inline-flex items-center gap-2">
                          Get Started
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Right Features */}
                      <div className="bg-muted/30 rounded-2xl p-8">
                        <h4 className="font-display font-semibold text-lg mb-6">Key Capabilities</h4>
                        <ul className="space-y-4">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <GlassCard className="p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-4">
                Not Sure Which Solution Fits?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Book a free automation audit and we'll identify the highest-impact 
                opportunities for your business.
              </p>
              <Link to="/audit" className="btn-primary inline-flex items-center gap-2">
                Start Automating
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;