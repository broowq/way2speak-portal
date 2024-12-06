import { Brain, Rocket, Target, Users } from "lucide-react";

const methods = [
  {
    icon: Brain,
    title: "Approccio innovativo",
    description: "Una metodologia unica che combina tecnologie moderne e metodi di insegnamento comprovati"
  },
  {
    icon: Rocket,
    title: "Progresso rapido",
    description: "Risultati visibili già dopo il primo mese di studio"
  },
  {
    icon: Target,
    title: "Approccio individuale",
    description: "Il programma di studio si adatta ai tuoi obiettivi e al tuo ritmo di apprendimento"
  },
  {
    icon: Users,
    title: "Pratica conversazionale",
    description: "Club di conversazione regolari con madrelingua"
  }
];

export const MethodologySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            La nostra metodologia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Apprendimento efficace dell'inglese utilizzando metodologie all'avanguardia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 
                         shadow-sm hover:shadow-md transition-all duration-300 
                         hover:-translate-y-1"
            >
              <method.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};