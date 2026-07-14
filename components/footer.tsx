"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-[#C8A86B]/20 bg-[#06101B] px-6 pb-28 pt-16 text-[#F4F4F2] md:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <p className="text-2xl font-bold tracking-[0.25em] text-[#C8A86B]">
            SAFEBOX
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#D6D6D1]/70">
            {t("tagline")}
          </p>

          <p className="mt-6 max-w-sm leading-relaxed text-[#D6D6D1]">
            {t("description")}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-[#C8A86B]">{t("explore")}</h3>

          <div className="mt-5 flex flex-col gap-3 text-[#D6D6D1]">
            <Link href="/#boxes">{t("solutions")}</Link>

            <Link href="/#sizes">{t("sizes")}</Link>

            <Link href="/#who-is-it-for">{t("whoItsFor")}</Link>

            <Link href="/#how">{t("howItWorks")}</Link>

            <Link href="/pricing">{t("memberships")}</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[#C8A86B]">{t("contact")}</h3>

          <div className="mt-5 space-y-3 text-[#D6D6D1]">
            <p>Marbella, Spain</p>

            <a
              href="mailto:contactsafebox2026@gmail.com"
              className="block transition hover:text-[#C8A86B]"
            >
              contactsafebox2026@gmail.com
            </a>

            <a
              href="tel:+34672391164"
              className="block transition hover:text-[#C8A86B]"
            >
              +34 672 391 164
            </a>

            <Link href="/#contact">{t("bookConsultation")}</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-[#C8A86B]">{t("legal")}</h3>

          <div className="mt-5 flex flex-col gap-3 text-[#D6D6D1]">
            <Link href="/privacy">{t("privacy")}</Link>

            <Link href="/terms">{t("terms")}</Link>

            <Link href="/cookies">{t("cookies")}</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-[#C8A86B]/15 pt-8 text-sm text-[#D6D6D1]/70 md:flex-row md:items-center md:justify-between">
        <p>{t("copyright")}</p>

        <p>{t("bottomTagline")}</p>
      </div>
    </footer>
  );
}