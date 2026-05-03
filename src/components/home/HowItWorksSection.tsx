import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { Search, Palette, Rocket, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Process Discovery",
    description: "We analyze your existing workflows, identify bottlenecks, and map automation opportunities with measurable impact.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Automation Design",
    description: "Our architects design scalable automation blueprints tailored to your systems, security requirements, and growth plans.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build & Deploy",
    description: "We develop, test, and deploy your automation systems with minimal disruption to ongoing operations.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Monitor & Optimize",
    description: "Continuous monitoring, analytics, and optimization ensure your automations evolve with your business needs.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven framework that takes you from manual chaos to automated excellence.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.18, ease: "easeOut" }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.18 + 0.3 }}
                    className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center rounded-full bg-card border border-primary/40"
                  >
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-8 text-center relative z-10 h-full transition-shadow hover:shadow-[0_20px_50px_-20px_hsl(var(--glow-primary)/0.4)] hover:border-primary/40"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;