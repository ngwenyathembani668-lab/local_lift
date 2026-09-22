const services = [
  {
    id: 1,
    title: "Landing Pages",
    description:
      "Get a fast-loading landing page designed to turn visitors into qualified leads. Every section is built around clear messaging, strong calls to action, and conversion-focused UX.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "5-Page Converting Websites",
    description:
      "Build a professional online presence with a custom, responsive website optimized for search engines. Your site is structured to make it easy for potential customers to discover your business and take action.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.5a2.25 2.25 0 0 0 2.25 2.25h1.5A2.25 2.25 0 0 0 15 18.75v-1.5m-6 0h6m-9-12h12A2.25 2.25 0 0 1 20.25 7.5v8.25A2.25 2.25 0 0 1 18 18H6a2.25 2.25 0 0 1-2.25-2.25V7.5A2.25 2.25 0 0 1 6 5.25Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Google My Business Optimization",
    description:
      "Improve your local visibility and make it easier for nearby customers to find your business on Google. We'll help optimize your profile and build practical review strategies that support local discovery.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "AI Automation & Assistants",
    description:
      "Give your business 24/7 digital support with RAG systems, webpage assistants, and automated social media chatbots. Let AI handle repetitive questions and conversations while your team focuses on higher-value work.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.75h4.5m-6.75 3h9a2.25 2.25 0 0 1 2.25 2.25v6a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25V9a2.25 2.25 0 0 1 2.25-2.25Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v3m6-3v3M7.5 20.25h9M8.25 12h.008v.008H8.25V12Zm3.75 0h.008v.008H12V12Zm3.75 0h.008v.008H15.75V12Z"
        />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-orange-600">Grow Online</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            From high-converting websites to AI-powered automation, we help
            local businesses attract more customers and turn online attention
            into real opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-600/50 hover:bg-slate-900"
            >
              {/* Icon */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-600/20 bg-orange-600/10 text-orange-600 transition-all duration-300 group-hover:border-orange-600/40 group-hover:bg-orange-600/15">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-7 h-px w-10 bg-orange-600/50 transition-all duration-300 group-hover:w-16 group-hover:bg-orange-600" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}