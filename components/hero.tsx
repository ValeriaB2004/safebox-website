"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselImages = [
  {
    src: "/images/security1.png",
    title: "Maximum Security",
    description:
      "Professionally managed private SafeBoxes designed to keep your correspondence, documents and valuables secure.",
  },
  {
    src: "/images/access.png",
    title: "Private Access",
    description:
      "Access your SafeBox whenever you need it with complete privacy and confidence.",
  },
  {
    src: "/images/collection.png",
    title: "Simple Collection",
    description:
      "Collect correspondence, documents and small parcels quickly using your personal SafeBox key.",
  },
  {
    src: "/images/personal.png",
    title: "Personal & Business Solutions",
    description:
      "Ideal for individuals, professionals and businesses looking for a secure private address and storage solution.",
  },
  {
    src: "/images/premium.png",
    title: "Premium SafeBox Experience",
    description:
      "Elegant design, advanced security and professional service in one trusted location.",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function showPreviousImage() {
    setCurrentImage((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  }

  function showNextImage() {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  }

  return (
    <section className="px-6 pb-24 pt-48 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
            Secure. Private. Accessible.
          </p>

          <h1 className="break-words text-4xl font-bold leading-tight tracking-wide sm:text-5xl md:text-7xl">
            Your Safety Is Our Priority
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#D6D6D1] sm:text-xl">
            Secure private storage for correspondence, important documents,
            parcels and business deliveries, enhanced with Digital Mailroom
            services.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="w-full rounded-full bg-[#C8A86B] px-8 py-4 text-center font-bold text-[#081320] shadow-lg shadow-[#C8A86B]/10 transition hover:-translate-y-1 hover:bg-[#D6B979] hover:shadow-xl hover:shadow-[#C8A86B]/20 sm:w-auto"
            >
              Book a Consultation
            </a>

            <a
              href="/#boxes"
              className="w-full rounded-full border border-[#C8A86B]/50 px-8 py-4 text-center font-bold transition hover:-translate-y-1 hover:border-[#C8A86B] hover:bg-[#C8A86B]/10 sm:w-auto"
            >
              Explore SafeBox
            </a>

            <a
              href="/pricing"
              className="w-full rounded-full border border-[#C8A86B]/50 px-8 py-4 text-center font-bold transition hover:-translate-y-1 hover:border-[#C8A86B] hover:bg-[#C8A86B]/10 sm:w-auto"
            >
              Explore Memberships
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="rounded-[2rem] border border-[#C8A86B]/30 bg-[#0F1F33] p-3 shadow-2xl shadow-black/30 sm:p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-[#C8A86B]/30">
            {carouselImages.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.title}
                fill
                priority={index === 0}
                sizes="(max-width:768px) 100vw, 50vw"
                className={`object-cover transition-all duration-1000 ${
                  index === currentImage
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-[#081320]/95 via-[#081320]/20 to-transparent" />

            {/* Previous Button */}
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#081320]/80 text-xl text-white backdrop-blur transition hover:border-[#C8A86B] hover:text-[#C8A86B]"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#081320]/80 text-xl text-white backdrop-blur transition hover:border-[#C8A86B] hover:text-[#C8A86B]"
            >
              ›
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 z-10 max-w-[72%] sm:max-w-[68%]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#C8A86B]">
                SAFEBOX
              </p>

              <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                {carouselImages[currentImage].title}
              </h2>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                {carouselImages[currentImage].description}
              </p>

              {/* Navigation Dots */}
              <div className="mt-5 flex gap-2">
                {carouselImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "w-8 bg-[#C8A86B]"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}