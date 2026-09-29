import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import pmd from "../../../../images/pmd-cover.png";

const project = {
  serviceLabel: "Website Design",
  businessName: "Pel Marketing Distribution",
  projectName: "PMD",
  headline: "Turning Local Search Traffic Into More Qualified Enquiries",
  summary:
    "A conversion-focused website redesign built to turn local search traffic into higher-quality enquiries and make contact easier from mobile devices.",
  industry: "Marketing Services",
  service: "Website Design",
  projectType: "Conversion-Focused Website",
  timeline: "6 Weeks",
  technology: ["Next.js", "Tailwind CSS", "Firebase"],
  status: "Live",
  metricValue: "+42%",
  metricLabel: "Conversion Rate",
  heroImage: pmd,
  websiteHref: "https://pmdsit.netlify.app",
  challenge: {
    heading: "The Challenge",
    subheading:
      "The business needed a digital experience that could turn local visibility into measurable enquiries.",
    body: [
      "The previous website was outdated and did not clearly position the business around the services homeowners needed most.",
      "Mobile traffic was coming through, but enquiry forms and contact actions were not reducing friction for users comparing local providers.",
      "The business needed a cleaner, trust-building website that made it easier for prospective clients to contact the team quickly.",
    ],
  },
  strategy: [
    {
      title: "UX Restructuring",
      description:
        "Rebuilt the site around the customer journey for local homeowners searching for urgent and scheduled services.",
    },
    {
      title: "Conversion-Focused Architecture",
      description:
        "Created clearer service positioning and stronger calls-to-action around the most valuable lead paths.",
    },
    {
      title: "Mobile-First Experience",
      description:
        "Optimized the experience for mobile users who were browsing while deciding which local provider to contact.",
    },
    {
      title: "Local SEO Alignment",
      description:
        "Structured the website to better reflect the actual services, locations, and customer intent behind local searches.",
    },
  ],
  solution: {
    heading: "The Solution",
    body:
      "We redesigned the experience around clear service messaging, stronger trust signals, and a simpler route from visit to enquiry.",
    highlights: [
      "Homepage built around service clarity and customer urgency",
      "Service pages structured for local search intent and conversion",
      "Contact flow simplified to reduce friction before enquiry",
    ],
  },
  features: [
    {
      title: "Mobile-First Experience",
      description:
        "A responsive interface designed to make key services and enquiry actions easy to access from mobile devices.",
    },
    {
      title: "Conversion-Focused CTAs",
      description:
        "Strategically placed calls-to-action designed to reduce friction between discovery and enquiry.",
    },
    {
      title: "Trust & Proof",
      description:
        "Service credibility and local reassurance were built into the page structure to help visitors feel confident in contacting the business.",
    },
    {
      title: "Local Service Clarity",
      description:
        "Service pages were rewritten to make each offer feel obvious, relevant, and easy to understand from the first glance.",
    },
  ],
  results: [
    { value: "+42%", label: "Conversion Rate" },
    { value: "+68%", label: "Qualified Enquiries" },
    { value: "2.4x", label: "Lead Engagement" },
  ],
  beforeAfter: {
    beforeTitle: "Previous Website",
    afterTitle: "New Website Experience",
    beforeSummary:
      "Outdated structure, weak conversion flow, and limited mobile clarity.",
    afterSummary:
      "A more direct, trust-building website built to help local homeowners contact the business faster.",
    beforeImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    afterImage:
      pmd,
  },
  testimonial: {
    quote:
      "The new website made it far easier for customers to understand our services and contact us without friction.",
    name: "Operations Manager",
    business: "Pel Marketing Distribution",
  },
  finalSummary:
    "By restructuring the site around local intent and conversion clarity, the business created a stronger digital experience that made it easier to turn visits into enquiries.",
};

export default function PMDCaseStudyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                {project.serviceLabel}
              </p>

              <p className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                {project.businessName}
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {project.headline}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5">
                  {project.industry}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5">
                  {project.service}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5">
                  {project.projectType}
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                <p className="text-4xl font-black tracking-tight text-amber-600 sm:text-5xl">
                  {project.metricValue}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {project.metricLabel}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.websiteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#d13d00] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#b63200]"
                >
                  View Live Website
                </a>

                <Link
                  href="/cases"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-amber-600 hover:text-amber-600"
                >
                  Back to Case Studies
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-3">
              <div className="relative aspect-16/11 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <Image
                  src={project.heroImage}
                  alt={`${project.businessName} case study preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
            {[
              { label: "Business", value: project.businessName },
              { label: "Industry", value: project.industry },
              { label: "Service", value: project.service },
              { label: "Project Type", value: project.projectType },
              { label: "Timeline", value: project.timeline },
              { label: "Technology", value: project.technology.join(", ") },
              { label: "Status", value: project.status },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            {project.challenge.heading}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {project.challenge.subheading}
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-400">
            {project.challenge.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              The Strategy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A structured approach designed around the business need.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {project.strategy.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-sm font-bold text-amber-600">
                  {item.title.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                {project.solution.heading}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A clearer website built to convert local interest into action.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                {project.solution.body}
              </p>

              <ul className="mt-8 space-y-4">
                {project.solution.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-600/15 text-amber-400">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-3">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <Image
                  src={project.heroImage}
                  alt={`${project.businessName} design solution preview`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Key Features
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Built to make the next step feel easy.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {project.results.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center"
              >
                <p className="text-4xl font-black tracking-tight text-amber-600">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {project.beforeAfter.beforeTitle}
              </p>
              <p className="mt-4 text-lg text-slate-400">
                {project.beforeAfter.beforeSummary}
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
                <Image
                  src={project.beforeAfter.beforeImage}
                  alt="Previous website preview"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {project.beforeAfter.afterTitle}
              </p>
              <p className="mt-4 text-lg text-slate-400">
                {project.beforeAfter.afterSummary}
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
                <Image
                  src={project.beforeAfter.afterImage}
                  alt="New website preview"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <blockquote className="border-l-2 border-amber-600 pl-6 text-xl leading-8 text-slate-200 sm:text-2xl">
            “{project.testimonial.quote}”
          </blockquote>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-slate-400">
            {project.testimonial.name} · {project.testimonial.business}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Final Outcome
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A stronger digital presence built to turn local interest into enquiries.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            {project.finalSummary}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={project.websiteHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#d13d00] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#b63200]"
            >
              View Live Website
            </a>
            <Link
              href="/cases"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-amber-600 hover:text-amber-600"
            >
              Back to Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
