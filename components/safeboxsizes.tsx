"use client";

import { useTranslations } from "next-intl";

export default function SafeBoxSizes() {
  const t = useTranslations("SafeBoxSizes");

  const sizes = [
    {
      title: t("xs.title"),
      size: "XS",
      description: t("xs.description"),
      status: t("xs.status"),
    },
    {
      title: t("s.title"),
      size: "S",
      description: t("s.description"),
      status: t("s.status"),
    },
    {
      title: t("m.title"),
      size: "M",
      description: t("m.description"),
      status: t("m.status"),
    },
    {
      title: t("l.title"),
      size: "L",
      description: t("l.description"),
      status: t("l.status"),
    },
    {
      title: t("xl.title"),
      size: "XL",
      description: t("xl.description"),
      status: t("xl.status"),
    },
  ];

  return (
    <section id="sizes" className="bg-[#0F1F33] px-6 py-24">
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

        <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {sizes.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[390px] flex-col rounded-3xl border border-[#C8A86B]/20 bg-[#081320] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#C8A86B] bg-[#0F1F33] text-2xl font-bold text-[#C8A86B]">
                {item.size}
              </div>

              <div className="mt-6">
                <span className="inline-block rounded-full border border-[#C8A86B]/30 bg-[#C8A86B]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#C8A86B]">
                  {item.status}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#C8A86B]">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#D6D6D1]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-relaxed text-[#F4F4F2]">
          {t("upgradeNote")}
        </p>
      </div>
    </section>
  );
}