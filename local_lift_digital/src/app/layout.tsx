import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import CookieConsent from "../../components/CookieConsent";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Native optimization for your brand fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Local Lift Digital",
  description:
    "High-converting websites and AI automation solutions for local businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-slate-950 text-white font-sans antialiased"
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});`,
          }}
        />
        {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
        {children}

        <CookieConsent />
      </body>
    </html>
  );
}