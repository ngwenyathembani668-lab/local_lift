import Image from "next/image";
import Link from "next/link";
import team from "../images/team.jpg";

const services = [
  {
    id: "websites",
    title: "5-Page Converting Websites",
    description:
      "Get more than a collection of pages. We build a complete digital foundation designed to help local customers find your business, understand your offer, and take action.",
    benefits: [
      "SEO-ready architecture built around your services and local search intent.",
      "Fast Next.js performance for a smoother experience across desktop and mobile.",
      "Optimized user flows that guide visitors from discovery to enquiry or booking.",
    ],
    image: "/images/web-designer.jpg",
    imageAlt:
      "Web designer analyzing website layout structures on a monitor",
    linkText: "Learn more about our web builds →",
    linkHref: "/services#websites",
    reverse: false,
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    description:
      "Turn targeted traffic into real business opportunities with focused landing pages built around one offer, one audience, and one clear action.",
    benefits: [
      "Built specifically for paid advertising and targeted local campaigns.",
      "Focused messaging that removes distractions and gets visitors to act.",
      "Conversion-driven forms and call-to-action sections designed to generate leads.",
    ],
    image: "/images/marketing-strategist.jpg",
    imageAlt:
      "Marketing strategist reviewing a successful analytics dashboard",
    linkText: "Explore landing page solutions →",
    linkHref: "/services#landing-pages",
    reverse: true,
  },
];



export default function WebServices() {
  return (
    <section className="bg-slate-900">
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
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-2xl">
                  {/* Main Image */}
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-800">
                    <Image
                      src={team}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    {/* Subtle solid readability layer */}
                    <div
                      className="absolute inset-0 bg-slate-950/10"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Web UI Preview */}
                  {service.id === "websites" && (
                    <div className="absolute bottom-6 left-6 w-[72%] max-w-sm overflow-hidden rounded-xl border border-slate-700 bg-white shadow-2xl sm:bottom-8 sm:left-8">
                      {/* Browser Header */}
                      <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-slate-300" />
                          <span className="h-2 w-2 rounded-full bg-slate-300" />
                          <span className="h-2 w-2 rounded-full bg-slate-300" />
                        </div>

                        <span className="text-[8px] font-medium text-[#677385]">
                          localbusiness.co
                        </span>
                      </div>

                      {/* UI Content */}
                      <div className="p-4">
                        <div className="h-2 w-24 rounded bg-slate-200" />
                        <div className="mt-3 h-3 w-3/4 rounded bg-slate-800" />
                        <div className="mt-2 h-2 w-full rounded bg-slate-200" />
                        <div className="mt-1.5 h-2 w-4/5 rounded bg-slate-200" />

                        <div className="mt-4 flex gap-2">
                          <div className="h-7 w-20 rounded bg-amber-600" />
                          <div className="h-7 w-16 rounded border border-slate-200 bg-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Analytics Preview */}
                  {service.id === "landing-pages" && (
                    <div className="absolute bottom-6 right-6 w-[68%] max-w-sm overflow-hidden rounded-xl border border-slate-700 bg-white p-4 shadow-2xl sm:bottom-8 sm:right-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wider text-[#677385]">
                            Campaign Results
                          </p>

                          <p className="mt-1 text-xl font-extrabold text-slate-950">
                            +38.4%
                          </p>
                        </div>

                        <span className="rounded-md bg-[#b55a00] px-2 py-1 text-[8px] font-bold text-white">
                          Growing
                        </span>
                      </div>

                      <div className="mt-4 flex items-end gap-1.5">
                        {[35, 48, 42, 61, 55, 72, 86].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-sm bg-amber-600"
                              style={{ height: `${height}px` }}
                            />
                          )
                        )}
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
                  {service.id === "websites"
                    ? "Complete Web Presence"
                    : "Campaign Focused"}
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
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600"
                        aria-hidden="true"
                      />

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