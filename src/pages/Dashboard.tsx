import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import {
  Loader2,
  Play,
  CheckCircle2,
  Activity,
  CreditCard,
  LogOut,
  Plus,
  AlertCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const sampleWorkflows = [
  { name: "Lead → CRM Sync", status: "running", lastRun: "2m ago", runs: 1284 },
  { name: "Invoice Generation", status: "completed", lastRun: "12m ago", runs: 312 },
  { name: "Order Fulfillment", status: "running", lastRun: "Just now", runs: 4920 },
  { name: "Daily Sales Report", status: "completed", lastRun: "1h ago", runs: 30 },
  { name: "WhatsApp Follow-up", status: "completed", lastRun: "3h ago", runs: 1881 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session) navigate("/auth", { replace: true });
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session) navigate("/auth", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  const handleRun = (name: string) => {
    toast({
      title: "Automation triggered",
      description: `${name} has been queued for execution.`,
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) return null;

  return (
    <Layout>
      <section className="pt-28 pb-16 min-h-screen">
        <div className="section-container">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold">
                Welcome back
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                {user.email}
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/start-your-automation" className="btn-primary text-sm flex items-center gap-2">
                <Plus className="w-4 h-4" /> Deploy Workflow
              </Link>
              <button
                onClick={handleSignOut}
                className="btn-secondary text-sm flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Sign out
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active Workflows", value: "12", icon: Activity },
              { label: "Runs This Month", value: "8,427", icon: Play },
              { label: "Success Rate", value: "99.6%", icon: CheckCircle2 },
              { label: "Plan", value: "Growth", icon: CreditCard },
            ].map((s) => (
              <GlassCard key={s.label} hover={false} className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                  <s.icon className="w-4 h-4" /> {s.label}
                </div>
                <div className="font-display text-2xl font-bold">{s.value}</div>
              </GlassCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Workflows */}
            <GlassCard hover={false} className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold">Workflows</h2>
                <span className="text-xs text-muted-foreground">
                  {sampleWorkflows.length} total
                </span>
              </div>
              <div className="space-y-2">
                {sampleWorkflows.map((w) => (
                  <div
                    key={w.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-background/40 border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      {w.status === "running" ? (
                        <Loader2 className="w-4 h-4 text-primary animate-spin" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      )}
                      <div>
                        <div className="text-sm font-medium">{w.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {w.runs.toLocaleString()} total runs · last {w.lastRun}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          w.status === "running"
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {w.status}
                      </span>
                      <button
                        onClick={() => handleRun(w.name)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 font-medium flex items-center gap-1"
                      >
                        <Play className="w-3 h-3" /> Run
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Plan & billing */}
            <GlassCard hover={false} className="p-6 flex flex-col">
              <h2 className="font-display text-lg font-semibold mb-4">Plan & Billing</h2>
              <div className="space-y-3 text-sm flex-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium">Growth</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-medium">₹5,999/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Usage</span>
                  <span className="font-medium">8,427 / 25,000</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: "34%" }}
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-primary font-medium">Active</span>
                </div>

                <div className="rounded-lg border border-border bg-card/40 p-3 mt-4 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    Razorpay billing activation in progress. Your plan is currently
                    managed by your account manager.
                  </p>
                </div>
              </div>
              <Link to="/pricing" className="btn-secondary text-sm text-center mt-4">
                Change Plan
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
