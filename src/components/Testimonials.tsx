import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Смирнова",
    role: "Студентка",
    content: "Благодаря Way2Speak я смогла преодолеть языковой барьер и теперь свободно общаюсь на английском.",
    rating: 5,
  },
  {
    name: "Михаил Петров",
    role: "Предприниматель",
    content: "Отличная школа! За 6 месяцев подготовили к переговорам с иностранными партнерами.",
    rating: 5,
  },
  {
    name: "Елена Иванова",
    role: "HR-менеджер",
    content: "Индивидуальный подход и профессиональные преподаватели. Рекомендую всем!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших студентов
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже учится в Way2Speak
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};