"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyChoose() {
  const t = useTranslations("WhyChoose");

  const reasons = [
    {
      title: t("security"),
      icon: "/icons/security.png",
    },
    {
      title: t("confidentiality"),
      icon: "/icons/confidentiality.png",
    },
    {
      title: t("directAccess"),
      icon: "/icons/direct-access.png",
    },
    {
      title: t("trust"),
      icon: "/icons/trust.png",
    },
    {
      title: t("professionalism"),
      icon: "/icons/professionalism.png",
    },
    {
      title: t("flexiblePlans"),
      icon: "/icons/flexible-plans.png",
    },
    {
      title: t("premiumLocation"),
      icon: "/icons/premium-location.png",
    },
    {
      title: t("digitalServices"),
      icon: "/icons/digital-services.png",
    },
  ];

  return (
    <section id="solutions" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="mx-auto mb-5 object-contain"
              />

              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}