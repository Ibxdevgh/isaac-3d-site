import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Specs from "@/components/Specs";
import VideoSection from "@/components/VideoSection";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Specs />
      <VideoSection />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
