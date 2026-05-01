import AnimatedSection from "../ui/AnimatedSection";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, AlertTriangle, Server, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "99.9% Uptime",
    description: "SLA-backed availability across automation pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Pipelines",
    description: "Encrypted execution, scoped credentials, audit trails.",
  },
  {
    icon: Server,
    title: "Real-time Monitoring",
    description: "Live execution metrics, queue health, and alerting.",
  },
  {
    icon: AlertTriangle,
    title: "Error Handling & Logs",
    description: "Automatic retries, dead-letter queues, full run history.",
  },
];

const TrustReliabilitySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Trust & Reliability
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Production-Grade</span> Operations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade infrastructure powering mission-critical automations 24/7.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="glass-card p-6 h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="glass-card p-6 max-w-3xl mx-auto flex items-center justify-center gap-3 text-center">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-foreground font-medium">
              <span className="gradient-text font-bold">1,000+ automations</span>{" "}
              executed across global customers — and counting.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustReliabilitySection;
