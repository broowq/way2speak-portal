import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Hero = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Parla inglese con sicurezza e inizia a capire i madrelingua in{" "}
              <span className="text-primary">12 settimane</span>
            </h1>
            <p className="text-xl text-gray-600">
              Valutazione media di oltre 50 studenti attivi della scuola: 4,8
            </p>
            <div className="flex gap-4">
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
            <img 
              src="/lovable-uploads/b21e3ff2-795c-4c3f-b7e5-9fdbb2f33a98.png"
              alt="Way2Speak Teacher"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};