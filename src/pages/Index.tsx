import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Levels } from "@/components/Levels";
import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";
import { Timer } from "@/components/Timer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Timer />
        <div id="features">
          <Features />
        </div>
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