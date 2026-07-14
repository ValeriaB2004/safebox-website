import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floatingbutton";

const plans = [
  {
    name: "Essential",
    price: "€30",
    description:
      "Perfect for individuals who need a secure mailing address.",
    buttonText: "Choose Essential",
    popular: false,
    features: [
      "XS SafeBox",
      "Secure mail reception",
      "Secure document storage",
      "Instant SMS arrival notifications",
      "Mail collection during business hours",
      "Secure handling of correspondence",
      "7-day complimentary storage",
      "Client Portal access",
    ],
  },
  {
    name: "Select",
    price: "€60",
    description:
      "Ideal for professionals, remote workers and frequent travellers.",
    buttonText: "Choose Select",
    popular: false,
    features: [
      "Everything in Essential",
      "Choose between XS and S SafeBox, and ability to upgrade",
      "Small parcel reception",
      "Extended storage period",
      "Parcel collection service",
      "Up to 5 document scans / month",
      "Digital document delivery",
      "Mail forwarding available",
      "Priority document processing",
    ],
  },
  {
    name: "Signature",
    price: "€100",
    description:
      "Our most popular plan for premium document management.",
    buttonText: "Choose Signature",
    popular: true,
    features: [
      "Everything in Select",
      "Choose between XS and S SafeBox, and ability to upgrade",
      "Up to 25 document scans / month",
      "Storage reminders",
      "Express digital document delivery",
      "Extended secure document archive",
      "Priority document handling",
      "Priority customer support",
      "Reduced forwarding fees",
    ],
  },
  {
    name: "Executive",
    price: "€180",
    description:
      "Complete business correspondence management solution.",
    buttonText: "Choose Executive",
    popular: false,
    features: [
      "Everything in Signature",
      "Choose between XS and S SafeBox, and ability to upgrade",
      "Multiple authorised users",
      "Business correspondence reception",
      "Unlimited document scanning",
      "Unlimited secure digital archive",
      "Secure international forwarding",
      "Monthly activity reports",
      "Dedicated Account Manager",
      "Priority Business Support",
      "Priority handling of all incoming correspondence",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <FloatingButton />

      <main className="min-h-screen bg-[#081320] px-6 pb-24 pt-48 text-[#F4F4F2] lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
              Secure. Private. Professional.
            </p>

            <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
              Choose Your Plan
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#D6D6D1]">
              Select the plan that best fits your personal or business needs.
            </p>
          </div>

          <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-3xl border bg-[#0F1F33] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/15 ${
                  plan.popular
                    ? "border-[#C8A86B] shadow-2xl shadow-[#C8A86B]/10"
                    : "border-[#C8A86B]/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#C8A86B] px-5 py-2 text-xs font-bold tracking-widest text-[#081320]">
                    MOST POPULAR
                  </div>
                )}

                <h2 className="text-3xl font-bold uppercase tracking-wide text-[#C8A86B]">
                  {plan.name}
                </h2>

                <div className="mt-5">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-[#D6D6D1]">per month</span>
                </div>

                <p className="mt-6 min-h-[96px] leading-relaxed text-[#D6D6D1]">
                  {plan.description}
                </p>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className="mt-[2px] font-bold text-[#C8A86B]">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/?plan=${encodeURIComponent(plan.name)}#contact`}
                  className={`mt-10 block rounded-full px-6 py-4 text-center font-bold transition hover:-translate-y-1 ${
                    plan.popular
                      ? "bg-[#C8A86B] text-[#081320] shadow-lg shadow-[#C8A86B]/20 hover:bg-[#D6B979]"
                      : "border border-[#C8A86B]/60 text-[#F4F4F2] hover:border-[#C8A86B] hover:bg-[#C8A86B]/10"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </article>
            ))}
          </div>
                    {/* Additional Services */}
          <section className="mt-24">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
                Flexible Extras
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Additional Services
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#D6D6D1]">
                Enhance your SafeBox membership with optional scanning,
                forwarding, secure storage and collection services tailored to
                your needs.
              </p>
            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Document Scanning",
                  icon: "/icons/document-scanning.png",
                  description:
                    "Convert incoming correspondence and documents into secure digital copies.",
                  price: "€3.00 per envelope",
                },
                {
                  title: "Express Scanning",
                  icon: "/icons/express-scanning.png",
                  description:
                    "Receive an urgent digital copy of your document within one hour.",
                  price: "€10.00",
                },
                {
                  title: "Secure Document Forwarding",
                  icon: "/icons/document.png",
                  description:
                    "Forward correspondence and important documents to your chosen destination.",
                  price: "From €12.00 + shipping",
                },
                {
                  title: "International Forwarding",
                  icon: "/icons/delivery.png",
                  description:
                    "Worldwide forwarding for correspondence, documents and eligible parcels.",
                  price: "Price on request",
                },
                {
                  title: "Long-Term Secure Storage",
                  icon: "/icons/long-term-storage.png",
                  description:
                    "Keep your documents and eligible items securely stored for an extended period.",
                  price: "From €10.00 / month",
                },
                {
                  title: "Additional Authorised User",
                  icon: "/icons/additional-user.png",
                  description:
                    "Authorise another trusted person to collect items from your SafeBox.",
                  price: "€10.00 / month",
                },
                {
                  title: "Additional SafeBox",
                  icon: "/icons/additional-safebox.png",
                  description:
                    "Add another SafeBox to your existing membership when you need more capacity.",
                  price: "€20.00 / month",
                },
                {
                  title: "Oversized Parcel Handling",
                  icon: "/icons/oversized-parcel.png",
                  description:
                    "Receive and securely manage larger deliveries that require special handling.",
                  price: "From €5.00",
                },
                {
                  title: "Express Parcel Collection",
                  icon: "/icons/express-collection.png",
                  description:
                    "Priority preparation and handling for urgent parcel collection.",
                  price: "€15.00",
                },
                {
                  title: "Digital Document Archive",
                  icon: "/icons/digital-archive.png",
                  description:
                    "Store scanned documents in a secure and organised digital archive.",
                  price: "From €5.00 / month",
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="flex h-full flex-col rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
                >
                  <div className="flex justify-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={90}
                      height={90}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#C8A86B]">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-relaxed text-[#D6D6D1]">
                    {service.description}
                  </p>

                  <p className="mt-6 text-lg font-bold text-[#C8A86B]">
                    {service.price}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Business Add-Ons */}
          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
                Business Solutions
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Business Add-Ons
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#D6D6D1]">
                Advanced options for companies that require secure team access,
                document management, reporting and dedicated support.
              </p>
            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Multiple Collection Authorisations",
                  icon: "/icons/additional-user.png",
                  description:
                    "Allow several approved people to collect correspondence and deliveries.",
                },
                {
                  title: "Team Access Management",
                  icon: "/icons/team-access.png",
                  description:
                    "Manage authorised users and access permissions for your organisation.",
                },
                {
                  title: "Secure Document Archive",
                  icon: "/icons/archive.png",
                  description:
                    "Keep important business records securely organised and accessible.",
                },
                {
                  title: "Digital Document Management",
                  icon: "/icons/digital-archive.png",
                  description:
                    "Receive, organise and manage business documents digitally.",
                },
                {
                  title: "Bulk Scanning",
                  icon: "/icons/document-scanning.png",
                  description:
                    "Digitise larger volumes of documents efficiently and securely.",
                },
                {
                  title: "Monthly Reporting",
                  icon: "/icons/monthly-reporting.png",
                  description:
                    "Receive a monthly summary of correspondence, scans and activity.",
                },
                {
                  title: "Priority Support",
                  icon: "/icons/priority-support.png",
                  description:
                    "Receive faster assistance for urgent operational requests.",
                },
                {
                  title: "Dedicated Account Manager",
                  icon: "/icons/professionalism.png",
                  description:
                    "A single professional contact for your company’s SafeBox needs.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={90}
                      height={90}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#C8A86B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-relaxed text-[#D6D6D1]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-8 text-center sm:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
              Flexible SafeBox Sizes
            </p>

            <h2 className="mt-5 text-4xl font-bold">
              Need More Space?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#D6D6D1]">
              Upgrade your SafeBox size anytime as your needs grow.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-block rounded-full bg-[#C8A86B] px-10 py-4 font-bold text-[#081320] transition hover:-translate-y-1 hover:bg-[#D6B979]"
            >
              Ask About SafeBox Sizes
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}