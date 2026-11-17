"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import team from "../images/team.jpg";

export default function ServicesCTA() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await addDoc(collection(db, "leads"), {
        firstName,
        businessType,
        websiteUrl,
        phone,
        submittedAt: new Date(),
        formOrigin: "services-strategy-form",
      });

      router.push("/contact/success");
    } catch (error) {
      console.error("Services strategy request submission error:", error);
      setSubmitError(
        "We couldn't submit your request. Please try again in a moment.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="rounded-2xl border border-amber-600 bg-slate-950 p-6 sm:p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Get Your Custom Strategy
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Not sure which solutions fit your current goals?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Drop your details below. A real human from our strategy team will
              audit your current online presence and recommend the exact setup
              you need.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-slate-200"
                >
                  First Name
                </label>

                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Business Type */}
              <div>
                <label
                  htmlFor="business-type"
                  className="block text-sm font-semibold text-slate-200"
                >
                  Business Type
                </label>

                <input
                  id="business-type"
                  name="businessType"
                  type="text"
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="e.g. Plumbing, Dental, Legal"
                  className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Website URL */}
              <div>
                <label
                  htmlFor="website-url"
                  className="block text-sm font-semibold text-slate-200"
                >
                  Current Website URL
                  <span className="ml-1 font-normal text-[#667995]">
                    (Optional)
                  </span>
                </label>

                <input
                  id="website-url"
                  name="websiteUrl"
                  type="url"
                  inputMode="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://yourbusiness.com"
                  className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold text-slate-200"
                >
                  Phone Number
                </label>

                <input
                  id="phone-number"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+27 00 000 0000"
                  className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            {submitError && (
              <p role="alert" className="mt-5 text-sm text-amber-600">
                {submitError}
              </p>
            )}

            {/* Submit Area */}
            <div className="mt-8 flex flex-col gap-5 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#d13d00] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#b63200] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                {isSubmitting ? (
                  "Submitting Strategy Request..."
                ) : (
                  <>
                    Request Free Custom Strategy
                    <span className="ml-2 text-base" aria-hidden="true">
                      →
                    </span>
                  </>
                )}
              </button>

              {/* Human Element */}
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-slate-700 bg-slate-800">
                  <Image
                    src={team}
                    alt="Local Lift Digital lead coordinator"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    We respond with a video audit
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#667995]">
                    Within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}