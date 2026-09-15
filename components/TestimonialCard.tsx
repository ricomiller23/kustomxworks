import type { Testimonial } from "@/content/business";
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="card p-6 flex flex-col gap-4"
      aria-label={`Review by ${testimonial.name}`}
    >
      <div className="stars flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} size={16} fill="currentColor" className="text-amber-400" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="text-[#6B5E52] text-sm leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer>
        <cite className="not-italic">
          <p className="font-heading font-bold text-espresso text-sm">{testimonial.name}</p>
          <p className="text-xs text-[#6B5E52]">{testimonial.city}</p>
        </cite>
      </footer>
    </article>
  );
}
