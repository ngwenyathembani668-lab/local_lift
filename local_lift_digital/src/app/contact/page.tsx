import Image from "next/image";
import type { Metadata } from "next";



import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactAuditForm from "@/components/ContactAuditForm";

export const metadata: Metadata = {
  title: "Contact Our Growth Team | Local Lift Digital",
  description:
    "Get in touch with Local Lift Digital. Book a consultation or request a custom digital growth and AI automation audit for your local business.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <section
          aria-labelledby="contact-heading"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Start a Conversation
              </p>

              <h1
                id="contact-heading"
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Let&apos;s Lift Your Business Standings.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Have questions about our websites, GMB rankings, or custom AI
                assistants? Drop us a message or book a direct strategy call.
                We reply to every inquiry within 2 hours.
              </p>

              {/* Direct Contact Details */}
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-amber-600"
                  >
                    @
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>

                    <a
                      href="mailto:hello@localliftdigital.com"
                      className="mt-1 inline-block text-slate-300 transition-colors hover:text-amber-600"
                    >
                      hello@localliftdigital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-amber-600"
                  >
                    ✓
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Response Window
                    </p>

                    <p className="mt-1 text-slate-300">
                      Under 2 hours during business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Human Trust Card */}
              <div className="mt-10 border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/images/marcus-client-success.jpg"
                      alt="Marcus, Client Success Director at Local Lift Digital"
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full border-2 border-slate-700 object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                      Client Success Director
                    </p>

                    <p className="mt-1 text-base font-semibold text-white">
                      Marcus is on standby today to review your project scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex items-start">
            <ContactAuditForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}