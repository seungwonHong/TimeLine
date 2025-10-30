import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/features/landing/components/AOSProvider";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TimeLine - The Best Community for Developers",
  description:
    "TimeLine is the best platform for various kind of developers. You can post your ideas, create a topics, recruit people for projects.",
  keywords: [
    "TimeLine",
    "Timeline",
    "Timeline IO",
    "Timeline IO Official",
    "Timeline IO Official Website",
    "developer platform",
    "developer community",
    "programmer community",
    "developer collaboration",
    "project recruitment",
    "tech community",
    "topic creation",
  ],
  authors: [{ name: "TimeLine Team" }],
  creator: "TimeLine",
  publisher: "TimeLine",
  metadataBase: new URL("https://www.timeline-io.com/"),
  category: "technology",
  applicationName: "TimeLine - The Best Community for Developers",

  openGraph: {
    type: "website",
    title: "TimeLine - The Best Community for Developers",
    description:
      "TimeLine is the best platform for various kind of developers. You can post your ideas, create a topics, recruit people for projects.",
    url: "https://www.timeline-io.com/",
    siteName: "TimeLine - The Best Community for Developers",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TimeLine - The Best Community for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeLine - The Best Community for Developers",
    description:
      "TimeLine is the best platform for various kind of developers. You can post your ideas, create a topics, recruit people for projects.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.timeline-io.com/",
  },

  icons: {
    icon: [
      {
        url: "/icons/favicon.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/faviconDark.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <AOSProvider>{children}</AOSProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
