import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { TrendingDown, Zap, CheckCircle, Expand, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "30-70% Cost Reduction",
    description: "Dramatically reduce operational costs by automating manual processes and eliminating human error.",
  },
  {
    icon: Zap,
    title: "10x Faster Operations",
    description: "Accelerate workflows that once took hours into seconds with intelligent automation.",
  },
  {
    icon: CheckCircle,
    title: "Zero Human Error",
    description: "Ensure 100% accuracy in repetitive tasks with perfectly consistent automated execution.",
  },
  {
    icon: Expand,
    title: "Infinitely Scalable",
    description: "Systems that grow with your business without proportional increases in cost or complexity.",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your automated systems never sleep, processing work around the clock without downtime.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Syed Automations
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              The Automation Advantage
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just automate tasks—we transform entire operations. 
              Our systems are designed to deliver measurable ROI from day one, 
              with continuous optimization that compounds over time.
            </p>
            
            <div className="glass-card p-6 inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-3xl font-display font-bold text-primary-foreground">5x</span>
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">Average ROI</div>
                <div className="text-muted-foreground text-sm">Within first year of deployment</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Benefits Grid */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="glass-card p-5 flex items-start gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;