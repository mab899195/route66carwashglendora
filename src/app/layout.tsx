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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: "Route 66 Car Wash",
    image: "https://www.route66wash.com/images/hero-main.jpeg",
    url: "https://www.route66wash.com",
    telephone: "+16269632600",
    foundingDate: "2004",
    address: {
      "@type": "PostalAddress",
      streetAddress: "525 E. Route 66",
      addressLocality: "Glendora",
      addressRegion: "CA",
      postalCode: "91740",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:30",
    },
    sameAs: [
      "https://www.facebook.com/474387949439096",
      "https://www.instagram.com/route66carwashca",
      "https://www.x.com/Route66_CarWash",
      "https://www.yelp.com/biz/8Qiq5-vuhVmJIb-i33yiBg",
    ],
  };

  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}