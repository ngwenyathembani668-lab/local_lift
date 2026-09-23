import Image from "next/image";
import Link from "next/link";
import team from "../images/team.jpg";

const services = [
  {
    id: "gmb",
    eyebrow: "Local Visibility",
    title: "Google My Business (GMB) Optimization",
    description:
      "Turn your Google Business Profile into a consistent source of local leads. We optimize your profile for stronger map visibility, build review-gathering strategies, and keep your listing updated every month so your business always looks active and trustworthy.",
    benefits: [
      "Strategies designed to improve your visibility in local map results.",
      "Review-gathering systems that make it easier for happy customers to leave feedback.",
      "Monthly profile updates that keep your business information fresh and active.",
    ],
    image: "/images/gmb-specialist.jpg",
    imageAlt:
      "Local Lift Digital team member updating local business listing details on a tablet",
    linkText: "Learn more about GMB optimization →",
    linkHref: "/services#gmb",
    reverse: false,
  },
  {
    id: "ai-automation",
    eyebrow: "Intelligent Automation",
    title: "AI Automation & Assistant Systems",
    description:
      "Build an AI system around the way your business actually operates. We create custom webpage RAG assistants trained on your business data, social media chatbots, and automated follow-up sequences that keep leads moving even when your team is offline.",
    benefits: [
      "Custom webpage RAG systems trained on your services, processes, and business knowledge.",
      "AI-powered social media assistants that can answer common customer questions.",
      "Automated lead follow-up sequences that help turn enquiries into opportunities.",
    ],
    image: "/images/ai-developer.jpg",
    imageAlt:
      "AI developer configuring an automation workflow diagram on a whiteboard",
    linkText: "Explore AI automation →",
    linkHref: "/services#ai-automation",
    reverse: true,
  },
];

export default function GrowthServices() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="space-y-24 lg:space-y-32">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              {/* Visual */}
              <div
                className={`relative ${
                  service.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-3 shadow-2xl">
                  {/* Main Image */}
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-800">
                    <Image
                      src={team}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div
                      className="absolute inset-0 bg-slate-950/10"
                      aria-hidden="true"
                    />
                  </div>

                  {/* GMB 3-Pack Mockup */}
                  {service.id === "gmb" && (
                    <div className="absolute bottom-6 left-6 w-[78%] max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl sm:bottom-8 sm:left-8">
                      {/* Maps Header */}
                      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wider text-[#677385]">
                            Local Search
                          </p>

                          <p className="mt-1 text-xs font-extrabold text-slate-900">
                            Top local results
                          </p>
                        </div>

                        <span className="rounded-md bg-[#b55a00] px-2 py-1 text-[8px] font-bold text-white">
                          Maps
                        </span>
                      </div>

                      {/* Results */}
                      <div className="space-y-2 p-3">
                        {[
                          {
                            rank: "1",
                            name: "Local Business Co.",
                            rating: "4.9",
                          },
                          {
                            rank: "2",
                            name: "City Services",
                            rating: "4.8",
                          },
                          {
                            rank: "3",
                            name: "Your Local Experts",
                            rating: "4.7",
                          },
                        ].map((business) => (
                          <div
                            key={business.rank}
                            className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[8px] font-bold text-white">
                              {business.rank}
                            </span>

                            <div className="min-w-0 flex-1">
                              <p className="truncate text-[9px] font-bold text-slate-900">
                                {business.name}
                              </p>

                              <p className="mt-0.5 text-[8px] text-[#677385]">
                                ★ {business.rating} · Local business
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AI Workflow Mockup */}
                  {service.id === "ai-automation" && (
                    <div className="absolute bottom-6 right-6 w-[76%] max-w-sm rounded-xl border border-slate-700 bg-white p-4 shadow-2xl sm:bottom-8 sm:right-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wider text-[#677385]">
                            AI Workflow
                          </p>

                          <p className="mt-1 text-xs font-extrabold text-slate-900">
                            Lead Automation
                          </p>
                        </div>

                        <span className="flex items-center gap-1.5 text-[8px] font-bold text-[#008256]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#008256]" />
                          Active
                        </span>
                      </div>

                      <div className="mt-4 space-y-2">
                        {/* Trigger */}
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[9px] font-bold text-slate-600">
                            01
                          </div>

                          <div className="flex-1 rounded-md border border-slate-200 px-3 py-2">
                            <p className="text-[8px] font-bold text-slate-800">
                              New enquiry received
                            </p>
                          </div>
                        </div>

                        <div className="ml-3 h-3 w-px bg-slate-200" />

                        {/* AI */}
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#b55a00] text-[9px] font-bold text-white">
                            AI
                          </div>

                          <div className="flex-1 rounded-md border border-amber-600/30 bg-amber-600/5 px-3 py-2">
                            <p className="text-[8px] font-bold text-slate-800">
                              AI qualifies lead
                            </p>
                          </div>
                        </div>

                        <div className="ml-3 h-3 w-px bg-slate-200" />

                        {/* Follow-up */}
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[9px] font-bold text-slate-600">
                            03
                          </div>

                          <div className="flex-1 rounded-md border border-slate-200 px-3 py-2">
                            <p className="text-[8px] font-bold text-slate-800">
                              Automated follow-up
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div
                className={`max-w-xl ${
                  service.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                  {service.eyebrow}
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {service.title}
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="mt-7 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-1 h-5 w-5 shrink-0 text-amber-600"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.884a1 1 0 0 1 .012 1.414l-7.25 7.5a1 1 0 0 1-1.43.012l-3.25-3.25a1 1 0 1 1 1.414-1.414l2.535 2.535 6.543-6.773a1 1 0 0 1 1.426-.024Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.linkHref}
                  className="mt-8 inline-flex items-center text-sm font-bold text-amber-600 transition-colors duration-200 hover:text-amber-500"
                >
                  {service.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}