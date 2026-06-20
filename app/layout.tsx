import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeffrey Jones Copson | Software Engineer",
  description:
    "Portfolio of Jeffrey Jones Copson — Full-Stack Web Developer, Aspiring AI Expert, Game & App Developer, Gospel Minister, and Data Analysis Enthusiast.",
  keywords: [
    "Jeffrey Jones Copson",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "KNUST",
    "Ghana",
    "React",
    "Next.js",
    "AI",
  ],
  authors: [{ name: "Jeffrey Jones Copson" }],
  openGraph: {
    title: "Jeffrey Jones Copson | Software Engineer",
    description:
      "Portfolio of Jeffrey Jones Copson — Full-Stack Web Developer & Aspiring AI Expert.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
