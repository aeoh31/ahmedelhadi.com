import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
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
