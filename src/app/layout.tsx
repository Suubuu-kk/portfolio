import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanhaiya Kumar — ML Engineer & Applied Analytics Specialist",
  description:
    "Portfolio of Kanhaiya Kumar — Machine Learning Engineer, Applied Analytics Specialist, and Teaching Assistant at IIT Bombay.",
  keywords: [
    "Machine Learning",
    "Data Science",
    "IIT Bombay",
    "Analytics",
    "ML Engineer",
    "Kanhaiya Kumar",
  ],
  authors: [{ name: "Kanhaiya Kumar" }],
  openGraph: {
    title: "Kanhaiya Kumar — ML Engineer & Applied Analytics Specialist",
    description:
      "Bridging Business, Data, and Decision-Making through Applied Machine Learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {/* Animated background mesh */}
        <div className="bg-mesh" />
        <div className="dot-pattern fixed inset-0 z-0 pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
