import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KCGreenWorks",
  description:
    "Practical home gardening, aquaponics and worm composting guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NC2F2HXMJJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NC2F2HXMJJ');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <footer className="border-t border-[#d8d2c3] bg-[#f4f1e8] px-6 py-6">
          <div className="mx-auto max-w-7xl text-center text-sm text-[#4b5a4b]">
            <p>
              © {new Date().getFullYear()} KC MARK SOLUTIONS LLC. All Rights
              Reserved.
            </p>

            <div className="mt-4 flex justify-center gap-5 font-semibold">
              <a
                href="https://www.facebook.com/kcgreenworks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-800 transition"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/kcgreenworks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-800 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@KCGreenWorks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-800 transition"
              >
                YouTube
              </a>

              <a
                href="https://www.tiktok.com/@kcgreenworks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-800 transition"
              >
                TikTok
              </a>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <Link
                href="/disclaimer"
                className="hover:text-green-800 transition"
              >
                Disclaimer
              </Link>

              <Link href="/shop" className="hover:text-green-800 transition">
                Shop
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
