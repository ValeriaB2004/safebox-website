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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081320] text-[#F4F4F2]">
      <Navbar />
      <Hero />
      <PrivateBoxes />
      <WhyChoose />
      <SafeBoxSizes />
      <WhatYouCanStore/>
      <WhoIsFor/>
      <HowItWorks/>
      <PricingPreview />

      <Suspense
        fallback={
          <section className="bg-[#0F1F33] px-6 py-24">
            <p className="text-center text-[#D6D6D1]">
              Loading contact form...
            </p>
          </section>
        }
      >
        <ContactForm />
      </Suspense>
    </main>
  );
}