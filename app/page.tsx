"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const carouselImages = [
    "/images/box1.jpg",
    "/images/box2.jpg",
    "/images/box3.jpg",
    "/images/box4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [carouselImages.length]);
 
  return (
    <main className="min-h-screen bg-[#081320] text-[#F4F4F2]">
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

      <section className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C8A86B] tracking-[0.35em] uppercase text-sm mb-6">
              Secure. Private. Accessible.
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wide">
              Your Safety Is Our Priority
            </h1>

            <p className="mt-8 text-xl text-[#D6D6D1] max-w-2xl">
              Premium private box solutions for individuals, companies and
              international clients who value security, confidentiality and direct access.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#contact"
                className="bg-[#C8A86B] text-[#081320] px-8 py-4 rounded-full font-bold"
              >
                Book a Consultation
              </a>

              <a
                href="#boxes"
                className="border border-[#C8A86B]/50 px-8 py-4 rounded-full font-bold"
              >
                Explore Boxes
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C8A86B]/30 bg-[#0F1F33] p-4 shadow-2xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-[#C8A86B]/30">
              {carouselImages.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt="Safebox private box"
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#081320]/70 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-[#C8A86B] tracking-[0.35em] text-sm">
                  SAFEBOX
                </p>
                <p className="text-white text-2xl font-bold mt-2">
                  Private Box Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="boxes" className="px-6 py-24 bg-[#0F1F33]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Private Box Solutions
          </h2>

          <p className="mt-6 text-center text-[#D6D6D1] max-w-3xl mx-auto">
            A secure private space for documents, correspondence, small items and
            personal or business essentials.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              ["Private Box Rental", "Personal numbered boxes with secure access."],
              ["Secure Receiving", "Receive documents and small items safely."],
              ["Document Storage", "Keep originals protected until collection."],
              ["Digital Mail Room", "Optional scanning and digital delivery."],
              ["Business Boxes", "Stable private box solutions for companies."],
              ["Premium Handling", "Priority service for important documents."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-[#081320] border border-[#C8A86B]/20 rounded-3xl p-8"
              >
                <h3 className="text-[#C8A86B] text-xl font-bold">{title}</h3>
                <p className="mt-4 text-[#D6D6D1]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Why Choose Safebox?
          </h2>

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              "Security",
              "Confidentiality",
              "Direct Access",
              "Trust",
              "Professionalism",
              "Flexible Plans",
              "Premium Location",
              "Digital Services",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#0F1F33] border border-[#C8A86B]/20 rounded-3xl p-8 text-center"
              >
                <div className="text-[#C8A86B] text-3xl mb-4">◆</div>
                <p className="tracking-wide">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-6 py-24 bg-[#0F1F33]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            How It Works
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              ["1", "Choose your private box plan"],
              ["2", "Use your secure box location"],
              ["3", "Collect, store, scan or forward when needed"],
            ].map(([number, text]) => (
              <div
                key={number}
                className="bg-[#081320] border border-[#C8A86B]/20 rounded-3xl p-8 text-center"
              >
                <div className="text-[#C8A86B] text-4xl font-bold">{number}</div>
                <p className="mt-5 text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Memberships
          </h2>

          <p className="mt-6 text-center text-[#D6D6D1]">
            Designed for individuals, professionals and businesses.
          </p>

          <div className="mt-14 grid md:grid-cols-4 gap-6">

            <div className="bg-[#0F1F33] border border-[#C8A86B]/20 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#C8A86B]">
                Essential
              </h3>

              <p className="text-4xl font-bold mt-4">
                €24.99
              </p>

              <p className="mt-4 text-[#D6D6D1]">
                Perfect for individuals who need a secure private box.
              </p>
            </div>

            <div className="bg-[#0F1F33] border border-[#C8A86B]/20 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#C8A86B]">
                Select
              </h3>

              <p className="text-4xl font-bold mt-4">
                €49.99
              </p>

              <p className="mt-4 text-[#D6D6D1]">
                Ideal for professionals and frequent travellers.
              </p>
            </div>

            <div className="bg-[#0F1F33] border-2 border-[#C8A86B] rounded-3xl p-8 text-center">
              <div className="inline-block bg-[#C8A86B] text-[#081320] px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold text-[#C8A86B] mt-4">
                Signature
              </h3>

              <p className="text-4xl font-bold mt-4">
                €89.99
              </p>

              <p className="mt-4 text-[#D6D6D1]">
                Complete document and private box management.
              </p>
            </div>

            <div className="bg-[#0F1F33] border border-[#C8A86B]/20 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#C8A86B]">
                Executive
              </h3>

              <p className="text-4xl font-bold mt-4">
                €149.99
              </p>

              <p className="mt-4 text-[#D6D6D1]">
                Full business correspondence management.
              </p>
            </div>

          </div>

          <div className="text-center mt-14">
            <a
              href="/pricing"
              className="bg-[#C8A86B] text-[#081320] px-10 py-4 rounded-full font-bold hover:bg-[#d6b77a] transition"
            >
              View Full Comparison →
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 bg-[#0F1F33]">
        <div className="max-w-3xl mx-auto bg-[#081320] border border-[#C8A86B]/20 rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-center">Book a Consultation</h2>

          <form
            action="https://formspree.io/f/mzdllloa"
            method="POST"
            className="mt-10 flex flex-col gap-4"
          >
            <input
              name="name"
              className="p-4 rounded-xl bg-[#0F1F33] text-white placeholder-[#C8C8C8] border border-[#C8A86B]/40"
              placeholder="Name"
              required
            />

            <input
              name="email"
              type="email"
              className="p-4 rounded-xl bg-[#0F1F33] text-white placeholder-[#C8C8C8] border border-[#C8A86B]/40"
              placeholder="Email"
              required
            />

            <input
              name="phone"
              className="p-4 rounded-xl bg-[#0F1F33] text-white placeholder-[#C8C8C8] border border-[#C8A86B]/40"
              placeholder="Phone"
            />

            <textarea
              name="message"
              className="p-4 rounded-xl bg-[#0F1F33] text-white placeholder-[#C8C8C8] border border-[#C8A86B]/40"
              rows={5}
              placeholder="Message"
              required
            />

            <button className="bg-[#C8A86B] text-[#081320] p-4 rounded-xl font-bold">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}