"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  const message = selectedPlan
    ? `Hello, I am interested in the SafeBox ${selectedPlan} membership. Please contact me with more information.`
    : "";

  return (
    <section id="contact" className="px-6 py-24 bg-[#0F1F33]">
      <div className="max-w-3xl mx-auto bg-[#081320] border border-[#C8A86B]/20 rounded-3xl p-6 sm:p-10">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A86B]">
              We're here to help
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
              Need Help Choosing the Right SafeBox?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-[#D6D6D1]">
              Whether you're looking for a secure place for personal correspondence,
              business documents, parcels or long-term storage, our team will help you
              choose the ideal SafeBox size and membership.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8A86B]/30 bg-[#081320]">
                    <Image
                        src="/icons/personal-advice.png"
                        alt="Personal Advice"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                </div>

                <h3 className="mt-4 font-bold text-[#C8A86B]">
                Personal Advice
                </h3>

                <p className="mt-3 text-[#D6D6D1]">
                We&apos;ll recommend the most suitable SafeBox solution.
                </p>
            </div>

            <div className="rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8A86B]/30 bg-[#081320]">
                <Image
                    src="/icons/secure-confidential.png"
                    alt="Secure and Confidential"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                </div>

                <h3 className="mt-4 font-bold text-[#C8A86B]">
                Secure &amp; Confidential
                </h3>

                <p className="mt-3 text-[#D6D6D1]">
                Every enquiry is handled confidentially.
                </p>
            </div>

            <div className="rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8A86B]/30 bg-[#081320]">
                <Image
                    src="/icons/fast-response.png"
                    alt="Fast Response"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                </div>

                <h3 className="mt-4 font-bold text-[#C8A86B]">
                Fast Response
                </h3>

                <p className="mt-3 text-[#D6D6D1]">
                We aim to respond within one business day.
                </p>
            </div>
            </div>

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
            type="tel"
            className="p-4 rounded-xl bg-[#0F1F33] text-white placeholder-[#C8C8C8] border border-[#C8A86B]/40"
            placeholder="Phone"
          />
        
        <select
            name="membership"
            defaultValue={selectedPlan || ""}
            className="p-4 rounded-xl bg-[#0F1F33] text-white border border-[#C8A86B]/40"
        >
            <option value="">Which membership are you interested in?</option>

            <option value="Essential">Essential</option>
            <option value="Select">Select</option>
            <option value="Signature">Signature</option>
            <option value="Executive">Executive</option>
            <option value="Not sure yet">Not sure yet</option>
        </select>

          <textarea
            name="message"
            className="p-4 rounded-xl bg-[#0F1F33] text-white placeholder-[#C8C8C8] border border-[#C8A86B]/40"
            rows={5}
            placeholder="Message"
            defaultValue={message}
            required
          />

          <button
            type="submit"
            className="bg-[#C8A86B] text-[#081320] p-4 rounded-xl font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}