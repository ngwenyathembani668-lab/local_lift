export default function ManagedValue() {
  const managementPoints = [
    {
      title: "Regular Content & Layout Updates",
      description:
        "Need a phone number changed, a new project photo added, or text edited? Just email us. Our design team handles it within 24 hours.",
      tag: "Handled by our design desk",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.5 6.5 3-3a2.121 2.121 0 0 1 3 3l-3 3M12 9l-7.5 7.5a2.121 2.121 0 0 0 0 3l.5.5a2.121 2.121 0 0 0 3 0L15.5 12"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.5 19.5 4 21"
          />
        </svg>
      ),
    },
    {
      title: "Active Local SEO & GMB Care",
      description:
        "Google algorithms shift constantly. We log in monthly to optimize your profile, post updates, and check your map rankings.",
      tag: "Monitored by our SEO team",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 17.5 8 12l4 3 7-8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 7h4v4"
          />
        </svg>
      ),
    },
    {
      title: "AI Maintenance & Optimization",
      description:
        "We review your web assistant's conversations, refine its responses, and update its knowledge base as your business changes.",
      tag: "Tweaked by our AI engineers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            rx="3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            Your Monthly Management
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What does &apos;Fully Managed by Local Lift&apos; actually mean?
          </h2>
        </div>

        {/* Management Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-3 lg:mt-14 lg:gap-12">
          {managementPoints.map((point) => (
            <article key={point.title} className="relative">
              {/* Accent */}
              <div
                className="mb-6 h-1 w-10 rounded-full bg-amber-600"
                aria-hidden="true"
              />

              <h3 className="text-xl font-extrabold tracking-tight text-white">
                {point.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {point.description}
              </p>

              {/* Team Tag */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-300">
                <span className="text-amber-600">{point.icon}</span>
                <span>{point.tag}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Statement */}
        <div className="mx-auto mt-12 max-w-3xl border-t border-slate-800 pt-8 text-center">
          <p className="text-sm leading-6 text-[#667995]">
            Your subscription covers more than hosting. It gives you an
            ongoing technical team that keeps your website, local visibility,
            and automation systems current as your business evolves.
          </p>
        </div>
      </div>
    </section>
  );
}