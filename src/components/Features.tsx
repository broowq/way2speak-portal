import { CheckCircle, Globe, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Занятия онлайн",
    description: "Учитесь из любой точки мира в удобное для вас время",
  },
  {
    icon: Users,
    title: "Опытные преподаватели",
    description: "Носители языка и сертифицированные специалисты",
  },
  {
    icon: CheckCircle,
    title: "Индивидуальный подход",
    description: "Программа обучения адаптируется под ваши цели",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Выбирайте удобное время для занятий",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают Way2Speak
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы создаем идеальные условия для изучения английского языка
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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