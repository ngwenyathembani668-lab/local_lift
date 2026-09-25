const pricingTiers = [
  {
    name: "Local Lift Starter",
    target: "New or small businesses",
    price: "R1,499",
    popular: false,
    description:
      "A focused digital foundation designed to help smaller businesses start generating consistent local enquiries.",
    features: [
      "Single high-converting landing page",
      "Basic GMB Optimization setup",
      "Netlify contact forms",
    ],
    cta: "Get Started",
  },
  {
    name: "Digital Growth Pack",
    target: "Growing local service brands",
    price: "R2,999",
    popular: true,
    description:
      "A complete local growth system for businesses ready to build authority, capture more leads, and stay visible.",
    features: [
      "Complete 5-Page Converting Website",
      "Continuous GMB Optimization with monthly updates",
      "Premium lead capture systems",
    ],
    cta: "Choose Growth Pack",
  },
  {
    name: "AI Elite Automation",
    target: "Established businesses looking to scale operations",
    price: "R4,999",
    popular: false,
    description:
      "Advanced automation for established businesses that want to reduce manual work and respond to leads around the clock.",
    features: [
      "Everything in the Growth Pack",
      "Custom Webpage AI Assistant (RAG system trained on business data)",
      "24/7 Social Media Lead Chatbots",
    ],
    cta: "Explore AI Elite",
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-amber-600"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.884a1 1 0 0 1 .012 1.414l-7.25 7.5a1 1 0 0 1-1.43.012l-3.25-3.25a1 1 0 1 1 1.414-1.414l2.535 2.535 6.543-6.773a1 1 0 0 1 1.426-.024Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PricingPlans() {
  return (
    <section id="pricing" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            Monthly Plans
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Choose the Growth System That Fits Your Business.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Start with what you need today and scale your digital infrastructure
            as your business grows.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border bg-slate-900 p-6 sm:p-8 ${
                tier.popular
                  ? "border-[#d73d00] ring-1 ring-amber-600"
                  : "border-slate-800"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex whitespace-nowrap rounded-full bg-[#d73d00] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Information */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">
                  {tier.target}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                  {tier.name}
                </h3>

                <p className="mt-4 min-h-18 text-sm leading-6 text-slate-400">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8 border-y border-slate-800 py-7">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                    {tier.price}
                  </span>

                  <span className="mb-2 text-sm font-semibold text-[#7085a3]">
                    / month
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 pt-7">
                <p className="text-sm font-bold text-white">
                  What&apos;s included:
                </p>

                <ul className="mt-5 space-y-4">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className={`flex w-full items-center justify-center rounded-lg px-5 py-3.5 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    tier.popular
                      ? "bg-[#d73d00] text-white hover:bg-amber-500 hover:shadow-lg"
                      : "border border-white bg-transparent text-white hover:bg-white hover:text-slate-950"
                  }`}
                >
                  {tier.cta}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing Note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-[#61799b]">
          All plans are managed by the Local Lift Digital team. Final scope and
          pricing can be adjusted based on your business requirements.
        </p>
      </div>
    </section>
  );
}