"use client";

import { Cookie } from "lucide-react";
import { useSyncExternalStore } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  subscribeToCookieConsent,
} from "@/lib/cookie-consent";

// Server snapshot is "granted" so the banner never renders during SSR or hydration.
const getServerSnapshot = () => "granted";

export const CookieConsentBanner = () => {
  const consent = useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsent,
    getServerSnapshot,
  );

  if (consent !== null) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-3xl border border-white/15 bg-black/80 p-5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:bottom-6 sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-saffron text-black">
            <Cookie aria-hidden="true" className="size-5" strokeWidth={2.4} />
          </span>
          <div>
            <p className="text-base font-bold">We value your privacy</p>
            <p className="mt-1 text-sm leading-6 text-zinc-300">
              We use analytics cookies to understand how visitors use our site
              and improve it. You can accept or decline at any time.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setCookieConsent("denied")}
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setCookieConsent("granted")}
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-saffron px-6 text-sm font-semibold text-black transition hover:brightness-95"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
