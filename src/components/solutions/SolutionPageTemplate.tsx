import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

export interface SolutionPageProps {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  outcome: string;
  capabilities: { icon: LucideIcon; title: string; description: string }[];
  workflow: { step: string; title: string; description: string }[];
  useCases: { title: string; description: string }[];
  metrics: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
}

const SolutionPageTemplate = ({
  eyebrow, title, highlight, intro, icon: Icon,
  problem, solution, outcome, capabilities, workflow, useCases, metrics, faqs,
}: SolutionPageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-card">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              {title} <span className="gradient-text">{highlight}</span>
            </h1>
            <p className="text-muted-foreground text-xl mb-8">{intro}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/start-your-automation" className="btn-primary inline-flex items-center gap-2">
                Start Automating <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="btn-secondary">View Plans</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="pb-12">
        <div className="section-container">
          <AnimatedSection>
            <GlassCard className="p-8" hover={false}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem / Solution / Outcome */}
      <section className="section-padding pt-12">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { label: "The Problem", text: problem, color: "text-destructive", icon: "!" },
              { label: "Our Approach", text: solution, color: "text-primary", icon: <Zap className="w-5 h-5" /> },
              { label: "The Outcome", text: outcome, color: "text-green-500", icon: <CheckCircle className="w-5 h-5" /> },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <div className={`flex items-center gap-2 mb-4 ${item.color} font-semibold`}>
                    {typeof item.icon === "string" ? (
                      <span className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs">
                        {item.icon}
                      </span>
                    ) : item.icon}
                    {item.label}
                  </div>
                  <p className="text-muted-foreground">{item.text}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built to handle enterprise-scale operations with reliability and precision.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <cap.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Deliver</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <div className="text-primary font-display text-3xl font-bold mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Real-World <span className="gradient-text">Use Cases</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-semibold mb-2">{uc.title}</h3>
                      <p className="text-muted-foreground text-sm">{uc.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-0">
        <div className="section-container max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <GlassCard hover={false}>
                  <h3 className="font-display font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <AnimatedSection>
            <GlassCard className="p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-bold mb-4">
                  Ready to deploy {title.toLowerCase()}?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Talk to our team and get a tailored implementation roadmap.
                </p>
                <Link to="/start-your-automation" className="btn-primary inline-flex items-center gap-2">
                  Start Automating <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionPageTemplate;
