import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "과일 MBTI",
  description: "당신의 과일을 찾아보세요",
  openGraph: {
    type: "website",
    title: "과일 MBTI",
    description: "당신의 과일을 찾아보세요",
    siteName: "과일 MBTI",
    url: process.env.NEXT_PUBLIC_SELF_DOMAIN,
    images: `${process.env.NEXT_PUBLIC_SELF_DOMAIN}/og/og.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-dvw min-h-dvh">
      <head>
        <link rel="icon" href="/favicon/favicon_32x32.svg" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon_48x48.svg" sizes="48x48" />
        <link rel="icon" href="/favicon/favicon_96x96.svg" sizes="96x96" />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
