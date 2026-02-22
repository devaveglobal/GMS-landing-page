"use client";

import Hero from "./_components/hero";
import Problems from "./_components/problems";
import Features from "./_components/features";
import HowItWorks from "./_components/how-it-works";
import MobileApp from "./_components/mobile-app";
import WhyChooseUs from "./_components/why-choose-us";
import Testimonials from "./_components/testimonials";
import Pricing from "./_components/pricing";
import FAQ from "./_components/faq";
import CTA from "./_components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <MobileApp />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
