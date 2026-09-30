import type { Metadata } from "next";
import { DM_Sans, Urbanist } from "next/font/google";
import { CookieConsentBanner } from "@/components/cookie-consent-banner/cookie-consent-banner";
import { LenisProvider } from "@/components/lenis-provider/lenis-provider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Tint Solutions | Automotive Tint and Architectural Window Film",
  description:
    "Precision automotive tint and architectural window film installation for heat control, privacy, and protected interiors.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className={`${dmSans.variable} ${urbanist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <LenisProvider>{children}</LenisProvider>
        <CookieConsentBanner />
      </body>
    </html>
  );
};

export default RootLayout;
