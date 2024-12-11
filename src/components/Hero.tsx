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
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Parla inglese con sicurezza e inizia a capire i madrelingua in{" "}
              <span className="text-yellow-300">12 settimane</span>
            </h1>
            <p className="text-xl text-white/90">
              Valutazione media di oltre 50 studenti attivi della scuola: 4,8
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
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
                className="border-white text-white hover:bg-white/20 shadow-xl backdrop-blur-md"
              >
                Scopri di più
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
              <div className="relative rounded-2xl p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                <img 
                  src="/lovable-uploads/b21e3ff2-795c-4c3f-b7e5-9fdbb2f33a98.png"
                  alt="Way2Speak Teacher"
                  className="rounded-xl w-full max-w-md mx-auto transform group-hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <a 
                href="https://www.instagram.com/ally.gera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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