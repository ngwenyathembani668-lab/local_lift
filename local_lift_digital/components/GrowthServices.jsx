import Image from "next/image";
import Link from "next/link";
import auto from "../images/BrightSmile Dental AI Chat Mockup.png";

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
    linkText: "Learn more about GMB optimization →",
    linkHref: "/cases#case-studies",
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
    image: auto,
    imageAlt:
      "AI developer configuring an automation workflow diagram on a whiteboard",
    linkText: "Explore AI automation →",
    linkHref: "/cases#case-studies",
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
                  {/* Main Video or Image */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-800">
                    {service.id === "gmb" ? (
                      <video
                        src="/videos/gmb-ranking.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    )}

                    <div
                      className="absolute inset-0 bg-slate-950/10"
                      aria-hidden="true"
                    />
                  </div>

                  {/* GMB 3-Pack Mockup */}
                  

                  {/* AI Workflow Mockup */}
                  
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