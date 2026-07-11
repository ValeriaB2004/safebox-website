"use client";

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
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Book a Consultation
        </h2>

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