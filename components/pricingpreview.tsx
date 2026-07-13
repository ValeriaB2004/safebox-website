const plans = [
  {
    name: "Essential",
    price: "€30",
    description: "Perfect for individuals who need a secure private box.",
  },
  {
    name: "Select",
    price: "€60",
    description: "Ideal for professionals and frequent travellers.",
  },
  {
    name: "Signature",
    price: "€100",
    description: "Complete document and private box management.",
    popular: true,
  },
  {
    name: "Executive",
    price: "€180",
    description: "Full business correspondence management.",
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Memberships
        </h2>

        <p className="mt-6 text-center text-[#D6D6D1]">
          Designed for individuals, professionals and businesses.
        </p>

        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 text-center border bg-[#0F1F33] ${
                plan.popular
                  ? "border-2 border-[#C8A86B]"
                  : "border-[#C8A86B]/20"
              }`}
            >
              {plan.popular && (
                <div className="inline-block bg-[#C8A86B] text-[#081320] px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`text-2xl font-bold text-[#C8A86B] ${
                  plan.popular ? "mt-4" : ""
                }`}
              >
                {plan.name}
              </h3>

              <p className="text-4xl font-bold mt-4">{plan.price}</p>

              <p className="mt-4 text-[#D6D6D1]">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/pricing"
            className="inline-block bg-[#C8A86B] text-[#081320] px-10 py-4 rounded-full font-bold hover:bg-[#d6b77a] transition"
          >
            View Full Comparison →
          </a>
        </div>
      </div>
    </section>
  );
}