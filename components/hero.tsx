"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselImages = [
  "/images/box1.jpg",
  "/images/box2.jpg",
  "/images/box3.jpg",
  "/images/box4.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-36 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C8A86B] tracking-[0.35em] uppercase text-sm mb-6">
            Secure. Private. Accessible.
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-wide break-words">
            Your Safety Is Our Priority
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#D6D6D1] max-w-2xl">
            Premium private box solutions for individuals, companies and
            international clients who value security, confidentiality and
            direct access.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#C8A86B] text-[#081320] px-8 py-4 rounded-full font-bold text-center w-full sm:w-auto"
            >
              Book a Consultation
            </a>

            <a
              href="#boxes"
              className="border border-[#C8A86B]/50 px-8 py-4 rounded-full font-bold text-center w-full sm:w-auto"
            >
              Explore SafeBox
            </a>

            <a
              href="#pricing"
              className="border border-[#C8A86B]/50 px-8 py-4 rounded-full font-bold text-center w-full sm:w-auto"
            >
              Explore Memberships
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#C8A86B]/30 bg-[#0F1F33] p-4 shadow-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-[#C8A86B]/30">
            {carouselImages.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt="SafeBox private box"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
  );
}