export default function PricingHero() {
  const trustHighlights = [
    {
      title: "Cancel or Change Plans Anytime",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12a9 9 0 1 0 3-6.7"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4.5V9h4.5"
          />
        </svg>
      ),
    },
    {
      title: "100% Managed by Real Humans",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
          />
          <circle cx="9.5" cy="7" r="4" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 8v6M22 11h-6"
          />
        </svg>
      ),
    },
    {
      title: "No Hidden Setup Fees",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-24 lg:px-8 lg:py-28">
        {/* Eyebrow */}
        <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Simple Monthly Pricing
        </span>

        {/* Headline */}
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Predictable Monthly Plans.
          <span className="block text-[#d73d00]">
            No Massive Upfront Costs.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          Get a high-converting website, dominant local SEO, and custom AI
          automation assistants fully managed by our team for a flat monthly
          subscription. Switch or pause whenever your business needs change.
        </p>

        {/* Trust Highlights */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-5">
          {trustHighlights.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-4 text-left"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#d73d00] text-white"
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <span className="text-sm font-bold leading-5 text-slate-200">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}