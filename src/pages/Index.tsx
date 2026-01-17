import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <WhatWeDoSection />
      <WhyUsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;