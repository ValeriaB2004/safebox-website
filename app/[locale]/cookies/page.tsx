import { getTranslations } from "next-intl/server";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export async function generateMetadata() {
  const t = await getTranslations("Cookies");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function CookiesPage() {
  const t = await getTranslations("Cookies");

  const cookieRows = [
    "essential",
    "forms",
    "analytics",
    "advertising",
  ] as const;

  const standardSections = [
    "thirdParty",
    "consent",
    "management",
    "changes",
    "contact",
  ] as const;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081320] px-6 pb-24 pt-48 text-[#F4F4F2] lg:pt-36">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
            {t("eyebrow")}
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-4 text-[#C8A86B]">{t("updated")}</p>

          <div className="mt-14 space-y-12 leading-8 text-[#D6D6D1]">
            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.definition.title")}
              </h2>

              <p className="mt-4">
                {t("sections.definition.text")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.currentUse.title")}
              </h2>

              {(t.raw("sections.currentUse.paragraphs") as string[]).map(
                (paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                )
              )}

              <div className="mt-6 overflow-x-auto rounded-2xl border border-[#C8A86B]/20">
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-[#0F1F33] text-[#C8A86B]">
                    <tr>
                      <th className="p-4">
                        {t("sections.currentUse.table.category")}
                      </th>

                      <th className="p-4">
                        {t("sections.currentUse.table.purpose")}
                      </th>

                      <th className="p-4">
                        {t("sections.currentUse.table.status")}
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#C8A86B]/10">
                    {cookieRows.map((row) => (
                      <tr key={row}>
                        <td className="p-4 font-semibold text-white">
                          {t(`sections.currentUse.table.rows.${row}.category`)}
                        </td>

                        <td className="p-4">
                          {t(`sections.currentUse.table.rows.${row}.purpose`)}
                        </td>

                        <td className="p-4">
                          {t(`sections.currentUse.table.rows.${row}.status`)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {standardSections.map((section) => (
              <section key={section}>
                <h2 className="text-2xl font-bold text-white">
                  {t(`sections.${section}.title`)}
                </h2>

                {(
                  t.raw(`sections.${section}.paragraphs`) as string[]
                ).map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}