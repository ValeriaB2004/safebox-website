export default function Footer() {
  return (
    <footer className="border-t border-[#C8A86B]/20 bg-[#06101B] px-6 pb-28 pt-16 text-[#F4F4F2] md:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-bold tracking-[0.25em] text-[#C8A86B]">
            SAFEBOX
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#D6D6D1]/70">
            Private Storage Solutions
          </p>

          <p className="mt-6 max-w-sm leading-relaxed text-[#D6D6D1]">
            Secure private storage for correspondence, important documents,
            parcels and business deliveries.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#C8A86B]">Explore</h3>

          <div className="mt-5 flex flex-col gap-3 text-[#D6D6D1]">
            <a href="/#boxes" className="transition hover:text-[#C8A86B]">
              Solutions
            </a>

            <a href="/#sizes" className="transition hover:text-[#C8A86B]">
              SafeBox Sizes
            </a>

            <a
              href="/#who-is-it-for"
              className="transition hover:text-[#C8A86B]"
            >
              Who It&apos;s For
            </a>

            <a href="/#how" className="transition hover:text-[#C8A86B]">
              How It Works
            </a>

            <a href="/pricing" className="transition hover:text-[#C8A86B]">
              Memberships
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#C8A86B]">Contact</h3>

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

            <a
              href="/#contact"
              className="inline-block transition hover:text-[#C8A86B]"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        <div>
            <h3 className="font-bold text-[#C8A86B]">Legal</h3>

            <div className="mt-5 flex flex-col gap-3 text-[#D6D6D1]">
                <a
                    href="/privacy"
                    className="transition hover:text-[#C8A86B]"
                >
                    Privacy Policy
                </a>

                <a
                    href="/terms"
                    className="transition hover:text-[#C8A86B]"
                >
                    Terms &amp; Conditions
                </a>

                <a
                    href="/cookies"
                    className="transition hover:text-[#C8A86B]"
                >
                    Cookie Policy
                </a>
            </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-[#C8A86B]/15 pt-8 text-sm text-[#D6D6D1]/70 md:flex-row md:items-center md:justify-between">
        <p>© 2026 SafeBox. All rights reserved.</p>

        <p>Security. Privacy. Reliability.</p>
      </div>
    </footer>
  );
}