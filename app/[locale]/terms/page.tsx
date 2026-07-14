import { getTranslations } from "next-intl/server";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Link } from "@/i18n/navigation";

export async function generateMetadata() {
  const t = await getTranslations("Terms");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function TermsPage() {
  const t = await getTranslations("Terms");

  const standardSections = [
    "about",
    "websiteInformation",
    "membershipEnquiries",
    "prices",
    "permittedUse",
    "prohibitedItems",
    "intellectualProperty",
    "thirdPartyServices",
    "availability",
    "liability",
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
                {t("sections.about.title")}
              </h2>

              {(t.raw("sections.about.paragraphs") as string[]).map(
                (paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                )
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.operator.title")}
              </h2>

              <p className="mt-4">{t("sections.operator.introduction")}</p>

              <div className="mt-4 space-y-2 rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6">
                <p>
                  <strong className="text-white">
                    {t("sections.operator.company")}:
                  </strong>{" "}
                  SAFEBOX S.L
                </p>

                <p>
                  <strong className="text-white">
                    {t("sections.operator.taxNumber")}:
                  </strong>{" "}
                  [INSERT CIF / NIF]
                </p>

                <p>
                  <strong className="text-white">
                    {t("sections.operator.address")}:
                  </strong>{" "}
                  [INSERT REGISTERED ADDRESS]
                </p>

                <p>
                  <strong className="text-white">
                    {t("sections.operator.email")}:
                  </strong>{" "}
                  <a
                    href="mailto:contactsafebox2026@gmail.com"
                    className="text-[#C8A86B] hover:underline"
                  >
                    contactsafebox2026@gmail.com
                  </a>
                </p>
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

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.privacy.title")}
              </h2>

              <p className="mt-4">
                {t("sections.privacy.beforeLink")}{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-[#C8A86B] hover:underline"
                >
                  {t("sections.privacy.link")}
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.law.title")}
              </h2>

              {(t.raw("sections.law.paragraphs") as string[]).map(
                (paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                )
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                {t("sections.contact.title")}
              </h2>

              <p className="mt-4">{t("sections.contact.text")}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}