export type AnalyticsEventName =
  | "phone_click"
  | "email_click"
  | "quote_cta_click"
  | "service_explore_click"
  | "solution_card_click"
  | "social_click"
  | "nav_click"
  | "testimonial_navigate"
  | "studio_credit_click"
  | "section_view";

export type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
  }
}

// No-ops unless GA has loaded, which only happens in production after cookie consent.
export const trackEvent = (name: AnalyticsEventName, params?: AnalyticsParams) => {
  if (process.env.NEXT_PUBLIC_GA_DEBUG === "true") {
    console.info("[analytics]", name, params, window.gtag ? "sent" : "skipped (GA not loaded)");
  }

  window.gtag?.("event", name, params);
};
