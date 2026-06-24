import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, OG_IMAGE } from "./siteConfig";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const socialLinks = [
  "https://www.linkedin.com/in/vaxojaniashvili/",
  "https://github.com/vaxojaniashvili",
  "https://www.youtube.com/@Vaxo-Janiashvili",
  "https://www.facebook.com/vaxo.janiashvilii",
  "https://www.instagram.com/janiashvili_1",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vaxo Janiashvili — React Native Developer & Full-Stack Web Engineer",
    template: "%s | Vaxo Janiashvili",
  },
  description:
    "Vaxo Janiashvili — React Native Developer and Full-Stack Web Engineer with 4+ years of experience building cross-platform mobile apps with React Native & Expo and performant web applications. View portfolio, projects and contact.",
  applicationName: "Vaxo Janiashvili Portfolio",
  keywords: [
    "Vaxo Janiashvili",
    "Vaxo Janiashvili portfolio",
    "Vaxo Janiashvili developer",
    "Vaxo Janiashvili React Native",
    "Vaxo",
    "Janiashvili",
    "ვახო ჯანიაშვილი",
    "ვახო",
    "ჯანიაშვილი",
    "React Native Developer",
    "React Native Developer Georgia",
    "React Native Developer Tbilisi",
    "React Native დეველოპერი",
    "Expo Developer",
    "Full-Stack Developer Georgia",
    "Mobile Engineer Tbilisi",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Vaxo Janiashvili", url: SITE_URL }],
  creator: "Vaxo Janiashvili",
  publisher: "Vaxo Janiashvili",
  alternates: {
    canonical: "/",
  },
  icons: "https://cdn-icons-png.flaticon.com/512/1096/1096090.png",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Vaxo Janiashvili",
    locale: "en_US",
    alternateLocale: ["ka_GE"],
    firstName: "Vaxo",
    lastName: "Janiashvili",
    username: "vaxojaniashvili",
    title: "Vaxo Janiashvili — React Native Developer & Full-Stack Web Engineer",
    description:
      "React Native Developer and Full-Stack Web Engineer with 4+ years of experience building cross-platform mobile and web applications.",
    images: [
      {
        url: OG_IMAGE,
        width: 768,
        height: 1024,
        alt: "Vaxo Janiashvili — React Native Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaxo Janiashvili — React Native Developer & Full-Stack Web Engineer",
    description:
      "React Native Developer and Full-Stack Web Engineer with 4+ years of experience.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f12",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vaxo Janiashvili",
  alternateName: "ვახო ჯანიაშვილი",
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  givenName: "Vaxo",
  familyName: "Janiashvili",
  jobTitle: "React Native Developer & Full-Stack Web Engineer",
  description:
    "React Native Developer and Full-Stack Web Engineer with 4+ years of experience building cross-platform mobile apps and web applications.",
  email: "mailto:vaxojaniashvili186@gmail.com",
  nationality: "Georgian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tbilisi",
    addressCountry: "GE",
  },
  knowsAbout: [
    "React Native",
    "Expo",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Full-Stack Web Development",
    "Mobile App Development",
  ],
  knowsLanguage: ["Georgian", "English"],
  sameAs: socialLinks,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f12]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
