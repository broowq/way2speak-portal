import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Come funziona Way2Speak?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un metodo innovativo che ti permette di parlare inglese fin dalla prima lezione
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">
              1. Lezione di prova gratuita
            </h3>
            <p className="text-gray-600">
              Durante la lezione di prova, valuteremo il tuo livello attuale e creeremo un piano di studio personalizzato.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">
              2. Piano personalizzato
            </h3>
            <p className="text-gray-600">
              Riceverai un programma su misura basato sui tuoi obiettivi, il tuo livello e il tempo che puoi dedicare allo studio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">
              3. Inizio del percorso
            </h3>
            <p className="text-gray-600">
              Inizierai subito a parlare inglese con i nostri insegnanti madrelingua, focalizzandoti sulla conversazione pratica.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Prenota la tua lezione gratuita
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
    </section>
  );
};