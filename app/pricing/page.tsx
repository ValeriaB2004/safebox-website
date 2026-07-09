export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#081320] text-[#F4F4F2] px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold text-center">
          SafeBox Memberships
        </h1>

        <p className="text-center text-[#C8A86B] mt-6 tracking-[0.3em] uppercase">
          Choose the plan that fits your needs
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-4">
        {[
            {
            name: "Essential",
            price: "€24.99",
            description:
                "Perfect for individuals who need a secure location to receive and store important correspondence.",
            features: [
                "Personal SafeBox",
                "Secure receipt of correspondence",
                "Secure storage of documents",
                "Arrival notifications",
                "Collection during business hours",
            ],
            },
            {
            name: "Select",
            price: "€49.99",
            description:
                "Ideal for professionals, frequent travellers and remote workers.",
            features: [
                "Everything in Essential",
                "Receipt of small parcels",
                "Priority notifications",
                "Extended storage period",
                "Parcel collection service",
                "Up to 5 complimentary document scans per month",
            ],
            },
            {
            name: "Signature",
            price: "€89.99",
            popular: true,
            description:
                "Designed for clients who require complete document management.",
            features: [
                "Everything in Select",
                "Unlimited arrival notifications",
                "Up to 25 document scans per month",
                "Priority document handling",
                "Secure digital document delivery",
                "Extended document archive",
                "Priority customer support",
            ],
            },
            {
            name: "Executive",
            price: "€149.99",
            description:
                "A complete correspondence management solution for companies.",
            features: [
                "Business SafeBox",
                "Multiple authorised users",
                "Receipt of business correspondence",
                "Receipt of small parcels",
                "Unlimited notifications",
                "Unlimited document scanning",
                "Digital document archive",
                "Priority handling",
                "Secure document forwarding",
                "Monthly activity summary",
                "Dedicated business support",
            ],
            },
        ].map((plan) => (
            <div
            key={plan.name}
            className={`relative rounded-3xl p-8 border bg-[#0F1F33] ${
                plan.popular
                ? "border-[#C8A86B] shadow-2xl shadow-[#C8A86B]/10"
                : "border-[#C8A86B]/20"
            }`}
            >
            {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8A86B] text-[#081320] px-5 py-2 rounded-full text-xs font-bold tracking-widest">
                MOST POPULAR
                </div>
            )}

            <h2 className="text-3xl font-bold text-[#C8A86B]">{plan.name}</h2>

            <p className="mt-4 text-4xl font-bold">{plan.price}</p>
            <p className="text-[#D6D6D1]">/ month</p>

            <p className="mt-6 text-[#D6D6D1] min-h-[96px]">
                {plan.description}
            </p>

            <a
                href="/#contact"
                className="mt-8 inline-block w-full text-center bg-[#C8A86B] text-[#081320] px-6 py-3 rounded-full font-bold"
            >
                Choose {plan.name}
            </a>

            <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[#F4F4F2]">
                    <span className="text-[#C8A86B]">✓</span>
                    <span>{feature}</span>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>

        <section className="mt-24">
        <h2 className="text-4xl font-bold text-center">Additional Services</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
            ["Document Scanning", "€3.00 per envelope"],
            ["Express Scanning", "Within 1 hour — €10.00"],
            ["Secure Document Forwarding", "From €12.00 + shipping costs"],
            ["International Forwarding", "Price on request"],
            ["Long-Term Secure Storage", "From €10.00/month"],
            ["Additional Authorised User", "€10.00/month"],
            ["Additional SafeBox", "€20.00/month"],
            ["Oversized Parcel Handling", "From €5.00"],
            ["Express Parcel Collection", "€15.00"],
            ["Digital Document Archive", "From €5.00/month"],
            ].map(([service, price]) => (
            <div
                key={service}
                className="rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6"
            >
                <h3 className="text-[#C8A86B] font-bold">{service}</h3>
                <p className="mt-2 text-[#D6D6D1]">{price}</p>
            </div>
            ))}
        </div>
        </section>

        <section className="mt-24">
        <h2 className="text-4xl font-bold text-center">Business Add-Ons</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
            "Multiple collection authorisations",
            "Team access management",
            "Secure document archive",
            "Digital document management",
            "Bulk scanning",
            "Monthly reporting",
            "Priority support",
            "Dedicated account manager",
            ].map((item) => (
            <div
                key={item}
                className="rounded-2xl border border-[#C8A86B]/20 bg-[#0F1F33] p-6 text-center"
            >
                <span className="text-[#C8A86B] text-2xl">◆</span>
                <p className="mt-3">{item}</p>
            </div>
            ))}
        </div>
        </section>

        <section className="mt-24 rounded-3xl border border-[#C8A86B]/20 bg-[#0F1F33] p-10 text-center">
        <h2 className="text-4xl font-bold">Need help choosing?</h2>

        <p className="mt-4 text-[#D6D6D1]">
            Book a consultation and we will help you choose the right SafeBox membership.
        </p>

        <a
            href="/#contact"
            className="mt-8 inline-block bg-[#C8A86B] text-[#081320] px-10 py-4 rounded-full font-bold"
        >
            Book a Consultation
        </a>
        </section>
      </div>
    </main>
  );
}