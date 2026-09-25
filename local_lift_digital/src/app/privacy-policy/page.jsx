import Image from "next/image";
import Link from "next/link";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Privacy Policy & Cookie Configurations | Local Lift Digital",
  description:
    "Read the official privacy policy and cookie deployment disclosures for Local Lift Digital. Learn how we securely protect your business data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <article className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
          {/* Page Header */}
          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Privacy & Data Protection
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy and Cookie Policy
            </h1>

            <p className="text-sm text-slate-400">
              Last Updated: October 2026
            </p>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              At Local Lift Digital, we respect your privacy and are committed
              to protecting the personal information you share with us while
              using our website and services.
            </p>
          </header>

          {/* Section 1 */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              Section 1: Introduction & Data Collection
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Local Lift Digital collects information that you voluntarily
                provide when interacting with our website, requesting our
                services, submitting forms, or communicating with our team.
              </p>

              <p>
                Depending on how you interact with our website, this may
                include your name, business information, email address, and
                other information necessary to respond to your enquiry or
                provide requested services.
              </p>

              <p>
                Our website may use Netlify Forms to process information
                submitted through online forms. Information submitted through
                these forms is used to respond to enquiries, provide requested
                services, and communicate with customers.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              Section 2: Why We Use Cookies
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Our website may use cookies and similar technologies to help
                us understand how visitors interact with our website and to
                improve the overall user experience.
              </p>

              <p>
                Analytical cookies may be used to understand website traffic,
                visitor behaviour, and page performance. Where applicable,
                marketing pixels or similar technologies may also be used to
                measure advertising performance and support relevant
                marketing activities.
              </p>

              <p>
                You may be able to control or restrict cookies through your
                browser settings. Disabling certain cookies may affect some
                website functionality.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              Section 3: Data Protection & Security
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Local Lift Digital takes reasonable technical and
                organizational measures to protect personal information from
                unauthorized access, loss, misuse, alteration, or disclosure.
              </p>

              <p>
                Access to information is limited to circumstances where it is
                reasonably required to provide our services, operate our
                website, respond to enquiries, or maintain our business
                operations.
              </p>

              <p>
                While we take reasonable steps to protect information, no
                internet transmission or electronic storage system can be
                guaranteed to be completely secure.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              Section 4: User Authentication and Public Review Submissions
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                When users opt to leave a business review on our website, we
                utilize Firebase Authentication to securely verify accounts
                via Google or email provider services. We collect the user&apos;s
                public profile name, email reference, and avatar link. This
                data is utilized solely to validate review authenticity and
                prevent automated spam. Users maintain full rights to request
                immediate removal of their profile data and associated reviews
                by contacting privacy@localliftdigital.com.
              </p>
            </div>
          </section>

          {/* Support / Privacy Contact */}
          <section className="border-l-4 border-amber-600 bg-slate-900 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Image
                  src="/images/data-compliance-lead.jpg"
                  alt="Local Lift Digital data compliance lead"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-white">
                  Privacy Questions or Data Requests?
                </h2>

                <p className="text-sm leading-6 text-slate-400">
                  If you have questions about this policy, would like to
                  request access to your personal information, or would like
                  to request correction or deletion of your information,
                  contact our privacy team.
                </p>

                <a
                  href="mailto:privacy@localliftdigital.com"
                  className="inline-flex font-semibold text-amber-600 transition-colors hover:text-amber-500"
                >
                  privacy@localliftdigital.com
                </a>
              </div>
            </div>
          </section>

          {/* Rights */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              Your Privacy Rights
            </h2>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                Depending on applicable privacy legislation, you may have
                rights relating to the personal information we hold about
                you, including rights to request access, correction, or
                deletion of your personal information.
              </p>

              <p>
                If you have concerns about how your personal information is
                handled and are unable to resolve the matter directly with us,
                you may contact the relevant Information Regulator or
                supervisory authority applicable to your jurisdiction.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="border-t border-slate-800 pt-8">
            <p className="text-sm leading-6 text-slate-400">
              For more information about Local Lift Digital, you can return to
              our{" "}
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
                client results and reviews
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