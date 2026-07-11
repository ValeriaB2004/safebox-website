import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | SafeBox",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#081320] px-6 pb-20 pt-44 text-[#F4F4F2]">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>

          <p className="mt-3 text-[#C8A86B]">
            Last updated: July 2026
          </p>

          <div className="mt-12 space-y-10 leading-8 text-[#D6D6D1]">

            <section>
              <h2 className="text-2xl font-bold text-white">
                1. Introduction
              </h2>

              <p className="mt-4">
                SafeBox is committed to protecting your personal information and
                respecting your privacy. This Privacy Policy explains how we
                collect, use and safeguard your information when you visit our
                website or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                2. Information We Collect
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Messages submitted through our contact form</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                3. How We Use Your Information
              </h2>

              <p className="mt-4">
                We only use your information to respond to enquiries,
                communicate with you regarding SafeBox services and improve our
                customer experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                4. Data Protection
              </h2>

              <p className="mt-4">
                We implement appropriate technical and organisational measures
                to protect your personal data against unauthorised access,
                alteration or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                5. Contact
              </h2>

              <p className="mt-4">
                For any questions regarding this Privacy Policy, please contact
                us using the contact form on this website.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}