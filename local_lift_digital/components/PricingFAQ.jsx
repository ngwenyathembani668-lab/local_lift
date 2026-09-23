"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is there a long-term lock-in contract?",
    answer:
      "No, all plans are month-to-month. You can cancel or change your plan at any time with a 30-day notice.",
  },
  {
    question: "Do I own my website if I cancel?",
    answer:
      "You own all your text content and business data. The custom code framework, hosting environment, and active AI systems are maintained under your active subscription.",
  },
  {
    question: "How long does it take to build my website?",
    answer:
      "Landing pages are usually ready in 7 days, and standard 5-page converting websites roll out within 14 to 21 days from when you submit your materials.",
  },
  {
    question: "Can I change my plan as my business scales up?",
    answer:
      "Absolutely. You can move up or down tiers depending on whether you want to add AI features or scale back your marketing.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Questions About Our Monthly Plans?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Everything you need to know about our subscriptions, ownership,
            timelines, and ongoing management.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`border-b border-slate-800 last:border-b-0 ${
                  isOpen ? "bg-slate-950" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors duration-200 sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-base font-bold transition-colors duration-200 sm:text-lg ${
                      isOpen ? "text-amber-600" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-amber-600 bg-amber-600 text-white"
                        : "border-slate-700 bg-slate-900 text-slate-400"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-6 pr-16 sm:px-7 sm:pb-7">
                      <p className="text-sm leading-7 text-slate-400 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}