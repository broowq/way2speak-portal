import { useState, useEffect } from "react";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">
            Iscriviti al corso entro
          </h3>
          <div className="flex justify-center gap-4 text-4xl font-bold">
            <div className="bg-primary text-white px-6 py-4 rounded-lg">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="text-primary py-4">:</span>
            <div className="bg-primary text-white px-6 py-4 rounded-lg">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="text-primary py-4">:</span>
            <div className="bg-primary text-white px-6 py-4 rounded-lg">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
          <p className="mt-6 text-lg text-gray-600">
            e ricevi 2 lezioni gratuite aggiuntive su qualsiasi piano tariffario.
          </p>
        </div>
      </div>
    </section>
  );
};