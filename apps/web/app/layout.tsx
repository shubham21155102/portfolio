import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio:Shubham",
    template: "%s | Shubham Patel",
  },
  description: "my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="H2ePTlxN6KnnjSd78F78hD3YrNnbwN99b7hVqXIzUM0"
      />
      <meta name="google-adsense-account" content="ca-pub-6714499173199533" />

      <body>{children}</body>
    </html>
  );
}
