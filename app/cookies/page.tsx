import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Cookie Policy | SafeBox",
  description:
    "Information about cookies and similar technologies used on the SafeBox website.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081320] px-6 pb-24 pt-48 text-[#F4F4F2] lg:pt-36">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
            Website information
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            Cookie Policy
          </h1>

          <p className="mt-4 text-[#C8A86B]">
            Last updated: July 2026
          </p>

          <div className="mt-14 space-y-12 leading-8 text-[#D6D6D1]">
            <section>
              <h2 className="text-2xl font-bold text-white">
                1. What Are Cookies?
              </h2>

              <p className="mt-4">
                Cookies are small data files that a website may place on a
                visitor&apos;s device. They can support essential website
                functions, remember preferences, measure website performance
                or enable third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                2. Cookies Currently Used
              </h2>

              <p className="mt-4">
                At the current stage, the SafeBox website is intended to use
                only technologies required for basic website operation,
                security and form submission.
              </p>

              <p className="mt-4">
                We do not currently intend to use advertising or behavioural
                profiling cookies.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-[#C8A86B]/20">
                <table className="w-full min-w-[650px] text-left">
                  <thead className="bg-[#0F1F33] text-[#C8A86B]">
                    <tr>
                      <th className="p-4">Category</th>
                      <th className="p-4">Purpose</th>
                      <th className="p-4">Required?</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#C8A86B]/10">
                    <tr>
                      <td className="p-4 text-white">Essential</td>
                      <td className="p-4">
                        Website operation, security and technical delivery.
                      </td>
                      <td className="p-4">Yes</td>
                    </tr>

                    <tr>
                      <td className="p-4 text-white">Form services</td>
                      <td className="p-4">
                        Processing contact-form submissions and spam
                        prevention.
                      </td>
                      <td className="p-4">
                        Used when the contact form is submitted.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 text-white">Analytics</td>
                      <td className="p-4">
                        Understanding website usage and performance.
                      </td>
                      <td className="p-4">Not currently enabled</td>
                    </tr>

                    <tr>
                      <td className="p-4 text-white">Advertising</td>
                      <td className="p-4">
                        Personalised advertising or cross-site tracking.
                      </td>
                      <td className="p-4">Not currently enabled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                3. Third-Party Services
              </h2>

              <p className="mt-4">
                This website currently uses Formspree to process contact-form
                submissions and Vercel to host and deliver the website.
                Third-party providers may process limited technical information
                needed to deliver their services.
              </p>

              <p className="mt-4">
                If additional services such as analytics, embedded maps,
                appointment scheduling, video, customer login or payment
                processing are introduced, this policy will be updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                4. Cookie Consent
              </h2>

              <p className="mt-4">
                Essential technologies may be used where necessary for the
                website to function. Optional cookies will not be activated
                without the appropriate notice and consent where consent is
                legally required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                5. Managing Cookies
              </h2>

              <p className="mt-4">
                You can control or delete cookies through your browser
                settings. Blocking certain technical functions may affect how
                some parts of the website operate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                6. Changes to This Policy
              </h2>

              <p className="mt-4">
                We may update this Cookie Policy when website functionality,
                service providers or legal requirements change. The current
                version will always be published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                7. Contact
              </h2>

              <p className="mt-4">
                Questions concerning this Cookie Policy may be submitted
                through the contact form on this website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}