import { Brain, Rocket, Target, Users } from "lucide-react";

const methods = [
  {
    icon: Brain,
    title: "Инновационный подход",
    description: "Уникальная методика, сочетающая современные технологии и проверенные методы обучения"
  },
  {
    icon: Rocket,
    title: "Быстрый прогресс",
    description: "Заметные результаты уже после первого месяца обучения"
  },
  {
    icon: Target,
    title: "Индивидуальный подход",
    description: "Программа обучения адаптируется под ваши цели и темп обучения"
  },
  {
    icon: Users,
    title: "Разговорная практика",
    description: "Регулярные разговорные клубы с носителями языка"
  }
];

export const MethodologySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наша методология
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Эффективное обучение английскому языку с использованием передовых методик
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