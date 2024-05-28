import type { Metadata } from "next";
import QueryProvider from "../providers/QueryProvider";
import "../styles/globalStyles.css";
import ClientProvider from "../providers/ClientProvider";
import FirebaseProvider from "../providers/FirebaseProvider";

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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
      </head>
      <body>
        <QueryProvider>
          <FirebaseProvider>
            <ClientProvider>{children}</ClientProvider>
          </FirebaseProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
