import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
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
            <Button size="lg" variant="outline" onClick={() => window.location.href = "#features"}>
              Scopri di più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};