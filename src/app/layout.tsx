import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Vaxo Janiashvili | PORTFOLIO",
  description: "PORTFOLIO",
  icons: "https://cdn-icons-png.flaticon.com/512/1096/1096090.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <meta property="og:image" content="./common/components/_atoms/assets/profileImage.webp"/>
      </head>

      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
      {children}
      </body>
      </html>
  );
}
