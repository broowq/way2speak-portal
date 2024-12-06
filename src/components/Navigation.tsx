import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export const Navigation = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            Way2Speak
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScroll('features')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Caratteristiche
            </button>
            <button 
              onClick={() => handleScroll('why-us')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Perché noi
            </button>
            <button 
              onClick={() => handleScroll('testimonials')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Recensioni
            </button>
            <button 
              onClick={() => handleScroll('levels')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Livelli
            </button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary-dark">
                Lezione gratuita
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Prenota la tua lezione di prova gratuita</DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};