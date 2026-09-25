import Link from "next/link";
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer";

import CasesReviewsClient from "./CasesReviewsClient";

export const metadata = {
  title: "Proven Local Growth & Client Reviews | Local Lift Digital",
  description:
    "Explore proven local growth results and verified client reviews from Local Lift Digital. See how optimized websites, local SEO, and automated GMB strategies help local businesses grow.",
  keywords: [
    "Local Lift Digital",
    "local business growth",
    "local SEO",
    "Google Business Profile",
    "GMB optimization",
    "Next.js web design",
    "local marketing case studies",
    "client reviews",
  ],
  openGraph: {
    title: "Proven Local Growth & Client Reviews | Local Lift Digital",
    description:
      "See real local growth results and verified client reviews from Local Lift Digital.",
    type: "website",
  },
};

const caseStudies = [
  {
    id: "plumbing-heating",
    industry: "Home Services",
    title: "Plumbing & Heating Services Brand",
    metric: "+140%",
    metricLabel: "GMB Phone Calls in 60 Days",
    description:
      "A local plumbing and heating business needed stronger visibility when nearby customers were actively searching for emergency and scheduled services.",
    results: [
      "Increased Google Business Profile phone enquiries",
      "Improved visibility for high-intent local searches",
      "Stronger local presence across service-related searches",
    ],
  },
  {
    id: "medical-practice",
    industry: "Healthcare",
    title: "Local Medical Practice Clinic",
    metric: "4.2x",
    metricLabel: "Conversion Rate Increase",
    description:
      "A local medical practice needed a faster, clearer website experience that made it easier for prospective patients to understand services and take action.",
    results: [
      "Rebuilt the website experience using Next.js",
      "Improved page structure and conversion paths",
      "Made key contact and enquiry actions easier to find",
    ],
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* =========================================================
          GLOBAL HEADER
      ========================================================== */}

      <Navbar />
      {/* <header className="border-b border-slate-800 bg-slate-950">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8"
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white transition-colors hover:text-amber-600"
          >
            Local Lift Digital
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-600"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-600"
            >
              Services
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-600"
            >
              Blog
            </Link>

            <Link
              href="/cases"
              className="text-sm font-medium text-amber-600"
              aria-current="page"
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b63200]"
            >
              Get Started
            </Link>
          </div>

          <Link
            href="/contact"
            className="rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b63200] md:hidden"
          >
            Get Started
          </Link>
        </nav>
      </header> */}

      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        aria-labelledby="cases-hero-heading"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Case Studies &amp; Client Reviews
            </p>

            <h1
              id="cases-hero-heading"
              className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Real Results. Transparent Proof.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              We help local businesses turn online visibility into measurable
              growth through optimized websites, local search strategies, and
              automated Google Business Profile systems designed around
              real-world customer actions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#case-studies"
                className="inline-flex items-center justify-center rounded-lg bg-[#d73d00] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#b63200]"
              >
                Explore Our Results
              </Link>

              <Link
                href="#reviews"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-amber-600 hover:text-amber-600"
              >
                Read Client Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CASE STUDIES
      ========================================================== */}
      <section
        id="case-studies"
        aria-labelledby="case-studies-heading"
        className="bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Proven Local Growth
            </p>

            <h2
              id="case-studies-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Growth built around measurable outcomes.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              These anonymized examples focus on the business challenge,
              strategy, and measurable local outcome without exposing private
              client identities or addresses.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                      {study.industry}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                      {study.title}
                    </h3>
                  </div>

                  <div
                    aria-hidden="true"
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 sm:flex"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6 text-amber-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3v18h18"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m7 16 4-5 3 3 5-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-5">
                  <p className="text-4xl font-bold tracking-tight text-amber-600">
                    {study.metric}
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {study.metricLabel}
                  </p>
                </div>

                <p className="mt-6 leading-7 text-slate-400">
                  {study.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-slate-800 pt-6">
                  {study.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5 12 4 4L19 6"
                        />
                      </svg>

                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-8 text-xs leading-5 text-[#7085a3]">
                  Client identity and location details have been intentionally
                  omitted for privacy.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEWS / FIREBASE CLIENT SYSTEM
      ========================================================== */}
      <section
        id="reviews"
        aria-labelledby="reviews-heading"
        className="border-t border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Verified Client Reviews
            </p>

            <h2
              id="reviews-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Hear directly from local business owners.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Clients can securely sign in with Google and leave a verified
              review. Reviews are stored in Firestore and displayed publicly
              after submission.
            </p>
          </div>

          <div className="mt-12">
            <CasesReviewsClient />
          </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL FOOTER
      ========================================================== */}
      {/* <footer className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-white hover:text-amber-600"
              >
                Local Lift Digital
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                Digital growth systems for local businesses that want stronger
                visibility, better websites, and more qualified enquiries.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h2>

              <nav className="mt-4 flex flex-col gap-3" aria-label="Footer">
                <Link
                  href="/"
                  className="text-sm text-slate-400 transition-colors hover:text-amber-600"
                >
                  Home
                </Link>

                <Link
                  href="/services"
                  className="text-sm text-slate-400 transition-colors hover:text-amber-600"
                >
                  Services
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-slate-400 transition-colors hover:text-amber-600"
                >
                  Blog
                </Link>

                <Link
                  href="/privacy"
                  className="text-sm text-slate-400 transition-colors hover:text-amber-600"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                Start Growing
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Ready to turn your local online presence into a stronger
                customer acquisition channel?
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-lg bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b63200]"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Local Lift Digital. All rights
              reserved.
            </p>
          </div>
        </div>
      </Footer> */}
      <Footer />
    </main>
  );
}