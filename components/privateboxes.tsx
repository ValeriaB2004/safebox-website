"use client";

import { useTranslations } from "next-intl";

export default function PrivateBoxes() {
  const t = useTranslations("PrivateBoxes");

  const services = [
    {
      title: t("services.privateRental.title"),
      text: t("services.privateRental.text"),
    },
    {
      title: t("services.secureReceiving.title"),
      text: t("services.secureReceiving.text"),
    },
    {
      title: t("services.documentStorage.title"),
      text: t("services.documentStorage.text"),
    },
    {
      title: t("services.digitalServices.title"),
      text: t("services.digitalServices.text"),
    },
    {
      title: t("services.businessBoxes.title"),
      text: t("services.businessBoxes.text"),
    },
    {
      title: t("services.premiumHandling.title"),
      text: t("services.premiumHandling.text"),
    },
  ];

  return (
    <section id="boxes" className="bg-[#0F1F33] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[#D6D6D1]">
          {t("description")}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#C8A86B]/20 bg-[#081320] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <h3 className="text-xl font-bold text-[#C8A86B]">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#D6D6D1]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}