"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactAuditForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      await addDoc(collection(db, "leads"), {
        fullName,
        businessName,
        email,
        phone,
        serviceNeeded,
        submittedAt: new Date(),
        formOrigin: "contact-page",
      });

      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || "YOUR_MAKE_WEBHOOK_URL",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName,
              businessName,
              email,
              phone,
              serviceNeeded,
              formOrigin: "contact-page",
              submittedAt: new Date().toISOString(),
            }),
          },
        );

        if (!response.ok) {
          throw new Error(
            `Make.com webhook responded with status ${response.status}`,
          );
        }
      } catch (error) {
        console.error("Failed to trigger Make.com webhook:", error);
      }

      router.push("/contact/success");
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setSubmissionError(
        "We couldn’t send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full border border-slate-800 border-t-4 border-t-amber-600 bg-slate-900 p-6 sm:p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          Request Your Audit
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Tell us what you&apos;re working toward.
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Give us a few details about your business and we&apos;ll identify
          where digital growth opportunities may exist.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="full-name"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Full Name
          </label>

          <input
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div>
          <label
            htmlFor="business-name"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Business Name
          </label>

          <input
            id="business-name"
            name="businessName"
            type="text"
            autoComplete="organization"
            required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your business name"
            className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div>
          <label
            htmlFor="email-address"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Email Address
          </label>

          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourbusiness.com"
            className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+27 00 000 0000"
            className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div>
          <label
            htmlFor="service-needed"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Service Needed
          </label>

          <select
            id="service-needed"
            name="serviceNeeded"
            required
            value={serviceNeeded}
            onChange={(e) => setServiceNeeded(e.target.value)}
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

        {submissionError && (
          <p role="alert" className="text-sm text-amber-600">
            {submissionError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-600 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending Request..." : "Send Message & Request Audit"}
        </button>

        <p className="text-center text-xs leading-5 text-[#7085a3]">
          By submitting this form, you agree to allow Local Lift Digital to use
          your information to respond to your enquiry. See our{" "}
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
  );
}
