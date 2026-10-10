"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import {
  getCookieConsent,
  subscribeToCookieConsent,
} from "@/lib/cookie-consent";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const isDebug = process.env.NEXT_PUBLIC_GA_DEBUG === "true";
const isEnabled = process.env.NODE_ENV === "production" || isDebug;

const getServerSnapshot = () => null;

// Loads GA4 in production (or with NEXT_PUBLIC_GA_DEBUG=true) only after the visitor has accepted analytics cookies.
export const GoogleAnalytics = () => {
  const consent = useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsent,
    getServerSnapshot,
  );

  if (!isEnabled || !measurementId || consent !== "granted") {
    return null;
  }

  const config = isDebug ? ", { debug_mode: true }" : "";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}'${config});`}
      </Script>
    </>
  );
};
