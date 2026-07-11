const audiences = [
  {
    title: "Individuals",
    description:
      "For people who want a secure private space for important correspondence, documents, keys and personal items.",
  },
  {
    title: "Frequent Travellers",
    description:
      "Receive and manage important deliveries while you are away, with secure storage until collection.",
  },
  {
    title: "Businesses",
    description:
      "A professional solution for business correspondence, records, parcels and authorised team access.",
  },
  {
    title: "International Clients",
    description:
      "A reliable local SafeBox solution for property owners, investors and clients who spend time outside Spain.",
  },
];

export default function WhoIsFor() {
  return (
    <section id="who-is-it-for" className="bg-[#0F1F33] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C8A86B]">
          Designed around your needs
        </p>

        <h2 className="mt-5 text-center text-4xl font-bold md:text-5xl">
          Who Is SafeBox For?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[#D6D6D1]">
          SafeBox is designed for individuals, professionals and companies that
          value security, privacy and reliable access.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-3xl border border-[#C8A86B]/20 bg-[#081320] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A86B] hover:shadow-2xl hover:shadow-[#C8A86B]/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8A86B]/40 text-xl font-bold text-[#C8A86B]">
                {audience.title.charAt(0)}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#C8A86B]">
                {audience.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#D6D6D1]">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}