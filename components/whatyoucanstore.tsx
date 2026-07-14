"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhatYouCanStore() {
  const t = useTranslations("WhatYouCanStore");

  const items = [
    {
      icon: "/icons/mail.png",
      title: t("items.correspondence"),
    },
    {
      icon: "/icons/document.png",
      title: t("items.documents"),
    },
    {
      icon: "/icons/parcel.png",
      title: t("items.parcels"),
    },
    {
      icon: "/icons/business.png",
      title: t("items.businessRecords"),
    },
    {
      icon: "/icons/key.png",
      title: t("items.keys"),
    },
    {
      icon: "/icons/secure.png",
      title: t("items.confidentialItems"),
    },
    {
      icon: "/icons/archive.png",
      title: t("items.archives"),
    },
    {
      icon: "/icons/delivery.png",
      title: t("items.deliveries"),
    },
  ];

  return (
    <section id="storage" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
          {t("eyebrow")}
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[#D6D6D1]">
          {t("description")}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
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