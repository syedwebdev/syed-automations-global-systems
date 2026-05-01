import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="glass-card p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6">
              Run Your Business on{" "}
              <span className="gradient-text">Automation Infrastructure</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Join 150+ businesses already running on our managed automation
              platform. Activate your plan and deploy your first workflow in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/start-your-automation"
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Start Automating
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="btn-secondary w-full sm:w-auto text-center">
                Activate Plan
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
