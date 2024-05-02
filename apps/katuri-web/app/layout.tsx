import type { Metadata } from "next";
import QueryProvider from "../providers/QueryProvider";
import "./global.css";

export const metadata: Metadata = {
  title: "까투리 할일로그",
  description: "for katuri",
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [{ rel: "icon", url: "/tt.png", sizes: "192x192" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <link rel="manifest" href="/manifest.json" />
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
