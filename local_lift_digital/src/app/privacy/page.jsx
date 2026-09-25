import Image from "next/image";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Privacy Policy & Cookie Configurations | Local Lift Digital",
  description:
    "Read the official privacy policy and cookie deployment disclosures for Local Lift Digital. Learn how we securely protect your business data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Privacy Policy */}
      <article className="mx-auto max-w-3xl space-y-12 px-4 py-16">
        {/* Header */}
        <header className="space-y-5 border-b border-slate-800 pb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Local Lift Digital
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy and Cookie Policy
          </h1>

          <p className="text-sm text-slate-500">
            Last Updated: October 2026
          </p>

          <p className="text-lg leading-8 text-slate-400">
            This policy explains how Local Lift Digital collects, uses,
            protects, and manages information when you interact with our
            website, marketing services, forms, and digital platforms.
          </p>
        </header>

        {/* Section 1 */}
        <section
          aria-labelledby="data-collection"
          className="space-y-5"
        >
          <h2
            id="data-collection"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            1. Introduction &amp; Data Collection
          </h2>

          <p className="leading-8 text-slate-400">
            Local Lift Digital respects the privacy of business owners,
            prospective clients, customers, and website visitors. We collect
            only information that is reasonably necessary to respond to
            enquiries, provide our services, communicate with clients, and
            improve our digital experiences.
          </p>

          <p className="leading-8 text-slate-400">
            When you submit information through forms on our website,
            including forms powered by Netlify Forms, we may collect details
            such as your name, business name, business email address, phone
            number, website address, and information you voluntarily include
            in your enquiry.
          </p>

          <p className="leading-8 text-slate-400">
            We use this information to respond to enquiries, prepare
            proposals, provide requested services, manage client
            communications, and deliver relevant business support. We do not
            require you to provide information that is not necessary for the
            purpose of your interaction with us.
          </p>
        </section>

        {/* Section 2 */}
        <section
          aria-labelledby="cookies"
          className="space-y-5"
        >
          <h2
            id="cookies"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            2. Why We Use Cookies
          </h2>

          <p className="leading-8 text-slate-400">
            Cookies and similar technologies may be used to understand how
            visitors interact with our website and to help us improve the
            experience for local business owners researching our services.
          </p>

          <div className="space-y-6 border-l-2 border-amber-600 pl-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Analytical Cookies
              </h3>

              <p className="leading-7 text-slate-400">
                Analytical cookies help us understand website performance,
                including which pages receive traffic, how visitors navigate
                the site, and where improvements may be required. This
                information is generally used in aggregated form to improve
                website performance and usability.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Marketing Pixels
              </h3>

              <p className="leading-7 text-slate-400">
                Marketing pixels may be used to measure advertising
                performance and support retargeting campaigns. For example,
                these technologies can help us show relevant Local Lift
                Digital advertising to local business owners who have
                previously interacted with our website or content.
              </p>
            </div>
          </div>

          <p className="leading-8 text-slate-400">
            Depending on the technologies deployed on the website, you may be
            able to manage certain cookie preferences through your browser
            settings or an available consent mechanism. Disabling some
            cookies may affect certain website functionality or measurement
            capabilities.
          </p>
        </section>

        {/* Section 3 */}
        <section
          aria-labelledby="data-security"
          className="space-y-5"
        >
          <h2
            id="data-security"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            3. Data Protection &amp; Security
          </h2>

          <p className="leading-8 text-slate-400">
            We take reasonable technical and organizational measures to
            protect information entrusted to Local Lift Digital against
            unauthorized access, disclosure, alteration, or loss.
          </p>

          <p className="leading-8 text-slate-400">
            Access to client and enquiry information is limited to people and
            service providers who require that information to perform
            legitimate business functions. Where third-party platforms are
            used to process forms, analytics, hosting, communication, or
            marketing data, those services may process information according
            to their own privacy and security practices.
          </p>

          <p className="leading-8 text-slate-400">
            No online transmission or storage system can be guaranteed to be
            completely secure. We therefore continuously review our digital
            processes and take reasonable steps to reduce privacy and security
            risks.
          </p>
        </section>

        {/* Human Support / Compliance Contact */}
        <section
          aria-labelledby="privacy-contact"
          className="border border-slate-800 bg-slate-900 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Data Compliance Lead Avatar Placeholder */}
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-800">
              <Image
                src="/images/data-compliance-lead.jpg"
                alt="Data Compliance Lead"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <h2
                id="privacy-contact"
                className="font-semibold text-white"
              >
                Privacy &amp; Compliance Support
              </h2>

              <p className="leading-7 text-slate-400">
                Have questions about your data privacy? Reach our compliance
                desk directly at{" "}
                <a
                  href="mailto:privacy@localliftdigital.com"
                  className="font-semibold text-amber-600 transition hover:text-amber-500"
                >
                  privacy@localliftdigital.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}