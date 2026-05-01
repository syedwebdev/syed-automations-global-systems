import AnimatedSection from "../ui/AnimatedSection";
import { motion } from "framer-motion";
import {
  UserPlus,
  ShoppingCart,
  MessageCircle,
  Database,
  FileText,
  Calendar,
} from "lucide-react";

const useCases = [
  {
    icon: UserPlus,
    title: "Lead Capture → CRM",
    description:
      "Automatically route leads from forms, ads, and chatbots into your CRM with enrichment and assignment rules.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Order Processing",
    description:
      "Sync orders, update inventory, trigger fulfillment, and notify customers — end to end, hands-free.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Email Automation",
    description:
      "Send transactional messages, follow-ups, and broadcast campaigns triggered by real business events.",
  },
  {
    icon: Database,
    title: "Data Sync Between Tools",
    description:
      "Keep customer, product, and finance data consistent across every tool your teams use.",
  },
  {
    icon: FileText,
    title: "Invoice Generation Workflows",
    description:
      "Generate, send, and reconcile invoices automatically with payment status tracking.",
  },
  {
    icon: Calendar,
    title: "Scheduled Operations",
    description:
      "Run recurring back-office tasks — reports, reconciliations, exports — on autopilot.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Use Cases
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            What Teams <span className="gradient-text">Automate With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From front-office growth to back-office operations — deploy
            production-grade automations across every team.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <AnimatedSection key={useCase.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card p-6 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
