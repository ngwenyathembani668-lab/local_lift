import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Received | Local Lift Digital",
  description:
    "Your growth audit request has been received by Local Lift Digital.",
};

export default function ContactSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-white sm:px-6">
      <section
        aria-labelledby="success-heading"
        className="w-full max-w-3xl border border-slate-800 bg-slate-900 p-6 sm:p-10"
      >
        <div
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d13d00] bg-slate-950 text-[#d13d00]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#d13d00]">
          Request received
        </p>

        <h1
          id="success-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Your Growth Audit is Initiated.
        </h1>

        <p className="mt-5 text-base leading-7 text-slate-300">
          Thank you for reaching out to Local Lift Digital. Your request is in,
          and our team will work through the next steps below before following
          up using the contact details you provided.
        </p>

        <ol
          aria-label="What happens next"
          className="mt-8 space-y-4"
        >
          <li className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d13d00] text-sm font-bold text-white"
              >
                1
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d13d00]">
                  Immediate
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  Secure Data Pipeline Setup
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Your business details are submitted to our Firestore database.
                  Access to that data is governed by our database security
                  rules.
                </p>
              </div>
            </div>
          </li>

          <li className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d13d00] text-sm font-bold text-white"
              >
                2
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d13d00]">
                  Within 2 Hours
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  Manual Visibility Diagnostics
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Thembani manually evaluates your Google Maps 3-pack profile
                  tracking, runs core web performance speed audits, and records
                  a 5-minute screencast report highlighting hidden optimization
                  opportunities.
                </p>
              </div>
            </div>
          </li>

          <li className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d13d00] text-sm font-bold text-white"
              >
                3
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d13d00]">
                  Delivery Window
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  Strategic Report Handoff
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  We&apos;ll send the direct video report link to your text
                  message or email inbox, along with an actionable roadmap
                  checklist.
                </p>
              </div>
            </div>
          </li>
        </ol>

        <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-6">
          <div className="relative h-12 w-12 shrink-0">
            <div
              role="img"
              aria-label="Thembani, lead coordinator"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-sm font-semibold text-white"
            >
              TN
            </div>
            <span
              aria-label="Online"
              className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-900 bg-green-500"
            />
          </div>

          <p className="text-sm font-medium leading-6 text-white">
            Thembani has queued your site for manual analysis.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center bg-[#d13d00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b63200] focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Return to Homepage
        </Link>
      </section>
    </main>
  );
}
