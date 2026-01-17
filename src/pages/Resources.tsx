import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { FileText, BookOpen, TrendingUp, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "The ROI of Automation: A Complete Guide",
    excerpt: "Learn how to calculate and maximize the return on your automation investments.",
    category: "Strategy",
    readTime: "8 min read",
  },
  {
    title: "RPA vs AI: Understanding the Difference",
    excerpt: "A clear breakdown of when to use RPA, AI, or a combination of both.",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    title: "5 Signs Your Business Needs Automation",
    excerpt: "Identify the key indicators that your operations are ready for automation.",
    category: "Insights",
    readTime: "5 min read",
  },
  {
    title: "Building a Culture of Automation",
    excerpt: "How to prepare your team for automation and drive adoption across the organization.",
    category: "Leadership",
    readTime: "7 min read",
  },
];

const caseStudies = [
  {
    title: "E-commerce Giant Saves $2M Annually",
    industry: "E-commerce",
    result: "85% reduction in order processing time",
  },
  {
    title: "Financial Services Firm Automates Compliance",
    industry: "Finance",
    result: "100% audit accuracy achieved",
  },
  {
    title: "Agency Scales to 3x Clients Without Hiring",
    industry: "Marketing",
    result: "300% capacity increase",
  },
];

const whitepapers = [
  {
    title: "The Future of Work: Automation in 2025",
    description: "Comprehensive analysis of automation trends and predictions for the next decade.",
  },
  {
    title: "Enterprise Automation Playbook",
    description: "Step-by-step guide to implementing automation at scale.",
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Resources
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Automation{" "}
              <span className="gradient-text">Knowledge Hub</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Insights, guides, and case studies to help you navigate 
              your automation journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="pb-16 scroll-mt-24">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl lg:text-3xl font-bold">Latest Insights</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="h-full group cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary text-sm font-medium">{post.category}</span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-16 scroll-mt-24">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl lg:text-3xl font-bold">Case Studies</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="h-full group cursor-pointer">
                  <span className="text-primary text-sm font-medium mb-3 block">{study.industry}</span>
                  <h3 className="font-display text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">Result:</p>
                    <p className="font-semibold text-foreground">{study.result}</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section id="whitepapers" className="py-16 scroll-mt-24">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl lg:text-3xl font-bold">Whitepapers</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {whitepapers.map((paper, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="group cursor-pointer">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{paper.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                    Download PDF
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <GlassCard className="p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                Ready to Start Your Automation Journey?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get personalized guidance from our automation experts.
              </p>
              <Link to="/audit" className="btn-primary inline-flex items-center gap-2">
                Book Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;