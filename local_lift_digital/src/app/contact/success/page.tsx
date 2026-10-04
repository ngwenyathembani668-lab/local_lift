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
        className="w-full max-w-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-10"
      >
        <div
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-600 bg-slate-950 text-amber-600"
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

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
          Request received
        </p>

        <h1
          id="success-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Your Growth Audit is Initiated.
        </h1>

        <p className="mt-5 text-base leading-7 text-slate-300">
          Thank you for reaching out to Local Lift Digital. Our strategy team
          has received your operational details and we are running your local
          maps and design diagnostic right now. Check your inbox for your
          confirmation receipt.
        </p>

        <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-6">
          <div className="relative h-12 w-12 shrink-0">
            <div
              role="img"
              aria-label="Sarah, lead coordinator"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-sm font-semibold text-white"
            >
              S
            </div>
            <span
              aria-label="Online"
              className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-900 bg-green-500"
            />
          </div>

          <p className="text-sm font-medium leading-6 text-white">
            Sarah has queued your site for manual analysis.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Return to Homepage
        </Link>
      </section>
    </main>
  );
}
