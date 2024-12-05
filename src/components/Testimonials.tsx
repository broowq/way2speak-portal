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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recensioni dei nostri studenti
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri cosa dicono di noi coloro che già studiano con Way2Speak
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn hover:-translate-y-1 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform" 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};