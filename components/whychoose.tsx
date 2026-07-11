import Image from "next/image";

const reasons = [
  { title: "Security", icon: "/icons/security.png" },
  { title: "Confidentiality", icon: "/icons/confidentiality.png" },
  { title: "Direct Access", icon: "/icons/direct-access.png" },
  { title: "Trust", icon: "/icons/trust.png" },
  { title: "Professionalism", icon: "/icons/professionalism.png" },
  { title: "Flexible Plans", icon: "/icons/flexible-plans.png" },
  { title: "Premium Location", icon: "/icons/premium-location.png" },
  { title: "Digital Services", icon: "/icons/digital-services.png" },
];

export default function WhyChoose() {
  return (
    <section id="solutions" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Why Choose SafeBox?
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-[#0F1F33] border border-[#C8A86B]/20 rounded-3xl p-8 text-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="mx-auto mb-5 object-contain"
              />

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}