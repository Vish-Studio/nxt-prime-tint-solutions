export type CookieConsent = "granted" | "denied";

const STORAGE_KEY = "prime-tint-cookie-consent";
const CONSENT_EVENT = "prime-tint-cookie-consent-change";

export const getCookieConsent = (): CookieConsent | null => {
  const value = window.localStorage.getItem(STORAGE_KEY);

  return value === "granted" || value === "denied" ? value : null;
};

export const setCookieConsent = (consent: CookieConsent) => {
  window.localStorage.setItem(STORAGE_KEY, consent);
  window.dispatchEvent(new Event(CONSENT_EVENT));
};

export const subscribeToCookieConsent = (onChange: () => void) => {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);

  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};
