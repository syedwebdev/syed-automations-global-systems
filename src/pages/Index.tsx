import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import ValueAnchorSection from "@/components/home/ValueAnchorSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DashboardPreviewSection from "@/components/home/DashboardPreviewSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TrustReliabilitySection from "@/components/home/TrustReliabilitySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <WhatWeDoSection />
      <ValueAnchorSection />
      <HowItWorksSection />
      <DashboardPreviewSection />
      <UseCasesSection />
      <WhyUsSection />
      <TrustReliabilitySection />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
