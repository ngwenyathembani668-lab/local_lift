"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import thembani from "../images/Thembani.jpg";

export default function FinalCTA() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await addDoc(collection(db, "leads"), {
        fullName,
        businessName,
        phone,
        email,
        mainGoal,
        submittedAt: new Date(),
        formOrigin: "homepage-lead",
      });

      router.push("/contact/success");
    } catch (error) {
      console.error("Homepage lead submission error:", error);
      setSubmitError(
        "We couldn't submit your request. Please try again in a moment.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-page px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-2xl border border-slate-700 bg-surface lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Start Growing
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Ready to Lift Your Business Standings?
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
              Fill out this 30-second form, and our team will prepare a free
              custom growth audit for your brand.
            </p>

            <div className="mt-8 hidden border-l-2 border-soft pl-5 lg:block">
              <p className="text-sm leading-6 text-muted">
                We&apos;ll look at your website, local visibility, and
                opportunities to automate customer conversations.
              </p>
            </div>
          </div>

          <div className="border-t border-soft bg-page p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="full-name"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-name"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Business Name
                  </label>
                  <input
                    id="business-name"
                    name="business-name"
                    type="text"
                    autoComplete="organization"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your Business"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+27 00 000 0000"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="main-goal"
                  className="mb-2 block text-sm font-semibold text-muted"
                >
                  Main Goal
                </label>

                <select
                  id="main-goal"
                  name="main-goal"
                  required
                  value={mainGoal}
                  onChange={(e) => setMainGoal(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                >
                  <option value="" disabled>
                    Select your main goal
                  </option>
                  <option value="New Website">New Website</option>
                  <option value="GMB Growth">GMB Growth</option>
                  <option value="AI Assistants">AI Assistants</option>
                  <option value="Custom">Custom Web App</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {submitError && (
                <p role="alert" className="text-sm text-amber-600">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                {isSubmitting ? "Processing Audit..." : "Claim Your Free Audit"}
              </button>

              <div className="flex items-center justify-center gap-3 pt-1">
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-soft bg-surface">
                  <Image
                    src={thembani}
                    alt="Thembani, Lead Coordinator"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>

                <p className="text-xs font-medium text-soft">
                  Thembani reviews all submissions within 2 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}