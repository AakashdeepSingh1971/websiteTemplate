"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
