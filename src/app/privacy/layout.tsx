import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TimeLine - Privacy Policy",
  description:
    "TimeLine's privacy policy explains how we collect, use, store, delete, and safeguard your information.",
  alternates: {
    canonical: "https://www.timeline-io.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
