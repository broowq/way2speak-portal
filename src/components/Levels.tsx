const levels = [
  {
    title: "Elementary (A1)",
    results: [
      "Imparerai a usare 5 tempi verbali principali nel linguaggio parlato.",
      "Saprai parlare di te stesso, della tua famiglia, hobby, lavoro, tempo libero e meteo.",
      "Imparerai a ordinare cibo al ristorante, prenotare una stanza in hotel.",
      "Sarai in grado di esprimere i tuoi sentimenti ed emozioni.",
    ],
  },
  {
    title: "Pre-intermediate (A2)",
    results: [
      "Imparerai a usare tutti i 12 tempi verbali, oltre a verbi modali.",
      "Potrai facilmente sostenere conversazioni su vari argomenti.",
      "Saprai svolgere qualsiasi operazione in banca.",
      "Potrai discutere dettagli sulla tua salute con il medico.",
    ],
  },
  {
    title: "Intermediate (B1)",
    results: [
      "Ti sentirai sicuro nel parlare con stranieri.",
      "Imparerai a scrivere un curriculum e superare colloqui.",
      "Sarai in grado di discutere argomenti più profondi.",
      "Potrai condurre trattative d'affari.",
    ],
  },
  {
    title: "Upper-intermediate (B2)",
    results: [
      "Saprai utilizzare grammatica avanzata.",
      "Potrai discutere argomenti accademici.",
      "Sarai pronto per esami come TOEFL, IELTS o CAE.",
      "Arricchirai la tua visione del mondo.",
    ],
  },
];

export const Levels = () => {
  return (
    <section id="levels" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I programmi della nostra accademia
          </h2>
          <p className="text-gray-600">
            Il programma viene personalizzato per ogni studente dopo una lezione introduttiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{level.title}</h3>
              <h4 className="font-semibold mb-4">Risultati:</h4>
              <ul className="space-y-2">
                {level.results.map((result, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">
                    • {result}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};