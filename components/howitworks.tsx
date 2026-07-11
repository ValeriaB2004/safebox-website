const steps = [
  ["1", "Choose your private box plan"],
  ["2", "Use your secure box location"],
  ["3", "Collect, store, scan or forward when needed"],
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 py-24 bg-[#0F1F33]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          How It Works
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map(([number, text]) => (
            <div
              key={number}
              className="bg-[#081320] border border-[#C8A86B]/20 rounded-3xl p-8 text-center"
            >
              <div className="text-[#C8A86B] text-4xl font-bold">
                {number}
              </div>

              <p className="mt-5 text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}