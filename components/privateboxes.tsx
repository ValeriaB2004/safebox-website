const services = [
  ["Private Box Rental", "Personal numbered boxes with secure access."],
  ["Secure Receiving", "Receive documents and small items safely."],
  ["Document Storage", "Keep originals protected until collection."],
  ["Digital Services", "Optional scanning and digital delivery."],
  ["Business Boxes", "Stable private box solutions for companies."],
  ["Premium Handling", "Priority service for important documents."],
];

export default function PrivateBoxes() {
  return (
    <section id="boxes" className="px-6 py-24 bg-[#0F1F33]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Private Box Solutions
        </h2>

        <p className="mt-6 text-center text-[#D6D6D1] max-w-3xl mx-auto">
          A secure private space for documents, correspondence, small items and
          personal or business essentials.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map(([title, text]) => (
            <div
              key={title}
              className="bg-[#081320] border border-[#C8A86B]/20 rounded-3xl p-8"
            >
              <h3 className="text-[#C8A86B] text-xl font-bold">{title}</h3>
              <p className="mt-4 text-[#D6D6D1]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}