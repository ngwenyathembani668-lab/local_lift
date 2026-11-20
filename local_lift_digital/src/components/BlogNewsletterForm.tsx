"use client";

import { addDoc, collection } from "firebase/firestore";
import { useState, type FormEvent } from "react";
import { db } from "@/lib/firebase";

export default function BlogNewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        source: "blog-newsletter",
        subscribedAt: new Date(),
      });

      try {
        const webhookUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL;
        if (!webhookUrl) {
          throw new Error("NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL is not configured");
        }

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            source: "blog-newsletter",
            subscribedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Make.com webhook responded with status ${response.status}`,
          );
        }
      } catch (error) {
        console.error("Failed to trigger Make.com newsletter webhook:", error);
      }

      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Failed to save newsletter subscriber:", error);
      setSubmissionError(
        "We couldn’t complete your subscription. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="border-l-4 border-amber-600 bg-slate-900 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
                Twice-Monthly Insights
              </span>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Get Growth Blueprints Delivered to Your Inbox
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Join 1,200+ local business owners who receive our actionable
                digital growth case studies twice a month. No spam. Real value.
              </p>
            </div>

            <div className="w-full lg:max-w-xl">
              {isSubscribed ? (
                <p role="status" className="text-sm leading-7 text-slate-400">
                  You&apos;re subscribed! Watch your inbox for local growth &amp;
                  AI tips.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="w-full">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="flex-1">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                      </label>

                      <input
                        id="newsletter-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                      />

                      <p className="mt-3 text-xs font-medium text-[#7085a3]">
                        Curated and written by our growth team.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#d13d00] px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#b63200] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      {isSubmitting ? (
                        "Subscribing..."
                      ) : (
                        <>
                          Join Free Newsletter
                          <span className="ml-2" aria-hidden="true">
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  {submissionError && (
                    <p role="alert" className="mt-3 text-sm text-[#d13d00]">
                      {submissionError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
