import { useState, useEffect } from "react";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Устанавливаем конечную дату (например, через 7 дней от текущей даты)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Offerta speciale: 50% di sconto sulla prima lezione
          </h2>
          <div className="flex justify-center gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm min-w-[80px]">
              <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
              <div className="text-sm text-gray-600">Giorni</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm min-w-[80px]">
              <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600">Ore</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm min-w-[80px]">
              <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600">Minuti</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm min-w-[80px]">
              <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600">Secondi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};