import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { caseStudies, caseStudyBySlug } from "../caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = caseStudyBySlug[slug];

  if (!study) {
    notFound();
  }

  const hasWebsite = Boolean(study.websiteHref);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                {study.serviceLabel}
              </p>

              <p className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                {study.businessName}
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {study.headline}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                {study.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5">
                  {study.industry}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5">
                  {study.service}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5">
                  {study.projectType}
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                <p className="text-4xl font-black tracking-tight text-amber-600 sm:text-5xl">
                  {study.metricValue}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {study.metricLabel}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {hasWebsite ? (
                  <a
                    href={study.websiteHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#d13d00] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#b63200]"
                  >
                    View Live Website
                  </a>
                ) : null}

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
                {/* Change the project image by updating study.heroImage in src/app/cases/caseStudies.js */}
                <Image
                  src={study.heroImage}
                  alt={`${study.businessName} case study preview`}
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
              { label: "Business", value: study.businessName },
              { label: "Industry", value: study.industry },
              { label: "Service", value: study.service },
              { label: "Project Type", value: study.projectType },
              { label: "Timeline", value: study.timeline },
              { label: "Technology", value: study.technology.join(", ") },
              { label: "Status", value: study.status },
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
            The Challenge
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {study.challenge.subheading}
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-400">
            {study.challenge.body.map((paragraph) => (
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
            {study.strategy.map((item) => (
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                The Solution
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {study.solution.heading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                {study.solution.body}
              </p>

              <ul className="mt-8 space-y-4">
                {study.solution.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-3">
              <div className="relative aspect-16/11 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                {/* Change this project’s solution image in the same case data object: study.solution.solutionImage */}
                <Image
                  src={study.solution.solutionImage}
                  alt={`${study.businessName} solution preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The elements that mattered most to the client outcome.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {study.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-sm font-bold text-amber-600">
                  {feature.title.charAt(0)}
                </div>
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
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Results & Impact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Measurable business impact and clear operational value.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {study.results.map((result) => (
              <div
                key={result.label}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center"
              >
                <p className="text-4xl font-black tracking-tight text-amber-600 sm:text-5xl">
                  {result.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {study.beforeAfter ? (
        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Before & After
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A visible transformation in the digital experience.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-3">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Before
                  </span>
                  <span className="text-sm text-slate-500">{study.beforeAfter.beforeTitle}</span>
                </div>
                <div className="relative aspect-16/11 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                  {/* Change the before image by editing study.beforeAfter.beforeImage in the project data */}
                  <Image
                    src={study.beforeAfter.beforeImage}
                    alt={`${study.businessName} before-state preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {study.beforeAfter.beforeSummary}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-3">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    After
                  </span>
                  <span className="text-sm text-slate-500">{study.beforeAfter.afterTitle}</span>
                </div>
                <div className="relative aspect-16/11 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                  {/* Change the after image by editing study.beforeAfter.afterImage in the project data */}
                  <Image
                    src={study.beforeAfter.afterImage}
                    alt={`${study.businessName} after-state preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {study.beforeAfter.afterSummary}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Technology / Build
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built with the right tools for the project goals.
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {study.technology.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Project Gallery
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A closer look at the final experience.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {study.gallery.map((image, index) => (
              <div
                key={image.src}
                className={`overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-3 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-16/11 overflow-hidden rounded-xl bg-slate-900">
                  {/* Each gallery item is controlled individually by its own image src in the case data object */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {study.testimonial ? (
        <section className="bg-slate-950">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Client Feedback
              </p>
              <blockquote className="mt-6 text-2xl font-medium leading-9 text-white sm:text-3xl">
                “{study.testimonial.quote}”
              </blockquote>
              <div className="mt-8 border-t border-slate-800 pt-6">
                <p className="font-semibold text-white">{study.testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{study.testimonial.business}</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Summary
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The original challenge, the final build, and the result.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">{study.finalSummary}</p>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {study.cta.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">{study.cta.subheading}</p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#d13d00] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#b63200]"
              >
                {study.cta.primaryLabel}
              </Link>

              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-amber-600 hover:text-amber-600"
              >
                {study.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
