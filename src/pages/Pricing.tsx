import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { Check, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";

type Plan = {
  id: string;
  name: string;
  price: string;
  priceSuffix?: string;
  tagline: string;
  features: string[];
  cta: string;
  ctaTo: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹1,499",
    priceSuffix: "/month",
    tagline: "Begin your automation journey",
    features: [
      "Basic workflows",
      "Limited automations",
      "Standard integrations",
      "Email support",
    ],
    cta: "Activate Plan",
    ctaTo: "/checkout/starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹5,999",
    priceSuffix: "/month",
    tagline: "Scale operations across teams",
    features: [
      "Everything in Starter",
      "Multi-step workflows",
      "Priority execution",
      "API integrations",
      "Basic RPA bots",
    ],
    cta: "Activate Plan",
    ctaTo: "/checkout/growth",
    highlighted: true,
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹9,999",
    priceSuffix: "/month",
    tagline: "Advanced automation logic",
    features: [
      "Everything in Growth",
      "Advanced automation logic",
      "Conditional workflows",
      "Webhooks & triggers",
      "Analytics dashboard",
    ],
    cta: "Activate Plan",
    ctaTo: "/checkout/professional",
  },
  {
    id: "business",
    name: "Business",
    price: "₹19,999",
    priceSuffix: "/month",
    tagline: "High-volume, team-grade",
    features: [
      "Everything in Professional",
      "Dedicated automation pipelines",
      "High-volume execution",
      "Team collaboration",
      "Performance monitoring",
    ],
    cta: "Activate Plan",
    ctaTo: "/checkout/business",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    tagline: "Tailored to your operations",
    features: [
      "Custom RPA bots",
      "Dedicated infrastructure",
      "SLA-based uptime",
      "Account manager",
      "Custom integrations",
    ],
    cta: "Talk to Sales",
    ctaTo: "/contact",
  },
];

const comparisonRows: Array<{
  feature: string;
  values: (string | boolean)[];
}> = [
  { feature: "Number of workflows", values: ["3", "15", "50", "Unlimited", "Unlimited"] },
  { feature: "Automation complexity", values: ["Basic", "Multi-step", "Advanced + Conditional", "Pipelines", "Custom"] },
  { feature: "API & Webhooks", values: [false, true, true, true, true] },
  { feature: "RPA capabilities", values: [false, "Basic", "Advanced", "High-volume", "Custom RPA bots"] },
  { feature: "Execution speed", values: ["Standard", "Priority", "Priority", "Dedicated", "Dedicated infra"] },
  { feature: "Support level", values: ["Email", "Email + Chat", "Priority", "Priority + Phone", "24/7 + SLA"] },
  { feature: "Custom integrations", values: [false, false, true, true, true] },
  { feature: "Dedicated manager", values: [false, false, false, true, true] },
];

const renderCell = (val: string | boolean) => {
  if (val === true)
    return (
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="inline-flex"
      >
        <Check className="w-5 h-5 text-primary mx-auto" />
      </motion.span>
    );
  if (val === false) return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-foreground">{val}</span>;
};

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
              Simple, scalable plans for{" "}
              <span className="gradient-text">automation infrastructure</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Choose a plan, deploy workflows, and scale anytime. No hidden fees.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`h-full relative ${plan.highlighted ? "lg:scale-105" : ""}`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full z-10">
                      <span className="text-xs font-semibold text-primary-foreground flex items-center gap-1 whitespace-nowrap">
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <GlassCard
                    hover={false}
                    className={`h-full flex flex-col ${
                      plan.highlighted
                        ? "border-primary/50 shadow-[0_0_40px_-10px_hsl(var(--glow-primary)/0.4)]"
                        : ""
                    }`}
                  >
                    <div className="mb-6">
                      <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{plan.tagline}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-3xl font-bold gradient-text">
                          {plan.price}
                        </span>
                        {plan.priceSuffix && (
                          <span className="text-muted-foreground text-sm">{plan.priceSuffix}</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 flex-1 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={plan.ctaTo}
                      className={
                        plan.highlighted
                          ? "btn-primary text-center"
                          : "btn-secondary text-center"
                      }
                    >
                      {plan.cta}
                    </Link>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10">
            All plans are billed monthly. Scale anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link to="/start-your-automation" className="btn-primary">
              Start Automating
            </Link>
            <Link to="/checkout/growth" className="btn-secondary">
              Activate Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Compare Plans
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Find the right fit for your operations
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-sm text-muted-foreground">
                      Feature
                    </th>
                    {plans.map((p) => (
                      <th
                        key={p.id}
                        className={`p-4 text-sm font-semibold ${
                          p.highlighted ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border/50 ${
                        i % 2 === 0 ? "bg-card/20" : ""
                      }`}
                    >
                      <td className="p-4 text-sm font-medium text-foreground">
                        {row.feature}
                      </td>
                      {row.values.map((v, j) => (
                        <td key={j} className="p-4 text-center">
                          {renderCell(v)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
