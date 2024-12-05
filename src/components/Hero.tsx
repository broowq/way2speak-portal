import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-8 animate-fadeIn">
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Онлайн школа английского языка
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Изучайте английский язык <br />
            <span className="text-primary">эффективно и интересно</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Персональные занятия с опытными преподавателями для любого уровня
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Начать обучение
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};