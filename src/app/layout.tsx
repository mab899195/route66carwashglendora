import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Route 66 Car Wash | Glendora, CA",
  description:
    "When you're in need of a car wash in Glendora, head to Route 66 Car Wash! Fast, efficient washes, detailing, and more — since 2004.",
  icons: { icon: "/images/logo-new.png" },
   alternates: {
    canonical: "https://www.route66wash.com/",
  },
  openGraph: {
    title: "Route 66 Car Wash | Glendora, CA",
    description:
      "Fast, efficient car washes on historic Route 66 in Glendora, CA. Express, full service, detailing, and unlimited memberships.",
    images: ["/images/hero-main.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
