"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Netlify handles the actual form submission in production.
    // This state can be used to show a success UI after your
    // submission flow has been connected.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-orange-600/20 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-600/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 text-orange-600"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.884a1 1 0 0 1 .012 1.414l-7.25 7.5a1 1 0 0 1-1.43.012l-3.25-3.25a1 1 0 0 1 1.414-1.414l2.535 2.535 6.543-6.773a1 1 0 0 1 1.426-.024Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-950">
          Thanks! We&apos;ll be in touch.
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          We&apos;ll review your details and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Let&apos;s Talk
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Ready to Grow Your Business?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Tell us a little about your business. We&apos;ll help you figure
            out the right digital solution.
          </p>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Required by Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field */}
          <div className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </div>

          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-slate-900"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Smith"
                className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
              />
            </div>

            {/* Business Name */}
            <div>
              <label
                htmlFor="businessName"
                className="block text-sm font-semibold text-slate-900"
              >
                Business Name
              </label>

              <input
                id="businessName"
                name="businessName"
                type="text"
                autoComplete="organization"
                required
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Your Business"
                className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-900"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@business.com"
                className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-slate-900"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 82 123 4567"
                className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
              />
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-slate-900"
              >
                Which service are you most interested in?
              </label>

              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="landing-page">
                  Landing Page
                </option>
                <option value="5-page-website">
                  5-Page Converting Website
                </option>
                <option value="gmb-optimization">
                  Google My Business Optimization
                </option>
                <option value="ai-automation">
                  AI Automation &amp; Assistants
                </option>
                <option value="not-sure">
                  I&apos;m not sure yet
                </option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-7 w-full rounded-lg bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Let&apos;s Talk
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            No spam. Just a quick conversation about how we can help your
            business grow.
          </p>
        </form>
      </div>
    </section>
  );
}