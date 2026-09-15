"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  schemaId?: string;
}

export function FAQAccordion({ faqs, schemaId }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(schemaId ? { "@id": schemaId } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Accordion UI */}
      <div className="space-y-3" role="list" aria-label="Frequently Asked Questions">
        {faqs.map((faq, idx) => (
          <div key={idx} className="card overflow-hidden" role="listitem">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left"
              aria-expanded={open === idx}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span className="font-heading font-bold text-espresso text-sm md:text-base pr-4">
                {faq.question}
              </span>
              <ChevronDownIcon
                size={18}
                className={`flex-shrink-0 text-rust transition-transform duration-200 ${
                  open === idx ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`overflow-hidden transition-all duration-300 ${
                open === idx ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-5 pb-5 text-sm text-[#6B5E52] leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
