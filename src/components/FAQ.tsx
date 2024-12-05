import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как проходят занятия?",
    answer: "Занятия проходят онлайн через Zoom. Вы можете заниматься из любой точки мира в удобное для вас время. Длительность одного занятия - 60 минут.",
  },
  {
    question: "Какие уровни английского вы преподаете?",
    answer: "Мы работаем со всеми уровнями: от начального (A1) до продвинутого (C2). Перед началом обучения мы проводим бесплатное тестирование для определения вашего уровня.",
  },
  {
    question: "Сколько стоит обучение?",
    answer: "Стоимость зависит от выбранной программы и интенсивности занятий. У нас есть курсы от 1500₽ за занятие. Мы также предлагаем пакеты занятий со скидкой.",
  },
  {
    question: "Кто преподает в школе?",
    answer: "В нашей школе работают опытные преподаватели с международными сертификатами CELTA/DELTA и носители языка. Все преподаватели регулярно проходят повышение квалификации.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашей школе
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};