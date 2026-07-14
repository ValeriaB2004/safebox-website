import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floatingbutton";
import { Link } from "@/i18n/navigation";

export default async function PricingPage() {
  const t = await getTranslations("PricingPage");

  const plans = [
    {
      name: "Essential",
      price: "€30",
      description: t("plans.essential.description"),
      buttonText: t("plans.essential.button"),
      popular: false,
      features: [
        t("plans.essential.features.1"),
        t("plans.essential.features.2"),
        t("plans.essential.features.3"),
        t("plans.essential.features.4"),
        t("plans.essential.features.5"),
        t("plans.essential.features.6"),
        t("plans.essential.features.7"),
        t("plans.essential.features.8"),
      ],
    },
    {
      name: "Select",
      price: "€60",
      description: t("plans.select.description"),
      buttonText: t("plans.select.button"),
      popular: false,
      features: [
        t("plans.select.features.1"),
        t("plans.select.features.2"),
        t("plans.select.features.3"),
        t("plans.select.features.4"),
        t("plans.select.features.5"),
        t("plans.select.features.6"),
        t("plans.select.features.7"),
        t("plans.select.features.8"),
        t("plans.select.features.9"),
      ],
    },
    {
      name: "Signature",
      price: "€100",
      description: t("plans.signature.description"),
      buttonText: t("plans.signature.button"),
      popular: true,
      features: [
        t("plans.signature.features.1"),
        t("plans.signature.features.2"),
        t("plans.signature.features.3"),
        t("plans.signature.features.4"),
        t("plans.signature.features.5"),
        t("plans.signature.features.6"),
        t("plans.signature.features.7"),
        t("plans.signature.features.8"),
        t("plans.signature.features.9"),
      ],
    },
    {
      name: "Executive",
      price: "€180",
      description: t("plans.executive.description"),
      buttonText: t("plans.executive.button"),
      popular: false,
      features: [
        t("plans.executive.features.1"),
        t("plans.executive.features.2"),
        t("plans.executive.features.3"),
        t("plans.executive.features.4"),
        t("plans.executive.features.5"),
        t("plans.executive.features.6"),
        t("plans.executive.features.7"),
        t("plans.executive.features.8"),
        t("plans.executive.features.9"),
        t("plans.executive.features.10"),
        t("plans.executive.features.11"),
      ],
    },
  ];

  const additionalServices = [
    {
      key: "documentScanning",
      icon: "/icons/document-scanning.png",
    },
    {
      key: "expressScanning",
      icon: "/icons/express-scanning.png",
    },
    {
      key: "documentForwarding",
      icon: "/icons/document.png",
    },
    {
      key: "internationalForwarding",
      icon: "/icons/delivery.png",
    },
    {
      key: "longTermStorage",
      icon: "/icons/long-term-storage.png",
    },
    {
      key: "additionalUser",
      icon: "/icons/additional-user.png",
    },
    {
      key: "additionalSafeBox",
      icon: "/icons/additional-safebox.png",
    },
    {
      key: "oversizedParcel",
      icon: "/icons/oversized-parcel.png",
    },
    {
      key: "expressCollection",
      icon: "/icons/express-collection.png",
    },
    {
      key: "digitalArchive",
      icon: "/icons/digital-archive.png",
    },
  ] as const;

  const businessAddOns = [
    {
      key: "collectionAuthorisations",
      icon: "/icons/additional-user.png",
    },
    {
      key: "teamAccess",
      icon: "/icons/team-access.png",
    },
    {
      key: "secureArchive",
      icon: "/icons/archive.png",
    },
    {
      key: "digitalManagement",
      icon: "/icons/digital-archive.png",
    },
    {
      key: "bulkScanning",
      icon: "/icons/document-scanning.png",
    },
    {
      key: "monthlyReporting",
      icon: "/icons/monthly-reporting.png",
    },
    {
      key: "prioritySupport",
      icon: "/icons/priority-support.png",
    },
    {
      key: "accountManager",
      icon: "/icons/professionalism.png",
    },
  ] as const;

  return (
    <>
      <Navbar />
      <FloatingButton />

      <main className="min-h-screen bg-[#081320] px-6 pb-24 pt-48 text-[#F4F4F2] lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
              {t("eyebrow")}
            </p>

            <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#D6D6D1]">
              {t("description")}
            </p>
          </div>

          <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-3xl border bg-[#0F1F33] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/15 ${
                  plan.popular
                    ? "border-[#C8A86B] shadow-2xl shadow-[#C8A86B]/10"
                    : "border-[#C8A86B]/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#C8A86B] px-5 py-2 text-xs font-bold tracking-widest text-[#081320]">
                    {t("mostPopular")}
                  </div>
                )}

                <h2 className="text-3xl font-bold uppercase tracking-wide text-[#C8A86B]">
                  {plan.name}
                </h2>

                <div className="mt-5">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-[#D6D6D1]">
                    {t("perMonth")}
                  </span>
                </div>

                <p className="mt-6 min-h-[96px] leading-relaxed text-[#D6D6D1]">
                  {plan.description}
                </p>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className="mt-[2px] font-bold text-[#C8A86B]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/?plan=${encodeURIComponent(plan.name)}#contact`}
                  className={`mt-10 block rounded-full px-6 py-4 text-center font-bold transition hover:-translate-y-1 ${
                    plan.popular
                      ? "bg-[#C8A86B] text-[#081320] shadow-lg shadow-[#C8A86B]/20 hover:bg-[#D6B979]"
                      : "border border-[#C8A86B]/60 text-[#F4F4F2] hover:border-[#C8A86B] hover:bg-[#C8A86B]/10"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-24">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
                {t("additionalServices.eyebrow")}
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                {t("additionalServices.title")}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#D6D6D1]">
                {t("additionalServices.description")}
              </p>
            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((service) => (
                <article
                  key={service.key}
                  className="flex h-full flex-col rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
                >
                  <div className="flex justify-center">
                    <Image
                      src={service.icon}
                      alt={t(`additionalServices.items.${service.key}.title`)}
                      width={90}
                      height={90}
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#C8A86B]">
                    {t(`additionalServices.items.${service.key}.title`)}
                  </h3>

                  <p className="mt-4 flex-1 leading-relaxed text-[#D6D6D1]">
                    {t(`additionalServices.items.${service.key}.description`)}
                  </p>

                  <p className="mt-6 text-lg font-bold text-[#C8A86B]">
                    {t(`additionalServices.items.${service.key}.price`)}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
                {t("businessAddOns.eyebrow")}
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                {t("businessAddOns.title")}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#D6D6D1]">
                {t("businessAddOns.description")}
              </p>
            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {businessAddOns.map((item) => (
                <article
                  key={item.key}
                  className="flex h-full flex-col rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.icon}
                      alt={t(`businessAddOns.items.${item.key}.title`)}
                      width={90}
                      height={90}
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#C8A86B]">
                    {t(`businessAddOns.items.${item.key}.title`)}
                  </h3>

                  <p className="mt-4 flex-1 leading-relaxed text-[#D6D6D1]">
                    {t(`businessAddOns.items.${item.key}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-8 text-center sm:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
              {t("moreSpace.eyebrow")}
            </p>

            <h2 className="mt-5 text-4xl font-bold">
              {t("moreSpace.title")}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#D6D6D1]">
              {t("moreSpace.description")}
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-block rounded-full bg-[#C8A86B] px-10 py-4 font-bold text-[#081320] transition hover:-translate-y-1 hover:bg-[#D6B979]"
            >
              {t("moreSpace.button")}
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}