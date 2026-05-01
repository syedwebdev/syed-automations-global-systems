import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import GlassCard from "../ui/GlassCard";
import { 
  Workflow, Bot, Brain, LayoutDashboard, 
  Plug, ArrowRight 
} from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "End-to-end workflow automation that eliminates manual tasks and accelerates operations.",
    link: "/solutions#bpa",
  },
  {
    icon: Bot,
    title: "RPA Bots",
    description: "Intelligent bots that handle repetitive tasks across desktop and cloud applications.",
    link: "/solutions#rpa",
  },
  {
    icon: Brain,
    title: "AI Automation",
    description: "Machine learning powered systems for intelligent decision-making and predictions.",
    link: "/solutions#ai",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Command Centers",
    description: "Real-time visibility and control over all your automated systems and workflows.",
    link: "/solutions#dashboards",
  },
  {
    icon: Plug,
    title: "Enterprise Integrations",
    description: "Seamless connections between CRM, ERP, payment gateways, and SaaS tools.",
    link: "/solutions#integrations",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Automation Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build intelligent systems that transform how businesses operate, 
            from simple task automation to complex AI-driven workflows.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link to={solution.link}>
                <GlassCard className="h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {solution.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    Activate Plan
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;