"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "local_lift_cookie_consent";

function subscribeToCookieConsent(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => callback();

  window.addEventListener("storage", handleChange);
  window.addEventListener("cookie-consent-changed", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("cookie-consent-changed", handleChange);
  };
}

function getCookieConsentSnapshot() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(COOKIE_CONSENT_KEY) ?? null;
}

export default function CookieConsent() {
  const consentValue = useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsentSnapshot,
    () => null,
  );

  const showBanner = consentValue === null;

  const handleConsent = (value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
      window.dispatchEvent(new CustomEvent("cookie-consent-changed"));
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-900 p-4 shadow-2xl md:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Cookie Information */}
        <div className="max-w-3xl">
          <p
            id="cookie-consent-description"
            className="text-sm leading-6 text-slate-300"
          >
            We use analytical and retargeting cookies to optimize your
            browsing experience and measure our ad performance. By clicking
            &quot;Accept All&quot;, you consent to our use of cookies in
            accordance with our{" "}
            <Link
              href="/privacy"
              className="text-amber-600 underline underline-offset-2 transition hover:text-amber-600"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleConsent("declined")}
            className="rounded border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-amber-600 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Decline
          </button>

          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="rounded bg-[#d13d00] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#b63200] focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}