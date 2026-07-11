export default function FloatingButton() {
  return (
    <a
      href="/#contact"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full border border-[#E2C98B]/40 bg-[#C8A86B] px-5 py-3 text-sm font-bold text-[#081320] shadow-2xl shadow-black/40 transition hover:-translate-y-1 hover:bg-[#D6B979] md:hidden"
      aria-label="Book a SafeBox consultation"
    >
      Book Consultation
    </a>
  );
}