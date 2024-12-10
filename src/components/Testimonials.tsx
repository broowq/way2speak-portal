import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Francesca",
    role: "Studente A2 → B1",
    content: "Ciao Ally! lo tutto bene invece tu? La prima volta che mi sei uscita su tik tok mi sei subito piaciuta. Ho iniziato a vedere molti tuoi video, ti ho iniziata a seguire su instagram per sapere di più perché in quel tempo stavo cercando qualcuno che mi insegnasse l'inglese. Ho deciso subito di contattarti e sono molto fiera di averlo fatto. Mi sento davvero molto a mio agio ad imparare la lingua con voi, le lezioni sono divertenti, pratichiamo molto lo speaking (cosa che a scuola non facciamo). Mi è bastata la consulenza per capire che il mio percorso lo avrei voluto continuare con voi. Mi sento davvero migliorata da quando frequento questo corso, se mi capita riesco a parlare più a mio agio l'inglese e se mi esce qualche video lo ascolto tutto e cerco di capire quello di cui parla, cosa che non ho mai fatto.",
    rating: 5
  },
  {
    name: "Maria",
    role: "Studente B1 → B2",
    content: "Ho scelto di studiare con Way2speak perché trovo molto interessante e innovativo il metodo di insegnamento e apprendimento che viene proposto. La piattaforma è molto chiara e intuitiva e mi aiuta a memorizzare i termini velocemente. Durante ogni lezione c'è la parte di conversazione che per me è sempre stato un grande ostacolo e apprezzo molto l'importanza che le viene data. La grammatica viene spiegata in modo chiaro e semplice applicandola subito con degli esercizi. Inoltre Ally è molto paziente e preparata per qualsiasi esigenza uno studente abbia. È passato quasi un anno e ho riscontrato grandi miglioramenti",
    rating: 5
  },
  {
    name: "Sofia",
    role: "Studente A1 → A2",
    content: "Ciao Ally! lo bene, tu? Mi trovo benissimo con Martina, sono davvero tanto tanto contenta di imparare con voi. Sono riuscita a migliorare la pronuncia e ho imparato nuove parole che prima non conoscevo. E sarò molto felice di continuare il mio percorso con lei",
    rating: 5
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/10" />
      
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative px-4 mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Recensioni dei nostri studenti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri cosa dicono di noi coloro che già studiano con Way2Speak
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl backdrop-blur-sm bg-white/70 shadow-lg hover:shadow-xl 
                         transition-all duration-500 animate-fadeIn hover:-translate-y-2 
                         border border-white/20 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 fill-primary text-primary group-hover:scale-110 transition-transform" 
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <p className="font-semibold text-gray-900 text-lg text-center">{testimonial.name}</p>
                  <p className="text-primary/80 font-medium text-center">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};