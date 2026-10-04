import Image from "next/image";
import type { Metadata } from "next";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

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
            <div className="w-full border border-slate-800 border-t-4 border-t-amber-600 bg-slate-900 p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Request Your Audit
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Tell us what you&apos;re working toward.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Give us a few details about your business and we&apos;ll
                  identify where digital growth opportunities may exist.
                </p>
              </div>

              <form
                name="agency-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contact/success"
                className="space-y-6"
              >
                {/* Netlify Form Identification */}
                <input type="hidden" name="form-name" value="agency-contact" />

                {/* Netlify Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="bot-field">bot-field</label>
                  <input
                    id="bot-field"
                    name="bot-field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Full Name
                  </label>

                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label
                    htmlFor="business-name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Business Name
                  </label>

                  <input
                    id="business-name"
                    name="business-name"
                    type="text"
                    autoComplete="organization"
                    required
                    placeholder="Your business name"
                    className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email-address"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Email Address
                  </label>

                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@yourbusiness.com"
                    className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+27 00 000 0000"
                    className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label
                    htmlFor="service-needed"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Service Needed
                  </label>

                  <select
                    id="service-needed"
                    name="service-needed"
                    required
                    defaultValue=""
                    className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Website Design">Website Design</option>
                    <option value="Google Business Profile">
                      Google Business Profile
                    </option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Custom Business Applications">
                      Custom Business Applications
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-amber-600 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Send Message &amp; Request Audit
                </button>

                <p className="text-center text-xs leading-5 text-[#7085a3]">
                  By submitting this form, you agree to allow Local Lift
                  Digital to use your information to respond to your enquiry.
                  See our{" "}
                  <a
                    href="/privacy"
                    className="text-slate-400 underline decoration-slate-600 underline-offset-2 transition-colors hover:text-amber-600"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}