import { Suspense } from "react";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PrivateBoxes from "@/components/privateboxes";
import WhyChoose from "@/components/whychoose";
import HowItWorks from "@/components/howitworks";
import PricingPreview from "@/components/pricingpreview";
import ContactForm from "@/components/contactform";
import SafeBoxSizes from "@/components/safeboxsizes";
import WhatYouCanStore from "@/components/whatyoucanstore";
import WhoIsFor from "@/components/whoisfor";
import Footer from "@/components/footer";
import FadeIn from "@/components/fadein";
import FloatingButton from "@/components/floatingbutton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081320] text-[#F4F4F2]">
      <Navbar />
      <FloatingButton />
      <Hero />

      <FadeIn>
        <PrivateBoxes />
      </FadeIn>

      <FadeIn>
        <WhyChoose />
      </FadeIn>

      <FadeIn>
        <SafeBoxSizes />
      </FadeIn>

      <FadeIn>
        <WhatYouCanStore />
      </FadeIn>

      <FadeIn>
        <WhoIsFor />
      </FadeIn>

      <FadeIn>
        <HowItWorks />
      </FadeIn>

      <FadeIn>
        <PricingPreview />
      </FadeIn>

      <Suspense
        fallback={
          <section className="bg-[#0F1F33] px-6 py-24">
            <p className="text-center text-[#D6D6D1]">
              Loading contact form...
            </p>
          </section>
        }
      >
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </Suspense>

      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}