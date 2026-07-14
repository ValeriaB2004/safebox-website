import { getTranslations } from "next-intl/server";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export async function generateMetadata() {
  const t = await getTranslations("Privacy");

  return {
    title: t("metaTitle"),
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations("Privacy");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081320] px-6 pb-20 pt-44 text-[#F4F4F2]">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold">{t("title")}</h1>

          <p className="mt-3 text-[#C8A86B]">
            {t("updated")}
          </p>

          <div className="mt-12 space-y-10 leading-8 text-[#D6D6D1]">
            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.introduction.title")}
              </h2>

              <p className="mt-4">
                {t("sections.introduction.text")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.collect.title")}
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>{t("sections.collect.name")}</li>
                <li>{t("sections.collect.email")}</li>
                <li>{t("sections.collect.phone")}</li>
                <li>{t("sections.collect.message")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.use.title")}
              </h2>

              <p className="mt-4">
                {t("sections.use.text")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.protection.title")}
              </h2>

              <p className="mt-4">
                {t("sections.protection.text")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.contact.title")}
              </h2>

              <p className="mt-4">
                {t("sections.contact.text")}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}