import { Link } from "react-router-dom";
import AnimatedSection from "../ui/AnimatedSection";
import { ArrowRight, TrendingDown } from "lucide-react";

const ValueAnchorSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <div className="glass-card p-10 lg:p-14 max-w-5xl mx-auto text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <TrendingDown className="w-4 h-4" />
                The Cost of Custom Automation
              </div>

              <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Custom automation systems typically cost{" "}
                <span className="text-muted-foreground line-through decoration-destructive/60">
                  ₹50,000 – ₹5,00,000+
                </span>
              </h2>

              <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
                With our platform, start automating at just{" "}
                <span className="gradient-text font-bold">₹1,499/month</span>.
              </p>

              <Link
                to="/pricing"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ValueAnchorSection;
