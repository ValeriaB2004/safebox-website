"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  useEffect(() => {
    if (!selectedPlan) return;

    const timer = window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [selectedPlan]);

  const message = selectedPlan
    ? t("selectedPlanMessage", { plan: selectedPlan })
    : "";

  const benefits = [
    {
      icon: "/icons/team-access.png",
      title: t("benefits.advice.title"),
      description: t("benefits.advice.description"),
    },
    {
      icon: "/icons/secure.png",
      title: t("benefits.confidential.title"),
      description: t("benefits.confidential.description"),
    },
    {
      icon: "/icons/priority-support.png",
      title: t("benefits.response.title"),
      description: t("benefits.response.description"),
    },
  ];

  return (
    <section id="contact" className="bg-[#0F1F33] px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#C8A86B]/20 bg-[#081320] p-6 sm:p-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#D6D6D1]">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6 text-center"
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={59}
                  height={59}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-bold text-[#C8A86B]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-[#D6D6D1]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <form
          action="https://formspree.io/f/mzdllloa"
          method="POST"
          className="mt-10 flex flex-col gap-4"
        >
          <input
            name="name"
            className="rounded-xl border border-[#C8A86B]/40 bg-[#0F1F33] p-4 text-white placeholder-[#C8C8C8]"
            placeholder={t("fields.name")}
            required
          />

          <input
            name="email"
            type="email"
            className="rounded-xl border border-[#C8A86B]/40 bg-[#0F1F33] p-4 text-white placeholder-[#C8C8C8]"
            placeholder={t("fields.email")}
            required
          />

          <input
            name="phone"
            type="tel"
            className="rounded-xl border border-[#C8A86B]/40 bg-[#0F1F33] p-4 text-white placeholder-[#C8C8C8]"
            placeholder={t("fields.phone")}
          />

          <select
            name="membership"
            defaultValue={selectedPlan || ""}
            className="rounded-xl border border-[#C8A86B]/40 bg-[#0F1F33] p-4 text-white"
          >
            <option value="">{t("fields.membershipPlaceholder")}</option>
            <option value="Essential">Essential</option>
            <option value="Select">Select</option>
            <option value="Signature">Signature</option>
            <option value="Executive">Executive</option>
            <option value="Not sure yet">{t("fields.notSure")}</option>
          </select>

          <textarea
            name="message"
            className="rounded-xl border border-[#C8A86B]/40 bg-[#0F1F33] p-4 text-white placeholder-[#C8C8C8]"
            rows={5}
            placeholder={t("fields.message")}
            defaultValue={message}
            required
          />

          <button
            type="submit"
            className="rounded-xl bg-[#C8A86B] p-4 font-bold text-[#081320] transition hover:-translate-y-1 hover:bg-[#D6B979]"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}