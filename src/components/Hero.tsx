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
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-soft-blue via-white to-soft-purple relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-10">
          <img 
            src="/lovable-uploads/1add5f64-009c-415d-8dd5-9433cd27e7a0.png" 
            alt="English Learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <img 
            src="/lovable-uploads/2f0d56d4-7732-4132-951c-19901718b909.png" 
            alt="Language Learning"
            className="w-full h-full object-cover"
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
                  <Button size="lg" className="bg-vivid-blue hover:bg-blue-600 shadow-lg">
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
                className="border-vivid-blue text-vivid-blue hover:bg-vivid-blue/10 shadow-lg"
              >
                Scopri di più
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-vivid-purple via-vivid-pink to-vivid-blue rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="/lovable-uploads/b21e3ff2-795c-4c3f-b7e5-9fdbb2f33a98.png"
                alt="Way2Speak Teacher"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <a 
                href="https://www.instagram.com/ally.gera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass-effect border-pink-500 text-pink-500 hover:bg-pink-50 shadow-lg"
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