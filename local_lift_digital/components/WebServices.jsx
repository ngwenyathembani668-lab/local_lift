import Image from "next/image";
import Link from "next/link";
// import team from "../images/team.jpg";
import webpage from "../images/Apex Flow Plumbing Hero Mockup.png";
import convert from "../images/converting-site.png";
// import gmb from "../images/Gmb.png";
import dashBoard from "../images/Local Lift Digital Dashboard.png";

const services = [
  {
    id: "websites",
    title: "5-8 Page Converting Websites",
    description:
      "Get more than a collection of pages. We build a complete digital foundation designed to help local customers find your business, understand your offer, and take action.",
    benefits: [
      "SEO-ready architecture built around your services and local search intent.",
      "Fast Next.js performance for a smoother experience across desktop and mobile.",
      "Optimized user flows that guide visitors from discovery to enquiry or booking.",
    ],
    image: webpage,
    imageAlt:
      "Web designer analyzing website layout structures on a monitor",
    label: "Complete Web Presence",
    linkText: "Learn more about our web builds →",
    linkHref: "/cases#case-studies",
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
    image: convert,
    imageAlt:
      "Marketing strategist reviewing a successful analytics dashboard",
    label: "Campaign Focused",
    linkText: "Explore landing page solutions →",
    linkHref: "/cases#case-studies",
    reverse: true,
  },

  {
    id: "web-apps",
    title: "Custom Business Applications & Admin Dashboards",
    description:
      "Replace spreadsheets and disconnected tools with custom business software built around the way your company operates. From internal admin dashboards and client portals to booking systems, CRM platforms, inventory tools, and operations software, we build scalable applications that centralize your data and streamline your team's workflow.",
    benefits: [
      "Custom internal dashboards that give your team one central place to manage business operations.",
      "Client portals and business applications built around your specific workflows and requirements.",
      "Scalable Next.js applications designed to integrate your data, automate processes, and grow with your business.",
    ],
    image: dashBoard,
    imageAlt:
      "Business admin dashboard displaying company operations and performance data",
    label: "Custom Business Software",
    linkText: "Explore custom application solutions →",
    linkHref: "/cases#case-studies",
    reverse: false,
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
              className="grid items-center gap-12 scroll-mt-24 lg:grid-cols-2 lg:gap-16"
            >
              {/* Visual */}
              <div
                className={`relative ${
                  service.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-2xl">
                  {/* Main Image */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-800">
                    <Image
                      src={
                        service.image
                          ? service.image
                          : team
                      }
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    {/* Subtle readability layer */}
                    <div
                      className="absolute inset-0 bg-slate-950/10"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Website UI Preview */}
                   

                  {/* Landing Page Analytics Preview */}

                  {/* Admin Dashboard Preview */}
                  
                </div>
              </div>

              {/* Content */}
              <div
                className={`max-w-xl ${
                  service.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Service Label */}
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                  {service.label}
                </span>

                {/* Title */}
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {service.title}
                </h2>

                {/* Description */}
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