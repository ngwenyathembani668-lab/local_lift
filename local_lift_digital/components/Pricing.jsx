const pricingPlans = [
  {
    name: "Starter Plan",
    description: "A strong starting point for businesses ready to establish their online presence.",
    price: "R1,499",
    features: [
      "Professional landing page",
      "Mobile responsive design",
      "Fast-loading page structure",
      "Lead generation focused layout",
      "GMB basic setup",
      "Monthly website maintenance",
    ],
    popular: false,
  },
  {
    name: "Growth Plan",
    description: "Everything you need to build credibility, attract local customers, and generate more leads.",
    price: "R2,999",
    features: [
      "Everything in Starter",
      "5-page custom website",
      "SEO-optimized page structure",
      "Responsive custom design",
      "Full Google My Business optimization",
      "Local SEO foundations",
      "Review strategy guidance",
      "Monthly website maintenance",
    ],
    popular: true,
  },
  {
    name: "AI Elite Automation",
    description: "Turn your website and social channels into a 24/7 automated customer support system.",
    price: "R4,999",
    features: [
      "Everything in Growth",
      "Webpage AI assistant",
      "RAG-powered knowledge system",
      "Social media chatbots",
      "24/7 automated customer responses",
      "Lead qualification automation",
      "AI conversation workflows",
      "Ongoing AI optimization",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Simple Pricing
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Choose the Plan That Fits{" "}
            <span className="text-orange-600">Your Growth</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            No complicated packages or unexpected surprises. Choose a monthly
            plan that gives your business the digital tools it needs to grow.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-orange-600 shadow-lg shadow-orange-600/10"
                  : "border border-slate-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex whitespace-nowrap rounded-full bg-orange-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-18 text-sm leading-6 text-slate-600">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-7 border-b border-slate-200 pb-7">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-950">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-sm font-medium text-slate-500">
                    /month
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Monthly recurring subscription
                </p>
              </div>

              {/* Features */}
              <ul className="mt-7 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5 text-orange-600"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.884a1 1 0 0 1 .012 1.414l-7.25 7.5a1 1 0 0 1-1.43.012l-3.25-3.25a1 1 0 0 1 1.414-1.414l2.535 2.535 6.543-6.773a1 1 0 0 1 1.426-.024Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className={`flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                    plan.popular
                      ? "bg-orange-600 text-white hover:bg-orange-500"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-center text-sm text-slate-500">
          Need something more customized?{" "}
          <a
            href="/contact"
            className="font-semibold text-orange-600 hover:text-orange-700"
          >
            Talk to us about a custom plan.
          </a>
        </p>
      </div>
    </section>
  );
}