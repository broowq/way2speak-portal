import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rossi",
    role: "Studentessa",
    content: "Grazie a Way2Speak sono riuscita a superare la barriera linguistica e ora parlo inglese fluentemente.",
    rating: 5,
  },
  {
    name: "Marco Bianchi",
    role: "Imprenditore",
    content: "Ottima scuola! In 6 mesi mi hanno preparato per le trattative con i partner stranieri.",
    rating: 5,
  },
  {
    name: "Elena Romano",
    role: "HR Manager",
    content: "Approccio individuale e insegnanti professionisti. Lo consiglio a tutti!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/10" />
      
      {/* Декоративные элементы */}
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
              {/* Рейтинг */}
              <div className="flex items-center mb-6 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 fill-primary text-primary group-hover:scale-110 transition-transform" 
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              {/* Контент */}
              <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Информация о пользователе */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/30 
                               rounded-full flex items-center justify-center ring-4 ring-white">
                  <span className="text-primary font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-primary/80 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};