import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { Shield, Globe, Award, Lock } from "lucide-react";

const TrustSection = () => {
  const trustBadges = [
    { icon: Shield, label: "SOC 2 Compliant" },
    { icon: Lock, label: "GDPR Ready" },
    { icon: Award, label: "ISO 27001" },
    { icon: Globe, label: "Global Operations" },
  ];

  const industries = [
    "Finance", "E-commerce", "Healthcare", "Manufacturing", 
    "SaaS", "Agencies", "Retail", "Logistics"
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-muted-foreground text-lg mb-8">
            Trusted by businesses across industries worldwide
          </p>
        </AnimatedSection>

        {/* Trust Badges */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card px-6 py-3 flex items-center gap-3"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Industries Marquee */}
        <AnimatedSection delay={0.2}>
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-[scroll_30s_linear_infinite] gap-12">
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 glass-card text-muted-foreground font-medium whitespace-nowrap"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;