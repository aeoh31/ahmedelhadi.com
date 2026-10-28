import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted (latin subset, variable weight) so the build never has to
// fetch from Google Fonts; that fetch made CI builds fail intermittently.
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.woff2",
  variable: "--font-space-grotesk",
  weight: "400 600",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/Manrope.woff2",
  variable: "--font-manrope",
  weight: "300 600",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  variable: "--font-jetbrains-mono",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
