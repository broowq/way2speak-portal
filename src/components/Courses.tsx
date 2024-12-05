const courses = [
  {
    title: "Разговорный английский",
    level: "A1-C2",
    price: "от 1500₽",
    description: "Научитесь свободно общаться на английском языке",
  },
  {
    title: "Бизнес английский",
    level: "B1-C2",
    price: "от 2000₽",
    description: "Освойте деловой английский для работы и карьеры",
  },
  {
    title: "Подготовка к IELTS",
    level: "B1-C2",
    price: "от 2500₽",
    description: "Подготовьтесь к сдаче международного экзамена",
  },
];

export const Courses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши курсы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите программу обучения, которая подходит именно вам
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                    {course.level}
                  </span>
                </div>
                <span className="text-xl font-bold text-primary">
                  {course.price}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="w-full py-2 px-4 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};