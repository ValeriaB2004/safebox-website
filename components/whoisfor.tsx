"use client";

import { useTranslations } from "next-intl";

export default function WhoIsFor() {
  const t = useTranslations("WhoIsFor");

  const audiences = [
    {
      title: t("individuals.title"),
      description: t("individuals.description"),
    },
    {
      title: t("professionals.title"),
      description: t("professionals.description"),
    },
    {
      title: t("businesses.title"),
      description: t("businesses.description"),
    },
    {
      title: t("international.title"),
      description: t("international.description"),
    },
  ];

  return (
    <section id="who-is-it-for" className="bg-[#0F1F33] px-6 py-24">
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

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-3xl border border-[#C8A86B]/20 bg-[#081320] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C8A86B] text-xl font-bold text-[#C8A86B]">
                {audience.title.charAt(0)}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#C8A86B]">
                {audience.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#D6D6D1]">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}