const sizes = [
  {
    title: "Small SafeBox",
    size: "XS / S",
    description:
      "Ideal for correspondence, important documents and everyday personal storage.",
  },
  {
    title: "Medium SafeBox",
    size: "M",
    description:
      "Perfect for parcels, business records, valuables and larger document collections.",
  },
  {
    title: "Large SafeBox",
    size: "L / XL",
    description:
      "Designed for large deliveries, equipment, archive storage and larger items.",
  },
];

export default function SafeBoxSizes() {
  return (
    <section id="sizes" className="bg-[#0F1F33] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
          Flexible storage solutions
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold md:text-5xl">
          One SafeBox. Multiple Sizes. Unlimited Possibilities.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[#D6D6D1]">
          Choose the SafeBox size that best matches your personal or
          professional needs.
        </p>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
          {sizes.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[360px] flex-col rounded-3xl border border-[#C8A86B]/20 bg-[#081320] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#C8A86B]/40 bg-[#0F1F33] px-3 text-center text-lg font-bold leading-tight text-[#C8A86B]">
                {item.size}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#C8A86B]">
                {item.title}
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-[#D6D6D1]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-relaxed text-[#F4F4F2]">
          Business memberships can be paired with any SafeBox size depending on
          the volume of correspondence, documents or deliveries required.
        </p>
      </div>
    </section>
  );
}