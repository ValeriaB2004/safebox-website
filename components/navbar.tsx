"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const language = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#C8A86B]/20 bg-[#081320]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/Logo-removebg-preview.png"
            alt="SafeBox Logo"
            width={58}
            height={58}
            priority
            className="h-[52px] w-[52px] object-contain sm:h-[58px] sm:w-[58px]"
          />

          <div className="min-w-0">
            <p className="text-lg font-bold tracking-[0.22em] text-[#C8A86B] sm:text-xl">
              SAFEBOX
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-[#D6D6D1]/70 sm:block">
              {t("tagline")}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-5 text-sm text-[#F4F4F2]/80 lg:flex">
          <Link href="/#boxes" className="transition hover:text-[#C8A86B]">
            {t("solutions")}
          </Link>

          <Link href="/#sizes" className="transition hover:text-[#C8A86B]">
            {t("sizes")}
          </Link>

          <Link
            href="/#who-is-it-for"
            className="transition hover:text-[#C8A86B]"
          >
            {t("whoItsFor")}
          </Link>

          <Link href="/#how" className="transition hover:text-[#C8A86B]">
            {t("howItWorks")}
          </Link>

          <Link href="/#pricing" className="transition hover:text-[#C8A86B]">
            {t("memberships")}
          </Link>

          <Link href="/pricing" className="transition hover:text-[#C8A86B]">
            {t("fullPricing")}
          </Link>

          <Link href="/#contact" className="transition hover:text-[#C8A86B]">
            {t("contact")}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div
            className="flex rounded-full border border-[#C8A86B]/30 p-1"
            aria-label={language("label")}
          >
            <Link
              href={pathname}
              locale="en"
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                locale === "en"
                  ? "bg-[#C8A86B] text-[#081320]"
                  : "text-[#F4F4F2] hover:text-[#C8A86B]"
              }`}
            >
              {language("english")}
            </Link>

            <Link
              href={pathname}
              locale="es"
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                locale === "es"
                  ? "bg-[#C8A86B] text-[#081320]"
                  : "text-[#F4F4F2] hover:text-[#C8A86B]"
              }`}
            >
              {language("spanish")}
            </Link>

            <Link
              href={pathname}
              locale="ru"
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                locale === "ru"
                  ? "bg-[#C8A86B] text-[#081320]"
                  : "text-[#F4F4F2] hover:text-[#C8A86B]"
              }`}
            >
              {language("russian")}
            </Link>
          </div>

          <Link
            href="/#contact"
            className="hidden rounded-full bg-[#C8A86B] px-4 py-2 text-center text-xs font-bold text-[#081320] transition hover:bg-[#D6B979] sm:block sm:px-5 sm:py-3 sm:text-sm"
          >
            {t("bookConsultation")}
          </Link>
        </div>
      </nav>

      <div className="overflow-x-auto border-t border-[#C8A86B]/10 px-4 py-3 lg:hidden">
        <div className="mx-auto flex w-max items-center gap-6 whitespace-nowrap text-sm text-[#F4F4F2]/80">
          <Link href="/#boxes">{t("solutions")}</Link>
          <Link href="/#sizes">{t("sizes")}</Link>
          <Link href="/#who-is-it-for">{t("whoItsFor")}</Link>
          <Link href="/#how">{t("howItWorks")}</Link>
          <Link href="/#pricing">{t("memberships")}</Link>
          <Link href="/pricing">{t("fullPricing")}</Link>
          <Link href="/#contact">{t("contact")}</Link>
        </div>
      </div>
    </header>
  );
}