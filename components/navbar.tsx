
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081320]/90 border-b border-[#C8A86B]/20 backdrop-blur">
            <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image
                src="/images/Logo-removebg-preview.png"
                alt="Bunker Systems Logo"
                width={64}
                height={64}
                />

                <div>
                <h1 className="text-[#C8A86B] font-bold tracking-[0.25em] text-xl">
                    SAFEBOX
                </h1>

                <p className="text-xs text-gray-400 tracking-[0.3em] uppercase">
                    Private Box Solutions
                </p>
                </div>
            </div>
            <a
                href="#contact"
                className="bg-[#C8A86B] text-[#081320] px-5 py-2 rounded-full font-semibold"
            >
                Book Consultation
            </a>
            </nav>
        </header>
    );
}