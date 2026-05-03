import { Link } from "react-router-dom";
import AnimatedSection from "../ui/AnimatedSection";
import CountUp from "../ui/CountUp";
import { motion } from "framer-motion";
import { Play, CheckCircle2, Loader2, ArrowRight, Activity, CreditCard } from "lucide-react";

const workflows = [
  { name: "Lead → CRM Sync", status: "running", lastRun: "2m ago" },
  { name: "Invoice Generation", status: "completed", lastRun: "12m ago" },
  { name: "Order Fulfillment", status: "running", lastRun: "Just now" },
  { name: "Daily Sales Report", status: "completed", lastRun: "1h ago" },
];

const DashboardPreviewSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Your Command Center
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            One Dashboard.{" "}
            <span className="gradient-text">Every Automation.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track active workflows, execution status, usage metrics, and billing — all in one place.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-4 lg:p-6 max-w-6xl mx-auto">
            {/* Top bar */}
            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <span className="ml-3 text-xs text-muted-foreground">app.syedautomations.com/dashboard</span>
              </div>
              <Link to="/dashboard" className="text-xs text-primary hover:underline hidden sm:flex items-center gap-1">
                Open live dashboard <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              {/* Stats */}
              <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Active Workflows", value: 12, icon: Activity },
                  { label: "Runs This Month", value: 8427, icon: Play },
                  { label: "Success Rate", value: 99.6, suffix: "%", decimals: 1, icon: CheckCircle2 },
                  { label: "Plan", text: "Growth", icon: CreditCard },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-border bg-card/40 p-4 card-hover"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                      <s.icon className="w-4 h-4" /> {s.label}
                    </div>
                    <div className="font-display text-2xl font-bold">
                      {s.text ? s.text : <CountUp end={s.value as number} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Workflows list */}
              <div className="lg:col-span-2 rounded-xl border border-border bg-card/40 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Active Workflows</h3>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-1">
                    <Play className="w-3 h-3" /> Run Automation
                  </button>
                </div>
                <div className="space-y-2">
                  {workflows.map((w, i) => (
                    <motion.div
                      key={w.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/40 border border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        {w.status === "running" ? (
                          <Loader2 className="w-4 h-4 text-primary animate-spin" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        )}
                        <div>
                          <div className="text-sm font-medium">{w.name}</div>
                          <div className="text-xs text-muted-foreground">Last run {w.lastRun}</div>
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          w.status === "running"
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {w.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Plan & billing */}
              <div className="rounded-xl border border-border bg-card/40 p-4 flex flex-col">
                <h3 className="font-semibold mb-4">Plan & Billing</h3>
                <div className="space-y-3 text-sm flex-1">
                  <div className="flex justify-between"><span className="text-muted-foreground">Plan</span><span className="font-medium">Growth</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Price</span><span className="font-medium">₹5,999/mo</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Usage</span><span className="font-medium">8,427 / 25,000</span></div>
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: "34%" }} />
                  </div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="text-primary font-medium">Active</span></div>
                </div>
                <Link to="/dashboard" className="btn-primary text-sm text-center mt-4">
                  Open Dashboard
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
