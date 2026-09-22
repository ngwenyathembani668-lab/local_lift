const services = [
  {
    title: "High-Converting Landing Pages",
    focus: "Fast lead capture",
    description:
      "Turn visitors into leads with focused landing pages built around clear messaging, strong calls to action, and friction-free user journeys. Every section is designed to help potential customers take the next step quickly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h6M7 16h3"
        />
      </svg>
    ),
  },
  {
    title: "Complete 5-Page Websites",
    focus: "SEO optimized, custom responsive design",
    description:
      "Build a professional online presence with a custom website that looks polished across phones, tablets, and desktops. SEO-focused structure helps search engines understand your business while giving customers a clear path to contact you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5.25A2.25 2.25 0 0 1 6.25 3h11.5A2.25 2.25 0 0 1 20 5.25v13.5A2.25 2.25 0 0 1 17.75 21H6.25A2.25 2.25 0 0 1 4 18.75V5.25Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8h16M8 5.5h.01M11 5.5h.01"
        />
      </svg>
    ),
  },
  {
    title: "Google My Business Optimization",
    focus: "Continuous ranking & local review management",
    description:
      "Strengthen your local presence so nearby customers can find and trust your business when they search on Google. We continuously improve your profile and support review management to build stronger local visibility.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21M12 3c-2.2 2.4-3.4 5.4-3.4 9S9.8 18.6 12 21M3.4 9h17.2M3.4 15h17.2"
        />
      </svg>
    ),
  },
  {
    title: "Custom AI Automation & Chatbots",
    focus: "RAG systems, webpage assistants, 24/7 client care",
    description:
      "Give your business an intelligent digital assistant that can answer questions, retrieve information, and support customers around the clock. Custom RAG systems and webpage assistants automate repetitive conversations while helping your team focus on higher-value work.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.75h4.5A2.25 2.25 0 0 1 16.5 6v1.5h1.5a2.25 2.25 0 0 1 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25H15l-3 3-3-3H6a2.25 2.25 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 6 7.5h1.5V6a2.25 2.25 0 0 1 2.25-2.25Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 11.25h.01M12 11.25h.01M15.75 11.25h.01"
        />
      </svg>
    ),
  },
];

export default function CoreOfferings() {
  return (
    <section className="bg-page px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-page">
            Core Offerings
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Everything Your Business Needs to{" "}
            <span className="text-accent">Dominate Online.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            From your first website visitor to your next qualified lead, we
            build the digital systems that help local businesses compete,
            convert, and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-xl border border-soft bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-soft bg-page text-accent transition-colors duration-300 group-hover:border-accent/40">
                {service.icon}
              </div>

              {/* Content */}
              <div className="mt-7">
                <h3 className="text-xl font-bold leading-tight text-primary">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm font-semibold text-accent">
                  {service.focus}
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>

              {/* AI Human Highlight */}
              {service.title === "Custom AI Automation & Chatbots" && (
                <div className="mt-auto pt-6">
                  <div className="rounded-lg border border-soft bg-page px-3.5 py-3 text-xs font-medium leading-5 text-muted">
                    💡 Implemented &amp; monitored live by our tech team.
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}