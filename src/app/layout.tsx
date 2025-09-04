import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cinemark – tvůj filmový průvodce",
    template: "%s | Cinemark",
  },
  description:
    "Cinemark je moderní aplikace, která ti rychle ukáže, kde sledovat filmy a seriály. Watchlisty, hodnocení, detaily a statistiky na jednom místě.",
  metadataBase: new URL("https://fistd.github.io"),
  openGraph: {
    title: "Cinemark – tvůj filmový průvodce",
    description:
      "Rychle zjisti, kde sledovat filmy a seriály. Tvoř watchlisty, hodnoť a plánuj.",
    url: "/cinemark-app/",
    siteName: "Cinemark",
    images: [
      {
        url: "/cinemark-app/logo.png",
        width: 1200,
        height: 630,
        alt: "Cinemark logo",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinemark – tvůj filmový průvodce",
    description:
      "Rychle zjisti, kde sledovat filmy a seriály. Tvoř watchlisty, hodnoť a plánuj.",
    images: ["/cinemark-app/logo.png"],
  },
  icons: {
    icon: "/cinemark-app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
