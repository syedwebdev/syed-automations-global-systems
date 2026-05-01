import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle2, Lock, ArrowLeft } from "lucide-react";

const planMap: Record<string, { name: string; price: string; features: string[] }> = {
  starter: {
    name: "Starter",
    price: "₹1,499/month",
    features: ["Basic workflows", "Standard integrations", "Email support"],
  },
  growth: {
    name: "Growth",
    price: "₹5,999/month",
    features: ["Multi-step workflows", "Priority execution", "API integrations", "Basic RPA bots"],
  },
  professional: {
    name: "Professional",
    price: "₹9,999/month",
    features: ["Conditional workflows", "Webhooks & triggers", "Analytics dashboard"],
  },
  business: {
    name: "Business",
    price: "₹19,999/month",
    features: ["Dedicated pipelines", "High-volume execution", "Team collaboration"],
  },
};

const Checkout = () => {
  const { plan } = useParams<{ plan: string }>();
  const selected = (plan && planMap[plan]) || planMap.growth;

  return (
    <Layout>
      <section className="section-padding min-h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />

        <div className="section-container relative z-10 max-w-3xl">
          <AnimatedSection>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to plans
            </Link>

            <GlassCard hover={false} className="p-8 lg:p-10">
              <div className="flex items-center gap-2 text-xs text-primary mb-3">
                <Lock className="w-4 h-4" /> Secure checkout
              </div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold mb-2">
                Activate <span className="gradient-text">{selected.name}</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                Review your plan and proceed to payment to deploy your first workflow.
              </p>

              <div className="rounded-xl border border-border bg-card/40 p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Selected plan</div>
                    <div className="font-display text-xl font-bold">{selected.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Billed monthly</div>
                    <div className="font-display text-2xl font-bold gradient-text">
                      {selected.price}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 pt-4 border-t border-border">
                  {selected.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                disabled
                className="btn-primary w-full opacity-70 cursor-not-allowed mb-3"
              >
                Pay with Razorpay (Coming Soon)
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Razorpay billing is being activated for your account. In the
                meantime, our team will reach out to manually onboard you.
              </p>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <Link to="/contact" className="text-sm text-primary hover:underline">
                  Need help? Contact our team →
                </Link>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
