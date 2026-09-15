import type { Offer } from "@/content/business";

interface OfferCardProps {
  offer: Offer;
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article
      className="card p-6 border-t-4 flex flex-col gap-3 relative overflow-hidden"
      style={{ borderColor: "#C1502E" }}
      aria-label={`${offer.title} offer`}
    >
      {/* Badge */}
      <div
        className="absolute top-4 right-4 font-heading font-black text-lg text-white px-3 py-1 rounded-lg"
        style={{ backgroundColor: "#C1502E" }}
        aria-label={`Discount: ${offer.badge}`}
      >
        {offer.badge}
      </div>
      <h3 className="font-heading font-bold text-xl text-espresso pr-20">{offer.title}</h3>
      <p className="text-[#6B5E52] text-sm leading-relaxed">{offer.description}</p>
      <p className="text-xs font-semibold" style={{ color: "#6B5E52" }}>
        <span className="font-bold">Eligibility:</span> {offer.eligibility}
      </p>
      <a
        href="/book"
        className="btn-rust mt-2 text-sm justify-center"
      >
        Claim This Offer
      </a>
    </article>
  );
}
