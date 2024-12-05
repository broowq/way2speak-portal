import { BookOpen, MessageCircle, Library, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Lezioni su una piattaforma interattiva",
    description: "dove imparerai vocabolario e grammatica, integrando immediatamente ciò che hai appreso nel linguaggio parlato.",
  },
  {
    icon: MessageCircle,
    title: "Pratica di conversazione illimitata con l'A-Assistant",
    description: "Ti aiuterà a superare più rapidamente la barriera linguistica e a consolidare il materiale appreso durante le lezioni.",
  },
  {
    icon: Library,
    title: "Una biblioteca di risorse",
    description: "Con film, libri, podcast e serie TV per ogni livello, per creare un ambiente linguistico direttamente a casa tua.",
  },
  {
    icon: Clock,
    title: "Supporto 24/7",
    description: "Siamo sempre disponibili per rispondere a qualsiasi tua domanda.",
  },
  {
    icon: Shield,
    title: "Risultati garantiti",
    description: "Il programma di studio è stato sviluppato da un insegnante certificato e ha già aiutato più di 50 studenti.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Con il programma Way2Speak troverai:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};