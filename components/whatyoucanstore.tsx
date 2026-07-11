import Image from "next/image";

const items = [
  {
    icon: "/icons/mail.png",
    title: "Correspondence",
  },
  {
    icon: "/icons/document.png",
    title: "Important Documents",
  },
  {
    icon: "/icons/parcel.png",
    title: "Parcels",
  },
  {
    icon: "/icons/business.png",
    title: "Business Records",
  },
  {
    icon: "/icons/key.png",
    title: "Keys",
  },
  {
    icon: "/icons/secure.png",
    title: "Confidential Items",
  },
  {
    icon: "/icons/archive.png",
    title: "Archives",
  },
  {
    icon: "/icons/delivery.png",
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
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C8A86B]/30 bg-[#081320]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

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