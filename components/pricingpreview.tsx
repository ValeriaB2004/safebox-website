"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function PricingPreview() {
  const t = useTranslations("PricingPreview");

  const plans = [
    {
      name: "Essential",
      price: "€30",
      description: t("plans.essential.description"),
    },
    {
      name: "Select",
      price: "€60",
      description: t("plans.select.description"),
    },
    {
      name: "Signature",
      price: "€100",
      description: t("plans.signature.description"),
      popular: true,
    },
    {
      name: "Executive",
      price: "€180",
      description: t("plans.executive.description"),
    },
  ];

  return (
    <section id="pricing" className="px-6 py-24">
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
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-h-[320px] flex-col rounded-3xl border bg-[#0F1F33] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10 ${
                plan.popular
                  ? "border-2 border-[#C8A86B] shadow-2xl shadow-[#C8A86B]/10"
                  : "border-[#C8A86B]/20"
              }`}
            >
              {plan.popular && (
                <div className="mx-auto inline-block rounded-full bg-[#C8A86B] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#081320]">
                  {t("mostPopular")}
                </div>
              )}

              <h3
                className={`text-2xl font-bold text-[#C8A86B] ${
                  plan.popular ? "mt-5" : ""
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-5">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-2 text-sm text-[#D6D6D1]">
                  {t("perMonth")}
                </span>
              </div>

              <p className="mt-5 flex-1 leading-relaxed text-[#D6D6D1]">
                {plan.description}
              </p>

              <Link
                href={`/pricing?plan=${plan.name}`}
                className={`mt-8 inline-block rounded-full px-6 py-3 font-bold transition hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-[#C8A86B] text-[#081320] hover:bg-[#D6B979]"
                    : "border border-[#C8A86B]/50 text-[#F4F4F2] hover:border-[#C8A86B] hover:bg-[#C8A86B]/10"
                }`}
              >
                {t("viewPlan")}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/pricing"
            className="inline-block rounded-full bg-[#C8A86B] px-10 py-4 font-bold text-[#081320] transition hover:-translate-y-1 hover:bg-[#D6B979]"
          >
            {t("viewFullComparison")} →
          </Link>
        </div>
      </div>
    </section>
  );
}