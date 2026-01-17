import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { 
  LineChart, ShoppingCart, Megaphone, Users, 
  Building2, Code, ArrowRight, TrendingUp, Clock, CheckCircle 
} from "lucide-react";

const industries = [
  {
    id: "finance",
    icon: LineChart,
    title: "Finance & Accounting",
    description: "Automate financial workflows, compliance reporting, and accounting processes.",
    useCases: [
      "Invoice processing & reconciliation",
      "Expense report automation",
      "Financial reporting & compliance",
      "Audit trail management",
      "Payment processing automation",
    ],
    metrics: { time: "80%", cost: "65%", accuracy: "99.9%" },
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Streamline orders, inventory, fulfillment, and customer operations.",
    useCases: [
      "Order processing & fulfillment",
      "Inventory management automation",
      "Customer support automation",
      "Returns & refund processing",
      "Multi-channel synchronization",
    ],
    metrics: { time: "70%", cost: "55%", accuracy: "99.5%" },
  },
  {
    id: "agencies",
    icon: Megaphone,
    title: "Marketing Agencies",
    description: "Automate client work, reporting, campaigns, and project management.",
    useCases: [
      "Client onboarding automation",
      "Automated reporting & dashboards",
      "Campaign management",
      "Lead nurturing sequences",
      "Cross-platform analytics",
    ],
    metrics: { time: "75%", cost: "60%", accuracy: "99%" },
  },
  {
    id: "hr",
    icon: Users,
    title: "Human Resources",
    description: "Transform HR operations from hiring to offboarding.",
    useCases: [
      "Employee onboarding automation",
      "Leave & attendance management",
      "Performance review automation",
      "Document management",
      "Compliance tracking",
    ],
    metrics: { time: "65%", cost: "50%", accuracy: "100%" },
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Operations",
    description: "Transform complex operations across global organizations.",
    useCases: [
      "Cross-department workflow automation",
      "Enterprise data integration",
      "Compliance & audit automation",
      "Vendor management",
      "Global operations orchestration",
    ],
    metrics: { time: "60%", cost: "70%", accuracy: "99.9%" },
  },
  {
    id: "saas",
    icon: Code,
    title: "SaaS Companies",
    description: "Build automated systems for onboarding, operations, and growth.",
    useCases: [
      "User onboarding automation",
      "Subscription management",
      "Customer success workflows",
      "Usage analytics & reporting",
      "Churn prevention automation",
    ],
    metrics: { time: "70%", cost: "55%", accuracy: "99%" },
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Industries
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Automation for{" "}
              <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              We deliver tailored automation solutions that address the unique 
              challenges and opportunities in your sector.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-24">
        <div className="section-container">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={index * 0.1}>
                <div id={industry.id} className="scroll-mt-24">
                  <GlassCard className="p-8 lg:p-10">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <industry.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h2 className="font-display text-2xl font-bold">{industry.title}</h2>
                        </div>
                        <p className="text-muted-foreground text-lg mb-6">{industry.description}</p>
                        
                        <h4 className="font-semibold text-foreground mb-4">Key Use Cases</h4>
                        <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                          {industry.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {useCase}
                            </li>
                          ))}
                        </ul>

                        <Link to="/audit" className="btn-primary inline-flex items-center gap-2">
                          Explore Solutions
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Metrics */}
                      <div className="bg-muted/30 rounded-xl p-6">
                        <h4 className="font-display font-semibold mb-6 text-center">Expected Results</h4>
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Clock className="w-5 h-5 text-primary" />
                              <span className="font-display text-3xl font-bold text-foreground">
                                {industry.metrics.time}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm">Time Saved</p>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-green-500" />
                              <span className="font-display text-3xl font-bold text-foreground">
                                {industry.metrics.cost}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm">Cost Reduction</p>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <CheckCircle className="w-5 h-5 text-secondary" />
                              <span className="font-display text-3xl font-bold text-foreground">
                                {industry.metrics.accuracy}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm">Accuracy Rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;