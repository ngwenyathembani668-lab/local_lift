const deliveryPoints = [
  {
    id: "tech-stack",
    number: "01",
    title: "Built with Next.js & Tailwind",
    description:
      "Your website is built on a modern, performance-focused tech stack designed to load fast and stay reliable without the bloat of slow WordPress plugins.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 8.25-3.5 3.75 3.5 3.75M15.75 8.25l3.5 3.75-3.5 3.75M13.5 5.25l-3 13.5"
        />
      </svg>
    ),
  },
  {
    id: "netlify",
    number: "02",
    title: "Hosted on Netlify",
    description:
      "Your digital systems are deployed on reliable, secure infrastructure with 99.9% uptime and secure Netlify Forms for capturing enquiries without unnecessary complexity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8 10 4 2.25L16 10M12 12.25V17"
        />
      </svg>
    ),
  },
  {
    id: "monitoring",
    number: "03",
    title: "Continuous Monitoring",
    description:
      "You are never left to manage everything alone. Real human support monitors your AI assistants and reviews your GMB activity every month to keep your systems working properly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12h3l2-6 4 12 2-6h7"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19h16"
        />
      </svg>
    ),
  },
];

export default function HowWeDeliver() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            How We Deliver
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Enterprise Tech Stack, Managed Locally.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Powerful technology is only useful when it stays reliable. We
            combine modern infrastructure with ongoing human oversight so your
            digital systems keep working after launch.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {deliveryPoints.map((point) => (
            <article
              key={point.id}
              className="group relative rounded-2xl border border-white bg-slate-950 p-7 transition-colors duration-200 hover:border-amber-600 sm:p-8"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-amber-600">
                  {point.icon}
                </div>

                <span className="text-xs font-bold tracking-[0.2em] text-[#61799b]">
                  {point.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-7 text-xl font-extrabold tracking-tight text-white">
                {point.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {point.description}
              </p>

              {/* Trust Indicator */}
              <div className="mt-7 flex items-center gap-2 border-t border-slate-800 pt-5">
                <span
                  className="h-2 w-2 rounded-full bg-amber-600"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-[#667995]">
                  Managed by Local Lift Digital
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}