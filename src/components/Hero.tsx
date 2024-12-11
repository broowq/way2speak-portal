import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Instagram } from "lucide-react";

export const Hero = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/10 relative overflow-hidden">
      {/* Background decorative images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-20">
          <img 
            src="/lovable-uploads/33987e34-f333-45c8-b8e9-c96c99dbdc06.png" 
            alt="British flag" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-48 md:w-48 md:h-64 opacity-20">
          <img 
            src="/lovable-uploads/1d9f7f1d-b05b-4d4f-b0c7-17c3cce0a4a6.png" 
            alt="Red telephone box" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-32 h-48 md:w-48 md:h-64 opacity-20">
          <img 
            src="/lovable-uploads/2f0d56d4-7732-4132-951c-19901718b909.png" 
            alt="Big Ben" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Parla inglese con sicurezza e inizia a capire i madrelingua in{" "}
              <span className="text-primary">12 settimane</span>
            </h1>
            <p className="text-xl text-gray-600">
              Valutazione media di oltre 50 studenti attivi della scuola: 4,8
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary-dark">
                    Prenota una lezione di prova
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Prenota la tua lezione di prova gratuita</DialogTitle>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => handleScroll('features')}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Scopri di più
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/b21e3ff2-795c-4c3f-b7e5-9fdbb2f33a98.png"
                alt="Way2Speak Teacher"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl" />
              <a 
                href="https://www.instagram.com/ally.gera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass-effect border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};