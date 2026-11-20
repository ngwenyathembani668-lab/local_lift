import Link from "next/link";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Privacy Policy | Local Lift Digital",
  description:
    "Read the Local Lift Digital privacy policy and learn how we protect your data, use cookies, and handle review submissions.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <article className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Privacy &amp; Data Protection
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy and Cookie Policy
            </h1>

            <p className="text-sm text-slate-400">Effective Date: November 2026</p>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Local Lift Digital complies with South Africa&apos;s Protection of
              Personal Information Act (POPIA, Act 4 of 2013). This policy
              explains how we handle personal information when you use our
              website or services.
            </p>
          </header>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              1. Introduction, Responsible Party &amp; Data Collection
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Local Lift Digital is the responsible party for personal
                information described in this policy. We are based in Germiston,
                Gauteng, South Africa, and are led by Thembani.
              </p>

              <p>
                Our Homepage, Services, and Contact audit and strategy forms
                collect your full name, business name, business type, email
                address, phone or WhatsApp number, website URL, and project
                goals.
              </p>

              <p>
                The Blog Newsletter Form collects your email address to send
                local SEO and AI automation insights. Verified Client Reviews
                collect your name, profile photo, and Google account identifier
                through Google OAuth when you submit a verified review.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              2. Cookies &amp; Website Analytics
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                We use Google Analytics 4 (GA4) to collect anonymized site
                traffic data and understand how visitors use our website.
              </p>

              <p>
                This analytics information helps us review traffic and page
                performance; it is not used to identify you personally.
              </p>

              <p>
                You may control or disable cookies through your browser
                settings. Disabling certain cookies may affect website
                functionality.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              3. Data Security &amp; Trusted Service Providers
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                We protect records with encrypted HTTPS connections and strict
                database access rules, alongside reasonable technical and
                organizational safeguards against unauthorized access, misuse,
                alteration, or disclosure.
              </p>

              <p>
                Our service providers are Google Firebase (Firestore database
                and Authentication), Make.com (workflow automation), Trello
                (internal client onboarding pipeline), Brevo (newsletter
                delivery with 1-click unsubscribe), and Netlify (secure HTTPS
                hosting).
              </p>

              <p>
                We use these providers to operate our website and services.
                While we take reasonable steps to protect information, no
                internet transmission or electronic storage system can be
                guaranteed completely secure.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              4. Verified Client Reviews &amp; Authentication
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                When you submit a verified review, Google OAuth is used to
                authenticate your Google account. The review submission may
                include your name, profile photo, and Google account identifier.
              </p>

              <p>
                We use personal information only to prepare requested 5-minute
                video audits, conduct consultation calls, deliver digital
                services, send newsletters to subscribers, and display verified
                reviews. We never sell or rent personal information.
              </p>
            </div>
          </section>

          <section className="border-l-4 border-amber-600 bg-slate-900 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">
              Privacy Questions or Data Requests?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              For access, correction, or deletion requests, please use our
              /contact page. For other privacy questions, contact our privacy
              team.
            </p>

            <a
              href="mailto:privacy@localliftdigital.com"
              className="mt-4 inline-flex font-semibold text-amber-600 transition-colors hover:text-amber-500"
            >
              privacy@localliftdigital.com
            </a>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Under POPIA, you may request access to your personal information,
                ask us to correct it, or request its deletion where applicable.
                If you subscribed to our newsletter, you may unsubscribe at any
                time using Brevo&apos;s 1-click unsubscribe option.
              </p>

              <p>
                You may also lodge a complaint with the Information Regulator
                of South Africa if you have concerns about how your personal
                information is handled.
              </p>
            </div>
          </section>

          <section className="border-t border-slate-800 pt-8">
            <p className="text-sm leading-6 text-slate-400">
              For more information, return to our{" "}
              <Link
                href="/"
                className="font-semibold text-amber-600 transition-colors hover:text-amber-500"
              >
                homepage
              </Link>{" "}
              or explore our{" "}
              <Link
                href="/cases"
                className="font-semibold text-amber-600 transition-colors hover:text-amber-500"
              >
                case studies
              </Link>
              .
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
