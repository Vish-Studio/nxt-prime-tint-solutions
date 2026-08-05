import type { Metadata } from "next";
import { DM_Sans, Teachers } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const teachers = Teachers({
  subsets: ["latin"],
  variable: "--font-teachers",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nano Tint | Window and Car Tint Shades",
  description:
    "Premium car tint shades and window film installation for heat control, privacy, and a cleaner blacked-out finish.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${teachers.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
