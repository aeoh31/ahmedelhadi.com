import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted (latin subset, variable weight) so the build never has to
// fetch from Google Fonts; that fetch made CI builds fail intermittently.
const plexSans = localFont({
  src: "./fonts/IBMPlexSans.woff2",
  variable: "--font-sans",
  weight: "400 700",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  variable: "--font-mono",
  weight: "400 500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Elhadi — Senior Software Engineer",
  description:
    "Software engineer with 5+ years building fintech, event and AI-powered platforms in Node.js, TypeScript and React on AWS. Based in Abu Dhabi, open to remote.",
  openGraph: {
    title: "Ahmed Elhadi — Senior Software Engineer",
    description:
      "Software engineer with 5+ years building fintech, event and AI-powered platforms end to end, from APIs and event-driven services to the dashboards teams use every day.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
