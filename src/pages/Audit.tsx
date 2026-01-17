import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Audit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    challenges: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Audit request submitted! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", company: "", industry: "", challenges: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const auditBenefits = [
    "Comprehensive process analysis",
    "Automation opportunity mapping",
    "ROI estimation for top opportunities",
    "Priority recommendations",
    "Implementation roadmap",
    "No obligation to proceed",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Free Automation Audit
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Discover Your{" "}
              <span className="gradient-text">Automation Potential</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Get a comprehensive analysis of your current processes and 
              a clear roadmap to automation success—completely free.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <AnimatedSection>
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
                What You'll Receive
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our automation experts will analyze your operations and deliver 
                actionable insights that can transform your business.
              </p>

              <ul className="space-y-4 mb-8">
                {auditBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-primary-foreground">$0</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">100% Free</div>
                    <div className="text-muted-foreground text-sm">No payment required. No strings attached.</div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <GlassCard className="p-8">
                <h3 className="font-display text-xl font-bold mb-6">Book Your Free Audit</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Select your industry</option>
                      <option value="finance">Finance & Accounting</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="agency">Marketing Agency</option>
                      <option value="saas">SaaS</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-foreground mb-2">
                      Current Challenges
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about the manual processes you'd like to automate..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book My Free Audit
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Audit;