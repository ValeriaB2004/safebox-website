import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Terms & Conditions | SafeBox",
  description:
    "Terms and conditions governing access to the SafeBox website and enquiries about SafeBox services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081320] px-6 pb-24 pt-48 text-[#F4F4F2] lg:pt-36">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
            Legal information
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-4 text-[#C8A86B]">
            Last updated: July 2026
          </p>

          <div className="mt-14 space-y-12 leading-8 text-[#D6D6D1]">
            <section>
              <h2 className="text-2xl font-bold text-white">
                1. About These Terms
              </h2>

              <p className="mt-4">
                These Terms &amp; Conditions govern your access to and use of
                the SafeBox website. By using this website, you agree to these
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                2. Website Operator
              </h2>

              <p className="mt-4">
                This website is operated by:
              </p>

              <div className="mt-4 rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6">
                <p>
                  <strong className="text-white">Company:</strong>{" "}
                  [INSERT LEGAL COMPANY NAME]
                </p>

                <p>
                  <strong className="text-white">Tax number:</strong>{" "}
                  [INSERT CIF / NIF]
                </p>

                <p>
                  <strong className="text-white">Registered address:</strong>{" "}
                  [INSERT REGISTERED ADDRESS]
                </p>

                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  [INSERT CONTACT EMAIL]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                3. Website Information
              </h2>

              <p className="mt-4">
                The information presented on this website is provided for
                general informational and promotional purposes. It describes
                SafeBox services, memberships and optional additional services.
              </p>

              <p className="mt-4">
                Website content does not itself constitute a binding service
                agreement, reservation or guarantee of availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                4. Membership Enquiries
              </h2>

              <p className="mt-4">
                Submitting an enquiry or selecting a membership on this website
                does not automatically create a subscription or contractual
                relationship.
              </p>

              <p className="mt-4">
                A membership becomes effective only after customer
                identification, confirmation of availability, acceptance of
                the applicable service agreement and completion of any required
                payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                5. Prices and Availability
              </h2>

              <p className="mt-4">
                Prices displayed on the website are indicative and may be
                updated. Any applicable taxes, delivery charges, forwarding
                costs or additional service charges will be communicated before
                the customer enters into a binding agreement.
              </p>

              <p className="mt-4">
                Memberships, SafeBox sizes and additional services remain
                subject to availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                6. Permitted Use
              </h2>

              <p className="mt-4">
                Users must not misuse this website, attempt to gain
                unauthorised access, interfere with its operation, submit false
                information or use the website for unlawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                7. Prohibited Items
              </h2>

              <p className="mt-4">
                SafeBox services must not be used for illegal goods, dangerous
                items, hazardous materials, weapons, cash where prohibited,
                perishable goods or any item restricted by law or by the
                applicable service agreement.
              </p>

              <p className="mt-4">
                The definitive list of accepted and prohibited items will be
                stated in the customer service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                8. Intellectual Property
              </h2>

              <p className="mt-4">
                The SafeBox name, logo, visual identity, website design, text,
                graphics and other website content are protected by applicable
                intellectual-property laws.
              </p>

              <p className="mt-4">
                They may not be copied, distributed, reproduced or used for
                commercial purposes without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                9. Third-Party Services
              </h2>

              <p className="mt-4">
                The website may use or link to third-party services, including
                form-processing, hosting, analytics, map, calendar or payment
                providers. Those services may be governed by their own terms
                and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                10. Website Availability
              </h2>

              <p className="mt-4">
                We aim to keep the website accurate and available, but we do
                not guarantee uninterrupted operation or that all information
                will always be free from errors.
              </p>

              <p className="mt-4">
                We may modify, suspend or withdraw website content when
                reasonably necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                11. Limitation of Liability
              </h2>

              <p className="mt-4">
                To the maximum extent permitted by law, the website operator is
                not responsible for indirect loss resulting solely from use of,
                or inability to access, this informational website.
              </p>

              <p className="mt-4">
                Nothing in these terms excludes liability that cannot legally
                be excluded or limits mandatory consumer rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                12. Privacy
              </h2>

              <p className="mt-4">
                Personal information submitted through the website is handled
                in accordance with our{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-[#C8A86B] hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                13. Applicable Law
              </h2>

              <p className="mt-4">
                These terms are governed by Spanish law, without prejudice to
                any mandatory rights or jurisdiction available to consumers
                under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                14. Contact
              </h2>

              <p className="mt-4">
                Questions regarding these Terms &amp; Conditions may be sent
                through the contact form on the SafeBox website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}