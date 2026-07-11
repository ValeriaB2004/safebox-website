
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#C8A86B]/20 bg-[#081320]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo and company name */}
        <a href="/" className="flex min-w-0 items-center gap-3">
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
              Private Storage Solutions
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 text-sm text-[#F4F4F2]/80 lg:flex">
          <a
            href="/#boxes"
            className="transition hover:text-[#C8A86B]"
          >
            Solutions
          </a>

          <a
            href="/#sizes"
            className="transition hover:text-[#C8A86B]"
          >
            Sizes
          </a>

          <a
            href="/#who-is-it-for"
            className="transition hover:text-[#C8A86B]"
          >
            Who It&apos;s For
          </a>

          <a
            href="/#how"
            className="transition hover:text-[#C8A86B]"
          >
            How It Works
          </a>

          <a
            href="/#pricing"
            className="transition hover:text-[#C8A86B]"
          >
            Memberships
          </a>

          <a
            href="/pricing"
            className="transition hover:text-[#C8A86B]"
          >
            Full Pricing
          </a>

          <a
            href="/#contact"
            className="transition hover:text-[#C8A86B]"
          >
            Contact
          </a>
        </div>

        {/* Main action button */}
        <a
          href="/#contact"
          className="shrink-0 rounded-full bg-[#C8A86B] px-4 py-2 text-center text-xs font-bold text-[#081320] transition hover:bg-[#D6B979] sm:px-5 sm:py-3 sm:text-sm"
        >
          Book Consultation
        </a>
      </nav>

      {/* Mobile navigation */}
      <div className="overflow-x-auto border-t border-[#C8A86B]/10 px-4 py-3 lg:hidden">
        <div className="mx-auto flex w-max items-center gap-6 whitespace-nowrap text-sm text-[#F4F4F2]/80">
          <a href="/#boxes" className="hover:text-[#C8A86B]">
            Solutions
          </a>

          <a href="/#sizes" className="hover:text-[#C8A86B]">
            Sizes
          </a>

          <a href="/#who-is-it-for" className="hover:text-[#C8A86B]">
            Who It&apos;s For
          </a>

          <a href="/#how" className="hover:text-[#C8A86B]">
            How It Works
          </a>

          <a href="/#pricing" className="hover:text-[#C8A86B]">
            Memberships
          </a>

          <a href="/pricing" className="hover:text-[#C8A86B]">
            Full Pricing
          </a>

          <a href="/#contact" className="hover:text-[#C8A86B]">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}