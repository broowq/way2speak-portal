import { Users, GraduationCap, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Активных студентов",
  },
  {
    icon: GraduationCap,
    value: "95%",
    label: "Успешных выпускников",
  },
  {
    icon: Clock,
    value: "2000+",
    label: "Часов обучения",
  },
  {
    icon: Award,
    value: "4.8/5",
    label: "Средняя оценка",
  },
];

export const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm 
                         shadow-lg hover:shadow-xl transition-all duration-300 
                         border border-white/20 hover:border-primary/20"
            >
              <stat.icon className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};