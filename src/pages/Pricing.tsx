import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Starter Automation",
    ideal: "Small businesses & startups",
    description: "Perfect for businesses beginning their automation journey.",
    engagement: "Project-based",
    features: [
      "1-3 automated workflows",
      "Basic integrations",
      "Email & chat support",
      "30-day optimization period",
      "Documentation & training",
    ],
    highlighted: false,
  },
  {
    name: "Business Automation",
    ideal: "Growing businesses",
    description: "Comprehensive automation for scaling operations.",
    engagement: "Retainer / Project",
    features: [
      "5-10 automated workflows",
      "Advanced integrations",
      "Priority support",
      "Custom dashboard",
      "Monthly optimization reviews",
      "Dedicated success manager",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise Automation",
    ideal: "Large organizations",
    description: "Full-scale digital transformation with ongoing support.",
    engagement: "Annual contract",
    features: [
      "Unlimited workflows",
      "Enterprise integrations",
      "24/7 dedicated support",
      "Custom command center",
      "Continuous optimization",
      "Strategic automation roadmap",
      "On-site workshops available",
    ],
    highlighted: false,
  },
  {
    name: "Custom Solutions",
    ideal: "Unique requirements",
    description: "Tailored automation for complex or specialized needs.",
    engagement: "Custom scope",
    features: [
      "Fully customized scope",
      "Specialized integrations",
      "White-label options",
      "Custom AI models",
      "Dedicated team",
      "Flexible engagement terms",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Engagement Models{" "}
              <span className="gradient-text">Built for Growth</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Flexible automation solutions designed to match your business 
              scale and objectives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <AnimatedSection key={tier.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`h-full ${tier.highlighted ? 'relative' : ''}`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full">
                      <span className="text-xs font-semibold text-primary-foreground flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <GlassCard 
                    hover={false}
                    className={`h-full flex flex-col ${tier.highlighted ? 'border-primary/50 shadow-[0_0_40px_-10px_hsl(var(--glow-primary)/0.3)]' : ''}`}
                  >
                    <div className="mb-6">
                      <h3 className="font-display text-xl font-bold mb-2">{tier.name}</h3>
                      <p className="text-primary text-sm mb-2">{tier.ideal}</p>
                      <p className="text-muted-foreground text-sm">{tier.description}</p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-border">
                      <span className="text-muted-foreground text-sm">Engagement:</span>
                      <p className="font-semibold text-foreground">{tier.engagement}</p>
                    </div>

                    <ul className="space-y-3 flex-1 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to="/contact" 
                      className={tier.highlighted ? "btn-primary text-center" : "btn-secondary text-center"}
                    >
                      Request Proposal
                    </Link>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style Note */}
      <section className="pb-24">
        <div className="section-container">
          <AnimatedSection>
            <GlassCard className="p-8 lg:p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold mb-4">
                Why No Fixed Prices?
              </h2>
              <p className="text-muted-foreground mb-6">
                Every business is unique. Automation complexity, integration 
                requirements, and desired outcomes vary significantly. We provide 
                custom proposals that reflect your actual needs—not a one-size-fits-all 
                price that might under or over-scope your project.
              </p>
              <Link to="/audit" className="btn-primary inline-flex items-center gap-2">
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;