import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Target, Eye, Globe, Users, Lightbulb, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push boundaries to deliver cutting-edge automation solutions that stay ahead of the curve.",
    },
    {
      icon: Handshake,
      title: "Partnership Mindset",
      description: "We're not just vendors—we're long-term partners invested in your success.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every solution is tailored to your unique needs, not a one-size-fits-all approach.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Intelligent Automation</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Syed Automations & RPA is a global automation company dedicated to 
              transforming businesses through intelligent systems, AI, and robotic 
              process automation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Your Global Automation Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We position ourselves as more than service providers—we are strategic 
                partners who understand that true automation success requires deep 
                systems thinking, innovation, and a commitment to long-term value creation.
              </p>
              <p className="text-muted-foreground text-lg">
                Our team of automation architects, RPA developers, and AI specialists 
                work together to deliver solutions that don't just automate tasks—they 
                transform entire business operations for sustained competitive advantage.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "150+", label: "Global Clients" },
                  { value: "25+", label: "Countries Served" },
                  { value: "500+", label: "Automations" },
                  { value: "99.9%", label: "System Uptime" },
                ].map((stat, index) => (
                  <GlassCard key={index} className="text-center">
                    <div className="font-display text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </GlassCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To build self-running businesses using automation and AI—creating 
                  a future where enterprises operate with unprecedented efficiency, 
                  freeing human potential for innovation and growth.
                </p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  Replace manual work with intelligent systems that deliver measurable 
                  ROI, build future-ready enterprises, and empower organizations to 
                  scale without limits.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Global Presence
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
              Remote-First, Worldwide Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Operating with an enterprise mindset from day one, we serve clients 
              across the globe with the same dedication, expertise, and results.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard className="p-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Globe className="w-12 h-12 text-primary" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="font-display text-3xl font-bold text-foreground mb-2">Remote-First</div>
                  <p className="text-muted-foreground">Global talent, local expertise</p>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-foreground mb-2">24/7 Support</div>
                  <p className="text-muted-foreground">Across all time zones</p>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-foreground mb-2">Enterprise Grade</div>
                  <p className="text-muted-foreground">Security & compliance first</p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;