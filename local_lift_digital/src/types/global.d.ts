type GoogleConsentValue = "granted" | "denied";

interface GoogleConsentUpdate {
  ad_storage: GoogleConsentValue;
  analytics_storage: GoogleConsentValue;
  ad_user_data: GoogleConsentValue;
  ad_personalization: GoogleConsentValue;
}

type GoogleTag = {
  (command: "consent", action: "update", consent: GoogleConsentUpdate): void;
  (command: string, ...args: unknown[]): void;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: GoogleTag;
  }
}

export {};
