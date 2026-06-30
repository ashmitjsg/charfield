import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://charfield.log0.in"
  ),
  title: "charfield - ASCII canvas field animations",
  description:
    "Copy-in registry + CLI for interactive ASCII canvas field animations. npx charfield add <name>.",
  openGraph: {
    title: "charfield - ASCII canvas field animations",
    description:
      "Copy-in registry + CLI for interactive ASCII canvas field animations.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "charfield" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "charfield - ASCII canvas field animations",
    description:
      "Copy-in registry + CLI for interactive ASCII canvas field animations.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
