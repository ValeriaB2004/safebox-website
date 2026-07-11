const items = [
  {
    icon: "📄",
    title: "Correspondence",
  },
  {
    icon: "📑",
    title: "Important Documents",
  },
  {
    icon: "📦",
    title: "Parcels",
  },
  {
    icon: "🗂️",
    title: "Business Records",
  },
  {
    icon: "🔑",
    title: "Keys",
  },
  {
    icon: "💼",
    title: "Confidential Items",
  },
  {
    icon: "📁",
    title: "Archives",
  },
  {
    icon: "🎁",
    title: "Deliveries",
  },
];

export default function WhatYouCanStore() {
  return (
    <section id="storage" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
          More than correspondence
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold md:text-5xl">
          What Can You Store?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[#D6D6D1]">
          SafeBox gives you a secure private space for personal, professional
          and business items in a controlled location.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-5 text-lg font-semibold text-[#F4F4F2]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}