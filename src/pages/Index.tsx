import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <Courses />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;