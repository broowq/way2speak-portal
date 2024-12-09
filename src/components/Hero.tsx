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
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/f59c385d-56a2-4542-bce3-d182766cebf8.png" 
              alt="Way2Speak" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-2xl mx-auto">
            Parla inglese con sicurezza e inizia a capire i madrelingua in{" "}
            <span className="text-primary">12 settimane</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Valutazione media di oltre 50 studenti attivi della scuola: 4,8
          </p>
          <div className="flex gap-4 justify-center">
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
      </div>
    </section>
  );
};