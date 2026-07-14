"use client";

import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      number: "1",
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      number: "2",
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      number: "3",
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section id="how" className="bg-[#0F1F33] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
          {t("eyebrow")}
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[#D6D6D1]">
          {t("description")}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-[#C8A86B]/20 bg-[#081320] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C8A86B] text-3xl font-bold text-[#C8A86B]">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#C8A86B]">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#D6D6D1]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}