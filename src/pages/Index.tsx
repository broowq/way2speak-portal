import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Levels } from "@/components/Levels";
import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";
import { Timer } from "@/components/Timer";
import { Statistics } from "@/components/Statistics";
import { MethodologySection } from "@/components/MethodologySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Timer />
        <Statistics />
        <div id="features">
          <Features />
        </div>
        <MethodologySection />
        <div id="why-us">
          <WhyUs />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="levels">
          <Levels />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;