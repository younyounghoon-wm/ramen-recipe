import type { Metadata } from "next";
import QueryProvider from "../providers/QueryProvider";

export const metadata: Metadata = {
  title: "까투리 할일로그",
  description: "for katuri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
