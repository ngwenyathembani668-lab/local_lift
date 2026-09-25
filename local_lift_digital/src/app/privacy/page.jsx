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

            <p className="text-sm text-slate-400">Last Updated: October 2026</p>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              At Local Lift Digital, we respect your privacy and are committed
              to protecting the personal information you share with us while
              using our website and services.
            </p>
          </header>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              1. Introduction &amp; Data Collection
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Local Lift Digital collects information that you voluntarily
                provide when interacting with our website, requesting our
                services, submitting forms, or communicating with our team.
              </p>

              <p>
                Depending on how you interact with our website, this may include
                your name, business information, email address, and other
                information necessary to respond to your enquiry or provide
                requested services.
              </p>

              <p>
                Our website may use web forms to process information submitted
                through online enquiries. Information submitted through these
                forms is used to respond to enquiries, provide requested
                services, and communicate with customers.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              2. Cookies &amp; Website Analytics
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Our website may use cookies and similar technologies to help us
                understand how visitors interact with the site and improve the
                user experience.
              </p>

              <p>
                Analytics cookies may be used to understand traffic, visitor
                behavior, and page performance. Where applicable, marketing
                cookies may also be used to measure campaign performance and
                improve relevant opportunities.
              </p>

              <p>
                You may control or disable cookies through your browser
                settings. Disabling certain cookies may impact website
                functionality.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              3. Data Protection &amp; Security
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Local Lift Digital takes reasonable technical and organizational
                measures to protect personal information from unauthorized
                access, misuse, alteration, or disclosure.
              </p>

              <p>
                Access to information is limited to circumstances where it is
                reasonably required to provide services, operate our website,
                respond to enquiries, or maintain our business operations.
              </p>

              <p>
                While we take reasonable steps to protect information, no
                internet transmission or electronic storage system can be
                guaranteed to be completely secure.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              4. User Reviews &amp; Authentication
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                When users choose to leave a review on our website, we may use
                authentication services to verify account ownership and prevent
                fraudulent or automated submissions. This may involve a public
                profile name, email reference, and avatar information associated
                with the authenticated account.
              </p>

              <p>
                Review data is used to validate authenticity, improve trust in
                our client feedback, and support transparent communication about
                our work.
              </p>
            </div>
          </section>

          <section className="border-l-4 border-amber-600 bg-slate-900 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">
              Privacy Questions or Data Requests?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              If you have questions about this policy or want to request access,
              correction, or deletion of your information, contact our privacy
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
                Depending on applicable privacy legislation, you may have rights
                relating to the personal information we hold about you, including
                the right to request access, correction, or deletion of that
                information.
              </p>

              <p>
                If you have concerns about how your personal information is
                handled and are unable to resolve the matter directly with us,
                you may contact the relevant authority in your jurisdiction.
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
