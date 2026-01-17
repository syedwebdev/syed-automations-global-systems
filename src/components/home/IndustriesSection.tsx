import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { 
  Building2, ShoppingCart, Briefcase, LineChart, 
  Megaphone, Code, ArrowRight 
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "SMEs & Startups",
    description: "Scale faster with automation that grows with your business.",
    link: "/industries#sme",
  },
  {
    icon: Briefcase,
    title: "Enterprise",
    description: "Transform complex operations across global organizations.",
    link: "/industries#enterprise",
  },
  {
    icon: LineChart,
    title: "Finance",
    description: "Automate accounting, compliance, and financial workflows.",
    link: "/industries#finance",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Streamline orders, inventory, and customer operations.",
    link: "/industries#ecommerce",
  },
  {
    icon: Megaphone,
    title: "Agencies",
    description: "Automate client work, reporting, and project management.",
    link: "/industries#agencies",
  },
  {
    icon: Code,
    title: "SaaS Companies",
    description: "Build automated systems for onboarding and operations.",
    link: "/industries#saas",
  },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Industries We Serve
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Automation for Every Sector
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From nimble startups to global enterprises, we deliver automation 
            solutions tailored to your industry's unique challenges.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link to={industry.link}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 group cursor-pointer h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {industry.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;