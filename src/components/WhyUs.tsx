import { Button } from "@/components/ui/button";

export const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Perché scegliere Way2Speak?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Oltre 50 studenti stanno attualmente studiando nella nostra scuola e sono riusciti a iniziare a parlare inglese da zero in soli 2 mesi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              80% DELLA LEZIONE — CONVERSAZIONE
            </h3>
            <p className="text-gray-600">
              Poniamo un'attenzione particolare alla parte di speaking, integrando nella pratica tutto il materiale trattato durante la lezione.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              ARGOMENTI COMPLESSI SPIEGATI CON ESEMPI SEMPLICI
            </h3>
            <p className="text-gray-600">
              Per affrontare qualsiasi argomento, utilizziamo la gamification e spieghiamo i concetti più difficili attraverso esempi tratti dalle tue serie TV, film o programmi preferiti.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              SENZA MEMORIZZAZIONE NOIOSA
            </h3>
            <p className="text-gray-600">
              Già durante le lezioni applicherai tutte le conoscenze, mentre i compiti a casa sono presentati in formato ludico, aiutandoti a ricordare velocemente parole e regole senza sforzi inutili.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Trova il tuo insegnante
          </Button>
        </div>
      </div>
    </section>
  );
};