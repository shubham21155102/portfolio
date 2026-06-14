import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Shubham Patel — Software Engineer",
    template: "%s | Shubham Patel",
  },
  description:
    "Shubham Patel — Backend & Cloud/DevOps engineer. A year shipping production software in a startup, plus a dozen internships across Node.js, AWS, NestJS and the Elastic Stack.",
};

// Runs before paint to apply the saved/preferred theme and avoid a flash.
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="H2ePTlxN6KnnjSd78F78hD3YrNnbwN99b7hVqXIzUM0"
        />
        <meta name="google-adsense-account" content="ca-pub-6714499173199533" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
